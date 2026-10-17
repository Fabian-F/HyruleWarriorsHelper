import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'hwh-source-link',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<a
    [href]="url()"
    target="_blank"
    rel="noopener noreferrer"
    [title]="description()"
    [attr.aria-label]="description()"
    ><hwh-icon name="external-link"
  /></a>`,
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
    }
    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      box-sizing: border-box;
      border: 1px solid var(--surface-border);
      border-radius: 0.375rem;
      background: var(--surface-subtle);
      color: var(--accent-subtle);
      transition:
        color 180ms ease,
        border-color 180ms ease,
        background-color 180ms ease;
    }
    a:hover {
      color: var(--accent-gold);
      border-color: var(--accent-gold-muted);
      background: var(--surface-card);
    }
    a:focus-visible {
      outline: 2px solid var(--accent-gold);
      outline-offset: 2px;
    }
    hwh-icon {
      width: 1rem;
      height: 1rem;
      color: inherit;
    }
    @media (pointer: coarse) {
      a {
        width: 44px;
        height: 44px;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      a {
        transition: none;
      }
    }
  `,
})
export class SourceLinkComponent {
  readonly url = input.required<string>();
  readonly label = input.required<string>();
  readonly description = computed(() => `Source: ${this.label()} (opens in a new tab)`);
}
