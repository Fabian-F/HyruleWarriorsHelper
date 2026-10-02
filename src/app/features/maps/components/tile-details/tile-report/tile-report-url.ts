import type { MapDefinition } from '../../../../../../domain/maps/map.model';
import type { MapTile } from '../../../../../../domain/maps/tile.model';

export const REPORT_TYPES = [
  { id: 'data', label: 'Incorrect data', title: 'Data error' },
  { id: 'ui', label: 'Display or interaction issue', title: 'UI bug' },
  { id: 'other', label: 'Other issue with this tile', title: 'Tile issue' },
] as const;
export type ReportType = (typeof REPORT_TYPES)[number]['id'];

export function getTileReportUrl(
  type: ReportType,
  map: Pick<MapDefinition, 'id' | 'name'>,
  tile: MapTile,
  pageUrl: string,
  displayedTileId: string,
): string {
  const report = REPORT_TYPES.find((entry) => entry.id === type)!;
  const url = new URL('https://github.com/Fabian-F/HyruleWarriorsHelper/issues/new');

  url.searchParams.set('template', `tile-${type}.yml`);
  url.searchParams.set('title', `[${report.title}] ${map.name} – ${tile.id}`);
  url.searchParams.set(
    'context',
    [
      `Map: ${map.name} (${map.id})`,
      `Tile ID: ${tile.id}`,
      `Displayed coordinate: ${displayedTileId}`,
      `Mission: ${tile.challenge}`,
      `Page: ${pageUrl}`,
    ].join('\n'),
  );

  if (type === 'data') {
    const summary = [
      `Mission: ${tile.challenge}`,
      `Special rule: ${tile.additionalRule ?? 'None'}`,
      `A-rank requirements: ${JSON.stringify(tile.requirements)}`,
      `Character selection: ${JSON.stringify(tile.characterSelection ?? null)}`,
      `Rewards: ${JSON.stringify(tile.rewards ?? null)}`,
    ].join('\n');

    url.searchParams.set(
      'data',
      summary.length > 1800 ? summary.slice(0, 1800) + '\n[Summary shortened]' : summary,
    );
  }

  return url.toString();
}
