import type { MaterialId } from '../material.model';
import { CharacterId } from '../character.model';
import { ItemCardId } from './item-card.model';
import type { WeaponId, WeaponLevel } from '../weapon.model';
import type { OutfitId } from '../characters/outfit.model';
import type { FairyRewardContent } from '../fairy/fairy.model';

export type Reward =
  | {
      readonly type: 'heart-container';
      /** Permanent identity within its source; never renumber when reordering rewards. */
      readonly occurrenceId: string;
      readonly characterId: CharacterId;
    }
  | {
      readonly type: 'heart-piece';
      /** Permanent identity within its source; never renumber when reordering rewards. */
      readonly occurrenceId: string;
      readonly characterId: CharacterId;
    }
  | {
      readonly type: 'outfit';
      readonly characterId: CharacterId;
      readonly outfitId: OutfitId;
      readonly outfitName: string;
    }
  | {
      readonly type: 'character';
      readonly characterId: CharacterId;
    }
  | {
      readonly type: 'weapon';
      readonly weaponId: WeaponId;
      readonly level: WeaponLevel;
    }
  | {
      readonly type: 'material';
      readonly materialId?: MaterialId;
    }
  | {
      readonly type: 'item-card';
      readonly itemCardId: ItemCardId;
    }
  | {
      readonly type: 'fairy';
      readonly content: FairyRewardContent;
      readonly text: string;
    }
  | {
      readonly type: 'text';
      readonly text: string;
    };

export type Treasure = Reward & {
  readonly location: string;
};
