import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const valleyOfSeersMap = {
  battleAreaId: 'valley-of-seers',
  image: 'battle-areas/valley-of-seers.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 94, y: 16, width: 529, height: 736 },
  keeps: [
    {
      id: 'south-temple',
      name: 'South Temple',
      bounds: { x: 350 / 768, y: 664 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-temple',
      name: 'East Temple',
      bounds: { x: 462 / 768, y: 474 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-ruins',
      name: 'West Ruins',
      bounds: { x: 272 / 768, y: 430 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-keep',
      name: 'West Keep',
      bounds: { x: 226 / 768, y: 294 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-keep',
      name: 'East Keep',
      bounds: { x: 452 / 768, y: 294 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-temple',
      name: 'West Temple',
      bounds: { x: 124 / 768, y: 204 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'western-room',
      name: 'Western Room',
      bounds: { x: 250 / 768, y: 136 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'eastern-room',
      name: 'Eastern Room',
      bounds: { x: 452 / 768, y: 136 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'ruins-summit',
      name: 'Ruins Summit',
      bounds: { x: 350 / 768, y: 46 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'fairy-fountain',
      name: 'Fairy Fountain',
      bounds: { x: 350 / 768, y: 406 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
