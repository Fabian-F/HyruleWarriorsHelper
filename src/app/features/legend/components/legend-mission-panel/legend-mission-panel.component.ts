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
@Component({
  selector: 'hwh-legend-mission-panel',
  imports: [
    RouterLink,
    IconComponent,
    RewardComponent,
    TreasureComponent,
    LegendCharacterLinksComponent,
  ],
  templateUrl: './legend-mission-panel.component.html',
  styleUrl: './legend-mission-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'complementary', 'aria-labelledby': 'mission-title' },
})
export class LegendMissionPanelComponent {
  readonly notation = inject(TileNotationService);
  readonly mission = input.required<LegendMission>();
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
