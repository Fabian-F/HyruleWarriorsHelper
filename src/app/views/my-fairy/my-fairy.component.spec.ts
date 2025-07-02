import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFairyComponent } from './my-fairy.component';

describe('MyFairyComponent', () => {
  let component: MyFairyComponent;
  let fixture: ComponentFixture<MyFairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFairyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
