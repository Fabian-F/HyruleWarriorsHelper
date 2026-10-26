import { TileNotationPipe } from '../../../shared/pipes/tile-notation.pipe';
import { TileNotationService } from '../../../core/tile-notation.service';
import { RewardLocationLinkComponent } from './reward-location-link.component';
import { inject, ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { RewardLocation } from '../../../../domain/characters/character-rewards';

@Component({
  selector: 'hwh-character-locations',
  imports: [TileNotationPipe, RewardLocationLinkComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      @for (location of locations(); track $index) {
        <li>
          <hwh-reward-location-link [location]="location" />
          <hwh-reward-location-link
            kind="tile"
            [location]="location"
            [label]="
              location.type === 'legend'
                ? location.missionName
                : (location.tileId | tileNotation: notation.mode()) + ' - Tile details'
            "
          />
          <span>{{ location.condition }}</span>
          @if (location.rule) {
            <span>{{ location.rule }}</span>
          }
        </li>
      }
    </ul>
  `,
  styles: `
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem 0.75rem;
      padding: 0.5rem 0;
      font-size: 0.8rem;
      line-height: 1.6;
      overflow-wrap: anywhere;
    }
    li + li {
      border-top: 1px solid var(--surface-border);
    }
    span {
      color: var(--accent-subtle);
    }
  `,
})
export class RewardLocationsComponent {
  readonly notation = inject(TileNotationService);
  readonly locations = input.required<readonly RewardLocation[]>();
}
