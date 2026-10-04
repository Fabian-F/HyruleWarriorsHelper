import type { Element } from './element.model';
import type { CharacterId } from './character.model';
import type { EnemyDrops } from './material.model';

export type EnemyId =
  | CharacterId
  | 'aeralfos'
  | 'fiery-aeralfos'
  | 'gibdo'
  | 'redead-knight'
  | 'lizalfos'
  | 'dinolfos'
  | 'moblin'
  | 'shield-moblin'
  | 'darknut'
  | 'stalmaster'
  | 'big-poe'
  | 'icy-big-poe'
  | 'hylian-captain'
  | 'goron-captain'
  | 'big-blin'
  | 'stone-blin'
  | 'ganon'
  | 'king-dodongo'
  | 'gohma'
  | 'manhandla'
  | 'argorok'
  | 'the-imprisoned'
  | 'helmaroc-king'
  | 'phantom-ganon';

export type EnemyType = 'character' | 'boss' | 'troop';

export interface Enemy {
  readonly id: EnemyId;
  readonly name: string;
  readonly type: EnemyType;
  /** Omitted when no elemental weakness is known. */
  readonly elementalWeakness?: Element;
  readonly imagePath?: string;
  readonly drops?: EnemyDrops;
}
