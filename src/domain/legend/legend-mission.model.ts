import type { CharacterId } from '../character.model';
import type { WeaponId } from '../weapon.model';
import type { Reward, Treasure } from '../maps/reward.model';
export const legendMissionIds = [
  'the-armies-of-ruin',
  'the-dragon-of-the-caves',
  'the-sheikah-tribesman',
  'the-invasion-begins',
  'the-girl-in-the-green-tunic',
  'the-sorceress-of-the-woods',
  'the-sorceress-of-the-valley',
  'land-of-myth',
  'land-of-twilight',
  'the-demon-lord-s-plan',
  'land-in-the-sky',
  'powers-collide',
  'the-water-temple',
  'the-usurper-king',
  'the-shadow-king',
  'the-demon-lord',
  'sealed-ambition',
  'the-sacred-sword',
  'her-true-self',
  'a-war-of-spirit',
  'darkness-falls',
  'shining-beacon',
  'ganondorf-s-return',
  'march-of-the-demon-king',
  'battle-of-the-triforce',
  'enduring-resolve',
  'the-other-hero',
  'liberation-of-the-triforce',
  'a-new-disturbance',
  'the-search-for-cia',
  'reclaiming-the-darkness',
  'watchers-of-the-triforce',
] as const;
export type LegendMissionId = (typeof legendMissionIds)[number];
export type LegendChapterId =
  | 'prologue'
  | 'cia-s-tale'
  | 'linkle-s-tale'
  | 'ocarina-of-time'
  | 'twilight-princess'
  | 'skyward-sword'
  | 'epilogue'
  | 'ganondorf'
  | 'grand-finale'
  | 'wind-waker';
export interface LegendSkulltula {
  readonly number: number;
  readonly difficulties: readonly ('easy' | 'normal' | 'hard' | 'hero')[];
  readonly requiresCampaignClear: boolean;
  readonly characterId?: CharacterId;
  readonly weaponId?: WeaponId;
  readonly task: string;
  readonly location: string;
}
export interface LegendMission {
  readonly id: LegendMissionId;
  readonly name: string;
  readonly chapterId: LegendChapterId;
  readonly battlefield: string;
  readonly image: string;
  readonly playableCharacters: readonly CharacterId[];
  readonly requires: readonly LegendMissionId[];
  readonly clearRewards: readonly Reward[];
  readonly treasures: readonly Treasure[];
  readonly skulltulas: readonly LegendSkulltula[];
}
