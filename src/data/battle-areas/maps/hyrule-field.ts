import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const hyruleFieldMap = {
  battleAreaId: 'hyrule-field',
  image: 'battle-areas/hyrule-field.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 129, y: 129, width: 510, height: 506 },
  keeps: [
    {
      id: 'mountain-keep',
      name: 'Mountain Keep',
      bounds: { x: 372 / 768, y: 160 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-field-keep',
      name: 'North Field Keep',
      bounds: { x: 462 / 768, y: 182 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-rockface-keep',
      name: 'W. Rockface Keep',
      bounds: { x: 260 / 768, y: 282 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-field-keep',
      name: 'East Field Keep',
      bounds: { x: 552 / 768, y: 294 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'abandoned-fort',
      name: 'Abandoned Fort',
      bounds: { x: 170 / 768, y: 316 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'central-keep',
      name: 'Central Keep',
      bounds: { x: 418 / 768, y: 350 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-field-keep',
      name: 'West Field Keep',
      bounds: { x: 272 / 768, y: 394 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'fairy-fountain',
      name: 'Fairy Fountain',
      bounds: { x: 542 / 768, y: 496 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'castle-keep',
      name: 'Castle Keep',
      bounds: { x: 192 / 768, y: 542 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'south-field-keep',
      name: 'South Field Keep',
      bounds: { x: 384 / 768, y: 552 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
