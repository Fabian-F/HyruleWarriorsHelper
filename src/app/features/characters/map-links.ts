import { getWeapon } from '../../../data/weapons';
import type { Reward } from '../../../domain/maps/reward.model';
import type { WeaponId } from '../../../domain/weapon.model';

export function getWeaponSearchParams(weaponId: WeaponId): Record<string, string> {
  const weapon = getWeapon(weaponId);
  return { q: weapon.name, searchKinds: 'weapon', searchCharacters: weapon.characterId };
}

export function getRewardSearchParams(reward: Reward): Record<string, string> {
  switch (reward.type) {
    case 'weapon':
      return getWeaponSearchParams(reward.weaponId);
    case 'outfit':
      return { q: reward.outfitName, searchKinds: 'outfit', searchCharacters: reward.characterId };
    case 'character':
    case 'heart-container':
    case 'heart-piece':
      return { searchKinds: reward.type, searchCharacters: reward.characterId };
    default:
      return { searchKinds: reward.type };
  }
}
