import type { MapDefinition, MapId } from '../../src/domain/maps/map.model';
import type { TileId } from '../../src/domain/maps/tile.model';
import type { ValidationIssue } from './validation';
import { createTileValidators } from './validate-tile';

export interface MapValidationIssue extends ValidationIssue {
  readonly mapId: MapId;
  readonly tileId?: TileId;
}

export function validateMap(map: MapDefinition): MapValidationIssue[] {
  const validators = createTileValidators();

  const issues = map.tiles.flatMap((tile) => validators.flatMap((validator) => validator(tile)));

  const seen = new Set(map.tiles.map((tile) => tile.id));
  for (const id of map.decorativeTiles ?? []) {
    if (seen.has(id)) {
      issues.push({
        severity: 'error',
        tileId: id,
        message: 'Duplicate decorative position or overlap with a mission.',
      });
    }
    if (!/^[A-P][1-9]\d*$/.test(id)) {
      issues.push({ severity: 'error', tileId: id, message: 'Invalid decorative tile position.' });
    }
    seen.add(id);
  }

  return issues.map((issue) => ({
    ...issue,
    mapId: map.id,
  }));
}
