import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { HeadnavComponent } from './headnav.component';

describe('HeadnavComponent', () => {
  let component: HeadnavComponent;
  let fixture: ComponentFixture<HeadnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadnavComponent ],
      imports: [CommonModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('does not show a version switch', () => {
    expect((fixture.nativeElement as HTMLElement).textContent).not.toContain('v2');
  });
});
