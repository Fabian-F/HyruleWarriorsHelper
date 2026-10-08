import assert from 'node:assert/strict';
import { test } from 'node:test';
import { migrateTile } from './migrate-tile';
import { OldDifficulty, type OldMapTile } from './old-data/old-models';

const tile = {
  coords: { row: 0, col: 0 },
  challenge: 'Mission',
  difficulty: OldDifficulty.GREEN,
  requirements: {},
} satisfies OldMapTile;

test('material rewards resolve exact IDs for aRank, clear and treasures', () => {
  const result = migrateTile(
    {
      ...tile,
      rewards: {
        arank: "King Dodongo's Crystal Material",
        clear: ['Island Outfit Material'],
        treasure: ["Zelda's Tiara Material (Enemy Base)"],
      },
    },
    'adventure',
  );
  assert.deepEqual(result.rewards?.aRank, {
    type: 'material',
    materialId: 'king-dodongos-crystal',
  });
  assert.deepEqual(result.rewards?.clear, [{ type: 'material', materialId: 'island-outfit' }]);
  assert.deepEqual(result.rewards?.treasure, [
    { type: 'material', materialId: 'zeldas-tiara', location: 'Enemy Base' },
  ]);
});

test('unspecified Rewards Map materials stay unspecified and unknown names fail', () => {
  assert.deepEqual(
    migrateTile({ ...tile, rewards: { arank: 'Material' } }, 'rewards').rewards?.aRank,
    { type: 'material' },
  );
  assert.throws(
    () => migrateTile({ ...tile, rewards: { arank: 'Unknown Material' } }, 'adventure'),
    /Unknown or ambiguous material/,
  );
});
