import { createFarmingLookup } from '../../../../../domain/farming-lookup';
import { computed, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  createMapSearchEntries,
  emptySearch,
  isSearchActive,
  matchesTile,
  type MapSearchState,
} from '../../../../../domain/maps/map-search';
import { MapSearchService } from '../../services/map-search.service';
import { MapSearchComponent } from './map-search.component';

describe('map farming filter', () => {
  it('explains farming-only data and supports selecting, removing and resetting enemies', async () => {
    const state = signal<MapSearchState>(emptySearch);
    const entries = signal(
      createMapSearchEntries(
        {
          id: 'adventure',
          name: 'Test',
          difficulty: 'easy',
          tiles: [{ id: 'A1', challenge: 'Mission', difficulty: 'green', requirements: {} }],
        },
        createFarmingLookup([
          {
            type: 'adventure',
            enemyId: 'marin',
            mapId: 'adventure',
            tileId: 'A1',
            recommended: true,
            notes: '',
          },
        ]),
      ),
    );
    const search = {
      state,
      entries,
      active: computed(() => isSearchActive(state())),
      matches: computed(
        () =>
          new Set(
            entries()
              .filter((e) => matchesTile(e, state()))
              .map((e) => e.tile.id),
          ),
      ),
      update: (change: Partial<MapSearchState>) => state.update((s) => ({ ...s, ...change })),
      reset: () => state.set(emptySearch),
    };
    TestBed.configureTestingModule({
      providers: [{ provide: MapSearchService, useValue: search }],
    });
    const fixture = TestBed.createComponent(MapSearchComponent);
    const root: HTMLElement = fixture.nativeElement;
    fixture.componentInstance.open.set(true);
    fixture.detectChanges();
    expect(root.querySelector('#farming-filter-hint')?.textContent).toContain(
      'not a complete list',
    );
    const input = root.querySelector<HTMLInputElement>('[aria-label="Find a farming enemy"]');
    if (!input) throw new Error('Missing enemy search input');
    input.value = 'Marin';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const checkbox = root.querySelector<HTMLInputElement>(
      'input[type="checkbox"][aria-describedby="farming-filter-hint"]',
    );
    if (!checkbox) throw new Error('Missing farming checkbox');
    checkbox.click();
    fixture.detectChanges();
    expect(state().farmingEnemies).toEqual(['marin']);
    expect(root.querySelector('[role="status"]')?.textContent).toContain('1 matching tiles');
    const remove = root.querySelector<HTMLButtonElement>(
      '[aria-label="Remove farming enemy Marin"]',
    );
    if (!remove) throw new Error('Missing selected enemy chip');
    remove.click();
    fixture.detectChanges();
    expect(state().farmingEnemies).toEqual([]);
    fixture.componentInstance.farmingEnemy('marin');
    fixture.detectChanges();
    const reset = [...root.querySelectorAll('button')].find((button) =>
      button.textContent?.includes('Reset all'),
    );
    if (!reset) throw new Error('Missing reset button');
    reset.click();
    expect(state()).toEqual(emptySearch);
    fixture.destroy();
  });
});
