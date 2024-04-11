import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import { MapDifficulty } from 'src/app/enums';
import * as Tiles from './great-sea-map-tiles.data';

export const GreatSeaMap: HWMap = {
  path: "great-sea",
  name: "Great Sea Map",
  difficulty: MapDifficulty.EASY,
  size: {
    width: 14,
    height: 7
  },
  tiles: Object.values(Tiles),
  items: [Items.BOMB],
  hasImages: true
}
