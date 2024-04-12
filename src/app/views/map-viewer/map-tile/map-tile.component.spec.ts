import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTileComponent } from './map-tile.component';

describe('MapTileComponent', () => {
  let component: MapTileComponent;
  let fixture: ComponentFixture<MapTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
