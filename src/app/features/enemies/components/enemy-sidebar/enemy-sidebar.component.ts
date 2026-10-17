import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { Enemy, EnemyId } from '../../../../../domain/enemy.model';
import { getEnemySrc } from '../../../../shared/assets';
import { SelectionSidebarComponent } from '../../../../shared/components/selection-sidebar/selection-sidebar.component';
import {
  enemyCategories,
  type EnemyCategory,
} from '../../../../../domain/enemies/enemies-page';

@Component({
  selector: 'hwh-enemy-sidebar',
  imports: [SelectionSidebarComponent],
  templateUrl: './enemy-sidebar.component.html',
  styleUrl: './enemy-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnemySidebarComponent {
  readonly enemy = input.required<Enemy>();
  readonly enemies = input.required<readonly Enemy[]>();
  readonly query = input('');
  readonly queryChange = output<string>();
  readonly enemySelected = output<EnemyId>();
  readonly enemySrc = getEnemySrc;
  readonly category = input<EnemyCategory>('all');
  readonly categoryChange = output<EnemyCategory>();
  readonly categories = enemyCategories;
}
