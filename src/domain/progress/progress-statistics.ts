import type { CharacterId } from '../character.model';
import type { MapId } from '../maps/map.model';
import {
  progressCategories,
  type ProgressCatalog,
  type ProgressCategory,
  type ProgressEntry,
} from './progress-catalog';
import type { ProgressKey, ProgressSource } from './progress-keys';

export interface ProgressCount {
  readonly completed: number;
  readonly total: number;
  readonly percent: number;
}
export interface CategoryProgress extends ProgressCount {
  readonly category: ProgressCategory;
}
export interface ProgressScope {
  readonly keys: ReadonlySet<ProgressKey>;
  readonly categories: ReadonlyMap<ProgressCategory, ReadonlySet<ProgressKey>>;
}
export interface ProgressSummary {
  readonly goals: ProgressCount;
  readonly rewards: ProgressCount;
  readonly unlocks: ProgressCount;
  readonly collectibles: ProgressCount;
  readonly aRanks: ProgressCount;
  readonly categories: readonly CategoryProgress[];
}
export type ProgressMapScope = MapId | 'legend';
export interface ProgressStatisticsIndex {
  readonly all: ProgressScope;
  readonly maps: ReadonlyMap<ProgressMapScope, ProgressScope>;
  readonly characters: ReadonlyMap<CharacterId, ProgressScope>;
  readonly sources: ReadonlyMap<string, ProgressScope>;
}

const unlockCategories: readonly ProgressCategory[] = ['character', 'weapon', 'outfit'];
const collectibleCategories: readonly ProgressCategory[] = [
  'heart-piece',
  'heart-container',
  'skulltula',
  'fairy-food',
  'fairy-clothing',
];

export function progressSourceId(source: ProgressSource): string {
  return source.type === 'adventure'
    ? `${source.mapId}:${source.tileId.toLowerCase()}`
    : `legend:${source.missionId}`;
}

function scope(entries: readonly ProgressEntry[]): ProgressScope {
  return {
    keys: new Set(entries.map((entry) => entry.canonicalKey)),
    categories: new Map(
      progressCategories.map((category) => [
        category,
        new Set(
          entries.filter((entry) => entry.category === category).map((entry) => entry.canonicalKey),
        ),
      ]),
    ),
  };
}

/** Index metadata once; neither full map payloads nor displayed coordinates participate. */
export function createProgressStatisticsIndex(catalog: ProgressCatalog): ProgressStatisticsIndex {
  const canonicalKeys = new Map(catalog.entries.map((entry) => [entry.key, entry.canonicalKey]));
  const aRankRewards = new Map(
    catalog.aRankRelations.map((relation) => [
      relation.aRankKey,
      canonicalKeys.get(relation.rewardKey) ?? relation.rewardKey,
    ]),
  );
  const maps = new Map<ProgressMapScope, ProgressEntry[]>();
  const characters = new Map<CharacterId, ProgressEntry[]>();
  const sources = new Map<string, ProgressEntry[]>();
  const append = <K>(groups: Map<K, ProgressEntry[]>, key: K, entry: ProgressEntry) => {
    const group = groups.get(key) ?? [];
    group.push(entry);
    groups.set(key, group);
  };
  for (const entry of catalog.entries) {
    if (entry.characterId) append(characters, entry.characterId, entry);
    const mapIds = new Set<ProgressMapScope>();
    const sourceIds = new Set<string>();
    for (const location of entry.locations) {
      if (location.kind === 'initial') continue;
      mapIds.add(location.source.type === 'adventure' ? location.source.mapId : 'legend');
      sourceIds.add(progressSourceId(location.source));
    }
    for (const id of mapIds) append(maps, id, entry);
    for (const id of sourceIds) append(sources, id, entry);
  }
  return {
    all: scope(catalog.entries),
    maps: new Map([...maps].map(([id, entries]) => [id, scope(entries)])),
    characters: new Map([...characters].map(([id, entries]) => [id, scope(entries)])),
    sources: new Map(
      [...sources].map(([id, entries]) => {
        // The tile's A-rank checkbox already represents its associated reward.
        const rewards = new Set(
          entries.flatMap((entry) => {
            const reward = aRankRewards.get(entry.key);
            return reward ? [reward] : [];
          }),
        );
        return [id, scope(entries.filter((entry) => !rewards.has(entry.canonicalKey)))];
      }),
    ),
  };
}

export function countProgress(
  keys: ReadonlySet<ProgressKey>,
  completed: ReadonlySet<ProgressKey>,
): ProgressCount {
  let done = 0;
  for (const key of keys) if (completed.has(key)) done++;
  return { completed: done, total: keys.size, percent: keys.size ? (done / keys.size) * 100 : 0 };
}

export function summarizeProgress(
  scope: ProgressScope,
  completed: ReadonlySet<ProgressKey>,
): ProgressSummary {
  const keysFor = (categories: readonly ProgressCategory[]) =>
    new Set(categories.flatMap((category) => [...(scope.categories.get(category) ?? [])]));
  return {
    goals: countProgress(scope.keys, completed),
    rewards: countProgress(keysFor([...unlockCategories, ...collectibleCategories]), completed),
    unlocks: countProgress(keysFor(unlockCategories), completed),
    collectibles: countProgress(keysFor(collectibleCategories), completed),
    aRanks: countProgress(scope.categories.get('arank') ?? new Set(), completed),
    categories: progressCategories.flatMap((category) => {
      const keys = scope.categories.get(category);
      return keys?.size ? [{ category, ...countProgress(keys, completed) }] : [];
    }),
  };
}
