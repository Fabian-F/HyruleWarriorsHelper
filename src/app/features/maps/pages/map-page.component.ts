import { ChangeDetectionStrategy, Component, inject, input, resource } from '@angular/core';
import type { MapId } from '../../../../domain/maps/map.model';
import { loadMap } from '../../../../domain/maps/map-loader';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MapViewerComponent } from '../components/map-viewer/map-viewer.component';
import type { TileId } from '../../../../domain/maps/tile.model';
import { MapContext } from '../services/map-context.service';
import { filter, map, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'hwh-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MapViewerComponent],
  providers: [MapContext],
})
export class MapPageComponent {
  readonly mapId = input.required<MapId>();

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
  }

  protected openTileDetails(tileId: TileId): void {
    this.router.navigate(['./', tileId], {
      relativeTo: this.route,
    });
  }

  protected closeTileDetails(): void {
    if (!this.focusedTileId()) {
      return;
    }

    this.router.navigate(['./'], {
      relativeTo: this.route,
    });
  }

  private getTileIdFromRoute(): TileId | undefined {
    const child = this.route.snapshot.firstChild;
    const tileId = child?.paramMap.get('tileId');

    return tileId as TileId | undefined;
  }
}
