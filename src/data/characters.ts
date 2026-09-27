import { Character, CharacterId } from '../domain/character.model';
import { createLookup, lookup } from '../domain/shared/lookup';

export const characters = [
  { id: 'link', name: 'Link', defaultWeaponId: 'hylian-sword' },
  { id: 'impa', name: 'Impa', defaultWeaponId: 'giant-blade' },
  { id: 'sheik', name: 'Sheik', defaultWeaponId: 'harp' },
  { id: 'lana', name: 'Lana', defaultWeaponId: 'book-of-sorcery' },
  { id: 'zelda', name: 'Zelda', defaultWeaponId: 'rapier' },
  { id: 'ganondorf', name: 'Ganondorf', defaultWeaponId: 'great-swords' },
  { id: 'darunia', name: 'Darunia', defaultWeaponId: 'hammer' },
  { id: 'ruto', name: 'Ruto', defaultWeaponId: 'zora-scale' },
  { id: 'agitha', name: 'Agitha', defaultWeaponId: 'parasol' },
  { id: 'midna', name: 'Midna', defaultWeaponId: 'shackle' },
  { id: 'zant', name: 'Zant', defaultWeaponId: 'scimitars' },
  { id: 'fi', name: 'Fi', defaultWeaponId: 'goddess-blade' },
  { id: 'ghirahim', name: 'Ghirahim', defaultWeaponId: 'demon-blade' },
  { id: 'cia', name: 'Cia', defaultWeaponId: 'scepter' },
  { id: 'volga', name: 'Volga', defaultWeaponId: 'dragon-spear' },
  { id: 'wizzro', name: 'Wizzro', defaultWeaponId: 'ring' },
  { id: 'twili-midna', name: 'Twili Midna', defaultWeaponId: 'mirror' },
  { id: 'young-link', name: 'Young Link', defaultWeaponId: 'mask' },
  { id: 'tingle', name: 'Tingle', defaultWeaponId: 'balloon' },
  { id: 'linkle', name: 'Linkle', defaultWeaponId: 'crossbows' },
  { id: 'skull-kid', name: 'Skull Kid', defaultWeaponId: 'ocarina' },
  { id: 'toon-link', name: 'Toon Link', defaultWeaponId: 'light-sword' },
  { id: 'tetra', name: 'Tetra', defaultWeaponId: 'cutlass' },
  { id: 'king-daphnes', name: 'King Daphnes', defaultWeaponId: 'sail' },
  { id: 'medli', name: 'Medli', defaultWeaponId: 'rito-harp' },
  { id: 'marin', name: 'Marin', defaultWeaponId: 'bell' },
  { id: 'toon-zelda', name: 'Toon Zelda', defaultWeaponId: 'phantom-arms' },
  { id: 'ravio', name: 'Ravio', defaultWeaponId: 'rental-hammer' },
  { id: 'yuga', name: 'Yuga', defaultWeaponId: 'picture-frame' },
] as const satisfies readonly Character[];

const charactersById = createLookup(characters);

export function getCharacter(id: CharacterId): Character {
  return lookup(id, charactersById, 'character');
}

export function isCharacterId(id: string): id is CharacterId {
  return characters.some((character) => character.id === id);
}
