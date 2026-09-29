import type { MapTile, TileDifficulty } from '../../src/domain/maps/tile.model';
import type { TileValidationIssue } from './validate-tile';

// Damage thresholds use the existing data convention: 99 / 149 / 199.
const expectedRequirements = {
  colorless: { kills: 1000, damage: 99 },
  green: { kills: 1000, damage: 99 },
  yellow: { kills: 1200, damage: 149 },
  purple: { kills: 1200, damage: 149 },
  orange: { kills: 1200, damage: 149 },
  blue: { kills: 1600, damage: 199 },
  red: { kills: 1600, damage: 199 },
} satisfies Record<TileDifficulty, { kills: number; damage: number }>;

export function validateTileRequirements(tile: MapTile): TileValidationIssue[] {
  const expected = expectedRequirements[tile.difficulty];
  const issues: TileValidationIssue[] = [];

  for (const requirement of ['kills', 'damage'] as const) {
    const actual = tile.requirements[requirement];
    if (actual === undefined) continue;

    // Quiz missions require three defeats regardless of difficulty.
    if (requirement === 'kills' && actual === 3 && /\bquiz\b/i.test(tile.challenge)) {
      continue;
    }

    if (actual !== expected[requirement]) {
      issues.push({
        severity: 'warning',
        tileId: tile.id,
        message: `A-rank ${requirement} requirement is ${actual}; expected ${expected[requirement]} for ${tile.difficulty} difficulty`,
      });
    }
  }

  return issues;
}
