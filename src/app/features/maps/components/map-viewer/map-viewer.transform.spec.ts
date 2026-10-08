import {
  getAdjacentTile,
  getInitialMapTransform,
  getScaledMapSize,
  getFocusTileWidth,
  getMobileFocusArea,
  getTileFocusTransform,
} from './map-viewer.transform';
import type { MapTile, TileId } from '../../../../../domain/maps/tile.model';

const tile = (id: TileId): MapTile => ({
  id,
  challenge: 'Mission',
  difficulty: 'green',
  requirements: {},
});

describe('mobile map focus', () => {
  it('fits a tile into the area between toolbar and sheet', () => {
    const area = getMobileFocusArea({ width: 390, height: 844 }, 200, 300);
    const width = getFocusTileWidth(area);
    const transform = getTileFocusTransform('C3', 40, { width: 390, height: 844 }, area);
    expect(width).toBe(358);
    expect(2.5 * 40 * transform.zoom + transform.panX).toBeCloseTo(195);
    expect(((2.5 * 40 * 11) / 16) * transform.zoom + transform.panY).toBeCloseTo(372);
    expect((width * 11) / 16).toBeLessThanOrEqual(area.height - 24);
  });

  it('limits tile size by height in landscape', () => {
    const area = getMobileFocusArea({ width: 844, height: 390 }, 180, 100);
    expect(getFocusTileWidth(area)).toBeCloseTo((86 * 16) / 11);
  });

  it('handles an expanded sheet or toolbar consuming all available space', () => {
    for (const top of [200, 900]) {
      const area = getMobileFocusArea({ width: 390, height: 844 }, top, 644);
      expect(area.height).toBe(0);
      expect(getFocusTileWidth(area)).toBe(0);
      const transform = getTileFocusTransform('A1', 40, { width: 390, height: 844 }, area);
      expect(Number.isFinite(transform.zoom)).toBe(true);
      expect(transform.zoom).toBeGreaterThan(0);
    }
  });

  it('preserves the existing desktop focus size and center', () => {
    const transform = getTileFocusTransform('A1', 40, { width: 1440, height: 900 });
    expect(transform.zoom).toBe(512 / 40);
    expect(transform.panX + 20 * transform.zoom).toBe(720);
    expect(transform.panY + ((20 * 11) / 16) * transform.zoom).toBe(450);
  });
});

describe('neighbor navigation', () => {
  const tiles = ['B2', 'A2', 'B1', 'B3', 'C2', 'E2'].map((id) => tile(id as TileId));
  it('finds the immediate neighbor in all four directions', () => {
    expect(getAdjacentTile(tiles, 'B2', 'left')?.id).toBe('A2');
    expect(getAdjacentTile(tiles, 'B2', 'up')?.id).toBe('B1');
    expect(getAdjacentTile(tiles, 'B2', 'down')?.id).toBe('B3');
    expect(getAdjacentTile(tiles, 'B2', 'right')?.id).toBe('C2');
  });
  it('does not wrap at edges or skip missing tiles', () => {
    expect(getAdjacentTile(tiles, 'A2', 'left')).toBeUndefined();
    expect(getAdjacentTile(tiles, 'B1', 'up')).toBeUndefined();
    expect(getAdjacentTile(tiles, 'C2', 'right')).toBeUndefined();
  });
});

describe('initial map overview', () => {
  it('fills the mobile height below the toolbar even when the map extends horizontally', () => {
    const viewport = { width: 390, height: 844 };
    const transform = getInitialMapTransform(16, 8, 390 / 16, viewport, 200);
    const size = getScaledMapSize(16, 8, 390 / 16, transform.zoom);
    expect(size.height).toBeCloseTo(644);
    expect(transform.panY).toBe(200);
    expect(transform.panX + size.width / 2).toBeCloseTo(195);
    expect(size.width).toBeGreaterThan(viewport.width);
  });

  it('reserves the mobile footer including its measured padding and safe area', () => {
    const transform = getInitialMapTransform(16, 8, 390 / 16, { width: 390, height: 844 }, 200, 96);
    const size = getScaledMapSize(16, 8, 390 / 16, transform.zoom);
    expect(size.height).toBeCloseTo(548);
    expect(transform.panY).toBe(200);
    expect(transform.panY + size.height).toBeCloseTo(844 - 96);
  });
  it('keeps the complete map visible on desktop', () => {
    const viewport = { width: 1440, height: 900 };
    const transform = getInitialMapTransform(16, 8, 90, viewport);
    const size = getScaledMapSize(16, 8, 90, transform.zoom);
    expect(size.width).toBeLessThanOrEqual(viewport.width);
    expect(size.height).toBeLessThanOrEqual(viewport.height);
    expect(transform.panY + size.height / 2).toBeCloseTo(450);
  });
});
