import { Pipe, type PipeTransform } from '@angular/core';
import { formatTileId, type TileNotation } from '../../../domain/maps/tile-notation';
import type { TileId } from '../../../domain/maps/tile.model';

@Pipe({ name: 'tileNotation', pure: true })
export class TileNotationPipe implements PipeTransform {
  transform(id: TileId, notation: TileNotation): string {
    return formatTileId(id, notation);
  }
}
