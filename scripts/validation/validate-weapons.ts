import { isElement } from '../../src/domain/element.model';
import { characters } from '../../src/data/characters';
import { weapons } from '../../src/data/weapons';
import type { Character } from '../../src/domain/character.model';
import type { Weapon } from '../../src/domain/weapon.model';
import type { ValidationIssue } from './validation';

export function validateWeapons(
  weaponData: readonly Weapon[] = weapons,
  characterData: readonly Character[] = characters,
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const error = (message: string) => issues.push({ severity: 'error', message });
  const ids = new Set<string>();
  const characterIds = new Set(characterData.map((character) => character.id));
  for (const weapon of weaponData) {
    if (ids.has(weapon.id)) error(`duplicate weaponId: ${weapon.id}`);
    ids.add(weapon.id);
    if (!isElement(weapon.element)) error(`unknown standard element: ${weapon.id}`);
    if (weapon.id === 'master-sword') {
      if (weapon.characterId !== 'link') error('Master Sword must belong to Link');
      if (weapon.requirementWeaponId !== 'hylian-sword')
        error('Master Sword requirements must use Hylian Sword');
      if (!weapon.unlockDescription.trim()) error('Missing Master Sword unlock description');
    } else {
      if (!isElement(weapon.level4PlusElement)) error(`unknown level-4+ element: ${weapon.id}`);
      if (weapon.element === weapon.level4PlusElement)
        error(`level-4+ element must be additional: ${weapon.id}`);
    }
    if (!weapon.name.trim()) error(`empty weapon name: ${weapon.id}`);
    if (!characterIds.has(weapon.characterId)) error(`unknown character for weapon: ${weapon.id}`);
  }
  for (const character of characterData) {
    const weapon = weaponData.find((weapon) => weapon.id === character.defaultWeaponId);
    if (!weapon) error(`unknown default weapon for ${character.id}: ${character.defaultWeaponId}`);
    else if (weapon.characterId !== character.id)
      error(`default weapon ${weapon.id} does not belong to ${character.id}`);
  }
  return issues;
}
