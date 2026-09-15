import { OldMapDefinition as HWMap, OldMapDifficulty as MapDifficulty } from '../old-models';
import * as Tiles from './rewards-map-tiles.data';

export const RewardsMap: HWMap = {
  path: 'rewards',
  name: 'Rewards Map',
  navPortrait: 'assets/images/portraits/cucco.png',
  difficulty: MapDifficulty.EASY,
  size: {
    width: 17,
    height: 8,
  },
  tiles: Object.values(Tiles),
  noImages: true,
};
