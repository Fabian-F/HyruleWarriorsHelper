import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { mapMetadata } from '../../../../data/maps/map-metadata';
import type { RewardLocation } from '../../../../domain/characters/character-rewards';
import { getRewardSearchParams, getWeaponSearchParams } from '../map-links';
import type { WeaponId } from '../../../../domain/weapon.model';

@Component({
  selector: 'hwh-reward-location-link',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let spot = location();
    @if (spot.type === 'legend') {
      <a [routerLink]="['/legend', spot.missionId]">{{
        kind() === 'map' ? 'Legend Mode' : spot.missionName
      }}</a>
    } @else if (kind() === 'map') {
      <a [routerLink]="['/maps', spot.mapId]" [queryParams]="searchParams()">{{ mapName() }}</a>
    } @else {
      <a
        class="tile-link"
        [routerLink]="['/maps', spot.mapId, spot.tileId]"
        [attr.aria-label]="mapName() + ', tile ' + spot.tileId"
        >{{ label() ?? spot.tileId }}</a
      >
    }
  `,
  styles: `
    :host {
      display: contents;
    }
    a {
      color: var(--accent-gold);
    }
    .tile-link {
      white-space: nowrap;
      font-family: var(--font-jetbrains-mono), monospace;
    }
    a:focus-visible {
      outline: 2px solid var(--accent-gold);
      outline-offset: 2px;
    }
  `,
})
export class RewardLocationLinkComponent {
  readonly location = input.required<RewardLocation>();
  readonly kind = input<'map' | 'tile'>('map');
  readonly label = input<string>();
  readonly weaponId = input<WeaponId>();
  readonly mapName = computed(() => {
    const spot = this.location();
    if (spot.type === 'legend') return 'Legend Mode';
    const id = spot.mapId;
    return mapMetadata.find((map) => map.id === id)?.name ?? id;
  });
  readonly searchParams = computed(() => {
    const weaponId = this.weaponId();
    return weaponId
      ? getWeaponSearchParams(weaponId)
      : getRewardSearchParams(this.location().reward);
  });
}
