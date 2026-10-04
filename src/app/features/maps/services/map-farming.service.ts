import { computed, inject, Injectable, resource } from '@angular/core';
import { FARMING_LOCATIONS_LOADER } from '../../../core/farming-loader.token';
export { FARMING_LOCATIONS_LOADER } from '../../../core/farming-loader.token';
import { createFarmingLookup, getFarmingLocations } from '../../../../domain/farming-lookup';
import type { MapId } from '../../../../domain/maps/map.model';
import type { TileId } from '../../../../domain/maps/tile.model';

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
