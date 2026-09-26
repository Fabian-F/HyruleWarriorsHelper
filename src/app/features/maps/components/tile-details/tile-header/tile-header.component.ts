import { Component, computed, inject, input } from '@angular/core';
import type { MapTile } from '../../../../../../domain/maps/tile.model';
import { getTileCoordinates, getTileId } from '../../../../../../domain/maps/tile-coordinates';
import { MapSettingsService } from '../../../services/map-settings.service';

@Component({
  imports: [],
  selector: 'hwh-tile-header',
  styleUrl: './tile-header.component.scss',
  templateUrl: './tile-header.component.html',
})
export class TileHeaderComponent {
  readonly tile = input.required<MapTile>();
  private readonly settings = inject(MapSettingsService);

  protected readonly displayedTileId = computed(() => {
    const id = this.tile().id;
    if (this.settings.positionLabelMode() !== 'row-column') return id;

    const { row, column } = getTileCoordinates(id);
    return getTileId({ row: column, column: row });
  });
}
