import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  output,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import type { TileId } from '../../../../../domain/maps/tile.model';
import { MapFarmingService } from '../../services/map-farming.service';
import { TileFarmingComponent } from './tile-farming/tile-farming.component';
import { MapContext } from '../../services/map-context.service';
import { TileDetailsLayout } from '../../services/tile-details-layout.service';
import { getDetailTileWidth } from '../../tile-detail-size';
import {
  getAdjacentTile,
  getFocusTileWidth,
  getMobileFocusArea,
  type TileDirection,
} from '../map-viewer/map-viewer.transform';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { TileHeaderComponent } from './tile-header/tile-header.component';
import { TileMissionComponent } from './tile-mission/tile-mission.component';
import { TileDetailMapComponent } from './tile-detail-map/tile-detail-map.component';
import { TileRewardsComponent } from './tile-rewards/tile-rewards.component';

@Component({
  imports: [
    NgTemplateOutlet,
    IconComponent,
    TileHeaderComponent,
    TileMissionComponent,
    TileDetailMapComponent,
    TileRewardsComponent,
    TileFarmingComponent,
  ],
  selector: 'hwh-tile-details',
  styleUrl: './tile-details.component.scss',
  templateUrl: './tile-details.component.html',
  host: { '[style.--detail-tile-width.px]': 'detailTileWidth()' },
})
export class TileDetailsComponent {
  readonly tileId = input.required<TileId>();
  readonly closed = output<void>();
  readonly directionSelected = output<TileDirection>();
  readonly layout = inject(TileDetailsLayout);
  private readonly mapContext = inject(MapContext);
  readonly farming = inject(MapFarmingService);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private readonly sheet = viewChild<ElementRef<HTMLElement>>('sheet');
  private readonly scrollContent = viewChild<ElementRef<HTMLElement>>('scrollContent');
  private readonly detailTabContent = viewChild<ElementRef<HTMLElement>>('detailTabContent');

  readonly selectedDetailTab = signal<'rewards' | 'farming'>('rewards');
  readonly activeDetailTab = computed(() =>
    this.showFarming() ? this.selectedDetailTab() : 'rewards',
  );
  readonly detailTileWidth = signal(0);
  private readonly availableHeight = computed(() =>
    Math.max(0, this.layout.viewportHeight() - this.layout.toolbarBottom()),
  );
  readonly compactSheetHeight = computed(() => Math.min(280, this.availableHeight() / 2));
  readonly sheetHeight = computed(() =>
    this.layout.expanded() ? this.availableHeight() : this.compactSheetHeight(),
  );
  readonly mapAreaHeight = computed(() =>
    Math.max(0, this.availableHeight() - this.layout.compactSheetHeight()),
  );
  readonly tile = computed(() => this.mapContext.getTile(this.tileId())!);
  readonly navigation = computed(() => {
    const navigation = this.layout.navigation();
    return navigation?.to === this.tileId() ? navigation : undefined;
  });
  readonly outgoingTile = computed(() => {
    const navigation = this.navigation();
    return navigation ? this.mapContext.getTile(navigation.from) : undefined;
  });
  readonly mapId = computed(() => this.mapContext.map()!.id);
  readonly farmingLocations = computed(() =>
    this.farming.getLocations(this.mapId(), this.tileId()),
  );
  readonly showFarming = computed(
    () =>
      this.farming.loading() || this.farming.unavailable() || this.farmingLocations().length > 0,
  );
  readonly directions: readonly { direction: TileDirection; rotation: number; label: string }[] = [
    { direction: 'left', rotation: 180, label: 'Tile to the left' },
    { direction: 'up', rotation: -90, label: 'Tile above' },
    { direction: 'down', rotation: 90, label: 'Tile below' },
    { direction: 'right', rotation: 0, label: 'Tile to the right' },
  ];
  private dragStart: { id: number; y: number } | undefined;
  private suppressGripClick = false;
  private collapseTouch: { id: number; x: number; y: number } | undefined;
  private wheelGesture:
    { lastTime: number; canCollapse: boolean; handled: boolean; distance: number } | undefined;
  private panelSwipe: { id: number; x: number; y: number } | undefined;

  constructor() {
    afterNextRender(() => {
      const update = () => {
        const host = this.host.nativeElement;
        const area = getMobileFocusArea(
          { width: host.clientWidth, height: this.layout.viewportHeight() },
          this.layout.toolbarBottom(),
          this.layout.compactSheetHeight(),
        );
        this.detailTileWidth.set(
          this.layout.mobile() ? getFocusTileWidth(area) : getDetailTileWidth(host.clientWidth),
        );
        const sheet = this.sheet()?.nativeElement;
        if (sheet) {
          this.layout.sheetHeight.set(sheet.getBoundingClientRect().height);
        }
      };
      const observer = new ResizeObserver(update);
      observer.observe(this.host.nativeElement);
      const observeChildren = effect(
        () => {
          const elements = [this.sheet()];
          observer.disconnect();
          observer.observe(this.host.nativeElement);
          for (const element of elements) if (element) observer.observe(element.nativeElement);
          untracked(update);
        },
        { injector: this.injector },
      );
      update();
      this.destroyRef.onDestroy(() => {
        observeChildren.destroy();
        observer.disconnect();
        this.layout.sheetHeight.set(0);
      });
    });
    effect(() => {
      if (this.layout.mobile()) this.layout.compactSheetHeight.set(this.compactSheetHeight());
    });
    effect(() => {
      this.tileId();
      const content = this.scrollContent()?.nativeElement;
      if (content) content.scrollTop = 0;
    });
    effect(() => {
      this.tileId();
      this.activeDetailTab();
      const content = this.detailTabContent()?.nativeElement;
      if (content) content.scrollTop = 0;
    });
    effect(() => {
      const mobile = this.layout.mobile();
      const height = this.layout.viewportHeight();
      const top = this.layout.toolbarBottom();
      const bottom = this.layout.compactSheetHeight();
      untracked(() => {
        if (mobile)
          this.detailTileWidth.set(
            getFocusTileWidth(
              getMobileFocusArea(
                { width: this.host.nativeElement.clientWidth, height },
                top,
                bottom,
              ),
            ),
          );
      });
    });
  }

  onDetailTabKeydown(event: KeyboardEvent): void {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === 'Home'
        ? 'rewards'
        : event.key === 'End'
          ? 'farming'
          : this.activeDetailTab() === 'rewards'
            ? 'farming'
            : 'rewards';
    this.selectedDetailTab.set(next);
    if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.querySelector<HTMLButtonElement>(`[data-detail-tab="${next}"]`)?.focus();
    }
  }

  canNavigate(direction: TileDirection): boolean {
    return !!getAdjacentTile(this.mapContext.map()!.tiles, this.tileId(), direction);
  }

  toggleExpanded(): void {
    if (this.suppressGripClick) {
      this.suppressGripClick = false;
      return;
    }
    this.layout.expanded.update((expanded) => !expanded);
  }

  onPanelDown(event: PointerEvent): void {
    if (this.layout.expanded() || event.button !== 0 || this.panelSwipe) return;
    const target = event.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea')) return;
    this.panelSwipe = { id: event.pointerId, x: event.clientX, y: event.clientY };
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }

  onPanelMove(event: PointerEvent): void {
    if (this.dragStart?.id === event.pointerId) {
      const delta = event.clientY - this.dragStart.y;
      if (Math.abs(delta) >= 16) {
        event.preventDefault();
        this.layout.expanded.set(delta < 0);
        this.suppressGripClick = true;
      }
      return;
    }
    const start = this.panelSwipe;
    if (!start || start.id !== event.pointerId) return;
    const up = start.y - event.clientY;
    const horizontal = Math.abs(event.clientX - start.x);
    if (up >= 16 && up > horizontal * 1.2) {
      event.preventDefault();
      this.layout.expanded.set(true);
    }
  }

  onPanelUp(event: PointerEvent): void {
    if (this.panelSwipe?.id === event.pointerId) this.panelSwipe = undefined;
  }

  onContentTouchStart(event: TouchEvent): void {
    const content = this.scrollContent()?.nativeElement;
    this.collapseTouch = undefined;
    if (
      !this.layout.expanded() ||
      event.touches.length !== 1 ||
      !content ||
      content.scrollTop > 0 ||
      !content.contains(event.target as Node)
    )
      return;
    const touch = event.touches[0];
    this.collapseTouch = { id: touch.identifier, x: touch.clientX, y: touch.clientY };
  }

  onContentTouchMove(event: TouchEvent): void {
    const start = this.collapseTouch;
    if (!start || event.touches.length !== 1) {
      this.collapseTouch = undefined;
      return;
    }
    const touch = event.touches[0];
    if (touch.identifier !== start.id) return;
    const down = touch.clientY - start.y;
    const horizontal = Math.abs(touch.clientX - start.x);
    if (down < -8 || horizontal > Math.max(8, Math.abs(down))) {
      this.collapseTouch = undefined;
      return;
    }
    if (down > 0) event.preventDefault();
    if (down >= 24 && down > horizontal * 1.2) {
      this.layout.expanded.set(false);
      this.collapseTouch = undefined;
    }
  }

  onContentTouchEnd(): void {
    this.collapseTouch = undefined;
  }

  onPanelWheel(event: WheelEvent): void {
    if (event.ctrlKey || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    const content = this.scrollContent()?.nativeElement;
    if (!this.wheelGesture || event.timeStamp - this.wheelGesture.lastTime > 180) {
      this.wheelGesture = {
        lastTime: event.timeStamp,
        canCollapse:
          this.layout.expanded() &&
          event.deltaY < 0 &&
          !!content &&
          content.scrollTop <= 0 &&
          content.contains(event.target as Node),
        handled: false,
        distance: 0,
      };
    }
    const gesture = this.wheelGesture;
    gesture.lastTime = event.timeStamp;
    if (gesture.handled) return;
    if (!this.layout.expanded() && event.deltaY > 0) {
      event.preventDefault();
      this.layout.expanded.set(true);
      gesture.handled = true;
    } else if (gesture.canCollapse && event.deltaY < 0) {
      event.preventDefault();
      gesture.distance +=
        Math.abs(event.deltaY) *
        (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? this.availableHeight() : 1);
      if (gesture.distance >= 24) {
        this.layout.expanded.set(false);
        gesture.handled = true;
      }
    }
  }

  onGripDown(event: PointerEvent): void {
    if (event.button !== 0 || this.dragStart) return;
    this.suppressGripClick = false;
    this.dragStart = { id: event.pointerId, y: event.clientY };
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }

  onGripUp(event: PointerEvent): void {
    if (!this.dragStart || this.dragStart.id !== event.pointerId) return;
    const delta = event.clientY - this.dragStart.y;
    this.dragStart = undefined;
    if (event.type === 'pointerup' && Math.abs(delta) >= 32) {
      this.layout.expanded.set(delta < 0);
      this.suppressGripClick = true;
    }
  }
}
