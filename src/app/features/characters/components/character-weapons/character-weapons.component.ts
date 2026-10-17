import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import type { CharacterWeaponView } from '../../../../../domain/characters/characters-page';
import type { WeaponId } from '../../../../../domain/weapon.model';
import { CharacterWeaponComponent } from '../character-weapon/character-weapon.component';

@Component({
  selector: 'hwh-character-weapons',
  imports: [CharacterWeaponComponent],
  templateUrl: './character-weapons.component.html',
  styleUrl: './character-weapons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterWeaponsComponent {
  readonly weapons = input.required<readonly CharacterWeaponView[]>();
  readonly expandedWeapon = input<WeaponId | null>(null);
  readonly linkedWeapon = input<WeaponId | null>(null);
  readonly rewardsLoaded = input(false);
  readonly toggleRequested = output<WeaponId>();
  private readonly gallery = viewChild.required<ElementRef<HTMLElement>>('gallery');
  readonly columns = signal(1);
  readonly rows = computed(() => {
    const weapons = this.weapons();
    const columns = this.columns();
    return Array.from({ length: Math.ceil(weapons.length / columns) }, (_, row) => {
      const items = weapons.slice(row * columns, (row + 1) * columns);
      return { items, selected: items.find((weapon) => weapon.id === this.expandedWeapon()) };
    });
  });

  constructor() {
    afterRenderEffect((onCleanup) => {
      const gallery = this.gallery().nativeElement;
      const update = (width: number) =>
        this.columns.set(width >= 800 ? 4 : width >= 600 ? 3 : width >= 320 ? 2 : 1);
      update(gallery.getBoundingClientRect().width);
      const observer = new ResizeObserver(([entry]) => update(entry.contentRect.width));
      observer.observe(gallery);
      onCleanup(() => observer.disconnect());
    });
  }
}
