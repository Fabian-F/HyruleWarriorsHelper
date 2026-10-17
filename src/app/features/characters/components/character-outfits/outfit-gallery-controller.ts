import { DOCUMENT } from '@angular/common';
import {
  DestroyRef,
  Injector,
  afterRenderEffect,
  afterNextRender,
  inject,
  signal,
  untracked,
} from '@angular/core';

export class OutfitGalleryController {
  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  private animation: Animation | undefined;
  private animationRevision = 0;
  private scrollFrame: number | undefined;
  private resizeObserver: ResizeObserver | undefined;
  private readonly observedElements = new Set<Element>();
  private galleryWidth = 0;
  readonly renderedExpanded = signal(false);
  readonly collapsedHeight = signal<number | null>(null);
  readonly columns = signal(1);
  readonly expanded = signal(false);

  constructor(
    private readonly viewport: () => HTMLElement | undefined,
    private readonly gallery: () => HTMLElement | undefined,
    private readonly outfitCount: () => number,
  ) {
    afterNextRender(() => {
      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(() => {
          const previousColumns = this.columns();
          this.updateColumns();
          if (this.columns() === previousColumns) this.updateCollapsedHeight();
        });
      }
      this.updateColumns();
      this.observeSizes();
    });
    afterRenderEffect(() => {
      this.gallery();
      this.outfitCount();
      this.columns();
      this.renderedExpanded();
      untracked(() => {
        this.observeSizes();
        this.updateCollapsedHeight();
      });
    });
    inject(DestroyRef).onDestroy(() => {
      this.cancelAnimation();
      this.resizeObserver?.disconnect();
      this.observedElements.clear();
    });
  }

  private observeSizes(): void {
    const gallery = this.gallery();
    if (!gallery || !this.resizeObserver) return;
    const targets = new Set<Element>([
      gallery,
      ...Array.from(gallery.children).slice(0, this.columns()),
    ]);
    for (const previous of this.observedElements) {
      if (!targets.has(previous)) {
        this.resizeObserver.unobserve(previous);
        this.observedElements.delete(previous);
      }
    }
    for (const target of targets) {
      if (this.observedElements.has(target)) continue;
      this.resizeObserver.observe(target);
      this.observedElements.add(target);
    }
  }

  private updateCollapsedHeight(): void {
    const height = this.measureCollapsedHeight();
    this.collapsedHeight.set(height > 0 ? height : null);
  }

  reset(): void {
    this.cancelAnimation();
    this.expanded.set(false);
    this.renderedExpanded.set(false);
  }

  updateColumns(): void {
    const gallery = this.gallery();
    const window = this.document.defaultView;
    if (!gallery || !window) return;
    const width = gallery.clientWidth;
    if (width > 0 && width !== this.galleryWidth) {
      this.galleryWidth = width;
      this.cancelAnimation();
      this.renderedExpanded.set(this.expanded());
      const tracks = window.getComputedStyle(gallery).gridTemplateColumns;
      this.columns.set(tracks.split(/\s+/).filter(Boolean).length || 1);
    }
  }

  toggleGallery(): void {
    const viewport = this.viewport();
    const gallery = this.gallery();
    if (!viewport || !gallery) return;
    const expand = !this.expanded();
    const reducedMotion =
      this.document.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    this.animateGallery(expand, reducedMotion);
    if (!expand) this.scrollToHeading(reducedMotion);
  }

  private animateGallery(expand: boolean, reducedMotion: boolean): void {
    const viewport = this.viewport();
    const gallery = this.gallery();
    if (!viewport || !gallery) return;
    const fromHeight = viewport.getBoundingClientRect().height;
    this.cancelAnimation();
    const revision = this.animationRevision;
    this.expanded.set(expand);
    if (expand) this.renderedExpanded.set(true);
    afterNextRender(
      () => {
        if (revision !== this.animationRevision) return;
        const toHeight = expand ? gallery.scrollHeight : this.measureCollapsedHeight();
        if (reducedMotion || !viewport.animate) {
          this.renderedExpanded.set(expand);
          return;
        }
        const animation = viewport.animate(
          [{ height: `${fromHeight}px` }, { height: `${toHeight}px` }],
          { duration: 300, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' },
        );
        this.animation = animation;
        animation.onfinish = () => {
          if (revision !== this.animationRevision) return;
          this.renderedExpanded.set(expand);
          afterNextRender(
            () => {
              if (revision === this.animationRevision) {
                animation.cancel();
                this.animation = undefined;
              }
            },
            { injector: this.injector },
          );
        };
      },
      { injector: this.injector },
    );
  }

  private scrollToHeading(reducedMotion: boolean): void {
    const viewport = this.viewport();
    const window = this.document.defaultView;
    if (!viewport || !window) return;
    const heading = viewport.closest('section')?.querySelector<HTMLElement>('h2') ?? viewport;
    const headerBottom = this.document.querySelector('header')?.getBoundingClientRect().bottom ?? 0;
    const top = heading.getBoundingClientRect().top;
    const offset = headerBottom + 24;
    if (top >= offset) return;
    const start = window.scrollY;
    const target = Math.max(0, start + top - offset);
    if (reducedMotion) {
      window.scrollTo({ top: target, behavior: 'instant' });
      return;
    }
    const started = window.performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, Math.max(0, (now - started) / 180));
      const eased = 1 - (1 - progress) ** 3;
      window.scrollTo({ top: start + (target - start) * eased, behavior: 'instant' });
      this.scrollFrame = progress < 1 ? window.requestAnimationFrame(step) : undefined;
    };
    this.scrollFrame = window.requestAnimationFrame(step);
  }

  private measureCollapsedHeight(): number {
    const gallery = this.gallery();
    if (!gallery) return 0;
    const top = gallery.getBoundingClientRect().top;
    const firstRow = Array.from(gallery.children).slice(0, this.columns());
    const rowHeight = Math.max(
      0,
      ...firstRow.map((card) => card.getBoundingClientRect().bottom - top),
    );
    const viewport = this.viewport();
    const window = this.document.defaultView;
    let previewHeight = 0;
    if (this.outfitCount() > this.columns() && viewport && window) {
      const previewRem = Number.parseFloat(
        window.getComputedStyle(viewport).getPropertyValue('--outfit-preview-height-rem'),
      );
      const rootFontSize = Number.parseFloat(
        window.getComputedStyle(this.document.documentElement).fontSize,
      );
      if (Number.isFinite(previewRem) && Number.isFinite(rootFontSize)) {
        previewHeight = previewRem * rootFontSize;
      }
    }
    return rowHeight > 0 ? rowHeight + previewHeight : 0;
  }

  private cancelAnimation(): void {
    if (this.scrollFrame !== undefined) {
      this.document.defaultView?.cancelAnimationFrame(this.scrollFrame);
      this.scrollFrame = undefined;
    }
    this.animationRevision++;
    this.animation?.cancel();
    this.animation = undefined;
  }
}
