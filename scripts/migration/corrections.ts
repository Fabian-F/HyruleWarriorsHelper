import { MapId } from '../../src/domain/maps/map.model';
import { ItemCardId } from '../../src/domain/maps/item-card.model';

export const rewardCorrections: Readonly<Record<string, string>> = {
  'Skull Kid Piece of Heart': 'Piece of Heart - Skull Kid',
  'Skull Kid Heart Container': 'Heart Container - Skull Kid',
};

export const mapSpecificItemCardIds: Partial<Record<MapId, Record<string, ItemCardId>>> = {
  adventure: {
    'Power Bracelet': 'power-bracelet',
  },
  'great-sea': {
    'Power Bracelet': 'power-bracelet-2',
  },
};
