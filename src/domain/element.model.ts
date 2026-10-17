export const ELEMENTS = ['fire', 'water', 'lightning', 'light', 'darkness'] as const;
export type Element = (typeof ELEMENTS)[number];

export function isElement(value: string): value is Element {
  return ELEMENTS.some((element) => element === value);
}
