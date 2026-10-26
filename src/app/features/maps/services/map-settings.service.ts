import { TileNotationService } from '../../../core/tile-notation.service';
import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class MapSettingsService {
  readonly notation = inject(TileNotationService);
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
  setShowBlockades(shown: boolean): Promise<boolean> {
    return this.setParameter('blockades', shown ? null : 'false');
  }

  setShowDifficulties(shown: boolean): Promise<boolean> {
    return this.setParameter('difficulties', shown ? 'true' : null);
  }

  setShowPositions(shown: boolean): Promise<boolean> {
    return this.setParameter('positions', shown ? 'true' : null);
  }

  private setParameter(key: string, value: string | null): Promise<boolean> {
    return this.setParameters({ [key]: value });
  }

  private setParameters(queryParams: Record<string, string | null>): Promise<boolean> {
    return this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.notation.mapParams(queryParams),
      queryParamsHandling: 'merge',
      preserveFragment: true,
      replaceUrl: true,
    });
  }
}
