import { ChangeDetectionStrategy, Component, input, resource } from '@angular/core';
import type { MapId } from '../../../../domain/maps/map.model';
import { loadMap } from '../../../../domain/maps/map-loader';
import { MapViewerComponent } from '../components/map-viewer/map-viewer.component';

@Component({
  selector: 'hwh-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MapViewerComponent],
})
export class MapPageComponent {
  mapId = input.required<MapId>();

  mapDefinition = resource({
    params: () => this.mapId(),
    loader: ({ params }) => loadMap(params),
  });
}
