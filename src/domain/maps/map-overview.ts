import { getFairyRewardKind } from './fairy-reward';
import type { CharacterId } from '../character.model';
import type { MapDefinition, MapId } from './map.model';

export interface MapStatistics {
  readonly tiles: number;
  readonly weapons: number;
  readonly characters: number;
  readonly heartPieces: number;
  readonly heartContainers: number;
  readonly outfits: number;
  readonly fairies: number;
  readonly fairyClothes: number;
  readonly skulltulas: number;
}

export interface MapOverview {
  readonly id: MapId;
  readonly statistics: MapStatistics;
  readonly characterUnlocks: readonly CharacterId[];
  readonly preview: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
  } | null;
}

/** Counts reward occurrences across A-rank, clear and treasure rewards, without deduplication.
 * Only explicit weapon rewards count as weapons. Fairy food is excluded.
 */
export function getMapStatistics(map: MapDefinition): MapStatistics {
  const counts = {
    tiles: map.tiles.length,
    weapons: 0,
    characters: 0,
    heartPieces: 0,
    heartContainers: 0,
    outfits: 0,
    fairies: 0,
    fairyClothes: 0,
    skulltulas: 0,
  };
  for (const tile of map.tiles) {
    const rewards = tile.rewards;
    counts.skulltulas += rewards?.skulltulas?.length ?? 0;
    for (const reward of [
      ...(rewards?.aRank ? [rewards.aRank] : []),
      ...(rewards?.clear ?? []),
      ...(rewards?.treasure ?? []),
    ]) {
      switch (reward.type) {
        case 'weapon':
          counts.weapons++;
          break;
        case 'character':
          counts.characters++;
          break;
        case 'heart-piece':
          counts.heartPieces++;
          break;
        case 'heart-container':
          counts.heartContainers++;
          break;
        case 'outfit':
          counts.outfits++;
          break;
        case 'fairy': {
          const kind = getFairyRewardKind(reward.text);
          if (kind === 'fairy') counts.fairies++;
          else if (kind === 'fairy-clothes') counts.fairyClothes++;
          else if (!kind) {
            throw new Error(`Unrecognized fairy reward on ${map.id}/${tile.id}: ${reward.text}`);
          }
          break;
        }
      }
    }
  }
  return counts;
}

/** Unique character unlocks in tile/reward order; excludes weapon and heart rewards. */
export function getMapCharacterUnlocks(map: MapDefinition): readonly CharacterId[] {
  const characters = new Set<CharacterId>();
  for (const tile of map.tiles) {
    for (const reward of [
      ...(tile.rewards?.aRank ? [tile.rewards.aRank] : []),
      ...(tile.rewards?.clear ?? []),
      ...(tile.rewards?.treasure ?? []),
    ]) {
      if (reward.type === 'character') characters.add(reward.characterId);
    }
  }
  return [...characters];
}
