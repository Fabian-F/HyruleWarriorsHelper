import { Component, ElementRef, effect, inject, input, viewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IconComponent } from '../../../../../shared/components/icon/icon.component';
import { MapContext } from '../../../services/map-context.service';
import type { MapTile } from '../../../../../../domain/maps/tile.model';
import { getTileReportUrl, REPORT_TYPES, type ReportType } from './tile-report-url';

@Component({
  selector: 'hwh-tile-report',
  imports: [IconComponent],
  templateUrl: './tile-report.component.html',
  styleUrl: './tile-report.component.scss',
})
export class TileReportComponent {
  readonly tile = input.required<MapTile>();
  readonly displayedTileId = input.required<string>();
  readonly reports = REPORT_TYPES;
  private readonly context = inject(MapContext);
  private readonly document = inject(DOCUMENT);
  readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');
  readonly trigger = viewChild<ElementRef<HTMLButtonElement>>('trigger');

  constructor() {
    effect(() => {
      this.tile();
      this.close();
    });
  }

  open(): void {
    const dialog = this.dialog()!.nativeElement;
    const rect = this.trigger()!.nativeElement.getBoundingClientRect();
    dialog.style.setProperty('--report-top', `${rect.bottom + 8}px`);
    dialog.style.setProperty(
      '--report-right',
      `${Math.max(12, this.document.documentElement.clientWidth - rect.right)}px`,
    );
    dialog.showModal();
  }

  close(): void {
    const dialog = this.dialog()?.nativeElement;
    if (dialog?.open) dialog.close();
  }

  restoreFocus(): void {
    this.trigger()?.nativeElement.focus({ preventScroll: true });
  }

  onBackdrop(event: MouseEvent): void {
    if (event.target !== this.dialog()?.nativeElement) return;
    const rect = this.dialog()!.nativeElement.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      this.close();
  }

  reportUrl(type: ReportType): string {
    return getTileReportUrl(
      type,
      this.context.map()!,
      this.tile(),
      this.document.location.href,
      this.displayedTileId(),
    );
  }
}
