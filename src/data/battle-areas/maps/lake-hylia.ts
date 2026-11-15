import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const lakeHyliaMap = {
  battleAreaId: 'lake-hylia',
  image: 'battle-areas/lake-hylia.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 162, y: 49, width: 455, height: 670 },
  keeps: [
    {
      id: 'kings-hall',
      name: "King's Hall",
      bounds: { x: 462 / 768, y: 102 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'cliffside-keep',
      name: 'Cliffside Keep',
      bounds: { x: 282 / 768, y: 124 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'lakeside-keep',
      name: 'Lakeside Keep',
      bounds: { x: 270 / 768, y: 304 / 768, width: 60 / 768, height: 60 / 768 },
    },
    {
      id: 'temple-face-keep',
      name: 'Temple Face Keep',
      bounds: { x: 440 / 768, y: 272 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'sw-room',
      name: 'SW Room',
      bounds: { x: 214 / 768, y: 620 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-room',
      name: 'West Room',
      bounds: { x: 214 / 768, y: 418 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'se-room',
      name: 'SE Room',
      bounds: { x: 508 / 768, y: 620 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-room',
      name: 'East Room',
      bounds: { x: 508 / 768, y: 418 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'central-hall',
      name: 'Central Hall',
      bounds: { x: 362 / 768, y: 462 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'hall-of-mirrors',
      name: 'Hall of Mirrors',
      bounds: { x: 362 / 768, y: 610 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
