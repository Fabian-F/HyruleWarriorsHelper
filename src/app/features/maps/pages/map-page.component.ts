import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input,
  resource,
  viewChild,
} from '@angular/core';
import type { MapId } from '../../../../domain/maps/map.model';
import { loadMap } from '../../../../domain/maps/map-loader';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MapViewerComponent } from '../components/map-viewer/map-viewer.component';
import type { TileId } from '../../../../domain/maps/tile.model';
import { MapContext } from '../services/map-context.service';
import { filter, map, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { TileDetailsComponent } from '../components/tile-details/tile-details.component';
import { TileDetailsLayout } from '../services/tile-details-layout.service';
import type { TileDirection } from '../components/map-viewer/map-viewer.transform';
import { MapSearchService } from '../services/map-search.service';
import { MapSettingsService } from '../services/map-settings.service';
import { MapToolbarComponent } from '../components/map-toolbar/map-toolbar.component';

@Component({
  selector: 'hwh-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MapViewerComponent, MapToolbarComponent],
  providers: [MapContext, MapSettingsService, MapSearchService, TileDetailsLayout],
})
export class MapPageComponent {
  readonly search = inject(MapSearchService);
  readonly mapId = input.required<MapId>();

  readonly layout = inject(TileDetailsLayout);
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly viewer = viewChild(MapViewerComponent);

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly mapContext = inject(MapContext);

  readonly focusedTileId = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => this.getTileIdFromRoute()),
    ),
  );
  readonly mapDefinition = resource({
    params: () => this.mapId(),
    loader: ({ params }) => loadMap(params),
  });

  constructor() {
    this.mapContext.map = this.mapDefinition.value;
    afterNextRender(() => {
      const update = () => {
        this.layout.mobile.set(window.matchMedia('(max-width: 1000px)').matches);
        this.layout.viewportHeight.set(
          this.host.nativeElement.querySelector('.map-viewport')?.clientHeight ??
            window.innerHeight,
        );
        const toolbar = this.host.nativeElement.querySelector('hwh-map-toolbar');
        this.layout.toolbarBottom.set((toolbar?.getBoundingClientRect().bottom ?? 0) + 12);
      };
      const resize = new ResizeObserver(update);
      const observe = () => {
        resize.disconnect();
        for (const element of this.host.nativeElement.querySelectorAll(
          'hwh-map-toolbar, .map-viewport',
        ))
          resize.observe(element);
        update();
      };
      const mutations = new MutationObserver(observe);
      mutations.observe(this.host.nativeElement, { childList: true, subtree: true });
      window.addEventListener('resize', update);
      observe();
      this.destroyRef.onDestroy(() => {
        resize.disconnect();
        mutations.disconnect();
        window.removeEventListener('resize', update);
      });
    });
  }

  protected onMapInteraction(): void {
    this.closeTileDetails();
  }

  protected connectTileDetails(component: unknown): void {
    if (!(component instanceof TileDetailsComponent)) return;
    component.closed.subscribe(() => this.closeTileDetails(true));
    component.directionSelected.subscribe((direction: TileDirection) => {
      const tileId = this.focusedTileId();
      if (tileId) this.viewer()?.navigateToAdjacentTile(tileId, direction);
    });
  }

  protected openTileDetails(tileId: TileId, keepPanelHeight = false): void {
    if (!keepPanelHeight) this.layout.expanded.set(false);
    this.router.navigate(['./', tileId], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
      preserveFragment: true,
    });
  }

  protected closeTileDetails(resetPanel = false): void {
    if (!this.focusedTileId()) {
      return;
    }

    this.router
      .navigate(['./'], {
        relativeTo: this.route,
        queryParamsHandling: 'preserve',
        preserveFragment: true,
      })
      .then((closed) => {
        if (closed && resetPanel) this.layout.expanded.set(false);
      });
  }

  private getTileIdFromRoute(): TileId | undefined {
    const child = this.route.snapshot.firstChild;
    const tileId = child?.paramMap.get('tileId');

    return tileId as TileId | undefined;
  }
}
