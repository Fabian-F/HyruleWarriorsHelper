import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Difficulty, MapDifficulty } from 'src/assets/data/enums';
import { HWMap, HWMapTile } from 'src/app/models';

import { MapTileComponent } from './map-tile.component';

describe('MapTileComponent', () => {
  let component: MapTileComponent;
  let fixture: ComponentFixture<MapTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapTileComponent ],
      imports: [CommonModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapTileComponent);
    component = fixture.componentInstance;
    component.map = {
      path: 'test',
      name: 'Test Map',
      difficulty: MapDifficulty.EASY,
      size: { width: 1, height: 1 },
      tiles: [],
    } satisfies HWMap;
    component.tile = {
      coords: { row: 0, col: 0 },
      challenge: 'Test',
      difficulty: Difficulty.GREEN,
      requirements: {},
    } satisfies HWMapTile;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
