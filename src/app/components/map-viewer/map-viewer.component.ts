import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { HWMap, HWMapTile } from '../../models';
import { NavigationEnd, Router } from '@angular/router';
import { Maps } from 'src/assets/data/map-data/maps.data';
import { filter } from 'rxjs';
import { getTileColor, getTileImagePath, getTilePlacementString } from 'src/app/utils';
import { Blockade } from 'src/app/enums';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit{
  map: HWMap | null = null;
  tileDetail: HWMapTile | null = null;
  showPlacementHints = false;
  showBlockadeHints = true;
  showImages = true;

  getTileColor = getTileColor;
  getTileImagePath = getTileImagePath;
  getTilePlacementString = getTilePlacementString;
  Blockade = Blockade;

  constructor(
    private router: Router,
    public elementRef: ElementRef
  ) {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((event) => {
      this.findMapByUrl();
    });
  }

  ngOnInit(): void {
    if(!this.map) {
      this.findMapByUrl();
    }
  }

  setTileDetail(tile: HWMapTile) {
    this.tileDetail = tile;
  }

  findMapByUrl() {
    let urlTree = this.router.parseUrl(this.router.url);
    urlTree.queryParams = {};
    urlTree.fragment = null;
    const urlFragments = urlTree.toString().split("/");
    const mapType = urlFragments[urlFragments.indexOf("map") + 1];
    if(mapType) {
      this.map = Maps.find((map) => map.path === mapType) ?? null;
    }
  }

  getSortedTiles(map: HWMap) {
    return map.tiles.sort((a: HWMapTile, b: HWMapTile) => {
      if(a.coords.row == b.coords.row) {
        return a.coords.col - b.coords.col;
      }
      return a.coords.row - b.coords.row;
    });
  }
}
