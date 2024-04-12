import { Difficulty } from "../assets/data/enums";
import { HWMap, HWMapTile, Tile } from "./models";

export function getTileColor(tile: HWMapTile) {
  if(tile.difficulty === Difficulty.COLORLESS) return 'white';
  return tile.difficulty.toString().toLowerCase();
}

export function getTileImagePath(tile: HWMapTile, map: HWMap) {
  return `assets/images/map-tiles/${map.path}/${getTilePlacementString(tile)}.png`;
}

export function getTilePlacementString(tile: Tile) {
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

export function isMapTile(tile: Tile) {
  return 'challenge' in tile;
}
