import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTitleComponent } from './map-title.component';

describe('MapTitleComponent', () => {
  let component: MapTitleComponent;
  let fixture: ComponentFixture<MapTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
