import { MapTile } from './tile.model';

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

export interface MapDefinition {
  readonly id: MapId;
  readonly name: string;
  readonly extras?: string;
  readonly tiles: readonly MapTile[];
}
