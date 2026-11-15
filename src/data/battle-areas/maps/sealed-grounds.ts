import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const sealedGroundsMap = {
  battleAreaId: 'sealed-grounds',
  image: 'battle-areas/sealed-grounds.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 135, y: 135, width: 498, height: 498 },
  keeps: [
    {
      id: 'south-keep',
      name: 'South Keep',
      bounds: { x: 374 / 768, y: 554 / 768, width: 54 / 768, height: 54 / 768 },
    },
    {
      id: 'southwest-keep',
      name: 'Southwest Keep',
      bounds: { x: 160 / 768, y: 554 / 768, width: 54 / 768, height: 54 / 768 },
    },
    {
      id: 'west-cannon-keep',
      name: 'West Cannon Keep',
      bounds: { x: 272 / 768, y: 440 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-cannon-keep',
      name: 'East Cannon Keep',
      bounds: { x: 508 / 768, y: 440 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'southeast-keep',
      name: 'Southeast Keep',
      bounds: { x: 554 / 768, y: 554 / 768, width: 54 / 768, height: 54 / 768 },
    },
    {
      id: 'west-keep',
      name: 'West Keep',
      bounds: { x: 214 / 768, y: 328 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-keep',
      name: 'East Keep',
      bounds: { x: 496 / 768, y: 260 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'temple-entrance',
      name: 'Temple Entrance',
      bounds: { x: 328 / 768, y: 214 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-temple-hall',
      name: 'East Temple Hall',
      bounds: { x: 452 / 768, y: 204 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'hall-of-time',
      name: 'Hall of Time',
      bounds: { x: 214 / 768, y: 160 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
