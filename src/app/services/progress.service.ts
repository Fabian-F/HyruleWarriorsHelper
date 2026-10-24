import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HWLegendTile, HWMap, HWMapTile, Tile } from '../models';
import { getTilePlacementString } from '../utils';

const STORAGE_KEY = 'hyrule-warriors-helper-progress';
const PROGRESS_VERSION = 1;

export type CollectibleCategory = 'Treasure' | 'Gold Skulltula' | 'Heart Piece / Container' | 'Weapon';

export interface Collectible {
  id: string;
  category: CollectibleCategory;
  name: string;
}

export interface ProgressSummary {
  collected: number;
  total: number;
  percentage: number;
}

interface ProgressFile {
  version: number;
  collected: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  private readonly statusSubject = new BehaviorSubject<string | null>(null);
  private readonly collectedSubject = new BehaviorSubject<Set<string>>(this.loadProgress());
  readonly status$ = this.statusSubject.asObservable();
  readonly progress$ = this.collectedSubject.asObservable();

  constructor() {
    window.addEventListener('storage', event => {
      if (event.key === STORAGE_KEY) {
        this.loadFromStorageEvent(event.newValue);
      }
    });
  }

  collectiblesForTile(map: HWMap, tile: Tile): Collectible[] {
    if (!('challenge' in tile)) {
      return [];
    }

    const mapTile = tile as HWMapTile;
    const tileId = getTilePlacementString(tile);
    const entries: Array<{ category: CollectibleCategory; name: string }> = [];

    if (map.isLegendMode) {
      const legendTile = tile as HWLegendTile;
      legendTile.heartpieces?.forEach(name => entries.push({ category: 'Heart Piece / Container', name }));
      legendTile.skulltulas?.forEach(name => entries.push({ category: 'Gold Skulltula', name }));
      legendTile.weapons?.forEach(name => entries.push({ category: 'Weapon', name }));
    } else {
      mapTile.rewards?.treasure?.forEach(name => entries.push({ category: 'Treasure', name }));
      mapTile.rewards?.skulltulas?.forEach(name => entries.push({ category: 'Gold Skulltula', name }));
    }

    const duplicates = new Map<string, number>();
    return entries.map(entry => {
      const duplicateKey = `${entry.category}\u0000${entry.name}`;
      const occurrence = duplicates.get(duplicateKey) ?? 0;
      duplicates.set(duplicateKey, occurrence + 1);
      return {
        ...entry,
        id: JSON.stringify([map.path, tileId, entry.category, entry.name, occurrence]),
      };
    });
  }

  summary(collectibles: Collectible[]): ProgressSummary {
    const collected = this.collectedSubject.value;
    const count = collectibles.reduce((total, item) => total + (collected.has(item.id) ? 1 : 0), 0);
    return {
      collected: count,
      total: collectibles.length,
      percentage: collectibles.length ? Math.round(count / collectibles.length * 100) : 0,
    };
  }

  isCollected(id: string): boolean {
    return this.collectedSubject.value.has(id);
  }

  toggle(id: string): void {
    const updated = new Set(this.collectedSubject.value);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    this.save(updated);
  }

  exportProgress(): string {
    const file: ProgressFile = {
      version: PROGRESS_VERSION,
      collected: [...this.collectedSubject.value].sort(),
    };
    return JSON.stringify(file, null, 2);
  }

  importProgress(contents: string): boolean {
    let parsed: unknown;
    try {
      parsed = JSON.parse(contents);
    } catch {
      this.statusSubject.next('That file is not valid JSON. Your current progress has not changed.');
      return false;
    }

    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      !('version' in parsed) ||
      parsed.version !== PROGRESS_VERSION ||
      !('collected' in parsed) ||
      !Array.isArray(parsed.collected) ||
      !parsed.collected.every(item => typeof item === 'string')
    ) {
      this.statusSubject.next('This progress file is not supported or is malformed. Your current progress has not changed.');
      return false;
    }

    const updated = new Set(this.collectedSubject.value);
    parsed.collected.forEach(id => updated.add(id));
    return this.save(updated);
  }

  clearProgress(): boolean {
    return this.save(new Set<string>());
  }

  clearStatus(): void {
    this.statusSubject.next(null);
  }

  announceStatus(message: string): void {
    this.statusSubject.next(message);
  }

  private loadProgress(): Set<string> {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        return new Set<string>();
      }

      const parsed: unknown = JSON.parse(saved);
      if (
        typeof parsed === 'object' &&
        parsed !== null &&
        'version' in parsed &&
        parsed.version === PROGRESS_VERSION &&
        'collected' in parsed &&
        Array.isArray(parsed.collected) &&
        parsed.collected.every(item => typeof item === 'string')
      ) {
        return new Set(parsed.collected);
      }

      this.statusSubject.next('Saved progress could not be read because it has an unsupported format. Export a backup before clearing browser data.');
    } catch {
      this.statusSubject.next('Saved progress could not be read. Check browser storage settings before continuing.');
    }
    return new Set<string>();
  }

  private loadFromStorageEvent(value: string | null): void {
    if (value === null) {
      this.collectedSubject.next(new Set<string>());
      return;
    }
    try {
      const parsed: unknown = JSON.parse(value);
      if (
        typeof parsed === 'object' &&
        parsed !== null &&
        'version' in parsed &&
        parsed.version === PROGRESS_VERSION &&
        'collected' in parsed &&
        Array.isArray(parsed.collected) &&
        parsed.collected.every(item => typeof item === 'string')
      ) {
        this.collectedSubject.next(new Set(parsed.collected));
        this.clearStatus();
      } else {
        this.statusSubject.next('Progress changed in another tab but could not be read due to an unsupported format.');
      }
    } catch {
      this.statusSubject.next('Progress changed in another tab but could not be read.');
    }
  }

  private save(progress: Set<string>): boolean {
    try {
      const file: ProgressFile = {
        version: PROGRESS_VERSION,
        collected: [...progress].sort(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(file));
      this.collectedSubject.next(progress);
      this.clearStatus();
      return true;
    } catch {
      this.statusSubject.next('Progress could not be saved to this device. Check available browser storage and export a backup.');
      return false;
    }
  }
}
