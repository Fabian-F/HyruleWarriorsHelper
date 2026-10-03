import { characters, getCharacter } from '../../data/characters';
import { getMaterial } from '../../data/materials';
import type { EnemyId } from '../enemy.model';
import {
  getFarmingLocations,
  type AdventureFarmingLocation,
  type FarmingLookup,
} from '../farming-lookup';
import type { MapDefinition } from './map.model';
import { enemies } from '../../data/enemies';
import { getItemCard, itemCards } from '../../data/item-cards';
import { getWeapon } from '../../data/weapons';
import type { CharacterId } from '../character.model';
import type { ItemCardId } from './item-card.model';
import type { MapTile } from './tile.model';
import type { Reward } from './reward.model';

export const searchKinds = [
  { id: 'weapon', name: 'Weapons' },
  { id: 'heart-container', name: 'Heart Containers' },
  { id: 'heart-piece', name: 'Heart Pieces' },
  { id: 'outfit', name: 'Outfits' },
  { id: 'character', name: 'Character unlocks' },
  { id: 'item-card', name: 'Item Cards' },
  { id: 'material', name: 'Materials' },
  { id: 'fairy', name: 'My Fairy' },
  { id: 'skulltula', name: 'Skulltulas' },
  { id: 'text', name: 'Other rewards' },
] as const;
export type SearchKind = (typeof searchKinds)[number]['id'];

export interface MapSearchState {
  readonly text: string;
  readonly characters: readonly CharacterId[];
  readonly farmingEnemies: readonly EnemyId[];
  readonly kinds: readonly SearchKind[];
  readonly cards: readonly ItemCardId[];
  readonly cardMode: 'reward' | 'required';
  readonly cardsEnabled: boolean;
  readonly finalBossOnly: boolean;
}

export const emptySearch: MapSearchState = {
  text: '',
  characters: [],
  farmingEnemies: [],
  kinds: [],
  cards: [],
  cardMode: 'reward',
  cardsEnabled: false,
  finalBossOnly: false,
};

export const searchParamKeys = [
  'q',
  'searchCharacters',
  'searchFarmingEnemies',
  'searchKinds',
  'searchCards',
  'searchCardMode',
  'searchCardsEnabled',
  'searchFinalBossOnly',
] as const;

export function normalizeSearch(text: string): string {
  return text.toLowerCase().trim().replace(/\s+/g, ' ');
}

export function isSearchActive(state: MapSearchState): boolean {
  return !!(
    normalizeSearch(state.text) ||
    state.characters.length ||
    state.farmingEnemies.length ||
    state.kinds.length ||
    state.cardsEnabled ||
    state.finalBossOnly
  );
}

export function parseSearch(params: { get(key: string): string | null }): MapSearchState {
  const values = (key: string) => new Set((params.get(key) ?? '').split(','));
  return {
    text: params.get('q') ?? '',
    characters: characters.filter((c) => values('searchCharacters').has(c.id)).map((c) => c.id),
    farmingEnemies: enemies
      .filter((e) => values('searchFarmingEnemies').has(e.id))
      .map((e) => e.id),
    kinds: searchKinds.filter((k) => values('searchKinds').has(k.id)).map((k) => k.id),
    cards: itemCards.filter((c) => values('searchCards').has(c.id)).map((c) => c.id),
    cardMode: params.get('searchCardMode') === 'required' ? 'required' : 'reward',
    cardsEnabled: params.get('searchCardsEnabled') === 'true',
    finalBossOnly: params.get('searchFinalBossOnly') === 'true',
  };
}

export function serializeSearch(state: MapSearchState): Record<string, string | null> {
  return {
    q: state.text || null,
    searchCharacters: state.characters.join(',') || null,
    searchFarmingEnemies: state.farmingEnemies.join(',') || null,
    searchKinds: state.kinds.join(',') || null,
    searchCards: state.cardsEnabled ? state.cards.join(',') || null : null,
    searchCardMode: state.cardMode === 'required' ? 'required' : null,
    searchCardsEnabled: state.cardsEnabled ? 'true' : null,
    searchFinalBossOnly: state.finalBossOnly ? 'true' : null,
  };
}

const instruments: readonly ItemCardId[] = [
  'full-moon-cello',
  'conch-horn',
  'sea-lily-bell',
  'surf-harp',
  'wind-marimba',
  'coral-triangle',
  'organ-of-evening-calm',
  'thunder-drum',
];

export interface SearchReward {
  readonly kind: SearchKind;
  readonly character?: CharacterId;
  readonly card?: ItemCardId;
}

export interface TileSearchEntry {
  readonly tile: MapTile;
  readonly text: string;
  readonly rewards: readonly SearchReward[];
  readonly requiredCards: readonly ItemCardId[];
  readonly farmingEnemies: readonly EnemyId[];
}

function rewardText(reward: Reward): string[] {
  const words: string[] = [searchKinds.find((k) => k.id === reward.type)!.name];
  if ('characterId' in reward) words.push(getCharacter(reward.characterId).name);
  switch (reward.type) {
    case 'weapon': {
      const weapon = getWeapon(reward.weaponId);
      words.push(weapon.name, getCharacter(weapon.characterId).name, `Lv.${reward.level}`);
      break;
    }
    case 'item-card':
      words.push(getItemCard(reward.itemCardId).name);
      break;
    case 'outfit':
      words.push(reward.outfitName);
      break;
    case 'material':
      words.push(reward.materialName);
      break;
    case 'fairy':
    case 'text':
      words.push(reward.text);
      break;
  }
  return words;
}

/** Only locations on this map and its existing tiles contribute to the index. */
export function createMapSearchEntries(
  map: MapDefinition,
  lookup: FarmingLookup,
): readonly TileSearchEntry[] {
  return map.tiles.map((tile) =>
    createTileSearchEntry(tile, getFarmingLocations(lookup, map.id, tile.id)),
  );
}

export function createTileSearchEntry(
  tile: MapTile,
  locations: readonly AdventureFarmingLocation[] = [],
): TileSearchEntry {
  const rewards = [
    ...(tile.rewards?.aRank ? [tile.rewards.aRank] : []),
    ...(tile.rewards?.clear ?? []),
    ...(tile.rewards?.treasure ?? []),
  ];
  const full = tile.fullTileSearch;
  const requiredCards = [
    ...new Set([
      ...(tile.search ?? []).map((s) => s.itemCardId),
      ...(full ? ('itemCardId' in full ? [full.itemCardId] : instruments) : []),
    ]),
  ];
  const farmingEnemies = [...new Set(locations.map((location) => location.enemyId))];
  const farmingWords = farmingEnemies.flatMap((id) => {
    const enemy = enemies.find((enemy) => enemy.id === id);
    if (!enemy) return [];
    return [enemy.name, ...Object.values(enemy.drops ?? {}).map((id) => getMaterial(id).name)];
  });
  const words = [
    ...farmingWords,
    ...locations.map((location) => location.notes),
    tile.id,
    tile.challenge,
    tile.additionalRule ?? '',
    full?.description ?? '',
    ...requiredCards.map((id) => getItemCard(id).name),
    ...rewards.flatMap(rewardText),
    ...(tile.rewards?.treasure ?? []).map((r) => r.location),
    ...(tile.rewards?.skulltulas ?? []),
    ...(tile.quizAnswers ?? []).map(
      (id) =>
        characters.find((c) => c.id === id)?.name ?? enemies.find((e) => e.id === id)?.name ?? '',
    ),
  ];
  if (tile.characterSelection?.status === 'restricted') {
    for (const requirement of tile.characterSelection.alternatives) {
      words.push(getCharacter(requirement.characterId).name);
      if (requirement.weaponId) words.push(getWeapon(requirement.weaponId).name);
    }
  }
  const indexedRewards: SearchReward[] = rewards.map((r) => ({
    kind: r.type,
    character:
      'characterId' in r
        ? r.characterId
        : r.type === 'weapon'
          ? getWeapon(r.weaponId).characterId
          : undefined,
    card: r.type === 'item-card' ? r.itemCardId : undefined,
  }));
  if (tile.rewards?.skulltulas?.length) {
    indexedRewards.push({ kind: 'skulltula' });
    words.push('Skulltula Skulltulas');
  }
  return {
    tile,
    text: normalizeSearch(words.join(' ')),
    rewards: indexedRewards,
    requiredCards,
    farmingEnemies,
  };
}

export function matchesTile(entry: TileSearchEntry, state: MapSearchState): boolean {
  if (
    state.farmingEnemies.length &&
    !entry.farmingEnemies.some((id) => state.farmingEnemies.includes(id))
  )
    return false;
  if (state.finalBossOnly && !entry.tile.isFinalBoss) return false;
  const terms = normalizeSearch(state.text).split(' ').filter(Boolean);
  if (!terms.every((term) => entry.text.includes(term))) return false;
  if (
    state.cardsEnabled &&
    state.cardMode === 'required' &&
    !entry.requiredCards.some((id) => !state.cards.length || state.cards.includes(id))
  )
    return false;
  const rewardCards = state.cardsEnabled && state.cardMode === 'reward';
  const kinds = rewardCards ? [...new Set<SearchKind>([...state.kinds, 'item-card'])] : state.kinds;
  if (!kinds.length && !state.characters.length) return true;
  return entry.rewards.some(
    (reward) =>
      (!kinds.length || kinds.includes(reward.kind)) &&
      (!state.characters.length ||
        (!!reward.character && state.characters.includes(reward.character))) &&
      (!(rewardCards && reward.kind === 'item-card') ||
        !state.cards.length ||
        (!!reward.card && state.cards.includes(reward.card))),
  );
}
