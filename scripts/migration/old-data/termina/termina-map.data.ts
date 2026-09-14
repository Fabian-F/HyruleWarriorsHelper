import { OldMapDefinition as HWMap } from '../old-models';
import { Items } from '../old-items';
import * as Tiles from './termina-map-tiles.data';
import { OldMapDifficulty as MapDifficulty } from '../old-models';

export const TerminaMap: HWMap = {
  path: 'termina',
  name: 'Termina Map',
  navPortrait: 'assets/images/portraits/young_link.png',
  difficulty: MapDifficulty.HARD,
  extras: 'Extra weapon drops',
  size: {
    width: 16,
    height: 8,
  },
  tiles: Object.values(Tiles),
};
