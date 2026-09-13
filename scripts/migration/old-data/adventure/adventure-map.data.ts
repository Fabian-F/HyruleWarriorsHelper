import { OldMapDefinition as HWMap } from '../old-models';
import { Items } from '../old-items';
import * as Tiles from './adventure-map-tiles.data';
import { OldMapDifficulty as MapDifficulty } from '../old-models';

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
