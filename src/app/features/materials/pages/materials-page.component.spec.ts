import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { vi } from 'vitest';
import { routes } from '../../../app.routes';
import { FARMING_LOCATIONS_LOADER } from '../../../core/farming-loader.token';
import { MaterialsPageComponent } from './materials-page.component';
import type { FarmingLocation } from '../../../../domain/farming-location.model';

const locations: readonly FarmingLocation[] = [
  {
    type: 'adventure',
    enemyId: 'marin',
    mapId: 'adventure',
    tileId: 'A1',
    recommended: false,
    notes: 'Marin condition',
  },
  {
    type: 'legend',
    enemyId: 'marin',
    title: 'Recommended mission',
    recommended: true,
    notes: 'Legend condition',
  },
  {
    type: 'adventure',
    enemyId: 'marin',
    mapId: 'great-sea',
    tileId: 'P16',
    recommended: false,
    notes: 'Missing tile',
  },
];

describe('materials page routing and interactions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        { provide: FARMING_LOCATIONS_LOADER, useValue: vi.fn().mockResolvedValue(locations) },
      ],
    });
  });
  afterEach(() => TestBed.resetTestingModule());

  it('supports deep links, shared material search, map filtering and enemy navigation', async () => {
    const harness = await RouterTestingHarness.create(
      '/materials/marin?map=adventure&q=Zelda%27s%20Tiara',
    );
    await harness.fixture.whenStable();
    const root = () => harness.routeNativeElement!;
    expect(root().querySelector('#enemy-name')?.textContent).toBe('Marin');
    expect(root().querySelectorAll('.enemy-option')).toHaveLength(2);
    expect(root().querySelector('.material-grid')?.textContent).toContain("Zelda's Tiara");
    expect(root().querySelector('.material-grid')?.textContent).toContain('No bronze material');
    expect(root().querySelector('.recommended-spot')?.textContent).toContain('Recommended mission');
    expect(root().querySelector('.recommended-spot a')).toBeNull();
    expect(root().querySelectorAll('.farming-list li')).toHaveLength(1);
    expect(root().querySelectorAll('.farming-table tbody tr')).toHaveLength(1);
    expect(root().querySelectorAll('.farming-table thead tr:last-child th')).toHaveLength(3);
    expect(root().querySelector('.farming-table tbody')?.textContent).toContain('Marin condition');
    expect(root().querySelector('.farming-table tbody a')?.getAttribute('href')).toBe(
      '/maps/adventure/A1',
    );
    expect(root().querySelector('.farming-list .map-name')).toBeNull();
    expect(root().querySelector('.farming-list a')?.getAttribute('href')).toBe(
      '/maps/adventure/A1',
    );
    const all = root().querySelector<HTMLButtonElement>('.map-filters button');
    if (!all) throw new Error('Missing all maps button');
    all.click();
    await harness.fixture.whenStable();
    expect(root().querySelectorAll('.farming-list li')).toHaveLength(3);
    expect(root().querySelectorAll('.farming-table thead tr:last-child th')).toHaveLength(4);
    expect(root().querySelectorAll('.farming-table tbody tr')).toHaveLength(3);
    expect(root().querySelector('.farming-table tbody')?.textContent).toContain(
      'Recommended mission',
    );
    expect(root().querySelectorAll('.farming-table tbody a')).toHaveLength(1);
    expect(root().querySelector('.unavailable')?.textContent).toContain('Tile unavailable');
    expect(root().querySelectorAll('.farming-list a')).toHaveLength(1);
    const zelda = [...root().querySelectorAll<HTMLButtonElement>('.enemy-option')].find((button) =>
      button.textContent?.includes('Zelda'),
    );
    if (!zelda) throw new Error('Missing Zelda option');
    zelda.click();
    await harness.fixture.whenStable();
    expect(root().querySelector('#enemy-name')?.textContent).toBe('Zelda');
    expect(root().querySelector('.farming-list')?.textContent).toContain('No farming locations');
    expect(
      TestBed.inject(Router).parseUrl(TestBed.inject(Router).url).queryParams['map'],
    ).toBeUndefined();
  });

  it('filters enemy types with toggle buttons and restores all enemies', async () => {
    const harness = await RouterTestingHarness.create('/materials/marin');
    await harness.fixture.whenStable();
    const root = harness.routeNativeElement!;
    const buttons = root.querySelectorAll<HTMLButtonElement>('.enemy-type-filters button');
    expect(buttons).toHaveLength(4);
    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
    buttons[2].click();
    await harness.fixture.whenStable();
    expect(buttons[2].getAttribute('aria-pressed')).toBe('true');
    expect(root.querySelector('.enemy-list')?.textContent).toContain('King Dodongo');
    expect(root.querySelector('.enemy-list')?.textContent).not.toContain('Marin');
    expect(
      TestBed.inject(Router).parseUrl(TestBed.inject(Router).url).queryParams['category'],
    ).toBe('boss');
    buttons[0].click();
    await harness.fixture.whenStable();
    expect(root.querySelectorAll('.enemy-option')).toHaveLength(53);
    expect(
      TestBed.inject(Router).parseUrl(TestBed.inject(Router).url).queryParams['category'],
    ).toBeUndefined();
  });

  it('keeps mobile sidebar expansion local and closes it after enemy selection', async () => {
    const harness = await RouterTestingHarness.create('/materials/marin');
    await harness.fixture.whenStable();
    const root = harness.routeNativeElement!;
    const dialog = root.querySelector<HTMLDialogElement>('dialog')!;
    dialog.showModal = vi.fn(() => dialog.setAttribute('open', ''));
    dialog.close = vi.fn(() => {
      dialog.removeAttribute('open');
      dialog.dispatchEvent(new Event('close'));
    });
    const initialOverflow = document.documentElement.style.overflow;
    const toggle = root.querySelector<HTMLButtonElement>('.mobile-picker-toggle')!;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    toggle.click();
    await harness.fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(dialog.showModal).toHaveBeenCalledOnce();
    expect(document.documentElement.style.overflow).toBe('hidden');
    const zelda = [...root.querySelectorAll<HTMLButtonElement>('.enemy-option')].find((button) =>
      button.textContent?.includes('Zelda'),
    )!;
    zelda.click();
    await harness.fixture.whenStable();
    expect(root.querySelector('#enemy-name')?.textContent).toBe('Zelda');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(dialog.close).toHaveBeenCalledOnce();
    expect(document.documentElement.style.overflow).toBe(initialOverflow);
  });

  it('redirects invalid enemy IDs and preserves loading failure feedback with retry', async () => {
    const load = vi.fn().mockRejectedValue(new Error('Failed download'));
    TestBed.overrideProvider(FARMING_LOCATIONS_LOADER, { useValue: load });
    const harness = await RouterTestingHarness.create('/materials/unknown');
    await harness.fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/materials/aeralfos');
    expect(harness.routeNativeElement?.querySelector('[role="alert"]')?.textContent).toContain(
      'could not be loaded',
    );
    load.mockResolvedValue(locations);
    harness.routeNativeElement?.querySelector<HTMLButtonElement>('.action')?.click();
    await harness.fixture.whenStable();
    expect(harness.routeNativeElement?.querySelector('[role="alert"]')).toBeNull();
    expect(load).toHaveBeenCalledTimes(2);
  });
});
