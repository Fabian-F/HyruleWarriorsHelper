import { Component, input } from '@angular/core';
import { MapSelectorComponent } from '../map-selector/map-selector.component';
import type { MapDefinition } from '../../../../../domain/maps/map.model';

@Component({
  imports: [MapSelectorComponent],
  selector: 'hwh-map-toolbar',
  styleUrl: './map-toolbar.component.scss',
  templateUrl: './map-toolbar.component.html',
})
export class MapToolbarComponent {
  map = input.required<MapDefinition>();
}
