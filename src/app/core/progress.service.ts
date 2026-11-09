import type { MigratedProgressKey } from '../../domain/progress/progress-migrations';
import { DOCUMENT } from '@angular/common';
import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import type { ProgressCatalog } from '../../domain/progress/progress-catalog';
import type { ProgressKey } from '../../domain/progress/progress-keys';
import {
  changeProgress,
  createProgressIndex,
  type ProgressIndex,
} from '../../domain/progress/progress-state';
import {
  createProgressProfile,
  exportProgress,
  readProgress,
  inspectProgress,
  previewProgressImport,
  type ProgressChangePreview,
  type ProgressDestructivePreview,
  type ProgressImportMode,
  type ProgressImportPreview,
  type ProgressProfile,
} from '../../domain/progress/progress-transfer';
import { PROGRESS_CATALOG_LOADER, PROGRESS_KEY_MIGRATIONS } from './progress-catalog-loader.token';
import { createProgressStatisticsIndex } from '../../domain/progress/progress-statistics';

export const PROGRESS_STORAGE_KEY = 'hwh.progress';
export interface ProgressError {
  readonly kind: 'read' | 'write' | 'validation' | 'catalog' | 'conflict';
  readonly message: string;
}

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly document = inject(DOCUMENT);
  private readonly loader = inject(PROGRESS_CATALOG_LOADER);
  private readonly migrations = inject(PROGRESS_KEY_MIGRATIONS);
  private readonly migratedKeys = signal<readonly MigratedProgressKey[]>([]);
  readonly migrated = this.migratedKeys.asReadonly();
  private readonly destroyRef = inject(DestroyRef);
  private readonly profile = signal<ProgressProfile | null>(null);
  private readonly index = signal<ProgressIndex | null>(null);
  private readonly metadata = signal<ProgressCatalog | null>(null);
  private readonly failure = signal<ProgressError | null>(null);
  private readonly initialized = signal(false);
  private indexPromise: Promise<ProgressIndex> | undefined;
  private initialRead: Promise<boolean> | undefined;
  private operations: Promise<unknown> = Promise.resolve();
  private lastStoredValue: string | null | undefined;
  private revision = 0;
  private pending:
    { preview: ProgressChangePreview; revision: number; next: ProgressProfile | null } | undefined;

  readonly ready = this.initialized.asReadonly();
  readonly error = this.failure.asReadonly();
  readonly catalog = this.metadata.asReadonly();
  readonly statisticsIndex = computed(() => {
    const catalog = this.catalog();
    return catalog ? createProgressStatisticsIndex(catalog) : null;
  });
  readonly enabled = computed(() => this.profile() !== null);
  readonly visible = computed(() => this.profile()?.visible ?? false);
  readonly completed = computed<ReadonlySet<ProgressKey>>(() => {
    const index = this.index();
    return new Set(
      (this.profile()?.completed ?? []).flatMap((key) => {
        const entry = index?.entries.get(key);
        return entry ? [entry.canonicalKey] : [];
      }),
    );
  });
  readonly compatibility = computed(() => {
    const profile = this.profile();
    const index = this.index();
    return profile && index ? inspectProgress(profile, index) : { unresolved: [], differences: [] };
  });

  constructor() {
    const window = this.document.defaultView;
    const onStorage = (event: StorageEvent) => {
      if (event.key === PROGRESS_STORAGE_KEY || event.key === null) void this.reload();
    };
    window?.addEventListener('storage', onStorage);
    this.destroyRef.onDestroy(() => window?.removeEventListener('storage', onStorage));
    void this.initialize();
  }

  initialize(): Promise<boolean> {
    return (this.initialRead ??= this.readLatest().finally(() => this.initialized.set(true)));
  }

  reload(): Promise<boolean> {
    return this.run(async () => this.readLatest());
  }

  isCompleted(key: ProgressKey): boolean {
    const canonical = this.index()?.entries.get(key)?.canonicalKey;
    return canonical !== undefined && this.completed().has(canonical);
  }

  enable(): Promise<boolean> {
    return this.run(async () => {
      if (!(await this.readLatest())) return false;
      if (this.profile()) return true;
      if (!(await this.ensureIndex())) return false;
      return this.commit(createProgressProfile());
    });
  }

  setVisible(visible: boolean): Promise<boolean> {
    return this.run(async () => {
      if (!(await this.readLatest())) return false;
      const profile = this.profile();
      if (!profile) return false;
      if (profile.visible === visible) return true;
      return this.commit(createProgressProfile(visible, profile.completed));
    });
  }

  setCompleted(key: ProgressKey, checked: boolean): Promise<boolean> {
    return this.setManyCompleted([key], checked);
  }

  /** Apply a fixed selection with the usual links and save it atomically. */
  setManyCompleted(keys: readonly ProgressKey[], checked: boolean): Promise<boolean> {
    const selection = [...new Set(keys)];
    return this.run(async () => {
      if (!(await this.readLatest())) return false;
      const profile = this.profile();
      const index = this.index();
      if (!profile || !index) return false;
      try {
        let next = this.completed();
        for (const key of selection) next = changeProgress(index, next, key, checked);
        return this.commit(
          createProgressProfile(profile.visible, [...next, ...this.compatibility().unresolved]),
        );
      } catch (cause) {
        this.fail('validation', cause);
        return false;
      }
    });
  }

  /** Preparation reads and validates; only confirm() may write the imported state. */
  prepareImport(json: string, mode: ProgressImportMode): Promise<ProgressImportPreview | null> {
    return this.run(async () => {
      this.pending = undefined;
      if (!(await this.readLatest())) return null;
      const index = await this.ensureIndex();
      if (!index) return null;
      try {
        const incoming = readProgress(json, index);
        const { preview, next } = previewProgressImport(
          this.profile(),
          incoming.profile,
          mode,
          index,
          incoming.migrated,
        );
        this.pending = { preview, next, revision: this.revision };
        return preview;
      } catch (cause) {
        this.fail('validation', cause);
        return null;
      }
    });
  }

  prepareReset(): Promise<ProgressDestructivePreview | null> {
    return this.prepareDestructive('reset');
  }

  prepareStop(): Promise<ProgressDestructivePreview | null> {
    return this.prepareDestructive('stop');
  }

  /** The exact, current preview must be explicitly submitted after the user confirms. */
  confirm(preview: ProgressChangePreview): Promise<boolean> {
    return this.run(async () => {
      if (!(await this.readLatest())) return false;
      const pending = this.pending;
      if (!pending || pending.preview !== preview || pending.revision !== this.revision) {
        this.fail(
          'conflict',
          'Progress changed or this confirmation was cancelled. Review the action again.',
        );
        return false;
      }
      return this.commit(pending.next);
    });
  }

  cancel(preview: ProgressChangePreview): void {
    if (this.pending?.preview === preview) this.pending = undefined;
  }

  /** Export is independent of pending confirmations and never removes stored data. */
  exportJson(): string | null {
    const profile = this.profile();
    return profile ? exportProgress(profile) : null;
  }

  private prepareDestructive(kind: 'reset' | 'stop'): Promise<ProgressDestructivePreview | null> {
    return this.run(async () => {
      this.pending = undefined;
      if (!(await this.readLatest())) return null;
      const profile = this.profile();
      if (!profile) return null;
      const preview: ProgressDestructivePreview = {
        kind,
        completedCount: profile.completed.length,
        unresolvedCount: this.compatibility().unresolved.length,
      };
      this.pending = {
        preview,
        revision: this.revision,
        next: kind === 'stop' ? null : createProgressProfile(profile.visible),
      };
      return preview;
    });
  }

  private run<T>(operation: () => Promise<T>): Promise<T> {
    const result = this.operations.then(async () => {
      await this.initialize();
      return operation();
    });
    this.operations = result.catch(() => {});
    return result;
  }

  private async ensureIndex(): Promise<ProgressIndex | null> {
    try {
      return await (this.indexPromise ??= this.loader().then((catalog) => {
        const index = createProgressIndex(catalog, this.migrations);
        this.metadata.set(catalog);
        this.index.set(index);
        return index;
      }));
    } catch (cause) {
      this.indexPromise = undefined;
      this.fail(
        'catalog',
        `Progress metadata could not be loaded. Please try again. ${this.message(cause)}`,
      );
      return null;
    }
  }

  private storage(): Storage {
    const window = this.document.defaultView;
    if (!window) throw new Error('Browser storage is not available.');
    return window.localStorage;
  }

  private async readLatest(): Promise<boolean> {
    let raw: string | null;
    try {
      raw = this.storage().getItem(PROGRESS_STORAGE_KEY);
    } catch (cause) {
      this.fail(
        'read',
        `Saved progress could not be read. No data was changed. ${this.message(cause)}`,
      );
      return false;
    }
    if (raw === this.lastStoredValue) {
      this.failure.set(null);
      return true;
    }
    let profile: ProgressProfile | null = null;
    let migrated: readonly MigratedProgressKey[] = [];
    if (raw !== null) {
      const index = await this.ensureIndex();
      if (!index) return false;
      try {
        const result = readProgress(raw, index);
        profile = result.profile;
        migrated = result.migrated;
      } catch (cause) {
        this.fail(
          'validation',
          `Saved progress is invalid. It has been preserved without changes. ${this.message(cause)}`,
        );
        return false;
      }
    }
    this.adopt(profile, raw, migrated);
    this.failure.set(null);
    return true;
  }

  private async commit(next: ProgressProfile | null): Promise<boolean> {
    try {
      const storage = this.storage();
      // Detect changes made by another tab while metadata was loading or a dialog was open.
      if (storage.getItem(PROGRESS_STORAGE_KEY) !== this.lastStoredValue) {
        if (await this.readLatest())
          this.fail(
            'conflict',
            'Progress changed in another tab. Review the latest state and try again.',
          );
        return false;
      }
      const raw = next ? exportProgress(next) : null;
      if (raw === null) storage.removeItem(PROGRESS_STORAGE_KEY);
      else storage.setItem(PROGRESS_STORAGE_KEY, raw);
      // Publish changes only after storage succeeds; failed writes never look successful.
      this.adopt(next, raw);
      this.failure.set(null);
      return true;
    } catch (cause) {
      this.fail(
        'write',
        `Progress could not be saved. The change was not applied. ${this.message(cause)}`,
      );
      return false;
    }
  }

  private adopt(
    profile: ProgressProfile | null,
    raw: string | null,
    migrated: readonly MigratedProgressKey[] = [],
  ): void {
    this.migratedKeys.set(migrated);
    this.profile.set(profile);
    this.lastStoredValue = raw;
    this.revision++;
    this.pending = undefined;
  }

  private fail(kind: ProgressError['kind'], cause: unknown): void {
    this.failure.set({ kind, message: this.message(cause) });
  }

  private message(cause: unknown): string {
    return cause instanceof Error ? cause.message : String(cause);
  }
}
