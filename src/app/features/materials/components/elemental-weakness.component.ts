import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Element } from '../../../../domain/element.model';

@Component({
  selector: 'hwh-elemental-weakness',
  template: `
    <span class="weakness-tag" [attr.data-element]="element()">
      <span class="weakness-label">Weakness</span>
      <span class="weakness-element">{{ element() }}</span>
    </span>
  `,
  styleUrl: './elemental-weakness.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementalWeaknessComponent {
  readonly element = input.required<Element>();
}
