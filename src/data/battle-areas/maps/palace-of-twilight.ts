import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const palaceOfTwilightMap = {
  battleAreaId: 'palace-of-twilight',
  image: 'battle-areas/palace-of-twilight.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 129, y: 133, width: 500, height: 506 },
  keeps: [
    {
      id: 'southeast-square',
      name: 'Southeast Square',
      bounds: { x: 418 / 768, y: 552 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'central-square',
      name: 'Central Square',
      bounds: { x: 260 / 768, y: 462 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'fairy-fountain',
      name: 'Fairy Fountain',
      bounds: { x: 520 / 768, y: 474 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'southwest-square',
      name: 'Southwest Square',
      bounds: { x: 214 / 768, y: 552 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'lower-level-east',
      name: 'Lower Level East',
      bounds: { x: 474 / 768, y: 340 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'upper-level-east',
      name: 'Upper Level East',
      bounds: { x: 474 / 768, y: 250 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-square',
      name: 'West Square',
      bounds: { x: 160 / 768, y: 362 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-palace',
      name: 'West Palace',
      bounds: { x: 272 / 768, y: 340 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-palace',
      name: 'North Palace',
      bounds: { x: 282 / 768, y: 158 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'kings-hall',
      name: "King's Hall",
      bounds: { x: 340 / 768, y: 214 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
