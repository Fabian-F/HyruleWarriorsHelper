import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './twilight-map-tiles.data';
import { MapDifficulty } from 'src/app/enums';

export const TwilightMap: HWMap = {
  path: "twilight",
  name: "Twilight Map",
  difficulty: MapDifficulty.HARD,
  size: {
    width: 16,
    height: 8
  },
  tiles: [],
  items: Object.values(Items),
  hasImages: false
}
