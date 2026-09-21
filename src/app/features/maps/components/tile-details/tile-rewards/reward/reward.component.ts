import { Component, computed, input } from '@angular/core';
import type { Reward } from '../../../../../../../domain/maps/reward.model';
import { getCharacter } from '../../../../../../../data/characters';
import { getItemCard } from '../../../../../../../data/item-cards';

@Component({
  imports: [],
  selector: 'hwh-reward',
  styleUrl: './reward.component.scss',
  templateUrl: './reward.component.html',
})
export class RewardComponent {
  reward = input.required<Reward>();
  type = input.required<'arank' | 'clear'>();

  readonly name = computed(() => {
    const reward = this.reward();

    switch (reward.type) {
      case 'heart-container':
        return 'Heart Container';

      case 'heart-piece':
        return 'Heart Piece';

      case 'outfit':
        return reward.outfitName;

      case 'weapon':
        return reward.weaponName;

      case 'item-card':
        return getItemCard(reward.itemCardId).name;

      case 'fairy':
        return reward.text;

      case 'character':
        return getCharacter(reward.characterId).name;

      case 'material':
        return reward.materialName;

      case 'text':
        return reward.text;
    }
  });

  readonly character = computed(() => {
    const reward = this.reward();

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
