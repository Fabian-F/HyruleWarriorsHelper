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

  return issues.map((issue) => ({
    ...issue,
    mapId: map.id,
  }));
}
