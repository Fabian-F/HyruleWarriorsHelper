import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './twilight-map-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const TwilightMap: HWMap = {
  path: "twilight",
  name: "Twilight Map",
  difficulty: MapDifficulty.HARD,
  extras: "Extra material drops",
  size: {
    width: 15,
    height: 8
  },
  tiles: Object.values(Tiles),
  items: Object.values(Items),
  hasImages: true
}
