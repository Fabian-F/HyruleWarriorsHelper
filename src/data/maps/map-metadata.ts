import type { MapMetadata } from '../../domain/maps/map.model';
import { adventureMapMetadata } from './adventure/adventure-map.metadata';
import { greatSeaMapMetadata } from './great-sea/great-sea-map.metadata';
import { masterQuestMapMetadata } from './master-quest/master-quest-map.metadata';
import { masterWindWakerMapMetadata } from './master-wind-waker/master-wind-waker-map.metadata';
import { twilightMapMetadata } from './twilight/twilight-map.metadata';
import { terminaMapMetadata } from './termina/termina-map.metadata';
import { koholintIslandMapMetadata } from './koholint-island/koholint-island-map.metadata';
import { loruleMapMetadata } from './lorule/lorule-map.metadata';
import { rewardsMapMetadata } from './rewards/rewards-map.metadata';

export const mapMetadata: MapMetadata[] = [
  adventureMapMetadata,
  greatSeaMapMetadata,
  masterQuestMapMetadata,
  masterWindWakerMapMetadata,
  twilightMapMetadata,
  terminaMapMetadata,
  koholintIslandMapMetadata,
  loruleMapMetadata,
  rewardsMapMetadata,
];
