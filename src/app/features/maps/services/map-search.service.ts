import { TileNotationService } from '../../../core/tile-notation.service';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MapFarmingService } from './map-farming.service';
import { MapContext } from './map-context.service';
import {
  formatTileId,
  getUrlTileNotation,
  parseTileCoordinate,
} from '../../../../domain/maps/tile-notation';
import {
  createMapSearchEntries,
  emptySearch,
  isSearchActive,
  type MapSearchState,
  matchesTile,
  parseSearch,
  serializeSearch,
} from '../../../../domain/maps/map-search';

@Injectable()
export class MapSearchService {
  readonly notation = inject(TileNotationService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly context = inject(MapContext);

  private readonly params = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });
  private readonly pending = signal<MapSearchState | undefined>(undefined);

  readonly state = computed(() => {
    if (this.pending()) return this.pending()!;
    const state = parseSearch(this.params());
    const source = getUrlTileNotation(this.params()) ?? 'column-row';
    const coordinate = parseTileCoordinate(state.text, source);
    return coordinate ? { ...state, text: formatTileId(coordinate, this.notation.mode()) } : state;
  });
  private readonly farming = inject(MapFarmingService);
  readonly entries = computed(() => {
    const map = this.context.map();
    return map ? createMapSearchEntries(map, this.farming.lookup()) : [];
  });
  readonly active = computed(() => isSearchActive(this.state()));
  readonly matches = computed(
    () =>
      new Set(
        this.entries()
          .filter((entry) => matchesTile(entry, this.state(), this.notation.mode()))
          .map((entry) => entry.tile.id),
      ),
  );

  update(change: Partial<MapSearchState>): void {
    const next = { ...this.state(), ...change };
    this.pending.set(next);
    void this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: this.notation.linkParams(serializeSearch(next)),
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
