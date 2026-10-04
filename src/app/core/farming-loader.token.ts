import { InjectionToken } from '@angular/core';
import { loadFarmingLocations } from '../../domain/farming-loader';
import type { FarmingLocation } from '../../domain/farming-location.model';

export const FARMING_LOCATIONS_LOADER = new InjectionToken<
  () => Promise<readonly FarmingLocation[]>
>('Farming locations loader', { providedIn: 'root', factory: () => loadFarmingLocations });
