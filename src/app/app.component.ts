import { Component } from '@angular/core';
import { HWMap } from './models';
import { Router } from '@angular/router';

@Component({
  selector: 'hwh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ) { }

  selectedMap: HWMap | null = null;

  setMap(map: HWMap | null) {
    this.selectedMap = map;
    if(!!map) {
      this.router.navigate(["map", this.selectedMap?.path],);
    }
  }
}
