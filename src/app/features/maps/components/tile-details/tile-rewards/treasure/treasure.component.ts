import { getMaterial } from '../../../../../../../data/materials';
import { getWeapon } from '../../../../../../../data/weapons';
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

  readonly material = computed(() => {
    const treasure = this.treasure();
    return treasure.type === 'material' && treasure.materialId
      ? getMaterial(treasure.materialId)
      : undefined;
  });

  name = computed(() => {
    const treasure = this.treasure();

    switch (treasure.type) {
      case 'heart-piece':
        return 'Heart Piece';
      case 'heart-container':
        return 'Heart Container';
      case 'weapon':
        return `${getWeapon(treasure.weaponId).name} Lv.${treasure.level}`;
      case 'fairy':
        return treasure.text;
      case 'character':
        return getCharacter(treasure.characterId).name;
      case 'material':
        return this.material()?.name ?? 'Material';
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
        return getCharacter(reward.characterId).name;

      case 'weapon':
        return getCharacter(getWeapon(reward.weaponId).characterId).name;

      default:
        return undefined;
    }
  });
}
