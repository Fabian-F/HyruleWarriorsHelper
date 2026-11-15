import type { BattleArea, BattleAreaId } from '../../domain/battle-areas/battle-area.model';

export const battleAreas = {
  'death-mountain': { id: 'death-mountain', name: 'Death Mountain' },
  'eldin-caves': { id: 'eldin-caves', name: 'Eldin Caves' },
  'faron-woods': { id: 'faron-woods', name: 'Faron Woods' },
  'forsaken-fortress': { id: 'forsaken-fortress', name: 'Forsaken Fortress' },
  'ganons-tower': { id: 'ganons-tower', name: "Ganon's Tower" },
  'gerudo-desert': { id: 'gerudo-desert', name: 'Gerudo Desert' },
  'hyrule-field': { id: 'hyrule-field', name: 'Hyrule Field' },
  'lake-hylia': { id: 'lake-hylia', name: 'Lake Hylia' },
  'palace-of-twilight': { id: 'palace-of-twilight', name: 'Palace of Twilight' },
  'sealed-grounds': { id: 'sealed-grounds', name: 'Sealed Grounds' },
  skyloft: { id: 'skyloft', name: 'Skyloft' },
  'temple-of-souls': { id: 'temple-of-souls', name: 'Temple of Souls' },
  'temple-of-the-sacred-sword': {
    id: 'temple-of-the-sacred-sword',
    name: 'Temple of the Sacred Sword',
  },
  'twilight-field': { id: 'twilight-field', name: 'Twilight Field' },
  'valley-of-seers': { id: 'valley-of-seers', name: 'Valley of Seers' },
  'wind-and-earth-temples': { id: 'wind-and-earth-temples', name: 'Wind and Earth Temples' },
} as const satisfies Record<BattleAreaId, BattleArea>;

export function isBattleAreaId(id: unknown): id is BattleAreaId {
  return typeof id === 'string' && Object.hasOwn(battleAreas, id);
}

export function getBattleArea(id: BattleAreaId): BattleArea {
  if (!isBattleAreaId(id)) throw new Error(`Unknown battle area: ${String(id)}`);
  return battleAreas[id];
}
