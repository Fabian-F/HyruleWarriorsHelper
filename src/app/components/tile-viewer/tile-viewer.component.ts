import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { HWMap, HWMapTile } from '../../models';
import { getTileImagePath, getTilePlacementString } from 'src/app/utils';

@Component({
  selector: 'app-tile-viewer',
  templateUrl: './tile-viewer.component.html',
  styleUrls: ['./tile-viewer.component.scss']
})
export class TileViewerComponent {
  private _openTile: HWMapTile | null = null;
  getTileImagePath = getTileImagePath;
  getTilePlacementString = getTilePlacementString;

  animateSearchItem = true;

  @ViewChild('dialog')
  dialog?: ElementRef<HTMLDialogElement>;

  @Input()
  set openTile(value: HWMapTile | null) {
    this._openTile = value;
    if(value) {
      this.dialog?.nativeElement.showModal();
      this.positionDialog();
    } else {
      this.openTileChange.emit(null);
      this.dialog?.nativeElement.close();
    }
  }

  get openTile() {
    return this._openTile;
  }

  @Input()
  referenceTo: HTMLElement | null = null;

  @Input()
  map: HWMap | null = null;

  @Output()
  openTileChange = new EventEmitter<HWMapTile | null>();

  constructor(
    private renderer: Renderer2
  ) { }

  positionDialog() {
    if(!this.referenceTo) {
      return;
    }

    var containerRect = this.referenceTo.getBoundingClientRect();
    //var topOffset = containerRect.top;
    var leftOffset = containerRect.left;
    this.renderer.setStyle(this.dialog?.nativeElement, 'position', 'absolute');
    //this.renderer.setStyle(this.dialog?.nativeElement, 'top', topOffset + 'px');
    this.renderer.setStyle(this.dialog?.nativeElement, 'left', leftOffset + 'px');
  }

  hasSearchDescriptions() {
    return !!this.openTile?.search?.find((search) => !!search.description);
  }
}
