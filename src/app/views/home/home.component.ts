import { Component } from '@angular/core';
import { Maps } from 'src/assets/data/map-data/maps.data';

@Component({
  selector: 'hwh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Maps = Maps;
}
