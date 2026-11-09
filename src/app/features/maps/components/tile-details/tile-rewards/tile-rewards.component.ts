import { TileProgressComponent } from '../tile-progress.component';
import { getRewardProgressKey } from '../../../../../../data/progress/reward-keys';
import type { Reward } from '../../../../../../domain/maps/reward.model';
import { Component, computed, inject, input } from '@angular/core';
import { ProgressDirective } from '../../../../../shared/directives/progress.directive';
import { ProgressService } from '../../../../../core/progress.service';
import { aRankKey, occurrenceKey } from '../../../../../../domain/progress/progress-keys';
import type { MapId } from '../../../../../../domain/maps/map.model';
import type { MapTile, TileRewards } from '../../../../../../domain/maps/tile.model';
import { RewardComponent } from '../../../../../shared/components/reward/reward.component';
import { TreasureComponent } from '../../../../../shared/components/treasure/treasure.component';

interface MissionRewards {
  aRank?: TileRewards['aRank'];
  clear?: TileRewards['clear'];
}

@Component({
  imports: [TileProgressComponent, RewardComponent, TreasureComponent, ProgressDirective],
  selector: 'hwh-tile-rewards',
  styleUrl: './tile-rewards.component.scss',
  templateUrl: './tile-rewards.component.html',
})
export class TileRewardsComponent {
  tile = input.required<MapTile>();
  readonly hasTabs = input(false);
  readonly mapId = input.required<MapId>();
  readonly progress = inject(ProgressService);
  readonly source = computed(() => ({
    type: 'adventure' as const,
    mapId: this.mapId(),
    tileId: this.tile().id,
  }));
  readonly rankKey = computed(() => aRankKey(this.mapId(), this.tile().id));
  readonly rewardKey = (reward: Reward) => getRewardProgressKey(reward, this.source());
  readonly skulltulaKey = (id: string) => occurrenceKey('skulltula', this.source(), id);

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
