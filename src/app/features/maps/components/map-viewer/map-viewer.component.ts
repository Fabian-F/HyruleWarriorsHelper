import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { getMapSize, type MapDefinition } from '../../../../../domain/maps/map.model';
import { getTileCoordinates } from '../../../../../domain/maps/tile-coordinates';
import { MapTileComponent } from '../map-tile/map-tile.component';
import type { MapTile, TileId } from '../../../../../domain/maps/tile.model';
import { TileDetailsLayout } from '../../services/tile-details-layout.service';
import { getDetailTileWidth } from '../../tile-detail-size';
import {
  clampPan,
  getAdjacentTile,
  getFittedTileWidth,
  getInitialMapTransform,
  getMobileFocusArea,
  getScaledMapSize,
  getTileFocusTransform,
  getTilePositionAtViewportCenter,
  type MapTransform,
  type Point,
  type Size,
  type TileDirection,
  zoomAtPoint,
} from './map-viewer.transform';

const NATIVE_TILE_WIDTH = 256;
const DRAG_THRESHOLD = 3;
const DETAIL_SNAP_THRESHOLD = 0.8;
const SWIPE_MIN_DISTANCE = 48;
const SWIPE_MAX_DURATION = 350;
const SWIPE_MIN_SPEED = 0.35;
const SWIPE_AXIS_RATIO = 1.5;

@Component({
  selector: 'hwh-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrl: './map-viewer.component.scss',
  imports: [MapTileComponent],
})
export class MapViewerComponent {
  readonly map = input.required<MapDefinition>();
  readonly searchActive = input(false);
  readonly matchingTiles = input<ReadonlySet<TileId>>(new Set());
  readonly focusedTileId = input<TileId | undefined>();

  readonly tileSelected = output<TileId>();
  readonly adjacentTileSelected = output<TileId>();
  readonly interactionStarted = output<void>();

  readonly layout = inject(TileDetailsLayout);
  private readonly destroyRef = inject(DestroyRef);
  private readonly footer = viewChild.required<ElementRef<HTMLElement>>('footer');
  private readonly footerHeight = signal(0);
  private readonly viewport = viewChild.required<ElementRef<HTMLElement>>('viewport');
  private readonly mapElement = viewChild.required<ElementRef<HTMLElement>>('mapElement');

  readonly tileWidth = signal<number | undefined>(undefined);
  readonly zoom = signal(1);
  readonly panX = signal(0);
  readonly panY = signal(0);
  readonly snapTarget = signal<TileId | undefined>(undefined);
  readonly isSnapping = signal(false);
  private snapAnimationFrame: number | undefined;
  private readonly initialOverview = signal(true);
  private previousViewportSize: Size | undefined;
  private readonly pointers = new Map<number, Point>();
  private swipeStart: { tileId: TileId; time: number; expanded: boolean } | undefined;
  private dragging = false;
  private hasDragged = false;
  private pointerZoomedIn = false;
  private lastPointerX = 0;
  private lastPointerY = 0;
  private pointerDownX = 0;
  private pointerDownY = 0;
  private pointerDownTileId: TileId | undefined;
  private wheelEndTimeout: ReturnType<typeof setTimeout> | undefined;

  readonly mapTransform = computed(
    () => `translate(${this.panX()}px, ${this.panY()}px) scale(${this.zoom()})`,
  );
  readonly effectiveTileWidth = computed(() => (this.tileWidth() ?? 0) * this.zoom());
  readonly usePixelatedRendering = computed(() => this.effectiveTileWidth() > NATIVE_TILE_WIDTH);

  protected readonly getMapSize = getMapSize;
  protected readonly getTileCoordinates = getTileCoordinates;

  constructor() {
    afterNextRender(() => {
      const viewport = this.viewport().nativeElement;

      viewport.focus({ preventScroll: true });

      const resizeObserver = new ResizeObserver(() => {
        this.resizeMap();
      });

      resizeObserver.observe(viewport);
      const footer = this.footer().nativeElement;
      const measureFooter = () => this.footerHeight.set(footer.getBoundingClientRect().height);
      const footerObserver = new ResizeObserver(measureFooter);
      footerObserver.observe(footer);
      measureFooter();

      this.resizeMap();

      this.destroyRef.onDestroy(() => {
        resizeObserver.disconnect();
        footerObserver.disconnect();
        this.clearWheelEndTimeout();
        if (this.snapAnimationFrame !== undefined) cancelAnimationFrame(this.snapAnimationFrame);
        this.layout.navigation.set(undefined);
      });
    });
    effect(() => {
      const mobile = this.layout.mobile();
      const top = this.layout.toolbarBottom();
      const footerHeight = this.footerHeight();
      this.layout.viewportHeight();
      const tileWidth = this.tileWidth();
      if (!this.initialOverview() || this.focusedTileId() || tileWidth === undefined) return;
      untracked(() => {
        const viewport = this.getViewportSize();
        if (viewport.width <= 0 || viewport.height <= 0) return;
        const { columns, rows } = getMapSize(this.map());
        this.applyTransform(
          getInitialMapTransform(
            columns,
            rows,
            tileWidth,
            viewport,
            mobile ? top : undefined,
            footerHeight,
          ),
        );
      });
    });
    effect(() => {
      const tileId = this.focusedTileId();
      if (tileId) this.initialOverview.set(false);
      const tileWidth = this.tileWidth();

      if (!tileId || tileWidth === undefined) {
        return;
      }

      this.layout.mobile();
      this.layout.toolbarBottom();
      this.layout.compactSheetHeight();
      const navigation = this.layout.navigation();
      untracked(() => {
        if (navigation) {
          if (navigation.to !== tileId) return;
          this.cancelSnap(false);
          this.focusTile(tileId, false);
        } else {
          this.cancelSnap();
          this.focusTileImmediately(tileId);
        }
      });
    });
  }

  private resizeMap(): void {
    const { columns, rows } = getMapSize(this.map());
    const viewportSize = this.getViewportSize();

    if (viewportSize.width <= 0 || viewportSize.height <= 0) {
      return;
    }

    const previousViewportSize = this.previousViewportSize;
    const previousTileWidth = this.tileWidth();
    const snapTarget = this.snapTarget();

    this.cancelSnap();
    this.previousViewportSize = viewportSize;

    const tileWidth = getFittedTileWidth(columns, rows, viewportSize);

    this.tileWidth.set(tileWidth);

    const focusedTileId = this.focusedTileId();

    if (focusedTileId) {
      this.focusTileImmediately(focusedTileId);
      return;
    }

    if (snapTarget) {
      this.focusTile(snapTarget);
      return;
    }

    if (previousViewportSize && previousTileWidth !== undefined) {
      this.zoom.update((zoom) => (zoom * previousTileWidth) / tileWidth);
      const pan = this.clampPan(
        this.panX() + (viewportSize.width - previousViewportSize.width) / 2,
        this.panY() + (viewportSize.height - previousViewportSize.height) / 2,
      );
      this.panX.set(pan.x);
      this.panY.set(pan.y);
      return;
    }

    this.applyTransform(
      getInitialMapTransform(
        columns,
        rows,
        tileWidth,
        viewportSize,
        this.layout.mobile() ? this.layout.toolbarBottom() : undefined,
        this.footerHeight(),
      ),
    );
  }

  fitMapToViewport(): void {
    this.initialOverview.set(false);
    const tileWidth = this.tileWidth();

    if (tileWidth === undefined) {
      return;
    }

    this.clearWheelEndTimeout();
    this.cancelSnap();
    this.interactionStarted.emit();

    const { columns, rows } = getMapSize(this.map());
    const viewportSize = this.getViewportSize();
    const zoom = getFittedTileWidth(columns, rows, viewportSize) / tileWidth;
    const mapSize = getScaledMapSize(columns, rows, tileWidth, zoom);

    const target = {
      zoom,
      panX: (viewportSize.width - mapSize.width) / 2,
      panY: (viewportSize.height - mapSize.height) / 2,
    };

    if (target.zoom !== this.zoom() || target.panX !== this.panX() || target.panY !== this.panY()) {
      this.isSnapping.set(true);

      this.snapAnimationFrame = requestAnimationFrame(() => {
        this.snapAnimationFrame = undefined;
        this.applyTransform(target);
      });
    }

    this.viewport().nativeElement.focus({ preventScroll: true });
  }

  protected onWheel(event: WheelEvent): void {
    this.initialOverview.set(false);
    event.preventDefault();

    const zoomFactor = event.deltaY < 0 ? 1.1 : 1 / 1.1;

    if (!this.zoomAtClientPoint(zoomFactor, { x: event.clientX, y: event.clientY })) {
      return;
    }

    this.clearWheelEndTimeout();

    if (zoomFactor > 1) {
      this.wheelEndTimeout = setTimeout(() => {
        this.snapToCenterTileIfNeeded();
      }, 150);
    }
  }

  private zoomAtClientPoint(zoomFactor: number, point: Point): boolean {
    this.cancelSnap();
    this.interactionStarted.emit();

    const oldZoom = this.zoom();
    const zoomMax = (getDetailTileWidth(this.getViewportSize().width) * 1.15) / this.tileWidth()!;
    const newZoom = Math.min(Math.max(oldZoom * zoomFactor, 0.9), zoomMax);

    if (newZoom === oldZoom) {
      return false;
    }

    const rect = this.viewport().nativeElement.getBoundingClientRect();

    const target = zoomAtPoint(
      this.getCurrentTransform(),
      {
        x: point.x - rect.left,
        y: point.y - rect.top,
      },
      newZoom,
    );

    const pan = this.clampPan(target.panX, target.panY);

    this.zoom.set(target.zoom);
    this.panX.set(pan.x);
    this.panY.set(pan.y);

    return true;
  }

  private clearWheelEndTimeout(): void {
    clearTimeout(this.wheelEndTimeout);
    this.wheelEndTimeout = undefined;
  }

  protected onPointerDown(event: PointerEvent): void {
    if (event.button !== 0) {
      return;
    }

    this.initialOverview.set(false);
    const tileId = this.snapTarget() || this.focusedTileId();
    this.swipeStart =
      event.pointerType === 'touch' && this.pointers.size === 0 && tileId
        ? { tileId, time: event.timeStamp, expanded: this.layout.expanded() }
        : undefined;

    this.clearWheelEndTimeout();

    this.cancelSnap();
    if (!this.layout.mobile() || !this.swipeStart) this.interactionStarted.emit();

    this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    this.viewport().nativeElement.setPointerCapture(event.pointerId);

    if (this.pointers.size > 1) {
      this.swipeStart = undefined;
      this.hasDragged = true;
      this.pointerDownTileId = undefined;
      return;
    }

    const element = event.target as HTMLElement;
    this.pointerDownTileId = element.closest<HTMLElement>('[data-tile-id]')?.dataset['tileId'] as
      TileId | undefined;

    this.dragging = true;
    this.hasDragged = false;
    this.pointerZoomedIn = false;

    this.pointerDownX = event.clientX;
    this.pointerDownY = event.clientY;

    this.lastPointerX = event.clientX;
    this.lastPointerY = event.clientY;
  }

  protected onPointerMove(event: PointerEvent): void {
    if (!this.dragging || !this.pointers.has(event.pointerId)) {
      return;
    }

    const previousPointers = [...this.pointers.values()];
    this.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (this.pointers.size > 1) {
      const [previousFirst, previousSecond] = previousPointers;
      const [first, second] = this.pointers.values();
      const previousDistance = Math.hypot(
        previousSecond.x - previousFirst.x,
        previousSecond.y - previousFirst.y,
      );
      const distance = Math.hypot(second.x - first.x, second.y - first.y);

      if (previousDistance > 0 && distance > 0 && distance !== previousDistance) {
        if (
          this.zoomAtClientPoint(distance / previousDistance, {
            x: (first.x + second.x) / 2,
            y: (first.y + second.y) / 2,
          })
        )
          this.pointerZoomedIn = distance > previousDistance;
      }

      return;
    }

    const distance = Math.hypot(
      event.clientX - this.pointerDownX,
      event.clientY - this.pointerDownY,
    );

    if (distance >= DRAG_THRESHOLD) {
      this.hasDragged = true;
    }

    if (this.layout.mobile() && this.swipeStart) return;

    const deltaX = event.clientX - this.lastPointerX;
    const deltaY = event.clientY - this.lastPointerY;

    const pan = this.clampPan(this.panX() + deltaX, this.panY() + deltaY);

    this.panX.set(pan.x);
    this.panY.set(pan.y);

    this.lastPointerX = event.clientX;
    this.lastPointerY = event.clientY;
  }

  protected onPointerUp(event: PointerEvent): void {
    if (!this.pointers.delete(event.pointerId)) {
      return;
    }

    const viewport = this.viewport().nativeElement;

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    if (this.pointers.size > 0) {
      const [remaining] = this.pointers.values();
      this.lastPointerX = this.pointerDownX = remaining.x;
      this.lastPointerY = this.pointerDownY = remaining.y;
      return;
    }

    this.dragging = false;

    const swipeStart = this.swipeStart;
    this.swipeStart = undefined;

    if (event.type === 'pointercancel' || event.type === 'lostpointercapture') {
      this.pointerDownTileId = undefined;
    }

    if (swipeStart && event.type === 'pointerup') {
      const deltaX = event.clientX - this.pointerDownX;
      const deltaY = event.clientY - this.pointerDownY;
      const distance = Math.max(Math.abs(deltaX), Math.abs(deltaY));
      const crossDistance = Math.min(Math.abs(deltaX), Math.abs(deltaY));
      const duration = event.timeStamp - swipeStart.time;

      if (
        distance >= SWIPE_MIN_DISTANCE &&
        duration > 0 &&
        duration <= SWIPE_MAX_DURATION &&
        distance / duration >= SWIPE_MIN_SPEED &&
        distance >= crossDistance * SWIPE_AXIS_RATIO
      ) {
        const direction: TileDirection =
          Math.abs(deltaX) > Math.abs(deltaY)
            ? deltaX > 0
              ? 'left'
              : 'right'
            : deltaY > 0
              ? 'up'
              : 'down';

        this.pointerDownTileId = undefined;
        if (this.layout.mobile()) this.layout.expanded.set(swipeStart.expanded);
        if (!this.navigateToAdjacentTile(swipeStart.tileId, direction)) {
          this.focusTileImmediately(swipeStart.tileId);
          if (!this.layout.mobile()) this.tileSelected.emit(swipeStart.tileId);
        }
        return;
      }
    }

    if (swipeStart && this.layout.mobile() && (this.hasDragged || event.type !== 'pointerup')) {
      this.focusTileImmediately(swipeStart.tileId);
      this.pointerDownTileId = undefined;
      return;
    }

    if (!this.hasDragged && this.pointerDownTileId) {
      this.focusTile(this.pointerDownTileId);
    } else if (
      this.hasDragged &&
      event.type === 'pointerup' &&
      (!this.layout.mobile() || this.pointerZoomedIn)
    ) {
      this.snapToCenterTileIfNeeded();
    }

    this.pointerDownTileId = undefined;
  }

  private clampPan(panX: number, panY: number): Point {
    const tileWidth = this.tileWidth();

    if (tileWidth === undefined) {
      return { x: panX, y: panY };
    }

    const { columns, rows } = getMapSize(this.map());

    return clampPan(
      { x: panX, y: panY },
      getScaledMapSize(columns, rows, tileWidth, this.zoom()),
      this.getViewportSize(),
    );
  }

  protected onSnapEnd(event: TransitionEvent): void {
    if (event.propertyName !== 'transform' || !this.isSnapping()) {
      return;
    }

    this.isSnapping.set(false);

    const tileId = this.snapTarget();
    this.snapTarget.set(undefined);

    if (tileId) this.completeTileFocus(tileId);
  }

  private completeTileFocus(tileId: TileId): void {
    if (this.layout.navigation()?.to === tileId) {
      this.layout.navigation.set(undefined);
    } else {
      this.tileSelected.emit(tileId);
    }
  }

  private focusTile(tileId: TileId, interrupt = true): void {
    if (interrupt) this.cancelSnap();

    const target = this.getTileFocusTransform(tileId);

    if (!target) {
      return;
    }

    if (target.zoom === this.zoom() && target.panX === this.panX() && target.panY === this.panY()) {
      // An unchanged transform has no transitionend event to commit the selection.
      this.completeTileFocus(tileId);
      return;
    }

    this.snapTarget.set(tileId);
    this.isSnapping.set(true);

    this.snapAnimationFrame = requestAnimationFrame(() => {
      this.snapAnimationFrame = undefined;
      this.applyTransform(target);
    });
  }

  private focusTileImmediately(tileId: TileId): void {
    const target = this.getTileFocusTransform(tileId);

    if (!target) {
      return;
    }

    this.isSnapping.set(false);
    this.snapTarget.set(undefined);

    this.applyTransform(target);
  }

  private applyTransform(transform: MapTransform): void {
    this.zoom.set(transform.zoom);
    this.panX.set(transform.panX);
    this.panY.set(transform.panY);
  }

  private getTileFocusTransform(tileId: TileId): MapTransform | undefined {
    const tileWidth = this.tileWidth();

    if (tileWidth === undefined) {
      return undefined;
    }

    const viewport = this.getViewportSize();
    const area = this.layout.mobile()
      ? getMobileFocusArea(viewport, this.layout.toolbarBottom(), this.layout.compactSheetHeight())
      : undefined;
    return getTileFocusTransform(tileId, tileWidth, viewport, area);
  }

  private cancelSnap(clearNavigation = true): void {
    if (clearNavigation) this.layout.navigation.set(undefined);
    if (this.snapAnimationFrame !== undefined) {
      cancelAnimationFrame(this.snapAnimationFrame);
      this.snapAnimationFrame = undefined;
    }

    if (!this.isSnapping()) {
      return;
    }

    const map = this.mapElement().nativeElement;

    const matrix = new DOMMatrixReadOnly(getComputedStyle(map).transform);

    map.style.transition = 'none';

    this.isSnapping.set(false);

    this.zoom.set(matrix.a);
    this.panX.set(matrix.e);
    this.panY.set(matrix.f);

    this.snapTarget.set(undefined);

    requestAnimationFrame(() => {
      map.style.removeProperty('transition');
    });
  }

  private isInDetailSnapRange(): boolean {
    const tileWidth = this.tileWidth();

    if (tileWidth === undefined) {
      return false;
    }

    const viewport = this.viewport().nativeElement;
    const detailTileWidth = getDetailTileWidth(viewport.clientWidth);

    const detailZoom = detailTileWidth / tileWidth;

    return this.zoom() >= detailZoom * DETAIL_SNAP_THRESHOLD;
  }

  private getCenterTile(): MapTile | undefined {
    const tileWidth = this.tileWidth();

    if (tileWidth === undefined) {
      return undefined;
    }

    const position = getTilePositionAtViewportCenter(
      this.getCurrentTransform(),
      tileWidth,
      this.getViewportSize(),
    );

    return this.map().tiles.find((tile) => {
      const coordinates = getTileCoordinates(tile.id);

      return coordinates.column === position.column && coordinates.row === position.row;
    });
  }

  private snapToCenterTileIfNeeded(): void {
    if (!this.isInDetailSnapRange()) {
      return;
    }

    const tile = this.getCenterTile();

    if (!tile) {
      return;
    }

    this.focusTile(tile.id);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.zoomOut();
      return;
    }

    const currentTarget = this.snapTarget() || this.focusedTileId();
    if (!currentTarget) return;

    let direction: TileDirection | undefined;

    switch (event.key) {
      case 'ArrowDown':
        direction = 'down';
        event.preventDefault();
        break;
      case 'ArrowUp':
        direction = 'up';
        event.preventDefault();
        break;
      case 'ArrowLeft':
        direction = 'left';
        event.preventDefault();
        break;
      case 'ArrowRight':
        direction = 'right';
        event.preventDefault();
        break;
    }

    if (!direction) return;

    this.navigateToAdjacentTile(currentTarget, direction);
  }

  navigateToAdjacentTile(currentTarget: TileId, direction: TileDirection): boolean {
    const tile = getAdjacentTile(this.map().tiles, currentTarget, direction);
    if (!tile) return false;

    if (this.layout.mobile()) {
      this.cancelSnap();
      if (
        !this.layout.expanded() &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        this.layout.navigation.set({ from: currentTarget, to: tile.id, direction });
      }
      this.adjacentTileSelected.emit(tile.id);
    } else {
      this.interactionStarted.emit();
      this.focusTile(tile.id);
    }
    return true;
  }

  zoomOutFromDetails(): void {
    if (this.tileWidth() === undefined) return;
    this.clearWheelEndTimeout();
    this.cancelSnap();
    const viewport = this.getViewportSize();
    const area = getMobileFocusArea(
      viewport,
      this.layout.toolbarBottom(),
      this.layout.compactSheetHeight(),
    );
    const zoom = Math.min(this.zoom(), Math.max(0.9, this.zoom() * 0.8));
    const target = zoomAtPoint(
      this.getCurrentTransform(),
      {
        x: viewport.width / 2,
        y: this.layout.mobile() ? area.top + area.height / 2 : viewport.height / 2,
      },
      zoom,
    );
    const pan = this.clampPan(target.panX, target.panY);
    const transform = { zoom: target.zoom, panX: pan.x, panY: pan.y };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.applyTransform(transform);
      return;
    }
    this.isSnapping.set(true);
    this.snapAnimationFrame = requestAnimationFrame(() => {
      this.snapAnimationFrame = undefined;
      this.applyTransform(transform);
    });
  }

  private zoomOut(): void {
    const currentZoom = this.zoom();

    if (currentZoom <= 2) {
      return;
    }

    this.cancelSnap();
    this.interactionStarted.emit();

    const viewportSize = this.getViewportSize();

    const target = zoomAtPoint(
      this.getCurrentTransform(),
      {
        x: viewportSize.width / 2,
        y: viewportSize.height / 2,
      },
      2,
    );

    const pan = this.clampPan(target.panX, target.panY);

    this.isSnapping.set(true);

    this.snapAnimationFrame = requestAnimationFrame(() => {
      this.snapAnimationFrame = undefined;
      this.applyTransform({
        zoom: target.zoom,
        panX: pan.x,
        panY: pan.y,
      });
    });
  }

  private getCurrentTransform(): MapTransform {
    return {
      zoom: this.zoom(),
      panX: this.panX(),
      panY: this.panY(),
    };
  }

  private getViewportSize(): Size {
    const viewport = this.viewport().nativeElement;

    return {
      width: viewport.clientWidth,
      height: viewport.clientHeight,
    };
  }
}
