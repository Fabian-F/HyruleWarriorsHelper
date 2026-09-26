import type { MapDefinition } from '../../../domain/maps/map.model';

export const terminaMap = {
  id: 'termina',
  name: 'Termina Map',
  difficulty: 'hard',
  extras: 'Extra weapon drops',
  tiles: [
    {
      id: 'A1',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'young-link',
          weaponName: 'Mask Lv.4',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Headwear - Trickster Mask',
            location: 'Southwest Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'deku-stick',
          target: {
            row: 8,
            column: 13,
          },
        },
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 3,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'young-link',
          },
        ],
      },
    },
    {
      id: 'A2',
      challenge:
        'Adventure Battle: Get to the troops before the others do! Lv.7',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'ganondorf',
          weaponName: 'Trident Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'ganondorf',
            location: 'South Field Keep',
          },
          {
            type: 'fairy',
            text: "Fairy Decoration - Moon's Aura",
            location: 'Hilltop Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 8,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'ganondorf',
            weapon: 'Trident',
          },
        ],
      },
    },
    {
      id: 'A3',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.7',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitName: 'Bunny Hood Costume',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'sheik',
            location: 'Fairy Fountain',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the pointy dead end east of the Eastern Room.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'zelda',
          },
          {
            characterId: 'sheik',
          },
        ],
      },
    },
    {
      id: 'B1',
      challenge: 'Adventure Battle: Defeat the barrier specialist forces!',
      difficulty: 'red',
      rewards: {
        skulltulas: [
          'KO 1000 enemies. Located on the cliff north of East Field Keep accessible via Hookshot.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'B2',
      challenge:
        'Adventure Battle: Final battle! Defeat the Demon King of the moon!',
      difficulty: 'red',
      rewards: {
        treasure: [
          {
            type: 'heart-container',
            characterId: 'link',
            location: 'South Field Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east', 'south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'B3',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.9',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitName: 'Fierce Diety Link Costume',
          },
          {
            type: 'item-card',
            itemCardId: 'majoras-mask',
          },
          {
            type: 'item-card',
            itemCardId: 'goron-mask',
          },
        ],
      },
      requirements: {
        damage: 199,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 1,
            column: 7,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'link',
          },
          {
            characterId: 'darunia',
          },
        ],
      },
    },
    {
      id: 'C1',
      challenge: "Adventure Battle: Yesterday's foes are today's allies!",
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'zelda',
          weaponName: 'Dominion Rod Lv.4',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Decoration - Fierce Diety Facepaint',
            location: 'North Square',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 10,
            column: 1,
          },
        },
        {
          itemCardId: 'deku-stick',
          target: {
            row: 9,
            column: 4,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'C2',
      challenge: 'Challenge Battle: Win the KO competition! Lv.9',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'lana',
            outfitName: "Skull Kid's Clothes",
          },
          {
            type: 'item-card',
            itemCardId: 'inverted-song-of-time',
          },
          {
            type: 'item-card',
            itemCardId: 'deku-stick',
          },
        ],
      },
      requirements: {
        kills: 1600,
        damage: 199,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 2,
            column: 1,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'C3',
      challenge:
        'Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do! Lv.2',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitName: "Odolwa's Remains Costume",
          },
          {
            type: 'item-card',
            itemCardId: 'song-of-time',
          },
          {
            type: 'item-card',
            itemCardId: 'deku-stick',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 0,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'D7',
      challenge: 'Adventure Battle: Defeat the ocean beast!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'fi',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'giant',
          },
          {
            type: 'item-card',
            itemCardId: 'deku-stick',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located beside a tree found just southwest of the Statue Keep.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'zora-mask',
          target: {
            row: 8,
            column: 6,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'E4',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.5',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'My Fairy - Water',
            location: 'West Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Bottled Water',
            location: 'East Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'zora-mask',
          target: {
            row: 3,
            column: 5,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'E5',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zant',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'mask-of-truth',
          },
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'zora-mask',
          target: {
            row: 5,
            column: 4,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'E6',
      challenge: 'Challenge Battle: Rouse the troops with encouraging words!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tetra',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'inverted-song-of-time',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'zora-mask',
          target: {
            row: 8,
            column: 6,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'E7',
      challenge: 'Adventure Battle: Rouse the troops with encouraging words!',
      difficulty: 'orange',
      rewards: {},
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'zora-mask',
          target: {
            row: 7,
            column: 12,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'F2',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.7',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'skull-kid',
          weaponName: 'Ocarina Lv.4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'zora-mask',
          },
        ],
      },
      requirements: {
        damage: 149,
      },
      blockades: ['east'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 6,
            column: 13,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'skull-kid',
          },
        ],
      },
    },
    {
      id: 'F3',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the bay!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'fi',
          weaponName: 'Goddess Blade Lv.4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'zora-mask',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 9,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'fi',
          },
        ],
      },
    },
    {
      id: 'F4',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.3',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitName: 'Era of the Hero of Time Armor',
          },
          {
            type: 'item-card',
            itemCardId: 'majoras-mask',
          },
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'goron-mask',
          target: {
            row: 3,
            column: 14,
          },
        },
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 3,
            column: 12,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'ganondorf',
          },
          {
            characterId: 'tetra',
          },
        ],
      },
    },
    {
      id: 'F5',
      challenge: 'Adventure Battle: Help those in need!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'fi',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ice-arrow',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Bottom - Ranch Skirt',
            location: 'N. Settlement',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Meat',
            location: 'Enemy Base [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'F6',
      challenge:
        'Adventure Battle: Get to those troops before the others do! Lv.5',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'ghirahim',
          weaponName: 'Demon Blade Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'ghirahim',
            location: 'Southeast Tree',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Meat',
            location: 'Southern Tree [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['east'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 8,
            column: 6,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'ghirahim',
          },
        ],
      },
    },
    {
      id: 'F7',
      challenge:
        'Challenge Battle: Defeat 700 enemies before the Rogue Forces do! Lv.4',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitName: 'Kokiri Tunic Costume',
          },
          {
            type: 'item-card',
            itemCardId: 'zora-mask',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 13,
          },
        },
        {
          itemCardId: 'zora-mask',
          target: {
            row: 8,
            column: 3,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'link',
          },
          {
            characterId: 'fi',
          },
        ],
      },
    },
    {
      id: 'G1',
      challenge:
        'Adventure Battle: Final battle! Defeat the dragon of the temple!',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'item-card',
            itemCardId: 'giant',
          },
          {
            type: 'item-card',
            itemCardId: 'goron-mask',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'wizzro',
            location: 'Fairy Fountain',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the southwest corner of the large field north of the Castle Keep.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'G2',
      challenge:
        'Adventure Battle: Get to those troops before the others do! Lv.3',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'fairy',
          text: 'Great Fairy Lv.4 - Link',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Headwear - Postman Hat',
            location: 'Stone Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Mystery Seeds',
            location: 'Stock Room [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['east', 'south', 'west'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 0,
            column: 3,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'link',
            weapon: 'Great Fairy',
          },
        ],
      },
    },
    {
      id: 'G3',
      challenge: "Adventure Battle: Beware the ghost's blade!",
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'impa',
          weaponName: 'Naginata Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'impa',
            location: 'Academy Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east', 'south'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 12,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'impa',
            weapon: 'Giant Blade',
          },
        ],
      },
    },
    {
      id: 'G4',
      challenge: 'Challenge Battle: Win the KO competition! Lv.6',
      difficulty: 'orange',
      rewards: {},
      requirements: {
        kills: 1200,
        damage: 149,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'zora-mask',
          target: {
            row: 7,
            column: 3,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'G5',
      challenge: 'Challenge Battle: FIght through the mask quiz! Lv.2',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'fi',
            outfitName: 'Stone Mask Costume',
          },
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 149,
      },
      blockades: ['south'],
      quizAnswers: ['impa', 'ghirahim', 'wizzro'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 8,
            column: 7,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'tetra',
          },
          {
            characterId: 'toon-link',
          },
        ],
      },
    },
    {
      id: 'G6',
      challenge:
        'Adventure Battle: Get to those troops before the others do! Lv.4',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'cia',
          weaponName: 'Scepter Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'cia',
            location: 'Southeast Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Bunny Hood',
            location: 'Southwest Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Chateau Romani',
            location: 'Temple Entrance [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'west'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 8,
            column: 5,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'cia',
          },
        ],
      },
    },
    {
      id: 'G8',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'darunia',
          weaponName: 'Hammer Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'darunia',
            location: 'Temple Face Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Deku Dress',
            location: "King's Hall",
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hot Spring Water',
            location: 'East Room [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 3,
            column: 7,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'darunia',
          },
        ],
      },
    },
    {
      id: 'H1',
      challenge:
        'Challenge Battle: Defeat 700 enemies before the Rogue Forces do! ! Lv.2',
      difficulty: 'purple',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['east'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'H2',
      challenge: 'Challenge Battle: Win the KO competition! Lv.5',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zant',
            outfitName: "Troupe Leader's Mask Costume",
          },
          {
            type: 'item-card',
            itemCardId: 'deku-mask',
          },
        ],
      },
      requirements: {
        kills: 1200,
        damage: 149,
      },
      blockades: ['east', 'west'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 7,
            column: 13,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'zant',
          },
          {
            characterId: 'tingle',
          },
        ],
      },
    },
    {
      id: 'H3',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.2',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tetra',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goron-mask',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['south', 'west'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'H4',
      challenge:
        'Challenge Battle: Defeat 700 enemies before the Rogue Forces do! Lv.3',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'impa',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'majoras-mask',
          },
          {
            type: 'item-card',
            itemCardId: 'ice-arrow',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'H5',
      challenge: 'Adventure Battle: The Cucco army rises once more!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ghirahim',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ice-arrow',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Ranch Top',
            location: 'Southwest Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Pegasus Seeds',
            location: 'Hall of Time [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'ghirahim',
          },
        ],
      },
    },
    {
      id: 'H6',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.6',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'cia',
            outfitName: "Majora's Mask Costume",
          },
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['east'],
      search: [
        {
          itemCardId: 'deku-mask',
          target: {
            row: 5,
            column: 5,
          },
        },
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 3,
            column: 12,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'cia',
          },
        ],
      },
    },
    {
      id: 'H8',
      challenge: 'Adventure Battle: Defeat the forest dragon!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'link',
          weaponName: 'Horse Lv.4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-mask',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'link',
            location: 'West Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Deku Tiara',
            location: 'Fairy Fountain',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'deku-mask',
          target: {
            row: 8,
            column: 5,
          },
        },
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 2,
            column: 3,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'link',
            weapon: 'Epona',
          },
        ],
      },
    },
    {
      id: 'I1',
      challenge: 'Adventure Battle: Will you fall, or will you bloom?',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'lana',
            outfitName: 'Deku Mask Costume',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'volga',
            location: 'Lower Level East',
          },
          {
            type: 'fairy',
            text: 'Fairy Accessory - Snowhead Necklace',
            location: 'Upper Level East',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hot Spring Water',
            location: 'North Palace [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 6,
            column: 12,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'lana',
          },
          {
            characterId: 'volga',
          },
        ],
      },
    },
    {
      id: 'I2',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.5',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'lana',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'mask-of-truth',
          },
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        damage: 149,
      },
      blockades: ['west'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'sheik',
          },
          {
            characterId: 'tingle',
          },
        ],
      },
    },
    {
      id: 'I3',
      challenge: 'Adventure Battle: Enjoy this house of horrors!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'midna',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'My Fairy - Lightning',
            location: 'Central Keep [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Scent Seeds',
            location: 'Rocky Square [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'goron-mask',
          target: {
            row: 7,
            column: 13,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'I4',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'linkle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        damage: 99,
      },
      blockades: ['north', 'west'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'I5',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'linkle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Bottom - Balloon Shorts',
            location: 'North Oasis',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'I6',
      challenge: 'Challenge Battle: Win the KO competition! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ruto',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        kills: 1200,
        damage: 149,
      },
      blockades: ['north', 'west'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'I7',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'king-daphnes',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'song-of-time',
          },
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'I8',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.3',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'sheik',
            outfitName: 'Era of the Hero of Time Outfit',
          },
          {
            type: 'item-card',
            itemCardId: 'mask-of-truth',
          },
        ],
      },
      requirements: {
        damage: 149,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 2,
            column: 12,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'sheik',
          },
          {
            characterId: 'tingle',
          },
        ],
      },
    },
    {
      id: 'J1',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.2',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'cia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ice-arrow',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'J2',
      challenge: 'Challenge Battle: Fight through the mask quiz! Lv.1',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'darunia',
            outfitName: 'Goron Mask Costume',
          },
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      quizAnswers: ['zelda', 'agitha', 'midna'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 3,
            column: 2,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'darunia',
          },
          {
            characterId: 'wizzro',
          },
        ],
      },
    },
    {
      id: 'J3',
      challenge: 'Challenge Battle: Win the KO competition! Lv.4',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'agitha',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ice-arrow',
          },
        ],
      },
      requirements: {
        kills: 1200,
        damage: 149,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'agitha',
          },
        ],
      },
    },
    {
      id: 'J4',
      challenge:
        'Adventure Battle: Get to those troops before the others do! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tingle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Forest Top',
            location: 'East Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Chateau Romani',
            location: 'West Ruins [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'J5',
      challenge:
        'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'young-link',
        },
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: [],
      fullTileSearch: {
        itemCardId: 'giant',
        description: 'Use all four giants to reach the final squares.',
      },
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'J6',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.1',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'impa',
            outfitName: 'Era of the Hero of Time Outfit',
          },
        ],
      },
      requirements: {
        damage: 99,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 8,
            column: 4,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'J7',
      challenge:
        'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.2',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ruto',
            outfitName: 'Zora Mask Costume',
          },
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 8,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'J8',
      challenge:
        'Adventure Battle: Use diversionary tactics to defeat the enemy! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'agitha',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Bottom - Ranch Skirt',
            location: 'Fairy Fountain',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Pegasus Seeds',
            location: 'South Field Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'K1',
      challenge:
        'Challenge Battle: Defeat 700 enemies before the Rogue Forces do! Lv.1',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'impa',
            outfitName: 'Mask of Truth Costume',
          },
          {
            type: 'item-card',
            itemCardId: 'inverted-song-of-time',
          },
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 2,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'impa',
          },
          {
            characterId: 'zant',
          },
        ],
      },
    },
    {
      id: 'K2',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.4',
      difficulty: 'purple',
      rewards: {
        skulltulas: [
          'KO 1000 enemies. Located on a cliff north of the Rogue Base accessible via Hookshot.',
          'Complete the first mission and KO 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['east'],
      search: [
        {
          itemCardId: 'goron-mask',
          target: {
            row: 4,
            column: 4,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'K3',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.2',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'agitha',
            outfitName: "Don Gero's Mask Costume",
          },
          {
            type: 'item-card',
            itemCardId: 'mask-of-truth',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      blockades: ['east', 'south'],
      search: [
        {
          itemCardId: 'goron-mask',
          target: {
            row: 7,
            column: 13,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'agitha',
          },
          {
            characterId: 'king-daphnes',
          },
        ],
      },
    },
    {
      id: 'K4',
      challenge: 'Challenge Battle: Win the KO competition! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'sheik',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        kills: 1000,
        damage: 99,
      },
      blockades: ['north', 'east'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'K5',
      challenge:
        'Adventure Battle: Search the battlefield for wandering enemies!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located along the north wall of the large open area north of West Square.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'K6',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'skull-kid',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'mask-of-truth',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 99,
      },
      blockades: ['north', 'east', 'south'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'K7',
      challenge:
        'Adventure Battle: Get to those troops before the others do! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ganondorf',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'My Fairy - Fire',
            location: 'East Goron Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Ember Seeds',
            location: 'East Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'deku-mask',
          target: {
            row: 7,
            column: 10,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'K8',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.1',
      difficulty: 'yellow',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'deku-mask',
          target: {
            row: 5,
            column: 11,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'L1',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.4',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'king-daphnes',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ice-arrow',
          },
        ],
      },
      requirements: {
        damage: 149,
      },
      blockades: ['south'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'L2',
      challenge: "Adventure Battle: Don't ignore the messenger!",
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'wizzro',
            outfitName: "Captain's Hat Costume",
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'wizzro',
            location: 'Fairy Fountain',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Happiness Tiara',
            location: 'East Field Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Gale Seeds',
            location: 'Central Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north', 'east', 'west'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 8,
            column: 7,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'wizzro',
          },
          {
            characterId: 'cia',
          },
        ],
      },
    },
    {
      id: 'L3',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.3',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tingle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'inverted-song-of-time',
          },
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: ['east', 'west'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'L4',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.4',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'skull-kid',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'majoras-mask',
          },
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: ['west'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'L5',
      challenge: 'Challenge Battle: Win the KO competition! Lv.7',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zelda',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ice-arrow',
          },
        ],
      },
      requirements: {
        kills: 1600,
        damage: 199,
      },
      blockades: ['east', 'south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'L6',
      challenge: 'Challenge Battle: Win the KO competition! Lv.3',
      difficulty: 'yellow',
      rewards: {},
      requirements: {
        kills: 1200,
        damage: 149,
      },
      blockades: ['north', 'west'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'L7',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-mask',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'L8',
      challenge:
        'Adventure Battle: Final battle! Defeat the beast of the swamp!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zant',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'giant',
          },
          {
            type: 'item-card',
            itemCardId: 'deku-mask',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located along the north wall of the large open area north of West Square.',
          'Complete the first mission and capture five or more keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east'],
      search: [
        {
          itemCardId: 'goron-mask',
          target: {
            row: 5,
            column: 11,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'M1',
      challenge:
        'Adventure Battle: Final battle! Defeat the dragon of the valley!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'young-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goron-mask',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'link',
            location: 'Central Square',
          },
        ],
        skulltulas: [
          "KO 1000 enemies. Located on the outside wall of the southern exit of King's Hall.",
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'deku-mask',
          target: {
            row: 8,
            column: 10,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'M2',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.2',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'midna',
            outfitName: 'Ordon Shield Costume',
          },
          {
            type: 'item-card',
            itemCardId: 'inverted-song-of-time',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['south', 'west'],
      search: [
        {
          itemCardId: 'goron-mask',
          target: {
            row: 4,
            column: 13,
          },
        },
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 7,
            column: 2,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'midna',
          },
          {
            characterId: 'skull-kid',
          },
        ],
      },
    },
    {
      id: 'M3',
      challenge: 'Adventure Battle: Fight as a warrior of water!',
      difficulty: 'blue',
      rewards: {
        skulltulas: [
          'KO 1000 enemies. Located inside the East Garden along the southern wall.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        damage: 199,
      },
      blockades: ['north', 'east', 'west'],
      search: [
        {
          itemCardId: 'deku-stick',
          target: {
            row: 5,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'M4',
      challenge: 'Challenge Battle: Win the KO competition! Lv.8',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'lana',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goron-mask',
          },
        ],
      },
      requirements: {
        kills: 1600,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'zora-mask',
          target: {
            row: 4,
            column: 9,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'M5',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.8',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitName: 'Era of the Hero of Time Robes',
          },
          {
            type: 'item-card',
            itemCardId: 'majoras-mask',
          },
        ],
      },
      requirements: {
        damage: 199,
      },
      blockades: ['east', 'west'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 3,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'zelda',
          },
        ],
      },
    },
    {
      id: 'M6',
      challenge: 'Adventure Battle: Send the ghosts packing!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'zelda',
          weaponName: 'Baton Lv.4',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Food - Bottled Water',
            location: 'Fairy Fountain [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'deku-mask',
          target: {
            row: 6,
            column: 10,
          },
        },
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 3,
            column: 2,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'zelda',
            weapon: 'Baton',
          },
        ],
      },
    },
    {
      id: 'M7',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.1',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'sheik',
            outfitName: "Kafei's Mask Costume",
          },
          {
            type: 'item-card',
            itemCardId: 'inverted-song-of-time',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 6,
            column: 2,
          },
        },
        {
          itemCardId: 'zora-mask',
          target: {
            row: 9,
            column: 6,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'sheik',
          },
          {
            characterId: 'tingle',
          },
        ],
      },
    },
    {
      id: 'M8',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'sheik',
          weaponName: 'Harp Lv.4',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Headwear - Postman Hat',
            location: 'East Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Scent Seeds',
            location: 'East Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 10,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'sheik',
          },
        ],
      },
    },
    {
      id: 'N1',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.1',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'twili-midna',
          weaponName: 'Mirror Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'twili-midna',
            location: 'Central Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Accessory - Snowhead Necklace',
            location: 'N. Settlement',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Rock Sirloin',
            location: 'North Oasis [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 6,
            column: 6,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'twili-midna',
          },
        ],
      },
    },
    {
      id: 'N3',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.5',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'volga',
            outfitName: "Giant's Mask Costume",
          },
          {
            type: 'item-card',
            itemCardId: 'inverted-song-of-time',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 8,
            column: 11,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'volga',
          },
          {
            characterId: 'linkle',
          },
        ],
      },
    },
    {
      id: 'N4',
      challenge: 'Adventure Battle: Sword-fighting practice!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'volga',
          weaponName: 'Dragon Spear Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'volga',
            location: 'East Goron Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Ranch Top',
            location: 'West Goron Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 4,
            column: 13,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'N5',
      challenge:
        'Adventure Battle: Final battle! Defeat the beast of the castle!',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ghirahim',
            outfitName: "Kamaro's Mask Costume",
          },
          {
            type: 'item-card',
            itemCardId: 'deku-stick',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'midna',
            location: 'West Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Bunny Hood',
            location: 'Fairy Fountain',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east', 'south', 'west'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 3,
            column: 2,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'N6',
      challenge:
        'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'twili-midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-mask',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'N7',
      challenge:
        'Adventure Battle: Use diversionary tactics to defeat the enemy! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'ruto',
          weaponName: 'Zora Scale Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'ruto',
            location: 'E. Mountain Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Deku Tiara',
            location: 'West Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Gale Seeds',
            location: 'West Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 2,
            column: 4,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'ruto',
          },
        ],
      },
    },
    {
      id: 'O3',
      challenge: 'Adventure Battle: Lurking treachery, lurking shadows!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'wizzro',
          weaponName: 'Ring Lv.4',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Happiness Dress',
            location: 'South Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Rock Sirloin',
            location: 'Central Square [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 4,
            column: 6,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'wizzro',
          },
        ],
      },
    },
    {
      id: 'O4',
      challenge:
        'Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do! Lv.1',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zelda',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'zora-mask',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'deku-stick',
          target: {
            row: 7,
            column: 13,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'O5',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.6',
      difficulty: 'blue',
      rewards: {},
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'goron-mask',
          target: {
            row: 3,
            column: 13,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'O6',
      challenge:
        'Adventure Battle: Final battle! Defeat the beast of the canyon!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'darunia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'giant',
          },
          {
            type: 'item-card',
            itemCardId: 'deku-stick',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the dead end north of West Square.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located on the cliff in the dead end west of Fairy Fountain, accessible via Hookshot.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['west'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'P4',
      challenge:
        'Adventure Battle: Get to those troops before the others do! Lv.6',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'lana',
          weaponName: 'Summoning Gate Lv.4',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Food - Mystery Seeds',
            location: 'Sacred Pedestal [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 2,
            column: 8,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'lana',
            weapon: 'Summoning Gate',
          },
        ],
      },
    },
  ],
} satisfies MapDefinition;
