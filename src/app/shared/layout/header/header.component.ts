import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  type ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'hwh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet, RouterLink, RouterLinkActive, IconComponent],
  host: { '(document:keydown.escape)': 'closeMenu(true)' },
})
export class HeaderComponent {
  readonly isMenuOpen = signal(false);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    inject(Router)
      .events.pipe(takeUntilDestroyed())
      .subscribe((event) => {
        if (event instanceof NavigationEnd) this.closeMenu();
      });

    afterNextRender(() => {
      const desktop = window.matchMedia('(min-width: 900px)');
      const onChange = () => {
        if (desktop.matches) this.closeMenu();
      };
      desktop.addEventListener('change', onChange);
      this.destroyRef.onDestroy(() => desktop.removeEventListener('change', onChange));
      onChange();
    });
  }

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(restoreFocus = false) {
    if (!this.isMenuOpen()) return;
    this.isMenuOpen.set(false);
    if (restoreFocus) this.menuButton()?.nativeElement.focus();
  }
}
