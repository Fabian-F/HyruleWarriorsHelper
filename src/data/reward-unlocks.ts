import type { Reward } from '../domain/maps/reward.model';
import type { WeaponUnlock } from '../domain/weapon.model';
import { getCharacter } from './characters';

/** Includes the default level-1 weapon granted by a character unlock. */
export function getRewardWeaponUnlock(reward: Reward): WeaponUnlock | undefined {
  switch (reward.type) {
    case 'weapon':
      return { weaponId: reward.weaponId, level: reward.level };
    case 'character':
      return { weaponId: getCharacter(reward.characterId).defaultWeaponId, level: '1' };
    default:
      return undefined;
  }
}
