import type { MapTile, TileId } from '../../../../../domain/maps/tile.model';
import { getTileCoordinates } from '../../../../../domain/maps/tile-coordinates';
import { getDetailTileWidth } from '../../tile-detail-size';

const TILE_ASPECT_RATIO = 16 / 11;
const PAN_MARGIN_RATIO = 0.5;

export interface MapTransform {
  readonly zoom: number;
  readonly panX: number;
  readonly panY: number;
}

export interface Size {
  readonly width: number;
  readonly height: number;
}

export interface Point {
  readonly x: number;
  readonly y: number;
}

export type TileDirection = 'up' | 'right' | 'down' | 'left';

export interface FocusArea extends Size {
  readonly top: number;
}

export function getMobileFocusArea(
  viewport: Size,
  toolbarBottom: number,
  sheetHeight: number,
): FocusArea {
  const top = Math.min(viewport.height, Math.max(0, toolbarBottom));
  return { width: viewport.width, height: Math.max(0, viewport.height - top - sheetHeight), top };
}

export function getFocusTileWidth(area: FocusArea): number {
  return Math.min(
    getDetailTileWidth(area.width),
    Math.max(0, area.height - 24) * TILE_ASPECT_RATIO,
  );
}

export interface TilePosition {
  readonly row: number;
  readonly column: number;
}

export function getTileFocusTransform(
  tileId: TileId,
  tileWidth: number,
  viewport: Size,
  focusArea?: FocusArea,
): MapTransform {
  const { row, column } = getTileCoordinates(tileId);

  const detailTileWidth = focusArea
    ? Math.max(1, getFocusTileWidth(focusArea))
    : getDetailTileWidth(viewport.width);
  const zoom = detailTileWidth / tileWidth;
  const tileHeight = tileWidth / TILE_ASPECT_RATIO;

  const tileCenterX = (column + 0.5) * tileWidth;
  const tileCenterY = (row + 0.5) * tileHeight;

  return {
    zoom,
    panX: viewport.width / 2 - tileCenterX * zoom,
    panY:
      (focusArea ? focusArea.top + focusArea.height / 2 : viewport.height / 2) - tileCenterY * zoom,
  };
}

export function clampPan(pan: Point, mapSize: Size, viewportSize: Size): Point {
  const marginX = viewportSize.width * PAN_MARGIN_RATIO;
  const marginY = viewportSize.height * PAN_MARGIN_RATIO;

  return {
    x: Math.min(marginX, Math.max(viewportSize.width - mapSize.width - marginX, pan.x)),
    y: Math.min(marginY, Math.max(viewportSize.height - mapSize.height - marginY, pan.y)),
  };
}

export function getScaledMapSize(columns: number, rows: number, tileWidth: number, zoom = 1): Size {
  return {
    width: columns * tileWidth * zoom,
    height: rows * (tileWidth / TILE_ASPECT_RATIO) * zoom,
  };
}

export function getFittedTileWidth(columns: number, rows: number, viewportSize: Size): number {
  const tileWidthByWidth = viewportSize.width / columns;

  const tileWidthByHeight = (viewportSize.height / rows) * TILE_ASPECT_RATIO;

  return Math.min(tileWidthByWidth, tileWidthByHeight);
}

export function getTilePositionAtViewportCenter(
  transform: MapTransform,
  tileWidth: number,
  viewportSize: Size,
): TilePosition {
  const mapX = (viewportSize.width / 2 - transform.panX) / transform.zoom;

  const mapY = (viewportSize.height / 2 - transform.panY) / transform.zoom;

  const tileHeight = tileWidth / TILE_ASPECT_RATIO;

  return {
    column: Math.floor(mapX / tileWidth),
    row: Math.floor(mapY / tileHeight),
  };
}

export function zoomAtPoint(transform: MapTransform, point: Point, newZoom: number): MapTransform {
  const mapX = (point.x - transform.panX) / transform.zoom;

  const mapY = (point.y - transform.panY) / transform.zoom;

  return {
    zoom: newZoom,
    panX: point.x - mapX * newZoom,
    panY: point.y - mapY * newZoom,
  };
}

export function getAdjacentTilePosition(tileId: TileId, direction: TileDirection): TilePosition {
  const { row, column } = getTileCoordinates(tileId);

  switch (direction) {
    case 'up':
      return { row: row - 1, column };
    case 'right':
      return { row, column: column + 1 };
    case 'down':
      return { row: row + 1, column };
    case 'left':
      return { row, column: column - 1 };
  }
}

export function getAdjacentTile(
  tiles: readonly MapTile[],
  tileId: TileId,
  direction: TileDirection,
): MapTile | undefined {
  const target = getAdjacentTilePosition(tileId, direction);
  return tiles.find((tile) => {
    const position = getTileCoordinates(tile.id);
    return position.row === target.row && position.column === target.column;
  });
}
