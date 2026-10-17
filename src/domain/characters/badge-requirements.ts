import { characterBadgeRequirements } from '../../data/characters/badge-requirements';
import { enemies } from '../../data/enemies';
import { getMaterial } from '../../data/materials';
import type { CharacterId } from '../character.model';
import type { CharacterBadgeRequirements } from './badge-requirements.model';

export function getCharacterBadgeRequirements(characterId: CharacterId) {
  const requirements: CharacterBadgeRequirements | undefined = characterBadgeRequirements.find(
    (entry) => entry.characterId === characterId,
  );
  if (!requirements) return undefined;
  return {
    ...requirements,
    materials: requirements.materials.map((entry) => ({
      ...entry,
      material: getMaterial(entry.materialId),
      enemies: enemies.filter((enemy) =>
        Object.values(enemy.drops ?? {}).some((id) => id === entry.materialId),
      ),
    })),
  };
}

export type CharacterBadgeRequirementsView = NonNullable<
  ReturnType<typeof getCharacterBadgeRequirements>
>;
