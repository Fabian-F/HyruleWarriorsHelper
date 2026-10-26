import { TileNotationService } from '../../../../core/tile-notation.service';
import { Router } from '@angular/router';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { RewardLocationLinkComponent } from '../reward-location-link.component';
import { ElementTagComponent } from '../../../../shared/components/element-tag/element-tag.component';
import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import type { CharacterWeaponView } from '../../../../../domain/characters/characters-page';
import { weaponAttributeNames } from '../../../../../data/weapon-attributes';
import { getWeaponSrc } from '../../../../shared/assets';

import {
  BUILD_TIERS,
  type BuildTier,
} from '../../../../../domain/characters/recommended-build.model';

@Component({
  selector: 'hwh-character-weapon',
  imports: [RewardLocationLinkComponent, ElementTagComponent, IconComponent],
  templateUrl: './character-weapon.component.html',
  styleUrl: './character-weapon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterWeaponComponent {
  readonly notation = inject(TileNotationService);
  readonly weaponData = input.required<CharacterWeaponView>({
    alias: 'weapon',
  });
  readonly buildTiers = BUILD_TIERS;
  readonly selectedBuildTier = signal<BuildTier>('4/4+');
  readonly activeBuild = computed(() => {
    const weapon = this.weaponData();
    return 'builds' in weapon
      ? weapon.builds.find((build) => build.tier === this.selectedBuildTier())
      : undefined;
  });

  onBuildTabKeydown(event: KeyboardEvent): void {
    const current = this.buildTiers.indexOf(this.selectedBuildTier());
    let next: number;
    switch (event.key) {
      case 'ArrowRight':
        next = (current + 1) % this.buildTiers.length;
        break;
      case 'ArrowLeft':
        next = (current + this.buildTiers.length - 1) % this.buildTiers.length;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = this.buildTiers.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    this.selectedBuildTier.set(this.buildTiers[next]);
    const tabList = (event.target as HTMLElement).closest('[role="tablist"]');
    tabList?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  showBuildInfo(tooltip: HTMLElement, button: HTMLElement): void {
    tooltip.showPopover();
    if (!CSS.supports('position-area', 'right')) {
      const anchor = button.getBoundingClientRect();
      const gap = 6;
      const width = tooltip.offsetWidth;
      const height = tooltip.offsetHeight;
      const left =
        anchor.right + gap + width <= window.innerWidth
          ? anchor.right + gap
          : anchor.left - gap - width;
      tooltip.style.left = `${Math.max(gap, Math.min(left, window.innerWidth - width - gap))}px`;
      tooltip.style.top = `${Math.max(gap, Math.min(anchor.top + anchor.height / 2 - height / 2, window.innerHeight - height - gap))}px`;
    }
  }

  hideBuildInfo(tooltip: HTMLElement): void {
    tooltip.hidePopover();
  }

  readonly rewardsLoaded = input(false);
  readonly expanded = input(false);
  readonly presentation = input<'card' | 'details'>('details');
  readonly linked = input(false);
  readonly copyStatus = signal('');
  readonly copied = signal(false);
  private readonly router = inject(Router);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private copyTimeout?: ReturnType<typeof setTimeout>;

  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.copyTimeout));
    afterRenderEffect((onCleanup) => {
      const linked = this.linked();
      this.rewardsLoaded();
      if (!linked || this.presentation() !== 'card') return;
      const timeout = setTimeout(() => {
        this.element.nativeElement.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'instant'
            : 'smooth',
          block: 'start',
        });
      }, 260);
      onCleanup(() => clearTimeout(timeout));
    });
  }

  async copyLink(): Promise<void> {
    clearTimeout(this.copyTimeout);
    const weapon = this.weaponData();
    const url = this.notation.shareUrl(
      this.router.createUrlTree(['/characters', weapon.characterId], {
        queryParams: { weapon: weapon.id },
      }),
    );
    try {
      await navigator.clipboard.writeText(url);
      if (this.destroyRef.destroyed) return;
      this.copied.set(true);
      this.copyStatus.set('Link copied');
    } catch {
      if (this.destroyRef.destroyed) return;
      this.copied.set(false);
      this.copyStatus.set('Could not copy link. Please try again.');
    }
    this.copyTimeout = setTimeout(() => {
      this.copied.set(false);
      this.copyStatus.set('');
    }, 3000);
  }
  readonly toggleRequested = output<void>();
  readonly attributeNames = weaponAttributeNames;
  readonly weaponSrc = getWeaponSrc;
  readonly missingImages = signal<ReadonlySet<string>>(new Set());

  hideMissingImage(src: string): void {
    this.missingImages.update((missing) => new Set([...missing, src]));
  }
}
