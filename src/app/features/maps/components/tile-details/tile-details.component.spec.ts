import { MapFarmingService, FARMING_LOCATIONS_LOADER } from '../../services/map-farming.service';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { TileDetailsComponent } from './tile-details.component';
import { TileDetailsLayout } from '../../services/tile-details-layout.service';
import { MapContext } from '../../services/map-context.service';
import { MapSettingsService } from '../../services/map-settings.service';
import type { MapDefinition } from '../../../../../domain/maps/map.model';

const map: MapDefinition = {
  id: 'adventure',
  name: 'Adventure',
  difficulty: 'easy',
  tiles: [
    {
      id: 'A1',
      challenge: 'First mission',
      difficulty: 'green',
      requirements: { kills: 1200, damage: 30, minutes: 15 },
    },
    { id: 'B1', challenge: 'Second mission', difficulty: 'red', requirements: {} },
  ],
};

const loadFarming = vi.fn();

describe('mobile tile details', () => {
  beforeEach(() => {
    loadFarming.mockReset().mockResolvedValue([]);
    vi.stubGlobal(
      'ResizeObserver',
      class {
        observe() {}
        disconnect() {}
      },
    );
    TestBed.configureTestingModule({
      imports: [TileDetailsComponent],
      providers: [
        provideRouter([]),
        TileDetailsLayout,
        MapContext,
        MapSettingsService,
        MapFarmingService,
        { provide: FARMING_LOCATIONS_LOADER, useValue: loadFarming },
      ],
    });
    TestBed.inject(MapContext).map = signal(map);
    const layout = TestBed.inject(TileDetailsLayout);
    layout.mobile.set(true);
    layout.viewportHeight.set(844);
    layout.toolbarBottom.set(200);
  });
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('switches rewards and farming in both layouts and preserves the preferred tab across tiles', async () => {
    const load = loadFarming.mockResolvedValue([
      {
        type: 'adventure',
        mapId: 'adventure',
        tileId: 'A1',
        enemyId: 'marin',
        recommended: true,
        notes: 'Marin condition',
      },
      {
        type: 'adventure',
        mapId: 'adventure',
        tileId: 'A1',
        enemyId: 'yuga',
        recommended: false,
        notes: 'Yuga condition',
      },
    ]);
    const fixture = TestBed.createComponent(TileDetailsComponent);
    fixture.componentRef.setInput('tileId', 'A1');
    await fixture.whenStable();
    const root: HTMLElement = fixture.nativeElement;
    const farmingTab = root.querySelector<HTMLButtonElement>('#tile-farming-tab');
    if (!farmingTab) throw new Error('Missing farming tab');
    expect(farmingTab.textContent?.replace(/\s+/g, ' ').trim()).toBe('Farming (2)');
    expect(root.querySelector('#tile-rewards-tab')?.getAttribute('aria-selected')).toBe('true');
    expect(root.querySelector<HTMLElement>('#tile-farming-panel')?.hidden).toBe(true);
    farmingTab.click();
    await fixture.whenStable();
    expect(root.querySelector<HTMLElement>('#tile-rewards-panel')?.hidden).toBe(true);
    expect(root.querySelector<HTMLElement>('#tile-farming-panel')?.hidden).toBe(false);
    expect(root.querySelector('hwh-tile-farming')?.textContent).toContain('Marin');
    expect(root.querySelector('hwh-tile-farming')?.textContent).toContain('Yuga condition');
    expect(root.querySelectorAll('.recommended')).toHaveLength(1);
    TestBed.inject(TileDetailsLayout).mobile.set(false);
    await fixture.whenStable();
    expect(root.querySelector('.right hwh-tile-farming')?.textContent).toContain('Recommended');
    fixture.componentRef.setInput('tileId', 'B1');
    await fixture.whenStable();
    expect(root.querySelector('hwh-tile-farming')).toBeNull();
    expect(root.querySelector('[role="tablist"]')).toBeNull();
    expect(root.querySelector<HTMLElement>('#tile-rewards-panel')?.hidden).toBe(false);
    fixture.componentRef.setInput('tileId', 'A1');
    await fixture.whenStable();
    expect(root.querySelector('#tile-farming-tab')?.getAttribute('aria-selected')).toBe('true');
    const tabs = root.querySelector<HTMLElement>('[role="tablist"]');
    if (!tabs) throw new Error('Missing tab list');
    tabs.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }));
    await fixture.whenStable();
    expect(root.querySelector('#tile-rewards-tab')?.getAttribute('aria-selected')).toBe('true');
    expect(document.activeElement?.id).toBe('tile-rewards-tab');
    tabs.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    await fixture.whenStable();
    expect(root.querySelector('#tile-farming-tab')?.getAttribute('aria-selected')).toBe('true');
    expect(document.activeElement?.id).toBe('tile-farming-tab');
    expect(load).toHaveBeenCalledTimes(1);
  });

  it('keeps panel height while changing tiles and resets the scroll position', async () => {
    const fixture = TestBed.createComponent(TileDetailsComponent);
    fixture.componentRef.setInput('tileId', 'A1');
    await fixture.whenStable();
    const layout = TestBed.inject(TileDetailsLayout);
    layout.expanded.set(true);
    await fixture.whenStable();
    const content = fixture.nativeElement.querySelector('.sheet-content') as HTMLElement;
    content.scrollTop = 250;
    fixture.componentRef.setInput('tileId', 'B1');
    await fixture.whenStable();
    expect(layout.expanded()).toBe(true);
    expect(fixture.componentInstance.sheetHeight()).toBe(644);
    expect(content.scrollTop).toBe(0);
    expect(content.textContent).toContain('Second mission');
  });

  it('disables unavailable directions and emits available navigation and close actions', async () => {
    const fixture = TestBed.createComponent(TileDetailsComponent);
    fixture.componentRef.setInput('tileId', 'A1');
    await fixture.whenStable();
    const navigate = vi.fn();
    const close = vi.fn();
    fixture.componentInstance.directionSelected.subscribe(navigate);
    fixture.componentInstance.closed.subscribe(close);
    const button = (label: string): HTMLButtonElement =>
      fixture.nativeElement.querySelector(`[aria-label="${label}"]`);
    expect(button('Tile to the left').disabled).toBe(true);
    expect(button('Tile above').disabled).toBe(true);
    expect(button('Tile below').disabled).toBe(true);
    button('Tile to the right').click();
    expect(navigate).toHaveBeenCalledWith('right');
    expect(button('Close tile details')).toBeTruthy();
    expect(fixture.nativeElement.querySelectorAll('.sheet-controls hwh-icon')).toHaveLength(5);
    button('Close tile details').click();
    expect(close).toHaveBeenCalledOnce();
  });
  it('supports grip swipes and keeps content scrolling independent of panel height', async () => {
    const fixture = TestBed.createComponent(TileDetailsComponent);
    fixture.componentRef.setInput('tileId', 'A1');
    await fixture.whenStable();
    const grip = fixture.nativeElement.querySelector('.sheet-grip') as HTMLButtonElement;
    Object.defineProperty(grip, 'setPointerCapture', { value: vi.fn() });
    const pointer = (type: string, y: number) => {
      const event = new Event(type, { bubbles: true });
      Object.defineProperties(event, {
        button: { value: 0 },
        pointerId: { value: 1 },
        clientY: { value: y },
      });
      grip.dispatchEvent(event);
    };
    const layout = TestBed.inject(TileDetailsLayout);
    pointer('pointerdown', 400);
    pointer('pointermove', 370);
    expect(layout.expanded()).toBe(true);
    pointer('pointerup', 300);
    grip.click();
    expect(layout.expanded()).toBe(true);
    const content = fixture.nativeElement.querySelector('.sheet-content') as HTMLElement;
    content.scrollTop = 100;
    content.dispatchEvent(new Event('scroll'));
    expect(layout.expanded()).toBe(true);
    pointer('pointerdown', 300);
    pointer('pointerup', 400);
    grip.click();
    expect(layout.expanded()).toBe(false);
  });
  it('expands on an upward panel swipe before the finger is released', async () => {
    const fixture = TestBed.createComponent(TileDetailsComponent);
    fixture.componentRef.setInput('tileId', 'A1');
    await fixture.whenStable();
    const sheet = fixture.nativeElement.querySelector('.mobile-sheet') as HTMLElement;
    const content = fixture.nativeElement.querySelector('.sheet-content') as HTMLElement;
    Object.defineProperty(sheet, 'setPointerCapture', { value: vi.fn() });
    const pointer = (type: string, x: number, y: number) => {
      const event = new Event(type, { bubbles: true, cancelable: true });
      Object.defineProperties(event, {
        button: { value: 0 },
        pointerId: { value: 1 },
        clientX: { value: x },
        clientY: { value: y },
      });
      content.dispatchEvent(event);
    };
    const layout = TestBed.inject(TileDetailsLayout);
    pointer('pointerdown', 100, 400);
    pointer('pointermove', 150, 395);
    expect(layout.expanded()).toBe(false);
    pointer('pointermove', 100, 370);
    expect(layout.expanded()).toBe(true);
    pointer('pointerup', 100, 370);
    await fixture.whenStable();
    expect(sheet.classList.contains('mobile-sheet--compact')).toBe(false);
    expect(sheet.querySelectorAll('.sheet-controls button')).toHaveLength(5);
    content.scrollTop = 100;
    content.dispatchEvent(new Event('scroll'));
    expect(layout.expanded()).toBe(true);
    expect(content.scrollTop).toBe(100);
  });

  it('expands on scrolling and retains the clickable handle', async () => {
    const fixture = TestBed.createComponent(TileDetailsComponent);
    fixture.componentRef.setInput('tileId', 'A1');
    await fixture.whenStable();
    const content = fixture.nativeElement.querySelector('.sheet-content') as HTMLElement;
    const layout = TestBed.inject(TileDetailsLayout);
    const wheel = new WheelEvent('wheel', { deltaY: 60, bubbles: true, cancelable: true });
    content.dispatchEvent(wheel);
    expect(layout.expanded()).toBe(true);
    expect(wheel.defaultPrevented).toBe(true);
    const nextWheel = new WheelEvent('wheel', { deltaY: 60, bubbles: true, cancelable: true });
    content.dispatchEvent(nextWheel);
    expect(nextWheel.defaultPrevented).toBe(false);
    (fixture.nativeElement.querySelector('.sheet-grip') as HTMLButtonElement).click();
    expect(layout.expanded()).toBe(false);
  });
  it('keeps the tile image size and position while the sheet covers it', async () => {
    const fixture = TestBed.createComponent(TileDetailsComponent);
    fixture.componentRef.setInput('tileId', 'A1');
    await fixture.whenStable();
    Object.defineProperty(fixture.nativeElement, 'clientWidth', { value: 390 });
    const layout = TestBed.inject(TileDetailsLayout);
    layout.compactSheetHeight.set(300);
    layout.sheetHeight.set(300);
    await fixture.whenStable();
    const frame = fixture.nativeElement.querySelector('.mobile-map') as HTMLElement;
    const image = frame.querySelector('hwh-tile-detail-map') as HTMLElement;
    expect(image).toBeTruthy();
    expect((frame.querySelector('.tile-transition') as HTMLElement).style.width).toBe('358px');
    expect(frame.style.height).toBe('344px');
    expect(frame.style.top).toBe('200px');
    layout.expanded.set(true);
    for (const height of [350, 450, 550, 644]) {
      layout.sheetHeight.set(height);
      await fixture.whenStable();
      expect(frame.querySelector('hwh-tile-detail-map')).toBe(image);
      expect((frame.querySelector('.tile-transition') as HTMLElement).style.width).toBe('358px');
      expect(frame.style.height).toBe('344px');
      expect(frame.style.top).toBe('200px');
    }
    layout.expanded.set(false);
    layout.sheetHeight.set(300);
    await fixture.whenStable();
    expect((frame.querySelector('.tile-transition') as HTMLElement).style.width).toBe('358px');
    expect(frame.style.height).toBe('344px');
  });
  async function setupOverscroll() {
    const fixture = TestBed.createComponent(TileDetailsComponent);
    fixture.componentRef.setInput('tileId', 'A1');
    const layout = TestBed.inject(TileDetailsLayout);
    layout.expanded.set(true);
    await fixture.whenStable();
    const content = fixture.nativeElement.querySelector('.sheet-content') as HTMLElement;
    const touch = (type: string, y: number, count = 1) => {
      const event = new Event(type, { bubbles: true, cancelable: true });
      Object.defineProperty(event, 'touches', {
        value: Array.from({ length: count }, (_, identifier) => ({
          identifier,
          clientX: 100,
          clientY: y,
        })),
      });
      content.dispatchEvent(event);
      return event;
    };
    const wheel = (time: number) => {
      const event = new WheelEvent('wheel', { deltaY: -60, bubbles: true, cancelable: true });
      Object.defineProperty(event, 'timeStamp', { value: time });
      content.dispatchEvent(event);
    };
    return { fixture, layout, content, touch, wheel };
  }

  it('collapses on a downward pull that starts at the top', async () => {
    const { layout, touch } = await setupOverscroll();
    touch('touchstart', 300);
    touch('touchmove', 310);
    expect(layout.expanded()).toBe(true);
    expect(touch('touchmove', 340).defaultPrevented).toBe(true);
    expect(layout.expanded()).toBe(false);
  });

  it('does not collapse when scrolling reaches the top during the same touch gesture', async () => {
    const { layout, content, touch } = await setupOverscroll();
    content.scrollTop = 100;
    touch('touchstart', 300);
    content.scrollTop = 0;
    touch('touchmove', 440);
    expect(layout.expanded()).toBe(true);
    touch('touchend', 440, 0);
    touch('touchstart', 300);
    touch('touchmove', 340);
    expect(layout.expanded()).toBe(false);
  });

  it('ignores cancelled gestures and multiple fingers', async () => {
    const { layout, touch } = await setupOverscroll();
    touch('touchstart', 300);
    touch('touchcancel', 300, 0);
    touch('touchmove', 340);
    expect(layout.expanded()).toBe(true);
    touch('touchstart', 300);
    touch('touchmove', 310, 2);
    touch('touchmove', 340);
    expect(layout.expanded()).toBe(true);
  });

  it('only collapses a wheel burst if it started at the top', async () => {
    const { layout, content, wheel } = await setupOverscroll();
    content.scrollTop = 100;
    wheel(1000);
    content.scrollTop = 0;
    wheel(1050);
    expect(layout.expanded()).toBe(true);
    wheel(1400);
    expect(layout.expanded()).toBe(false);
  });
  it('keeps the compact panel height independent of mission title wrapping', async () => {
    const fixture = TestBed.createComponent(TileDetailsComponent);
    fixture.componentRef.setInput('tileId', 'A1');
    await fixture.whenStable();
    const layout = TestBed.inject(TileDetailsLayout);
    const initialHeight = fixture.componentInstance.sheetHeight();
    expect(initialHeight).toBe(280);
    TestBed.inject(MapContext).map = signal({
      ...map,
      tiles: map.tiles.map((tile) =>
        tile.id === 'B1'
          ? {
              ...tile,
              challenge:
                'A much longer mission title that wraps onto multiple lines on a small mobile screen',
            }
          : tile,
      ),
    });
    fixture.componentRef.setInput('tileId', 'B1');
    await fixture.whenStable();
    expect(fixture.componentInstance.sheetHeight()).toBe(initialHeight);
    expect(layout.compactSheetHeight()).toBe(initialHeight);
    layout.viewportHeight.set(500);
    await fixture.whenStable();
    expect(fixture.componentInstance.sheetHeight()).toBe(150);
    expect(layout.compactSheetHeight()).toBe(150);
  });
});
