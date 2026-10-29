import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, computed, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScreenWakeLockService {
  private readonly document = inject(DOCUMENT);
  private readonly navigator = this.document.defaultView?.navigator;
  readonly supported =
    !!this.document.defaultView?.isSecureContext &&
    !!this.navigator &&
    'wakeLock' in this.navigator;
  readonly enabled = signal(false);
  readonly active = signal(false);
  private readonly failed = signal(false);
  private lock?: WakeLockSentinel;
  private pending = false;
  private destroyed = false;

  readonly status = computed(() => {
    if (!this.supported) return 'Unavailable in this browser or connection. HTTPS is required.';
    if (!this.enabled())
      return 'Keep the screen on while this tab is visible. Applies to this visit.';
    if (this.active()) return 'Active while this tab is visible.';
    if (this.failed())
      return 'Could not keep the screen on. Check power-saving settings or switch off and on to retry.';
    return 'Paused. Resumes when you return to this tab, if your device allows it.';
  });

  constructor() {
    const onVisibilityChange = () => {
      if (this.document.visibilityState === 'visible') void this.acquire();
      else void this.release();
    };
    this.document.addEventListener('visibilitychange', onVisibilityChange);
    inject(DestroyRef).onDestroy(() => {
      this.destroyed = true;
      this.document.removeEventListener('visibilitychange', onVisibilityChange);
      void this.release();
    });
  }

  setEnabled(enabled: boolean): void {
    this.enabled.set(enabled && this.supported);
    this.failed.set(false);
    if (this.enabled()) void this.acquire();
    else void this.release();
  }

  private async acquire(): Promise<void> {
    if (
      !this.enabled() ||
      this.destroyed ||
      this.pending ||
      this.lock ||
      this.document.visibilityState !== 'visible'
    )
      return;
    this.pending = true;
    this.failed.set(false);
    try {
      const lock = await this.navigator!.wakeLock.request('screen');
      // The user may switch off or leave the tab while the request is pending.
      if (!this.enabled() || this.destroyed || this.document.visibilityState !== 'visible') {
        await lock.release();
        return;
      }
      this.lock = lock;
      this.active.set(!lock.released);
      lock.addEventListener(
        'release',
        () => {
          if (this.lock !== lock) return;
          this.lock = undefined;
          this.active.set(false);
        },
        { once: true },
      );
      if (lock.released) this.lock = undefined;
    } catch {
      this.failed.set(this.enabled());
    } finally {
      this.pending = false;
    }
  }

  private async release(): Promise<void> {
    const lock = this.lock;
    this.lock = undefined;
    this.active.set(false);
    try {
      await lock?.release();
    } catch {
      // The browser may already have released the lock.
    }
  }
}
