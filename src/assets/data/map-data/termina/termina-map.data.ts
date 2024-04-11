import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './termina-map-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const TerminaMap: HWMap = {
  path: "termina",
  name: "Termina Map",
  difficulty: MapDifficulty.HARD,
  size: {
    width: 16,
    height: 8
  },
  tiles: [],
  items: Object.values(Items),
  hasImages: false
}
