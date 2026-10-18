/** Classifies the text-based Fairy rewards shared by statistics and map filters. */
export function getFairyRewardKind(
  text: string,
): 'fairy' | 'fairy-clothes' | 'fairy-food' | undefined {
  if (/^My Fairy(?: \(.*?\))? -/.test(text)) return 'fairy';
  if (/^Fairy (?:Accessory|Bottoms?|Decoration|Headwear|Top) -/.test(text)) return 'fairy-clothes';
  if (text.startsWith('Fairy Food -')) return 'fairy-food';
  return undefined;
}
