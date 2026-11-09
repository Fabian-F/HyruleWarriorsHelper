import type { CharacterId } from '../character.model';
import type { ProgressKey, ProgressSource } from './progress-keys';

export const progressCategories = [
  'character',
  'weapon',
  'outfit',
  'heart-piece',
  'heart-container',
  'skulltula',
  'fairy-food',
  'fairy-clothing',
  'arank',
] as const;
export type ProgressCategory = (typeof progressCategories)[number];

export type ProgressLocation =
  | {
      readonly source: ProgressSource;
      readonly kind: 'a-rank' | 'clear' | 'treasure' | 'skulltula';
      readonly detail?: string;
    }
  | { readonly kind: 'initial' };

export interface ProgressEntry {
  readonly key: ProgressKey;
  readonly canonicalKey: ProgressKey;
  readonly category: ProgressCategory;
  readonly label: string;
  readonly characterId?: CharacterId;
  readonly locations: readonly ProgressLocation[];
}

export interface ARankRelation {
  readonly aRankKey: ProgressKey;
  /** Semantic reward key; resolve its canonicalKey before changing state. */
  readonly rewardKey: ProgressKey;
  /** Uses every acquisition source of the shared canonical state. */
  readonly exclusive: boolean;
}

export interface ProgressCatalog {
  readonly entries: readonly ProgressEntry[];
  readonly aRankRelations: readonly ARankRelation[];
}

/** Includes implicit character weapons, deduplicating the same acquisition condition. */
export function getCanonicalLocations(
  entries: readonly ProgressEntry[],
): ReadonlyMap<ProgressKey, readonly ProgressLocation[]> {
  const sources = new Map<ProgressKey, Map<string, ProgressLocation>>();
  for (const entry of entries) {
    let locations = sources.get(entry.canonicalKey);
    if (!locations) sources.set(entry.canonicalKey, (locations = new Map()));
    for (const location of entry.locations) locations.set(JSON.stringify(location), location);
  }
  return new Map([...sources].map(([key, locations]) => [key, [...locations.values()]]));
}
