import { MapDifficulty, Difficulty, Blockade, LegendModeLocation } from "../assets/data/enums";

export interface HWMap {
  path: string;
  name: string;
  navPortrait?: string;
  difficulty: MapDifficulty;
  extras?: string;
  size: {
    width: number;
    height: number;
  }
  tiles: Array<Tile>;
  noImages?: boolean;
  isLegendMode?: boolean;
}

export interface Tile {
  coords: Point;
}

export interface HWMapTile extends Tile {
  challenge: string;
  additionalRule?: string;
  difficulty: Difficulty;
  search?: Array<SearchDetails>;
  fullTileSearch?: FullTileSearchDetails;
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

export interface FullTileSearchDetails {
  item: Item;
  description: string;
}

export interface Item {
  iconUrl: string;
  name: string;
  description: string;
}

export interface RewardDetails {
  arank?: string;
  clear?: Array<string>;
  treasure?: Array<string>;
  skulltulas?: Array<string>;
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

export interface Material {
  name: string,
  imagePath: string
}

export interface EnemyDrops {
  bronze?: Material,
  silver?: Material,
  gold?: Material
}

export interface EnemyType {
  name: string,
  imagePath: string,
  drops: EnemyDrops,
  farmLocations: FarmingLocations,
  sortingIndex?: number
}

export interface TileLocation {
  tile?: string,
  title: string,
  amount: string,
  recommended?: boolean
}

export interface MapLocation {
  map: string,
  tiles: Array<TileLocation>,
}

export type FarmingLocations = Array<MapLocation>

export interface HWLegendTile extends Tile {
  challenge: string,
  location: LegendModeLocation,
  altBorder?: boolean,
  guide?: string,
  skulltulas?: Array<string>;
  heartpieces?: Array<string>;
}
