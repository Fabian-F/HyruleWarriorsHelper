import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hwh-headnav',
  templateUrl: './headnav.component.html',
  styleUrls: ['./headnav.component.scss']
})
export class HeadnavComponent {

  @Output()
  selected = new EventEmitter<string>();
}
