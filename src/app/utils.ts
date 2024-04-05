import { Difficulty } from "./enums";
import { HWMap, HWMapTile } from "./models";

export function getTileColor(tile: HWMapTile) {
  if(tile.difficulty === Difficulty.COLORLESS) return 'white';
  return tile.difficulty.toString().toLowerCase();
}

export function getTileImagePath(tile: HWMapTile, map: HWMap) {
  return `assets/images/map-tiles/${map.path}/${getTilePlacementString(tile)}.png`;
}

export function getTilePlacementString(tile: HWMapTile) {
  return `${mapNumberToLetter(tile.coords.col)}${tile.coords.row + 1}`;
}

export function mapNumberToLetter(number: number): string | undefined {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (number >= 0 && number <= 25) {
      return letters.charAt(number);
  } else {
      return undefined;
  }
}
