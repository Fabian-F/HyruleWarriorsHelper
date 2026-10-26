import { DOCUMENT, Location } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, type Params, type UrlTree } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import {
  DEFAULT_TILE_NOTATION,
  formatTileId,
  getUrlTileNotation,
  isTileNotation,
  parseTileCoordinate,
  type TileNotation,
} from '../../domain/maps/tile-notation';
import type { TileId } from '../../domain/maps/tile.model';

export const TILE_NOTATION_STORAGE_KEY = 'hwh.tile-notation';

@Injectable({ providedIn: 'root' })
export class TileNotationService {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly location = inject(Location);
  private readonly preference = signal(this.readPreference());
  readonly selectedPreference = this.preference.asReadonly();
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => this.router.parseUrl(this.router.url)),
    ),
    { requireSync: true },
  );

  readonly mode = computed(
    () =>
      this.preference() ?? getUrlTileNotation(this.url().queryParamMap) ?? DEFAULT_TILE_NOTATION,
  );
  private pendingPreferenceChanges = 0;
  private preferenceChanges: Promise<void> = Promise.resolve();

  constructor() {
    effect(() => {
      const url = this.url();
      const preference = this.preference() ?? getUrlTileNotation(url.queryParamMap);
      if (!preference || this.pendingPreferenceChanges > 0 || !this.router.navigated) return;
      const tree = this.router.parseUrl(this.router.serializeUrl(url));
      this.applyNotation(tree, preference);
      if (this.router.serializeUrl(tree) !== this.router.url) {
        void this.router.navigateByUrl(tree, { replaceUrl: true });
      }
    });
  }

  format(id: TileId): string {
    return formatTileId(id, this.mode());
  }

  /** Null clears a previous non-default value when RouterLink merges parameters. */
  linkParams(params: Params = {}): Params {
    const result: Params = {
      ...params,
      tileNotation: this.mode() === 'row-column' ? 'row-column' : null,
    };
    delete result['positionOrder'];
    if (isTileNotation(result['positions'])) result['positions'] = 'true';
    return result;
  }

  /** Preserve old coordinate searches that did not specify their notation. */
  mapParams(params: Params = {}): Params {
    const tree = this.router.parseUrl(this.router.url);
    this.translateSearch(tree, this.mode());
    return this.linkParams({ ...tree.queryParams, ...params });
  }

  setPreference(preference: TileNotation | undefined): Promise<void> {
    this.pendingPreferenceChanges++;
    const change = this.preferenceChanges
      .then(() => this.changePreference(preference))
      .finally(() => {
        this.pendingPreferenceChanges--;
      });
    this.preferenceChanges = change.catch(() => {});
    return change;
  }

  private async changePreference(preference: TileNotation | undefined): Promise<void> {
    const tree = this.router.parseUrl(this.router.url);
    const next = preference ?? getUrlTileNotation(tree.queryParamMap) ?? DEFAULT_TILE_NOTATION;
    this.applyNotation(tree, next);
    const target = this.router.serializeUrl(tree);
    if (
      target !== this.router.url &&
      !(await this.router.navigateByUrl(tree, { replaceUrl: true }))
    )
      return;
    this.preference.set(preference);
    try {
      if (preference)
        this.document.defaultView?.localStorage.setItem(TILE_NOTATION_STORAGE_KEY, preference);
      else this.document.defaultView?.localStorage.removeItem(TILE_NOTATION_STORAGE_KEY);
    } catch {
      // The in-memory setting and URL still work when browser storage is blocked.
    }
  }

  shareUrl(tree: UrlTree = this.router.parseUrl(this.router.url)): string {
    const copy = this.router.parseUrl(this.router.serializeUrl(tree));
    this.applyNotation(copy, this.mode());
    const path = this.location.prepareExternalUrl(this.router.serializeUrl(copy));
    return new URL(path, this.document.location.href).href;
  }

  private applyNotation(tree: UrlTree, notation: TileNotation): void {
    this.translateSearch(tree, notation);
    if (notation === 'row-column') tree.queryParams['tileNotation'] = notation;
    else delete tree.queryParams['tileNotation'];
    delete tree.queryParams['positionOrder'];
    if (isTileNotation(tree.queryParams['positions'])) tree.queryParams['positions'] = 'true';
  }

  private translateSearch(tree: UrlTree, next: TileNotation): void {
    if (tree.root.children['primary']?.segments[0]?.path !== 'maps') return;
    const source = getUrlTileNotation(tree.queryParamMap) ?? DEFAULT_TILE_NOTATION;
    const coordinate = parseTileCoordinate(tree.queryParamMap.get('q') ?? '', source);
    if (coordinate) tree.queryParams['q'] = formatTileId(coordinate, next);
  }

  private readPreference(): TileNotation | undefined {
    try {
      const value = this.document.defaultView?.localStorage.getItem(TILE_NOTATION_STORAGE_KEY);
      return isTileNotation(value) ? value : undefined;
    } catch {
      return undefined;
    }
  }
}
