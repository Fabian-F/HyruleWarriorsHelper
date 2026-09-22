import { Component, computed, input } from '@angular/core';
import type { MapTile } from '../../../../../../domain/maps/tile.model';
import type { ItemCardId } from '../../../../../../domain/maps/item-card.model';
import { getItemCardSrc } from '../../../../../shared/assets';
import { DecimalPipe } from '@angular/common';
import { getItemCard } from '../../../../../../data/item-cards';

@Component({
  imports: [DecimalPipe],
  selector: 'hwh-tile-mission',
  styleUrl: './tile-mission.component.scss',
  templateUrl: './tile-mission.component.html',
})
export class TileMissionComponent {
  tile = input.required<MapTile>();

  requirements = computed(() => this.tile().requirements);
  specialRule = computed(() => this.tile().additionalRule);
  searchItems = computed<Map<ItemCardId, number> | undefined>(() => {
    const tile = this.tile();

    return tile.search?.reduce((current, search) => {
      current.set(search.itemCardId, (current.get(search.itemCardId) ?? 0) + 1);
      return current;
    }, new Map<ItemCardId, number>());
  });
  requiredCharacter = computed(() => undefined);

  protected readonly getItemCardSrc = getItemCardSrc;
  protected readonly getItemCard = getItemCard;
}
