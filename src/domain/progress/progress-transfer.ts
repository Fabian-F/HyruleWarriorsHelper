import type { ProgressKey } from './progress-keys';
import type { ProgressIndex } from './progress-state';
import type { MigratedProgressKey } from './progress-migrations';

export const PROGRESS_FORMAT = 'hyrule-warriors-helper-progress';
export const PROGRESS_VERSION = 1;
export interface ProgressProfile {
  readonly format: typeof PROGRESS_FORMAT;
  readonly version: typeof PROGRESS_VERSION;
  readonly enabled: true;
  readonly visible: boolean;
  readonly completed: readonly string[];
}
export type ProgressImportMode = 'merge' | 'replace';

export interface ProgressRelationshipDifference {
  readonly aRankKey: ProgressKey;
  readonly rewardKey: ProgressKey;
}
export interface ProgressCompatibility {
  readonly unresolved: readonly string[];
  readonly differences: readonly ProgressRelationshipDifference[];
}
export interface ProgressImportPreview {
  readonly kind: 'import';
  readonly migrated: readonly MigratedProgressKey[];
  readonly compatibility: ProgressCompatibility;
  readonly unresolvedRemoved: readonly string[];
  readonly mode: ProgressImportMode;
  readonly added: readonly string[];
  readonly removed: readonly string[];
  readonly retained: number;
  readonly total: number;
  readonly activatesTracking: boolean;
  readonly visible: boolean;
}
export interface ProgressDestructivePreview {
  readonly kind: 'reset' | 'stop';
  readonly completedCount: number;
  readonly unresolvedCount: number;
}
export type ProgressChangePreview = ProgressImportPreview | ProgressDestructivePreview;

export class ProgressValidationError extends Error {
  constructor(readonly issues: readonly string[]) {
    super(issues.join('\n'));
    this.name = 'ProgressValidationError';
  }
}

export function createProgressProfile(
  visible = true,
  completed: Iterable<string> = [],
): ProgressProfile {
  return {
    format: PROGRESS_FORMAT,
    version: PROGRESS_VERSION,
    enabled: true,
    visible,
    completed: [...new Set(completed)].sort(),
  };
}

/** Format validation remains strict; catalog evolution must not invalidate a whole profile. */
export function readProgress(
  json: string,
  index: ProgressIndex,
): { readonly profile: ProgressProfile; readonly migrated: readonly MigratedProgressKey[] } {
  let value: unknown;
  try {
    value = JSON.parse(json.replace(/^\uFEFF/, ''));
  } catch {
    throw new ProgressValidationError(['The file does not contain valid JSON.']);
  }
  if (!value || typeof value !== 'object' || Array.isArray(value))
    throw new ProgressValidationError(['Expected a progress profile object.']);
  const data = value as Record<string, unknown>;
  const issues: string[] = [];
  const allowed = new Set(['format', 'version', 'enabled', 'visible', 'completed']);
  for (const key of Object.keys(data))
    if (!allowed.has(key)) issues.push(`Unsupported profile field: ${key}`);
  if (data['format'] !== PROGRESS_FORMAT)
    issues.push('This is not a Hyrule Warriors Helper progress file.');
  if (data['version'] !== PROGRESS_VERSION)
    issues.push(`Unsupported progress version: ${String(data['version'])}. Supported version: 1.`);
  if (data['enabled'] !== true) issues.push('A saved progress profile must have tracking enabled.');
  if (typeof data['visible'] !== 'boolean')
    issues.push('The visibility setting must be a boolean.');
  const completed: string[] = [];
  const migrated: MigratedProgressKey[] = [];
  const seen = new Set<string>();
  if (!Array.isArray(data['completed'])) issues.push('Completed entries must be an array.');
  else
    for (const key of data['completed']) {
      if (typeof key !== 'string') {
        issues.push('Every completed entry must be a string key.');
        continue;
      }
      if (!key.trim()) {
        issues.push('Completed keys must not be empty.');
        continue;
      }
      if (seen.has(key)) {
        issues.push(`Duplicate progress key: ${key}`);
        continue;
      }
      seen.add(key);
      const entry = index.entries.get(key);
      const target = entry?.canonicalKey ?? index.keyMigrations.get(key);
      completed.push(target ?? key);
      if (target && target !== key) migrated.push({ from: key, to: target });
    }
  if (issues.length) throw new ProgressValidationError(issues);
  return { profile: createProgressProfile(data['visible'] as boolean, completed), migrated };
}

export function parseProgress(json: string, index: ProgressIndex): ProgressProfile {
  return readProgress(json, index).profile;
}

export function inspectProgress(
  profile: ProgressProfile,
  index: ProgressIndex,
): ProgressCompatibility {
  const completed = new Set(profile.completed);
  return {
    unresolved: profile.completed.filter((key) => !index.entries.has(key)),
    differences: [...index.rankRewards].flatMap(([aRankKey, reward]) =>
      reward.exclusive && completed.has(aRankKey) !== completed.has(reward.key)
        ? [{ aRankKey, rewardKey: reward.key }]
        : [],
    ),
  };
}

export function exportProgress(profile: ProgressProfile): string {
  return JSON.stringify(createProgressProfile(profile.visible, profile.completed), null, 2) + '\n';
}

/** Snapshot adoption deliberately preserves allowed A-rank/reward disagreements. */
export function previewProgressImport(
  current: ProgressProfile | null,
  incoming: ProgressProfile,
  mode: ProgressImportMode,
  index: ProgressIndex,
  migrated: readonly MigratedProgressKey[] = [],
): { readonly preview: ProgressImportPreview; readonly next: ProgressProfile } {
  if (mode !== 'merge' && mode !== 'replace')
    throw new Error('Choose merge or replace for the import.');
  const before = new Set(current?.completed ?? []);
  const after = new Set(mode === 'merge' ? [...before, ...incoming.completed] : incoming.completed);
  const next = createProgressProfile(current?.visible ?? true, after);
  return {
    preview: {
      kind: 'import',
      migrated,
      compatibility: inspectProgress(next, index),
      unresolvedRemoved: [...before].filter((key) => !after.has(key) && !index.entries.has(key)),
      mode,
      added: next.completed.filter((key) => !before.has(key)),
      removed: [...before].filter((key) => !after.has(key)).sort(),
      retained: [...before].filter((key) => after.has(key)).length,
      total: after.size,
      activatesTracking: current === null,
      visible: next.visible,
    },
    next,
  };
}
