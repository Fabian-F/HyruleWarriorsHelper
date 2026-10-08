import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hwh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenavExtended = false;

  constructor(private router: Router) {
  }

  headnavSelect(value: string) {
    if (value === 'maps') {
      this.sidenavExtended = true;
      return;
    }
    if (value === 'github') {
      window.open('https://github.com/Fabian-F/HyruleWarriorsHelper', '_blank');
      return;
    }
    if (value === 'v2') {
      window.location.assign(new URL('v2/', document.baseURI).href);
      return;
    }
    this.router.navigate([value]);
  }
}
