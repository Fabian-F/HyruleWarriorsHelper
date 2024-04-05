import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Maps } from 'src/assets/data/map-data/maps.data';
import { HWMap } from '../../models';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  Maps = Maps;

  @Output()
  selected = new EventEmitter<HWMap>;
}
