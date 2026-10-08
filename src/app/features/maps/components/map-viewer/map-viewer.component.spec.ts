import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { MapViewerComponent } from './map-viewer.component';
import { MapSettingsService } from '../../services/map-settings.service';
import { TileDetailsLayout } from '../../services/tile-details-layout.service';
import type { MapDefinition } from '../../../../../domain/maps/map.model';

const map: MapDefinition = {
  id: 'adventure',
  name: 'Adventure',
  difficulty: 'easy',
  tiles: [
    { id: 'A1', challenge: 'First mission', difficulty: 'green', requirements: {} },
    { id: 'B1', challenge: 'Second mission', difficulty: 'red', requirements: {} },
  ],
};

describe('mobile map gestures', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'ResizeObserver',
      class {
        observe() {}
        disconnect() {}
      },
    );
    TestBed.configureTestingModule({
      imports: [MapViewerComponent],
      providers: [provideRouter([]), MapSettingsService, TileDetailsLayout],
    });
    vi.stubGlobal('matchMedia', () => ({ matches: false }));
    TestBed.inject(TileDetailsLayout).mobile.set(true);
  });
  afterEach(() => {
    vi.useRealTimers();
    TestBed.resetTestingModule();
    vi.unstubAllGlobals();
  });

  async function setup() {
    const fixture = TestBed.createComponent(MapViewerComponent);
    fixture.componentRef.setInput('map', map);
    fixture.componentRef.setInput('focusedTileId', 'A1');
    await fixture.whenStable();
    const viewport = fixture.nativeElement.querySelector('.map-viewport') as HTMLElement;
    Object.defineProperties(viewport, {
      clientWidth: { value: 390 },
      clientHeight: { value: 844 },
      setPointerCapture: { value: vi.fn() },
      hasPointerCapture: { value: () => false },
    });
    fixture.componentInstance.tileWidth.set(40);
    await fixture.whenStable();
    const selected = vi.fn();
    const adjacent = vi.fn();
    fixture.componentInstance.tileSelected.subscribe(selected);
    fixture.componentInstance.adjacentTileSelected.subscribe(adjacent);
    const interaction = vi.fn(() => fixture.componentRef.setInput('focusedTileId', undefined));
    fixture.componentInstance.interactionStarted.subscribe(interaction);
    const pointer = (type: string, id: number, x: number, time: number) => {
      const event = new Event(type, { bubbles: true });
      Object.defineProperties(event, {
        button: { value: 0 },
        pointerId: { value: id },
        pointerType: { value: 'touch' },
        clientX: { value: x },
        clientY: { value: 300 },
        timeStamp: { value: time },
      });
      viewport.dispatchEvent(event);
    };
    return { fixture, viewport, pointer, selected, adjacent, interaction };
  }

  it('keeps native raster dimensions aligned with the logical map coordinates', async () => {
    const { fixture } = await setup();
    fixture.componentRef.setInput('focusedTileId', undefined);
    await fixture.whenStable();
    const viewer = fixture.componentInstance;
    viewer.tileWidth.set(76.9375);
    viewer.zoom.set(3.45227);
    viewer.panX.set(-1593.98);
    viewer.panY.set(-280.425);
    await fixture.whenStable();

    const grid = fixture.nativeElement.querySelector('.map') as HTMLElement;
    const rasterWidth = Number.parseFloat(grid.style.getPropertyValue('--tile-width'));
    expect(rasterWidth).toBe(256);
    expect(rasterWidth * viewer.renderScale()).toBeCloseTo(viewer.effectiveTileWidth());
    expect(grid.style.transform).toContain(`scale(${viewer.renderScale()})`);
    expect(grid.style.transform).toContain('translate(-1593.98px, -280.425px)');
  });

  it('switches to a neighbor on a fast directional swipe', async () => {
    const { fixture, pointer, adjacent, interaction } = await setup();
    const transform = fixture.componentInstance.mapTransform();
    pointer('pointerdown', 1, 250, 0);
    pointer('pointermove', 1, 150, 80);
    expect(fixture.componentInstance.mapTransform()).toBe(transform);
    pointer('pointerup', 1, 150, 100);
    expect(adjacent).toHaveBeenCalledWith('B1');
    expect(interaction).not.toHaveBeenCalled();
  });

  it('keeps details mounted after a slow swipe', async () => {
    const { fixture, pointer, selected, adjacent, interaction } = await setup();
    pointer('pointerdown', 1, 250, 0);
    pointer('pointermove', 1, 150, 500);
    pointer('pointerup', 1, 150, 600);
    expect(interaction).not.toHaveBeenCalled();
    expect(fixture.componentInstance.focusedTileId()).toBe('A1');
    expect(selected).not.toHaveBeenCalled();
    expect(adjacent).not.toHaveBeenCalled();
  });

  it('closes details on pinch without interpreting it as a neighbor swipe', async () => {
    const { pointer, selected, adjacent, interaction } = await setup();
    pointer('pointerdown', 1, 250, 0);
    pointer('pointerdown', 2, 100, 10);
    expect(interaction).toHaveBeenCalled();
    pointer('pointermove', 1, 300, 60);
    pointer('pointerup', 2, 100, 80);
    pointer('pointerup', 1, 150, 100);
    expect(selected).not.toHaveBeenCalled();
    expect(adjacent).not.toHaveBeenCalled();
  });

  it('commits a tap even when the tile is already at its focus transform', async () => {
    const { fixture, viewport, selected } = await setup();
    const target = fixture.nativeElement.querySelector('[data-tile-id="A1"]') as HTMLElement;
    for (const type of ['pointerdown', 'pointerup']) {
      const event = new Event(type, { bubbles: true });
      Object.defineProperties(event, {
        button: { value: 0 },
        pointerId: { value: 1 },
        pointerType: { value: 'mouse' },
        clientX: { value: 195 },
        clientY: { value: 422 },
      });
      target.dispatchEvent(event);
    }
    expect(viewport).toBeTruthy();
    expect(selected).toHaveBeenCalledWith('A1');
  });
  it('preserves the map transform throughout panel expansion and collapse', async () => {
    const { fixture } = await setup();
    const layout = TestBed.inject(TileDetailsLayout);
    layout.toolbarBottom.set(200);
    layout.compactSheetHeight.set(300);
    layout.sheetHeight.set(300);
    await fixture.whenStable();
    const viewer = fixture.componentInstance;
    const transform = viewer.mapTransform();
    const zoom = viewer.zoom();
    expect(zoom).toBeGreaterThan(1);

    layout.expanded.set(true);
    for (const height of [350, 450, 550, 644]) {
      layout.sheetHeight.set(height);
      await fixture.whenStable();
      expect(viewer.mapTransform()).toBe(transform);
      expect(viewer.zoom()).toBe(zoom);
    }
    layout.expanded.set(false);
    for (const height of [550, 450, 350, 300]) {
      layout.sheetHeight.set(height);
      await fixture.whenStable();
      expect(viewer.mapTransform()).toBe(transform);
    }
    fixture.componentRef.setInput('focusedTileId', 'B1');
    await fixture.whenStable();
    expect(viewer.zoom()).toBe(zoom);
    expect(viewer.mapTransform()).not.toBe(transform);
  });
  it('animates compact neighbor navigation and keeps the route selection on completion', async () => {
    const { fixture, adjacent, selected } = await setup();
    let frame: FrameRequestCallback | undefined;
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      frame = callback;
      return 1;
    });
    vi.stubGlobal('cancelAnimationFrame', vi.fn());
    const viewer = fixture.componentInstance;
    const initialPan = viewer.panX();
    viewer.navigateToAdjacentTile('A1', 'right');
    expect(adjacent).toHaveBeenCalledWith('B1');
    fixture.componentRef.setInput('focusedTileId', 'B1');
    await fixture.whenStable();
    expect(viewer.isSnapping()).toBe(true);
    expect(viewer.panX()).toBe(initialPan);
    expect(frame).toBeDefined();
    frame!(0);
    await fixture.whenStable();
    expect(viewer.panX()).toBeLessThan(initialPan);
    const end = new Event('transitionend', { bubbles: true });
    Object.defineProperty(end, 'propertyName', { value: 'transform' });
    fixture.nativeElement.querySelector('.map').dispatchEvent(end);
    await fixture.whenStable();
    expect(viewer.isSnapping()).toBe(false);
    expect(TestBed.inject(TileDetailsLayout).navigation()).toBeUndefined();
    expect(selected).not.toHaveBeenCalled();
  });

  for (const mobile of [false, true]) {
    it(`retargets rapid arrow navigation without disabling transitions (${mobile ? 'mobile' : 'desktop'})`, async () => {
      const { fixture, selected } = await setup();
      const layout = TestBed.inject(TileDetailsLayout);
      layout.mobile.set(mobile);
      await fixture.whenStable();
      const frames = new Map<number, FrameRequestCallback>();
      let nextFrame = 0;
      vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
        frames.set(++nextFrame, callback);
        return nextFrame;
      });
      vi.stubGlobal('cancelAnimationFrame', (id: number) => frames.delete(id));
      const flushFrames = async () => {
        const pending = [...frames.values()];
        frames.clear();
        pending.forEach((callback) => callback(0));
        await fixture.whenStable();
      };
      const viewer = fixture.componentInstance;
      viewer.adjacentTileSelected.subscribe((id) =>
        fixture.componentRef.setInput('focusedTileId', id),
      );
      const element = fixture.nativeElement.querySelector('.map') as HTMLElement;
      const transition = vi.spyOn(element.style, 'transition', 'set');
      const arrow = async (key: string) => {
        viewer.onKeyDown(new KeyboardEvent('keydown', { key }));
        await fixture.whenStable();
      };

      await arrow('ArrowRight');
      await arrow('ArrowLeft');
      await flushFrames();
      expect(viewer.isSnapping()).toBe(false);
      if (!mobile) expect(selected).toHaveBeenCalledWith('A1');
      selected.mockClear();
      fixture.componentRef.setInput('focusedTileId', 'A1');
      await fixture.whenStable();

      await arrow('ArrowRight');
      await flushFrames();
      expect(viewer.snapTarget()).toBe('B1');
      // Change direction during the transition, then change it again before the next frame.
      await arrow('ArrowLeft');
      await arrow('ArrowRight');
      await flushFrames();
      expect(viewer.snapTarget()).toBe('B1');
      expect(viewer.isSnapping()).toBe(true);
      expect(transition).not.toHaveBeenCalled();
      expect(selected).not.toHaveBeenCalled();

      await arrow('ArrowLeft');
      await flushFrames();
      expect(viewer.snapTarget()).toBe('A1');
      expect(viewer.isSnapping()).toBe(true);
      const end = new Event('transitionend', { bubbles: true });
      Object.defineProperty(end, 'propertyName', { value: 'transform' });
      element.dispatchEvent(end);
      await fixture.whenStable();
      expect(viewer.isSnapping()).toBe(false);
      if (mobile) expect(layout.navigation()).toBeUndefined();
      else expect(selected).toHaveBeenCalledExactlyOnceWith('A1');
    });
  }

  it('keeps navigation direct in the expanded panel or with reduced motion', async () => {
    const { fixture } = await setup();
    const layout = TestBed.inject(TileDetailsLayout);
    layout.expanded.set(true);
    fixture.componentInstance.navigateToAdjacentTile('A1', 'right');
    expect(layout.navigation()).toBeUndefined();
    fixture.componentRef.setInput('focusedTileId', 'B1');
    await fixture.whenStable();
    expect(fixture.componentInstance.isSnapping()).toBe(false);
    layout.expanded.set(false);
    vi.stubGlobal('matchMedia', () => ({ matches: true }));
    fixture.componentInstance.navigateToAdjacentTile('B1', 'left');
    expect(layout.navigation()).toBeUndefined();
  });
  it('keeps details open at a map edge and after a cancelled swipe', async () => {
    const { fixture, pointer, adjacent, interaction } = await setup();
    pointer('pointerdown', 1, 150, 0);
    pointer('pointermove', 1, 250, 80);
    pointer('pointerup', 1, 250, 100);
    expect(fixture.componentInstance.focusedTileId()).toBe('A1');
    expect(adjacent).not.toHaveBeenCalled();
    pointer('pointerdown', 1, 250, 200);
    pointer('pointermove', 1, 150, 280);
    pointer('pointercancel', 1, 150, 300);
    expect(interaction).not.toHaveBeenCalled();
    expect(adjacent).not.toHaveBeenCalled();
  });

  it('still closes details when zooming with the wheel', async () => {
    const { viewport, interaction } = await setup();
    viewport.dispatchEvent(
      new WheelEvent('wheel', { deltaY: 60, bubbles: true, cancelable: true }),
    );
    expect(interaction).toHaveBeenCalled();
  });

  it('zooms out by a small amount after the detail route closes', async () => {
    const { fixture } = await setup();
    fixture.componentRef.setInput('focusedTileId', undefined);
    await fixture.whenStable();
    let frame: FrameRequestCallback | undefined;
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      frame = callback;
      return 1;
    });
    vi.stubGlobal('cancelAnimationFrame', vi.fn());
    const zoom = fixture.componentInstance.zoom();
    fixture.componentInstance.zoomOutFromDetails();
    expect(frame).toBeDefined();
    frame!(0);
    await fixture.whenStable();
    expect(fixture.componentInstance.zoom()).toBeCloseTo(zoom * 0.8);
  });
  it('opens the center tile after zooming in far enough with the wheel', async () => {
    const { fixture, viewport, selected } = await setup();
    vi.useFakeTimers();
    let frame: FrameRequestCallback | undefined;
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      frame = callback;
      return 1;
    });
    vi.stubGlobal('cancelAnimationFrame', vi.fn());
    viewport.dispatchEvent(
      new WheelEvent('wheel', {
        deltaY: -60,
        clientX: 195,
        clientY: 422,
        bubbles: true,
        cancelable: true,
      }),
    );
    vi.advanceTimersByTime(150);
    expect(fixture.componentInstance.snapTarget()).toBe('A1');
    frame!(0);
    const end = new Event('transitionend', { bubbles: true });
    Object.defineProperty(end, 'propertyName', { value: 'transform' });
    fixture.nativeElement.querySelector('.map').dispatchEvent(end);
    expect(selected).toHaveBeenCalledWith('A1');
  });

  it('does not reopen details after wheel zooming out or below the detail threshold', async () => {
    const { fixture, viewport } = await setup();
    vi.useFakeTimers();
    viewport.dispatchEvent(new WheelEvent('wheel', { deltaY: 60, bubbles: true }));
    vi.advanceTimersByTime(150);
    expect(fixture.componentInstance.snapTarget()).toBeUndefined();
    fixture.componentInstance.zoom.set(1);
    viewport.dispatchEvent(new WheelEvent('wheel', { deltaY: -60, bubbles: true }));
    vi.advanceTimersByTime(150);
    expect(fixture.componentInstance.snapTarget()).toBeUndefined();
  });

  it('snaps to the center tile after a mobile pinch zooms in far enough', async () => {
    const { fixture, pointer } = await setup();
    vi.stubGlobal('requestAnimationFrame', () => 1);
    vi.stubGlobal('cancelAnimationFrame', vi.fn());
    pointer('pointerdown', 1, 250, 0);
    pointer('pointerdown', 2, 100, 10);
    pointer('pointermove', 1, 280, 60);
    pointer('pointerup', 2, 100, 80);
    pointer('pointerup', 1, 280, 100);
    expect(fixture.componentInstance.snapTarget()).toBe('A1');
  });

  it('keeps details closed after a pinch zooms out', async () => {
    const { fixture, pointer } = await setup();
    pointer('pointerdown', 1, 250, 0);
    pointer('pointerdown', 2, 100, 10);
    pointer('pointermove', 1, 240, 60);
    pointer('pointerup', 2, 100, 80);
    pointer('pointerup', 1, 240, 100);
    expect(fixture.componentInstance.snapTarget()).toBeUndefined();
  });
  it('applies the mobile overview after toolbar measurement without resetting user zoom', async () => {
    const fixture = TestBed.createComponent(MapViewerComponent);
    fixture.componentRef.setInput('map', {
      ...map,
      tiles: [map.tiles[0], { ...map.tiles[1], id: 'P8' }],
    });
    await fixture.whenStable();
    const viewport = fixture.nativeElement.querySelector('.map-viewport') as HTMLElement;
    Object.defineProperties(viewport, {
      clientWidth: { value: 390 },
      clientHeight: { value: 844 },
    });
    const layout = TestBed.inject(TileDetailsLayout);
    layout.viewportHeight.set(844);
    layout.toolbarBottom.set(200);
    const viewer = fixture.componentInstance;
    viewer.tileWidth.set(390 / 16);
    await fixture.whenStable();
    expect(viewer.panY()).toBe(200);
    expect((viewer.effectiveTileWidth() * 8 * 11) / 16).toBeCloseTo(644);
    layout.toolbarBottom.set(220);
    await fixture.whenStable();
    expect(viewer.panY()).toBe(220);
    expect((viewer.effectiveTileWidth() * 8 * 11) / 16).toBeCloseTo(624);
    viewport.dispatchEvent(new WheelEvent('wheel', { deltaY: 60, clientX: 195, clientY: 500 }));
    await fixture.whenStable();
    const transform = viewer.mapTransform();
    layout.toolbarBottom.set(230);
    await fixture.whenStable();
    expect(viewer.mapTransform()).toBe(transform);
  });
});
