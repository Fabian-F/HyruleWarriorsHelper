import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const twilightFieldMap = {
  battleAreaId: 'twilight-field',
  image: 'battle-areas/twilight-field.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 22, y: 39, width: 707, height: 686 },
  keeps: [
    {
      id: 'south-field-keep',
      name: 'South Field Keep',
      bounds: { x: 520 / 768, y: 574 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'rocky-square',
      name: 'Rocky Square',
      bounds: { x: 272 / 768, y: 632 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'village-keep',
      name: 'Village Keep',
      bounds: { x: 46 / 768, y: 644 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'outskirts-keep',
      name: 'Outskirts Keep',
      bounds: { x: 192 / 768, y: 520 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'central-keep',
      name: 'Central Keep',
      bounds: { x: 372 / 768, y: 418 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-field-keep',
      name: 'West Field Keep',
      bounds: { x: 124 / 768, y: 384 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-field-keep',
      name: 'East Field Keep',
      bounds: { x: 620 / 768, y: 418 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-field-keep',
      name: 'North Field Keep',
      bounds: { x: 430 / 768, y: 282 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'hilltop-keep',
      name: 'Hilltop Keep',
      bounds: { x: 598 / 768, y: 282 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'bridge-keep',
      name: 'Bridge Keep',
      bounds: { x: 124 / 768, y: 70 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
