import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

export interface DynamicLabel {
  activeLabel: string;
  inactiveLabel: string;
}

@Component({
  selector: 'hwh-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  _label: string | DynamicLabel = {
    activeLabel: "Active",
    inactiveLabel: "Inactive"
  };
  _width = 0;

  @Input()
  active = false;

  @Input()
  disabled = false;

  @Output()
  activeChange = new EventEmitter<boolean>();

  @Input()
  set label(value: string | DynamicLabel) {
    this._label = value;
  };

  get label() {
    if(typeof this._label !== 'string') {
      return this.active ? this._label.activeLabel : this._label.inactiveLabel;
    }
    return this._label;
  }

  ngOnInit(): void {
    this._width = this.getMaxWidth();
  }

  onClick() {
    if (this.disabled) return;
    this.active = !this.active;
    this.activeChange.emit(this.active);
  }

  getMaxWidth(): number {
    if(typeof this._label !== 'string') {
      const activeWidth = this.getTextWidth(this._label.activeLabel);
      const inactiveWidth = this.getTextWidth(this._label.inactiveLabel);
      return Math.max(activeWidth, inactiveWidth);
    }
    return this.getTextWidth(this._label as string);
  }

  getTextWidth(text: any) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if(!context) return 0;
    context.font = this.getCanvasFont();
    const metrics = context.measureText(text);
    return metrics.width;
  }

  getCssStyle(element: any, prop: any) {
      return window.getComputedStyle(element, null).getPropertyValue(prop);
  }

  getCanvasFont(el = document.body) {
    const fontWeight = 400;
    const fontSize = this.getCssStyle(el, 'font-size') || '20px';
    const fontFamily = 'Arial';

    return `${fontWeight} ${fontSize} ${fontFamily}`;
  }
}
