import {
  afterNextRender,
  Component,
  computed,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { getMapSize, type MapDefinition } from '../../../../../domain/maps/map.model';
import { getTileCoordinates } from '../../../../../domain/maps/tile-coordinates';
import { MapTileComponent } from '../map-tile/map-tile.component';

const TILE_ASPECT_RATIO = 16 / 11;
const NATIVE_TILE_WIDTH = 256;
const PAN_MARGIN_RATIO = 0.5;

@Component({
  selector: 'hwh-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrl: './map-viewer.component.scss',
  imports: [MapTileComponent],
})
export class MapViewerComponent {
  readonly map = input.required<MapDefinition>();

  private readonly viewport = viewChild.required<ElementRef<HTMLElement>>('viewport');

  readonly tileWidth = signal<number | undefined>(undefined);

  readonly zoom = signal(1);
  readonly panX = signal(0);
  readonly panY = signal(0);
  private dragging = false;
  private lastPointerX = 0;
  private lastPointerY = 0;

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
  }

  private resizeMap(): void {
    const viewport = this.viewport().nativeElement;
    const { columns, rows } = getMapSize(this.map());

    const tileWidthByWidth = viewport.clientWidth / columns;

    const tileWidthByHeight = (viewport.clientHeight / rows) * TILE_ASPECT_RATIO;

    const tileWidth = Math.min(tileWidthByWidth, tileWidthByHeight);

    this.tileWidth.set(tileWidth);

    const mapWidth = columns * tileWidth;
    const mapHeight = rows * (tileWidth / TILE_ASPECT_RATIO);

    this.panX.set((viewport.clientWidth - mapWidth) / 2);

    this.panY.set((viewport.clientHeight - mapHeight) / 2);
  }

  protected onWheel(event: WheelEvent): void {
    event.preventDefault();

    const oldZoom = this.zoom();

    const zoomFactor = event.deltaY < 0 ? 1.1 : 1 / 1.1;

    const newZoom = Math.min(Math.max(oldZoom * zoomFactor, 1), 10);

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
  }

  protected onPointerDown(event: PointerEvent): void {
    if (event.button !== 0) {
      return;
    }

    this.dragging = true;
    this.lastPointerX = event.clientX;
    this.lastPointerY = event.clientY;

    this.viewport().nativeElement.setPointerCapture(event.pointerId);
  }

  protected onPointerMove(event: PointerEvent): void {
    if (!this.dragging) {
      return;
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
}
