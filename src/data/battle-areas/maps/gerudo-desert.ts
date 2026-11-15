import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const gerudoDesertMap = {
  battleAreaId: 'gerudo-desert',
  image: 'battle-areas/gerudo-desert.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 27, y: 45, width: 725, height: 668 },
  keeps: [
    {
      id: 'south-settlement',
      name: 'S. Settlement',
      bounds: { x: 70 / 768, y: 632 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-settlement',
      name: 'N. Settlement',
      bounds: { x: 170 / 768, y: 520 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'south-desert-keep',
      name: 'S. Desert Keep',
      bounds: { x: 508 / 768, y: 586 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'south-oasis',
      name: 'South Oasis',
      bounds: { x: 430 / 768, y: 472 / 768, width: 58 / 768, height: 58 / 768 },
    },
    {
      id: 'clifftop-keep',
      name: 'Clifftop Keep',
      bounds: { x: 654 / 768, y: 394 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-oasis',
      name: 'North Oasis',
      bounds: { x: 250 / 768, y: 294 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'central-keep',
      name: 'Central Keep',
      bounds: { x: 394 / 768, y: 350 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'rockface-keep',
      name: 'Rockface Keep',
      bounds: { x: 496 / 768, y: 316 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'arbiters-keep',
      name: "Arbiter's Keep",
      bounds: { x: 520 / 768, y: 170 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'sacred-grounds',
      name: 'Sacred Grounds',
      bounds: { x: 642 / 768, y: 70 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
