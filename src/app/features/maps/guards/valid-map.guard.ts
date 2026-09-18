import { type CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { mapLoaders } from '../../../../domain/maps/map-loader';
import type { MapId } from '../../../../domain/maps/map.model';

export const validMapGuard: CanActivateFn = (route) => {
  const mapId = route.paramMap.get('mapId');

  return mapId && isMapId(mapId) ? true : inject(Router).createUrlTree(['/maps']);
};

export function isMapId(value: string): value is MapId {
  return value in mapLoaders;
}
