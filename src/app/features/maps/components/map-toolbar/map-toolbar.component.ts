import { Component, input } from '@angular/core';
import { MapSearchComponent } from '../map-search/map-search.component';
import { MapSelectorComponent } from '../map-selector/map-selector.component';
import { MapSettingsComponent } from '../map-settings/map-settings.component';
import { MapShareComponent } from '../map-share/map-share.component';
import type { MapDefinition } from '../../../../../domain/maps/map.model';

@Component({
  imports: [MapSelectorComponent, MapSettingsComponent, MapSearchComponent, MapShareComponent],
  selector: 'hwh-map-toolbar',
  styleUrl: './map-toolbar.component.scss',
  templateUrl: './map-toolbar.component.html',
})
export class MapToolbarComponent {
  map = input.required<MapDefinition>();
}
