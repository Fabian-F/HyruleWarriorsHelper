import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Element } from '../../../../domain/element.model';

@Component({
  selector: 'hwh-element-tag',
  template: `<span class="element-tag" [attr.data-element]="element()">
    @if (label()) {
      <span class="element-label">{{ label() }}</span>
    }
    <span class="element-name">{{ element() }}</span></span
  >`,
  styleUrl: './element-tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementTagComponent {
  readonly element = input.required<Element>();
  readonly label = input('');
}
