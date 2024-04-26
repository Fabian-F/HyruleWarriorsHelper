import { HWMap } from 'src/app/models';
import { Items } from '../../items.data';
import * as Tiles from './koholint-island-map-tiles.data';
import { MapDifficulty } from 'src/assets/data/enums';

export const KoholintIslandMap: HWMap = {
  path: "koholint-island",
  name: "Koholint Island Map",
  navPortrait: "assets/images/portraits/marin.png",
  difficulty: MapDifficulty.HERO,
  extras: "Extra drops based on active Siren power",
  size: {
    width: 14,
    height: 6
  },
  tiles: Object.values(Tiles),
  items: Object.values(Items),
  hasImages: true
}
