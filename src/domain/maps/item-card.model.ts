type AdventureItemCardId =
  | 'compass'
  | 'bomb'
  | 'candle'
  | 'ladder'
  | 'power-bracelet'
  | 'water-bomb'
  | 'digging-mitts'
  | 'ice-arrow'
  | 'raft'
  | 'hookshot'
  | 'recorder'
  | 'goddess-harp';

type GreatSeaItemCardId =
  | 'windwaker'
  | 'cannon'
  | 'boomerang'
  | 'heros-bow'
  | 'salvage-arm'
  | 'hyoi-pear'
  | 'deku-leaf'
  | 'sea-chart'
  | 'power-bracelet-2'
  | 'hammer';

type TwilightItemCardId =
  'lantern' | 'jar' | 'fishing-rod' | 'clawshot' | 'spinner' | 'ooccoo' | 'tears-of-light';

type TerminaItemCardId = 'deku-stick' | 'deku-mask' | 'goron-mask' | 'zora-mask' | 'giant';

type KoholintItemCardId = 'power-bracelet-3' | 'grandpa-ulrira' | 'magic-powder' | 'instrument';

type GrandTravelsItemCardId = 'whirlwind' | 'cycloneslate' | 'railwaytrack';

type LoruleItemCardId =
  | 'wall-painting'
  | 'tornado-rod'
  | 'sand-rod'
  | 'fire-rod'
  | 'ice-rod'
  | 'baby-maimai'
  | 'boomerang-2'
  | 'powerglove'
  | 'bow'
  | 'hookshot-2'
  | 'hammer-2';

export type ItemCardId =
  | AdventureItemCardId
  | GreatSeaItemCardId
  | TwilightItemCardId
  | TerminaItemCardId
  | KoholintItemCardId
  | GrandTravelsItemCardId
  | LoruleItemCardId;

export interface ItemCard {
  readonly id: ItemCardId;
  readonly name: string;
}
