import { Component } from '@angular/core';
import { EnemyType } from 'src/app/models';
import * as enemyData from 'src/assets/data/enemies.data';

@Component({
  selector: 'hwh-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent {
  enemyData = enemyData;
  selectedEnemy?: EnemyType;

  constructor() {
    this.selectedEnemy = enemyData.Link;
  }

  selectEnemy(enemy: EnemyType) {
    this.selectedEnemy = enemy;
  }
}
