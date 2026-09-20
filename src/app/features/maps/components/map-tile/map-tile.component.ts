import { Component, computed, input } from '@angular/core';
import type { MapTile } from '../../../../../domain/maps/tile.model';
import type { MapId } from '../../../../../domain/maps/map.model';
import { getMapTileSrc } from '../../../../shared/assets';

@Component({
  imports: [],
  selector: 'hwh-map-tile',
  styleUrl: './map-tile.component.scss',
  templateUrl: './map-tile.component.html',
  host: {
    role: 'button',
    '[attr.data-tile-id]': 'tile().id',
    '[class]': '`difficulty--${tile().difficulty}`',
  },
})
export class MapTileComponent {
  readonly tile = input.required<MapTile>();
  readonly mapId = input.required<MapId>();

  readonly imgSrc = computed(() => getMapTileSrc(this.mapId(), this.tile().id));
}
