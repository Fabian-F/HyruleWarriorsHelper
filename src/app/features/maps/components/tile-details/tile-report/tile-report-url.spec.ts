import { describe, expect, it } from 'vitest';
import { getTileReportUrl, REPORT_TYPES } from './tile-report-url';
import type { MapTile } from '../../../../../../domain/maps/tile.model';

const map = { id: 'adventure', name: 'Adventure Map' } as const;
const tile: MapTile = {
  id: 'A3',
  challenge: 'Defeat Link & Zelda!',
  difficulty: 'green',
  requirements: { kills: 1200, minutes: 15 },
  rewards: { clear: [{ type: 'text', text: 'Sword & shield' }] },
};

describe('tile issue links', () => {
  it.each(REPORT_TYPES)(
    'selects the $id form and preserves context and special characters',
    ({ id }) => {
      const page = 'https://example.com/maps/adventure/A3?search=Link%26Zelda&hideBlockades=true';
      const url = new URL(getTileReportUrl(id, map, tile, page, 'C1'));
      expect(url.origin + url.pathname).toBe(
        'https://github.com/Fabian-F/HyruleWarriorsHelper/issues/new',
      );
      expect(url.searchParams.get('template')).toBe(`tile-${id}.yml`);
      expect(url.searchParams.get('title')).toContain('Adventure Map – A3');
      expect(url.searchParams.get('context')).toContain(page);
      expect(url.searchParams.get('context')).toContain('Displayed coordinate: C1');
      expect(url.searchParams.get('context')).toContain(tile.challenge);
      expect(url.searchParams.has('data')).toBe(id === 'data');
      expect(url.searchParams.has('labels')).toBe(false);
    },
  );

  it('bounds long data summaries', () => {
    const url = new URL(
      getTileReportUrl(
        'data',
        map,
        {
          ...tile,
          rewards: { skulltulas: ['x'.repeat(10000)] },
        },
        'https://example.com',
        'A3',
      ),
    );
    expect(url.searchParams.get('data')!.length).toBeLessThan(1850);
    expect(url.searchParams.get('data')).toContain('[Summary shortened]');
  });

  it('uses the newly selected tile', () => {
    const url = new URL(
      getTileReportUrl(
        'ui',
        map,
        { ...tile, id: 'B4' },
        'https://example.com/maps/adventure/B4',
        'B4',
      ),
    );
    expect(url.searchParams.get('title')).toContain('B4');
    expect(url.searchParams.get('context')).toContain('Tile ID: B4');
    expect(url.searchParams.get('context')).not.toContain('A3');
  });
});
