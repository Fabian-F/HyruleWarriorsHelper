import { Component, computed, input } from '@angular/core';
import type { MapTile, TileRewards } from '../../../../../../domain/maps/tile.model';
import { RewardComponent } from './reward/reward.component';
import { TreasureComponent } from './treasure/treasure.component';

interface MissionRewards {
  aRank?: TileRewards['aRank'];
  clear?: TileRewards['clear'];
}

@Component({
  imports: [RewardComponent, TreasureComponent],
  selector: 'hwh-tile-rewards',
  styleUrl: './tile-rewards.component.scss',
  templateUrl: './tile-rewards.component.html',
})
export class TileRewardsComponent {
  tile = input.required<MapTile>();

  rewards = computed<MissionRewards | undefined>(() => {
    const aRank = this.tile().rewards?.aRank;
    const clear = this.tile().rewards?.clear;

    if (!aRank && !clear) return undefined;

    return {
      aRank: this.tile().rewards?.aRank,
      clear: this.tile().rewards?.clear,
    };
  });
  treasure = computed(() => this.tile().rewards?.treasure);
  skulltulas = computed(() => this.tile().rewards?.skulltulas);
}
