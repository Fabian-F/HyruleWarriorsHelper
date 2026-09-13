export type CharacterId =
  | 'link'
  | 'impa'
  | 'sheik'
  | 'lana'
  | 'zelda'
  | 'ganondorf'
  | 'darunia'
  | 'ruto'
  | 'agitha'
  | 'midna'
  | 'zant'
  | 'fi'
  | 'ghirahim'
  | 'cia'
  | 'volga'
  | 'wizzro'
  | 'twili-midna'
  | 'young-link'
  | 'tingle'
  | 'linkle'
  | 'skull-kid'
  | 'toon-link'
  | 'tetra'
  | 'king-daphnes'
  | 'medli'
  | 'marin'
  | 'toon-zelda'
  | 'ravio'
  | 'yuga';

export interface Character {
  readonly id: CharacterId;
  readonly name: string;
}
