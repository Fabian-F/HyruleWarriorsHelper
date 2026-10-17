import { characters } from '../../src/data/characters';
import { materials } from '../../src/data/materials';
import type { CharacterBadgeRequirements } from '../../src/domain/characters/badge-requirements.model';

export function getBadgeRequirementIssues(data: readonly CharacterBadgeRequirements[]): string[] {
  const issues: string[] = [];
  const seen = new Set<string>();
  for (const entry of data) {
    if (seen.has(entry.characterId))
      issues.push(`Duplicate badge requirements: ${entry.characterId}`);
    seen.add(entry.characterId);
    if (!characters.some((character) => character.id === entry.characterId))
      issues.push(`Unknown badge character: ${entry.characterId}`);
    if (!Number.isSafeInteger(entry.rupees) || entry.rupees < 0)
      issues.push(`Invalid badge rupee cost: ${entry.characterId}`);
    const materialIds = new Set<string>();
    if (!entry.materials.length) issues.push(`Missing badge materials: ${entry.characterId}`);
    for (const requirement of entry.materials) {
      if (materialIds.has(requirement.materialId))
        issues.push(`Duplicate badge material: ${entry.characterId}/${requirement.materialId}`);
      materialIds.add(requirement.materialId);
      if (!materials.some((material) => material.id === requirement.materialId))
        issues.push(`Unknown badge material: ${requirement.materialId}`);
      if (!Number.isSafeInteger(requirement.quantity) || requirement.quantity < 1)
        issues.push(`Invalid badge quantity: ${entry.characterId}/${requirement.materialId}`);
    }
  }
  for (const character of characters) {
    if (!seen.has(character.id)) issues.push(`Missing badge requirements: ${character.id}`);
  }
  return issues;
}
