import { Component, type ElementRef, input, output, signal, viewChild } from '@angular/core';
import type { MapDefinition } from '../../../../../domain/maps/map.model';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { mapMetadata } from '../../../../../data/maps/map-metadata';
import { MapSelectorItemComponent } from './map-selector-item/map-selector-item.component';

@Component({
  imports: [IconComponent, MapSelectorItemComponent],
  selector: 'hwh-map-selector',
  styleUrl: './map-selector.component.scss',
  templateUrl: './map-selector.component.html',
})
export class MapSelectorComponent {
  currentMap = input.required<MapDefinition>();

  closed = output();

  asideElement = viewChild<ElementRef<HTMLElement>>('asideEl');

  isOpen = signal(false);

  maps = mapMetadata;

  open() {
    this.isOpen.set(true);
    requestAnimationFrame(() => {
      this.asideElement()?.nativeElement.focus();
    });
  }

  close() {
    this.isOpen.set(false);
  }
}
