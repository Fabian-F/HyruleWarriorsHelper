import { CharacterOutfitsComponent } from '../components/character-outfits/character-outfits.component';
import type { WeaponId } from '../../../../domain/weapon.model';
import {
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
import { CharacterWeaponComponent } from '../components/character-weapon/character-weapon.component';
import { RewardLocationsComponent } from '../components/reward-locations.component';

@Component({
  selector: 'hwh-characters-page',
  imports: [
    RouterLink,
    CharacterSidebarComponent,
    RewardLocationsComponent,
    CharacterWeaponComponent,
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
    effect(() => {
      this.expandedWeapon.set(this.character().defaultWeaponId);
      this.expandedHeart.set(null);
    });
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
      replaceUrl: true,
    });
  }
  chooseCharacter(id: CharacterId): void {
    void this.router.navigate(['/characters', id], { queryParams: { q: this.query() || null } });
  }
}
