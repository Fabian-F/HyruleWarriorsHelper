import { OldMapDefinition as HWMap } from '../old-models';
import { Items } from '../old-items';
import * as Tiles from './master-wind-waker-map-tiles.data';
import { OldMapDifficulty as MapDifficulty } from '../old-models';

export const MasterWindWakerMap: HWMap = {
  path: 'master-wind-waker',
  name: 'Master Wind Waker Map',
  navPortrait: 'assets/images/portraits/king.png',
  difficulty: MapDifficulty.MEDIUM,
  size: {
    width: 14,
    height: 7,
  },
  tiles: Object.values(Tiles),
};
