import type { FairyRewardContent } from '../fairy/fairy.model';

/** Search/statistics naming retained for compatibility with existing URLs. */
export function getFairyRewardKind(
  content: FairyRewardContent,
): 'fairy' | 'fairy-clothes' | 'fairy-food' {
  return content.kind === 'fairy-clothing' ? 'fairy-clothes' : content.kind;
}
