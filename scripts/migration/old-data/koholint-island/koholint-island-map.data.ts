import { OldMapDefinition as HWMap, OldMapDifficulty as MapDifficulty } from '../old-models';
import * as Tiles from './koholint-island-map-tiles.data';

export const KoholintIslandMap: HWMap = {
  path: 'koholint-island',
  name: 'Koholint Island Map',
  navPortrait: 'assets/images/portraits/marin.png',
  difficulty: MapDifficulty.HERO,
  extras: 'Extra drops based on active Siren power',
  size: {
    width: 14,
    height: 6,
  },
  tiles: Object.values(Tiles),
};
