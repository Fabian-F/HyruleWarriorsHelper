import { getTileCoordinates } from './tile-coordinates';
import { TILE_LETTERS, type TileId } from './tile.model';

export type TileNotation = 'column-row' | 'row-column';
export const DEFAULT_TILE_NOTATION: TileNotation = 'column-row';

export function isTileNotation(value: unknown): value is TileNotation {
  return value === 'column-row' || value === 'row-column';
}

export function formatTileId(id: TileId, notation: TileNotation): string {
  if (notation === 'column-row') return id;
  const { row, column } = getTileCoordinates(id);
  return `${TILE_LETTERS[row]}${column + 1}`;
}

/** Parse displayed coordinates only. Route parameters always contain stable IDs. */
export function parseTileCoordinate(text: string, notation: TileNotation): TileId | undefined {
  const match = /^([A-P])([1-9]|1[0-6])$/.exec(text.trim().toUpperCase());
  if (!match) return undefined;
  if (notation === 'column-row') return `${match[1]}${match[2]}` as TileId;
  const row = TILE_LETTERS.findIndex((letter) => letter === match[1]);
  return `${TILE_LETTERS[Number(match[2]) - 1]}${row + 1}`;
}

/** First valid explicit value wins; the combined legacy parameter is a fallback. */
export function getUrlTileNotation(params: {
  getAll(key: string): string[];
}): TileNotation | undefined {
  return (
    params.getAll('tileNotation').find(isTileNotation) ??
    params.getAll('positionOrder').find(isTileNotation) ??
    params.getAll('positions').find(isTileNotation)
  );
}
