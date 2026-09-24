import { Component, input } from '@angular/core';
import type { MapTile } from '../../../../../../domain/maps/tile.model';
import { FullTileSearch } from '../../../../../../domain/maps/tile.model';
import { getItemCardSrc } from '../../../../../shared/assets';
import { DecimalPipe } from '@angular/common';
import { getItemCard } from '../../../../../../data/item-cards';
import { getCharacter, isCharacterId } from '../../../../../../data/characters';
import { getEnemy } from '../../../../../../data/enemies';
import type { CharacterId } from '../../../../../../domain/character.model';
import type { EnemyId } from '../../../../../../domain/enemy.model';

@Component({
  imports: [DecimalPipe],
  selector: 'hwh-tile-mission',
  styleUrl: './tile-mission.component.scss',
  templateUrl: './tile-mission.component.html',
})
export class TileMissionComponent {
  tile = input.required<MapTile>();

  protected readonly getItemCardSrc = getItemCardSrc;
  protected readonly getItemCard = getItemCard;
  protected readonly getCharacter = getCharacter;

  protected getQuizAnswerName(id: CharacterId | EnemyId): string {
    return isCharacterId(id) ? getCharacter(id).name : getEnemy(id).name;
  }

  protected isItemCardSearch(
    search: FullTileSearch,
  ): search is Extract<FullTileSearch, { itemCardId: unknown }> {
    return 'itemCardId' in search;
  }
}
