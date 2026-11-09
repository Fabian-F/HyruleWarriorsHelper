import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ProgressService } from '../../../core/progress.service';
import {
  summarizeProgress,
  type ProgressScope,
} from '../../../../domain/progress/progress-statistics';
import { ProgressMeterComponent } from '../progress-meter/progress-meter.component';

@Component({
  selector: 'hwh-progress-summary',
  imports: [ProgressMeterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (progress.enabled() && progress.visible()) {
      @if (summary(); as value) {
        <section [attr.aria-label]="label()">
          @if (mode() === 'character') {
            <hwh-progress-meter [label]="label()" [count]="value.goals" />
            <p>
              Character unlock, weapons, outfits and hearts. Character and default weapon
              count together.
            </p>
          } @else {
            @if (value.aRanks.total) {
              <hwh-progress-meter label="Recorded A-Ranks" [count]="value.aRanks" />
            }
            <hwh-progress-meter
              label="Recorded Rewards"
              [count]="value.rewards"
            />
          }
        </section>
      }
    }
  `,
  styles: `
    :host {
      display: block;
      container-type: inline-size;
    }
    section {
      padding: 0.85rem;
      margin-block: 0.25rem 0.75rem;
      background: var(--surface-subtle);
      border: 1px solid var(--surface-border);
      border-radius: 0.4rem;
    }
    hwh-progress-meter + hwh-progress-meter {
      margin-top: 0.8rem;
    }
    @container (min-width: 420px) {
      section {
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 2rem;
      }
      section:has(hwh-progress-meter + hwh-progress-meter)::before {
        content: '';
        position: absolute;
        top: 0.85rem;
        bottom: 0.85rem;
        left: 50%;
        width: 1px;
        background: var(--surface-border);
        transform: translateX(-50%);
      }
      hwh-progress-meter + hwh-progress-meter {
        margin-top: 0;
      }
      p {
        grid-column: 1 / -1;
      }
    }
    p {
      color: var(--accent-subtle);
      font-size: 0.7rem;
      line-height: 1.6;
      margin: 0.65rem 0 0;
    }
  `,
})
export class ProgressSummaryComponent {
  protected readonly progress = inject(ProgressService);
  readonly scope = input<ProgressScope>();
  readonly label = input('Recorded progress');
  readonly mode = input<'locations' | 'character'>('locations');
  protected readonly summary = computed(() => {
    const scope = this.scope();
    return scope ? summarizeProgress(scope, this.progress.completed()) : null;
  });
}
