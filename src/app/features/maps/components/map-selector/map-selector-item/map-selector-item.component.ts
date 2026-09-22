import { Component, computed, input } from '@angular/core';
import type { MapMetadata } from '../../../../../../domain/maps/map.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { getMapDescription } from '../../../../../../data/maps/map-descriptions';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [RouterLink, TitleCasePipe, RouterLinkActive],
  selector: 'hwh-map-selector-item',
  styleUrl: './map-selector-item.component.scss',
  templateUrl: './map-selector-item.component.html',
})
export class MapSelectorItemComponent {
  map = input.required<MapMetadata>();
  isActive = input(false);

  descriptions = computed(() => getMapDescription(this.map().id));
}
