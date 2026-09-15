import type { MapDefinition, MapId } from './map.model';

type MapLoader = () => Promise<MapDefinition>;

export const mapLoaders: Record<MapId, MapLoader> = {
  adventure: () => import('../../data/maps/adventure-map').then((m) => m.adventureMap),
  'great-sea': () => import('../../data/maps/great-sea-map').then((m) => m.greatSeaMap),
  'master-quest': () => import('../../data/maps/master-quest-map').then((m) => m.masterQuestMap),
  'master-wind-waker': () =>
    import('../../data/maps/master-wind-waker-map').then((m) => m.masterWindWakerMap),
  twilight: () => import('../../data/maps/twilight-map').then((m) => m.twilightMap),
  termina: () => import('../../data/maps/termina-map').then((m) => m.terminaMap),
  'koholint-island': () =>
    import('../../data/maps/koholint-island-map').then((m) => m.koholintIslandMap),
  'grand-travels': () => import('../../data/maps/grand-travels-map').then((m) => m.grandTravelsMap),
  lorule: () => import('../../data/maps/lorule-map').then((m) => m.loruleMap),
  rewards: () => import('../../data/maps/rewards-map').then((m) => m.rewardsMap),
};

export function loadMap(mapId: MapId): Promise<MapDefinition> {
  return mapLoaders[mapId]();
}
