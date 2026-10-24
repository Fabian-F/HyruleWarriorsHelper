import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Maps } from 'src/assets/data/map-data/maps.data';

import { MapNavButtonComponent } from './map-nav-button.component';

describe('MapNavButtonComponent', () => {
  let component: MapNavButtonComponent;
  let fixture: ComponentFixture<MapNavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapNavButtonComponent ],
      imports: [CommonModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapNavButtonComponent);
    component = fixture.componentInstance;
    component.map = Maps[1];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
