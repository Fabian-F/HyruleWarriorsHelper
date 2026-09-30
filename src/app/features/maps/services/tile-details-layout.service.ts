import { Injectable, signal } from '@angular/core';
import type { TileId } from '../../../../domain/maps/tile.model';
import type { TileDirection } from '../components/map-viewer/map-viewer.transform';

@Injectable()
export class TileDetailsLayout {
  readonly mobile = signal(false);
  readonly toolbarBottom = signal(0);
  readonly viewportHeight = signal(0);
  readonly sheetHeight = signal(0);
  readonly compactSheetHeight = signal(0);
  readonly expanded = signal(false);
  readonly navigation = signal<{ from: TileId; to: TileId; direction: TileDirection } | undefined>(
    undefined,
  );
}
