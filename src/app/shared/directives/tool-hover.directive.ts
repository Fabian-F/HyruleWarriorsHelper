import { DOCUMENT } from '@angular/common';
import { DestroyRef, Directive, ElementRef, inject } from '@angular/core';

/** Let a tool's hover animation finish even after the pointer leaves. */
@Directive({
  selector: '[hwhToolHover]',
  host: { '(mouseenter)': 'animateIcon()' },
})
export class ToolHoverDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly document = inject(DOCUMENT);
  private animation?: Animation;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.animation?.cancel());
  }

  protected animateIcon(): void {
    const view = this.document.defaultView;
    if (
      !view?.matchMedia?.('(hover: hover) and (pointer: fine)').matches ||
      view.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      this.animation?.playState === 'running'
    )
      return;
    const icon = this.host.querySelector('hwh-icon');
    if (!icon?.animate) return;
    this.animation = icon.animate(
      [
        { rotate: '0deg', offset: 0 },
        { rotate: '14deg', offset: 0.35 },
        { rotate: '-5deg', offset: 0.65 },
        { rotate: '2deg', offset: 0.82 },
        { rotate: '0deg', offset: 1 },
      ],
      { duration: 520, easing: 'ease-out' },
    );
  }
}
