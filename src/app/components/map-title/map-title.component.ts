import { Component, Input } from '@angular/core';
import { HWMap } from 'src/app/models';

@Component({
  selector: 'hwh-map-title',
  templateUrl: './map-title.component.html',
  styleUrls: ['./map-title.component.scss']
})
export class MapTitleComponent {

  @Input()
  map: HWMap | null = null;
}
