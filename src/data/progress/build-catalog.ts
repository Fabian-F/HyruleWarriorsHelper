import { getCharacter } from '../characters';
import { getWeapon } from '../weapons';
import { getOutfit } from '../characters/outfits';
import { fairyClothing, fairyFoods } from '../fairy/rewards';
import { getRewardWeaponUnlock } from '../reward-unlocks';
import type { CharacterId } from '../../domain/character.model';
import type { LegendMission } from '../../domain/legend/legend-mission.model';
import type { MapDefinition } from '../../domain/maps/map.model';
import type { Reward } from '../../domain/maps/reward.model';
import {
  aRankKey,
  characterKey,
  legendSkulltulaKey,
  occurrenceKey,
  weaponKey,
  type ProgressKey,
  type ProgressSource,
} from '../../domain/progress/progress-keys';
import {
  getCanonicalLocations,
  type ProgressCatalog,
  type ProgressCategory,
  type ProgressEntry,
  type ProgressLocation,
} from '../../domain/progress/progress-catalog';
import { getCanonicalProgressKey, getRewardProgressKey } from './reward-keys';

type MutableEntry = Omit<ProgressEntry, 'locations'> & { locations: ProgressLocation[] };

/** Build-time only: application pages load the generated metadata, never all map payloads. */
export function buildProgressCatalog(
  maps: readonly MapDefinition[],
  missions: readonly LegendMission[],
): ProgressCatalog {
  const entries = new Map<ProgressKey, MutableEntry>();
  const relations: { aRankKey: ProgressKey; rewardKey: ProgressKey }[] = [];
  const add = (
    key: ProgressKey,
    category: ProgressCategory,
    label: string,
    location: ProgressLocation,
    characterId?: CharacterId,
  ) => {
    const entry = entries.get(key);
    if (entry) {
      if (entry.category !== category || entry.characterId !== characterId)
        throw new Error(`Inconsistent progress entry: ${key}`);
      if (
        !entry.locations.some((existing) => JSON.stringify(existing) === JSON.stringify(location))
      )
        entry.locations.push(location);
    } else
      entries.set(key, {
        key,
        canonicalKey: getCanonicalProgressKey(key),
        category,
        label,
        ...(characterId ? { characterId } : {}),
        locations: [location],
      });
  };
  const addReward = (
    reward: Reward,
    source: ProgressSource,
    location: ProgressLocation,
  ): ProgressKey | undefined => {
    const key = getRewardProgressKey(reward, source);
    if (!key) return undefined;
    switch (reward.type) {
      case 'character':
        add(key, 'character', getCharacter(reward.characterId).name, location, reward.characterId);
        break;
      case 'weapon': {
        const weapon = getWeapon(reward.weaponId);
        add(key, 'weapon', `${weapon.name} (Level ${reward.level})`, location, weapon.characterId);
        break;
      }
      case 'outfit':
        add(key, 'outfit', getOutfit(reward.outfitId).name, location, reward.characterId);
        break;
      case 'heart-piece':
      case 'heart-container':
        add(
          key,
          reward.type,
          reward.type === 'heart-piece' ? 'Heart Piece' : 'Heart Container',
          location,
          reward.characterId,
        );
        break;
      case 'fairy': {
        const content = reward.content;
        switch (content.kind) {
          case 'fairy':
            return undefined;
          case 'fairy-food': {
            const food = fairyFoods.find((food) => food.id === content.foodId);
            if (!food) throw new Error(`Unknown fairy food: ${content.foodId}`);
            add(key, 'fairy-food', food.name, location);
            break;
          }
          case 'fairy-clothing': {
            const clothing = fairyClothing.find((item) => item.id === content.clothingId);
            if (!clothing) throw new Error(`Unknown fairy clothing: ${content.clothingId}`);
            add(key, 'fairy-clothing', clothing.name, location);
            break;
          }
        }
        break;
      }
    }
    if (reward.type === 'character') {
      const unlock = getRewardWeaponUnlock(reward)!;
      const weapon = getWeapon(unlock.weaponId);
      add(
        weaponKey(weapon.characterId, weapon.id, unlock.level),
        'weapon',
        `${weapon.name} (Level ${unlock.level})`,
        location,
        weapon.characterId,
      );
    }
    return key;
  };

  // Link and his default weapon are available before completing any mission.
  const link = getCharacter('link');
  const startingWeapon = getWeapon(link.defaultWeaponId);
  add(characterKey(link.id), 'character', link.name, { kind: 'initial' }, link.id);
  add(
    weaponKey(link.id, startingWeapon.id, '1'),
    'weapon',
    `${startingWeapon.name} (Level 1)`,
    { kind: 'initial' },
    link.id,
  );

  for (const map of maps) {
    for (const tile of map.tiles) {
      const source = { type: 'adventure', mapId: map.id, tileId: tile.id } as const;
      const rankKey = aRankKey(map.id, tile.id);
      add(rankKey, 'arank', `${map.name} ${tile.id}: A-Rank`, { source, kind: 'a-rank' });
      if (tile.rewards?.aRank) {
        const rewardKey = addReward(tile.rewards.aRank, source, { source, kind: 'a-rank' });
        if (rewardKey) relations.push({ aRankKey: rankKey, rewardKey });
      }
      for (const reward of tile.rewards?.clear ?? [])
        addReward(reward, source, { source, kind: 'clear' });
      for (const reward of tile.rewards?.treasure ?? [])
        addReward(reward, source, { source, kind: 'treasure', detail: reward.location });
      for (const skulltula of tile.rewards?.skulltulas ?? [])
        add(occurrenceKey('skulltula', source, skulltula.id), 'skulltula', 'Gold Skulltula', {
          source,
          kind: 'skulltula',
          detail: skulltula.id,
        });
    }
  }
  for (const mission of missions) {
    const source = { type: 'legend', missionId: mission.id } as const;
    for (const reward of mission.clearRewards) addReward(reward, source, { source, kind: 'clear' });
    for (const reward of mission.treasures)
      addReward(reward, source, { source, kind: 'treasure', detail: reward.location });
    for (const skulltula of mission.skulltulas)
      add(
        legendSkulltulaKey(mission.id, skulltula.number),
        'skulltula',
        `Gold Skulltula #${skulltula.number}`,
        { source, kind: 'skulltula', detail: String(skulltula.number) },
      );
  }
  const result = [...entries.values()].sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));
  const canonicalLocations = getCanonicalLocations(result);
  return {
    entries: result,
    aRankRelations: relations.map((relation) => ({
      ...relation,
      exclusive: canonicalLocations.get(getCanonicalProgressKey(relation.rewardKey))?.length === 1,
    })),
  };
}
