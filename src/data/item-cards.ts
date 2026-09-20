import type { ItemCard, ItemCardId } from '../domain/maps/item-card.model';
import { createLookup, lookup } from '../domain/shared/lookup';

export const itemCards = [
  // Adventure
  { id: 'compass', name: 'Compass' },
  { id: 'bomb', name: 'Bomb' },
  { id: 'candle', name: 'Candle' },
  { id: 'ladder', name: 'Ladder' },
  { id: 'power-bracelet', name: 'Power Bracelet' },
  { id: 'water-bomb', name: 'Water Bomb' },
  { id: 'digging-mitts', name: 'Digging Mitts' },
  { id: 'ice-arrow', name: 'Ice Arrow' },
  { id: 'raft', name: 'Raft' },
  { id: 'hookshot', name: 'Hookshot' },
  { id: 'recorder', name: 'Recorder' },
  { id: 'goddess-harp', name: 'Goddess Harp' },

  // Great Sea
  { id: 'windwaker', name: 'Wind Waker' },
  { id: 'cannon', name: 'Cannon' },
  { id: 'boomerang', name: 'Boomerang' },
  { id: 'heros-bow', name: "Hero's Bow" },
  { id: 'salvage-arm', name: 'Salvage Arm' },
  { id: 'hyoi-pear', name: 'Hyoi Pear' },
  { id: 'deku-leaf', name: 'Deku Leaf' },
  { id: 'sea-chart', name: 'Sea Chart' },
  { id: 'power-bracelet-2', name: 'Power Bracelet' },
  { id: 'hammer', name: 'Hammer' },

  // Twilight
  { id: 'lantern', name: 'Lantern' },
  { id: 'jar', name: 'Jar' },
  { id: 'fishing-rod', name: 'Fishing Rod' },
  { id: 'clawshot', name: 'Clawshot' },
  { id: 'spinner', name: 'Spinner' },
  { id: 'ooccoo', name: 'Ooccoo' },
  { id: 'tears-of-light', name: 'Tears of Light' },

  // Termina
  { id: 'deku-stick', name: 'Deku Stick' },
  { id: 'deku-mask', name: 'Deku Mask' },
  { id: 'goron-mask', name: 'Goron Mask' },
  { id: 'zora-mask', name: 'Zora Mask' },
  { id: 'giant', name: 'Giant' },
  { id: 'majoras-mask', name: "Majora's Mask" },
  { id: 'mask-of-truth', name: 'Mask of Truth' },
  { id: 'song-of-time', name: 'Song of Time' },
  { id: 'inverted-song-of-time', name: 'Inverted Song of Time' },

  // Koholint Island
  { id: 'power-bracelet-3', name: 'Power Bracelet' },
  { id: 'grandpa-ulrira', name: 'Grandpa Ulrira' },
  { id: 'magic-powder', name: 'Magic Powder' },
  { id: 'full-moon-cello', name: 'Full Moon Cello' },
  { id: 'conch-horn', name: 'Conch Horn' },
  { id: 'sea-lily-bell', name: 'Sea Lily Bell' },
  { id: 'surf-harp', name: 'Surf Harp' },
  { id: 'wind-marimba', name: 'Wind Marimba' },
  { id: 'coral-triangle', name: 'Coral Triangle' },
  { id: 'organ-of-evening-calm', name: 'Organ of Evening Calm' },
  { id: 'thunder-drum', name: 'Thunder Drum' },

  // Grand Travels
  { id: 'whirlwind', name: 'Whirlwind' },
  { id: 'cyclone-slate', name: 'Cyclone Slate' },
  { id: 'railway-track', name: 'Railway Track' },
  { id: 'ss-linebeck', name: 'S.S. Linebeck' },
  { id: 'iron-ship', name: 'Iron Ship' },
  { id: 'golden-ship', name: 'Golden Ship' },
  { id: 'spirit-train', name: 'Spirit Train' },
  { id: 'steel-train', name: 'Steel Train' },
  { id: 'golden-train', name: 'Golden Train' },

  // Lorule
  { id: 'wall-painting', name: 'Wall Painting' },
  { id: 'tornado-rod', name: 'Tornado Rod' },
  { id: 'sand-rod', name: 'Sand Rod' },
  { id: 'fire-rod', name: 'Fire Rod' },
  { id: 'ice-rod', name: 'Ice Rod' },
  { id: 'baby-maiamai', name: 'Baby Maiamai' },
  { id: 'boomerang-2', name: 'Boomerang' },
  { id: 'powerglove', name: 'Power Glove' },
  { id: 'bow', name: 'Bow' },
  { id: 'hookshot-2', name: 'Hookshot' },
  { id: 'hammer-2', name: 'Hammer' },
] as const satisfies readonly ItemCard[];

const itemCardsById = createLookup(itemCards);

export function getItemCard(itemCardId: ItemCardId) {
  return lookup(itemCardId, itemCardsById, 'item-card');
}
