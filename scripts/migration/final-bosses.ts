import type { MapDefinition, MapId } from '../../src/domain/maps/map.model';
import type { TileId } from '../../src/domain/maps/tile.model';

export const finalBossTiles: Readonly<Record<MapId, readonly TileId[]>> = {
  adventure: ['F1'],
  'great-sea': ['I3'],
  'master-quest': ['A1'],
  'master-wind-waker': ['D7'],
  twilight: ['E5'],
  termina: ['B2'],
  'koholint-island': ['G1'],
  'grand-travels': ['A8', 'M2', 'G5'],
  lorule: ['M4'],
  rewards: [],
};

export function enrichFinalBosses(
  map: MapDefinition,
  ids: readonly TileId[] = finalBossTiles[map.id],
): MapDefinition {
  const bosses = new Set(ids);
  if (bosses.size !== ids.length) {
    throw new Error(`Duplicate Final Boss tile in map "${map.id}"`);
  }
  const tiles = new Set(map.tiles.map((tile) => tile.id));
  for (const id of bosses) {
    if (!tiles.has(id)) throw new Error(`Final Boss tile not found: ${map.id}/${id}`);
  }
  return {
    ...map,
    tiles: map.tiles.map(({ isFinalBoss: _previous, ...tile }) =>
      bosses.has(tile.id) ? { ...tile, isFinalBoss: true } : tile,
    ),
  };
}
