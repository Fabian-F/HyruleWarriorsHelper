import {
  OldFullTileSearchDetails,
  OldMapTile,
  OldPoint,
  OldRewardDetails,
} from './old-data/old-models';
import {
  FullTileSearch,
  MapTile,
  TileDifficulty,
  TileId,
  TileLetter,
  TilePointColumn,
  TilePointRow,
  TileRewards,
} from '../../src/domain/maps/tile.model';
import { Reward, Treasure } from '../../src/domain/maps/reward.model';
import {
  findExactCharacterId,
  findExactEnemyId,
  getBlockade,
  getItemCardId,
  getRewardItemCardId,
  itemCardGroupIdByOldItemName,
} from './mapping';
import { CharacterId } from '../../src/domain/character.model';
import { EnemyId } from '../../src/domain/enemy.model';
import { quizAnswerCorrections, rewardCorrections } from './corrections';
import { MapId } from '../../src/domain/maps/map.model';

function migrateDifficulty(difficulty: string): TileDifficulty {
  const normalized = difficulty.toLowerCase();

  const difficulties: readonly TileDifficulty[] = [
    'colorless',
    'green',
    'yellow',
    'purple',
    'orange',
    'blue',
    'red',
  ];

  if (!difficulties.includes(normalized as TileDifficulty)) {
    throw new Error(`Unknown difficulty: "${difficulty}"`);
  }

  return normalized as TileDifficulty;
}

const tileLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
] as const satisfies readonly TileLetter[];

function migrateTileId(oldTilePosition: OldPoint): TileId {
  const letter = tileLetters[oldTilePosition.col];

  if (!letter) {
    throw new Error(`Invalid tile column: ${oldTilePosition.col}`);
  }

  return `${letter}${oldTilePosition.row + 1}`;
}

function getRewardCharacterName(reward: string): string | undefined {
  const separatorIndex = reward.lastIndexOf(' - ');

  if (separatorIndex === -1) {
    return undefined;
  }

  return reward.slice(separatorIndex + 3).trim();
}

function getRewardName(reward: string): string {
  const separatorIndex = reward.lastIndexOf(' - ');

  if (separatorIndex === -1) {
    throw new Error(`Unknown reward format: "${reward}"`);
  }

  return reward.slice(0, separatorIndex).trim();
}

function getItemCardName(reward: string): string | undefined {
  const suffix = ' Item Card';

  if (!reward.endsWith(suffix)) {
    return undefined;
  }

  return reward.slice(0, -suffix.length).trim();
}

function migrateReward(reward: string, mapId: MapId): Reward {
  const normalizedReward = rewardCorrections[reward] ?? reward;

  if (normalizedReward.includes('Fairy')) {
    return {
      type: 'fairy',
      text: normalizedReward,
    };
  }

  if (normalizedReward.trim().endsWith('Material')) {
    return {
      type: 'material',
      materialName: normalizedReward.replace('Material', '').trim(),
    };
  }

  const exactCharacterId = findExactCharacterId(normalizedReward);

  if (exactCharacterId) {
    return {
      type: 'character',
      characterId: exactCharacterId,
    };
  }

  const characterName = getRewardCharacterName(normalizedReward);
  let characterId: CharacterId | undefined;

  if (characterName) {
    characterId = findExactCharacterId(characterName);
  }


  if (characterId) {
    if (normalizedReward.includes('Heart Container')) {
      return {
        type: 'heart-container',
        characterId,
      };
    }

    if (normalizedReward.includes('Heart Piece') || normalizedReward.includes('Piece of Heart')) {
      return {
        type: 'heart-piece',
        characterId,
      };
    }

    if (normalizedReward.includes('Lv.')) {
      return {
        type: 'weapon',
        characterId,
        weaponName: getRewardName(normalizedReward),
      };
    }

    return {
      type: 'outfit',
      characterId,
      outfitName: getRewardName(normalizedReward),
    };
  }

  const itemCardName = getItemCardName(normalizedReward);

  if (itemCardName) {
    const itemCardId = getRewardItemCardId(itemCardName, mapId);

    if (!itemCardId) {
      throw new Error(`Unknown item card: "${itemCardName}"`);
    }

    return {
      type: 'item-card',
      itemCardId,
    };
  }

  throw new Error(`Unknown reward: "${normalizedReward}"`);
}

function migrateTreasure(treasure: string, mapId: MapId): Treasure {
  const separatorIndex = treasure.lastIndexOf('(');

  if (separatorIndex === -1 || !treasure.endsWith(')')) {
    throw new Error(`Unknown treasure location: "${treasure}"`);
  }

  const reward = treasure.slice(0, separatorIndex).trim();
  const location = treasure.slice(separatorIndex + 1, -1).trim();

  return {
    ...migrateReward(reward, mapId),
    location,
  };
}

function migrateRewards(oldTileRewards: OldRewardDetails, mapId: MapId): TileRewards {
  return {
    aRank: oldTileRewards.arank ? migrateReward(oldTileRewards.arank, mapId) : undefined,
    clear: oldTileRewards.clear?.map((oldReward) => migrateReward(oldReward, mapId)),
    treasure: oldTileRewards.treasure?.map((oldTreasure) => migrateTreasure(oldTreasure, mapId)),
    skulltulas: oldTileRewards.skulltulas,
  };
}

function getUrlPathFileName(url: string): string {
  const fileName = url.slice(url.lastIndexOf('/') + 1);
  const extensionIndex = fileName.lastIndexOf('.');

  return extensionIndex === -1 ? fileName : fileName.slice(0, extensionIndex);
}

function migrateTilePoint(point: OldPoint): {
  row: TilePointRow;
  column: TilePointColumn;
} {
  if (point.row < 0 || point.row > 10) {
    throw new Error(`Invalid tile point row: ${point.row}`);
  }

  if (point.col < 0 || point.col > 15) {
    throw new Error(`Invalid tile point column: ${point.col}`);
  }

  return {
    row: point.row as TilePointRow,
    column: point.col as TilePointColumn,
  };
}

function getQuizAnswerName(answer: string): string {
  const match = answer.match(/\(([^)]+)\)$/);

  return match?.[1] ?? answer;
}

function migrateQuizAnswer(answer: string): CharacterId | EnemyId {
  const normalizedAnswer = quizAnswerCorrections[answer] ?? answer;

  const name = getQuizAnswerName(normalizedAnswer);

  const characterId = findExactCharacterId(name);

  if (characterId) {
    return characterId;
  }

  const enemyId = findExactEnemyId(name);

  if (enemyId) {
    return enemyId;
  }

  throw new Error(`Unknown quiz answer: "${normalizedAnswer}"`);
}

function migrateFullTileSearch(fullTileSearch: OldFullTileSearchDetails): FullTileSearch {
  const itemName = getUrlPathFileName(fullTileSearch.item.iconUrl);

  const itemCardGroupId = itemCardGroupIdByOldItemName[itemName];

  if (itemCardGroupId) {
    return {
      itemCardGroupId,
      description: fullTileSearch.description,
    };
  }

  return {
    itemCardId: getItemCardId(itemName),
    description: fullTileSearch.description,
  };
}

export function migrateTile(oldTile: OldMapTile, mapId: MapId): MapTile {
  return {
    id: migrateTileId(oldTile.coords),
    challenge: oldTile.challenge,
    difficulty: migrateDifficulty(oldTile.difficulty),
    rewards: oldTile.rewards ? migrateRewards(oldTile.rewards, mapId) : undefined,
    requirements: oldTile.requirements,
    additionalRule: oldTile.additionalRule,
    blockades: oldTile.blockades?.map((oldblockade) => getBlockade(oldblockade)),
    fullTileSearch: oldTile.fullTileSearch
      ? migrateFullTileSearch(oldTile.fullTileSearch)
      : undefined,
    quizAnswers: oldTile.quizAnswers?.map(oldAnswer => migrateQuizAnswer(oldAnswer)),
    search: oldTile.search?.map((search) => ({
      itemCardId: getItemCardId(getUrlPathFileName(search.item.iconUrl)),
      target: migrateTilePoint(search.target),
    })),
  };
}
