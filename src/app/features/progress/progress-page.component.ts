import { ProgressCompatibilityComponent } from './progress-compatibility.component';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../core/progress.service';
import { TileNotationService } from '../../core/tile-notation.service';
import { ProgressDirective } from '../../shared/directives/progress.directive';
import { characters, getCharacter } from '../../../data/characters';
import { progressCategoryOptions } from './progress-labels';
import {
  ProgressOverviewComponent,
  type ProgressOverviewSelection,
} from './progress-overview.component';
import { mapMetadata } from '../../../data/maps/map-metadata';
import type { ProgressEntry, ProgressLocation } from '../../../domain/progress/progress-catalog';
import type {
  ProgressChangePreview,
  ProgressImportMode,
} from '../../../domain/progress/progress-transfer';

@Component({
  selector: 'hwh-progress-page',
  imports: [
    RouterLink,
    ProgressDirective,
    ProgressOverviewComponent,
    ProgressCompatibilityComponent,
  ],
  templateUrl: './progress-page.component.html',
  styleUrl: './progress-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressPageComponent {
  protected readonly progress = inject(ProgressService);
  protected readonly notation = inject(TileNotationService);
  private readonly document = inject(DOCUMENT);
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('confirmation');
  protected readonly categories = progressCategoryOptions;
  protected readonly maps = mapMetadata;
  protected readonly characters = characters;
  protected readonly mapFilter = signal('');
  protected readonly characterFilter = signal('');
  protected readonly completionFilter = signal('all');
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  protected readonly category = signal('character');
  protected readonly search = signal('');
  protected readonly pageSize = 48;
  protected readonly limit = signal(this.pageSize);
  protected readonly busy = signal(false);
  protected readonly notice = signal<string | null>(null);
  protected readonly fileError = signal<string | null>(null);
  protected readonly file = signal<File | null>(null);
  protected readonly importMode = signal<ProgressImportMode>('merge');
  protected readonly preview = signal<ProgressChangePreview | null>(null);
  protected readonly showChanges = signal(false);
  protected readonly entriesByKey = computed(
    () =>
      new Map<string, ProgressEntry>(
        this.progress.catalog()?.entries.map((entry) => [entry.key, entry]) ?? [],
      ),
  );
  protected readonly matching = computed(() => {
    const query = this.search().trim().toLowerCase();
    return (this.progress.catalog()?.entries ?? [])
      .filter(
        (entry) =>
          (!this.category() || entry.category === this.category()) &&
          (!this.characterFilter() || entry.characterId === this.characterFilter()) &&
          (!this.mapFilter() ||
            entry.locations.some(
              (location) =>
                location.kind !== 'initial' &&
                (location.source.type === 'legend' ? 'legend' : location.source.mapId) ===
                  this.mapFilter(),
            )) &&
          (this.completionFilter() === 'all' ||
            this.progress.isCompleted(entry.key) === (this.completionFilter() === 'completed')) &&
          (!query ||
            this.entryLabel(entry).toLowerCase().includes(query) ||
            entry.locations.some((location) =>
              this.locationLabel(location).toLowerCase().includes(query),
            )),
      )
      .sort((a, b) =>
        this.entryLabel(a).localeCompare(this.entryLabel(b), 'en', {
          numeric: true,
          sensitivity: 'base',
        }),
      );
  });
  protected readonly displayed = computed(() => this.matching().slice(0, this.limit()));
  protected readonly allMatchingCompleted = computed(
    () =>
      this.matching().length > 0 &&
      this.matching().every((entry) => this.progress.isCompleted(entry.key)),
  );

  protected async toggleMatching(): Promise<void> {
    if (this.busy()) return;
    const keys = this.matching().map((entry) => entry.key);
    if (!keys.length) return;
    const checked = !this.allMatchingCompleted();
    this.busy.set(true);
    this.notice.set(null);
    try {
      await this.progress.setManyCompleted(keys, checked);
    } finally {
      this.busy.set(false);
    }
  }

  constructor() {
    this.destroyRef.onDestroy(() => {
      const preview = this.preview();
      if (preview) this.progress.cancel(preview);
    });
  }

  protected entryLabel(entry: ProgressEntry): string {
    if (entry.category === 'arank') {
      const location = entry.locations.find((location) => location.kind === 'a-rank');
      if (location?.kind === 'a-rank' && location.source.type === 'adventure') {
        const source = location.source;
        const mapName = mapMetadata.find((map) => map.id === source.mapId)?.name ?? source.mapId;
        return `${mapName} ${this.notation.format(source.tileId)}: A-Rank`;
      }
    }
    return entry.characterId && entry.category !== 'character'
      ? `${getCharacter(entry.characterId).name}: ${entry.label}`
      : entry.label;
  }
  protected keyLabel(key: string): string {
    const entry = this.entriesByKey().get(key);
    return entry ? this.checkboxLabel(entry) : 'Preserved entry: ' + key;
  }
  protected checkboxLabel(entry: ProgressEntry): string {
    const location = entry.locations[0];
    return location && entry.locations.length === 1
      ? `${this.entryLabel(entry)} - ${this.locationLabel(location)}${location.kind !== 'initial' && location.detail ? ' - ' + this.locationDetail(location) : ''}`
      : this.entryLabel(entry);
  }
  protected locationDetail(location: ProgressLocation): string {
    if (location.kind === 'initial') return '';
    return location.kind === 'skulltula'
      ? `Skulltula #${location.detail?.replace('skulltula-', '')}`
      : (location.detail ?? '');
  }
  protected locationLabel(location: ProgressLocation): string {
    if (location.kind === 'initial') return 'Available at the start';
    const source = location.source;
    if (source.type === 'legend') {
      const name = source.missionId.replace(/-s-/g, "'s ").replace(/-/g, ' ');
      return `Legend Mode - ${name[0].toUpperCase()}${name.slice(1)}`;
    }
    return `${mapMetadata.find((map) => map.id === source.mapId)?.name ?? source.mapId} - ${this.notation.format(source.tileId)}`;
  }
  protected locationRoute(location: ProgressLocation): string[] {
    if (location.kind === 'initial') return ['/legend'];
    const source = location.source;
    return source.type === 'legend'
      ? ['/legend', source.missionId]
      : ['/maps', source.mapId, source.tileId];
  }
  protected filterSelection(selection: ProgressOverviewSelection): void {
    this.category.set(selection.type === 'category' ? selection.id : '');
    this.mapFilter.set(selection.type === 'map' ? selection.id : '');
    this.characterFilter.set(selection.type === 'character' ? selection.id : '');
    this.completionFilter.set('all');
    this.search.set('');
    this.limit.set(this.pageSize);
    const heading = this.element.nativeElement.querySelector<HTMLElement>('#entries-heading');
    const reducedMotion = this.document.defaultView?.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    heading?.scrollIntoView?.({ block: 'start', behavior: reducedMotion ? 'instant' : 'smooth' });
    heading?.focus({ preventScroll: true });
  }
  protected setFilter(kind: 'map' | 'character' | 'completion', event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    (kind === 'map'
      ? this.mapFilter
      : kind === 'character'
        ? this.characterFilter
        : this.completionFilter
    ).set(value);
    this.limit.set(this.pageSize);
  }
  protected clearFilters(): void {
    this.category.set('');
    this.mapFilter.set('');
    this.characterFilter.set('');
    this.completionFilter.set('all');
    this.search.set('');
    this.limit.set(this.pageSize);
  }
  protected selectCategory(event: Event): void {
    this.category.set((event.target as HTMLSelectElement).value);
    this.limit.set(this.pageSize);
  }
  protected searchEntries(event: Event): void {
    this.search.set((event.target as HTMLInputElement).value);
    this.limit.set(this.pageSize);
  }
  protected selectFile(event: Event): void {
    this.file.set((event.target as HTMLInputElement).files?.[0] ?? null);
    this.fileError.set(null);
    this.notice.set(null);
  }
  protected selectImportMode(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'merge' || value === 'replace') this.importMode.set(value);
  }

  protected toggleChanges(event: Event): void {
    this.showChanges.set((event.target as HTMLDetailsElement).open);
  }

  protected async start(): Promise<void> {
    await this.perform(async () => {
      await this.progress.enable();
    });
  }
  protected async retry(): Promise<void> {
    await this.perform(async () => {
      await this.progress.reload();
    });
  }
  protected async previewImport(): Promise<void> {
    const file = this.file();
    if (!file) return;
    await this.perform(async () => {
      this.fileError.set(null);
      let json: string;
      try {
        json = await file.text();
      } catch {
        this.fileError.set('This file could not be read. Please select it again.');
        return;
      }
      const preview = await this.progress.prepareImport(json, this.importMode());
      if (preview) this.open(preview);
    });
  }
  protected async prepare(kind: 'reset' | 'stop'): Promise<void> {
    await this.perform(async () => {
      const preview = await (kind === 'reset'
        ? this.progress.prepareReset()
        : this.progress.prepareStop());
      if (preview) this.open(preview);
    });
  }
  private open(preview: ProgressChangePreview): void {
    if (this.destroyRef.destroyed) {
      this.progress.cancel(preview);
      return;
    }
    this.preview.set(preview);
    this.showChanges.set(false);
    // Preparation is finished; enable the dialog controls before native autofocus runs.
    this.busy.set(false);
    this.changeDetector.detectChanges();
    this.dialog().nativeElement.showModal();
  }
  protected cancel(event?: Event): void {
    event?.preventDefault();
    if (this.busy()) return;
    const preview = this.preview();
    if (preview) this.progress.cancel(preview);
    this.preview.set(null);
    this.dialog().nativeElement.close();
  }
  protected closed(): void {
    if (!this.dialog().nativeElement.open) {
      const preview = this.preview();
      if (preview) this.progress.cancel(preview);
      this.preview.set(null);
    }
  }
  protected async confirm(): Promise<void> {
    const preview = this.preview();
    if (!preview) return;
    await this.perform(async () => {
      await this.progress.confirm(preview);
      this.progress.cancel(preview);
      if (this.destroyRef.destroyed) return;
      this.preview.set(null);
      this.dialog().nativeElement.close();
    });
  }
  protected download(): void {
    this.fileError.set(null);
    this.notice.set(null);
    const json = this.progress.exportJson();
    if (!json) return;
    let url: string | undefined;
    try {
      url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
      const link = this.document.createElement('a');
      link.href = url;
      link.download = `hyrule-warriors-helper-progress-${new Date().toISOString().slice(0, 10)}.json`;
      this.document.body.appendChild(link);
      link.click();
      link.remove();
      if (this.preview())
        this.notice.set('Export download requested. No progress data was deleted.');
    } catch {
      this.fileError.set('The export could not be downloaded. Please try again.');
    } finally {
      if (url) setTimeout(() => URL.revokeObjectURL(url!), 1000);
    }
  }
  private async perform(operation: () => Promise<void>): Promise<void> {
    if (this.busy()) return;
    this.busy.set(true);
    this.notice.set(null);
    try {
      await operation();
    } finally {
      this.busy.set(false);
    }
  }
}
