import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MapViewerComponent } from './views/map-viewer/map-viewer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { TileViewerComponent } from './views/map-viewer/tile-viewer/tile-viewer.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MapTitleComponent } from './components/map-title/map-title.component';
import { CreditsComponent } from './views/credits/credits.component';
import { MapTileComponent } from './views/map-viewer/map-tile/map-tile.component';
import { HeadnavComponent } from './components/headnav/headnav.component';
import { MapNavButtonComponent } from './components/map-nav-button/map-nav-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MapViewerComponent,
    HomeComponent,
    TileViewerComponent,
    ToggleButtonComponent,
    SearchBarComponent,
    MapTitleComponent,
    CreditsComponent,
    MapTileComponent,
    HeadnavComponent,
    MapNavButtonComponent,
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
