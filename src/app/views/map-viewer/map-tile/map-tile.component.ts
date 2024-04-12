import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HWMap, HWMapTile } from 'src/app/models';
import { getTileColor, getTileImagePath, getTilePlacementString } from 'src/app/utils';
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
  showImage: boolean = false;

  @Input()
  showBorders: boolean = false;

  @Input()
  showPosition: boolean = false;

  @Output()
  selected = new EventEmitter<HWMapTile>();

  onClick() {
    this.selected.emit(this.tile);
  }
}
