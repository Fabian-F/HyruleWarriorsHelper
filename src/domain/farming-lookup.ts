import type { FarmingLocation } from './farming-location.model';
import type { MapId } from './maps/map.model';
import type { TileId } from './maps/tile.model';

export type AdventureFarmingLocation = Extract<FarmingLocation, { readonly type: 'adventure' }>;
export type FarmingLookup = ReadonlyMap<
  MapId,
  ReadonlyMap<TileId, readonly AdventureFarmingLocation[]>
>;

const noLocations: readonly AdventureFarmingLocation[] = [];

export function createFarmingLookup(locations: readonly FarmingLocation[]): FarmingLookup {
  const maps = new Map<MapId, Map<TileId, AdventureFarmingLocation[]>>();
  for (const location of locations) {
    if (location.type !== 'adventure') continue;
    let tiles = maps.get(location.mapId);
    if (!tiles) {
      tiles = new Map();
      maps.set(location.mapId, tiles);
    }
    const group = tiles.get(location.tileId) ?? [];
    group.push(location);
    tiles.set(location.tileId, group);
  }
  return maps;
}

export function getFarmingLocations(
  lookup: FarmingLookup,
  mapId: MapId,
  tileId: TileId,
): readonly AdventureFarmingLocation[] {
  return lookup.get(mapId)?.get(tileId) ?? noLocations;
}
