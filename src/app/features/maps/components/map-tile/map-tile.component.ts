import { Component, computed, inject, input } from '@angular/core';
import type { MapTile } from '../../../../../domain/maps/tile.model';
import type { MapId } from '../../../../../domain/maps/map.model';
import { getBlockadeSrc, getMapTileSrc } from '../../../../shared/assets';

import { MapSettingsService } from '../../services/map-settings.service';

@Component({
  imports: [],
  selector: 'hwh-map-tile',
  styleUrl: './map-tile.component.scss',
  templateUrl: './map-tile.component.html',
  host: {
    role: 'button',
    '[attr.data-tile-id]': 'tile().id',
    '[class]': '`difficulty--${tile().difficulty}`',
    '[class.show-difficulty]': 'settings.showDifficulties()',
    '[class.show-blockades]': 'settings.showBlockades()',
  },
})
export class MapTileComponent {
  protected readonly settings = inject(MapSettingsService);
  readonly tile = input.required<MapTile>();
  readonly mapId = input.required<MapId>();

  readonly imgSrc = computed(() => getMapTileSrc(this.mapId(), this.tile().id));
  protected readonly getBlockadeSrc = getBlockadeSrc;
}
