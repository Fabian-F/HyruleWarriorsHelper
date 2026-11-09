import type { ProgressCatalog, ProgressEntry } from './progress-catalog';
import type { ProgressKey } from './progress-keys';
import { createProgressKeyMigrations, type ProgressKeyMigration } from './progress-migrations';

export interface ProgressIndex {
  readonly keyMigrations: ReadonlyMap<string, ProgressKey>;
  readonly entries: ReadonlyMap<string, ProgressEntry>;
  readonly rankRewards: ReadonlyMap<
    ProgressKey,
    { readonly key: ProgressKey; readonly exclusive: boolean }
  >;
  readonly exclusiveRanks: ReadonlyMap<ProgressKey, readonly ProgressKey[]>;
}

export function createProgressIndex(
  catalog: ProgressCatalog,
  migrations: readonly ProgressKeyMigration[] = [],
): ProgressIndex {
  const entries = new Map(catalog.entries.map((entry) => [entry.key, entry]));
  if (entries.size !== catalog.entries.length) throw new Error('Duplicate progress catalog keys.');
  const rankRewards = new Map<ProgressKey, { key: ProgressKey; exclusive: boolean }>();
  const exclusiveRanks = new Map<ProgressKey, ProgressKey[]>();
  for (const entry of entries.values()) {
    if (entries.get(entry.canonicalKey)?.canonicalKey !== entry.canonicalKey)
      throw new Error(`Invalid canonical progress key: ${entry.key}`);
  }
  for (const relation of catalog.aRankRelations) {
    const rank = entries.get(relation.aRankKey);
    const reward = entries.get(relation.rewardKey);
    if (
      rank?.category !== 'arank' ||
      !reward ||
      reward.category === 'arank' ||
      rankRewards.has(rank.key)
    )
      throw new Error(`Invalid A-rank relation: ${relation.aRankKey}`);
    rankRewards.set(rank.key, { key: reward.canonicalKey, exclusive: relation.exclusive });
    if (relation.exclusive) {
      const ranks = exclusiveRanks.get(reward.canonicalKey) ?? [];
      ranks.push(rank.key);
      exclusiveRanks.set(reward.canonicalKey, ranks);
    }
  }
  return {
    entries,
    rankRewards,
    exclusiveRanks,
    keyMigrations: createProgressKeyMigrations(migrations, entries),
  };
}

/** Applies one user action. Loading and importing snapshots must never call this function. */
export function changeProgress(
  index: ProgressIndex,
  completed: ReadonlySet<ProgressKey>,
  key: ProgressKey,
  checked: boolean,
): ReadonlySet<ProgressKey> {
  const entry = index.entries.get(key);
  if (!entry) throw new Error(`Unknown progress key: ${key}`);
  const next = new Set(completed);
  const pending = [entry.canonicalKey];
  const visited = new Set<ProgressKey>();
  while (pending.length) {
    const current = pending.pop()!;
    if (visited.has(current)) continue;
    visited.add(current);
    if (checked) next.add(current);
    else next.delete(current);
    const reward = index.rankRewards.get(current);
    if (reward && (checked || reward.exclusive)) pending.push(reward.key);
    pending.push(...(index.exclusiveRanks.get(current) ?? []));
  }
  return next;
}
