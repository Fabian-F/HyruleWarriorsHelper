import type { CharacterId } from '../character.model';
import type { WeaponId } from '../weapon.model';
import type { weaponAttributeNames } from '../../data/weapon-attributes';

export type WeaponAttributeId = keyof typeof weaponAttributeNames;
type FiveAttributes = readonly [
  WeaponAttributeId,
  WeaponAttributeId,
  WeaponAttributeId,
  WeaponAttributeId,
  WeaponAttributeId,
];
type SevenAttributes = readonly [...FiveAttributes, WeaponAttributeId, WeaponAttributeId];
type EightAttributes = readonly [...SevenAttributes, WeaponAttributeId];
export const BUILD_TIERS = ['1', '2/3', '4/4+'] as const;
export type BuildTier = (typeof BUILD_TIERS)[number];
export const BUILD_SLOT_COUNTS = { '1': 5, '2/3': 7, '4/4+': 8 } as const;

interface BuildBase {
  readonly characterId: CharacterId;
  readonly weaponId: WeaponId;
  readonly explanation?: string;
  readonly sources?: readonly { readonly label: string; readonly url: string }[];
}
export type RecommendedBuild = BuildBase &
  (
    | { readonly tier: '1'; readonly attributes: FiveAttributes }
    | { readonly tier: '2/3'; readonly attributes: SevenAttributes }
    | { readonly tier: '4/4+'; readonly attributes: EightAttributes }
  );
