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

type TerminaItemCardId =
  | 'deku-stick'
  | 'deku-mask'
  | 'goron-mask'
  | 'zora-mask'
  | 'giant'
  | 'majoras-mask'
  | 'mask-of-truth'
  | 'song-of-time'
  | 'inverted-song-of-time';

type KoholintItemCardId =
  | 'power-bracelet-3'
  | 'grandpa-ulrira'
  | 'magic-powder'
  | 'full-moon-cello'
  | 'conch-horn'
  | 'sea-lily-bell'
  | 'surf-harp'
  | 'wind-marimba'
  | 'coral-triangle'
  | 'organ-of-evening-calm'
  | 'thunder-drum';

type GrandTravelsItemCardId =
  | 'whirlwind'
  | 'cyclone-slate'
  | 'railway-track'
  | 'ss-linebeck'
  | 'iron-ship'
  | 'golden-ship'
  | 'spirit-train'
  | 'steel-train'
  | 'golden-train';

type LoruleItemCardId =
  | 'wall-painting'
  | 'tornado-rod'
  | 'sand-rod'
  | 'fire-rod'
  | 'ice-rod'
  | 'baby-maiamai'
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

export type ItemCardGroupId = 'instrument';

export interface ItemCard {
  readonly id: ItemCardId;
  readonly name: string;
}

export interface ItemCardGroup {
  readonly id: ItemCardGroupId;
  readonly itemCards: readonly ItemCardId[];
  readonly name: string;
}
