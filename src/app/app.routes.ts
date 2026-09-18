import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MapPageComponent } from './features/maps/pages/map-page.component';
import { validMapGuard } from './features/maps/guards/valid-map.guard';
import { TileDetailsComponent } from './features/maps/components/tile-details/tile-details.component';
import { validTileGuard } from './features/maps/guards/valid-tile.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'maps', component: MapPageComponent },
  {
    path: 'maps/:mapId',
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
];
