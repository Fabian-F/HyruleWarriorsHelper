import { Component, computed, input } from '@angular/core';
import { getEnemy } from '../../../../../../data/enemies';
import type { AdventureFarmingLocation } from '../../../../../../domain/farming-lookup';

@Component({
  selector: 'hwh-tile-farming',
  templateUrl: './tile-farming.component.html',
  styleUrl: './tile-farming.component.scss',
})
export class TileFarmingComponent {
  readonly locations = input.required<readonly AdventureFarmingLocation[]>();
  readonly loading = input(false);
  readonly unavailable = input(false);
  readonly entries = computed(() =>
    this.locations().map((location) => ({
      location,
      enemy: getEnemy(location.enemyId),
    })),
  );
}
