import type { BattleAreaMap } from '../../../domain/battle-areas/battle-area-map.model';

// Coordinates use the original 768 × 768 image space.
// The viewBox crops the display without rotating or mirroring the image.
export const deathMountainMap = {
  battleAreaId: 'death-mountain',
  image: 'battle-areas/death-mountain.webp',
  width: 768,
  height: 768,
  // Display crop only; Keeps and Treasure points retain original-image coordinates.
  viewBox: { x: 135, y: 145, width: 488, height: 478 },
  keeps: [
    {
      id: 'stronghold',
      name: 'Stronghold',
      bounds: { x: 350 / 768, y: 542 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-mountain-keep',
      name: 'W. Mountain Keep',
      bounds: { x: 214 / 768, y: 520 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-mountain-keep',
      name: 'E. Mountain Keep',
      bounds: { x: 484 / 768, y: 520 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-keep',
      name: 'West Keep',
      bounds: { x: 160 / 768, y: 384 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-keep',
      name: 'East Keep',
      bounds: { x: 540 / 768, y: 384 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-boulder-keep',
      name: 'W. Boulder Keep',
      bounds: { x: 294 / 768, y: 340 / 768, width: 54 / 768, height: 54 / 768 },
    },
    {
      id: 'east-boulder-keep',
      name: 'E. Boulder Keep',
      bounds: { x: 406 / 768, y: 340 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'west-goron-keep',
      name: 'West Goron Keep',
      bounds: { x: 238 / 768, y: 192 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'east-goron-keep',
      name: 'East Goron Keep',
      bounds: { x: 462 / 768, y: 192 / 768, width: 56 / 768, height: 56 / 768 },
    },
    {
      id: 'chiefs-room',
      name: "Chief's Room",
      bounds: { x: 350 / 768, y: 170 / 768, width: 56 / 768, height: 56 / 768 },
    },
  ],
} as const satisfies BattleAreaMap;
