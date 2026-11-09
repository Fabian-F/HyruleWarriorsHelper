import { getWeapon } from '../weapons';
import { characters } from '../characters';
import type { Reward } from '../../domain/maps/reward.model';
import type { RewardLocation } from '../../domain/characters/character-rewards';
import {
  characterKey,
  fairyRewardKey,
  heartKey,
  outfitKey,
  weaponKey,
  type ProgressKey,
  type ProgressSource,
} from '../../domain/progress/progress-keys';

/** Semantic identity shared by the catalog and every reward presentation. */
export function getRewardProgressKey(
  reward: Reward,
  source: ProgressSource,
): ProgressKey | undefined {
  switch (reward.type) {
    case 'character':
      return characterKey(reward.characterId);
    case 'weapon':
      return weaponKey(getWeapon(reward.weaponId).characterId, reward.weaponId, reward.level);
    case 'outfit':
      return outfitKey(reward.characterId, reward.outfitId);
    case 'heart-piece':
    case 'heart-container':
      return heartKey(reward, source);
    case 'fairy':
      return fairyRewardKey(reward.content);
    case 'material':
    case 'item-card':
    case 'text':
      return undefined;
  }
}

/** The character key owns the shared state of a character and its default level-1 weapon. */
export function getCanonicalProgressKey(key: ProgressKey): ProgressKey {
  return canonicalDefaults.get(key) ?? key;
}

const canonicalDefaults = new Map<ProgressKey, ProgressKey>(
  characters.map((character) => [
    weaponKey(character.id, character.defaultWeaponId, '1'),
    characterKey(character.id),
  ]),
);

export function getRewardLocationProgressKey(location: RewardLocation): ProgressKey | undefined {
  return getRewardProgressKey(
    location.reward,
    location.type === 'legend'
      ? { type: 'legend', missionId: location.missionId }
      : { type: 'adventure', mapId: location.mapId, tileId: location.tileId },
  );
}
