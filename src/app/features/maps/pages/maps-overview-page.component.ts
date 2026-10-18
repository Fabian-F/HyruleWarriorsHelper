import type { SearchKind } from '../../../../domain/maps/map-search';
import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getCharacter } from '../../../../data/characters';
import { getEnemySrc } from '../../../shared/assets';
import { mapMetadata } from '../../../../data/maps/map-metadata';
import { mapOverviews } from '../../../../data/maps/map-overviews';
import { getMapDescription } from '../../../../data/maps/map-descriptions';
import type { MapId } from '../../../../domain/maps/map.model';
import type { MapStatistics } from '../../../../domain/maps/map-overview';
import { IconComponent } from '../../../shared/components/icon/icon.component';

const previewColors: Record<MapId, string> = {
  adventure: '#71603b',
  'great-sea': '#245d77',
  'master-quest': '#62533a',
  'master-wind-waker': '#2b5965',
  twilight: '#655372',
  termina: '#53664b',
  'koholint-island': '#39706a',
  'grand-travels': '#666241',
  lorule: '#655477',
  rewards: '#75613b',
};

@Component({
  selector: 'hwh-maps-overview-page',
  imports: [RouterLink, TitleCasePipe, IconComponent],
  templateUrl: './maps-overview-page.component.html',
  styleUrl: './maps-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapsOverviewPageComponent {
  protected readonly maps = mapOverviews.map((overview) => {
    const metadata = mapMetadata.find((map) => map.id === overview.id)!;
    return {
      ...metadata,
      ...overview,
      characterNames: overview.characterUnlocks.map((id) => getCharacter(id).name).join(', '),
      characterPortraits: overview.characterUnlocks.map((id) => ({
        id,
        name: getCharacter(id).name,
        src: getEnemySrc(id),
      })),
      description: getMapDescription(overview.id),
      previewColor: previewColors[overview.id],
    };
  });
  protected readonly totalTiles = this.maps.reduce((sum, map) => sum + map.statistics.tiles, 0);
  protected readonly statistics = [
    {
      key: 'weapons',
      filter: 'weapon',
      image: 'reward-seals/weapon.webp',
      label: 'Weapons',
    },
    {
      key: 'characters',
      filter: 'character',
      label: 'Characters',
    },
    {
      key: 'heartContainers',
      filter: 'heart-container',
      image: 'hearts/heart-container.webp',
      label: 'Heart Containers',
    },
    {
      key: 'heartPieces',
      filter: 'heart-piece',
      image: 'hearts/heart-piece.webp',
      label: 'Heart Pieces',
    },
    {
      key: 'skulltulas',
      filter: 'skulltula',
      image: 'statistics/golden-skulltula.webp',
      label: 'Skulltulas',
    },
    {
      key: 'outfits',
      filter: 'outfit',
      image: 'reward-seals/outfit.webp',
      label: 'Outfits',
    },
    {
      key: 'fairies',
      filter: 'fairy',
      image: 'statistics/fairy-bottle.webp',
      label: 'Fairies',
    },
    {
      key: 'fairyClothes',
      filter: 'fairy-clothes',
      image: 'statistics/fairy-clothes.webp',
      label: 'Fairy Clothes',
    },
  ] as const satisfies readonly {
    key: Exclude<keyof MapStatistics, 'tiles'>;
    label: string;
    image?: string;
    filter: SearchKind;
  }[];
}
