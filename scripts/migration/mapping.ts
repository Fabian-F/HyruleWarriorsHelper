import { CharacterId } from '../../src/domain/character.model';
import { EnemyId } from '../../src/domain/enemy.model';
import { ItemCardId } from '../../src/domain/maps/item-card.model';
import { Reward } from '../../src/domain/maps/reward.model';
import { Block } from '@angular/compiler';
import { Blockade } from '../../src/domain/maps/tile.model';
import { MapId } from '../../src/domain/maps/map.model';
import { mapSpecificItemCardIds } from './corrections';

const characterIdByName: Record<string, CharacterId> = {
  Link: 'link',
  Impa: 'impa',
  Sheik: 'sheik',
  Lana: 'lana',
  Zelda: 'zelda',
  Ganondorf: 'ganondorf',
  Darunia: 'darunia',
  Ruto: 'ruto',
  Agitha: 'agitha',
  Midna: 'midna',
  Zant: 'zant',
  Fi: 'fi',
  Ghirahim: 'ghirahim',
  Cia: 'cia',
  Volga: 'volga',
  Wizzro: 'wizzro',
  'Twili Midna': 'twili-midna',
  'Midna (Twili)': 'twili-midna',
  'Young Link': 'young-link',
  Tingle: 'tingle',
  Linkle: 'linkle',
  'Skull Kid': 'skull-kid',
  'Toon Link': 'toon-link',
  Tetra: 'tetra',
  'King Daphnes': 'king-daphnes',
  Medli: 'medli',
  Marin: 'marin',
  'Toon Zelda': 'toon-zelda',
  Ravio: 'ravio',
  Yuga: 'yuga',
};

const enemyIdByName: Record<string, EnemyId> = {
  Aeralfos: 'aeralfos',
  'Fiery Aeralfos': 'fiery-aeralfos',
  Gibdo: 'gibdo',
  'ReDead Knight': 'redead-knight',
  Lizalfos: 'lizalfos',
  Dinolfos: 'dinolfos',
  Moblin: 'moblin',
  'Shield Moblin': 'shield-moblin',
  Darknut: 'darknut',
  Stalmaster: 'stalmaster',
  'Big Poe': 'big-poe',
  'Icy Big Poe': 'icy-big-poe',
  'Hylian Captain': 'hylian-captain',
  'Goron Captain': 'goron-captain',
  'Big Blin': 'big-blin',
  'Stone Blin': 'stone-blin',
  Ganon: 'ganon',
  'King Dodongo': 'king-dodongo',
  Gohma: 'gohma',
  Manhandla: 'manhandla',
  Argorok: 'argorok',
  'The Imprisoned': 'the-imprisoned',
  'Helmaroc King': 'helmaroc-king',
  'Phantom Ganon': 'phantom-ganon',
};

const itemCardIdByName: Record<string, ItemCardId> = {
  Compass: 'compass',
  Bomb: 'bomb',
  Candle: 'candle',
  Ladder: 'ladder',
  Powerbracelet: 'power-bracelet',
  'Power Bracelet': 'power-bracelet',
  Waterbomb: 'water-bomb',
  'Water Bomb': 'water-bomb',
  Diggingmitts: 'digging-mitts',
  'Digging Mitts': 'digging-mitts',
  Icearrow: 'ice-arrow',
  'Ice Arrow': 'ice-arrow',
  Raft: 'raft',
  Hookshot: 'hookshot',
  Recorder: 'recorder',
  Goddessharp: 'goddess-harp',
  "Goddess's Harp": 'goddess-harp',
  Windwaker: 'windwaker',
  'Wind Waker': 'windwaker',
  Cannon: 'cannon',
  Boomerang: 'boomerang',
  Herosbow: 'heros-bow',
  "Hero's Bow": 'heros-bow',
  Salvagearm: 'salvage-arm',
  'Salvage Arm': 'salvage-arm',
  Hyoipear: 'hyoi-pear',
  'Hyoi Pear': 'hyoi-pear',
  Dekuleaf: 'deku-leaf',
  'Deku Leaf': 'deku-leaf',
  Seachart: 'sea-chart',
  'Sea Chart': 'sea-chart',
  Powerbracelet_2: 'power-bracelet-2',
  Hammer: 'hammer',
  Lantern: 'lantern',
  Jar: 'jar',
  Fishingrod: 'fishing-rod',
  'Fishing Rod': 'fishing-rod',
  Clawshot: 'clawshot',
  Spinner: 'spinner',
  Ooccoo: 'ooccoo',
  Tearsoflight: 'tears-of-light',
  'Tears of Light': 'tears-of-light',
  Dekustick: 'deku-stick',
  'Deku Stick': 'deku-stick',
  Dekumask: 'deku-mask',
  'Deku Mask': 'deku-mask',
  Goronmask: 'goron-mask',
  'Goron Mask': 'goron-mask',
  Zoramask: 'zora-mask',
  'Zora Mask': 'zora-mask',
  Giant: 'giant',
  Powerbracelet_3: 'power-bracelet-3',
  Grandpaulrira: 'grandpa-ulrira',
  'Grandpa Ulrira': 'grandpa-ulrira',
  Magicpowder: 'magic-powder',
  'Magic Powder': 'magic-powder',
  Instrument: 'instrument',
  Whirlwind: 'whirlwind',
  Cycloneslate: 'cycloneslate',
  Railwaytrack: 'railwaytrack',
  Wallpainting: 'wall-painting',
  Tornadorod: 'tornado-rod',
  Sandrod: 'sand-rod',
  Firerod: 'fire-rod',
  Icerod: 'ice-rod',
  Babymaimai: 'baby-maimai',
  Boomerang_2: 'boomerang-2',
  Powerglove: 'powerglove',
  Bow: 'bow',
  Hookshot_2: 'hookshot-2',
  Hammer_2: 'hammer-2',
};

const blockadeByNumber: Record<number, Blockade> = {
  0: 'north',
  1: 'east',
  2: 'south',
  3: 'west',
};

const rewardTypeByName: Record<string, Reward['type']> = {
  'Heart Container': 'heart-container',
  'Piece of Heart': 'heart-piece',
  'Item Card': 'item-card',
};

export function findExactCharacterId(name: string): CharacterId | undefined {
  return characterIdByName[name];
}

function getMappedId<T extends string, K extends string | number>(
  mapping: Readonly<Record<K, T>>,
  identifier: K,
  type: string,
): T {
  const id = mapping[identifier];

  if (!id) {
    throw new Error(`Unknown ${type}: "${identifier}"`);
  }

  return id;
}

export function getCharacterId(name: string): CharacterId {
  return getMappedId(characterIdByName, name, 'character');
}

export function getEnemyId(name: string): EnemyId {
  return getMappedId(enemyIdByName, name, 'enemy');
}

export function getItemCardId(name: string): ItemCardId {
  return getMappedId(itemCardIdByName, name, 'item-card');
}

export function getRewardType(name: string): Reward['type'] {
  return getMappedId(rewardTypeByName, name, 'reward');
}

export function getBlockade(num: number): Blockade {
  return getMappedId(blockadeByNumber, num, 'blockade');
}

function findMappingId<T>(text: string, mapping: Record<string, T>): T | undefined {
  for (const [name, id] of Object.entries(mapping)) {
    if (text.includes(name)) {
      return id;
    }
  }

  return undefined;
}

export function findCharacterId(value: string): CharacterId | undefined {
  for (const [name, id] of Object.entries(characterIdByName)) {
    const pattern = new RegExp(`(^|\\s|-)${escapeRegExp(name)}($|\\s|-)`);

    if (pattern.test(value)) {
      return id;
    }
  }

  return undefined;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function findEnemyId(text: string): EnemyId | undefined {
  return findMappingId(text, enemyIdByName);
}

export function findItemCardId(text: string): ItemCardId | undefined {
  return findMappingId(text, itemCardIdByName);
}

export function findExactItemCardId(name: string): ItemCardId | undefined {
  return itemCardIdByName[name];
}

export function findExactEnemyId(name: string): EnemyId | undefined {
  return enemyIdByName[name];
}

export function getRewardItemCardId(name: string, mapId: MapId): ItemCardId {
  return mapSpecificItemCardIds[mapId]?.[name] ?? itemCardIdByName[name];
}
