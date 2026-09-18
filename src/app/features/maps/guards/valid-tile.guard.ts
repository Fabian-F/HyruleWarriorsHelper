import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { loadMap } from '../../../../domain/maps/map-loader';
import { isMapId } from './valid-map.guard';

export const validTileGuard: CanActivateFn = async (route) => {
  const router = inject(Router);

  const mapId = route.parent?.paramMap.get('mapId');
  const tileId = route.paramMap.get('tileId');

  if (!mapId || !isMapId(mapId)) {
    return router.createUrlTree(['/maps']);
  }

  const map = await loadMap(mapId);

  const tileExists = map.tiles.some((tile) => tile.id === tileId);

  if (!tileExists) {
    return router.createUrlTree(['/maps', mapId]);
  }

  return true;
};
