import { Component, computed, input } from '@angular/core';
import type { Treasure } from '../../../../../../../domain/maps/reward.model';
import { getCharacter } from '../../../../../../../data/characters';
import { getItemCard } from '../../../../../../../data/item-cards';

@Component({
  imports: [],
  selector: 'hwh-treasure',
  styleUrl: './treasure.component.scss',
  templateUrl: './treasure.component.html',
})
export class TreasureComponent {
  treasure = input.required<Treasure>();

  name = computed(() => {
    const treasure = this.treasure();

    switch (treasure.type) {
      case 'heart-piece':
        return 'Heart Piece';
      case 'heart-container':
        return 'Heart Container';
      case 'weapon':
        return treasure.weaponName;
      case 'fairy':
        return treasure.text;
      case 'character':
        return getCharacter(treasure.characterId).name;
      case 'material':
        return treasure.materialName;
      case 'item-card':
        return getItemCard(treasure.itemCardId).name;
      case 'outfit':
        return treasure.outfitName;
      case 'text':
        return treasure.text;
    }
  });

  location = computed(() => this.treasure().location);

  readonly character = computed(() => {
    const reward = this.treasure();

    switch (reward.type) {
      case 'heart-container':
      case 'heart-piece':
      case 'outfit':
      case 'character':
      case 'weapon':
        return getCharacter(reward.characterId).name;

      default:
        return undefined;
    }
  });
}
