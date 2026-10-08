import { TestBed } from '@angular/core/testing';
import { TileFarmingComponent } from './tile-farming.component';

it('distinguishes loading and failed data from loaded farming entries', () => {
  const fixture = TestBed.createComponent(TileFarmingComponent);
  fixture.componentRef.setInput('locations', []);
  fixture.componentRef.setInput('loading', true);
  fixture.detectChanges();
  const root: HTMLElement = fixture.nativeElement;
  expect(root.textContent).toContain('Loading farming spots');
  fixture.componentRef.setInput('loading', false);
  fixture.componentRef.setInput('unavailable', true);
  fixture.detectChanges();
  expect(root.textContent).toContain('could not be loaded');
  expect(root.textContent).not.toContain('Loading farming spots');
  fixture.destroy();
});
