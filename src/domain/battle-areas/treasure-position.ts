import type { Treasure } from '../maps/reward.model';
import type { BattleAreaPosition } from './battle-area-map.model';

export function isTreasurePosition(value: unknown): value is BattleAreaPosition {
  if (typeof value !== 'object' || value === null) return false;
  const { x, y } = value as BattleAreaPosition;
  return Number.isFinite(x) && Number.isFinite(y) && x >= 0 && x <= 1 && y >= 0 && y <= 1;
}

export function validateTreasurePosition(treasure: Treasure, mapAvailable: boolean): string[] {
  if (treasure.position === undefined) return [];
  const issues: string[] = [];
  if (!isTreasurePosition(treasure.position))
    issues.push('Invalid Treasure position (expected finite x/y in 0…1)');
  if (!mapAvailable) issues.push('Treasure position has no Battle Area map');
  if (treasure.keepId !== undefined)
    issues.push('Treasure has both a Keep reference and a point position');
  return issues;
}
