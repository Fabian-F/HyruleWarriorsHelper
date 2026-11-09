import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProgressService } from '../../core/progress.service';
import { ProgressCheckboxComponent } from '../../shared/components/progress-checkbox/progress-checkbox.component';

@Component({
  selector: 'hwh-progress-compatibility',
  imports: [ProgressCheckboxComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (progress.enabled()) {
      @if (progress.compatibility().unresolved.length; as count) {
        <section aria-labelledby="preserved-heading">
          <h2 id="preserved-heading">
            {{ count }} preserved {{ count === 1 ? 'entry' : 'entries' }}
          </h2>
          <p>
            Some saved entries are not recognized by the current game data. Your other progress is
            available as usual. These marks are kept in this browser and in every export, but do not
            count towards the current totals. They can become available again after a data
            correction. Export a backup before replacing or resetting progress.
          </p>
          <details>
            <summary>View preserved entries</summary>
            <ul>
              @for (key of progress.compatibility().unresolved; track key) {
                <li>
                  <code>{{ key }}</code>
                </li>
              }
            </ul>
          </details>
        </section>
      }
      @if (progress.migrated().length) {
        <section aria-labelledby="mapped-heading">
          <h2 id="mapped-heading">Updated entry identities</h2>
          <p>
            Saved entries were matched to their current identities. Completion marks were kept;
            exports use the updated identities.
          </p>
          <details>
            <summary>View matched entries</summary>
            <ul>
              @for (change of progress.migrated(); track change.from) {
                <li>
                  <code>{{ change.from }}</code> -> <code>{{ change.to }}</code>
                </li>
              }
            </ul>
          </details>
        </section>
      }
      @if (progress.compatibility().differences.length; as count) {
        <section aria-labelledby="relationships-heading">
          <h2 id="relationships-heading">
            {{ count }} linked {{ count === 1 ? 'pair' : 'pairs' }} to review
          </h2>
          <p>
            Some A-Ranks and their currently exclusive rewards have different marks, for example
            after a game-data correction. Your marks have been kept unchanged. Changing either
            checkbox applies the current linking rules to that pair.
          </p>
          <details>
            <summary>Review linked entries</summary>
            <ul>
              @for (pair of progress.compatibility().differences; track pair.aRankKey) {
                <li class="pair">
                  <div>
                    <span>{{ label(pair.aRankKey) }}</span
                    ><hwh-progress-checkbox
                      [key]="pair.aRankKey"
                      [alwaysVisible]="true"
                      [label]="'Completed: ' + label(pair.aRankKey)"
                    />
                  </div>
                  <div>
                    <span>{{ label(pair.rewardKey) }}</span
                    ><hwh-progress-checkbox
                      [key]="pair.rewardKey"
                      [alwaysVisible]="true"
                      [label]="'Collected: ' + label(pair.rewardKey)"
                    />
                  </div>
                </li>
              }
            </ul>
          </details>
        </section>
      }
    }
  `,
  styles: `
    :host {
      display: block;
    }
    section {
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid var(--accent-gold-muted);
      border-radius: 0.5rem;
      background: var(--surface-base);
    }
    h2 {
      font:
        600 1.1rem 'Space Grotesk',
        sans-serif;
      margin: 0;
    }
    p,
    li {
      font-size: 0.8rem;
      line-height: 1.7;
      color: var(--accent-subtle);
    }
    summary {
      cursor: pointer;
      color: var(--accent-gold);
      font-size: 0.85rem;
      padding: 0.5rem 0;
    }
    code {
      overflow-wrap: anywhere;
    }
    ul {
      padding-left: 1.25rem;
    }
    .pair {
      border-top: 1px solid var(--surface-border);
      padding: 0.5rem 0;
    }
    .pair div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }
    summary:focus-visible {
      outline: 2px solid var(--accent-gold);
      outline-offset: 3px;
    }
  `,
})
export class ProgressCompatibilityComponent {
  protected readonly progress = inject(ProgressService);
  protected label(key: string): string {
    return this.progress.catalog()?.entries.find((entry) => entry.key === key)?.label ?? key;
  }
}
