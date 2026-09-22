import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { IconName } from './icons';

@Component({
  selector: 'hwh-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
