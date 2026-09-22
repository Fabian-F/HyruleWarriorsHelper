import type { MapDefinition, MapDifficulty, MapId } from '../../src/domain/maps/map.model';
import { migrateTile } from './migrate-tile';
import type { OldMapDefinition, OldMapTile, OldTile } from './old-data/old-models';

function validateMigratedMap(map: MapDefinition): void {
  const tileIds = new Set<string>();

  for (const tile of map.tiles) {
    if (tileIds.has(tile.id)) {
      throw new Error(`Duplicate tile ID "${tile.id}" in map "${map.id}"`);
    }

    tileIds.add(tile.id);
  }
}

export function migrateMap(oldMap: OldMapDefinition, id: MapId): MapDefinition {
  const map = {
    id: id,
    name: oldMap.name,
    difficulty: oldMap.difficulty.toLowerCase() as MapDifficulty,
    extras: oldMap.extras,
    tiles: oldMap.tiles.filter(isHWMapTile).map((tile) => migrateTile(tile, id)),
  } satisfies MapDefinition;

  validateMigratedMap(map);

  return map;
}

function isHWMapTile(tile: OldTile | OldMapTile): tile is OldMapTile {
  return 'challenge' in tile;
}
