import { TILE_LETTERS, type TileId, type TileLetter } from './tile.model';

export interface TileCoordinates {
  readonly row: number;
  readonly column: number;
}

export function getTileCoordinates(tileId: TileId): TileCoordinates {
  const tileLetter = tileId.at(0)! as TileLetter;
  const tileNumber = +tileId.slice(1);

  return {
    row: tileNumber - 1,
    column: TILE_LETTERS.indexOf(tileLetter),
  };
}

export function getTileId(coordinates: TileCoordinates) {
  return `${TILE_LETTERS[coordinates.column]}${coordinates.row + 1}`;
}
