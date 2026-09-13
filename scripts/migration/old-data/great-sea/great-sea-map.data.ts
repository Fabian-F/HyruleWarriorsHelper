import { OldMapDefinition as HWMap } from '../old-models';
import { Items } from '../old-items';
import * as Tiles from './great-sea-map-tiles.data';
import { OldMapDifficulty as MapDifficulty } from '../old-models';

export const GreatSeaMap: HWMap = {
  path: 'great-sea',
  name: 'Great Sea Map',
  navPortrait: 'assets/images/portraits/tetra.png',
  difficulty: MapDifficulty.EASY,
  size: {
    width: 14,
    height: 7,
  },
  tiles: Object.values(Tiles),
};
