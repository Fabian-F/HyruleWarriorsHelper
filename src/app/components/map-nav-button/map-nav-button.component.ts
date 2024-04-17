import { Component, Input } from '@angular/core';
import { HWMap } from 'src/app/models';

@Component({
  selector: 'hwh-map-nav-button',
  templateUrl: './map-nav-button.component.html',
  styleUrls: ['./map-nav-button.component.scss']
})
export class MapNavButtonComponent {
  @Input()
  map!: HWMap;
}
