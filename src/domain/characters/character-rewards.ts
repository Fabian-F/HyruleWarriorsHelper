import type { LegendMission, LegendMissionId } from '../legend/legend-mission.model';
import type { MapDefinition, MapId } from '../maps/map.model';
import type { Reward, Treasure } from '../maps/reward.model';
import type { TileId } from '../maps/tile.model';

interface RewardDetails {
  readonly reward: Reward | Treasure;
  readonly condition: string;
  readonly rule?: string;
}
export type RewardLocation = AdventureRewardLocation | LegendRewardLocation;
export interface LegendRewardLocation extends RewardDetails {
  readonly type: 'legend';
  readonly missionId: LegendMissionId;
  readonly missionName: string;
}
export interface AdventureRewardLocation extends RewardDetails {
  readonly type?: 'adventure';
  readonly mapId: MapId;
  readonly tileId: TileId;
}

export function collectCharacterRewards(
  maps: readonly MapDefinition[],
  missions: readonly LegendMission[] = [],
): readonly RewardLocation[] {
  const locations: RewardLocation[] = [];
  for (const map of maps) {
    for (const tile of map.tiles) {
      const add = (reward: Reward, condition: string) => {
        if (
          !['character', 'weapon', 'outfit', 'heart-container', 'heart-piece'].includes(reward.type)
        )
          return;
        locations.push({
          mapId: map.id,
          tileId: tile.id,
          reward,
          condition,
          rule: tile.additionalRule,
        });
      };
      if (tile.rewards?.aRank) add(tile.rewards.aRank, 'A-Rank reward');
      for (const reward of tile.rewards?.clear ?? []) add(reward, 'Clear reward');
      for (const reward of tile.rewards?.treasure ?? [])
        add(reward, `Treasure: ${reward.location}`);
    }
  }
  for (const mission of missions) {
    for (const reward of mission.clearRewards)
      locations.push({
        type: 'legend',
        missionId: mission.id,
        missionName: mission.name,
        reward,
        condition: 'Completion unlock',
      });
    for (const reward of mission.treasures)
      locations.push({
        type: 'legend',
        missionId: mission.id,
        missionName: mission.name,
        reward,
        condition: `Treasure: ${reward.location}`,
      });
  }
  return locations;
}

let pending: Promise<readonly RewardLocation[]> | undefined;
export function loadCharacterRewards(): Promise<readonly RewardLocation[]> {
  return (pending ??= import('../../data/characters/reward-locations')
    .then((module) => module.characterRewardLocations)
    .catch((error: unknown) => {
      pending = undefined;
      throw error;
    }));
}
