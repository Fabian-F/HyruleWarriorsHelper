import { TestBed } from '@angular/core/testing';
import { getMaterial } from '../../../../../../../data/materials';
import { RewardComponent } from './reward.component';
import { TreasureComponent } from '../treasure/treasure.component';

describe('material metadata in TileDetails', () => {
  afterEach(() => TestBed.resetTestingModule());

  it('loads material metadata by ID and updates when the reward changes', async () => {
    const fixture = TestBed.createComponent(RewardComponent);
    fixture.componentRef.setInput('type', 'arank');
    fixture.componentRef.setInput('reward', { type: 'material', materialId: 'zeldas-tiara' });
    await fixture.whenStable();
    expect(fixture.componentInstance.material()).toBe(getMaterial('zeldas-tiara'));
    expect(fixture.nativeElement.textContent).toContain("Zelda's Tiara");
    fixture.componentRef.setInput('reward', { type: 'material', materialId: 'majoras-mask' });
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain("Majora's Mask");
    fixture.componentRef.setInput('reward', { type: 'material' });
    await fixture.whenStable();
    expect(fixture.componentInstance.material()).toBeUndefined();
    expect(fixture.componentInstance.name()).toBe('Material');
  });

  it('resolves treasure materials while preserving their location', async () => {
    const fixture = TestBed.createComponent(TreasureComponent);
    fixture.componentRef.setInput('treasure', {
      type: 'material',
      materialId: 'island-outfit',
      location: 'Enemy Base',
    });
    await fixture.whenStable();
    expect(fixture.componentInstance.material()).toBe(getMaterial('island-outfit'));
    expect(fixture.nativeElement.textContent).toContain('Island Outfit');
    expect(fixture.nativeElement.textContent).toContain('Enemy Base');
  });
});
