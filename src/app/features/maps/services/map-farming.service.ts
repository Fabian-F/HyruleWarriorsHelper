import { computed, inject, Injectable, InjectionToken, resource } from '@angular/core';
import type { FarmingLocation } from '../../../../domain/farming-location.model';
import { loadFarmingLocations } from '../../../../domain/farming-loader';
import { createFarmingLookup, getFarmingLocations } from '../../../../domain/farming-lookup';
import type { MapId } from '../../../../domain/maps/map.model';
import type { TileId } from '../../../../domain/maps/tile.model';

export const FARMING_LOCATIONS_LOADER = new InjectionToken<
  () => Promise<readonly FarmingLocation[]>
>('Farming locations loader', { providedIn: 'root', factory: () => loadFarmingLocations });

const emptyLookup = createFarmingLookup([]);

@Injectable()
export class MapFarmingService {
  private readonly loadLocations = inject(FARMING_LOCATIONS_LOADER);
  private readonly data = resource({
    loader: async () => createFarmingLookup(await this.loadLocations()),
  });
  readonly loading = this.data.isLoading;
  readonly unavailable = computed(() => this.data.error() !== undefined);
  readonly lookup = computed(() => (this.data.hasValue() ? this.data.value() : emptyLookup));

  getLocations(mapId: MapId, tileId: TileId) {
    return getFarmingLocations(this.lookup(), mapId, tileId);
  }
}
