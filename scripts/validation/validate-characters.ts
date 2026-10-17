import {
  badgeRequirementsSource,
  characterBadgeRequirements,
} from '../../src/data/characters/badge-requirements';
import { getBadgeRequirementIssues } from './validate-badge-requirements';
import { existsSync, readdirSync } from 'node:fs';
import { characters, isCharacterId } from '../../src/data/characters';
import { getOutfitId } from '../../src/data/characters/outfits';
import { recommendedBuilds } from '../../src/data/characters/recommended-builds';
import { weapons } from '../../src/data/weapons';
import { getBuildIssues } from '../../src/domain/characters/recommended-builds';
import { collectCharacterRewards } from '../../src/domain/characters/character-rewards';
import { characterRewardLocations } from '../../src/data/characters/reward-locations';
import { mapMetadata } from '../../src/data/maps/map-metadata';
import { loadMap } from '../../src/domain/maps/map-loader';
import type { ValidationIssue } from './validation';

export async function validateCharacters(): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = [
    ...getBuildIssues(recommendedBuilds),
    ...getBadgeRequirementIssues(characterBadgeRequirements),
  ].map((message) => ({
    severity: 'error',
    message,
  }));
  for (const discrepancy of badgeRequirementsSource.totalDiscrepancies) {
    issues.push({
      severity: 'warning',
      message: `Badge source TOTAL mismatch for ${discrepancy.materialId}: source ${discrepancy.sourceTotal}, character rows ${discrepancy.characterSum}; character values preserved.`,
    });
  }
  const error = (message: string) => issues.push({ severity: 'error', message });
  const image = (path: string) => {
    if (!existsSync(`public/${path}`)) error(`Missing character content image: ${path}`);
  };
  const seen = new Set<string>();
  for (const character of characters) {
    if (seen.has(character.id)) error(`Duplicate character: ${character.id}`);
    seen.add(character.id);
    if (!character.name.trim()) error(`Empty character name: ${character.id}`);
    image(`enemies/${character.id}.png`);
  }
  if (existsSync('public/weapons')) {
    for (const file of readdirSync('public/weapons', { withFileTypes: true })) {
      if (file.isDirectory() && file.name === '_unlabeled') continue;
      if (
        !file.isFile() ||
        !file.name.endsWith('.png') ||
        !weapons.some((weapon) => `${weapon.id}.png` === file.name)
      ) {
        error(`Invalid weapon type image: ${file.name}`);
      }
    }
  }
  const rewards = collectCharacterRewards(
    await Promise.all(mapMetadata.map((map) => loadMap(map.id))),
  );
  if (JSON.stringify(rewards) !== JSON.stringify(characterRewardLocations)) {
    error('Character reward index is outdated. Run npm run generate:character-rewards.');
  }
  const outfitKeys = new Set<string>();
  for (const { reward } of rewards) {
    if (reward.type !== 'outfit') continue;
    const id = getOutfitId(reward.outfitName);
    if (!id) error(`Unknown outfit ID for reward: ${reward.characterId}/${reward.outfitName}`);
    else outfitKeys.add(`${reward.characterId}/${id}.webp`);
  }
  if (existsSync('public/outfits')) {
    for (const folder of readdirSync('public/outfits', { withFileTypes: true })) {
      if (!folder.isDirectory() || !isCharacterId(folder.name)) {
        error(`Invalid outfit character directory: ${folder.name}`);
        continue;
      }
      for (const file of readdirSync(`public/outfits/${folder.name}`)) {
        if (!outfitKeys.has(`${folder.name}/${file}`))
          error(`Artwork references unknown outfit: ${folder.name}/${file}`);
      }
    }
  }
  return issues;
}
