import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './rewards-map-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const RewardsMap: HWMap = {
  path: "rewards",
  name: "Rewards Map",
  navPortrait: "assets/images/portraits/cucco.png",
  difficulty: MapDifficulty.EASY,
  size: {
    width: 17,
    height: 8
  },
  tiles: Object.values(Tiles),
  noImages: true,
}
