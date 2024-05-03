import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './lorule-map-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const LoruleMap: HWMap = {
  path: "lorule",
  name: "Lorule Map",
  navPortrait: "assets/images/portraits/ravio.png",
  difficulty: MapDifficulty.HERO,
  extras: "Extra weapon drops",
  size: {
    width: 16,
    height: 8
  },
  tiles: Object.values(Tiles),
  items: Object.values(Items),
  hasImages: true
}
