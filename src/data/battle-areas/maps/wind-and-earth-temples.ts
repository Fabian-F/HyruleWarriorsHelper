import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const windAndEarthTemplesMap = {
  battleAreaId: 'wind-and-earth-temples',
  image: 'battle-areas/wind-and-earth-temples.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 141, y: 136, width: 488, height: 503 },
  keeps: [
    {
      id: 'southwest-sage-keep',
      name: 'SW Sage Keep',
      bounds: { x: 194 / 768, y: 498 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'faces-keep',
      name: 'Faces Keep',
      bounds: { x: 194 / 768, y: 374 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'northwest-sage-keep',
      name: 'NW Sage Keep',
      bounds: { x: 216 / 768, y: 206 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'earth-plaza',
      name: 'Earth Plaza',
      bounds: { x: 330 / 768, y: 216 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-mine-keep',
      name: 'North Mine Keep',
      bounds: { x: 398 / 768, y: 162 / 768, width: 54 / 768, height: 54 / 768 },
    },
    {
      id: 'wind-plaza',
      name: 'Wind Plaza',
      bounds: { x: 364 / 768, y: 442 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'south-mine-keep',
      name: 'South Mine Keep',
      bounds: { x: 374 / 768, y: 510 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'northeast-sage-keep',
      name: 'NE Sage Keep',
      bounds: { x: 544 / 768, y: 204 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'rock-keep',
      name: 'Rock Keep',
      bounds: { x: 520 / 768, y: 318 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'southeast-sage-keep',
      name: 'SE Sage Keep',
      bounds: { x: 522 / 768, y: 510 / 768, width: 54 / 768, height: 54 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
