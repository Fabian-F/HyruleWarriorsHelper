import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './lorule-map-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const LoruleMap: HWMap = {
  path: "lorule",
  name: "Lorule Map",
  navPortrait: "assets/images/portraits/lorule.png",
  difficulty: MapDifficulty.HERO,
  extras: "Extra weapon drops",
  size: {
    width: 16,
    height: 8
  },
  tiles: [],
  items: Object.values(Items),
  hasImages: false
}
