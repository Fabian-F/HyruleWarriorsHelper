import { NgTemplateOutlet } from '@angular/common';
import {
  afterEveryRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  signal,
  viewChild,
  type ElementRef,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import type { FarmingLocation } from '../../../../../domain/farming-location.model';
import {
  filterFarmingLocations,
  getFarmingGroup,
  getFarmingGroupName,
  getFarmingGroups,
  isFarmingTileAvailable,
  type FarmingGroup,
} from '../../../../../domain/materials/materials-page';
import { FarmingSpotComponent } from '../farming-spot/farming-spot.component';

@Component({
  selector: 'hwh-farming-locations-table',
  imports: [NgTemplateOutlet, RouterLink, FarmingSpotComponent],
  templateUrl: './farming-locations-table.component.html',
  styleUrl: './farming-locations-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(window:scroll)': 'updateStickyState()', '(window:resize)': 'updateStickyState()' },
})
export class FarmingLocationsTableComponent {
  private readonly mobileHeader = viewChild<ElementRef<HTMLElement>>('mobileHeader');
  readonly mobileHeaderSticky = signal(false);
  readonly locations = input.required<readonly FarmingLocation[]>();
  readonly group = input<FarmingGroup | 'all'>('all');
  readonly groupChange = output<FarmingGroup | 'all'>();
  readonly groups = computed(() => getFarmingGroups(this.locations()));
  readonly filteredLocations = computed(() =>
    filterFarmingLocations(this.locations(), this.group()),
  );
  readonly farmingMapName = (spot: FarmingLocation) => getFarmingGroupName(getFarmingGroup(spot));
  readonly farmingTileAvailable = isFarmingTileAvailable;

  constructor() {
    afterEveryRender({ read: () => this.updateStickyState() });
  }

  updateStickyState(): void {
    const header = this.mobileHeader()?.nativeElement;
    const bounds = header?.getBoundingClientRect();
    if (!header || !bounds?.height) {
      this.mobileHeaderSticky.set(false);
      return;
    }
    const stickyTop = Number.parseFloat(getComputedStyle(header).top);
    // Allow fractional CSS pixels while excluding the container's bottom boundary.
    this.mobileHeaderSticky.set(Math.abs(bounds.top - stickyTop) < 0.5);
  }
}
