import type { Enemy, EnemyId } from '../domain/enemy.model';
import { createLookup, lookup } from '../domain/shared/lookup';

export const enemies = [
  { id: 'aeralfos', name: 'Aeralfos' },
  { id: 'fiery-aeralfos', name: 'Fiery Aeralfos' },
  { id: 'gibdo', name: 'Gibdo' },
  { id: 'redead-knight', name: 'ReDead Knight' },
  { id: 'lizalfos', name: 'Lizalfos' },
  { id: 'dinolfos', name: 'Dinolfos' },
  { id: 'moblin', name: 'Moblin' },
  { id: 'shield-moblin', name: 'Shield Moblin' },
  { id: 'darknut', name: 'Darknut' },
  { id: 'stalmaster', name: 'Stalmaster' },
  { id: 'big-poe', name: 'Big Poe' },
  { id: 'icy-big-poe', name: 'Icy Big Poe' },
  { id: 'hylian-captain', name: 'Hylian Captain' },
  { id: 'goron-captain', name: 'Goron Captain' },
  { id: 'big-blin', name: 'Big Blin' },
  { id: 'stone-blin', name: 'Stone Blin' },
  { id: 'ganon', name: 'Ganon' },
  { id: 'king-dodongo', name: 'King Dodongo' },
  { id: 'gohma', name: 'Gohma' },
  { id: 'manhandla', name: 'Manhandla' },
  { id: 'argorok', name: 'Argorok' },
  { id: 'the-imprisoned', name: 'The Imprisoned' },
  { id: 'helmaroc-king', name: 'Helmaroc King' },
  { id: 'phantom-ganon', name: 'Phantom Ganon' },
] as const satisfies readonly Enemy[];

const enemiesById = createLookup(enemies);

export function getEnemy(id: EnemyId): Enemy {
  return lookup(id, enemiesById, 'enemy');
}
