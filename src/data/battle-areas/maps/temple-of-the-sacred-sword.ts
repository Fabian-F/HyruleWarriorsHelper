import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const templeOfTheSacredSwordMap = {
  battleAreaId: 'temple-of-the-sacred-sword',
  image: 'battle-areas/temple-of-the-sacred-sword.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 55, y: 202, width: 646, height: 353 },
  keeps: [
    {
      id: 'central-keep',
      name: 'Central Keep',
      bounds: { x: 250 / 768, y: 352 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'town-entrance',
      name: 'Town Entrance',
      bounds: { x: 80 / 768, y: 350 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-entrance-keep',
      name: 'N. Entrance Keep',
      bounds: { x: 170 / 768, y: 250 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'south-entrance-keep',
      name: 'S. Entrance Keep',
      bounds: { x: 170 / 768, y: 452 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-square',
      name: 'North Square',
      bounds: { x: 350 / 768, y: 226 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'south-square',
      name: 'South Square',
      bounds: { x: 350 / 768, y: 474 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'temple-square',
      name: 'Temple Square',
      bounds: { x: 406 / 768, y: 352 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-temple-hall',
      name: 'N. Temple Hall',
      bounds: { x: 520 / 768, y: 250 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'south-temple-hall',
      name: 'S. Temple Hall',
      bounds: { x: 520 / 768, y: 452 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'sacred-pedestal',
      name: 'Sacred Pedestal',
      bounds: { x: 620 / 768, y: 350 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
