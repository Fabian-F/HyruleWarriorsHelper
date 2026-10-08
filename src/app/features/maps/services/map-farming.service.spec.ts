import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';
import { MapFarmingService, FARMING_LOCATIONS_LOADER } from './map-farming.service';
import { MapSearchService } from './map-search.service';
import { MapContext } from './map-context.service';
import type { MapDefinition } from '../../../../domain/maps/map.model';

describe('shared map farming resource', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.restoreAllMocks();
  });

  it('loads once for search and tile lookups, including after changing maps', async () => {
    const load = vi.fn().mockResolvedValue([
      {
        type: 'adventure',
        mapId: 'adventure',
        tileId: 'A1',
        enemyId: 'marin',
        recommended: true,
        notes: 'Condition',
      },
    ]);
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        MapFarmingService,
        MapSearchService,
        MapContext,
        { provide: FARMING_LOCATIONS_LOADER, useValue: load },
      ],
    });
    const map = signal<MapDefinition>({
      id: 'adventure',
      name: 'Map',
      difficulty: 'easy',
      tiles: [{ id: 'A1', challenge: 'Mission', difficulty: 'green', requirements: {} }],
    });
    TestBed.inject(MapContext).map = map;
    const search = TestBed.inject(MapSearchService);
    const farming = TestBed.inject(MapFarmingService);
    await vi.waitFor(() => {
      TestBed.tick();
      expect(farming.loading()).toBe(false);
    });
    expect(farming.getLocations('adventure', 'A1').map((location) => location.enemyId)).toEqual([
      'marin',
    ]);
    expect(search.entries()[0].farmingEnemies).toEqual(['marin']);
    farming.getLocations('adventure', 'B1');
    map.set({ ...map(), id: 'great-sea' });
    expect(search.entries()[0].farmingEnemies).toEqual([]);
    expect(farming.getLocations('great-sea', 'A1')).toEqual([]);
    expect(load).toHaveBeenCalledTimes(1);
    expect(farming.unavailable()).toBe(false);
  });

  it('exposes a loading failure without throwing from the lookup', async () => {
    const load = vi.fn().mockRejectedValue(new Error('Network failed'));
    TestBed.configureTestingModule({
      providers: [MapFarmingService, { provide: FARMING_LOCATIONS_LOADER, useValue: load }],
    });
    const farming = TestBed.inject(MapFarmingService);
    await vi.waitFor(() => {
      TestBed.tick();
      expect(farming.unavailable()).toBe(true);
    });
    expect(farming.loading()).toBe(false);
    expect(farming.getLocations('adventure', 'A1')).toEqual([]);
  });
});
