import { weapons } from '../../src/data/weapons';
import type { CharacterId } from '../../src/domain/character.model';
import { isWeaponLevel, type WeaponId, type WeaponUnlock } from '../../src/domain/weapon.model';

const aliases: Partial<Record<CharacterId, Readonly<Record<string, string>>>> = {
  link: { Horse: 'Epona' },
  linkle: { Crossbow: 'Crossbows' },
};

export function getWeaponId(characterId: CharacterId, name: string): WeaponId {
  const canonicalName = aliases[characterId]?.[name] ?? name;
  const weapon = weapons.find(
    (weapon) => weapon.characterId === characterId && weapon.name === canonicalName,
  );
  if (!weapon) throw new Error(`Unknown weapon for ${characterId}: ${name}`);
  return weapon.id;
}

export function parseWeaponReward(characterId: CharacterId, name: string): WeaponUnlock {
  const match = /^(.*?) Lv\.(.+)$/.exec(name);
  if (!match || !isWeaponLevel(match[2]))
    throw new Error(`Invalid weapon level for ${characterId}: ${name}`);
  return { weaponId: getWeaponId(characterId, match[1]), level: match[2] };
}
