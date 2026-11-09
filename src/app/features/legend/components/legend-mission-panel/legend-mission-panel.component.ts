import { getRewardProgressKey } from '../../../../../data/progress/reward-keys';
import type { Reward } from '../../../../../domain/maps/reward.model';
import { ProgressService } from '../../../../core/progress.service';
import { countProgress } from '../../../../../domain/progress/progress-statistics';
import { TileNotationService } from '../../../../core/tile-notation.service';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import type {
  LegendMission,
  LegendChapterId,
} from '../../../../../domain/legend/legend-mission.model';
import { legendChapters } from '../../../../../data/legend/chapters';
import { legendMissions } from '../../../../../data/legend/missions';
import { getCharacter } from '../../../../../data/characters';
import { getWeapon } from '../../../../../data/weapons';
import { getEnemy } from '../../../../../data/enemies';
import { farmingLocations } from '../../../../../data/farming-locations';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { RewardComponent } from '../../../../shared/components/reward/reward.component';
import { TreasureComponent } from '../../../../shared/components/treasure/treasure.component';
import { LegendCharacterLinksComponent } from '../legend-character-links/legend-character-links.component';
import { ProgressDirective } from '../../../../shared/directives/progress.directive';
import { legendSkulltulaKey } from '../../../../../domain/progress/progress-keys';
@Component({
  selector: 'hwh-legend-mission-panel',
  imports: [
    RouterLink,
    IconComponent,
    RewardComponent,
    TreasureComponent,
    LegendCharacterLinksComponent,
    ProgressDirective,
  ],
  templateUrl: './legend-mission-panel.component.html',
  styleUrl: './legend-mission-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'complementary', 'aria-labelledby': 'mission-title' },
})
export class LegendMissionPanelComponent {
  protected readonly progress = inject(ProgressService);
  readonly notation = inject(TileNotationService);
  readonly mission = input.required<LegendMission>();
  readonly progressSource = computed(() => ({
    type: 'legend' as const,
    missionId: this.mission().id,
  }));
  readonly progressScope = computed(() =>
    this.progress.statisticsIndex()?.sources.get('legend:' + this.mission().id),
  );
  readonly progressCount = computed(() => {
    const scope = this.progressScope();
    return scope ? countProgress(scope.keys, this.progress.completed()) : null;
  });
  readonly rewardKey = (reward: Reward) => getRewardProgressKey(reward, this.progressSource());
  readonly skulltulaKey = (number: number) => legendSkulltulaKey(this.mission().id, number);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly characterUnlocks = computed(() =>
    this.mission()
      .clearRewards.filter((reward) => reward.type === 'character')
      .map((reward) => reward.characterId),
  );
  readonly otherCompletionRewards = computed(() =>
    this.mission().clearRewards.filter((reward) => reward.type !== 'character'),
  );
  readonly characterName = (id: Parameters<typeof getCharacter>[0]) => getCharacter(id).name;
  readonly weaponName = (id: Parameters<typeof getWeapon>[0]) => getWeapon(id).name;
  readonly enemyName = (id: Parameters<typeof getEnemy>[0]) => getEnemy(id).name;
  readonly missionName = (id: string) =>
    legendMissions.find((mission) => mission.id === id)?.name ?? id;
  readonly farming = computed(() =>
    farmingLocations.filter(
      (spot) => spot.type === 'legend' && spot.missionId === this.mission().id,
    ),
  );
  constructor() {
    effect(() => {
      this.mission();
      this.element.nativeElement.scrollTop = 0;
    });
  }
  chapterLabel(id: LegendChapterId) {
    return legendChapters[id];
  }
}
