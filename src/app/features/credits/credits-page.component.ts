import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'hwh-credits-page',
  imports: [IconComponent],
  templateUrl: './credits-page.component.html',
  styleUrl: './credits-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditsPageComponent {
  readonly discordCopyStatus = signal('');

  async copyDiscordHandle(): Promise<void> {
    try {
      await navigator.clipboard.writeText('peaknecro');
      this.discordCopyStatus.set('Copied');
    } catch {
      this.discordCopyStatus.set('Could not copy. Handle: peaknecro');
    }
  }

  readonly sections = [
    {
      title: 'Data & Guides',
      description: 'The research and shared knowledge behind the game data.',
      entries: [
        {
          name: 'SBAllen’s Unlockable Guide',
          url: 'https://gamefaqs.gamespot.com/3ds/167257-hyrule-warriors-legends/faqs/73095/introduction',
          description:
            'Unlockable locations and requirements, alongside detailed game reference information.',
        },
        {
          name: 'MetroWind’s Extracted Map Data',
          url: 'https://github.com/MetroWind/hyrule-warriors-maps/blob/master/maps.xml',
          description:
            'Structured map data extracted from SBAllen’s guide. Thanks to SBAllen for the original information and MetroWind for making it available in this form.',
        },
        {
          name: 'Community General Resources Spreadsheet',
          url: 'https://docs.google.com/spreadsheets/d/1d6Spep2Qryhi1Om_lY_iLV21DsB-fTsu_0ZNtLIKCyk/edit?gid=1079006819#gid=1079006819',
          description:
            'Community reference data, including weapon information and badge requirements. Thanks to everyone who compiled and maintains these resources.',
        },
        {
          name: 'Folt’s Weapon Guide',
          url: 'https://docs.google.com/spreadsheets/d/1KogyRrLqZRAfmIaZuSWTnCLnm0NSj8yMnGadCNbvZ8I/edit?gid=1959494022#gid=1959494022',
          description:
            'Weapon recommendations and character builds used in the Characters section.',
        },
      ],
    },
    {
      title: 'Images & Assets',
      description: 'The maps, sprites and artwork that bring the reference pages to life.',
      entries: [
        {
          name: 'Metroid_Lover’s Map Guides',
          url: 'https://gamefaqs.gamespot.com/community/Metroid_Lover',
          description: 'Map images and visual guides.',
        },
        {
          name: 'Random Talking Bush - The Spriters Resource',
          url: 'https://www.spriters-resource.com/profile/Random%252bTalking%252bBush/',
          description: 'Extracted game graphics shared through The Spriters Resource.',
        },
        {
          name: 'Zelda Wiki - Costumes',
          url: 'https://zelda.fandom.com/wiki/Costume',
          description: 'Costume images used for outfit rewards.',
        },
        {
          name: 'Official Hyrule Warriors Artwork',
          url: 'https://www.gamecity.ne.jp/zelda/stage/01_01.jpg',
          description: 'Hyrule Field artwork used as the background on the home page.',
        },
      ],
    },
    {
      title: 'Tools & Fonts',
      description: 'The tools, framework and typography used to build this helper.',
      entries: [
        { name: 'Angular', url: 'https://angular.dev/', description: 'The application framework.' },
        {
          name: 'WebStorm',
          url: 'https://www.jetbrains.com/webstorm/',
          description: 'The IDE used for development.',
        },
        {
          name: 'Aseprite',
          url: 'https://www.aseprite.org/',
          description: 'Used for editing images and animations.',
        },
        {
          name: 'Inter',
          url: 'https://fonts.google.com/specimen/Inter',
          description: 'Interface and body text.',
        },
        {
          name: 'JetBrains Mono',
          url: 'https://fonts.google.com/specimen/JetBrains+Mono',
          description: 'Navigation and compact reference labels.',
        },
        {
          name: 'Space Grotesk',
          url: 'https://fonts.google.com/specimen/Space+Grotesk',
          description: 'Page and section headings.',
        },
      ],
    },
  ] as const;
}
