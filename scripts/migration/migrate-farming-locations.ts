import { legendMissions } from '../../src/data/legend/missions';
import { enemies } from '../../src/data/enemies';
import { rewardsMap } from '../../src/data/maps/rewards/rewards-map';
import type { FarmingLocation } from '../../src/domain/farming-location.model';
import type { MapId } from '../../src/domain/maps/map.model';
import { TILE_LETTERS, type TileId } from '../../src/domain/maps/tile.model';
import type { OldEnemyType } from './old-data/old-models';

const mapIdsByName: Readonly<Record<string, MapId>> = {
  'Adventure Map': 'adventure',
  'Great Sea Map': 'great-sea',
  'Master Quest Map': 'master-quest',
  'Master Wind Waker Map': 'master-wind-waker',
  'Twilight Map': 'twilight',
  'Termina Map': 'termina',
  'Koholint Island Map': 'koholint-island',
  'Grand Travels Map': 'grand-travels',
  'Lorule Map': 'lorule',
  'Rewards Map': 'rewards',
};

export function migrateFarmingTileId(value: string): TileId {
  const match = /^([A-P])([1-9]\d*)$/.exec(value);
  if (!match) throw new Error(`Invalid V1 farming tile: ${value}`);
  const columnLetter = TILE_LETTERS.find((letter) => letter === match[1]);
  const row = Number(match[2]);
  if (!columnLetter || row > 16) throw new Error(`Invalid V1 farming tile: ${value}`);
  return `${columnLetter}${row}`;
}

export function migrateFarmingLocations(
  oldEnemies: readonly OldEnemyType[],
): readonly FarmingLocation[] {
  const locations: FarmingLocation[] = [];
  const seenEnemies = new Set<string>();
  for (const oldEnemy of oldEnemies) {
    const enemy = enemies.find((entry) => entry.name === oldEnemy.name);
    if (!enemy) throw new Error(`Unknown farming enemy: ${oldEnemy.name}`);
    if (seenEnemies.has(enemy.id)) throw new Error(`Duplicate farming enemy: ${enemy.id}`);
    seenEnemies.add(enemy.id);
    for (const group of oldEnemy.farmLocations) {
      for (const oldLocation of group.tiles) {
        const details = {
          enemyId: enemy.id,
          recommended: oldLocation.recommended ?? false,
          notes: oldLocation.amount,
        };
        if (group.map === 'Legend Mode' || group.map === 'Challenge Mode') {
          if (oldLocation.tile !== undefined) {
            throw new Error(`Unexpected tile for ${group.map}: ${oldLocation.tile}`);
          }
          if (group.map === 'Legend Mode') {
            const title = oldLocation.title.split(': ').at(-1)?.trim();
            const mission = legendMissions.find(
              (m) =>
                m.name === title ||
                (title === 'Reclaiming Darkness' && m.id === 'reclaiming-the-darkness'),
            );
            if (!mission) throw new Error(`Unknown Legend farming mission: ${title}`);
            locations.push({
              ...details,
              type: 'legend',
              title: oldLocation.title,
              missionId: mission.id,
            });
          } else locations.push({ ...details, type: 'challenge', title: oldLocation.title });
        } else {
          const mapId = mapIdsByName[group.map];
          if (!mapId) throw new Error(`Unknown farming map: ${group.map}`);
          let tileId: TileId;
          if (oldLocation.tile !== undefined) {
            tileId = migrateFarmingTileId(oldLocation.tile);
          } else if (mapId === 'rewards') {
            const matches = rewardsMap.tiles.filter((tile) =>
              tile.challenge.includes(`"${oldLocation.title}"`),
            );
            if (matches.length !== 1) {
              throw new Error(`Ambiguous or unknown Rewards mission: ${oldLocation.title}`);
            }
            tileId = matches[0].id;
          } else {
            throw new Error(`Missing farming tile: ${oldEnemy.name} / ${group.map}`);
          }
          locations.push({
            ...details,
            type: 'adventure',
            mapId,
            tileId,
          });
        }
      }
    }
  }
  return locations;
}
