import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  type TemplateRef,
  inject,
  input,
  signal,
  viewChild,
  type ElementRef,
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'hwh-selection-sidebar',
  imports: [NgTemplateOutlet, IconComponent],
  templateUrl: './selection-sidebar.component.html',
  styleUrl: './selection-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'complementary',
    '[attr.aria-label]': 'selectionLabel()',
    '(window:resize)': 'closeOnDesktop()',
  },
})
export class SelectionSidebarComponent {
  private readonly document = inject(DOCUMENT);
  private readonly pickerDialog = viewChild<ElementRef<HTMLDialogElement>>('pickerDialog');
  private previousOverflow: string | undefined;
  readonly pickerId = input.required<string>();
  readonly selectionLabel = input.required<string>();
  readonly toggleLabel = input.required<string>();
  readonly selectedName = input.required<string>();
  readonly selectionKey = input.required<string>();
  readonly content = input.required<TemplateRef<unknown>>();
  readonly mobilePickerOpen = signal(false);

  constructor() {
    effect(() => {
      this.selectionKey();
      this.closePicker();
    });
    inject(DestroyRef).onDestroy(() => this.restorePageScroll());
  }

  openPicker(): void {
    const dialog = this.pickerDialog()?.nativeElement;
    if (!dialog || dialog.open) return;
    this.previousOverflow = this.document.documentElement.style.overflow;
    this.document.documentElement.style.overflow = 'hidden';
    this.mobilePickerOpen.set(true);
    dialog.showModal();
  }

  closePicker(): void {
    const dialog = this.pickerDialog()?.nativeElement;
    if (dialog?.open) dialog.close();
    this.onPickerClosed();
  }

  onPickerClosed(): void {
    this.mobilePickerOpen.set(false);
    this.restorePageScroll();
  }

  closeOnBackdrop(event: MouseEvent): void {
    const dialog = this.pickerDialog()?.nativeElement;
    if (event.target !== dialog || !dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      this.closePicker();
  }

  closeOnDesktop(): void {
    if ((this.document.defaultView?.innerWidth ?? 0) > 900) this.closePicker();
  }

  private restorePageScroll(): void {
    if (this.previousOverflow === undefined) return;
    this.document.documentElement.style.overflow = this.previousOverflow;
    this.previousOverflow = undefined;
  }
}
