import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { RewardLocationLinkComponent } from '../reward-location-link.component';
import { ElementTagComponent } from '../../../../shared/components/element-tag/element-tag.component';
import { SourceLinkComponent } from '../../../../shared/components/source-link/source-link.component';
import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
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

@Component({
  selector: 'hwh-character-weapon',
  imports: [RewardLocationLinkComponent, SourceLinkComponent, ElementTagComponent, IconComponent],
  templateUrl: './character-weapon.component.html',
  styleUrl: './character-weapon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterWeaponComponent {
  readonly weaponData = input.required<CharacterWeaponView>({
    alias: 'weapon',
  });
  readonly rewardsLoaded = input(false);
  readonly expanded = input(false);
  readonly presentation = input<'card' | 'details'>('details');
  readonly linked = input(false);
  readonly copyStatus = signal('');
  readonly copied = signal(false);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
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
    const path = this.router.serializeUrl(
      this.router.createUrlTree(['/characters', weapon.characterId], {
        queryParams: { weapon: weapon.id },
      }),
    );
    const url = new URL(this.location.prepareExternalUrl(path), window.location.href).href;
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
