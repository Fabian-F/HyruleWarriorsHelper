import { createFarmingLookup } from '../farming-lookup';
import type { FarmingLocation } from '../farming-location.model';
import type { MapDefinition } from './map.model';
import {
  createMapSearchEntries,
  createTileSearchEntry,
  emptySearch,
  isSearchActive,
  matchesTile,
  parseSearch,
  searchParamKeys,
  serializeSearch,
} from './map-search';

const map = {
  id: 'adventure',
  name: 'Test',
  difficulty: 'easy',
  tiles: [
    {
      id: 'A1',
      challenge: 'Mission',
      difficulty: 'green',
      requirements: {},
      rewards: { aRank: { type: 'weapon', weaponId: 'hylian-sword', level: '1' } },
    },
    { id: 'B1', challenge: 'Quiz', difficulty: 'green', requirements: {}, quizAnswers: ['marin'] },
  ],
} satisfies MapDefinition;
const locations: readonly FarmingLocation[] = [
  {
    type: 'adventure',
    enemyId: 'marin',
    mapId: 'adventure',
    tileId: 'A1',
    recommended: true,
    notes: 'Unique farming condition',
  },
  {
    type: 'adventure',
    enemyId: 'marin',
    mapId: 'adventure',
    tileId: 'A1',
    recommended: false,
    notes: 'Other condition',
  },
  {
    type: 'adventure',
    enemyId: 'yuga',
    mapId: 'adventure',
    tileId: 'B1',
    recommended: true,
    notes: '',
  },
  {
    type: 'adventure',
    enemyId: 'ganon',
    mapId: 'great-sea',
    tileId: 'A1',
    recommended: true,
    notes: 'Wrong map note',
  },
  {
    type: 'adventure',
    enemyId: 'ganon',
    mapId: 'adventure',
    tileId: 'P16',
    recommended: false,
    notes: 'Missing tile note',
  },
  {
    type: 'legend',
    enemyId: 'ganon',
    title: 'Legend mission',
    recommended: true,
    notes: 'Legend note',
  },
];

describe('farming in map search', () => {
  it('indexes map-specific farming enemies, shared material names and notes', () => {
    const entries = createMapSearchEntries(map, createFarmingLookup(locations));
    expect(entries[0].farmingEnemies).toEqual(['marin']);
    expect(entries[1].farmingEnemies).toEqual(['yuga']);
    for (const text of ['Marin', "Zelda's Tiara", 'Unique farming condition']) {
      expect(matchesTile(entries[0], { ...emptySearch, text })).toBe(true);
    }
    expect(entries[0].text).not.toContain('wrong map note');
    expect(entries[0].text).not.toContain('legend note');
    expect(entries).toHaveLength(2);
    expect(entries.flatMap((e) => e.farmingEnemies)).not.toContain('ganon');
  });

  it('uses alternatives within farming and intersects farming with reward filters', () => {
    const entries = createMapSearchEntries(map, createFarmingLookup(locations));
    const farming = { ...emptySearch, farmingEnemies: ['marin', 'yuga'] } as const;
    expect(entries.filter((e) => matchesTile(e, farming))).toHaveLength(2);
    expect(
      entries
        .filter((e) => matchesTile(e, { ...farming, kinds: ['weapon'], characters: ['link'] }))
        .map((e) => e.tile.id),
    ).toEqual(['A1']);
    expect(matchesTile(entries[0], { ...farming, characters: ['zelda'] })).toBe(false);
    expect(matchesTile(entries[0], { ...farming, finalBossOnly: true })).toBe(false);
  });

  it('does not treat quiz answers or mission text as farming evidence', () => {
    const entry = createTileSearchEntry(map.tiles[1]);
    expect(matchesTile(entry, { ...emptySearch, text: 'Marin' })).toBe(true);
    expect(matchesTile(entry, { ...emptySearch, farmingEnemies: ['marin'] })).toBe(false);
  });

  it('round trips farming selections through URL state and removes unknown IDs', () => {
    const parsed = parseSearch(
      new URLSearchParams('searchFarmingEnemies=marin,unknown,yuga,marin'),
    );
    expect(parsed.farmingEnemies).toEqual(['marin', 'yuga']);
    expect(isSearchActive(parsed)).toBe(true);
    expect(searchParamKeys).toContain('searchFarmingEnemies');
    expect(serializeSearch(parsed)['searchFarmingEnemies']).toBe('marin,yuga');
    expect(parseSearch(new URLSearchParams('searchFarmingEnemies=unknown')).farmingEnemies).toEqual(
      [],
    );
    expect(serializeSearch(emptySearch)['searchFarmingEnemies']).toBeNull();
    expect(isSearchActive(emptySearch)).toBe(false);
  });
});

describe('material reward search', () => {
  it('resolves material names from IDs for rewards and treasures', () => {
    const entry = createTileSearchEntry({
      ...map.tiles[0],
      rewards: {
        aRank: { type: 'material', materialId: 'king-dodongos-crystal' },
        treasure: [{ type: 'material', materialId: 'zeldas-tiara', location: 'Enemy Base' }],
      },
    });
    expect(matchesTile(entry, { ...emptySearch, text: "King Dodongo's Crystal" })).toBe(true);
    expect(matchesTile(entry, { ...emptySearch, text: "Zelda's Tiara" })).toBe(true);
    expect(matchesTile(entry, { ...emptySearch, kinds: ['material'] })).toBe(true);
    expect(matchesTile(entry, { ...emptySearch, text: 'Unknown material' })).toBe(false);
  });

  it('keeps unspecified materials searchable as material rewards', () => {
    const entry = createTileSearchEntry({
      ...map.tiles[0],
      rewards: { aRank: { type: 'material' } },
    });
    expect(matchesTile(entry, { ...emptySearch, kinds: ['material'] })).toBe(true);
    expect(matchesTile(entry, { ...emptySearch, text: 'Materials' })).toBe(true);
  });
});
