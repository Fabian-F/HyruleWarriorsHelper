import { HWMap } from 'src/app/models';
import * as Tiles from './legend-mode-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const LegendMode: HWMap = {
  path: "legend",
  name: "Legend Mode",
  navPortrait: "assets/images/portraits/link.png",
  difficulty: MapDifficulty.LEGEND,
  size: {
    width: 18,
    height: 6
  },
  tiles: Object.values(Tiles),
  isLegendMode: true,
}
