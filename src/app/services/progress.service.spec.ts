import { TestBed } from '@angular/core/testing';
import { Difficulty, LegendModeLocation, MapDifficulty } from '../../assets/data/enums';
import { HWLegendTile, HWMap, HWMapTile } from '../models';
import { ProgressService } from './progress.service';

const STORAGE_KEY = 'hyrule-warriors-helper-progress';

describe('ProgressService', () => {
  let service: ProgressService;

  const tile: HWMapTile = {
    coords: { row: 0, col: 0 },
    challenge: 'Test tile',
    difficulty: Difficulty.GREEN,
    requirements: {},
    rewards: {
      treasure: ['Heart Container'],
      skulltulas: ['First Gold Skulltula'],
    },
  };

  const map: HWMap = {
    path: 'test-map',
    name: 'Test Map',
    difficulty: MapDifficulty.EASY,
    size: { width: 1, height: 1 },
    tiles: [tile],
  };

  beforeEach(() => {
    localStorage.removeItem(STORAGE_KEY);
    TestBed.configureTestingModule({ providers: [ProgressService] });
    service = TestBed.inject(ProgressService);
  });

  afterEach(() => {
    localStorage.removeItem(STORAGE_KEY);
  });

  it('tracks individual collectibles and calculates percentages', () => {
    const collectibles = service.collectiblesForTile(map, map.tiles[0]);
    expect(collectibles.length).toBe(2);
    expect(service.summary(collectibles)).toEqual({ collected: 0, total: 2, percentage: 0 });

    service.toggle(collectibles[0].id);
    expect(service.isCollected(collectibles[0].id)).toBeTrue();
    expect(service.summary(collectibles)).toEqual({ collected: 1, total: 2, percentage: 50 });
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) as string);
    expect(saved.collected).toContain(collectibles[0].id);
  });

  it('exports and merges progress without replacing existing checks', () => {
    const collectibles = service.collectiblesForTile(map, map.tiles[0]);
    service.toggle(collectibles[0].id);
    const backup = JSON.parse(service.exportProgress());

    service.clearProgress();
    expect(service.importProgress(JSON.stringify(backup))).toBeTrue();
    expect(service.isCollected(collectibles[0].id)).toBeTrue();
  });

  it('leaves current progress unchanged when an import is malformed', () => {
    const collectible = service.collectiblesForTile(map, map.tiles[0])[0];
    service.toggle(collectible.id);

    expect(service.importProgress('{invalid')).toBeFalse();
    expect(service.isCollected(collectible.id)).toBeTrue();
  });

  it('generates stable IDs for each collectible', () => {
    const first = service.collectiblesForTile(map, map.tiles[0]);
    const second = service.collectiblesForTile(map, map.tiles[0]);
    expect(first.map(item => item.id)).toEqual(second.map(item => item.id));
  });

  it('tracks heart pieces and weapons on Legend Mode tiles', () => {
    const legendMap: HWMap = {
      ...map,
      path: 'legend',
      isLegendMode: true,
      tiles: [{
        coords: { row: 0, col: 0 },
        challenge: 'Legend tile',
        location: LegendModeLocation.HYRULE,
        heartpieces: ['Heart Piece'],
        skulltulas: ['Gold Skulltula'],
        weapons: ['Weapon'],
      } as HWLegendTile],
    };
    const collectibles = service.collectiblesForTile(legendMap, legendMap.tiles[0]);

    expect(collectibles.map(item => item.category)).toEqual([
      'Heart Piece / Container',
      'Gold Skulltula',
      'Weapon',
    ]);
  });
});
