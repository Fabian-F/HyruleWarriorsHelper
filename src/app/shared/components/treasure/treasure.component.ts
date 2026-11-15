import { getWeapon } from '../../../../data/weapons';
import { Component, computed, input } from '@angular/core';
import type { Treasure } from '../../../../domain/maps/reward.model';
import { getCharacter } from '../../../../data/characters';
import { getTreasureName } from './treasure-name';

@Component({
  imports: [],
  selector: 'hwh-treasure',
  styleUrl: './treasure.component.scss',
  templateUrl: './treasure.component.html',
})
export class TreasureComponent {
  treasure = input.required<Treasure>();

  readonly progressLabel = computed(
    () => 'Collected: ' + this.name() + (this.character() ? ' - ' + this.character() : ''),
  );

  name = computed(() => getTreasureName(this.treasure()));

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
