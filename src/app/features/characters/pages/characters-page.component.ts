import { Location, NgTemplateOutlet } from '@angular/common';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { CharacterOutfitsComponent } from '../components/character-outfits/character-outfits.component';
import type { WeaponId } from '../../../../domain/weapon.model';
import {
  afterRenderEffect,
  DestroyRef,
  ElementRef,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  resource,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { characters } from '../../../../data/characters';
import { getWeapon } from '../../../../data/weapons';
import type { CharacterId } from '../../../../domain/character.model';
import {
  filterCharacters,
  getCharacterContent,
} from '../../../../domain/characters/characters-page';
import { loadCharacterRewards } from '../../../../domain/characters/character-rewards';
import { getEnemySrc } from '../../../shared/assets';
import { CharacterSidebarComponent } from '../components/character-sidebar/character-sidebar.component';
import { CharacterHeartsComponent } from '../components/character-hearts/character-hearts.component';
import { CharacterBadgeMaterialsComponent } from '../components/character-badge-materials/character-badge-materials.component';
import { CharacterWeaponsComponent } from '../components/character-weapons/character-weapons.component';
import { RewardLocationsComponent } from '../components/reward-locations.component';

@Component({
  selector: 'hwh-characters-page',
  imports: [
    RouterLink,
    NgTemplateOutlet,
    IconComponent,
    CharacterSidebarComponent,
    RewardLocationsComponent,
    CharacterWeaponsComponent,
    CharacterHeartsComponent,
    CharacterOutfitsComponent,
    CharacterBadgeMaterialsComponent,
  ],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly fragment = toSignal(this.route.fragment, {
    initialValue: this.route.snapshot.fragment,
  });
  readonly sectionCopyStatus = signal<{ id: string; message: string; copied: boolean } | null>(
    null,
  );
  private copyTimeout?: ReturnType<typeof setTimeout>;
  private readonly router = inject(Router);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  private readonly queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });
  readonly rewards = resource({ loader: () => loadCharacterRewards() });
  readonly character = computed(
    () =>
      characters.find((character) => character.id === this.params().get('characterId')) ??
      characters[0],
  );
  readonly query = computed(() => this.queryParams().get('q') ?? '');
  readonly filteredCharacters = computed(() => filterCharacters(this.query()));
  readonly content = computed(() =>
    getCharacterContent(this.character().id, this.rewards.hasValue() ? this.rewards.value() : []),
  );
  readonly linkedWeapon = computed(
    () =>
      (!this.fragment()
        ? this.content().weapons.find((weapon) => weapon.id === this.queryParams().get('weapon'))
            ?.id
        : null) ?? null,
  );
  readonly defaultWeapon = computed(() => getWeapon(this.character().defaultWeaponId));
  readonly heartGroups = computed(
    () =>
      [
        {
          id: 'heart-container',
          name: 'Heart Containers',
          locations: this.content().heartContainers,
        },
        { id: 'heart-piece', name: 'Pieces of Heart', locations: this.content().heartPieces },
      ] as const,
  );
  readonly expandedHeart = signal<'heart-container' | 'heart-piece' | null>(null);
  readonly expandedWeapon = signal<WeaponId | null>(this.character().defaultWeaponId);

  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.copyTimeout));
    afterRenderEffect((onCleanup) => {
      const fragment = this.fragment();
      this.character();
      const loading = this.rewards.isLoading();
      if (!fragment || loading) return;
      const target = Array.from(
        this.element.nativeElement.querySelectorAll<HTMLElement>('[id]'),
      ).find(
        (element) => element.id === fragment && element.classList.contains('shareable-heading'),
      );
      if (!target) return;
      const timeout = setTimeout(
        () =>
          target.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
              ? 'instant'
              : 'smooth',
            block: 'start',
          }),
        280,
      );
      onCleanup(() => clearTimeout(timeout));
    });
    effect(() => {
      this.expandedWeapon.set(this.linkedWeapon() ?? this.character().defaultWeaponId);
      this.expandedHeart.set(null);
    });
  }

  async copySectionLink(id: string): Promise<void> {
    clearTimeout(this.copyTimeout);
    const path = this.router.serializeUrl(
      this.router.createUrlTree(['/characters', this.character().id], { fragment: id }),
    );
    const url = new URL(this.location.prepareExternalUrl(path), window.location.href).href;
    try {
      await navigator.clipboard.writeText(url);
      if (this.destroyRef.destroyed) return;
      this.sectionCopyStatus.set({ id, message: 'Link copied', copied: true });
    } catch {
      if (this.destroyRef.destroyed) return;
      this.sectionCopyStatus.set({
        id,
        message: 'Could not copy link. Please try again.',
        copied: false,
      });
    }
    this.copyTimeout = setTimeout(() => this.sectionCopyStatus.set(null), 3000);
  }

  toggleHeart(id: 'heart-container' | 'heart-piece'): void {
    this.expandedHeart.update((current) => (current === id ? null : id));
  }

  toggleWeapon(id: WeaponId): void {
    this.expandedWeapon.update((current) => (current === id ? null : id));
  }

  readonly portrait = getEnemySrc;

  changeQuery(q: string): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: q || null },
      queryParamsHandling: 'merge',
      preserveFragment: true,
      replaceUrl: true,
    });
  }
  chooseCharacter(id: CharacterId): void {
    void this.router.navigate(['/characters', id], { queryParams: { q: this.query() || null } });
  }
}
