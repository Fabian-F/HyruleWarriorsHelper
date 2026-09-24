import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

export type PositionLabelMode = 'off' | 'column-row' | 'row-column';

@Injectable()
export class MapSettingsService {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  readonly showBlockades = computed(() => this.params().get('blockades') !== 'false');
  readonly showDifficulties = computed(() => this.params().get('difficulties') === 'true');
  readonly showPositions = computed<PositionLabelMode>(() => {
    const mode = this.params().get('positions');
    return mode === 'column-row' || mode === 'row-column' ? mode : 'off';
  });

  setShowBlockades(shown: boolean): Promise<boolean> {
    return this.setParameter('blockades', shown ? null : 'false');
  }

  setShowDifficulties(shown: boolean): Promise<boolean> {
    return this.setParameter('difficulties', shown ? 'true' : null);
  }

  setShowPositions(mode: PositionLabelMode): Promise<boolean> {
    return this.setParameter('positions', mode === 'off' ? null : mode);
  }

  private setParameter(key: string, value: string | null): Promise<boolean> {
    return this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { [key]: value },
      queryParamsHandling: 'merge',
      preserveFragment: true,
      replaceUrl: true,
    });
  }
}
