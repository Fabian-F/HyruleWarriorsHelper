import { mapTileIds } from '../../src/data/maps/map-tile-ids';
import type { MapId } from '../../src/domain/maps/map.model';
import { mapLoaders } from '../../src/domain/maps/map-loader';
import { type MapValidationIssue, validateMap } from './validate-map';

const allMapIds = new Set<MapId>([
  'adventure',
  'great-sea',
  'master-quest',
  'master-wind-waker',
  'twilight',
  'termina',
  'koholint-island',
  'grand-travels',
  'lorule',
  'rewards',
]);

export async function validateMaps(): Promise<MapValidationIssue[]> {
  const issues: MapValidationIssue[] = [];

  for (const mapId of allMapIds) {
    const map = await mapLoaders[mapId]();
    issues.push(...validateMap(map));
    const expected = new Set(map.tiles.map((tile) => tile.id));
    const actual = new Set<string>(mapTileIds[mapId]);
    if (expected.size !== actual.size || [...expected].some((id) => !actual.has(id))) {
      issues.push({
        severity: 'error',
        mapId,
        message: 'Tile ID catalogue is stale. Run npm run generate:tile-ids.',
      });
    }
  }

  return issues;
}
