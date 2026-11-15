import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { isTreasurePosition } from '../../../../domain/battle-areas/treasure-position';
import {
  afterEveryRender,
  afterRenderEffect,
  untracked,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  resource,
  signal,
  viewChild,
} from '@angular/core';
import { getBattleArea } from '../../../../data/battle-areas/battle-areas';
import { getRewardProgressKey } from '../../../../data/progress/reward-keys';
import type { BattleAreaId } from '../../../../domain/battle-areas/battle-area.model';
import type {
  KeepId,
  KeepNameOverrides,
} from '../../../../domain/battle-areas/battle-area-map.model';
import {
  hasBattleAreaMap,
  loadBattleAreaMap,
} from '../../../../domain/battle-areas/battle-area-map-loader';
import {
  getKeepTreasures,
  getBattleAreaViewBox,
} from '../../../../domain/battle-areas/treasure-keeps';
import type { Treasure } from '../../../../domain/maps/reward.model';
import type { ProgressSource } from '../../../../domain/progress/progress-keys';
import { ProgressDirective } from '../../directives/progress.directive';
import { TreasureComponent } from '../treasure/treasure.component';
import { getTreasureName } from '../treasure/treasure-name';

@Component({
  selector: 'hwh-battle-area-treasures',
  imports: [TreasureComponent, ProgressDirective, IconComponent, NgTemplateOutlet],
  templateUrl: './battle-area-treasures.component.html',
  styleUrl: './battle-area-treasures.component.scss',
  host: {
    '(window:resize)': 'closeMap(false, false)',
    '(document:pointerdown)': 'outsideMap($event)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BattleAreaTreasuresComponent {
  readonly battleAreaId = input.required<BattleAreaId>();
  readonly treasures = input.required<readonly Treasure[]>();
  readonly source = input.required<ProgressSource>();
  readonly keepNameOverrides = input<KeepNameOverrides>();
  readonly drawerAnchor = input<HTMLElement>();
  protected readonly available = computed(() => hasBattleAreaMap(this.battleAreaId()));
  protected readonly areaName = computed(() => getBattleArea(this.battleAreaId()).name);
  protected readonly open = signal(false);
  protected readonly selectedPoint = signal<number | undefined>(undefined);
  protected readonly selectedKeep = signal<KeepId | undefined>(undefined);
  private readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('mapDialog');
  private readonly trigger = viewChild<ElementRef<HTMLButtonElement>>('mapTrigger');
  private readonly document = inject(DOCUMENT);
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });
  private readonly mapRequested = computed(() => this.queryParams().get('minimap') === 'true');
  private desktopOpen = false;
  private closeAnimation: Animation | undefined;
  protected readonly closing = signal(false);
  protected readonly mobileMap = signal(false);
  private previousOverflow: string | undefined;
  private returnFocus = true;
  protected readonly data = resource({
    params: () => (this.open() && this.available() ? this.battleAreaId() : undefined),
    loader: ({ params }) => loadBattleAreaMap(params),
  });
  protected readonly map = computed(() => (this.data.hasValue() ? this.data.value() : undefined));
  protected readonly viewBox = computed(() => {
    const map = this.map();
    return map ? getBattleAreaViewBox(map) : undefined;
  });
  protected readonly groups = computed(() => {
    const map = this.map();
    return map ? getKeepTreasures(map, this.treasures(), this.keepNameOverrides()) : [];
  });
  protected readonly points = computed(() =>
    this.treasures().flatMap((treasure, index) =>
      treasure.keepId === undefined && isTreasurePosition(treasure.position)
        ? [{ treasure, index, position: treasure.position, label: getTreasureName(treasure) }]
        : [],
    ),
  );
  protected readonly rewardKey = (treasure: Treasure) =>
    getRewardProgressKey(treasure, this.source());

  constructor() {
    effect(() => {
      // A new mission must not inherit the preceding mission's open map or selection.
      this.source();
      this.battleAreaId();
      this.treasures();
      untracked(() => this.closeMap(false, false, false));
    });
    afterRenderEffect(() => {
      const requested = this.mapRequested();
      this.source();
      const available = this.available() && this.treasures().length > 0;
      const dialog = this.dialog();
      untracked(() => {
        if (!dialog) return;
        if (requested && available) {
          this.cancelCloseAnimation();
          if (!this.open()) this.openMap();
        } else {
          this.closeMap(false, true, false);
        }
      });
    });
    afterEveryRender(() => {
      // Direct links can open before the parent's tile layout has settled.
      if (this.open() && !this.mobileMap()) this.positionDrawer();
    });
    inject(DestroyRef).onDestroy(() => {
      this.cancelCloseAnimation();
      this.restoreScroll();
    });
  }

  protected openMap(): void {
    const dialog = this.dialog()?.nativeElement;
    if (!dialog || dialog.open || !this.available() || !this.treasures().length) return;
    const viewport = this.document.defaultView;
    if (!viewport) return;
    const mobile = viewport.innerWidth <= 1000;
    this.mobileMap.set(mobile);
    this.positionDrawer();
    this.returnFocus = true;
    this.open.set(true);
    if (mobile) {
      dialog.removeAttribute('popover');
      this.previousOverflow = this.document.documentElement.style.overflow;
      this.document.documentElement.style.overflow = 'hidden';
      dialog.showModal();
    } else {
      dialog.setAttribute('popover', 'manual');
      this.desktopOpen = true;
      dialog.showPopover();
      dialog.querySelector<HTMLButtonElement>('.map-close')?.focus({ preventScroll: true });
    }
  }

  private positionDrawer(): void {
    const dialog = this.dialog()?.nativeElement;
    const viewport = this.document.defaultView;
    if (!dialog || !viewport) return;
    const anchor = (this.drawerAnchor() ?? this.element.nativeElement).getBoundingClientRect();
    const edge = anchor.left > 0 ? anchor.left : viewport.innerWidth - 32;
    const width = Math.min(420, Math.max(240, edge - 16));
    const top = Math.max(16, Math.min(anchor.top, viewport.innerHeight - 240));
    dialog.style.setProperty('--drawer-left', `${Math.max(16, edge - width)}px`);
    dialog.style.setProperty('--drawer-top', `${top}px`);
    dialog.style.setProperty('--drawer-width', `${width}px`);
    dialog.style.setProperty('--drawer-height', `${viewport.innerHeight - top - 16}px`);
  }

  protected toggleMap(): void {
    if (this.closeAnimation) {
      this.cancelCloseAnimation();
      // Supersede the closing navigation even if its URL has not committed yet.
      this.updateMapUrl(true, true);
      return;
    }
    if (this.open()) this.closeMap();
    else this.updateMapUrl(true);
  }

  private updateMapUrl(open: boolean, forceNavigation = false): void {
    if (!forceNavigation && this.mapRequested() === open) return;
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { minimap: open ? 'true' : null },
      queryParamsHandling: 'merge',
      preserveFragment: true,
    });
  }

  protected closeMap(restoreFocus = true, animate = true, updateUrl = true): void {
    if (updateUrl) this.updateMapUrl(false);
    if (this.closeAnimation && animate) return;
    this.returnFocus = restoreFocus;
    const dialog = this.dialog()?.nativeElement;
    const viewport = this.document.defaultView;
    const reducedMotion = viewport?.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (
      this.desktopOpen &&
      dialog &&
      animate &&
      !reducedMotion &&
      typeof dialog.animate === 'function'
    ) {
      const style = viewport!.getComputedStyle(dialog);
      const animation = dialog.animate(
        [
          {
            clipPath: style.clipPath && style.clipPath !== 'none' ? style.clipPath : 'inset(0)',
            transform: style.transform,
            opacity: style.opacity,
          },
          { clipPath: 'inset(0 0 0 100%)', transform: 'translateX(24px)', opacity: 0 },
        ],
        { duration: 180, easing: 'ease-in', fill: 'forwards' },
      );
      this.closeAnimation = animation;
      this.closing.set(true);
      void animation.finished.then(
        () => {
          if (this.closeAnimation !== animation) return;
          this.closeAnimation = undefined;
          this.closing.set(false);
          this.finishClose();
          animation.cancel();
        },
        () => {
          /* Cancellation when reopening, resizing or switching missions. */
        },
      );
      return;
    }
    this.cancelCloseAnimation();
    this.finishClose();
  }

  private finishClose(): void {
    const dialog = this.dialog()?.nativeElement;
    if (!dialog?.open && !this.desktopOpen) {
      this.open.set(false);
      this.clearSelection();
      this.restoreScroll();
      return;
    }
    if (dialog?.open) dialog.close();
    if (this.desktopOpen) {
      this.desktopOpen = false;
      dialog?.hidePopover();
    }
    this.onMapClosed();
  }

  private cancelCloseAnimation(): void {
    const animation = this.closeAnimation;
    this.closeAnimation = undefined;
    this.closing.set(false);
    animation?.cancel();
  }

  protected onMapClosed(): void {
    this.cancelCloseAnimation();
    this.open.set(false);
    this.clearSelection();
    this.restoreScroll();
    if (this.returnFocus) this.trigger()?.nativeElement.focus({ preventScroll: true });
  }

  protected onPopoverToggle(event: Event): void {
    if ((event as ToggleEvent).newState === 'closed' && this.desktopOpen) {
      this.desktopOpen = false;
      this.onMapClosed();
    }
  }

  protected onMapKeydown(event: KeyboardEvent): void {
    event.stopPropagation();
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMap();
    }
  }

  protected outsideMap(event: PointerEvent): void {
    if (!this.desktopOpen || !(event.target instanceof Node)) return;
    if (this.element.nativeElement.contains(event.target)) return;
    this.closeMap(false);
  }

  protected cancelMap(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.closeMap();
  }

  protected dismissBackdrop(event: MouseEvent): void {
    const dialog = this.dialog()?.nativeElement;
    if (event.target !== dialog || !dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      this.closeMap();
  }

  private restoreScroll(): void {
    if (this.previousOverflow === undefined) return;
    this.document.documentElement.style.overflow = this.previousOverflow;
    this.previousOverflow = undefined;
  }

  protected selectKeep(id: KeepId): void {
    this.selectedKeep.update((selected) => (selected === id ? undefined : id));
    this.selectedPoint.set(undefined);
  }
  protected selectPoint(index: number): void {
    this.selectedKeep.set(undefined);
    this.selectedPoint.update((selected) => (selected === index ? undefined : index));
  }

  private clearSelection(): void {
    this.selectedKeep.set(undefined);
    this.selectedPoint.set(undefined);
  }
}
