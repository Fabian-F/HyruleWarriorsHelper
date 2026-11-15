import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const faronWoodsMap = {
  battleAreaId: 'faron-woods',
  image: 'battle-areas/faron-woods.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 156, y: 157, width: 455, height: 472 },
  keeps: [
    {
      id: 'deku-tree',
      name: 'Deku Tree',
      bounds: { x: 362 / 768, y: 372 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'south-square',
      name: 'South Square',
      bounds: { x: 272 / 768, y: 530 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-square',
      name: 'West Square',
      bounds: { x: 192 / 768, y: 440 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'southern-tree',
      name: 'Southern Tree',
      bounds: { x: 394 / 768, y: 496 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'southeast-tree',
      name: 'Southeast Tree',
      bounds: { x: 508 / 768, y: 462 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'western-tree',
      name: 'Western Tree',
      bounds: { x: 226 / 768, y: 316 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'eastern-tree',
      name: 'Eastern Tree',
      bounds: { x: 496 / 768, y: 316 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'fairy-fountain',
      name: 'Fairy Fountain',
      bounds: { x: 530 / 768, y: 182 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'north-square',
      name: 'North Square',
      bounds: { x: 316 / 768, y: 214 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'dark-forest-keep',
      name: 'Dark Forest Keep',
      bounds: { x: 180 / 768, y: 204 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
