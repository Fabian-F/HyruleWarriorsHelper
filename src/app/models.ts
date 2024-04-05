import { MapDifficulty, Difficulty, Blockade } from "./enums";

export interface HWMap {
  path: string;
  name: string;
  difficulty: MapDifficulty;
  size: {
    width: number;
    height: number;
  }
  tiles: Array<HWMapTile>;
  items: Array<Item>;
}

export interface HWMapTile {
  coords: Point;
  challenge: string;
  additionalRule?: string;
  difficulty: Difficulty;
  search?: Array<SearchDetails>;
  rewards?: RewardDetails;
  requirements: RequirementDetails;
  notes?: Array<Note>;
  blockades?: Array<Blockade>;
}

export interface SearchDetails {
  item: Item;
  target: Point;
  description?: string;
}

export interface Item {
  iconUrl: string;
  name: string;
  description: string;
}

export interface RewardDetails {
  arank?: string;
  clear?: string;
  treasure?: Array<string>;
}

export interface Note {
  title: string;
  description: string;
}

export interface RequirementDetails {
  kills?: number;
  minutes?: number;
  damage?: number;
}

export interface Point {
  row: number;
  col: number;
}
