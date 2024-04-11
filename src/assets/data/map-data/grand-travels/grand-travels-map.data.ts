import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './grand-travels-map-tiles.data';
import { MapDifficulty } from 'src/app/enums';

export const GrandTravelsMap: HWMap = {
  path: "grand-travels",
  name: "Grand Travels Map",
  difficulty: MapDifficulty.HERO,
  size: {
    width: 16,
    height: 8
  },
  tiles: [],
  items: Object.values(Items),
  hasImages: false
}
