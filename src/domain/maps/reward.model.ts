import { CharacterId } from '../character.model';
import { ItemCardId } from './item-card.model';
import { EnemyId } from '../enemy.model';

export type Reward =
  | {
      readonly type: 'heart-container';
      readonly characterId: CharacterId;
    }
  | {
      readonly type: 'heart-piece';
      readonly characterId: CharacterId;
    }
  | {
      readonly type: 'outfit';
      readonly characterId: CharacterId;
      readonly outfitName: string;
    }
  | {
      readonly type: 'character';
      readonly characterId: CharacterId;
    }
  | {
      readonly type: 'weapon';
      readonly characterId: CharacterId;
      readonly weaponName: string;
    }
  | {
      readonly type: 'material';
      readonly materialName: string;
    }
  | {
      readonly type: 'item-card';
      readonly itemCardId: ItemCardId;
    }
  | {
      readonly type: 'fairy';
      readonly text: string;
    }
  | {
      readonly type: 'text';
      readonly text: string;
    };

export type Treasure = Reward & {
  readonly location: string;
};
