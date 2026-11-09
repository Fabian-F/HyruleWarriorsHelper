import { progressKeyMigrations } from '../../src/data/progress/key-migrations';
import { createProgressIndex } from '../../src/domain/progress/progress-state';
import { characters } from '../../src/data/characters';
import { weapons } from '../../src/data/weapons';
import { fairyClothing, fairyFoods } from '../../src/data/fairy/rewards';
import { legendMissions } from '../../src/data/legend/missions';
import { mapMetadata } from '../../src/data/maps/map-metadata';
import { buildProgressCatalog } from '../../src/data/progress/build-catalog';
import { progressCatalog } from '../../src/data/progress/catalog';
import { loadMap } from '../../src/domain/maps/map-loader';
import { characterKey, isOccurrenceId, weaponKey } from '../../src/domain/progress/progress-keys';
import { getCanonicalLocations } from '../../src/domain/progress/progress-catalog';
import { getWeaponLevels } from '../../src/domain/weapon.model';
import type { ValidationIssue } from './validation';

export async function validateProgress(): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = [];
  const error = (message: string) =>
    issues.push({ severity: 'error', message: `Progress: ${message}` });
  try {
    const maps = await Promise.all(mapMetadata.map((map) => loadMap(map.id)));
    const expected = buildProgressCatalog(maps, legendMissions);
    const migrationIndex = createProgressIndex(expected, progressKeyMigrations);
    for (const migration of progressKeyMigrations) {
      if (!migrationIndex.keyMigrations.has(migration.from))
        error(`Migration has no current destination: ${migration.from} -> ${migration.to}`);
    }
    if (JSON.stringify(expected) !== JSON.stringify(progressCatalog))
      error('Catalog is outdated. Run npm run generate:progress-catalog.');
    const entries = new Map(expected.entries.map((entry) => [entry.key, entry]));
    const canonicalLocations = getCanonicalLocations(expected.entries);
    if (entries.size !== expected.entries.length) error('Duplicate catalog keys.');
    for (const entry of expected.entries) {
      const canonical = entries.get(entry.canonicalKey);
      if (!canonical || canonical.canonicalKey !== canonical.key)
        error(`Invalid canonical target: ${entry.key}`);
      if (!entry.locations.length || !entry.label.trim()) error(`Missing metadata: ${entry.key}`);
    }
    for (const character of characters) {
      if (!entries.has(characterKey(character.id))) error(`Missing character: ${character.id}`);
    }
    const expectedWeaponKeys = new Set(
      weapons.flatMap((weapon) =>
        getWeaponLevels(weapon).map((level) => weaponKey(weapon.characterId, weapon.id, level)),
      ),
    );
    for (const key of expectedWeaponKeys)
      if (!entries.has(key)) error(`Missing weapon level: ${key}`);
    for (const entry of expected.entries) {
      if (entry.category === 'weapon' && !expectedWeaponKeys.has(entry.key))
        error(`Unsupported weapon level: ${entry.key}`);
    }
    for (const [category, registry] of [
      ['fairy-food', fairyFoods],
      ['fairy-clothing', fairyClothing],
    ] as const) {
      const ids = new Set<string>();
      for (const item of registry) {
        if (!isOccurrenceId(item.id) || ids.has(item.id))
          error(`Invalid or duplicate ${category} ID: ${item.id}`);
        ids.add(item.id);
        const entry = expected.entries.find((entry) => entry.key === `${category}:${item.id}`);
        if (!entry) error(`Unused ${category} definition: ${item.id}`);
      }
    }
    for (const relation of expected.aRankRelations) {
      const reward = entries.get(relation.rewardKey);
      if (!reward || !entries.has(relation.aRankKey))
        error(`Dangling A-rank relation: ${relation.aRankKey}`);
      else if (relation.exclusive !== (canonicalLocations.get(reward.canonicalKey)?.length === 1))
        error(`Invalid exclusivity: ${relation.aRankKey}`);
    }
  } catch (cause) {
    error(cause instanceof Error ? cause.message : String(cause));
  }
  return issues;
}
