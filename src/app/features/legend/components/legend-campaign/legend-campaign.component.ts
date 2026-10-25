import { getCampaignPoint } from '../../../../../domain/legend/campaign-layout';
import type { LegendMission } from '../../../../../domain/legend/legend-mission.model';
import { legendChapters } from '../../../../../data/legend/chapters';
import type { LegendChapterId } from '../../../../../domain/legend/legend-mission.model';
import {
  campaignNodes,
  campaignSize,
  campaignPaths,
  campaignGrid,
} from '../../../../../data/legend/campaign-layout';
import { legendMissions } from '../../../../../data/legend/missions';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'hwh-legend-campaign',
  imports: [RouterLink],
  templateUrl: './legend-campaign.component.html',
  styleUrl: './legend-campaign.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegendCampaignComponent {
  readonly selectedMission = input<LegendMission>();
  readonly backgroundClicked = output<void>();
  private readonly destroyRef = inject(DestroyRef);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly nodes = campaignNodes.map((node) => {
    const center = getCampaignPoint(node, campaignGrid);
    return {
      ...node,
      x: center.x - campaignGrid.nodeWidth / 2,
      centerYPercent: (center.y / campaignSize.height) * 100,
      mission: legendMissions.find((m) => m.id === node.missionId)!,
    };
  });
  readonly campaignGrid = campaignGrid;
  readonly campaignSize = campaignSize;
  readonly campaignPaths = campaignPaths;
  readonly scrollArea = viewChild<ElementRef<HTMLElement>>('scrollArea');
  readonly animationsReady = signal(false);
  private readonly viewportWidth = signal(0);
  readonly scrollPadding = computed(() => this.viewportWidth() / 2);
  readonly atStart = signal(true);
  readonly atEnd = signal(false);
  readonly dragging = signal(false);
  private mouseDrag?: {
    pointerId: number;
    startX: number;
    scrollLeft: number;
    target: Element;
  };
  private suppressDragClick = false;
  constructor() {
    effect((onCleanup) => {
      this.selectedMission();
      const frame = requestAnimationFrame(() => {
        this.centerSelectedMission();
      });
      onCleanup(() => cancelAnimationFrame(frame));
    });
    afterNextRender(() => {
      const area = this.scrollArea()!.nativeElement;
      const onWheel = (event: WheelEvent) => this.scrollWithWheel(event);
      const onClick = (event: MouseEvent) => {
        if (this.suppressDragClick && event.detail !== 0) {
          this.suppressDragClick = false;
          event.preventDefault();
          event.stopImmediatePropagation();
          return;
        }
        if (
          !this.selectedMission() ||
          !(event.target instanceof Element) ||
          event.target.closest('a') ||
          !event.target.closest('.campaign')
        )
          return;
        const bounds = area.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        )
          return;
        this.backgroundClicked.emit();
      };
      area.addEventListener('wheel', onWheel, { passive: false });
      area.addEventListener('click', onClick, true);
      let resizeTimer: ReturnType<typeof setTimeout>;
      const observer = new ResizeObserver(() => {
        this.viewportWidth.set(this.element.nativeElement.parentElement!.clientWidth);
        this.updateScroll();
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => this.centerSelectedMission(), 350);
      });
      observer.observe(area);
      this.viewportWidth.set(this.element.nativeElement.parentElement!.clientWidth);
      const initialFrame = requestAnimationFrame(() => {
        this.centerSelectedMission('instant');
        this.animationsReady.set(true);
      });
      this.destroyRef.onDestroy(() => {
        cancelAnimationFrame(initialFrame);
        area.removeEventListener('wheel', onWheel);
        area.removeEventListener('click', onClick, true);
        observer.disconnect();
        clearTimeout(resizeTimer);
      });
      this.updateScroll();
    });
  }
  centerSelectedMission(behavior: ScrollBehavior = this.animationsReady() ? 'smooth' : 'instant') {
    const id = this.selectedMission()?.id;
    const area = this.scrollArea()?.nativeElement;
    const node = area?.querySelector<HTMLElement>(`[data-mission="${id}"]`);
    if (area && node) {
      const stageWidth = this.element.nativeElement.parentElement!.clientWidth;
      const fraction = this.selectedMission() && matchMedia('(min-width: 701px)').matches ? 0.6 : 1;
      const finalWidth = stageWidth
        ? stageWidth * fraction - (area.offsetWidth - area.clientWidth)
        : area.clientWidth;
      area.scrollTo({
        left: Math.max(0, node.offsetLeft - (finalWidth - node.offsetWidth) / 2),
        top: Math.max(0, node.offsetTop - (area.clientHeight - node.offsetHeight) / 2),
        behavior,
      });
    }
    this.updateScroll();
  }
  chapterLabel(id: LegendChapterId) {
    return legendChapters[id];
  }
  updateScroll() {
    const e = this.scrollArea()?.nativeElement;
    if (e) {
      this.atStart.set(e.scrollLeft <= 1);
      this.atEnd.set(e.scrollLeft + e.clientWidth >= e.scrollWidth - 1);
    }
  }
  scroll(direction: number) {
    const e = this.scrollArea()!.nativeElement;
    e.scrollBy({ left: direction * e.clientWidth * 0.85, behavior: 'smooth' });
  }
  scrollWithWheel(event: WheelEvent) {
    if (event.ctrlKey) return;
    const area = this.scrollArea()!.nativeElement;
    const verticalGesture = Math.abs(event.deltaY) >= Math.abs(event.deltaX);
    if (verticalGesture && area.scrollHeight > area.clientHeight) return;
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? area.clientWidth : 1;
    if (
      delta === 0 ||
      (delta < 0 && area.scrollLeft <= 0) ||
      (delta > 0 && area.scrollLeft + area.clientWidth >= area.scrollWidth)
    )
      return;
    event.preventDefault();
    area.scrollBy({ left: delta * unit * 3, behavior: 'smooth' });
    this.updateScroll();
  }
  startMouseDrag(event: PointerEvent) {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;

    const area = this.scrollArea()!.nativeElement;
    const target =
      (event.target instanceof Element && event.target.closest('a')) ||
      (event.currentTarget as HTMLElement);
    this.suppressDragClick = false;
    this.mouseDrag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: area.scrollLeft,
      target,
    };
    target.setPointerCapture(event.pointerId);
  }
  moveMouseDrag(event: PointerEvent) {
    const drag = this.mouseDrag;
    if (!drag || event.pointerId !== drag.pointerId) return;
    if (!this.dragging() && Math.abs(event.clientX - drag.startX) < 6) return;
    this.dragging.set(true);
    this.suppressDragClick = true;
    event.preventDefault();
    this.scrollArea()!.nativeElement.scrollLeft = drag.scrollLeft + drag.startX - event.clientX;
    this.updateScroll();
  }
  endMouseDrag(event: PointerEvent) {
    if (event.pointerId !== this.mouseDrag?.pointerId) return;
    const target = this.mouseDrag.target;
    this.mouseDrag = undefined;
    this.dragging.set(false);
    if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
  }
  focusMap() {
    this.scrollArea()?.nativeElement.focus({ preventScroll: true });
  }
}
