import { createFarmingLookup, getFarmingLocations } from './farming-lookup';
import type { FarmingLocation } from './farming-location.model';

describe('farming lookup', () => {
  it('preserves multiple enemies and source order without modifying source data', () => {
    const first = {
      type: 'adventure',
      mapId: 'adventure',
      tileId: 'A1',
      enemyId: 'marin',
      recommended: true,
      notes: 'First',
    } as const;
    const second = { ...first, enemyId: 'yuga', recommended: false, notes: 'Second' } as const;
    const otherMap = { ...first, mapId: 'great-sea', enemyId: 'ganon' } as const;
    const locations: readonly FarmingLocation[] = Object.freeze([
      Object.freeze(first),
      Object.freeze(second),
      Object.freeze(otherMap),
      { type: 'legend', enemyId: 'ganon', title: 'Mission', recommended: true, notes: '' },
      { type: 'challenge', enemyId: 'ganon', title: 'Mission', recommended: true, notes: '' },
    ]);
    const lookup = createFarmingLookup(locations);
    const found = getFarmingLocations(lookup, 'adventure', 'A1');
    expect(found).toEqual([first, second]);
    expect(found[0]).toBe(first);
    expect(getFarmingLocations(lookup, 'great-sea', 'A1')).toEqual([otherMap]);
    expect(getFarmingLocations(lookup, 'adventure', 'B1')).toEqual([]);
    expect(getFarmingLocations(lookup, 'lorule', 'A1')).toEqual([]);
    expect(lookup.size).toBe(2);
    expect(locations).toHaveLength(5);
  });
});
