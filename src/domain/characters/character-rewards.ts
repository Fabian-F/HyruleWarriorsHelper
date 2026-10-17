import type { MapDefinition, MapId } from '../maps/map.model';
import type { Reward, Treasure } from '../maps/reward.model';
import type { TileId } from '../maps/tile.model';

export interface RewardLocation {
  readonly mapId: MapId;
  readonly tileId: TileId;
  readonly reward: Reward | Treasure;
  readonly condition: string;
  readonly rule?: string;
}

export function collectCharacterRewards(maps: readonly MapDefinition[]): readonly RewardLocation[] {
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
