import { inject } from '@angular/core';
import { type CanActivateFn, Router } from '@angular/router';

export const validCharacterGuard: CanActivateFn = async (route) => {
  const router = inject(Router);
  const { isCharacterId } = await import('../../../../data/characters');

  return (
    isCharacterId(route.paramMap.get('characterId') ?? '') ||
    router.createUrlTree(['/characters', 'link'])
  );
};
