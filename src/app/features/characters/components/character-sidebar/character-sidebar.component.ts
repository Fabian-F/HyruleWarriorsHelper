import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { Character, CharacterId } from '../../../../../domain/character.model';
import { getEnemySrc } from '../../../../shared/assets';
import { SelectionSidebarComponent } from '../../../../shared/components/selection-sidebar/selection-sidebar.component';

@Component({
  selector: 'hwh-character-sidebar',
  imports: [SelectionSidebarComponent],
  templateUrl: './character-sidebar.component.html',
  styleUrl: './character-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterSidebarComponent {
  readonly character = input.required<Character>();
  readonly characters = input.required<readonly Character[]>();
  readonly query = input('');
  readonly queryChange = output<string>();
  readonly characterSelected = output<CharacterId>();
  readonly enemySrc = getEnemySrc;
}
