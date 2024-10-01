import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapViewerComponent } from './views/map-viewer/map-viewer.component';
import { HomeComponent } from './views/home/home.component';
import { CreditsComponent } from './views/credits/credits.component';
import { MaterialsComponent } from './views/materials/materials.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home | HW Helper'
  },
  {
    path: 'map/:type',
    component: MapViewerComponent
  },
  {
    path: 'map/:type/:tile',
    component: MapViewerComponent
  },
  {
    path: 'credits',
    component: CreditsComponent
  },
  {
    path: 'materials',
    component: MaterialsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
