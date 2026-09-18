const MAX_DETAIL_TILE_WIDTH = 512;
const DETAIL_VIEWPORT_PADDING = 16;

export function getDetailTileWidth(viewportWidth: number): number {
  return Math.max(0, Math.min(MAX_DETAIL_TILE_WIDTH, viewportWidth - DETAIL_VIEWPORT_PADDING * 2));
}
