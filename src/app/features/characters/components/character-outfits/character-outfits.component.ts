import { RewardLocationLinkComponent } from '../reward-location-link.component';
import { OutfitGalleryController } from './outfit-gallery-controller';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  signal,
  viewChild,
  type ElementRef,
} from '@angular/core';
import type { CharacterId } from '../../../../../domain/character.model';
import type { CharacterOutfitView } from '../../../../../domain/characters/characters-page';
import { getOutfitSrc } from '../../../../shared/assets';

@Component({
  selector: 'hwh-character-outfits',
  imports: [RewardLocationLinkComponent],
  templateUrl: './character-outfits.component.html',
  styleUrl: './character-outfits.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterOutfitsComponent {
  private readonly viewport = viewChild<ElementRef<HTMLElement>>('viewport');
  private readonly gallery = viewChild<ElementRef<HTMLElement>>('gallery');
  readonly characterId = input.required<CharacterId>();
  readonly outfits = input.required<readonly CharacterOutfitView[]>();
  readonly rewardsLoaded = input(false);
  protected readonly galleryController = new OutfitGalleryController(
    () => this.viewport()?.nativeElement,
    () => this.gallery()?.nativeElement,
    () => this.outfits().length,
  );
  readonly collapsedHeight = this.galleryController.collapsedHeight;
  readonly columns = this.galleryController.columns;
  readonly expanded = this.galleryController.expanded;
  readonly previewLimit = computed(() => this.columns());
  readonly visibleOutfits = computed(() =>
    this.galleryController.renderedExpanded()
      ? this.outfits()
      : this.outfits().slice(0, this.previewLimit() * 2),
  );
  readonly hasMore = computed(() => this.outfits().length > this.previewLimit());
  readonly outfitSrc = getOutfitSrc;
  readonly missingImages = signal<ReadonlySet<string>>(new Set());

  constructor() {
    effect(() => {
      this.characterId();
      this.galleryController.reset();
    });
    effect(() => {
      this.characterId();
      this.outfits();
      this.missingImages.set(new Set());
    });
  }

  toggleGallery(): void {
    this.galleryController.toggleGallery();
  }

  hideMissingImage(src: string): void {
    this.missingImages.update((missing) => new Set([...missing, src]));
  }
}
