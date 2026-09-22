import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { format } from 'prettier';
import type { MapDefinition, MapId, MapMetadata } from '../../src/domain/maps/map.model';
import type { OldMapDefinition } from './old-data/old-models';
import { migrateMap } from './migrate-map';

export async function writeMap(map: MapDefinition): Promise<void> {
  const outputPath = `src/data/maps/${map.id}/${map.id}-map.ts`;
  const content = `
import type { MapDefinition } from '../../../domain/maps/map.model';

export const ${getMapVariableName(map.id)} = ${JSON.stringify(map, null, 2)} satisfies MapDefinition;
`;

  const formatted = await format(content, {
    parser: 'typescript',
    singleQuote: true,
  });

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, formatted, 'utf8');
}

export async function writeMapMetadata(map: MapMetadata): Promise<void> {
  const outputPath = `src/data/maps/${map.id}/${map.id}-map.metadata.ts`;
  const content = `
import type { MapMetadata } from '../../../domain/maps/map.model';

export const ${getMapVariableName(map.id)}Metadata = ${JSON.stringify(map, null, 2)} satisfies MapMetadata;
`;

  const formatted = await format(content, {
    parser: 'typescript',
    singleQuote: true,
  });

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, formatted, 'utf8');
}

function getMapVariableName(mapId: string): string {
  return `${mapId.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase())}Map`;
}

export async function runMapMigration(oldMap: OldMapDefinition, id: MapId): Promise<void> {
  const map = migrateMap(oldMap, id);
  const mapMetadata: MapMetadata = {
    id: map.id,
    name: map.name,
    extras: map.extras,
    difficulty: map.difficulty,
    tileCount: map.tiles.length,
  };

  if (!process.argv.includes('--write')) {
    console.log(`Migration for "${id}" successful. Use --write to write the file.`);
    return;
  }

  await writeMap(map);
  await writeMapMetadata(mapMetadata);

  console.log(`Wrote migrated map "${id}".`);
}
