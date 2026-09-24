import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { MapSettingsService } from '../../services/map-settings.service';

@Component({
  selector: 'hwh-map-settings',
  templateUrl: './map-settings.component.html',
  styleUrl: './map-settings.component.scss',
  host: {
    '(document:click)': 'closeSettingsOutside($event)',
  },
})
export class MapSettingsComponent {
  protected readonly settings = inject(MapSettingsService);
  private readonly settingsMenu = viewChild<ElementRef<HTMLDetailsElement>>('settingsMenu');

  protected closeSettingsOutside(event: MouseEvent): void {
    const menu = this.settingsMenu()?.nativeElement;
    if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
      menu.open = false;
    }
  }

  protected closeSettings(event: Event): void {
    const menu = this.settingsMenu()?.nativeElement;
    if (menu?.open) {
      event.preventDefault();
      event.stopPropagation();
      menu.open = false;
      menu.querySelector('summary')?.focus();
    }
  }

}
