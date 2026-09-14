import { Reward, Treasure } from './reward.model';
import { ItemCardGroupId, ItemCardId } from './item-card.model';
import { CharacterId } from '../character.model';
import { EnemyId } from '../enemy.model';

export type TileLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P';
export type TileId = `${TileLetter}${number}`;

export type TileDifficulty = 'colorless' | 'green' | 'yellow' | 'purple' | 'orange' | 'blue' | 'red';

export type Blockade = 'north' | 'south' | 'east' | 'west';

export interface TileRequirements {
  readonly kills?: number;
  readonly minutes?: number;
  readonly damage?: number;
}

export interface TileRewards {
  readonly aRank?: Reward;
  readonly clear?: readonly Reward[];
  readonly treasure?: readonly Treasure[];
  readonly skulltulas?: readonly string[];
}

export type TilePointRow = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type TilePointColumn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export interface TilePoint {
  readonly row: TilePointRow;
  readonly column: TilePointColumn;
}

export interface TileSearch {
  readonly itemCardId: ItemCardId;
  readonly target: TilePoint;
}

export type FullTileSearch =
  | {
      readonly itemCardId: ItemCardId;
      readonly description: string;
    }
  | {
      readonly itemCardGroupId: ItemCardGroupId;
      readonly description: string;
    };

export interface MapTile {
  readonly id: TileId;
  readonly challenge: string;
  readonly difficulty: TileDifficulty;
  readonly rewards?: TileRewards;
  readonly requirements: TileRequirements;
  readonly search?: readonly TileSearch[];
  readonly fullTileSearch?: FullTileSearch;
  readonly blockades?: readonly Blockade[];
  readonly additionalRule?: string;
  readonly quizAnswers?: readonly (CharacterId | EnemyId)[];
}
