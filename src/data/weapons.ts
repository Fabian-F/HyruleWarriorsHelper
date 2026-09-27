import type { Weapon, WeaponId } from '../domain/weapon.model';
import { createLookup, lookup } from '../domain/shared/lookup';

export const weapons = [
  { id: 'parasol', characterId: 'agitha', name: 'Parasol' },
  { id: 'scepter', characterId: 'cia', name: 'Scepter' },
  { id: 'hammer', characterId: 'darunia', name: 'Hammer' },
  { id: 'goddess-blade', characterId: 'fi', name: 'Goddess Blade' },
  { id: 'great-swords', characterId: 'ganondorf', name: 'Great Swords' },
  { id: 'trident', characterId: 'ganondorf', name: 'Trident' },
  { id: 'demon-blade', characterId: 'ghirahim', name: 'Demon Blade' },
  { id: 'giant-blade', characterId: 'impa', name: 'Giant Blade' },
  { id: 'naginata', characterId: 'impa', name: 'Naginata' },
  { id: 'sail', characterId: 'king-daphnes', name: 'Sail' },
  { id: 'book-of-sorcery', characterId: 'lana', name: 'Book of Sorcery' },
  { id: 'spear', characterId: 'lana', name: 'Spear' },
  { id: 'summoning-gate', characterId: 'lana', name: 'Summoning Gate' },
  { id: 'epona', characterId: 'link', name: 'Epona' },
  { id: 'gauntlets', characterId: 'link', name: 'Gauntlets' },
  { id: 'great-fairy', characterId: 'link', name: 'Great Fairy' },
  { id: 'hylian-sword', characterId: 'link', name: 'Hylian Sword' },
  { id: 'magic-rod', characterId: 'link', name: 'Magic Rod' },
  { id: 'spinner', characterId: 'link', name: 'Spinner' },
  { id: 'boots', characterId: 'linkle', name: 'Boots' },
  { id: 'crossbows', characterId: 'linkle', name: 'Crossbows' },
  { id: 'bell', characterId: 'marin', name: 'Bell' },
  { id: 'rito-harp', characterId: 'medli', name: 'Rito Harp' },
  { id: 'shackle', characterId: 'midna', name: 'Shackle' },
  { id: 'rental-hammer', characterId: 'ravio', name: 'Rental Hammer' },
  { id: 'zora-scale', characterId: 'ruto', name: 'Zora Scale' },
  { id: 'harp', characterId: 'sheik', name: 'Harp' },
  { id: 'ocarina', characterId: 'skull-kid', name: 'Ocarina' },
  { id: 'cutlass', characterId: 'tetra', name: 'Cutlass' },
  { id: 'balloon', characterId: 'tingle', name: 'Balloon' },
  { id: 'light-sword', characterId: 'toon-link', name: 'Light Sword' },
  { id: 'sand-wand', characterId: 'toon-link', name: 'Sand Wand' },
  { id: 'phantom-arms', characterId: 'toon-zelda', name: 'Phantom Arms' },
  { id: 'mirror', characterId: 'twili-midna', name: 'Mirror' },
  { id: 'dragon-spear', characterId: 'volga', name: 'Dragon Spear' },
  { id: 'ring', characterId: 'wizzro', name: 'Ring' },
  { id: 'mask', characterId: 'young-link', name: 'Mask' },
  { id: 'picture-frame', characterId: 'yuga', name: 'Picture Frame' },
  { id: 'scimitars', characterId: 'zant', name: 'Scimitars' },
  { id: 'baton', characterId: 'zelda', name: 'Baton' },
  { id: 'dominion-rod', characterId: 'zelda', name: 'Dominion Rod' },
  { id: 'rapier', characterId: 'zelda', name: 'Rapier' },
] as const satisfies readonly Weapon[];

const weaponsById = createLookup(weapons);

export function getWeapon(id: WeaponId): Weapon {
  return lookup(id, weaponsById, 'weapon');
}

export function isWeaponId(id: string): id is WeaponId {
  return weapons.some((weapon) => weapon.id === id);
}
