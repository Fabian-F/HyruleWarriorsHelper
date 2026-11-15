import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const skyloftMap = {
  battleAreaId: 'skyloft',
  image: 'battle-areas/skyloft.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 45, y: 45, width: 701, height: 674 },
  keeps: [
    {
      id: 'south-point-keep',
      name: 'South Point Keep',
      bounds: { x: 666 / 768, y: 620 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'town-center-keep',
      name: 'Town Center Keep',
      bounds: { x: 508 / 768, y: 552 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'statue-keep',
      name: 'Statue Keep',
      bounds: { x: 418 / 768, y: 310 / 768, width: 60 / 768, height: 60 / 768 },
    },
    {
      id: 'academy-keep',
      name: 'Academy Keep',
      bounds: { x: 328 / 768, y: 508 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-town-keep',
      name: 'West Town Keep',
      bounds: { x: 214 / 768, y: 508 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'central-square',
      name: 'Central Square',
      bounds: { x: 294 / 768, y: 282 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'south-rockface-keep',
      name: 'S. Rockface Keep',
      bounds: { x: 182 / 768, y: 226 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-rockface-keep',
      name: 'N. Rockface Keep',
      bounds: { x: 216 / 768, y: 114 / 768, width: 54 / 768, height: 54 / 768 },
    },
    {
      id: 'fairy-fountain',
      name: 'Fairy Fountain',
      bounds: { x: 586 / 768, y: 328 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'northmost-keep',
      name: 'Northmost Keep',
      bounds: { x: 70 / 768, y: 70 / 768, width: 54 / 768, height: 54 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
