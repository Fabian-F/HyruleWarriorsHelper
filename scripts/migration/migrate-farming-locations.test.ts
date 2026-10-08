import assert from 'node:assert/strict';
import { test } from 'node:test';
import { migrateFarmingLocations, migrateFarmingTileId } from './migrate-farming-locations';
import type { OldEnemyType } from './old-data/old-models';
import * as oldEnemyData from './old-data/old-enemies';
import { farmingLocations } from '../../src/data/farming-locations';

test('preserves V1 column-row coordinates, including two-digit rows', () => {
  assert.equal(migrateFarmingTileId('A2'), 'A2');
  assert.equal(migrateFarmingTileId('C4'), 'C4');
  assert.equal(migrateFarmingTileId('P8'), 'P8');
  assert.equal(migrateFarmingTileId('H16'), 'H16');
  for (const invalid of ['A0', 'A17', 'Q1', '2A', '', 'A2x', 'A02']) {
    assert.throws(() => migrateFarmingTileId(invalid));
  }
});

const enemy = {
  name: 'Marin',
  imagePath: '',
  drops: {},
  farmLocations: [
    {
      map: 'Adventure Map',
      tiles: [
        { tile: 'A2', title: 'A2: mission', amount: 'Condition', recommended: true },
        { tile: 'C4', title: 'C4: mission', amount: 'Other condition' },
      ],
    },
    { map: 'Legend Mode', tiles: [{ title: 'Legend mission', amount: 'Legend note' }] },
    { map: 'Challenge Mode', tiles: [{ title: 'Challenge mission', amount: 'Challenge note' }] },
  ],
} satisfies OldEnemyType;

test('keeps enemy ownership, source order, recommendation and mission notes', () => {
  assert.deepEqual(migrateFarmingLocations([enemy]), [
    {
      enemyId: 'marin',
      recommended: true,
      notes: 'Condition',
      type: 'adventure',
      mapId: 'adventure',
      tileId: 'A2',
    },
    {
      enemyId: 'marin',
      recommended: false,
      notes: 'Other condition',
      type: 'adventure',
      mapId: 'adventure',
      tileId: 'C4',
    },
    {
      enemyId: 'marin',
      recommended: false,
      notes: 'Legend note',
      type: 'legend',
      title: 'Legend mission',
    },
    {
      enemyId: 'marin',
      recommended: false,
      notes: 'Challenge note',
      type: 'challenge',
      title: 'Challenge mission',
    },
  ]);
});

test('rejects unknown enemies, maps, missing tiles and duplicate enemies', () => {
  assert.throws(() => migrateFarmingLocations([{ ...enemy, name: 'Unknown' }]));
  assert.throws(() => migrateFarmingLocations([enemy, enemy]));
  assert.throws(() =>
    migrateFarmingLocations([
      { ...enemy, farmLocations: [{ map: 'Unknown', tiles: [{ title: '', amount: '' }] }] },
    ]),
  );
  assert.throws(() =>
    migrateFarmingLocations([
      { ...enemy, farmLocations: [{ map: 'Adventure Map', tiles: [{ title: '', amount: '' }] }] },
    ]),
  );
});

test('resolves Rewards illustration titles to existing V2 IDs without transposing', () => {
  const result = migrateFarmingLocations([
    {
      ...enemy,
      farmLocations: [
        { map: 'Rewards Map', tiles: [{ title: 'Rulers of Twilight', amount: 'Note' }] },
      ],
    },
  ]);
  assert.deepEqual(result, [
    {
      enemyId: 'marin',
      recommended: false,
      notes: 'Note',
      type: 'adventure',
      mapId: 'rewards',
      tileId: 'G6',
    },
  ]);
  assert.throws(() =>
    migrateFarmingLocations([
      {
        ...enemy,
        farmLocations: [
          { map: 'Rewards Map', tiles: [{ title: 'Unknown illustration', amount: '' }] },
        ],
      },
    ]),
  );
});

test('generated dataset preserves every V1 location and recommendation in community order', () => {
  const source = Object.values(oldEnemyData).sort(
    (a, b) => (a.sortingIndex ?? 0) - (b.sortingIndex ?? 0),
  );
  assert.deepEqual(farmingLocations, migrateFarmingLocations(source));
  assert.equal(farmingLocations.length, 636);
  assert.equal(farmingLocations.filter((location) => location.recommended).length, 53);
  assert.equal(new Set(farmingLocations.map((location) => location.enemyId)).size, 53);
});

test('Aeralfos recommendation uses the existing Twilight I5 tile', () => {
  const source = Object.values(oldEnemyData);
  const location = migrateFarmingLocations(source).find(
    (entry) =>
      entry.enemyId === 'aeralfos' &&
      entry.type === 'adventure' &&
      entry.mapId === 'twilight' &&
      entry.recommended,
  );
  assert.ok(location && location.type === 'adventure');
  assert.equal(location.tileId, 'I5');
});
