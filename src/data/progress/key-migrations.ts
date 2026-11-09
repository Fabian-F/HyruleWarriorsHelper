import type { ProgressKeyMigration } from '../../domain/progress/progress-migrations';

/** Add an explicit old/new mapping here whenever a persisted key genuinely changes.
 * Keep historical mappings, including chains. No IDs have been renamed since v1 yet.
 */
export const progressKeyMigrations: readonly ProgressKeyMigration[] = [];
