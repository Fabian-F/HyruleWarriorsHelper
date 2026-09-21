import { Component, input } from '@angular/core';
import { getItemCardSrc, getMapTileSrc } from '../../../../../shared/assets';
import type { MapTile } from '../../../../../../domain/maps/tile.model';
import type { MapId } from '../../../../../../domain/maps/map.model';
import { getItemCard } from '../../../../../../data/item-cards';

@Component({
  imports: [],
  selector: 'hwh-tile-detail-map',
  styleUrl: './tile-detail-map.component.scss',
  templateUrl: './tile-detail-map.component.html',
})
export class TileDetailMapComponent {
  tile = input.required<MapTile>();
  mapId = input.required<MapId>();

  protected readonly getMapTileSrc = getMapTileSrc;
  protected readonly getItemCardSrc = getItemCardSrc;
  protected readonly getItemCard = getItemCard;
}
