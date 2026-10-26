import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '../../components/icon/icon.component';
import { TileNotationService } from '../../../core/tile-notation.service';
import type { TileNotation } from '../../../../domain/maps/tile-notation';

@Component({
  selector: 'hwh-global-settings',
  imports: [IconComponent],
  templateUrl: './global-settings.component.html',
  styleUrl: './global-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:click)': 'closeOutside($event)' },
})
export class GlobalSettingsComponent {
  protected readonly notation = inject(TileNotationService);
  protected readonly gearRotation = signal(0);
  private readonly menu = viewChild<ElementRef<HTMLDetailsElement>>('settingsMenu');

  protected rotateGear(): void {
    this.gearRotation.update((rotation) => rotation + 90);
  }

  protected selectNotation(preference: TileNotation | undefined): void {
    void this.notation.setPreference(preference);
  }

  constructor() {
    inject(Router)
      .events.pipe(takeUntilDestroyed())
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Keep the setting open when only the notation or other query values change.
          const path = event.urlAfterRedirects.split(/[?#]/)[0];
          if (this.previousPath && path !== this.previousPath) this.close();
          this.previousPath = path;
        }
      });
  }

  private previousPath = inject(Router).url.split(/[?#]/)[0];

  protected closeOutside(event: MouseEvent): void {
    const menu = this.menu()?.nativeElement;
    if (event.target instanceof Node && menu && !menu.contains(event.target)) this.close();
  }

  protected closeWithEscape(event: Event): void {
    if (!this.menu()?.nativeElement.open) return;
    event.preventDefault();
    event.stopPropagation();
    this.close();
    this.menu()?.nativeElement.querySelector('summary')?.focus();
  }

  private close(): void {
    const menu = this.menu()?.nativeElement;
    if (menu) menu.open = false;
  }
}
