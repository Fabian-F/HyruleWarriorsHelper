import type { MapDefinition, MapId } from '../../src/domain/maps/map.model';
import { migrateTile } from './migrate-tile';
import type { OldMapDefinition, OldMapTile } from './old-data/old-models';

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
    extras: oldMap.extras,
    tiles: oldMap.tiles.map((tile) => migrateTile(tile as OldMapTile, id)),
  } satisfies MapDefinition;

  validateMigratedMap(map);

  return map;
}
