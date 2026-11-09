import type { Reward } from '../maps/reward.model';
import type { AdventureSkulltula } from '../maps/tile.model';
import { isOccurrenceId } from './progress-keys';

/** Validate all rewards of one source together, including A-rank, clear and treasure. */
export function validateOccurrenceIds(
  rewards: readonly Reward[],
  skulltulas: readonly AdventureSkulltula[] = [],
): readonly string[] {
  const errors: string[] = [];
  const seen = new Set<string>();
  const check = (category: string, id: string) => {
    if (typeof id !== 'string' || !isOccurrenceId(id)) {
      errors.push(`Invalid ${category} occurrence ID: ${id}`);
      return;
    }
    const key = `${category}:${id}`;
    if (seen.has(key)) errors.push(`Duplicate occurrence ID: ${key}`);
    seen.add(key);
  };
  for (const reward of rewards) {
    if (reward.type === 'heart-piece' || reward.type === 'heart-container')
      check(reward.type, reward.occurrenceId);
  }
  for (const skulltula of skulltulas) {
    check('skulltula', skulltula.id);
    if (!skulltula.description.trim()) errors.push(`Empty Skulltula description: ${skulltula.id}`);
  }
  return errors;
}
