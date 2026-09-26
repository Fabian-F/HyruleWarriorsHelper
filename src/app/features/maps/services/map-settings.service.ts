import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

export type PositionLabelMode = 'column-row' | 'row-column';

@Injectable()
export class MapSettingsService {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  readonly showBlockades = computed(() => this.params().get('blockades') !== 'false');
  readonly showDifficulties = computed(() => this.params().get('difficulties') === 'true');
  readonly showPositions = computed(() => {
    const value = this.params().get('positions');
    return value === 'true' || value === 'column-row' || value === 'row-column';
  });
  readonly positionLabelMode = computed<PositionLabelMode>(() => {
    // Keep existing links with the combined positions parameter working.
    const mode = this.params().get('positionOrder') ?? this.params().get('positions');
    return mode === 'row-column' ? 'row-column' : 'column-row';
  });

  setShowBlockades(shown: boolean): Promise<boolean> {
    return this.setParameter('blockades', shown ? null : 'false');
  }

  setShowDifficulties(shown: boolean): Promise<boolean> {
    return this.setParameter('difficulties', shown ? 'true' : null);
  }

  setShowPositions(shown: boolean): Promise<boolean> {
    return this.setPositionSettings(shown, this.positionLabelMode());
  }

  setPositionLabelMode(mode: PositionLabelMode): Promise<boolean> {
    return this.setPositionSettings(this.showPositions(), mode);
  }

  private setPositionSettings(shown: boolean, mode: PositionLabelMode): Promise<boolean> {
    return this.setParameters({
      positions: shown ? 'true' : null,
      positionOrder: mode === 'row-column' ? mode : null,
    });
  }

  private setParameter(key: string, value: string | null): Promise<boolean> {
    return this.setParameters({ [key]: value });
  }

  private setParameters(queryParams: Record<string, string | null>): Promise<boolean> {
    return this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      preserveFragment: true,
      replaceUrl: true,
    });
  }
}
