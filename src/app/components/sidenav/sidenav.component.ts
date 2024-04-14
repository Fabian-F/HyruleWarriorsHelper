import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Maps } from 'src/assets/data/map-data/maps.data';
import { HWMap } from '../../models';

@Component({
  selector: 'hwh-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {

  Maps = Maps;

  @Input()
  @HostBinding('class.extended')
  extended = false;

  @Output()
  extendedChange = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: MouseEvent): void {
     if (!this.elementRef.nativeElement.contains(event.target)) {
       this.close();
     }
  }

  close() {
    this.extended = false;
    this.extendedChange.emit(this.extended);
  }

  getDisplayName(map: HWMap) {
    return map.name;
  }
}
