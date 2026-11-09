import type { ProgressCategory } from '../../../domain/progress/progress-catalog';
export const progressCategoryOptions = [
  ['character', 'Characters'],
  ['weapon', 'Weapons'],
  ['outfit', 'Outfits'],
  ['heart-piece', 'Heart Pieces'],
  ['heart-container', 'Heart Containers'],
  ['skulltula', 'Gold Skulltulas'],
  ['fairy-food', 'Fairy Food'],
  ['fairy-clothing', 'Fairy Clothing'],
  ['arank', 'A-Ranks'],
] as const;
export function progressCategoryLabel(category: ProgressCategory): string {
  return progressCategoryOptions.find(([id]) => id === category)?.[1] ?? category;
}
