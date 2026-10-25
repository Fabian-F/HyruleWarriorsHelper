import type { EnemyId } from './enemy.model';
import type { MapId } from './maps/map.model';
import type { TileId } from './maps/tile.model';

interface FarmingLocationDetails {
  readonly enemyId: EnemyId;
  readonly recommended: boolean;
  readonly notes: string;
}

export type FarmingLocation = FarmingLocationDetails &
  (
    | {
        readonly type: 'adventure';
        readonly mapId: MapId;
        readonly tileId: TileId;
      }
    | {
        readonly type: 'legend';
        readonly missionId: import('./legend/legend-mission.model').LegendMissionId;
        readonly title: string;
      }
    | {
        readonly type: 'challenge';
        readonly title: string;
      }
  );
