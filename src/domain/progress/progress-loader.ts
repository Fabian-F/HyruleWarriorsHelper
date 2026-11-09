import type { ProgressCatalog } from './progress-catalog';

let pending: Promise<ProgressCatalog> | undefined;

/** Loads only generated metadata. Full map data remains behind its existing lazy loaders. */
export function loadProgressCatalog(): Promise<ProgressCatalog> {
  return (pending ??= import('../../data/progress/catalog')
    .then((module) => module.progressCatalog)
    .catch((error: unknown) => {
      pending = undefined;
      throw error;
    }));
}
