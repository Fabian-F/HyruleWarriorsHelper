import { Location } from '@angular/common';
import { provideLocationMocks } from '@angular/common/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter, NavigationEnd, Router, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { vi } from 'vitest';
import { filter, firstValueFrom } from 'rxjs';
import { routes } from '../../../app.routes';
import { TileDetailsLayout } from '../services/tile-details-layout.service';

describe('mobile tile routing', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'ResizeObserver',
      class {
        observe() {}
        disconnect() {}
      },
    );
    vi.stubGlobal('matchMedia', () => ({ matches: true }));
    TestBed.configureTestingModule({
      providers: [provideRouter(routes, withComponentInputBinding()), provideLocationMocks()],
    });
  });
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.unstubAllGlobals();
  });

  it('opens direct links, changes neighbors, closes and restores tiles through routing', async () => {
    const harness = await RouterTestingHarness.create('/maps/adventure/A1?positions=true#tile');
    await harness.fixture.whenStable();
    // The harness navigates directly without the application's bootstrap listener.
    TestBed.inject(Router).setUpLocationChangeListener();
    const root = () => harness.routeNativeElement!;
    expect(root().querySelector('.mobile-sheet')).toBeTruthy();
    const layout = harness.routeDebugElement!.injector.get(TileDetailsLayout);
    layout.expanded.set(true);
    await harness.fixture.whenStable();
    (root().querySelector('[aria-label="Tile to the right"]') as HTMLButtonElement).click();
    await harness.fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/maps/adventure/B1?positions=true#tile');
    expect(layout.expanded()).toBe(true);
    (root().querySelector('[aria-label="Close tile details"]') as HTMLButtonElement).click();
    await harness.fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/maps/adventure?positions=true#tile');
    expect(root().querySelector('.mobile-sheet')).toBeNull();
    const location = TestBed.inject(Location);
    let navigated = firstValueFrom(
      TestBed.inject(Router).events.pipe(filter((event) => event instanceof NavigationEnd)),
    );
    location.back();
    await navigated;
    await harness.fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/maps/adventure/B1?positions=true#tile');
    expect(root().querySelector('.mobile-sheet')).toBeTruthy();
    expect(layout.expanded()).toBe(false);
    navigated = firstValueFrom(
      TestBed.inject(Router).events.pipe(filter((event) => event instanceof NavigationEnd)),
    );
    location.back();
    await navigated;
    await harness.fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/maps/adventure/A1?positions=true#tile');
    navigated = firstValueFrom(
      TestBed.inject(Router).events.pipe(filter((event) => event instanceof NavigationEnd)),
    );
    location.forward();
    await navigated;
    await harness.fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/maps/adventure/B1?positions=true#tile');
  });
});
