import { Component, computed, ElementRef, inject, signal } from '@angular/core';
import { enemies } from '../../../../../data/enemies';
import type { EnemyId } from '../../../../../domain/enemy.model';
import { characters } from '../../../../../data/characters';
import { itemCards } from '../../../../../data/item-cards';
import { type SearchKind, searchKinds } from '../../../../../domain/maps/map-search';
import type { CharacterId } from '../../../../../domain/character.model';
import type { ItemCardId } from '../../../../../domain/maps/item-card.model';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { MapSearchService } from '../../services/map-search.service';

@Component({
  selector: 'hwh-map-search',
  imports: [IconComponent],
  templateUrl: './map-search.component.html',
  styleUrl: './map-search.component.scss',
  host: { '(document:pointerdown)': 'outside($event)' },
})
export class MapSearchComponent {
  readonly search = inject(MapSearchService);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly open = signal(false);
  readonly characterQuery = signal('');
  readonly cardQuery = signal('');
  readonly enemyQuery = signal('');

  readonly kinds = searchKinds.filter((k) => k.id !== 'item-card' && k.id !== 'text');

  readonly characters = computed(() =>
    characters.filter((c) => c.name.toLowerCase().includes(this.characterQuery().toLowerCase())),
  );
  readonly selectedCharacters = computed(() =>
    characters.filter((c) => this.search.state().characters.includes(c.id)),
  );
  readonly availableFarmingEnemies = computed(
    () => new Set(this.search.entries().flatMap((entry) => entry.farmingEnemies)),
  );
  readonly farmingEnemies = computed(() =>
    enemies.filter((enemy) => enemy.name.toLowerCase().includes(this.enemyQuery().toLowerCase())),
  );
  readonly selectedFarmingEnemies = computed(() =>
    enemies.filter((enemy) => this.search.state().farmingEnemies.includes(enemy.id)),
  );
  readonly selectedKinds = computed(() =>
    searchKinds.filter((k) => this.search.state().kinds.includes(k.id)),
  );
  readonly selectedCards = computed(() =>
    itemCards.filter((c) => this.search.state().cards.includes(c.id)),
  );
  readonly availableCards = computed(
    () =>
      new Set(
        this.search
          .entries()
          .flatMap((entry) =>
            this.search.state().cardMode === 'required'
              ? entry.requiredCards
              : entry.rewards.flatMap((r) => (r.card ? [r.card] : [])),
          ),
      ),
  );
  readonly cards = computed(() =>
    itemCards.filter(
      (c) =>
        (this.availableCards().has(c.id) || this.search.state().cards.includes(c.id)) &&
        c.name.toLowerCase().includes(this.cardQuery().toLowerCase()),
    ),
  );

  text(value: string): void {
    this.search.update({ text: value });
  }

  character(id: CharacterId): void {
    const selected = this.search.state().characters;
    this.search.update({
      characters: selected.includes(id) ? selected.filter((v) => v !== id) : [...selected, id],
    });
  }

  farmingEnemy(id: EnemyId): void {
    const selected = this.search.state().farmingEnemies;
    this.search.update({
      farmingEnemies: selected.includes(id) ? selected.filter((v) => v !== id) : [...selected, id],
    });
  }

  kind(id: SearchKind): void {
    const selected = this.search.state().kinds;
    this.search.update({
      kinds: selected.includes(id) ? selected.filter((v) => v !== id) : [...selected, id],
    });
  }

  card(id: ItemCardId): void {
    const selected = this.search.state().cards;
    this.search.update({
      cardsEnabled: true,
      cards: selected.includes(id) ? selected.filter((v) => v !== id) : [...selected, id],
    });
  }

  close(): void {
    this.open.set(false);
    this.element.nativeElement.querySelector<HTMLButtonElement>('.filter-toggle')?.focus();
  }

  outside(event: PointerEvent): void {
    if (event.target instanceof Node && !this.element.nativeElement.contains(event.target))
      this.open.set(false);
  }
}
