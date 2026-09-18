import {
  afterNextRender,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { getMapSize, type MapDefinition } from '../../../../../domain/maps/map.model';
import { getTileCoordinates } from '../../../../../domain/maps/tile-coordinates';
import { MapTileComponent } from '../map-tile/map-tile.component';
import type { MapTile, TileId } from '../../../../../domain/maps/tile.model';
import { getDetailTileWidth } from '../../tile-detail-size';
import {
  clampPan,
  getFittedTileWidth,
  getScaledMapSize,
  getTileFocusTransform,
  getTilePositionAtViewportCenter,
  type MapTransform,
  type Point,
  type Size,
  zoomAtPoint,
} from './map-viewer.transform';

const NATIVE_TILE_WIDTH = 256;
const DRAG_THRESHOLD = 3;
const DETAIL_SNAP_THRESHOLD = 0.8;

@Component({
  selector: 'hwh-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrl: './map-viewer.component.scss',
  imports: [MapTileComponent],
})
export class MapViewerComponent {
  readonly map = input.required<MapDefinition>();
  readonly focusedTileId = input<TileId | undefined>();

  readonly tileSelected = output<TileId>();
  readonly interactionStarted = output<void>();

  private readonly viewport = viewChild.required<ElementRef<HTMLElement>>('viewport');
  private readonly mapElement = viewChild.required<ElementRef<HTMLElement>>('mapElement');

  readonly tileWidth = signal<number | undefined>(undefined);
  readonly zoom = signal(1);
  readonly panX = signal(0);
  readonly panY = signal(0);
  readonly snapTarget = signal<TileId | undefined>(undefined);
  readonly isSnapping = signal(false);
  private dragging = false;
  private hasDragged = false;
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
  readonly usePixelatedRendering = computed(
    () => this.effectiveTileWidth() > NATIVE_TILE_WIDTH * 1.25,
  );

  protected readonly getMapSize = getMapSize;
  protected readonly getTileCoordinates = getTileCoordinates;

  constructor() {
    afterNextRender(() => {
      const viewport = this.viewport().nativeElement;

      const resizeObserver = new ResizeObserver(() => {
        this.resizeMap();
      });

      resizeObserver.observe(viewport);

      this.resizeMap();

      return () => resizeObserver.disconnect();
    });
    effect(() => {
      const tileId = this.focusedTileId();
      const tileWidth = this.tileWidth();

      if (!tileId || tileWidth === undefined) {
        return;
      }

      this.focusTileImmediately(tileId);
    });
  }

  private resizeMap(): void {
    const { columns, rows } = getMapSize(this.map());
    const viewportSize = this.getViewportSize();

    const tileWidth = getFittedTileWidth(columns, rows, viewportSize);

    this.tileWidth.set(tileWidth);

    const focusedTileId = this.focusedTileId();

    if (focusedTileId) {
      this.focusTileImmediately(focusedTileId);
      return;
    }

    const mapSize = getScaledMapSize(columns, rows, tileWidth);

    this.panX.set((viewportSize.width - mapSize.width) / 2);

    this.panY.set((viewportSize.height - mapSize.height) / 2);
  }

  protected onWheel(event: WheelEvent): void {
    event.preventDefault();

    this.cancelSnap();
    this.interactionStarted.emit();

    const oldZoom = this.zoom();
    const zoomFactor = event.deltaY < 0 ? 1.1 : 1 / 1.1;
    const zoomMax = (getDetailTileWidth(this.getViewportSize().width) * 1.15) / this.tileWidth()!;
    const newZoom = Math.min(Math.max(oldZoom * zoomFactor, 0.9), zoomMax);

    if (newZoom === oldZoom) {
      return;
    }

    const rect = this.viewport().nativeElement.getBoundingClientRect();

    const target = zoomAtPoint(
      this.getCurrentTransform(),
      {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      },
      newZoom,
    );

    const pan = this.clampPan(target.panX, target.panY);

    this.zoom.set(target.zoom);
    this.panX.set(pan.x);
    this.panY.set(pan.y);

    this.clearWheelEndTimeout();

    this.wheelEndTimeout = setTimeout(() => {
      this.snapToCenterTileIfNeeded();
    }, 150);
  }

  private clearWheelEndTimeout(): void {
    clearTimeout(this.wheelEndTimeout);
    this.wheelEndTimeout = undefined;
  }

  protected onPointerDown(event: PointerEvent): void {
    if (event.button !== 0) {
      return;
    }

    this.clearWheelEndTimeout();

    this.cancelSnap();
    this.interactionStarted.emit();

    const element = event.target as HTMLElement;
    this.pointerDownTileId = element.closest<HTMLElement>('[data-tile-id]')?.dataset['tileId'] as
      TileId | undefined;

    this.dragging = true;
    this.hasDragged = false;

    this.pointerDownX = event.clientX;
    this.pointerDownY = event.clientY;

    this.lastPointerX = event.clientX;
    this.lastPointerY = event.clientY;

    this.viewport().nativeElement.setPointerCapture(event.pointerId);
  }

  protected onPointerMove(event: PointerEvent): void {
    if (!this.dragging) {
      return;
    }

    const distance = Math.hypot(
      event.clientX - this.pointerDownX,
      event.clientY - this.pointerDownY,
    );

    if (distance >= DRAG_THRESHOLD) {
      this.hasDragged = true;
    }

    const deltaX = event.clientX - this.lastPointerX;
    const deltaY = event.clientY - this.lastPointerY;

    const pan = this.clampPan(this.panX() + deltaX, this.panY() + deltaY);

    this.panX.set(pan.x);
    this.panY.set(pan.y);

    this.lastPointerX = event.clientX;
    this.lastPointerY = event.clientY;
  }

  protected onPointerUp(event: PointerEvent): void {
    if (!this.dragging) {
      return;
    }

    this.dragging = false;

    const viewport = this.viewport().nativeElement;

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    if (!this.hasDragged && this.pointerDownTileId) {
      this.focusTile(this.pointerDownTileId);
    } else if (this.hasDragged) {
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
    if (event.propertyName !== 'transform') {
      return;
    }

    const tileId = this.snapTarget();

    if (!tileId) {
      return;
    }

    this.isSnapping.set(false);
    this.snapTarget.set(undefined);

    this.tileSelected.emit(tileId);
  }

  private focusTile(tileId: TileId): void {
    this.cancelSnap();

    const target = this.getTileFocusTransform(tileId);

    if (!target) {
      return;
    }

    this.snapTarget.set(tileId);
    this.isSnapping.set(true);

    requestAnimationFrame(() => {
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

    return getTileFocusTransform(tileId, tileWidth, this.getViewportSize());
  }

  private cancelSnap(): void {
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
