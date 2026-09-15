import { OldMapDefinition as HWMap, OldMapDifficulty as MapDifficulty } from '../old-models';
import * as Tiles from './grand-travels-map-tiles.data';

export const GrandTravelsMap: HWMap = {
  path: 'grand-travels',
  name: 'Grand Travels Map',
  navPortrait: 'assets/images/portraits/toon_zelda.png',
  difficulty: MapDifficulty.HERO,
  extras: 'Extra food drops',
  size: {
    width: 16,
    height: 8,
  },
  tiles: Object.values(Tiles),
};
