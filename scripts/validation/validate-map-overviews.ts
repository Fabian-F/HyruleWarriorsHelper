import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { mapMetadata } from '../../src/data/maps/map-metadata';
import { mapOverviews } from '../../src/data/maps/map-overviews';
import { loadMap } from '../../src/domain/maps/map-loader';
import {
  getMapCharacterUnlocks,
  getMapStatistics,
  type MapOverview,
} from '../../src/domain/maps/map-overview';
import type { MapValidationIssue } from './validate-map';

// WebP stores canvas dimensions in VP8X (extended), VP8 (lossy), or VP8L (lossless).
// Read only the headers, without requiring an image decoder in the deployment job.
// This checks header metadata and dimensions, not whether the image data can be decoded.
function getWebpSize(data: Buffer): { width: number; height: number } {
  if (data.toString('ascii', 0, 4) !== 'RIFF' || data.toString('ascii', 8, 12) !== 'WEBP') {
    throw new Error('Invalid WebP header');
  }
  const end = data.readUInt32LE(4) + 8;
  if (end !== data.length) throw new Error('Invalid WebP file size');
  for (let offset = 12; offset + 8 <= end;) {
    const type = data.toString('ascii', offset, offset + 4);
    const length = data.readUInt32LE(offset + 4);
    const start = offset + 8;
    if (start + length > end) throw new Error('Truncated WebP chunk');
    if (type === 'VP8X' && length >= 10) {
      return {
        width: data.readUIntLE(start + 4, 3) + 1,
        height: data.readUIntLE(start + 7, 3) + 1,
      };
    }
    if (
      type === 'VP8 ' &&
      length >= 10 &&
      data.subarray(start + 3, start + 6).equals(Buffer.from([0x9d, 0x01, 0x2a]))
    ) {
      return {
        width: data.readUInt16LE(start + 6) & 0x3fff,
        height: data.readUInt16LE(start + 8) & 0x3fff,
      };
    }
    if (type === 'VP8L' && length >= 5 && data[start] === 0x2f) {
      const bits = data.readUInt32LE(start + 1);
      return { width: (bits & 0x3fff) + 1, height: ((bits >>> 14) & 0x3fff) + 1 };
    }
    offset = start + length + (length % 2);
  }
  throw new Error('Missing WebP dimensions');
}

export async function validateMapOverviews(
  overviews: readonly MapOverview[] = mapOverviews,
): Promise<MapValidationIssue[]> {
  const issues: MapValidationIssue[] = [];
  const report = (mapId: MapOverview['id'], message: string): void => {
    issues.push({
      severity: 'error',
      mapId,
      message: `${message} Run npm run generate:map-overviews.`,
    });
  };

  if (overviews.length !== mapMetadata.length) {
    report(mapMetadata[0].id, 'Map overview count differs from map metadata.');
  }
  for (const [index, metadata] of mapMetadata.entries()) {
    const overview = overviews[index];
    if (overview?.id !== metadata.id) {
      report(metadata.id, 'Map overview is missing or out of order.');
      continue;
    }
    const map = await loadMap(metadata.id);
    const statistics = getMapStatistics(map);
    if (
      Object.entries(statistics).some(
        ([key, value]) => overview.statistics[key as keyof typeof statistics] !== value,
      )
    ) {
      report(map.id, 'Map overview statistics are stale.');
    }
    const characters = getMapCharacterUnlocks(map);
    if (
      characters.length !== overview.characterUnlocks.length ||
      characters.some((id, i) => id !== overview.characterUnlocks[i])
    ) {
      report(map.id, 'Map overview character unlocks are stale.');
    }
    if (overview.preview) {
      try {
        const actual = getWebpSize(readFileSync(join('public', overview.preview.src)));
        if (actual.width !== overview.preview.width || actual.height !== overview.preview.height) {
          report(
            map.id,
            `Preview dimensions differ: ${overview.preview.src} (${actual.width}x${actual.height}).`,
          );
        }
      } catch (error) {
        report(
          map.id,
          `Cannot read preview ${overview.preview.src}: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    }
  }
  return issues;
}
