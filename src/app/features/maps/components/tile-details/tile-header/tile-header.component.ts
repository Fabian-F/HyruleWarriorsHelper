import { TileNotationPipe } from '../../../../../shared/pipes/tile-notation.pipe';
import { TileNotationService } from '../../../../../core/tile-notation.service';
import { Component, computed, inject, input } from '@angular/core';
import { getBattleArea } from '../../../../../../data/battle-areas/battle-areas';
import type { MapTile } from '../../../../../../domain/maps/tile.model';
import { TileReportComponent } from '../tile-report/tile-report.component';

@Component({
  imports: [TileNotationPipe, TileReportComponent],
  selector: 'hwh-tile-header',
  styleUrl: './tile-header.component.scss',
  templateUrl: './tile-header.component.html',
})
export class TileHeaderComponent {
  readonly tile = input.required<MapTile>();
  protected readonly battleArea = computed(() => getBattleArea(this.tile().battleAreaId));
  protected readonly notation = inject(TileNotationService);
}
