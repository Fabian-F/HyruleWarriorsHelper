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
import {
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
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
  private readonly router = inject(Router);
  readonly hasPageBackdrop = signal(this.needsPageBackdrop(this.router.url));
  readonly isMenuOpen = signal(false);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hasPageBackdrop.set(this.needsPageBackdrop(event.urlAfterRedirects));
        this.closeMenu();
      }
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

  private needsPageBackdrop(url: string): boolean {
    return this.router.parseUrl(url).root.children[PRIMARY_OUTLET]?.segments[0]?.path !== 'maps';
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
