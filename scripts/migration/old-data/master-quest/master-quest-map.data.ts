import { OldMapDefinition as HWMap } from '../old-models';
import { Items } from '../old-items';
import * as Tiles from './master-quest-map-tiles.data';
import { OldMapDifficulty as MapDifficulty } from '../old-models';

export const MasterQuestMap: HWMap = {
  path: 'master-quest',
  name: 'Master Quest Map',
  navPortrait: 'assets/images/portraits/sheik.png',
  difficulty: MapDifficulty.MEDIUM,
  size: {
    width: 16,
    height: 8,
  },
  tiles: Object.values(Tiles),
};
