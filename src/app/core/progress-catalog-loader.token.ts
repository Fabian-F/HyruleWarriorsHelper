import type { ProgressKeyMigration } from '../../domain/progress/progress-migrations';
import { progressKeyMigrations } from '../../data/progress/key-migrations';
import { InjectionToken } from '@angular/core';
import type { ProgressCatalog } from '../../domain/progress/progress-catalog';
import { loadProgressCatalog } from '../../domain/progress/progress-loader';

export const PROGRESS_CATALOG_LOADER = new InjectionToken<() => Promise<ProgressCatalog>>(
  'Progress catalog loader',
  { providedIn: 'root', factory: () => loadProgressCatalog },
);

export const PROGRESS_KEY_MIGRATIONS = new InjectionToken<readonly ProgressKeyMigration[]>(
  'Progress key migrations',
  { providedIn: 'root', factory: () => progressKeyMigrations },
);
