import type { FarmingLocation } from './farming-location.model';

export async function loadFarmingLocations(): Promise<readonly FarmingLocation[]> {
  const data = await import('../data/farming-locations');
  return data.farmingLocations;
}
