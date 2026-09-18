import { Injectable, type Signal } from '@angular/core';
import type { MapDefinition } from '../../../../domain/maps/map.model';
import type { MapTile } from '../../../../domain/maps/tile.model';

@Injectable()
export class MapContext {
  map!: Signal<MapDefinition | undefined>;

  getTile(tileId: string): MapTile | undefined {
    return this.map()?.tiles.find((tile) => tile.id === tileId);
  }
}
