import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const templeOfSoulsMap = {
  battleAreaId: 'temple-of-souls',
  image: 'battle-areas/temple-of-souls.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 145, y: 129, width: 488, height: 494 },
  keeps: [
    {
      id: 'northwest-keep',
      name: 'Northwest Keep',
      bounds: { x: 250 / 768, y: 182 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-keep',
      name: 'West Keep',
      bounds: { x: 170 / 768, y: 272 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'southwest-keep',
      name: 'Southwest Keep',
      bounds: { x: 260 / 768, y: 340 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'northeast-keep',
      name: 'Northeast Keep',
      bounds: { x: 474 / 768, y: 182 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-keep',
      name: 'East Keep',
      bounds: { x: 552 / 768, y: 272 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'southeast-keep',
      name: 'Southeast Keep',
      bounds: { x: 462 / 768, y: 340 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'central-chamber',
      name: 'Central Chamber',
      bounds: { x: 362 / 768, y: 204 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-garden',
      name: 'West Garden',
      bounds: { x: 238 / 768, y: 520 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'south-garden',
      name: 'South Garden',
      bounds: { x: 362 / 768, y: 542 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-garden',
      name: 'East Garden',
      bounds: { x: 484 / 768, y: 520 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
