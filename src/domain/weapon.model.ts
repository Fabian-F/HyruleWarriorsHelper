import type { Element } from './element.model';
import type { CharacterId } from './character.model';

export type WeaponId =
  | 'parasol'
  | 'scepter'
  | 'hammer'
  | 'goddess-blade'
  | 'great-swords'
  | 'trident'
  | 'demon-blade'
  | 'giant-blade'
  | 'naginata'
  | 'sail'
  | 'book-of-sorcery'
  | 'spear'
  | 'summoning-gate'
  | 'epona'
  | 'gauntlets'
  | 'great-fairy'
  | 'hylian-sword'
  | 'master-sword'
  | 'magic-rod'
  | 'spinner'
  | 'boots'
  | 'crossbows'
  | 'bell'
  | 'rito-harp'
  | 'shackle'
  | 'rental-hammer'
  | 'zora-scale'
  | 'harp'
  | 'ocarina'
  | 'cutlass'
  | 'balloon'
  | 'light-sword'
  | 'sand-wand'
  | 'phantom-arms'
  | 'mirror'
  | 'dragon-spear'
  | 'ring'
  | 'mask'
  | 'picture-frame'
  | 'scimitars'
  | 'baton'
  | 'dominion-rod'
  | 'rapier';

export const WEAPON_LEVELS = ['1', '2', '3', '4', '4+'] as const;
export type WeaponLevel = (typeof WEAPON_LEVELS)[number];

interface WeaponBase {
  readonly characterId: CharacterId;
  readonly name: string;
  readonly element: Element;
}

export type Weapon = WeaponBase &
  (
    | {
        readonly id: Exclude<WeaponId, 'master-sword'>;
        readonly level4PlusElement: Element;
      }
    | {
        readonly id: 'master-sword';
        readonly characterId: 'link';
        readonly requirementWeaponId: 'hylian-sword';
        readonly unlockDescription: string;
        readonly sealedSkills: readonly {
          readonly name: string;
          readonly unlockDescription: string;
        }[];
      }
  );

export interface WeaponUnlock {
  readonly weaponId: WeaponId;
  readonly level: WeaponLevel;
}

export function isWeaponLevel(value: string): value is WeaponLevel {
  return WEAPON_LEVELS.some((level) => level === value);
}
