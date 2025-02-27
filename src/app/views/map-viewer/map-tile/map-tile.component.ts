import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HWLegendTile, HWMap, HWMapTile } from 'src/app/models';
import { getLegendTileImagePath, getTileColor, getTileImagePath, getTilePlacementString } from 'src/app/utils';
import { Blockade } from 'src/assets/data/enums';

@Component({
  selector: 'hwh-map-tile',
  templateUrl: './map-tile.component.html',
  styleUrls: ['./map-tile.component.scss']
})
export class MapTileComponent {
  Blockade = Blockade;
  getTileColor = getTileColor;
  getTileImagePath = getTileImagePath;
  getTilePlacementString = getTilePlacementString;

  @Input()
  tile!: HWMapTile;

  @Input()
  map!: HWMap;

  @Input()
  grayOut: boolean = false;

  @Input()
  found: boolean = false;

  @Input()
  showImage: boolean = false;

  @Input()
  showBorders: boolean = false;

  @Input()
  showPosition: boolean = false;

  @Input()
  isLegendMode: boolean = false;

  @Output()
  selected = new EventEmitter<HWMapTile>();

  onClick() {
    this.selected.emit(this.tile);
  }

  getTileImage(tile: HWMapTile | HWLegendTile, map: HWMap) {
    if (map.isLegendMode) {
      return getLegendTileImagePath(tile as HWLegendTile);
    }
    return getTileImagePath(tile as HWMapTile, map);
  }
}
