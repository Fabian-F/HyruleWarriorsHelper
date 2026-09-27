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

export interface Weapon {
  readonly id: WeaponId;
  readonly characterId: CharacterId;
  readonly name: string;
}

export interface WeaponUnlock {
  readonly weaponId: WeaponId;
  readonly level: WeaponLevel;
}

export function isWeaponLevel(value: string): value is WeaponLevel {
  return WEAPON_LEVELS.some((level) => level === value);
}
