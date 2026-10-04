import { ChangeDetectionStrategy, Component, computed, inject, resource } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { enemies } from '../../../../data/enemies';
import type { EnemyId } from '../../../../domain/enemy.model';
import {
  enemyCategories,
  filterEnemies,
  getEnemyFarmingLocations,
  getFarmingGroups,
  getMaterialSlots,
  getRecommendedLocation,
} from '../../../../domain/materials/materials-page';
import { FARMING_LOCATIONS_LOADER } from '../../../core/farming-loader.token';
import { getEnemySrc, getMaterialSrc } from '../../../shared/assets';
import { EnemySidebarComponent } from '../components/enemy-sidebar/enemy-sidebar.component';
import { ElementalWeaknessComponent } from '../components/elemental-weakness/elemental-weakness.component';
import { FarmingLocationsTableComponent } from '../components/farming-locations-table/farming-locations-table.component';
import { FarmingSpotComponent } from '../components/farming-spot/farming-spot.component';

@Component({
  selector: 'hwh-materials-page',
  imports: [
    EnemySidebarComponent,
    FarmingSpotComponent,
    ElementalWeaknessComponent,
    FarmingLocationsTableComponent,
  ],
  templateUrl: './materials-page.component.html',
  styleUrl: './materials-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialsPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly loadLocations = inject(FARMING_LOCATIONS_LOADER);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  private readonly queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });
  readonly farming = resource({ loader: () => this.loadLocations() });
  readonly enemy = computed(
    () => enemies.find((enemy) => enemy.id === this.params().get('enemyId')) ?? enemies[0],
  );
  readonly query = computed(() => this.queryParams().get('q') ?? '');
  readonly category = computed(
    () =>
      enemyCategories.find((category) => category.id === this.queryParams().get('category'))?.id ??
      'all',
  );
  readonly filteredEnemies = computed(() => filterEnemies(this.query(), this.category()));
  readonly materialSlots = computed(() => getMaterialSlots(this.enemy()));
  readonly locations = computed(() =>
    getEnemyFarmingLocations(this.enemy().id, this.farming.hasValue() ? this.farming.value() : []),
  );
  readonly recommended = computed(() => getRecommendedLocation(this.locations()));
  readonly group = computed(
    () =>
      getFarmingGroups(this.locations()).find((group) => group.id === this.queryParams().get('map'))
        ?.id ?? 'all',
  );
  readonly enemySrc = getEnemySrc;
  readonly materialSrc = getMaterialSrc;

  changeQuery(change: { q?: string; category?: string; map?: string }): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        ...change,
        ...('q' in change ? { q: change.q || null } : {}),
        ...('category' in change
          ? { category: change.category === 'all' ? null : change.category }
          : {}),
        ...('map' in change ? { map: change.map === 'all' ? null : change.map } : {}),
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  chooseEnemy(id: EnemyId): void {
    void this.router.navigate(['/materials', id], {
      queryParams: {
        q: this.query() || null,
        category: this.category() === 'all' ? null : this.category(),
      },
    });
  }
}
