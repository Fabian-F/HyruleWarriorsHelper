import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { HWMap, HWMapTile, Point } from '../../models';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Maps } from 'src/assets/data/map-data/maps.data';
import { filter } from 'rxjs';
import { getTileColor, getTileImagePath, getTilePlacementString } from 'src/app/utils';
import { Blockade } from 'src/app/enums';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'hwh-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit{
  map: HWMap | null = null;
  tileDetail: HWMapTile | null = null;
  showPlacementHints = false;
  showBlockadeHints = true;
  showImages = true;
  hasSearch = false;
  queryParams: any = {};
  searchCoords: Array<Point> = []

  getTileColor = getTileColor;
  getTileImagePath = getTileImagePath;
  getTilePlacementString = getTilePlacementString;
  Blockade = Blockade;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public elementRef: ElementRef,
    private titleService: Title
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((_) => {
      this.titleService.setTitle(this.map?.name + ' | HW Helper');
    });
    this.route.params.subscribe(params => {
      const mapType = params['type'];
      const tile = params['tile'];
      this.map = Maps.find((map) => map.path === mapType) ?? null;
      if(tile) {
        this.tileDetail = this.map?.tiles.find((t) => getTilePlacementString(t) === tile) ?? null;
      }
    })
    this.route.queryParams.subscribe(params => {
      this.queryParams = params;
      this.onSearch(params['search']);
      if (params['hideBlockades'] === 'true') {
        this.showBlockadeHints = false;
      }
      if (params['hideImages'] === 'true') {
        this.showImages = false;
      }
      if (params['showPositions'] === 'true') {
        this.showPlacementHints = true;
      }
    })
  }

  ngOnInit(): void {
    if(!this.map) {
      this.findMapByUrl();
    }
  }

  setSearch(text: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: text},
      queryParamsHandling: 'merge'
    });
  }

  onSearch(searchText: string | undefined) {
    if(!searchText || !searchText.trim().length) {
      this.searchCoords = [];
      this.hasSearch = false;
      return;
    }

    this.hasSearch = true;
    this.searchCoords = this.map?.tiles
      .filter((tile) => this.isStringInObject(searchText, tile))
      .map((tile) => tile.coords) ?? [];
  }

  isStringInObject(value: any, obj: any): boolean {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        if (obj[key].toLowerCase().includes(value.toLowerCase())) {
          return true;
        }
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (this.isStringInObject(value, obj[key])) {
          return true;
        }
      }
    }
    return false;
  }

  grayOut(tile: HWMapTile) {
    return this.hasSearch && this.searchCoords.findIndex(coords => coords === tile.coords) === -1;
  }

  setTileDetail(tile: HWMapTile) {
    const newQueryParams: any = {...this.queryParams};
    newQueryParams.showPositions = this.showPlacementHints || undefined;
    newQueryParams.hideImages = !this.showImages || undefined;
    newQueryParams.hideBlockades = !this.showBlockadeHints || undefined;
    this.router.navigate(
      ['map', this.map?.path, getTilePlacementString(tile)],
      { queryParams: newQueryParams }
    );
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
