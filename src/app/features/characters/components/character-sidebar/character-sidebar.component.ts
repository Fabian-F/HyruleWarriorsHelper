import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { ProgressService } from '../../../../core/progress.service';
import {
  countProgress,
  type ProgressCount,
} from '../../../../../domain/progress/progress-statistics';
import { formatProgressPercentage } from '../../../../shared/progress-percentage';
import type { Character, CharacterId } from '../../../../../domain/character.model';
import { getEnemySrc } from '../../../../shared/assets';
import { SelectionSidebarComponent } from '../../../../shared/components/selection-sidebar/selection-sidebar.component';

@Component({
  selector: 'hwh-character-sidebar',
  imports: [SelectionSidebarComponent],
  templateUrl: './character-sidebar.component.html',
  styleUrl: './character-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterSidebarComponent {
  private readonly progress = inject(ProgressService);
  readonly progressValues = computed(() => {
    if (!this.progress.enabled() || !this.progress.visible()) return null;
    const index = this.progress.statisticsIndex();
    if (!index) return null;
    const completed = this.progress.completed();
    const display = (count: ProgressCount) => ({
      percentage: formatProgressPercentage(count),
      complete: count.total > 0 && count.completed === count.total,
    });
    return {
      total: display(
        countProgress(
          new Set([...index.characters.values()].flatMap((scope) => [...scope.keys])),
          completed,
        ),
      ),
      characters: new Map(
        [...index.characters].map(([id, scope]) => [
          id,
          display(countProgress(scope.keys, completed)),
        ]),
      ),
    };
  });
  readonly character = input.required<Character>();
  readonly characters = input.required<readonly Character[]>();
  readonly query = input('');
  readonly queryChange = output<string>();
  readonly characterSelected = output<CharacterId>();
  readonly enemySrc = getEnemySrc;
}
