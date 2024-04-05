import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MapViewerComponent } from './components/map-viewer/map-viewer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { TileViewerComponent } from './components/tile-viewer/tile-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MapViewerComponent,
    HomeComponent,
    TileViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
