import { ChangeDetectionStrategy, Component, computed, inject, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { legendMissions } from '../../../data/legend/missions';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { LegendCampaignComponent } from './components/legend-campaign/legend-campaign.component';
import { LegendMissionPanelComponent } from './components/legend-mission-panel/legend-mission-panel.component';
@Component({
  selector: 'hwh-legend-page',
  imports: [IconComponent, LegendCampaignComponent, LegendMissionPanelComponent],
  templateUrl: './legend-page.component.html',
  styleUrl: './legend-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'closeWithEscape($event)' },
})
export class LegendPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly campaign = viewChild.required(LegendCampaignComponent);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  readonly selected = computed(() =>
    legendMissions.find((mission) => mission.id === this.params().get('missionId')),
  );
  closeWithEscape(event: Event) {
    if (!this.selected() || event.defaultPrevented) return;
    event.preventDefault();
    event.stopPropagation();
    this.closePanel();
  }
  closePanel() {
    if (!this.selected()) return;
    void this.router.navigate(['/legend']).then((closed) => {
      if (closed) this.campaign().focusMap();
    });
  }
}
