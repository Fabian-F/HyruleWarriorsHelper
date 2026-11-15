import { validateTreasurePosition } from '../../src/domain/battle-areas/treasure-position';
import type { KeepNameOverrides } from '../../src/domain/battle-areas/battle-area-map.model';
import { existsSync } from 'node:fs';
import { battleAreas, isBattleAreaId } from '../../src/data/battle-areas/battle-areas';
import { legendMissions } from '../../src/data/legend/missions';
import { loadBattleAreaMap } from '../../src/domain/battle-areas/battle-area-map-loader';
import type { BattleAreaId } from '../../src/domain/battle-areas/battle-area.model';
import {
  getKeep,
  getBattleAreaViewBox,
  validateBattleAreaMap,
  validateKeepNameOverrides,
} from '../../src/domain/battle-areas/treasure-keeps';
import type { Treasure } from '../../src/domain/maps/reward.model';
import { mapLoaders } from '../../src/domain/maps/map-loader';
import type { ValidationIssue } from './validation';

export async function validateBattleAreaMaps(): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = [];
  const error = (message: string) => issues.push({ severity: 'error', message });
  const areaMaps = new Map(
    await Promise.all(
      Object.values(battleAreas).map(async ({ id }) => {
        const map = await loadBattleAreaMap(id);
        if (map) {
          if (!isBattleAreaId(map.battleAreaId) || map.battleAreaId !== id)
            error(`Battle area map has mismatched ID: ${id}`);
          for (const message of validateBattleAreaMap(map)) error(`${id}: ${message}`);
          if (!existsSync(`public/${map.image}`)) error(`Missing battle area image: ${map.image}`);
        }
        return [id, map] as const;
      }),
    ),
  );
  const validate = (
    areaId: BattleAreaId,
    treasures: readonly Treasure[],
    source: string,
    overrides?: KeepNameOverrides,
  ) => {
    const map = areaMaps.get(areaId);
    for (const message of validateKeepNameOverrides(map, overrides)) error(`${source}: ${message}`);
    for (const treasure of treasures) {
      for (const message of validateTreasurePosition(treasure, !!map))
        error(`${source}: ${message}`);
      if (map && treasure.position) {
        const view = getBattleAreaViewBox(map);
        const x = treasure.position.x * map.width,
          y = treasure.position.y * map.height;
        if (x < view.x || x > view.x + view.width || y < view.y || y > view.y + view.height)
          error(`${source}: Treasure position outside map display viewBox`);
      }
      if (treasure.keepId !== undefined && (!map || !getKeep(map, treasure.keepId)))
        error(`${source}: unknown Keep ${treasure.keepId} in ${areaId}`);
    }
  };
  for (const load of Object.values(mapLoaders)) {
    const map = await load();
    for (const tile of map.tiles)
      validate(
        tile.battleAreaId,
        tile.rewards?.treasure ?? [],
        `${map.id}/${tile.id}`,
        tile.keepNameOverrides,
      );
  }
  for (const mission of legendMissions)
    validate(
      mission.battleAreaId,
      mission.treasures,
      `legend/${mission.id}`,
      mission.keepNameOverrides,
    );
  return issues;
}
