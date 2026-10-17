import { enemies } from '../../data/enemies';
import { getMaterial } from '../../data/materials';
import { mapMetadata } from '../../data/maps/map-metadata';
import { mapTileIds } from '../../data/maps/map-tile-ids';
import type { Enemy, EnemyId, EnemyType } from '../enemy.model';
import type { FarmingLocation } from '../farming-location.model';
import { MATERIAL_TIERS } from '../material.model';
import type { MapId } from '../maps/map.model';

export const enemyCategories = [
  { id: 'all', name: 'All enemies' },
  { id: 'character', name: 'Characters' },
  { id: 'boss', name: 'Bosses' },
  { id: 'troop', name: 'Troops' },
] as const;
export type EnemyCategory = 'all' | EnemyType;
export type FarmingGroup = MapId | 'legend' | 'challenge';

export function getMaterialSlots(enemy: Enemy) {
  return MATERIAL_TIERS.map((tier) => {
    const id = enemy.drops?.[tier];
    return { tier, material: id ? getMaterial(id) : undefined };
  });
}

export function filterEnemies(query: string, category: EnemyCategory): readonly Enemy[] {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return enemies.filter((enemy) => {
    if (category !== 'all' && enemy.type !== category) return false;
    const text = [enemy.name, ...getMaterialSlots(enemy).map((slot) => slot.material?.name ?? '')]
      .join(' ')
      .toLowerCase();
    return terms.every((term) => text.includes(term));
  });
}

export function getFarmingGroup(location: FarmingLocation): FarmingGroup {
  return location.type === 'adventure' ? location.mapId : location.type;
}

export function getFarmingGroupName(group: FarmingGroup): string {
  if (group === 'legend') return 'Legend Mode';
  if (group === 'challenge') return 'Challenge Mode';
  return mapMetadata.find((map) => map.id === group)?.name ?? group;
}

export function getEnemyFarmingLocations(enemyId: EnemyId, data: readonly FarmingLocation[]) {
  return data.filter((location) => location.enemyId === enemyId);
}

export function getFarmingGroups(locations: readonly FarmingLocation[]) {
  const counts = new Map<FarmingGroup, number>();
  for (const location of locations) {
    const group = getFarmingGroup(location);
    counts.set(group, (counts.get(group) ?? 0) + 1);
  }
  return [...counts].map(([id, count]) => ({ id, name: getFarmingGroupName(id), count }));
}

export function filterFarmingLocations(
  locations: readonly FarmingLocation[],
  group: FarmingGroup | 'all',
) {
  return group === 'all'
    ? locations
    : locations.filter((location) => getFarmingGroup(location) === group);
}

export function getRecommendedLocation(locations: readonly FarmingLocation[]) {
  return locations.find((location) => location.recommended);
}

export function isFarmingTileAvailable(location: FarmingLocation): boolean {
  if (location.type !== 'adventure') return false;
  const ids: readonly string[] = mapTileIds[location.mapId];
  return ids.includes(location.tileId);
}
