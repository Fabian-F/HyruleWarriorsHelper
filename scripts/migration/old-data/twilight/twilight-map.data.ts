import { OldMapDefinition as HWMap } from '../old-models';
import { Items } from '../old-items';
import * as Tiles from './twilight-map-tiles.data';
import { OldMapDifficulty as MapDifficulty } from '../old-models';

export const TwilightMap: HWMap = {
  path: 'twilight',
  name: 'Twilight Map',
  navPortrait: 'assets/images/portraits/midna.png',
  difficulty: MapDifficulty.HARD,
  extras: 'Extra material drops',
  size: {
    width: 15,
    height: 8,
  },
  tiles: Object.values(Tiles),
};
