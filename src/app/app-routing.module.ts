import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapViewerComponent } from './components/map-viewer/map-viewer.component';
import { HomeComponent } from './components/home/home.component';
import { CreditsComponent } from './components/credits/credits.component';

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
