import { Routes } from '@angular/router';
import { mapMetadata } from '../data/maps/map-metadata';
import { validMapGuard } from './features/maps/guards/valid-map.guard';
import { TileDetailsComponent } from './features/maps/components/tile-details/tile-details.component';
import { validTileGuard } from './features/maps/guards/valid-tile.guard';

export const routes: Routes = [
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
