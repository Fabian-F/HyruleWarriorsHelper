import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { validCharacterGuard } from './features/characters/guards/valid-character.guard';
import { validEnemyGuard } from './features/enemies/guards/valid-enemy.guard';
import { mapMetadata } from '../data/maps/map-metadata';
import { validMapGuard } from './features/maps/guards/valid-map.guard';
import { TileDetailsComponent } from './features/maps/components/tile-details/tile-details.component';
import { validTileGuard } from './features/maps/guards/valid-tile.guard';

export const routes: Routes = [
  { path: 'characters', redirectTo: 'characters/link', pathMatch: 'full' },
  {
    path: 'characters/:characterId',
    title: 'Characters',
    canActivate: [validCharacterGuard],
    loadComponent: () =>
      import('./features/characters/pages/characters-page.component').then(
        (m) => m.CharactersPageComponent,
      ),
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
    canActivate: [validEnemyGuard],
    loadComponent: () =>
      import('./features/enemies/pages/enemies-page.component').then((m) => m.EnemiesPageComponent),
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'maps',
    pathMatch: 'full',
    title: 'Adventure Maps',
    loadComponent: () =>
      import('./features/maps/pages/maps-overview-page.component').then(
        (m) => m.MapsOverviewPageComponent,
      ),
  },
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
    pathMatch: 'full',
    title: 'Home',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '**',
    redirectTo: 'maps',
  },
];
