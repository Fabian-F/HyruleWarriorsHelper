import {
  afterNextRender,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import type { TileId } from '../../../../../domain/maps/tile.model';
import { MapContext } from '../../services/map-context.service';
import { getDetailTileWidth } from '../../tile-detail-size';
import { TileHeaderComponent } from './tile-header/tile-header.component';
import { TileMissionComponent } from './tile-mission/tile-mission.component';
import { TileDetailMapComponent } from './tile-detail-map/tile-detail-map.component';
import { TileRewardsComponent } from './tile-rewards/tile-rewards.component';

@Component({
  imports: [
    TileHeaderComponent,
    TileMissionComponent,
    TileDetailMapComponent,
    TileRewardsComponent,
  ],
  selector: 'hwh-tile-details',
  styleUrl: './tile-details.component.scss',
  templateUrl: './tile-details.component.html',
})
export class TileDetailsComponent {
  readonly tileId = input.required<TileId>();

  private readonly mapContext = inject(MapContext);
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly detailTileWidth = signal(0);

  readonly tile = computed(() => this.mapContext.getTile(this.tileId())!);
  readonly mapId = computed(() => this.mapContext.map()!.id);

  constructor() {
    afterNextRender(() => {
      const host = this.host.nativeElement;

      const updateSize = () => {
        this.detailTileWidth.set(getDetailTileWidth(host.clientWidth));
      };

      const resizeObserver = new ResizeObserver(updateSize);

      resizeObserver.observe(host);
      updateSize();

      return () => resizeObserver.disconnect();
    });
  }
}
