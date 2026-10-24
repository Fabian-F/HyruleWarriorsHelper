import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HWMap } from '../../models';
import { Maps } from 'src/assets/data/map-data/maps.data';
import { Collectible, ProgressService, ProgressSummary } from '../../services/progress.service';

interface MapProgress {
  map: HWMap;
  summary: ProgressSummary;
}

@Component({
  selector: 'hwh-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  @ViewChild('fileInput')
  fileInput?: ElementRef<HTMLInputElement>;

  readonly mapProgress$: Observable<MapProgress[]>;
  readonly overall$: Observable<ProgressSummary>;

  constructor(private progress: ProgressService) {
    this.mapProgress$ = this.progress.progress$.pipe(map(() => this.calculateMapProgress()));
    this.overall$ = this.progress.progress$.pipe(map(() => this.calculateOverall()));
  }

  private calculateMapProgress(): MapProgress[] {
    return Maps.map(map => ({
      map,
      summary: this.progress.summary(this.collectiblesForMap(map)),
    })).filter(item => item.summary.total > 0);
  }

  private calculateOverall(): ProgressSummary {
    return this.progress.summary(Maps.flatMap(map => this.collectiblesForMap(map)));
  }

  openImport(): void {
    this.fileInput?.nativeElement.click();
  }

  async importProgress(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }

    try {
      if (this.progress.importProgress(await file.text())) {
        this.progress.announceStatus('Progress imported and merged with your current checklist.');
      }
    } catch {
      this.progress.announceStatus('The selected file could not be read. Your current progress has not changed.');
    } finally {
      input.value = '';
    }
  }

  exportProgress(): void {
    const file = new Blob([this.progress.exportProgress()], { type: 'application/json' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'hwde-tracker-progress.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  clearProgress(): void {
    if (!window.confirm('Clear all saved collectible progress on this device? This cannot be undone unless you exported a backup.')) {
      return;
    }

    this.progress.clearProgress();
  }

  private collectiblesForMap(map: HWMap): Collectible[] {
    return map.tiles.flatMap(tile => this.progress.collectiblesForTile(map, tile));
  }
}
