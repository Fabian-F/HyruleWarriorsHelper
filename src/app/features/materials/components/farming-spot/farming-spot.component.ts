import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { FarmingLocation } from '../../../../../domain/farming-location.model';
import {
  getFarmingGroup,
  getFarmingGroupName,
  isFarmingTileAvailable,
} from '../../../../../domain/materials/materials-page';

@Component({
  selector: 'hwh-farming-spot',
  imports: [RouterLink],
  templateUrl: './farming-spot.component.html',
  styleUrl: './farming-spot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.compact]': 'compact()' },
})
export class FarmingSpotComponent {
  readonly location = input.required<FarmingLocation>();
  readonly showMap = input(true);
  readonly compact = input(false);
  readonly mapName = computed(() => getFarmingGroupName(getFarmingGroup(this.location())));
  readonly available = computed(() => isFarmingTileAvailable(this.location()));
}
