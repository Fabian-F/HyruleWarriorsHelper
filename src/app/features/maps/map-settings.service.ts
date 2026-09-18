import { Injectable, signal } from '@angular/core';

export type PositionLabelMode = 'off' | 'column-row' | 'row-column';

@Injectable()
export class MapSettingsService {
  readonly showBlockades = signal(true);
  readonly showDifficulties = signal(false);
  readonly showPositions = signal<PositionLabelMode>('off');
}
