import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HWMap, HWMapTile, Point, Tile } from '../../models';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Maps } from 'src/assets/data/map-data/maps.data';
import { filter } from 'rxjs';
import { getTileColor, getTileImagePath, getTilePlacementString, isMapTile } from 'src/app/utils';
import { Blockade } from 'src/assets/data/enums';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'hwh-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit {
  map: HWMap | null = null;
  tileDetail: HWMapTile | null = null;
  showPlacementHints = false;
  showBlockadeHints = true;
  showImages = true;
  hasSearch = false;
  queryParams: any = {};
  searchCoords: Array<Point> = []
  lastSearch = '';

  getTileColor = getTileColor;
  getTileImagePath = getTileImagePath;
  getTilePlacementString = getTilePlacementString;
  isMapTile = isMapTile;
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
      if (this.hasSearch) {
        this.onSearch(this.lastSearch);
      }
      if(tile) {
        this.tileDetail = this.map?.tiles
          .filter((t: Tile) => 'challenge' in t)
          .map((t: Tile) => t as HWMapTile)
          .find((t: HWMapTile) => getTilePlacementString(t) === tile) ?? null;
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

  shiftMap(value: number) {
    const currIndex = Maps.findIndex((m) => m.name === this.map!.name);

    let newIndex = currIndex;
    let newMap;

    do {
      newIndex += value;
      if(newIndex < 0) newIndex = Maps.length - 1;
      if(newIndex >= Maps.length) newIndex = 0;
      newMap = Maps[newIndex];
    } while(!newMap.tiles.length)

    this.router.navigate(['/','map', newMap.path], {
      relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge'
    });
  }

  setSearch(text: string | undefined) {
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

    this.lastSearch = searchText;
    this.hasSearch = true;
    this.searchCoords = this.map?.tiles
      .filter((tile) => this.isStringInObject(searchText, tile) || this.isCoordinate(searchText, tile) || this.specificSearch(searchText, tile))
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

  isCoordinate(searchtext: string, tile: Tile) {
    return searchtext.toLowerCase() === getTilePlacementString(tile).toLowerCase();
  }

  specificSearch(searchtext: string, tile: Tile): boolean {
    if (!isMapTile(tile)) return false;
    const mapTile = tile as HWMapTile;

    const lowerCaseText = searchtext.toLowerCase();
    if (lowerCaseText === 'skulltula' || lowerCaseText === 'skulltulas') {
      return !!mapTile.rewards?.skulltulas?.length;
    }
    return false;
  }

  grayOut(tile: HWMapTile) {
    return this.hasSearch && this.searchCoords.findIndex(coords => coords === tile.coords) === -1;
  }

  found(tile: HWMapTile) {
    return this.hasSearch && this.searchCoords.some(coords => coords === tile.coords);
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
    return map.tiles.sort((a: Tile, b: Tile) => {
      if(a.coords.row == b.coords.row) {
        return a.coords.col - b.coords.col;
      }
      return a.coords.row - b.coords.row;
    });
  }
}
