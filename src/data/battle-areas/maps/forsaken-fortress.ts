import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const forsakenFortressMap = {
  battleAreaId: 'forsaken-fortress',
  image: 'battle-areas/forsaken-fortress.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 72, y: 55, width: 669, height: 691 },
  keeps: [
    {
      id: 'star-island',
      name: 'Star Island',
      bounds: { x: 198 / 768, y: 632 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'beasts-refuge',
      name: "Beast's Refuge",
      bounds: { x: 96 / 768, y: 306 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'beasts-vault',
      name: "Beast's Vault",
      bounds: { x: 96 / 768, y: 126 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'gluttons-keep',
      name: "Glutton's Keep",
      bounds: { x: 312 / 768, y: 160 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'jail-watch-keep',
      name: 'Jail Watch Keep',
      bounds: { x: 278 / 768, y: 304 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'dragon-roost',
      name: 'Dragon Roost',
      bounds: { x: 536 / 768, y: 250 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'central-keep',
      name: 'Central Keep',
      bounds: { x: 446 / 768, y: 396 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'bomb-shop',
      name: 'Bomb Shop',
      bounds: { x: 446 / 768, y: 642 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'school-of-joy',
      name: 'School of Joy',
      bounds: { x: 604 / 768, y: 520 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'windfall-island',
      name: 'Windfall Island',
      bounds: { x: 660 / 768, y: 664 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
