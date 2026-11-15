import { getMaterial } from '../../../../data/materials';
import { getWeapon } from '../../../../data/weapons';
import { getCharacter } from '../../../../data/characters';
import { getItemCard } from '../../../../data/item-cards';
import type { Treasure } from '../../../../domain/maps/reward.model';

export function getTreasureName(treasure: Treasure): string {
  switch (treasure.type) {
    case 'heart-piece':
      return 'Heart Piece';
    case 'heart-container':
      return 'Heart Container';
    case 'weapon':
      return `${getWeapon(treasure.weaponId).name} Lv.${treasure.level}`;
    case 'fairy':
    case 'text':
      return treasure.text;
    case 'character':
      return getCharacter(treasure.characterId).name;
    case 'material':
      return treasure.materialId ? getMaterial(treasure.materialId).name : 'Material';
    case 'item-card':
      return getItemCard(treasure.itemCardId).name;
    case 'outfit':
      return treasure.outfitName;
  }
}
