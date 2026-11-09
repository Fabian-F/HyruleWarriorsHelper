import { ToolHoverDirective } from '../../directives/tool-hover.directive';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProgressService } from '../../../core/progress.service';
import { TileNotationService } from '../../../core/tile-notation.service';
import { IconComponent } from '../../components/icon/icon.component';
import { countProgress } from '../../../../domain/progress/progress-statistics';
import { formatProgressPercentage } from '../../progress-percentage';
import { mapMetadata } from '../../../../data/maps/map-metadata';
import { characters } from '../../../../data/characters';

@Component({
  selector: 'hwh-progress-menu',
  imports: [ToolHoverDirective, RouterLink, IconComponent],
  template: `
    <details #menu (keydown.escape)="escape($event)">
      <summary hwhToolHover [attr.aria-label]="tooltip()" [title]="tooltip()">
        <span
          class="progress-indicator"
          [class.active]="showRing()"
          [style.--progress-offset]="100 - (currentProgress()?.count?.percent ?? 0)"
          aria-hidden="true"
        >
          <svg class="progress-ring" viewBox="0 0 40 40" focusable="false">
            <circle class="ring-track" cx="20" cy="20" r="17" />
            <circle
              class="ring-fill"
              cx="20"
              cy="20"
              r="17"
              pathLength="100"
              stroke-dasharray="100"
            />
          </svg>
          <span class="percentage">{{ currentProgress()?.percentage ?? '0%' }}</span>
          <hwh-icon class="indicator-checkmark" name="checkmark" />
        </span>
      </summary>
      <div class="panel" role="group" aria-label="Progress tools">
        <h2 class="panel-heading">Progress</h2>
        @if (progress.enabled()) {
          <button
            type="button"
            role="switch"
            [attr.aria-checked]="progress.visible()"
            [disabled]="busy()"
            (click)="toggle()"
          >
            <span>Show progress</span><span class="switch" aria-hidden="true"></span>
          </button>
        } @else {
          <p class="progress-intro">
            You haven't started tracking your progress locally yet. Get started on the Progress
            Page:
          </p>
        }
        <a
          class="page-link"
          routerLink="/progress"
          [queryParams]="notation.linkParams()"
          (click)="close()"
        >
          Go to Progress Page
          @if (progress.compatibility().unresolved.length; as count) {
            <span> ({{ count }} preserved)</span>
          }
        </a>
        @if (progress.enabled()) {
          @if (currentProgress(); as current) {
            <p class="page-progress">
              {{ current.label }}: {{ current.percentage }} ({{ current.count.completed }} /
              {{ current.count.total }})
              @if (!current.isOverall) {
                @if (overallProgress(); as overall) {
                  <span class="overall-progress">
                    Overall progress: {{ overall.percentage }} ({{ overall.count.completed }} /
                    {{ overall.count.total }})
                  </span>
                }
              }
            </p>
          }
          @if (progress.error()) {
            <p role="alert">Changes could not be saved. Open Recorded progress for details.</p>
          }
        }
      </div>
    </details>
  `,
  styleUrl: './progress-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:click)': 'outside($event)' },
})
export class ProgressMenuComponent {
  protected readonly progress = inject(ProgressService);
  protected readonly notation = inject(TileNotationService);
  protected readonly busy = signal(false);
  private readonly router = inject(Router);
  private readonly currentUrl = signal(this.router.url);
  protected readonly overallProgress = computed(() => {
    const index = this.progress.statisticsIndex();
    if (!index) return null;
    const count = countProgress(index.all.keys, this.progress.completed());
    return { count, percentage: formatProgressPercentage(count) };
  });
  protected readonly currentProgress = computed(() => {
    const index = this.progress.statisticsIndex();
    if (!index) return null;
    const segments =
      this.router.parseUrl(this.currentUrl()).root.children['primary']?.segments ?? [];
    const page = segments[0]?.path;
    const id = segments[1]?.path;
    let keys = index.all.keys;
    let label = 'Overall progress';
    const isOverall = !['legend', 'maps', 'characters'].includes(page ?? '');
    if (page === 'legend') {
      keys = index.maps.get('legend')?.keys ?? new Set();
      label = 'Legend Mode progress';
    } else if (page === 'maps') {
      const map = mapMetadata.find((map) => map.id === id);
      keys = map
        ? (index.maps.get(map.id)?.keys ?? new Set())
        : new Set(
            [...index.maps]
              .filter(([id]) => id !== 'legend')
              .flatMap(([, scope]) => [...scope.keys]),
          );
      label = map ? `${map.name} progress` : 'Adventure Maps progress';
    } else if (page === 'characters') {
      const character = characters.find((character) => character.id === id);
      keys = character ? (index.characters.get(character.id)?.keys ?? new Set()) : new Set();
      label = character ? `${character.name} progress` : 'Character progress';
    }
    const count = countProgress(keys, this.progress.completed());
    return { label, count, percentage: formatProgressPercentage(count), isOverall };
  });
  protected readonly showRing = computed(
    () => this.progress.enabled() && this.progress.visible() && this.currentProgress() !== null,
  );
  protected readonly tooltip = computed(() => {
    const current = this.currentProgress();
    return this.showRing() && current
      ? `${current.label}: ${current.percentage} (${current.count.completed} / ${current.count.total})`
      : 'Progress tools';
  });
  private readonly menu = viewChild<ElementRef<HTMLDetailsElement>>('menu');

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.set(event.urlAfterRedirects);
        this.close();
      }
    });
  }
  protected async toggle(): Promise<void> {
    this.busy.set(true);
    try {
      await this.progress.setVisible(!this.progress.visible());
    } finally {
      this.busy.set(false);
    }
  }
  protected outside(event: MouseEvent): void {
    const menu = this.menu()?.nativeElement;
    if (menu && event.target instanceof Node && !menu.contains(event.target)) this.close();
  }
  protected escape(event: Event): void {
    if (!this.menu()?.nativeElement.open) return;
    event.preventDefault();
    event.stopPropagation();
    this.close();
    this.menu()?.nativeElement.querySelector('summary')?.focus();
  }
  protected close(): void {
    const menu = this.menu()?.nativeElement;
    if (menu) menu.open = false;
  }
}
