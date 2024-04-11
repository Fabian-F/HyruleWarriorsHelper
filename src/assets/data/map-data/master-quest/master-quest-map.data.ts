import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './master-quest-map-tiles.data';
import { AdventureMap } from '../adventure/adventure-map.data';
import { MapDifficulty } from 'src/app/enums';

export const MasterQuestMap: HWMap = {
  path: "master-quest",
  name: "Master Quest Map",
  difficulty: MapDifficulty.MEDIUM,
  size: {
    width: 16,
    height: 8
  },
  tiles: Object.values(Tiles),
  items: [Items.BOMB],
  hasImages: false
}
