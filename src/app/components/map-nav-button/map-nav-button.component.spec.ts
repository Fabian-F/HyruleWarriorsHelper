import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapNavButtonComponent } from './map-nav-button.component';

describe('MapNavButtonComponent', () => {
  let component: MapNavButtonComponent;
  let fixture: ComponentFixture<MapNavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapNavButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
