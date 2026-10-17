import type { CharacterId } from '../character.model';
import type { MaterialId } from '../material.model';

export interface CharacterBadgeRequirements {
  readonly characterId: CharacterId;
  readonly materials: readonly { readonly materialId: MaterialId; readonly quantity: number }[];
  readonly rupees: number;
}
