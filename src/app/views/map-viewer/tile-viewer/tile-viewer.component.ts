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
}
