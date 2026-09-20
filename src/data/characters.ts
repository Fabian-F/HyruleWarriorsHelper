import { Character, CharacterId } from '../domain/character.model';
import { createLookup, lookup } from '../domain/shared/lookup';

export const characters = [
  { id: 'link', name: 'Link' },
  { id: 'impa', name: 'Impa' },
  { id: 'sheik', name: 'Sheik' },
  { id: 'lana', name: 'Lana' },
  { id: 'zelda', name: 'Zelda' },
  { id: 'ganondorf', name: 'Ganondorf' },
  { id: 'darunia', name: 'Darunia' },
  { id: 'ruto', name: 'Ruto' },
  { id: 'agitha', name: 'Agitha' },
  { id: 'midna', name: 'Midna' },
  { id: 'zant', name: 'Zant' },
  { id: 'fi', name: 'Fi' },
  { id: 'ghirahim', name: 'Ghirahim' },
  { id: 'cia', name: 'Cia' },
  { id: 'volga', name: 'Volga' },
  { id: 'wizzro', name: 'Wizzro' },
  { id: 'twili-midna', name: 'Twili Midna' },
  { id: 'young-link', name: 'Young Link' },
  { id: 'tingle', name: 'Tingle' },
  { id: 'linkle', name: 'Linkle' },
  { id: 'skull-kid', name: 'Skull Kid' },
  { id: 'toon-link', name: 'Toon Link' },
  { id: 'tetra', name: 'Tetra' },
  { id: 'king-daphnes', name: 'King Daphnes' },
  { id: 'medli', name: 'Medli' },
  { id: 'marin', name: 'Marin' },
  { id: 'toon-zelda', name: 'Toon Zelda' },
  { id: 'ravio', name: 'Ravio' },
  { id: 'yuga', name: 'Yuga' },
] as const satisfies readonly Character[];

const charactersById = createLookup(characters);

export function getCharacter(id: CharacterId): Character {
  return lookup(id, charactersById, 'character');
}
