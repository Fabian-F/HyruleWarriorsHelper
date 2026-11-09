import { formatProgressPercentage } from '../../progress-percentage';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import type { ProgressCount } from '../../../../domain/progress/progress-statistics';

@Component({
  selector: 'hwh-progress-meter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="caption">
      <span>{{ label() }}</span
      ><span class="count"
        >{{ count().completed }} / {{ count().total }}
        <span class="percent">{{ percentage() }}</span></span
      >
    </div>
    @if (count().total) {
      <progress
        [max]="count().total"
        [value]="count().completed"
        [attr.aria-label]="label()"
        [attr.aria-valuetext]="count().completed + ' of ' + count().total + ' completed'"
      >
        {{ percentage() }}
      </progress>
    } @else {
      <span class="empty">No tracked goals</span>
    }
  `,
  styles: `
    :host {
      display: block;
      min-width: 0;
    }
    .caption {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.4rem 1rem;
      font-size: 0.8rem;
      line-height: 1.5;
    }
    .count {
      white-space: nowrap;
      font-family: 'JetBrains Mono', monospace;
      color: var(--accent-gold);
      font-size: 0.75rem;
    }
    .percent {
      color: var(--accent-subtle);
      margin-left: 0.4rem;
    }
    progress {
      display: block;
      width: 100%;
      height: 0.4rem;
      margin-top: 0.5rem;
      border: 0;
      border-radius: 1rem;
      overflow: hidden;
      background: var(--surface-border);
      accent-color: var(--accent-gold);
    }
    progress::-webkit-progress-bar {
      background: var(--surface-border);
    }
    progress::-webkit-progress-value {
      background: var(--accent-gold);
      border-radius: 1rem;
    }
    progress::-moz-progress-bar {
      background: var(--accent-gold);
      border-radius: 1rem;
    }
    .empty {
      font-size: 0.75rem;
      color: var(--accent-subtle);
    }
  `,
})
export class ProgressMeterComponent {
  readonly label = input.required<string>();
  readonly count = input.required<ProgressCount>();
  protected readonly percentage = computed(() => formatProgressPercentage(this.count()));
}
