import { Component, DestroyRef, inject, signal } from '@angular/core';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  imports: [IconComponent],
  selector: 'hwh-map-share',
  templateUrl: './map-share.component.html',
  styleUrl: './map-share.component.scss',
})
export class MapShareComponent {
  protected readonly shareStatus = signal('');
  protected readonly shareStatusVisible = signal(false);
  private shareStatusTimeout?: ReturnType<typeof setTimeout>;
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.shareStatusTimeout));
  }

  protected async share(): Promise<void> {
    clearTimeout(this.shareStatusTimeout);
    try {
      await navigator.clipboard.writeText(window.location.href);
      if (this.destroyRef.destroyed) return;
      this.shareStatus.set('Link copied!');
    } catch {
      if (this.destroyRef.destroyed) return;
      this.shareStatus.set('Could not copy link. Please copy the URL from the address bar.');
    }
    this.shareStatusVisible.set(true);
    clearTimeout(this.shareStatusTimeout);
    this.shareStatusTimeout = setTimeout(() => this.shareStatusVisible.set(false), 3000);
  }
}
