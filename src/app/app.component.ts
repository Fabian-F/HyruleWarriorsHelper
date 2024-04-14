import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hwh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenavExtended = false;

  constructor(private router: Router) { }

  headnavSelect(value: string) {
    if (value === 'maps') {
      this.sidenavExtended = true;
      return;
    }
    this.router.navigate([value]);
  }
}
