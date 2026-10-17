import type { CharacterId } from '../character.model';
import type { WeaponId } from '../weapon.model';
import type { weaponAttributeNames } from '../../data/weapon-attributes';

export type WeaponAttributeId = keyof typeof weaponAttributeNames;
export type SevenAttributes = readonly [
  WeaponAttributeId,
  WeaponAttributeId,
  WeaponAttributeId,
  WeaponAttributeId,
  WeaponAttributeId,
  WeaponAttributeId,
  WeaponAttributeId,
];

export interface RecommendedBuild {
  readonly characterId: CharacterId;
  readonly weaponId: WeaponId;
  readonly attributes: SevenAttributes;
  readonly explanation?: string;
  readonly sources?: readonly { readonly label: string; readonly url: string }[];
}
