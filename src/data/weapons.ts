import type { Weapon, WeaponId } from '../domain/weapon.model';
import { createLookup, lookup } from '../domain/shared/lookup';

export const weapons = [
  {
    id: 'parasol',
    characterId: 'agitha',
    name: 'Parasol',
    element: 'light',
    level4PlusElement: 'fire',
  },
  {
    id: 'scepter',
    characterId: 'cia',
    name: 'Scepter',
    element: 'darkness',
    level4PlusElement: 'lightning',
  },
  {
    id: 'hammer',
    characterId: 'darunia',
    name: 'Hammer',
    element: 'fire',
    level4PlusElement: 'darkness',
  },
  {
    id: 'goddess-blade',
    characterId: 'fi',
    name: 'Goddess Blade',
    element: 'light',
    level4PlusElement: 'water',
  },
  {
    id: 'great-swords',
    characterId: 'ganondorf',
    name: 'Great Swords',
    element: 'darkness',
    level4PlusElement: 'light',
  },
  {
    id: 'trident',
    characterId: 'ganondorf',
    name: 'Trident',
    element: 'lightning',
    level4PlusElement: 'fire',
  },
  {
    id: 'demon-blade',
    characterId: 'ghirahim',
    name: 'Demon Blade',
    element: 'darkness',
    level4PlusElement: 'fire',
  },
  {
    id: 'giant-blade',
    characterId: 'impa',
    name: 'Giant Blade',
    element: 'water',
    level4PlusElement: 'light',
  },
  {
    id: 'naginata',
    characterId: 'impa',
    name: 'Naginata',
    element: 'fire',
    level4PlusElement: 'lightning',
  },
  {
    id: 'sail',
    characterId: 'king-daphnes',
    name: 'Sail',
    element: 'water',
    level4PlusElement: 'lightning',
  },
  {
    id: 'book-of-sorcery',
    characterId: 'lana',
    name: 'Book of Sorcery',
    element: 'lightning',
    level4PlusElement: 'darkness',
  },
  { id: 'spear', characterId: 'lana', name: 'Spear', element: 'water', level4PlusElement: 'light' },
  {
    id: 'summoning-gate',
    characterId: 'lana',
    name: 'Summoning Gate',
    element: 'fire',
    level4PlusElement: 'water',
  },
  {
    id: 'epona',
    characterId: 'link',
    name: 'Epona',
    element: 'light',
    level4PlusElement: 'lightning',
  },
  {
    id: 'gauntlets',
    characterId: 'link',
    name: 'Gauntlets',
    element: 'lightning',
    level4PlusElement: 'fire',
  },
  {
    id: 'great-fairy',
    characterId: 'link',
    name: 'Great Fairy',
    element: 'water',
    level4PlusElement: 'lightning',
  },
  {
    id: 'hylian-sword',
    characterId: 'link',
    name: 'Hylian Sword',
    element: 'light',
    level4PlusElement: 'darkness',
  },
  {
    id: 'master-sword',
    characterId: 'link',
    name: 'Master Sword',
    element: 'light',
    requirementWeaponId: 'hylian-sword',
    unlockDescription: 'Automatically unlocked after completing "The Sacred Sword" in Legend Mode.',
    sealedSkills: [
      {
        name: "Evil's Bane",
        unlockDescription:
          'Obtain Lv. 1, 2 and 3 of every other weapon type across all characters at least once. Afterwards, score 10,000 KOs with the Master Sword.',
      },
      {
        name: 'Exorcism',
        unlockDescription:
          'Obtain every level of every other weapon type across all characters at least once, including Lv. 4 and Lv. 4+. Afterwards, score 15,000 KOs with the Master Sword.',
      },
    ],
  },
  {
    id: 'magic-rod',
    characterId: 'link',
    name: 'Magic Rod',
    element: 'fire',
    level4PlusElement: 'lightning',
  },
  {
    id: 'spinner',
    characterId: 'link',
    name: 'Spinner',
    element: 'lightning',
    level4PlusElement: 'water',
  },
  {
    id: 'boots',
    characterId: 'linkle',
    name: 'Boots',
    element: 'lightning',
    level4PlusElement: 'light',
  },
  {
    id: 'crossbows',
    characterId: 'linkle',
    name: 'Crossbows',
    element: 'fire',
    level4PlusElement: 'light',
  },
  { id: 'bell', characterId: 'marin', name: 'Bell', element: 'water', level4PlusElement: 'light' },
  {
    id: 'rito-harp',
    characterId: 'medli',
    name: 'Rito Harp',
    element: 'light',
    level4PlusElement: 'water',
  },
  {
    id: 'shackle',
    characterId: 'midna',
    name: 'Shackle',
    element: 'darkness',
    level4PlusElement: 'lightning',
  },
  {
    id: 'rental-hammer',
    characterId: 'ravio',
    name: 'Rental Hammer',
    element: 'darkness',
    level4PlusElement: 'lightning',
  },
  {
    id: 'zora-scale',
    characterId: 'ruto',
    name: 'Zora Scale',
    element: 'water',
    level4PlusElement: 'light',
  },
  {
    id: 'harp',
    characterId: 'sheik',
    name: 'Harp',
    element: 'lightning',
    level4PlusElement: 'light',
  },
  {
    id: 'ocarina',
    characterId: 'skull-kid',
    name: 'Ocarina',
    element: 'darkness',
    level4PlusElement: 'lightning',
  },
  {
    id: 'cutlass',
    characterId: 'tetra',
    name: 'Cutlass',
    element: 'water',
    level4PlusElement: 'light',
  },
  {
    id: 'balloon',
    characterId: 'tingle',
    name: 'Balloon',
    element: 'fire',
    level4PlusElement: 'water',
  },
  {
    id: 'light-sword',
    characterId: 'toon-link',
    name: 'Light Sword',
    element: 'light',
    level4PlusElement: 'water',
  },
  {
    id: 'sand-wand',
    characterId: 'toon-link',
    name: 'Sand Wand',
    element: 'fire',
    level4PlusElement: 'darkness',
  },
  {
    id: 'phantom-arms',
    characterId: 'toon-zelda',
    name: 'Phantom Arms',
    element: 'light',
    level4PlusElement: 'fire',
  },
  {
    id: 'mirror',
    characterId: 'twili-midna',
    name: 'Mirror',
    element: 'darkness',
    level4PlusElement: 'light',
  },
  {
    id: 'dragon-spear',
    characterId: 'volga',
    name: 'Dragon Spear',
    element: 'fire',
    level4PlusElement: 'darkness',
  },
  {
    id: 'ring',
    characterId: 'wizzro',
    name: 'Ring',
    element: 'darkness',
    level4PlusElement: 'water',
  },
  {
    id: 'mask',
    characterId: 'young-link',
    name: 'Mask',
    element: 'darkness',
    level4PlusElement: 'fire',
  },
  {
    id: 'picture-frame',
    characterId: 'yuga',
    name: 'Picture Frame',
    element: 'lightning',
    level4PlusElement: 'fire',
  },
  {
    id: 'scimitars',
    characterId: 'zant',
    name: 'Scimitars',
    element: 'darkness',
    level4PlusElement: 'water',
  },
  {
    id: 'baton',
    characterId: 'zelda',
    name: 'Baton',
    element: 'lightning',
    level4PlusElement: 'water',
  },
  {
    id: 'dominion-rod',
    characterId: 'zelda',
    name: 'Dominion Rod',
    element: 'darkness',
    level4PlusElement: 'fire',
  },
  {
    id: 'rapier',
    characterId: 'zelda',
    name: 'Rapier',
    element: 'light',
    level4PlusElement: 'darkness',
  },
] as const satisfies readonly Weapon[];

const weaponsById = createLookup(weapons);

export function getWeapon(id: WeaponId): Weapon {
  return lookup(id, weaponsById, 'weapon');
}

export function getRequirementWeaponId(id: WeaponId): WeaponId {
  const weapon = getWeapon(id);
  return weapon.id === 'master-sword' ? weapon.requirementWeaponId : weapon.id;
}

export function isWeaponId(id: string): id is WeaponId {
  return weapons.some((weapon) => weapon.id === id);
}

export const weaponElementsSource = {
  url: 'https://docs.google.com/spreadsheets/d/1d6Spep2Qryhi1Om_lY_iLV21DsB-fTsu_0ZNtLIKCyk/edit?gid=1079006819#gid=1079006819',
  sheet: 'Weapon List',
  importedOn: '2026-10-16',
} as const;
