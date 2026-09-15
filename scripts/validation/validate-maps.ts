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
  }

  return issues;
}
