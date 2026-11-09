import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { ProgressService } from '../../../core/progress.service';
import type { ProgressKey } from '../../../../domain/progress/progress-keys';

@Component({
  selector: 'hwh-progress-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (shown()) {
      <div class="control" (click)="$event.stopPropagation()" (keydown)="$event.stopPropagation()">
        <label [title]="label()">
          <input
            type="checkbox"
            [value]="key()"
            [attr.aria-label]="label()"
            [checked]="progress.isCompleted(key())"
            [disabled]="busy()"
            (change)="change($event)"
          />
        </label>
        @if (error(); as message) {
          <span class="error" role="alert">{{ message }}</span>
        }
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
    }
    .control {
      position: relative;
    }
    label {
      display: grid;
      place-items: center;
      width: 2.75rem;
      height: var(--progress-checkbox-hit-height, 2.75rem);
      cursor: pointer;
    }
    :host(.progress-corner) label {
      place-items: end;
    }
    input {
      box-sizing: border-box;
      width: 1.08rem;
      height: 1.08rem;
      margin: 0;
      accent-color: var(--accent-gold);
      cursor: pointer;
    }
    input:not(:checked) {
      appearance: none;
      background: linear-gradient(var(--surface-card), var(--surface-card)), var(--surface-base);
      border: 1px solid var(--surface-border);
      border-radius: 3px;
    }
    input:focus-visible {
      outline: 2px solid var(--accent-gold);
      outline-offset: 4px;
    }
    input:disabled {
      cursor: wait;
    }
    .error {
      position: absolute;
      z-index: 2;
      right: 0;
      bottom: 100%;
      width: min(18rem, 65vw);
      padding: 0.75rem;
      border: 1px solid var(--difficulty-red);
      border-radius: 0.375rem;
      background: var(--surface-base);
      font-size: 0.8rem;
    }
  `,
})
export class ProgressCheckboxComponent {
  protected readonly progress = inject(ProgressService);
  readonly key = input.required<ProgressKey>();
  readonly label = input('Mark as completed');
  readonly alwaysVisible = input(false);
  protected readonly shown = computed(
    () => this.progress.enabled() && (this.alwaysVisible() || this.progress.visible()),
  );
  protected readonly busy = signal(false);
  protected readonly error = signal<string | null>(null);

  protected async change(event: Event): Promise<void> {
    event.stopPropagation();
    const input = event.target as HTMLInputElement;
    const key = this.key();
    this.busy.set(true);
    this.error.set(null);
    try {
      if (!(await this.progress.setCompleted(key, input.checked)))
        this.error.set(this.progress.error()?.message ?? 'The change could not be saved.');
    } finally {
      input.checked = this.progress.isCompleted(key);
      this.busy.set(false);
    }
  }
}
