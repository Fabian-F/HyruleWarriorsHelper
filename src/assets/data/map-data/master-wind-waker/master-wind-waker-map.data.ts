import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './master-wind-waker-map-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const MasterWindWakerMap: HWMap = {
  path: "master-wind-waker",
  name: "Master Wind Waker Map",
  navPortrait: "assets/images/portraits/king.png",
  difficulty: MapDifficulty.MEDIUM,
  size: {
    width: 14,
    height: 7
  },
  tiles: Object.values(Tiles),
  items: Object.values(Items),
  hasImages: true
}
