import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import { MapDifficulty } from 'src/app/enums';

export const GreatSeaMap: HWMap = {
  path: "great-sea",
  name: "Great Sea Map",
  difficulty: MapDifficulty.EASY,
  size: {
    width: 16,
    height: 8
  },
  tiles: [],
  items: [Items.BOMB]
}
