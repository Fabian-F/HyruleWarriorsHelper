import type { Treasure } from '../maps/reward.model';
import type {
  BattleAreaMap,
  BattleAreaKeep,
  KeepId,
  KeepNameOverrides,
} from './battle-area-map.model';

export interface KeepTreasures {
  readonly keep: BattleAreaKeep;
  readonly displayName: string;
  readonly treasures: readonly Treasure[];
}

/** Only the current mission's treasures; no global reward or Skulltula lookup. */
export function getKeepTreasures(
  map: BattleAreaMap,
  treasures: readonly Treasure[],
  nameOverrides?: KeepNameOverrides,
): readonly KeepTreasures[] {
  return map.keeps
    .map((keep) => ({
      keep,
      displayName: nameOverrides?.[keep.id]?.trim() || keep.name,
      treasures: treasures.filter((treasure) => treasure.keepId === keep.id),
    }))
    .filter((group) => group.treasures.length > 0);
}

export function getKeep(map: BattleAreaMap, id: KeepId): BattleAreaKeep | undefined {
  return map.keeps.find((keep) => keep.id === id);
}

export function getBattleAreaViewBox(map: BattleAreaMap) {
  return map.viewBox ?? { x: 0, y: 0, width: map.width, height: map.height };
}

export function validateBattleAreaMap(map: BattleAreaMap): string[] {
  const issues: string[] = [];
  if (
    !map.image.trim() ||
    ![map.width, map.height].every((value) => Number.isInteger(value) && value > 0)
  )
    issues.push('Invalid image metadata');
  const view = getBattleAreaViewBox(map);
  if (
    ![view.x, view.y, view.width, view.height].every(Number.isInteger) ||
    view.x < 0 ||
    view.y < 0 ||
    view.width <= 0 ||
    view.height <= 0 ||
    view.x + view.width > map.width ||
    view.y + view.height > map.height
  )
    issues.push('Invalid map display viewBox');
  const ids = new Set<string>();
  for (const keep of map.keeps) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(keep.id) || ids.has(keep.id) || !keep.name.trim())
      issues.push(`Invalid or duplicate Keep: ${keep.id}`);
    ids.add(keep.id);
    const { x, y, width, height } = keep.bounds;
    if (
      x * map.width < view.x ||
      y * map.height < view.y ||
      (x + width) * map.width > view.x + view.width ||
      (y + height) * map.height > view.y + view.height
    )
      issues.push(`Keep outside map display viewBox: ${keep.id}`);
    if (
      ![x, y, width, height].every(Number.isFinite) ||
      x < 0 ||
      y < 0 ||
      width <= 0 ||
      height <= 0 ||
      x + width > 1 ||
      y + height > 1
    )
      issues.push(`Invalid bounds: ${keep.id}`);
  }
  return issues;
}

/** Validate names against the current mission's Battle Area, including unlinked Keeps. */
export function validateKeepNameOverrides(
  map: BattleAreaMap | undefined,
  overrides: KeepNameOverrides | undefined,
): string[] {
  const issues: string[] = [];
  for (const [id, name] of Object.entries(overrides ?? {})) {
    if (!map || !getKeep(map, id)) issues.push(`Unknown Keep name override: ${id}`);
    if (typeof name !== 'string' || !name.trim())
      issues.push(`Empty or invalid Keep name override: ${id}`);
  }
  return issues;
}
