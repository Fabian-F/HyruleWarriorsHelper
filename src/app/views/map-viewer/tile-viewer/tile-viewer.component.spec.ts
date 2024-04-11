import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileViewerComponent } from './tile-viewer.component';

describe('TileViewerComponent', () => {
  let component: TileViewerComponent;
  let fixture: ComponentFixture<TileViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
