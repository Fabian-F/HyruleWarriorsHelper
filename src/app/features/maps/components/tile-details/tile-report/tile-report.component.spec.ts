import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MapContext } from '../../../services/map-context.service';
import { TileReportComponent } from './tile-report.component';
import type { MapTile } from '../../../../../../domain/maps/tile.model';

const tile: MapTile = {
  id: 'A3',
  challenge: 'Test mission',
  difficulty: 'green',
  requirements: {},
};

describe('tile report selection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TileReportComponent],
      providers: [
        {
          provide: MapContext,
          useValue: { map: signal({ id: 'adventure', name: 'Adventure Map', tiles: [tile] }) },
        },
      ],
    });
  });

  function setup() {
    const fixture = TestBed.createComponent(TileReportComponent);
    fixture.componentRef.setInput('tile', tile);
    fixture.componentRef.setInput('displayedTileId', 'A3');
    fixture.detectChanges();
    const dialog: HTMLDialogElement = fixture.nativeElement.querySelector('dialog');
    // jsdom does not implement the native dialog lifecycle.
    dialog.showModal = vi.fn(() => dialog.setAttribute('open', ''));
    dialog.close = vi.fn(() => {
      dialog.removeAttribute('open');
      dialog.dispatchEvent(new Event('close'));
    });
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.report-trigger');
    return { fixture, dialog, button };
  }

  it('opens from the flag and closes outside with focus returned to the flag', () => {
    const { fixture, dialog, button } = setup();
    const focus = vi.spyOn(button, 'focus');
    button.click();
    expect(dialog.showModal).toHaveBeenCalledOnce();
    expect(fixture.nativeElement.querySelectorAll('a').length).toBe(3);
    dialog.dispatchEvent(new MouseEvent('click', { clientX: -1, clientY: -1 }));
    expect(dialog.close).toHaveBeenCalledOnce();
    expect(focus).toHaveBeenCalledWith({ preventScroll: true });
  });

  it('closes when navigating to another tile and refreshes the links', () => {
    const { fixture, dialog, button } = setup();
    button.click();
    fixture.componentRef.setInput('tile', { ...tile, id: 'B4' });
    fixture.componentRef.setInput('displayedTileId', 'B4');
    fixture.detectChanges();
    expect(dialog.open).toBe(false);
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(new URL(link.href).searchParams.get('context')).toContain('Tile ID: B4');
  });
});
