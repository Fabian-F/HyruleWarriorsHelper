import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './adventure-map-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const AdventureMap: HWMap = {
  path: "adventure",
  name: "Adventure Map",
  navPortrait: "assets/images/portraits/lana.png",
  difficulty: MapDifficulty.EASY,
  size: {
    width: 16,
    height: 8
  },
  tiles: Object.values(Tiles),
}
