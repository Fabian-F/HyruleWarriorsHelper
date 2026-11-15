import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const eldinCavesMap = {
  battleAreaId: 'eldin-caves',
  image: 'battle-areas/eldin-caves.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 139, y: 129, width: 500, height: 504 },
  keeps: [
    {
      id: 'entry-square',
      name: 'Entry Square',
      bounds: { x: 192 / 768, y: 552 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'south-square',
      name: 'South Square',
      bounds: { x: 340 / 768, y: 520 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'stone-square',
      name: 'Stone Square',
      bounds: { x: 304 / 768, y: 350 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-square',
      name: 'West Square',
      bounds: { x: 204 / 768, y: 316 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-square',
      name: 'North Square',
      bounds: { x: 294 / 768, y: 170 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'crystal-cave',
      name: 'Crystal Cave',
      bounds: { x: 542 / 768, y: 214 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'tunnel-square',
      name: 'Tunnel Square',
      bounds: { x: 406 / 768, y: 260 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'stock-room',
      name: 'Stock Room',
      bounds: { x: 552 / 768, y: 406 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'central-square',
      name: 'Central Square',
      bounds: { x: 406 / 768, y: 372 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'exit-square',
      name: 'Exit Square',
      bounds: { x: 552 / 768, y: 542 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
