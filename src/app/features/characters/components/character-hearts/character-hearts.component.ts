import { RewardLocationLinkComponent } from '../reward-location-link.component';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { RewardLocation } from '../../../../../domain/characters/character-rewards';

@Component({
  selector: 'hwh-character-hearts',
  imports: [RewardLocationLinkComponent],
  templateUrl: './character-hearts.component.html',
  styleUrl: './character-hearts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterHeartsComponent {
  readonly groupId = input.required<'heart-container' | 'heart-piece'>();
  readonly title = input.required<string>();
  readonly locations = input.required<readonly RewardLocation[]>();
  readonly rewardsLoaded = input(false);
  readonly expanded = input(false);
  readonly toggleRequested = output<void>();
}
