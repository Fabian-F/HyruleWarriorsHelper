import { MapTile } from './tile.model';
import { getTileCoordinates } from './tile-coordinates';

export type MapId =
  | 'adventure'
  | 'great-sea'
  | 'master-quest'
  | 'master-wind-waker'
  | 'twilight'
  | 'termina'
  | 'koholint-island'
  | 'grand-travels'
  | 'lorule'
  | 'rewards';

export type MapDifficulty = 'easy' | 'medium' | 'hard' | 'hero';

export interface MapMetadata {
  readonly id: MapId;
  readonly name: string;
  readonly extras?: string;
  readonly tileCount: number;
  readonly difficulty: MapDifficulty;
}

export interface MapDefinition {
  readonly id: MapId;
  readonly name: string;
  readonly difficulty: MapDifficulty;
  readonly extras?: string;
  readonly tiles: readonly MapTile[];
}

export interface MapSize {
  rows: number;
  columns: number;
}

export function getMapSize(mapDefinition: MapDefinition): MapSize {
  let heighestRow = 0;
  let heighestColumn = 0;

  mapDefinition.tiles.forEach((tile) => {
    const coordinates = getTileCoordinates(tile.id);

    if (coordinates.row > heighestRow) {
      heighestRow = coordinates.row;
    }
    if (coordinates.column > heighestColumn) {
      heighestColumn = coordinates.column;
    }
  });

  return {
    rows: heighestRow + 1,
    columns: heighestColumn + 1,
  };
}
