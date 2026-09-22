import type { MapId } from '../../domain/maps/map.model';
import type { Blockade, TileId } from '../../domain/maps/tile.model';
import type { ItemCardId } from '../../domain/maps/item-card.model';

export function getMapTileSrc(mapId: MapId, tileId: TileId): string {
  return `map-tiles/${mapId}/${tileId}.png`;
}

export function getItemCardSrc(itemCardId: ItemCardId): string {
  return `item-cards/${itemCardId}.png`;
}

export function getIconSrc(iconId: string): string {
  return `icons/${iconId}`;
}

export function getBlockadeSrc(blockade: Blockade): string {
  return `blockades/${blockade}.png`;
}
