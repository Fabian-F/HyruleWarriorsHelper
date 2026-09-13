export type EnemyId =
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

export interface Enemy {
  readonly id: EnemyId;
  readonly name: string;
}
