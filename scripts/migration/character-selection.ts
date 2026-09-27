import { getWeaponId } from './weapons';
import { readFileSync } from 'node:fs';
import type { MapDefinition, MapId } from '../../src/domain/maps/map.model';
import {
  type CharacterRequirement,
  type CharacterSelection,
  TILE_LETTERS,
  type TileId,
} from '../../src/domain/maps/tile.model';
import { findExactCharacterId } from './mapping';

const mapIds = {
  'Adventure Map': 'adventure',
  'Great Sea Map': 'great-sea',
  'Master Quest Map': 'master-quest',
  'Master Wind Waker Map': 'master-wind-waker',
  'Twilight Map': 'twilight',
  'Termina Map': 'termina',
  'Koholint Island Map': 'koholint-island',
  'Grand Travels Map': 'grand-travels',
  'Lorule Map': 'lorule',
  'Rewards Map': 'rewards',
} as const satisfies Record<string, MapId>;

interface SelectionEntry {
  readonly mission: string;
  readonly selection: CharacterSelection;
}

type SelectionData = ReadonlyMap<MapId, ReadonlyMap<TileId, SelectionEntry>>;

export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;
  let closed = false;
  const finishField = () => {
    row.push(field);
    field = '';
    closed = false;
  };
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          quoted = false;
          closed = true;
        }
      } else field += char;
    } else if (char === ',') {
      finishField();
    } else if (char === '\n' || char === '\r') {
      if (char === '\r' && text[i + 1] === '\n') i++;
      finishField();
      rows.push(row);
      row = [];
    } else if (char === '"' && field === '' && !closed) {
      quoted = true;
    } else {
      if (closed || char === '"') throw new Error('Invalid CSV quoting');
      field += char;
    }
  }
  if (quoted) throw new Error('Unterminated CSV quoted field');
  if (field || row.length || closed) {
    finishField();
    rows.push(row);
  }
  return rows;
}

export function parseCharacterSelections(csv: string): SelectionData {
  const maps = new Map<MapId, Map<TileId, SelectionEntry>>();
  let entries: Map<TileId, SelectionEntry> | undefined;
  for (const row of parseCsv(csv)) {
    if (row.every((value) => !value.trim())) continue;
    if (row.length !== 5) throw new Error(`Expected 5 CSV columns: ${row}`);
    const [square, mission, character, weapon, slots] = row.map((value) => value.trim());
    if (square === 'Square') {
      if (row.join(',') !== 'Square,Mission,Must play as,Weapon required,Character slots') {
        throw new Error('Unexpected character selection CSV header');
      }
      continue;
    }
    if (!mission && !character && !weapon && !slots) {
      const mapId = mapIds[square as keyof typeof mapIds];
      if (!mapId) throw new Error(`Unknown CSV map: ${square}`);
      if (maps.has(mapId)) throw new Error(`Duplicate CSV map: ${square}`);
      entries = new Map();
      maps.set(mapId, entries);
      continue;
    }
    if (!entries) throw new Error('CSV tile before map heading');
    const match = /^([A-H])-(1[0-6]|[1-9])$/.exec(square);
    if (!match) throw new Error(`Invalid CSV square: ${square}`);
    const tileId: TileId = `${TILE_LETTERS[Number(match[2]) - 1]}${match[1].charCodeAt(0) - 64}`;
    if (entries.has(tileId)) throw new Error(`Duplicate CSV tile: ${square}`);
    if (!mission) throw new Error(`Missing mission: ${square}`);
    if (!['1', '2+', 'unknown'].includes(slots)) throw new Error(`Invalid slots: ${slots}`);
    const parsedSlots = slots === '1' ? 1 : (slots as '2+' | 'unknown');
    let selection: CharacterSelection;
    if (character === 'anyone' || character === 'not observed') {
      if (weapon) throw new Error(`Weapon without required character: ${square}`);
      selection = {
        slots: parsedSlots,
        status: character === 'anyone' ? 'unrestricted' : 'unknown',
      };
    } else {
      const alternatives = character.split(' or ').map((name): CharacterRequirement => {
        const characterId = findExactCharacterId(name);
        if (!characterId) throw new Error(`Unknown character: ${name}`);
        return { characterId, ...(weapon ? { weaponId: getWeaponId(characterId, weapon) } : {}) };
      });
      if (new Set(alternatives.map((a) => a.characterId)).size !== alternatives.length) {
        throw new Error(`Duplicate character alternative: ${square}`);
      }
      // The source currently assigns weapons only to a single character.
      if (weapon && alternatives.length > 1)
        throw new Error(`Ambiguous weapon assignment: ${square}`);
      selection = {
        slots: parsedSlots,
        status: 'restricted',
        alternatives: [alternatives[0], ...alternatives.slice(1)],
      };
    }
    entries.set(tileId, { mission, selection });
  }
  return maps;
}

let cachedSelections: SelectionData | undefined;
export function loadCharacterSelections(): SelectionData {
  return (cachedSelections ??= parseCharacterSelections(
    readFileSync(
      new URL(
        './old-data/hw_de map character requirements - hwde-square-requirements.csv',
        import.meta.url,
      ),
      'utf8',
    ),
  ));
}

export function enrichCharacterSelections(map: MapDefinition, data: SelectionData): MapDefinition {
  const entries = data.get(map.id);
  if (!entries) throw new Error(`Missing character selection map: ${map.id}`);
  const tileIds = new Set(map.tiles.map((tile) => tile.id));
  for (const tileId of entries.keys()) {
    if (!tileIds.has(tileId)) throw new Error(`CSV tile not found: ${map.id}/${tileId}`);
  }
  return {
    ...map,
    tiles: map.tiles.map((tile) => {
      const entry = entries.get(tile.id);
      if (!entry) throw new Error(`Missing CSV tile: ${map.id}/${tile.id}`);
      const mission = tile.challenge.replace(/^(Adventure|Challenge) Battle: /, '');
      const truncatedReward =
        map.id === 'rewards' &&
        entry.mission === 'Live out the illustration ' + String.fromCharCode(92);
      if (
        mission !== entry.mission &&
        !(truncatedReward && mission.startsWith('Live out the illustration '))
      ) {
        throw new Error(`CSV mission mismatch: ${map.id}/${tile.id}`);
      }
      return { ...tile, characterSelection: entry.selection };
    }),
  };
}
