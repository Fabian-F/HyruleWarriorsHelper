import { enemies } from '../../data/enemies';
import type { FarmingLocation } from '../farming-location.model';
import {
  filterEnemies,
  getMaterialSlots,
  getEnemyFarmingLocations,
  getRecommendedLocation,
  getFarmingGroups,
  filterFarmingLocations,
  isFarmingTileAvailable,
} from './materials-page';

describe('materials page domain', () => {
  it('finds enemies by their own and shared material names and real categories', () => {
    expect(filterEnemies("Zelda's Tiara", 'all').map((enemy) => enemy.id)).toEqual([
      'zelda',
      'marin',
    ]);
    expect(filterEnemies('GANON', 'boss').map((enemy) => enemy.id)).toEqual([
      'ganon',
      'phantom-ganon',
    ]);
    expect(filterEnemies('ganon', 'character').map((enemy) => enemy.id)).toEqual([
      'ganondorf',
      'yuga',
    ]);
    expect(filterEnemies('does not exist', 'all')).toEqual([]);
    const marin = enemies.find((enemy) => enemy.id === 'marin');
    if (!marin) throw new Error('Missing Marin');
    const slots = getMaterialSlots(marin);
    expect(slots.map((slot) => slot.tier)).toEqual(['bronze', 'silver', 'gold']);
    expect(slots[0].material).toBeUndefined();
    expect(slots[2].material?.id).toBe('zeldas-tiara');
  });

  it('preserves enemy-specific locations, recommendation and source order when filtering', () => {
    const data: readonly FarmingLocation[] = [
      {
        type: 'adventure',
        enemyId: 'marin',
        mapId: 'adventure',
        tileId: 'A1',
        recommended: false,
        notes: 'First',
      },
      {
        type: 'legend',
        enemyId: 'marin',
        title: 'Legend mission',
        recommended: true,
        notes: 'Second',
      },
      {
        type: 'adventure',
        enemyId: 'zelda',
        mapId: 'adventure',
        tileId: 'A1',
        recommended: true,
        notes: 'Other enemy',
      },
      {
        type: 'adventure',
        enemyId: 'marin',
        mapId: 'adventure',
        tileId: 'P16',
        recommended: false,
        notes: 'Third',
      },
    ];
    const own = getEnemyFarmingLocations('marin', data);
    expect(own.map((location) => location.notes)).toEqual(['First', 'Second', 'Third']);
    expect(getRecommendedLocation(own)).toBe(data[1]);
    expect(getRecommendedLocation([data[0]])).toBeUndefined();
    expect(getFarmingGroups(own)).toEqual([
      { id: 'adventure', name: 'Adventure Map', count: 2 },
      { id: 'legend', name: 'Legend Mode', count: 1 },
    ]);
    expect(filterFarmingLocations(own, 'adventure').map((location) => location.notes)).toEqual([
      'First',
      'Third',
    ]);
    expect(filterFarmingLocations(own, 'all')).toBe(own);
    expect(isFarmingTileAvailable(data[0])).toBe(true);
    expect(isFarmingTileAvailable(data[1])).toBe(false);
    expect(isFarmingTileAvailable(data[3])).toBe(false);
  });
});
