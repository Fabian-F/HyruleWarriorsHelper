import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MyFairyComponent } from './my-fairy.component';

describe('MyFairyComponent', () => {
  let component: MyFairyComponent;
  let fixture: ComponentFixture<MyFairyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFairyComponent ],
      imports: [CommonModule],
      schemas: [NO_ERRORS_SCHEMA],
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
