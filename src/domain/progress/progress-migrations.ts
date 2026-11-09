import type { ProgressEntry } from './progress-catalog';
import type { ProgressKey } from './progress-keys';

export interface ProgressKeyMigration {
  readonly from: string;
  readonly to: string;
  readonly reason: string;
}
export interface MigratedProgressKey {
  readonly from: string;
  readonly to: ProgressKey;
}

/** Explicit renames only. Display text and array order never participate. */
export function createProgressKeyMigrations(
  rules: readonly ProgressKeyMigration[],
  entries: ReadonlyMap<string, ProgressEntry>,
): ReadonlyMap<string, ProgressKey> {
  const targets = new Map<string, string>();
  for (const rule of rules) {
    if (
      !rule.from.trim() ||
      !rule.to.trim() ||
      !rule.reason.trim() ||
      targets.has(rule.from) ||
      entries.has(rule.from)
    )
      throw new Error(`Invalid or ambiguous progress key migration: ${rule.from}`);
    targets.set(rule.from, rule.to);
  }
  const resolved = new Map<string, ProgressKey>();
  for (const from of targets.keys()) {
    const visited = new Set<string>();
    let key = from;
    while (targets.has(key)) {
      if (visited.has(key)) throw new Error(`Progress key migration cycle: ${from}`);
      visited.add(key);
      key = targets.get(key)!;
    }
    const entry = entries.get(key);
    // A stale migration destination must not turn a preserved mark into another unknown key.
    if (entry) resolved.set(from, entry.canonicalKey);
  }
  return resolved;
}
