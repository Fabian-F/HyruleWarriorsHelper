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

interface MapTransform {
  readonly zoom: number;
  readonly panX: number;
  readonly panY: number;
}

const TILE_ASPECT_RATIO = 16 / 11;
const NATIVE_TILE_WIDTH = 256;
const PAN_MARGIN_RATIO = 0.5;
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
  private dragging = false;
  private lastPointerX = 0;
  private lastPointerY = 0;
  private hasDragged = false;
  private pointerDownX = 0;
  private pointerDownY = 0;
  private pointerDownTileId: TileId | undefined;
  readonly snapTarget = signal<TileId | undefined>(undefined);
  readonly isSnapping = signal(false);
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
    const viewport = this.viewport().nativeElement;
    const { columns, rows } = getMapSize(this.map());

    const tileWidthByWidth = viewport.clientWidth / columns;

    const tileWidthByHeight = (viewport.clientHeight / rows) * TILE_ASPECT_RATIO;

    const tileWidth = Math.min(tileWidthByWidth, tileWidthByHeight);

    this.tileWidth.set(tileWidth);

    const focusedTileId = this.focusedTileId();

    if (focusedTileId) {
      this.focusTileImmediately(focusedTileId);
      return;
    }

    const mapWidth = columns * tileWidth;
    const mapHeight = rows * (tileWidth / TILE_ASPECT_RATIO);

    this.panX.set((viewport.clientWidth - mapWidth) / 2);

    this.panY.set((viewport.clientHeight - mapHeight) / 2);
  }

  protected onWheel(event: WheelEvent): void {
    event.preventDefault();

    this.cancelSnap();
    this.interactionStarted.emit();

    const oldZoom = this.zoom();

    const zoomFactor = event.deltaY < 0 ? 1.1 : 1 / 1.1;

    const newZoom = Math.min(Math.max(oldZoom * zoomFactor, 0.9), 5.25);

    if (newZoom === oldZoom) {
      return;
    }

    const viewport = this.viewport().nativeElement;
    const rect = viewport.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const mapX = (mouseX - this.panX()) / oldZoom;
    const mapY = (mouseY - this.panY()) / oldZoom;

    this.zoom.set(newZoom);

    const pan = this.clampPan(mouseX - mapX * newZoom, mouseY - mapY * newZoom);

    this.panX.set(pan.x);
    this.panY.set(pan.y);

    clearTimeout(this.wheelEndTimeout);
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

  private clampPan(panX: number, panY: number): { x: number; y: number } {
    const viewport = this.viewport().nativeElement;
    const { columns, rows } = getMapSize(this.map());

    const tileWidth = this.tileWidth();

    if (tileWidth === undefined) {
      return { x: panX, y: panY };
    }

    const mapWidth = columns * tileWidth * this.zoom();

    const mapHeight = rows * (tileWidth / TILE_ASPECT_RATIO) * this.zoom();

    const marginX = viewport.clientWidth * PAN_MARGIN_RATIO;
    const marginY = viewport.clientHeight * PAN_MARGIN_RATIO;

    return {
      x: Math.min(marginX, Math.max(viewport.clientWidth - mapWidth - marginX, panX)),
      y: Math.min(marginY, Math.max(viewport.clientHeight - mapHeight - marginY, panY)),
    };
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

    const viewport = this.viewport().nativeElement;
    const { row, column } = getTileCoordinates(tileId);

    const detailTileWidth = getDetailTileWidth(viewport.clientWidth);

    const targetZoom = detailTileWidth / tileWidth;

    const tileHeight = tileWidth / TILE_ASPECT_RATIO;

    const tileCenterX = (column + 0.5) * tileWidth;

    const tileCenterY = (row + 0.5) * tileHeight;

    return {
      zoom: targetZoom,
      panX: viewport.clientWidth / 2 - tileCenterX * targetZoom,
      panY: viewport.clientHeight / 2 - tileCenterY * targetZoom,
    };
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

    const viewport = this.viewport().nativeElement;

    const viewportCenterX = viewport.clientWidth / 2;
    const viewportCenterY = viewport.clientHeight / 2;

    const mapX = (viewportCenterX - this.panX()) / this.zoom();

    const mapY = (viewportCenterY - this.panY()) / this.zoom();

    const tileHeight = tileWidth / TILE_ASPECT_RATIO;

    const column = Math.floor(mapX / tileWidth);
    const row = Math.floor(mapY / tileHeight);

    return this.map().tiles.find((tile) => {
      const coordinates = getTileCoordinates(tile.id);

      return coordinates.column === column && coordinates.row === row;
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
}
