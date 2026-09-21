import { Component, input } from '@angular/core';
import type { MapTile } from '../../../../../../domain/maps/tile.model';

@Component({
  imports: [],
  selector: 'hwh-tile-header',
  styleUrl: './tile-header.component.scss',
  templateUrl: './tile-header.component.html',
})
export class TileHeaderComponent {
  tile = input.required<MapTile>();
}
