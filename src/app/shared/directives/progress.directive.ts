import {
  Directive,
  ElementRef,
  Renderer2,
  ViewContainerRef,
  effect,
  inject,
  input,
} from '@angular/core';
import { ProgressService } from '../../core/progress.service';
import type { ProgressKey } from '../../../domain/progress/progress-keys';
import { ProgressCheckboxComponent } from '../components/progress-checkbox/progress-checkbox.component';

/** Use a noninteractive container. Nested interactive controls keep their own actions. */
@Directive({ selector: '[hwhProgress]' })
export class ProgressDirective {
  readonly key = input.required<ProgressKey | undefined>({ alias: 'hwhProgress' });
  readonly label = input('Mark as completed', { alias: 'progressLabel' });
  readonly alwaysVisible = input(false, { alias: 'progressAlwaysVisible' });
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);
  private readonly views = inject(ViewContainerRef);
  private readonly progress = inject(ProgressService);

  constructor() {
    if (
      this.host.matches(
        'a, button, summary, label, input, select, textarea, table, thead, tbody, tfoot, tr, ul, ol',
      ) ||
      this.host.closest('a, button, summary, label, [role="button"], [role="link"]')
    )
      throw new Error(
        'hwhProgress needs a noninteractive container outside links, buttons and table rows.',
      );
    effect((cleanup) => {
      const key = this.key();
      if (!key) return;
      if (!this.progress.enabled() || (!this.alwaysVisible() && !this.progress.visible())) return;
      const label = this.label();
      const checkbox = this.views.createComponent(ProgressCheckboxComponent);
      checkbox.setInput('key', key);
      checkbox.setInput('label', label);
      checkbox.setInput('alwaysVisible', this.alwaysVisible());
      this.renderer.addClass(this.host, 'progress-container');
      this.renderer.appendChild(this.host, checkbox.location.nativeElement);
      this.renderer.addClass(checkbox.location.nativeElement, 'progress-corner');
      const removeClickListener = this.renderer.listen(this.host, 'click', (event: MouseEvent) => {
        if (
          event.defaultPrevented ||
          (event.target instanceof Element &&
            event.target.closest('.progress-container') !== this.host) ||
          (event.target instanceof Element &&
            event.target.closest(
              'a, button, summary, label, input, select, textarea, [role="button"], [role="link"], [contenteditable]:not([contenteditable="false"]), hwh-progress-checkbox',
            ))
        )
          return;
        const input = checkbox.location.nativeElement.querySelector(
          'input',
        ) as HTMLInputElement | null;
        input?.click();
      });
      cleanup(() => {
        removeClickListener();
        checkbox.destroy();
        this.renderer.removeClass(this.host, 'progress-container');
      });
    });
  }
}
