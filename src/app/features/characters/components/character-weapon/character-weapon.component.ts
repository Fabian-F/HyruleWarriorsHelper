import { RewardLocationLinkComponent } from '../reward-location-link.component';
import { ElementTagComponent } from '../../../../shared/components/element-tag/element-tag.component';
import { SourceLinkComponent } from '../../../../shared/components/source-link/source-link.component';
import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import type { CharacterWeaponView } from '../../../../../domain/characters/characters-page';
import { weaponAttributeNames } from '../../../../../data/weapon-attributes';
import { getWeaponSrc } from '../../../../shared/assets';

@Component({
  selector: 'hwh-character-weapon',
  imports: [RewardLocationLinkComponent, SourceLinkComponent, ElementTagComponent],
  templateUrl: './character-weapon.component.html',
  styleUrl: './character-weapon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterWeaponComponent {
  readonly weaponData = input.required<CharacterWeaponView>({
    alias: 'weapon',
  });
  readonly rewardsLoaded = input(false);
  readonly expanded = input(false);
  readonly toggleRequested = output<void>();
  readonly attributeNames = weaponAttributeNames;
  readonly weaponSrc = getWeaponSrc;
  readonly missingImages = signal<ReadonlySet<string>>(new Set());

  hideMissingImage(src: string): void {
    this.missingImages.update((missing) => new Set([...missing, src]));
  }
}
