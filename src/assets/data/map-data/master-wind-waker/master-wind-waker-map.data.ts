import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './master-wind-waker-map-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const MasterWindWakerMap: HWMap = {
  path: "master-wind-waker",
  name: "Master Wind Waker Map",
  difficulty: MapDifficulty.MEDIUM,
  size: {
    width: 16,
    height: 8
  },
  tiles: [],
  items: Object.values(Items),
  hasImages: false
}
