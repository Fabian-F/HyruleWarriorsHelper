import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadnavComponent } from './headnav.component';

describe('HeadnavComponent', () => {
  let component: HeadnavComponent;
  let fixture: ComponentFixture<HeadnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
