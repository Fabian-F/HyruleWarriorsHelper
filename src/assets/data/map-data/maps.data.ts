import { HWMap } from "src/app/models";
import { AdventureMap } from "./adventure/adventure-map.data";
import { GreatSeaMap } from "./great-sea/great-sea-map.data";
import { MasterQuestMap } from "./master-quest/master-quest-map.data";


export const Maps: Array<HWMap> = [
  AdventureMap,
  GreatSeaMap,
  MasterQuestMap
]
