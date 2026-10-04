import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  output,
  signal,
  viewChild,
  type ElementRef,
} from '@angular/core';
import type { Enemy, EnemyId } from '../../../../../domain/enemy.model';
import {
  enemyCategories,
  type EnemyCategory,
} from '../../../../../domain/materials/materials-page';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { getEnemySrc } from '../../../../shared/assets';

@Component({
  selector: 'hwh-enemy-sidebar',
  imports: [NgTemplateOutlet, IconComponent],
  templateUrl: './enemy-sidebar.component.html',
  styleUrl: './enemy-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'complementary',
    'aria-label': 'Enemy selection',
    '(window:resize)': 'closeOnDesktop()',
  },
})
export class EnemySidebarComponent {
  private readonly document = inject(DOCUMENT);
  private readonly pickerDialog = viewChild<ElementRef<HTMLDialogElement>>('pickerDialog');
  private previousOverflow: string | undefined;
  readonly enemy = input.required<Enemy>();
  readonly enemies = input.required<readonly Enemy[]>();
  readonly query = input('');
  readonly category = input<EnemyCategory>('all');
  readonly queryChange = output<string>();
  readonly categoryChange = output<EnemyCategory>();
  readonly enemySelected = output<EnemyId>();
  readonly categories = enemyCategories;
  readonly enemySrc = getEnemySrc;
  readonly mobilePickerOpen = signal(false);

  constructor() {
    effect(() => {
      this.enemy();
      this.closePicker();
    });
    inject(DestroyRef).onDestroy(() => this.restorePageScroll());
  }

  chooseEnemy(id: EnemyId): void {
    this.closePicker();
    this.enemySelected.emit(id);
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
