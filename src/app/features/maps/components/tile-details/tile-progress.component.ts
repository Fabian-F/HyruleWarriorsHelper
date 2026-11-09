import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ProgressService } from '../../../../core/progress.service';
import {
  countProgress,
  progressSourceId,
} from '../../../../../domain/progress/progress-statistics';
import type { ProgressSource } from '../../../../../domain/progress/progress-keys';

@Component({
  selector: 'hwh-tile-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (progress.enabled() && progress.visible()) {
      @if (count(); as value) {
        <span
          [class.complete]="value.total > 0 && value.completed === value.total"
          [attr.aria-label]="'Recorded tile goals: ' + value.completed + ' of ' + value.total"
          [title]="'Progress: ' + value.completed + ' / ' + value.total"
          >{{ value.completed }} / {{ value.total }}</span
        >
      }
    }
  `,
  styles: `
    :host {
      display: block;
      white-space: nowrap;
      font:
        0.75rem 'JetBrains Mono',
        monospace;
    }
    span {
      color: var(--accent-subtle);
    }
    span.complete {
      color: var(--accent-gold);
    }
  `,
})
export class TileProgressComponent {
  protected readonly progress = inject(ProgressService);
  readonly source = input.required<ProgressSource>();
  protected readonly count = computed(() => {
    const scope = this.progress.statisticsIndex()?.sources.get(progressSourceId(this.source()));
    return scope ? countProgress(scope.keys, this.progress.completed()) : null;
  });
}
