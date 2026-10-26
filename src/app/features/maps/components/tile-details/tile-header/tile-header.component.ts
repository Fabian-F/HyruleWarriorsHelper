import { TileNotationPipe } from '../../../../../shared/pipes/tile-notation.pipe';
import { TileNotationService } from '../../../../../core/tile-notation.service';
import { Component, inject, input } from '@angular/core';
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
  protected readonly notation = inject(TileNotationService);
}
