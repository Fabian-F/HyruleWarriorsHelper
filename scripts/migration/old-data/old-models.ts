export enum OldBlockade {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

export enum OldMapDifficulty {
  LEGEND = 'Legend',
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard',
  HERO = 'Hero',
}

export enum OldDifficulty {
  COLORLESS = 'Colorless',
  GREEN = 'Green',
  YELLOW = 'Yellow',
  PURPLE = 'Purple',
  ORANGE = 'Orange',
  BLUE = 'Blue',
  RED = 'Red',
}

export enum OldElement {
  LIGHT,
  DARKNESS,
  FIRE,
  WATER,
  LIGHTNING,
}

export enum OldFoodCategory {
  DRINK,
  FEAST,
  PLANT,
  WEIRD,
  FISH,
}

export enum OldFairySkillGrade {
  BRONZE,
  SILVER,
  GOLD,
  RAINBOW,
}

export enum OldFairySkillType {
  ATTACK,
  DEFENSE,
  SUPPORT,
  MOVEMENT,
  REGAIN,
}

export enum OldLegendModeLocation {
  HYRULE = 'hyrule',
  ELDIN = 'eldin',
  PHIRONE = 'phirone',
  PHIRONE_ALT = 'phirone-alt',
  RANELLE = 'ranelle',
  RANELLE_ALT = 'ranelle-alt',
  TWILIGHT = 'twilight',
  TWILIGHT_ALT = 'twilight-alt',
  SHADOW = 'shadow',
  DEATH_MOUNTAIN = 'death-mountain',
  HYLIA = 'hylia',
  HYLIA_ALT = 'hylia-alt',
  SKYLOFT = 'skyloft',
  SEALED = 'sealed',
  SEALED_ALT = 'sealed-alt',
  TEMPLE_OF_THE_SACRED_SWORD = 'sword',
  TEMPLE_OF_SOULS = 'souls',
  DESERT = 'desert',
  DESERT_ALT = 'desert-alt',
  GANON = 'ganon',
  GANON_ALT = 'ganon-alt',
  BASTION = 'bastion',
  ZEPHIR_AND_TERRA_TEMPLE = 'zephir-and-terra-temple',
}

export interface OldMapDefinition {
  path: string;
  name: string;
  navPortrait?: string;
  difficulty: OldMapDifficulty;
  extras?: string;
  size: {
    width: number;
    height: number;
  };
  tiles: Array<OldTile>;
  noImages?: boolean;
  isLegendMode?: boolean;
}

export interface OldTile {
  coords: OldPoint;
}

export interface OldMapTile extends OldTile {
  challenge: string;
  additionalRule?: string;
  difficulty: OldDifficulty;
  search?: Array<OldSearchDetails>;
  fullTileSearch?: OldFullTileSearchDetails;
  rewards?: OldRewardDetails;
  requirements: OldRequirementDetails;
  notes?: Array<OldNote>;
  blockades?: Array<OldBlockade>;
  quizAnswers?: Array<string>;
}

export interface OldSearchDetails {
  item: OldItem;
  target: OldPoint;
  description?: string;
}

export interface OldFullTileSearchDetails {
  item: OldItem;
  description: string;
}

export interface OldItem {
  iconUrl: string;
  name: string;
  description: string;
}

export interface OldRewardDetails {
  arank?: string;
  clear?: Array<string>;
  treasure?: Array<string>;
  skulltulas?: Array<string>;
}

export interface OldNote {
  title: string;
  description: string;
}

export interface OldRequirementDetails {
  kills?: number;
  minutes?: number;
  damage?: number;
}

export interface OldPoint {
  row: number;
  col: number;
}

export interface OldFood {
  name: string;
  element: OldElement;
  category: OldFoodCategory;
  level: 1 | 2 | 3;
  effects: OldFairyTraits;
}

export interface OldFairy {
  skills: Array<OldFairySkill>;
  activeTraits: Array<OldFairyTrait>;
  allTraits: OldFairyTraits;
  level: number;
}

export interface OldFairyTraits {
  sparkly?: number;
  friendly?: number;
  resolute?: number;
  dizzy?: number;
  eager?: number;
  flashy_valiant?: number;
  smiley?: number;
  dreamy_aspiring?: number;
  fleet_shrewd?: number;
  soft_relaxed?: number;
}

export interface OldFairySkill {
  name: string;
  grade: OldFairySkillGrade;
  type: OldFairySkillType;
  stats: OldFairyTraits;
}

export type OldFairyTrait = keyof OldFairyTraits;

export interface OldMaterial {
  name: string;
  imagePath: string;
}

export interface OldEnemyDrops {
  bronze?: OldMaterial;
  silver?: OldMaterial;
  gold?: OldMaterial;
}

export interface OldEnemyType {
  name: string;
  imagePath: string;
  drops: OldEnemyDrops;
  farmLocations: OldFarmingLocations;
  sortingIndex?: number;
}

export interface OldTileLocation {
  tile?: string;
  title: string;
  amount: string;
  recommended?: boolean;
}

export interface OldMapLocation {
  map: string;
  tiles: Array<OldTileLocation>;
}

export type OldFarmingLocations = Array<OldMapLocation>;

export interface HWLegendTile extends OldTile {
  challenge: string;
  location: OldLegendModeLocation;
  altBorder?: boolean;
  guide?: string;
  skulltulas?: Array<string>;
  heartpieces?: Array<string>;
  weapons?: Array<string>;
}
