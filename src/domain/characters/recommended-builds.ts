import { characters } from '../../data/characters';
import { weapons } from '../../data/weapons';
import { weaponAttributeNames } from '../../data/weapon-attributes';
import type { RecommendedBuild } from './recommended-build.model';

export function getBuildIssues(
  builds: readonly RecommendedBuild[],
  attributeNames: Readonly<Record<string, string>> = weaponAttributeNames,
): string[] {
  const issues: string[] = [];
  const seen = new Set<string>();
  for (const [id, name] of Object.entries(attributeNames)) {
    if (!id.trim() || !name.trim()) issues.push(`Empty attribute ID or name: ${id}`);
  }
  for (const build of builds) {
    const key = `${build.characterId}/${build.weaponId}`;
    if (seen.has(key)) issues.push(`Duplicate recommended build: ${key}`);
    seen.add(key);
    if (!characters.some((character) => character.id === build.characterId))
      issues.push(`Unknown build character: ${key}`);
    const weapon = weapons.find((weapon) => weapon.id === build.weaponId);
    if (!weapon) issues.push(`Unknown build weapon: ${key}`);
    else if (weapon.id === 'master-sword')
      issues.push(`Master Sword has fixed attributes and cannot have a recommended build: ${key}`);
    else if (weapon.characterId !== build.characterId)
      issues.push(`Build weapon does not belong to character: ${key}`);
    if (build.attributes.length !== 7 || new Set(build.attributes).size !== 7)
      issues.push(`Build must contain exactly seven distinct attributes: ${key}`);
    for (const id of build.attributes) {
      if (!Object.hasOwn(attributeNames, id)) issues.push(`Unknown build attribute ${id}: ${key}`);
    }
    for (const source of build.sources ?? []) {
      if (!source.label.trim()) issues.push(`Empty build source label: ${key}`);
      try {
        if (!['https:', 'http:'].includes(new URL(source.url).protocol)) throw new Error();
      } catch {
        issues.push(`Invalid build source URL: ${key}`);
      }
    }
  }
  return issues;
}
