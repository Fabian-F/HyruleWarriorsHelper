import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

import type { MapDefinition } from '../../src/domain/maps/map.model';

function serializeValue(value: unknown, indent = 0): string {
  const spacing = '  '.repeat(indent);
  const childSpacing = '  '.repeat(indent + 1);

  if (value === null) {
    return 'null';
  }

  if (typeof value === 'string') {
    return `'${value.replaceAll('\\', '\\\\').replaceAll("'", "\\'")}'`;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '[]';
    }

    return `[\n${value
      .map((item) => `${childSpacing}${serializeValue(item, indent + 1)}`)
      .join(',\n')}\n${spacing}]`;
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value).filter(([, entryValue]) => entryValue !== undefined);

    if (entries.length === 0) {
      return '{}';
    }

    return `{\n${entries
      .map(
        ([key, entryValue]) => `${childSpacing}${key}: ${serializeValue(entryValue, indent + 1)}`,
      )
      .join(',\n')}\n${spacing}}`;
  }

  throw new Error(`Unsupported value: ${String(value)}`);
}

export function serializeMap(exportName: string, map: MapDefinition): string {
  return `import type { MapDefinition } from '../../../domain/maps/map.model';

export const ${exportName} = ${serializeValue(map)} satisfies MapDefinition;
`;
}

export function writeTypeScriptFile(path: string, content: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, 'utf8');
}
