import { isLegendMissionId, resolveLegacyLegendMission } from '../domain/legend/legend-routing';
import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { validCharacterGuard } from './features/characters/guards/valid-character.guard';
import { validEnemyGuard } from './features/enemies/guards/valid-enemy.guard';
import { mapMetadata } from '../data/maps/map-metadata';
import { validMapGuard } from './features/maps/guards/valid-map.guard';
import { TileDetailsComponent } from './features/maps/components/tile-details/tile-details.component';
import { validTileGuard } from './features/maps/guards/valid-tile.guard';

export const routes: Routes = [
  {
    path: 'map/legend/:tile',
    redirectTo: ({ params, queryParams }) => {
      const missionId = resolveLegacyLegendMission(params['tile']);
      return inject(Router).createUrlTree(missionId ? ['/legend', missionId] : ['/legend'], {
        queryParams,
      });
    },
  },
  { path: 'map/legend', redirectTo: 'legend', pathMatch: 'full' },
  {
    matcher: (segments) => {
      if (segments[0]?.path !== 'legend' || segments.length > 2) return null;
      return {
        consumed: segments,
        posParams: segments[1] ? { missionId: segments[1] } : undefined,
      };
    },
    title: 'Legend Mode',
    canActivate: [
      (route) => {
        const id = route.paramMap.get('missionId');
        return (
          !id ||
          isLegendMissionId(id) ||
          inject(Router).createUrlTree(['/legend'], { queryParams: route.queryParams })
        );
      },
    ],
    loadComponent: () =>
      import('./features/legend/legend-page.component').then((m) => m.LegendPageComponent),
  },

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
