import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { HWLegendTile, HWMap, HWMapTile, Tile } from '../../../models';
import { getTileImagePath, getTilePlacementString } from 'src/app/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { Maps } from 'src/assets/data/map-data/maps.data';

@Component({
  selector: 'hwh-tile-viewer',
  templateUrl: './tile-viewer.component.html',
  styleUrls: ['./tile-viewer.component.scss']
})
export class TileViewerComponent implements AfterViewInit {
  openTile: any | null = null;
  isLegendMode = false;
  getTileImagePath = getTileImagePath;
  getTilePlacementString = getTilePlacementString;

  animateSearchItem = true;
  skulltulaView = false;

  @ViewChild('dialog')
  dialog?: ElementRef<HTMLDialogElement>;

  @Input()
  referenceTo: HTMLElement | null = null;

  map: HWMap | null = null;
  tileString?: string = undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      const mapType = params['type'];
      const tile = params['tile'];
      this.map = Maps.find((map) => map.path === mapType) ?? null;
      if(tile) {
        this.tileString = tile;
        this.isLegendMode = !!this.map?.isLegendMode;
        if (this.isLegendMode) {
          this.openTile = this.map?.tiles
            .filter((t: Tile) => 'challenge' in t)
            .map((t: Tile) => t as HWLegendTile)
            .find((t: HWLegendTile) => getTilePlacementString(t) === tile) ?? null;
        } else {
          this.openTile = this.map?.tiles
            .filter((t: Tile) => 'challenge' in t)
            .map((t: Tile) => t as HWMapTile)
            .find((t: HWMapTile) => getTilePlacementString(t) === tile) ?? null;
        }
        this.open();
        this.cdr.detectChanges();
      }
    });
  }

  hasSearchDescriptions() {
    if (this.openTile?.fullTileSearch) {
      return true;
    }
    if (this.openTile?.quizAnswers && this.openTile.quizAnswers.length > 0) {
      return true;
    }
    return !!this.openTile?.search?.find((search: any) => !!search.description);
  }

  open() {
    this.dialog?.nativeElement.showModal();
  }

  close() {
    this.router.navigate(
      ['map', this.map?.path],
      { queryParams: this.router.routerState.snapshot.root.queryParams }
    );
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.tileString || !this.map) return;

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key) && event.preventDefault) {
      event.preventDefault();
    }

    const tileCol = this.tileString[0]; // z. B. 'A'
    const tileRow = +this.tileString[1]; // z. B. 1

    let nextTileCol = tileCol;
    let nextTileRow = tileRow;

    if (event.key === 'ArrowRight' && tileCol.charCodeAt(0) < 'A'.charCodeAt(0) + this.map.size.width - 1) {
      nextTileCol = String.fromCharCode(tileCol.charCodeAt(0) + 1);
    } else if (event.key === 'ArrowLeft' && tileCol.charCodeAt(0) > 'A'.charCodeAt(0)) {
      nextTileCol = String.fromCharCode(tileCol.charCodeAt(0) - 1);
    }

    if (event.key === 'ArrowDown' && tileRow < this.map.size.height) {
      nextTileRow = tileRow + 1;
    } else if (event.key === 'ArrowUp' && tileRow > 1) {
      nextTileRow = tileRow - 1;
    }

    const nextTileString = `${nextTileCol}${nextTileRow}`;

    const exists = this.map.tiles.some(tile => 'challenge' in tile && getTilePlacementString(tile) === nextTileString);
    if (!exists) {
      return; // No valid tile to navigate to
    }

    this.router.navigate(
      ['map', this.map?.path, nextTileString],
      { queryParamsHandling: 'preserve' }
    );
  }

  navigateKey(key: string) {
    const event = { key } as KeyboardEvent;
    this.onKeyDown(event);
  }

  get canMoveUp(): boolean {
    if (!this.tileString || !this.map) return false;
    const row = +this.tileString[1];
    return row > 1;
  }

  get canMoveDown(): boolean {
    if (!this.tileString || !this.map) return false;
    const row = +this.tileString[1];
    return row < this.map.size.height;
  }

  get canMoveLeft(): boolean {
    if (!this.tileString || !this.map) return false;
    const col = this.tileString[0].charCodeAt(0);
    return col > 'A'.charCodeAt(0);
  }

  get canMoveRight(): boolean {
    if (!this.tileString || !this.map) return false;
    const col = this.tileString[0].charCodeAt(0);
    return col < 'A'.charCodeAt(0) + this.map.size.width - 1;
  }

}
