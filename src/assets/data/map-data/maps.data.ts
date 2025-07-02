import { HWMap } from "src/app/models";
import { AdventureMap } from "./adventure/adventure-map.data";
import { GreatSeaMap } from "./great-sea/great-sea-map.data";
import { MasterQuestMap } from "./master-quest/master-quest-map.data";
import { MasterWindWakerMap } from "./master-wind-waker/master-wind-waker-map.data";
import { TwilightMap } from "./twilight/twilight-map.data";
import { TerminaMap } from "./termina/termina-map.data";
import { KoholintIslandMap } from "./koholint-island/koholint-island-map.data";
import { GrandTravelsMap } from "./grand-travels/grand-travels-map.data";
import { LoruleMap } from "./lorule/lorule-map.data";
import { RewardsMap } from "./rewards/rewards-map.data";
import { LegendMode } from "./legend/legend-mode.data";

export const Maps: Array<HWMap> = [
  LegendMode,
  AdventureMap,
  GreatSeaMap,
  MasterQuestMap,
  MasterWindWakerMap,
  TwilightMap,
  TerminaMap,
  KoholintIslandMap,
  GrandTravelsMap,
  LoruleMap,
  RewardsMap
]
