import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../core/progress.service';
import { TileNotationService } from '../../core/tile-notation.service';
import { ProgressMeterComponent } from '../../shared/components/progress-meter/progress-meter.component';
import { characters } from '../../../data/characters';
import { mapMetadata } from '../../../data/maps/map-metadata';
import {
  summarizeProgress,
  type ProgressMapScope,
} from '../../../domain/progress/progress-statistics';
import type { ProgressCategory } from '../../../domain/progress/progress-catalog';
import type { CharacterId } from '../../../domain/character.model';
import { progressCategoryLabel } from './progress-labels';

export type ProgressOverviewSelection =
  | { readonly type: 'category'; readonly id: ProgressCategory }
  | { readonly type: 'map'; readonly id: ProgressMapScope }
  | { readonly type: 'character'; readonly id: CharacterId };

@Component({
  selector: 'hwh-progress-overview',
  imports: [ProgressMeterComponent, RouterLink],
  templateUrl: './progress-overview.component.html',
  styleUrl: './progress-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressOverviewComponent {
  protected readonly progress = inject(ProgressService);
  protected readonly notation = inject(TileNotationService);
  readonly selected = output<ProgressOverviewSelection>();
  protected readonly categoryLabel = progressCategoryLabel;
  protected readonly summary = computed(() => {
    const index = this.progress.statisticsIndex();
    return index ? summarizeProgress(index.all, this.progress.completed()) : null;
  });
  protected readonly maps = computed(() => {
    const index = this.progress.statisticsIndex();
    const completed = this.progress.completed();
    const options: { id: ProgressMapScope; name: string; route: string[] }[] = [
      { id: 'legend', name: 'Legend Mode', route: ['/legend'] },
      ...mapMetadata.map((map) => ({ id: map.id, name: map.name, route: ['/maps', map.id] })),
    ];
    return options.flatMap((map) => {
      const scope = index?.maps.get(map.id);
      return scope ? [{ ...map, summary: summarizeProgress(scope, completed) }] : [];
    });
  });
  protected readonly characters = computed(() => {
    const index = this.progress.statisticsIndex();
    const completed = this.progress.completed();
    return characters.flatMap((character) => {
      const scope = index?.characters.get(character.id);
      return scope ? [{ ...character, summary: summarizeProgress(scope, completed) }] : [];
    });
  });
}
