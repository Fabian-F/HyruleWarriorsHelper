import { getCharacterBadgeRequirements } from './badge-requirements';
import { characters, getCharacter } from '../../data/characters';
import { weapons } from '../../data/weapons';
import { recommendedBuilds } from '../../data/characters/recommended-builds';
import { getOutfitId } from '../../data/characters/outfits';
import { getRewardWeaponUnlock } from '../../data/reward-unlocks';
import type { CharacterId } from '../character.model';
import type { Weapon } from '../weapon.model';
import { WEAPON_LEVELS } from '../weapon.model';
import type { RecommendedBuild } from './recommended-build.model';
import type { RewardLocation } from './character-rewards';

export function filterCharacters(query: string) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return characters.filter((character) =>
    terms.every((term) => character.name.toLowerCase().includes(term)),
  );
}

export function getCharacterContent(
  id: CharacterId,
  locations: readonly RewardLocation[],
  builds: readonly RecommendedBuild[] = recommendedBuilds,
) {
  const own = locations.filter(
    (location) => 'characterId' in location.reward && location.reward.characterId === id,
  );
  return {
    badgeRequirements: getCharacterBadgeRequirements(id),
    unlocks: own.filter((location) => location.reward.type === 'character'),
    heartContainers: own.filter((location) => location.reward.type === 'heart-container'),
    heartPieces: own.filter((location) => location.reward.type === 'heart-piece'),
    outfits: [
      ...new Set(
        own.flatMap((location) =>
          location.reward.type === 'outfit' ? [location.reward.outfitName] : [],
        ),
      ),
    ].map((name) => ({
      name,
      id: getOutfitId(name),
      locations: own.filter(
        (location) => location.reward.type === 'outfit' && location.reward.outfitName === name,
      ),
    })),
    weapons: (weapons as readonly Weapon[])
      .filter((weapon) => weapon.characterId === id)
      .sort(
        (a, b) =>
          Number(b.id === getCharacter(id).defaultWeaponId) -
          Number(a.id === getCharacter(id).defaultWeaponId),
      )
      .map((weapon) => {
        if (weapon.id === 'master-sword') return weapon;
        return {
          ...weapon,
          build: builds.find((build) => build.characterId === id && build.weaponId === weapon.id),
          levels: WEAPON_LEVELS.map((level) => ({
            level,
            isDefaultWeapon: level === '1' && weapon.id === getCharacter(id).defaultWeaponId,
            locations: locations.filter((location) => {
              const unlock = getRewardWeaponUnlock(location.reward);
              return unlock?.weaponId === weapon.id && unlock.level === level;
            }),
          })),
        };
      }),
  };
}

export type CharacterWeaponView = ReturnType<typeof getCharacterContent>['weapons'][number];
export type CharacterOutfitView = ReturnType<typeof getCharacterContent>['outfits'][number];
