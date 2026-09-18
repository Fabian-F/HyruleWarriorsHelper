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

@Component({
  imports: [],
  selector: 'hwh-tile-details',
  styleUrl: './tile-details.component.scss',
  templateUrl: './tile-details.component.html',
})
export class TileDetailsComponent {
  readonly tileId = input.required<TileId>();

  private readonly mapContext = inject(MapContext);
  private readonly host = inject(ElementRef<HTMLElement>);

  readonly detailTileWidth = signal(0);

  readonly tile = computed(() => this.mapContext.getTile(this.tileId()));
  readonly imgSrc = computed(() => `map-tiles/${this.mapContext.map()!.id}/${this.tileId()}.png`);

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
