import type { MapTile, TileId } from '../../src/domain/maps/tile.model';
import type { ValidationIssue } from './validation';
import type { Reward } from '../../src/domain/maps/reward.model';

export interface TileValidationIssue extends ValidationIssue {
  readonly tileId: TileId;
}

type ValidateTileFn = (tile: MapTile) => TileValidationIssue[];

export function createTileValidators(): ValidateTileFn[] {
  return [
    createMapTileIdValidator(),
    validateTileSearchCoords,
    validateDuplicateTileSearchTargets,
    validateEmptyStrings,
  ];
}

/**
 * Checks if the current tileId already exists in the map.
 */
function createMapTileIdValidator(): ValidateTileFn {
  const tileIds = new Set<TileId>();

  return (tile) => {
    if (!tileIds.has(tile.id)) {
      tileIds.add(tile.id);
      return [];
    }

    return [
      {
        severity: 'error',
        message: `tileId "${tile.id}" already exists`,
        tileId: tile.id,
      },
    ];
  };
}

/**
 * Checks if all search targets are inside the 16x11 tile grid.
 */
function validateTileSearchCoords(tile: MapTile): TileValidationIssue[] {
  const issues: TileValidationIssue[] = [];

  for (const search of tile.search ?? []) {
    if (
      search.target.row < 0 ||
      search.target.row > 10 ||
      search.target.column < 0 ||
      search.target.column > 15
    ) {
      issues.push({
        severity: 'error',
        message: `tile search has an invalid target: ` + `${JSON.stringify(search.target)}`,
        tileId: tile.id,
      });
    }
  }

  return issues;
}

/**
 * Checks if multiple searches point to the same position inside a tile.
 */
function validateDuplicateTileSearchTargets(tile: MapTile): TileValidationIssue[] {
  const issues: TileValidationIssue[] = [];
  const targets = new Set<string>();

  for (const search of tile.search ?? []) {
    const key = `${search.target.row}:${search.target.column}`;

    if (targets.has(key)) {
      issues.push({
        severity: 'warning',
        message: `multiple searches use target ` + `${JSON.stringify(search.target)}`,
        tileId: tile.id,
      });
    }

    targets.add(key);
  }

  return issues;
}

/**
 * Checks for suspicious empty strings in data where an empty value
 * normally doesn't make sense.
 */
function validateEmptyStrings(tile: MapTile): TileValidationIssue[] {
  const issues: TileValidationIssue[] = [];

  if (tile.challenge.trim() === '') {
    issues.push({
      severity: 'error',
      message: 'challenge is empty',
      tileId: tile.id,
    });
  }

  if (tile.fullTileSearch && tile.fullTileSearch.description.trim() === '') {
    issues.push({
      severity: 'warning',
      message: 'fullTileSearch description is empty',
      tileId: tile.id,
    });
  }

  if (tile.rewards?.aRank) {
    validateRewardStrings(tile.rewards.aRank, 'aRank', tile, issues);
  }

  for (const reward of tile.rewards?.clear ?? []) {
    validateRewardStrings(reward, 'clear reward', tile, issues);
  }

  for (const treasure of tile.rewards?.treasure ?? []) {
    validateRewardStrings(treasure, 'treasure', tile, issues);

    if (treasure.location.trim() === '') {
      issues.push({
        severity: 'warning',
        message: 'treasure location is empty',
        tileId: tile.id,
      });
    }
  }

  return issues;
}

function validateRewardStrings(
  reward: Reward,
  source: string,
  tile: MapTile,
  issues: TileValidationIssue[],
): void {
  switch (reward.type) {
    case 'material':
      if (reward.materialName.trim() === '') {
        issues.push({
          severity: 'warning',
          message: `${source} has an empty materialName`,
          tileId: tile.id,
        });
      }
      break;

    case 'outfit':
      if (reward.outfitName.trim() === '') {
        issues.push({
          severity: 'warning',
          message: `${source} has an empty outfitName`,
          tileId: tile.id,
        });
      }
      break;

    case 'weapon':
      if (reward.weaponName.trim() === '') {
        issues.push({
          severity: 'warning',
          message: `${source} has an empty weaponName`,
          tileId: tile.id,
        });
      }
      break;

    case 'fairy':
      if (reward.text.trim() === '') {
        issues.push({
          severity: 'warning',
          message: `${source} has empty fairy text`,
          tileId: tile.id,
        });
      }
      break;

    case 'heart-container':
    case 'heart-piece':
    case 'character':
    case 'item-card':
      break;
  }
}
