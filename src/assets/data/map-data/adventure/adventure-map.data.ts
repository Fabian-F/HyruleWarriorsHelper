import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './adventure-map-tiles.data';
import { MapDifficulty } from 'src/app/enums';

export const AdventureMap: HWMap = {
  path: "adventure",
  name: "Adventure Map",
  difficulty: MapDifficulty.EASY,
  size: {
    width: 16,
    height: 8
  },
  tiles: Object.values(Tiles),
  items: Object.values(Items),
  hasImages: true
}
