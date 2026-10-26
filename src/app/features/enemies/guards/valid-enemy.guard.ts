import { inject } from '@angular/core';
import { type CanActivateFn, Router } from '@angular/router';

export const validEnemyGuard: CanActivateFn = async (route) => {
  const router = inject(Router);
  const { enemies } = await import('../../../../data/enemies');

  return (
    enemies.some((enemy) => enemy.id === route.paramMap.get('enemyId')) ||
    router.createUrlTree(['/enemies', 'aeralfos'], {
      queryParams: route.queryParams,
      fragment: route.fragment ?? undefined,
    })
  );
};
