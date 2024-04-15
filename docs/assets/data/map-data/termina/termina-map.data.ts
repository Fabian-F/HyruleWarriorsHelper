import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './termina-map-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const TerminaMap: HWMap = {
  path: "termina",
  name: "Termina Map",
  navPortrait: "assets/images/portraits/young_link.png",
  difficulty: MapDifficulty.HARD,
  extras: "Extra weapon drops",
  size: {
    width: 16,
    height: 8
  },
  tiles: Object.values(Tiles),
  items: Object.values(Items),
  hasImages: true
}
