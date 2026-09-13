import { MapTile } from './tile.model';

export type MapId =
  | 'adventure'
  | 'great-sea'
  | 'master-quest';

export interface MapDefinition {
  readonly id: MapId;
  readonly name: string;
  readonly extras?: string;
  readonly tiles: readonly MapTile[];
}
