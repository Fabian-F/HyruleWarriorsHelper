import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { mapMetadata } from '../data/maps/map-metadata';
import { validMapGuard } from './features/maps/guards/valid-map.guard';
import { TileDetailsComponent } from './features/maps/components/tile-details/tile-details.component';
import { validTileGuard } from './features/maps/guards/valid-tile.guard';

export const routes: Routes = [
  { path: 'characters', redirectTo: 'characters/link', pathMatch: 'full' },
  {
    path: 'characters/:characterId',
    title: 'Characters',
    canActivate: [
      async (route) => {
        const router = inject(Router);
        const { isCharacterId } = await import('../data/characters');
        return (
          isCharacterId(route.paramMap.get('characterId') ?? '') ||
          router.createUrlTree(['/characters', 'link'])
        );
      },
    ],
    loadComponent: () =>
      import('./features/characters/pages/characters-page.component').then(
        (m) => m.CharactersPageComponent,
      ),
  },
  {
    path: 'materials',
    pathMatch: 'full',
    redirectTo: ({ queryParams, fragment }) =>
      inject(Router).createUrlTree(['/enemies', 'aeralfos'], {
        queryParams,
        fragment: fragment ?? undefined,
      }),
  },
  {
    path: 'materials/:enemyId',
    pathMatch: 'full',
    redirectTo: ({ params, queryParams, fragment }) =>
      inject(Router).createUrlTree(['/enemies', params['enemyId']], {
        queryParams,
        fragment: fragment ?? undefined,
      }),
  },
  {
    path: 'enemies',
    pathMatch: 'full',
    redirectTo: ({ queryParams, fragment }) =>
      inject(Router).createUrlTree(['/enemies', 'aeralfos'], {
        queryParams,
        fragment: fragment ?? undefined,
      }),
  },
  {
    path: 'enemies/:enemyId',
    title: 'Enemies',
    canActivate: [
      async (route) => {
        const router = inject(Router);
        const { enemies } = await import('../data/enemies');
        return (
          enemies.some((enemy) => enemy.id === route.paramMap.get('enemyId')) ||
          router.createUrlTree(['/enemies', 'aeralfos'])
        );
      },
    ],
    loadComponent: () =>
      import('./features/enemies/pages/enemies-page.component').then((m) => m.EnemiesPageComponent),
  },
  { path: 'home', redirectTo: 'maps/adventure' },
  { path: 'maps', redirectTo: 'maps/adventure', pathMatch: 'full' },
  {
    path: 'maps/:mapId',
    title: (route) =>
      mapMetadata.find((map) => map.id === route.paramMap.get('mapId'))?.name ?? 'Maps',
    canActivate: [validMapGuard],
    loadComponent: () =>
      import('./features/maps/pages/map-page.component').then((m) => m.MapPageComponent),
    children: [
      {
        path: ':tileId',
        canActivate: [validTileGuard],
        component: TileDetailsComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'maps/adventure',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'maps/adventure',
  },
];
