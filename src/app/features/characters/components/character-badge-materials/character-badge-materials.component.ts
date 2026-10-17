import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { CharacterBadgeRequirementsView } from '../../../../../domain/characters/badge-requirements';
import { getMaterialSrc } from '../../../../shared/assets';

@Component({
  selector: 'hwh-character-badge-materials',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './character-badge-materials.component.html',
  styleUrl: './character-badge-materials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterBadgeMaterialsComponent {
  readonly requirements = input.required<CharacterBadgeRequirementsView | undefined>();
  readonly materialSrc = getMaterialSrc;
}
