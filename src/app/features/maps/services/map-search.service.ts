import { computed, inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';
import type { FarmingLocation } from '../../../../domain/farming-location.model';
import { MapContext } from './map-context.service';
import {
  createMapSearchEntries,
  emptySearch,
  isSearchActive,
  type MapSearchState,
  matchesTile,
  parseSearch,
  serializeSearch,
} from '../../../../domain/maps/map-search';

const emptyFarmingLocations: readonly FarmingLocation[] = [];

@Injectable()
export class MapSearchService {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly context = inject(MapContext);

  private readonly params = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });
  private readonly pending = signal<MapSearchState | undefined>(undefined);

  readonly state = computed(() => this.pending() ?? parseSearch(this.params()));
  private readonly farmingLocations = toSignal(
    from(
      import('../../../../data/farming-locations').then(
        (m): readonly FarmingLocation[] => m.farmingLocations,
      ),
    ),
    { initialValue: emptyFarmingLocations },
  );
  readonly entries = computed(() => {
    const map = this.context.map();
    return map ? createMapSearchEntries(map, this.farmingLocations()) : [];
  });
  readonly active = computed(() => isSearchActive(this.state()));
  readonly matches = computed(
    () =>
      new Set(
        this.entries()
          .filter((entry) => matchesTile(entry, this.state()))
          .map((entry) => entry.tile.id),
      ),
  );

  update(change: Partial<MapSearchState>): void {
    const next = { ...this.state(), ...change };
    this.pending.set(next);
    void this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: serializeSearch(next),
        queryParamsHandling: 'merge',
        preserveFragment: true,
        replaceUrl: true,
      })
      .finally(() => {
        if (this.pending() === next) this.pending.set(undefined);
      });
  }

  reset(): void {
    this.update(emptySearch);
  }
}
