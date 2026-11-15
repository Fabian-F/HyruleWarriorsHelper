import type { BattleAreaId } from './battle-area.model';
import type { BattleAreaMap } from './battle-area-map.model';

const loaders: Partial<Record<BattleAreaId, () => Promise<BattleAreaMap>>> = {
  'hyrule-field': () =>
    import('../../data/battle-areas/maps/hyrule-field').then((m) => m.hyruleFieldMap),
  'valley-of-seers': () =>
    import('../../data/battle-areas/maps/valley-of-seers').then((m) => m.valleyOfSeersMap),
  'eldin-caves': () =>
    import('../../data/battle-areas/maps/eldin-caves').then((m) => m.eldinCavesMap),
  'faron-woods': () =>
    import('../../data/battle-areas/maps/faron-woods').then((m) => m.faronWoodsMap),
  'death-mountain': () =>
    import('../../data/battle-areas/maps/death-mountain').then((m) => m.deathMountainMap),
  'lake-hylia': () => import('../../data/battle-areas/maps/lake-hylia').then((m) => m.lakeHyliaMap),
  'twilight-field': () =>
    import('../../data/battle-areas/maps/twilight-field').then((m) => m.twilightFieldMap),
  'palace-of-twilight': () =>
    import('../../data/battle-areas/maps/palace-of-twilight').then((m) => m.palaceOfTwilightMap),
  skyloft: () => import('../../data/battle-areas/maps/skyloft').then((m) => m.skyloftMap),
  'sealed-grounds': () =>
    import('../../data/battle-areas/maps/sealed-grounds').then((m) => m.sealedGroundsMap),
  'temple-of-the-sacred-sword': () =>
    import('../../data/battle-areas/maps/temple-of-the-sacred-sword').then(
      (m) => m.templeOfTheSacredSwordMap,
    ),
  'temple-of-souls': () =>
    import('../../data/battle-areas/maps/temple-of-souls').then((m) => m.templeOfSoulsMap),
  'gerudo-desert': () =>
    import('../../data/battle-areas/maps/gerudo-desert').then((m) => m.gerudoDesertMap),
  'ganons-tower': () =>
    import('../../data/battle-areas/maps/ganons-tower').then((m) => m.ganonsTowerMap),
  'forsaken-fortress': () =>
    import('../../data/battle-areas/maps/forsaken-fortress').then((m) => m.forsakenFortressMap),
  'wind-and-earth-temples': () =>
    import('../../data/battle-areas/maps/wind-and-earth-temples').then(
      (m) => m.windAndEarthTemplesMap,
    ),
};

export function hasBattleAreaMap(id: BattleAreaId): boolean {
  return Object.hasOwn(loaders, id);
}

export async function loadBattleAreaMap(id: BattleAreaId): Promise<BattleAreaMap | undefined> {
  return hasBattleAreaMap(id) ? loaders[id]!() : undefined;
}
