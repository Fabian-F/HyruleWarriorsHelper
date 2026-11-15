import { battleAreas } from '../../src/data/battle-areas/battle-areas';
import type { ValidationIssue } from './validation';

export function validateBattleAreas(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const names = new Set<string>();
  for (const [id, area] of Object.entries(battleAreas)) {
    if (area.id !== id || !area.name.trim() || names.has(area.name)) {
      issues.push({ severity: 'error', message: `Invalid battle area catalogue entry: ${id}` });
    }
    names.add(area.name);
  }
  return issues;
}
