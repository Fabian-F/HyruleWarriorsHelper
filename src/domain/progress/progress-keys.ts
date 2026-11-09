import type { CharacterId } from '../character.model';
import type { OutfitId } from '../characters/outfit.model';
import type { FairyRewardContent } from '../fairy/fairy.model';
import type { LegendMissionId } from '../legend/legend-mission.model';
import type { MapId } from '../maps/map.model';
import type { Reward } from '../maps/reward.model';
import type { TileId } from '../maps/tile.model';
import type { WeaponId, WeaponLevel } from '../weapon.model';

export type ProgressSource =
  | { readonly type: 'adventure'; readonly mapId: MapId; readonly tileId: TileId }
  | { readonly type: 'legend'; readonly missionId: LegendMissionId };

export type HeartReward = Extract<Reward, { type: 'heart-piece' | 'heart-container' }>;
export type OccurrenceCategory = HeartReward['type'] | 'skulltula';
/** Typed builders validate the segments without expanding every possible ID combination. */
export type ProgressKey =
  | `character:${string}`
  | `weapon:${string}`
  | `outfit:${string}`
  | `fairy-food:${string}`
  | `fairy-clothing:${string}`
  | `arank:${MapId}:${string}`
  | `${OccurrenceCategory}:${string}`;

/** IDs are persisted data, never display text or runtime-generated slugs. */
export function isOccurrenceId(value: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function sourceKey(source: ProgressSource): string {
  return source.type === 'adventure'
    ? `${source.mapId}:${source.tileId.toLowerCase()}`
    : `legend:${source.missionId}`;
}

export function occurrenceKey(
  category: OccurrenceCategory,
  source: ProgressSource,
  occurrenceId: string,
): ProgressKey {
  if (!isOccurrenceId(occurrenceId)) throw new Error(`Invalid occurrence ID: ${occurrenceId}`);
  return `${category}:${sourceKey(source)}:${occurrenceId}`;
}

export function heartKey(reward: HeartReward, source: ProgressSource): ProgressKey {
  return occurrenceKey(reward.type, source, reward.occurrenceId);
}

export function legendSkulltulaKey(missionId: LegendMissionId, number: number): ProgressKey {
  if (number !== 1 && number !== 2) throw new Error(`Invalid Legend Skulltula number: ${number}`);
  return occurrenceKey('skulltula', { type: 'legend', missionId }, String(number));
}

export function characterKey(characterId: CharacterId): ProgressKey {
  return `character:${characterId}`;
}

export function weaponKey(
  characterId: CharacterId,
  weaponId: WeaponId,
  level: WeaponLevel,
): ProgressKey {
  return `weapon:${characterId}:${weaponId}:${level}`;
}

export function aRankKey(mapId: MapId, tileId: TileId): ProgressKey {
  return `arank:${mapId}:${tileId.toLowerCase()}`;
}

export function outfitKey(characterId: CharacterId, outfitId: OutfitId): ProgressKey {
  return `outfit:${characterId}:${outfitId}`;
}

export function fairyRewardKey(content: FairyRewardContent): ProgressKey | undefined {
  switch (content.kind) {
    case 'fairy':
      return undefined;
    case 'fairy-food':
      return `fairy-food:${content.foodId}`;
    case 'fairy-clothing':
      return `fairy-clothing:${content.clothingId}`;
  }
}
