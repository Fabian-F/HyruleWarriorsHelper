import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hwh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
