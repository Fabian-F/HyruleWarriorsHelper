import { writeFileSync } from 'node:fs';
import { format, resolveConfig } from 'prettier';
import { mapMetadata } from '../../src/data/maps/map-metadata';
import { loadMap } from '../../src/domain/maps/map-loader';
import { collectCharacterRewards } from '../../src/domain/characters/character-rewards';

async function main(): Promise<void> {
  const maps = await Promise.all(mapMetadata.map((map) => loadMap(map.id)));
  const locations = collectCharacterRewards(maps);
  const outputPath = 'src/data/characters/reward-locations.ts';
  const sections = maps.map(
    (map, index) =>
      `const map${index}: readonly RewardLocation[] = ${JSON.stringify(locations.filter((location) => location.mapId === map.id))};`,
  );
  const content = `import type { RewardLocation } from '../../domain/characters/character-rewards';

${sections.join('\n\n')}

export const characterRewardLocations: readonly RewardLocation[] = [${maps.map((_, index) => `...map${index}`).join(', ')}];
`;
  writeFileSync(
    outputPath,
    await format(content, { ...(await resolveConfig(outputPath)), parser: 'typescript' }),
    'utf8',
  );
  console.log(`Wrote ${locations.length} character reward locations from ${maps.length} maps.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
