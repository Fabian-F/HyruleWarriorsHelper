import { TileNotationService } from '../../../../core/tile-notation.service';
import { inject, ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { CharacterId } from '../../../../../domain/character.model';
import { getCharacter } from '../../../../../data/characters';
@Component({
  selector: 'hwh-legend-character-links',
  imports: [RouterLink],
  templateUrl: './legend-character-links.component.html',
  styleUrl: './legend-character-links.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegendCharacterLinksComponent {
  readonly notation = inject(TileNotationService);
  readonly characters = input.required<readonly CharacterId[]>();
  readonly label = input<string>();
  readonly characterName = (id: CharacterId) => getCharacter(id).name;
}
