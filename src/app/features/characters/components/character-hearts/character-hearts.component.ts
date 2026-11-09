import { ProgressCheckboxComponent } from '../../../../shared/components/progress-checkbox/progress-checkbox.component';
import { ProgressService } from '../../../../core/progress.service';
import { getRewardLocationProgressKey } from '../../../../../data/progress/reward-keys';
import { RewardLocationLinkComponent } from '../reward-location-link.component';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import type { RewardLocation } from '../../../../../domain/characters/character-rewards';

@Component({
  selector: 'hwh-character-hearts',
  imports: [RewardLocationLinkComponent, ProgressCheckboxComponent],
  templateUrl: './character-hearts.component.html',
  styleUrl: './character-hearts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterHeartsComponent {
  private readonly progress = inject(ProgressService);
  readonly showProgress = computed(() => this.progress.enabled() && this.progress.visible());
  readonly progressKey = getRewardLocationProgressKey;
  readonly groupId = input.required<'heart-container' | 'heart-piece'>();
  readonly title = input.required<string>();
  readonly locations = input.required<readonly RewardLocation[]>();
  readonly rewardsLoaded = input(false);
  readonly expanded = input(false);
  readonly toggleRequested = output<void>();
}
