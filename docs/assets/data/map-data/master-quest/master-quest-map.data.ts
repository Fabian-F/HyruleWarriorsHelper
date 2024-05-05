import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './master-quest-map-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const MasterQuestMap: HWMap = {
  path: "master-quest",
  name: "Master Quest Map",
  navPortrait: "assets/images/portraits/sheik.png",
  difficulty: MapDifficulty.MEDIUM,
  size: {
    width: 16,
    height: 8
  },
  tiles: Object.values(Tiles),
}
