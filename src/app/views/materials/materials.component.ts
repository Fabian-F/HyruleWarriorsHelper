import { Component } from '@angular/core';
import { EnemyType, FarmingLocations, TileLocation } from 'src/app/models';
import * as enemyDataStorage from 'src/assets/data/enemies.data';

@Component({
  selector: 'hwh-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent {
  enemyData: Array<EnemyType> = [];
  selectedEnemy?: EnemyType;

  constructor() {
    this.enemyData = Object.values(enemyDataStorage).sort((a, b) => {
      return (a.sortingIndex ?? 0) - (b.sortingIndex ?? 0);
    });
    this.selectedEnemy = this.enemyData[0];
  }

  selectEnemy(enemy: EnemyType) {
    this.selectedEnemy = enemy;
  }

  getSortedFarmLocations(enemy: EnemyType): FarmingLocations {
    return enemy.farmLocations.sort((a, b) => {
      if (a.tiles.some((tile: TileLocation) => tile.recommended)) return -1;
      return 1;
    })
  }
}
