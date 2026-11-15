import type { MapDefinition } from '../../../domain/maps/map.model';

export const terminaMap = {
  id: 'termina',
  name: 'Termina Map',
  difficulty: 'hard',
  extras: 'Extra weapon drops',
  tiles: [
    {
      id: 'A1',
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'mask',
          level: '4',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-trickster-mask' },
            text: 'Fairy Headwear - Trickster Mask',
            location: 'Southwest Keep',
            keepId: 'southwest-keep',
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
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Get to the troops before the others do! Lv.7',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'trident',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ganondorf',
            location: 'South Field Keep',
            keepId: 'south-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-moons-aura' },
            text: "Fairy Decoration - Moon's Aura",
            location: 'Hilltop Keep',
          keepId: 'hilltop-keep',
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
            weaponId: 'trident',
          },
        ],
      },
    },
    {
      id: 'A3',
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.7',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitId: 'bunny-hood-costume',
            outfitName: 'Bunny Hood Costume',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'sheik',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the pointy dead end east of the Eastern Room.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Defeat the barrier specialist forces!',
      difficulty: 'red',
      rewards: {
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located on the cliff north of East Field Keep accessible via Hookshot.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
          },
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
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Final battle! Defeat the Demon King of the moon!',
      difficulty: 'red',
      rewards: {
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'link',
            location: 'South Field Keep',
            keepId: 'south-field-keep',
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
      isFinalBoss: true,
    },
    {
      id: 'B3',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.9',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitId: 'fierce-diety-link-costume',
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: "Adventure Battle: Yesterday's foes are today's allies!",
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'dominion-rod',
          level: '4',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-fierce-diety-facepaint' },
            text: 'Fairy Decoration - Fierce Diety Facepaint',
            location: 'North Square',
            keepId: 'north-square',
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
      battleAreaId: 'ganons-tower',
      challenge: 'Challenge Battle: Win the KO competition! Lv.9',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'lana',
            outfitId: 'skull-kids-clothes',
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
      battleAreaId: 'ganons-tower',
      challenge: 'Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do! Lv.2',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitId: 'odolwas-remains-costume',
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
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Defeat the ocean beast!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located beside a tree found just southwest of the Statue Keep.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.5',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'toon-link',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'termina-e4' },
            text: 'My Fairy - Water',
            location: 'West Keep',
            keepId: 'west-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'bottled-water' },
            text: 'Fairy Food - Bottled Water',
            location: 'East Keep [Pot]',
            keepId: 'east-keep',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Guard the allied keeps with your life! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Rouse the troops with encouraging words!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'valley-of-seers',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.7',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'ocarina',
          level: '4',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the bay!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'goddess-blade',
          level: '4',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'ember-seeds' },
            text: 'Fairy Food - Ember Seeds',
            location: 'West Keep [Pot]',
            keepId: 'west-keep',
          },
        ],
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
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.3',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitId: 'era-of-the-hero-of-time-armor',
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
      battleAreaId: 'gerudo-desert',
      keepNameOverrides: { 'south-settlement': "Enemy Base" },
      challenge: 'Adventure Battle: Help those in need!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
            content: { kind: 'fairy-clothing', clothingId: 'bottom-ranch-skirt' },
            text: 'Fairy Bottom - Ranch Skirt',
            location: 'N. Settlement',
            keepId: 'north-settlement',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'meat' },
            text: 'Fairy Food - Meat',
            location: 'Enemy Base [Pot]',
            keepId: 'south-settlement',
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
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Get to those troops before the others do! Lv.5',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'demon-blade',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ghirahim',
            location: 'Southeast Tree',
            keepId: 'southeast-tree',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'meat' },
            text: 'Fairy Food - Meat',
            location: 'Southern Tree [Pot]',
            keepId: 'southern-tree',
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
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Defeat 700 enemies before the Rogue Forces do! Lv.4',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitId: 'kokiri-tunic-costume',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Final battle! Defeat the dragon of the temple!',
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
            occurrenceId: 'heart-container-1',
            characterId: 'wizzro',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the southwest corner of the large field north of the Castle Keep.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
        status: 'unrestricted',
      },
    },
    {
      id: 'G2',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Get to those troops before the others do! Lv.3',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'great-fairy',
          level: '4',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-postman-hat' },
            text: 'Fairy Headwear - Postman Hat',
            location: 'Stone Square',
            keepId: 'stone-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'mystery-seeds' },
            text: 'Fairy Food - Mystery Seeds',
            location: 'Stock Room [Pot]',
            keepId: 'stock-room',
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
            weaponId: 'great-fairy',
          },
        ],
      },
    },
    {
      id: 'G3',
      battleAreaId: 'skyloft',
      challenge: "Adventure Battle: Beware the ghost's blade!",
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'naginata',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'impa',
            location: 'Academy Keep',
            keepId: 'academy-keep',
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
            weaponId: 'giant-blade',
          },
        ],
      },
    },
    {
      id: 'G4',
      battleAreaId: 'valley-of-seers',
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
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: FIght through the mask quiz! Lv.2',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'fi',
            outfitId: 'stone-mask-costume',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Get to those troops before the others do! Lv.4',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'scepter',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'cia',
            location: 'Southeast Keep',
            keepId: 'southeast-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-bunny-hood' },
            text: 'Fairy Headwear - Bunny Hood',
            location: 'Southwest Keep',
            keepId: 'southwest-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'chateau-romani' },
            text: 'Fairy Food - Chateau Romani',
            location: 'Temple Entrance [Pot]',
            keepId: 'temple-entrance',
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
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'hammer',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'darunia',
            location: 'Temple Face Keep',
            keepId: 'temple-face-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-deku-dress' },
            text: 'Fairy Top - Deku Dress',
            location: "King's Hall",
            keepId: 'kings-hall',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hot-spring-water' },
            text: 'Fairy Food - Hot Spring Water',
            location: 'East Room [Pot]',
            keepId: 'east-room',
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Defeat 700 enemies before the Rogue Forces do! ! Lv.2',
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
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Win the KO competition! Lv.5',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zant',
            outfitId: 'troupe-leaders-mask-costume',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.2',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Defeat 700 enemies before the Rogue Forces do! Lv.3',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: The Cucco army rises once more!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
            content: { kind: 'fairy-clothing', clothingId: 'top-ranch-top' },
            text: 'Fairy Top - Ranch Top',
            location: 'Southwest Keep',
            keepId: 'southwest-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'pegasus-seeds' },
            text: 'Fairy Food - Pegasus Seeds',
            location: 'Hall of Time [Pot]',
            keepId: 'hall-of-time',
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
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.6',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'cia',
            outfitId: 'majoras-mask-costume',
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
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Defeat the forest dragon!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'epona',
          level: '4',
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
            occurrenceId: 'heart-piece-1',
            characterId: 'link',
            location: 'West Square',
            keepId: 'west-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-deku-tiara' },
            text: 'Fairy Headwear - Deku Tiara',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
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
            weaponId: 'epona',
          },
        ],
      },
    },
    {
      id: 'I1',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Will you fall, or will you bloom?',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'lana',
            outfitId: 'deku-mask-costume',
            outfitName: 'Deku Mask Costume',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'volga',
            location: 'Lower Level East',
            keepId: 'lower-level-east',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'accessory-snowhead-necklace' },
            text: 'Fairy Accessory - Snowhead Necklace',
            location: 'Upper Level East',
            keepId: 'upper-level-east',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hot-spring-water' },
            text: 'Fairy Food - Hot Spring Water',
            location: 'North Palace [Pot]',
            keepId: 'north-palace',
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
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.5',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Enjoy this house of horrors!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'midna',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'termina-i3' },
            text: 'My Fairy - Lightning',
            location: 'Central Keep [Pot]',
            keepId: 'central-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'scent-seeds' },
            text: 'Fairy Food - Scent Seeds',
            location: 'Rocky Square [Pot]',
            keepId: 'rocky-square',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
            content: { kind: 'fairy-clothing', clothingId: 'bottom-balloon-shorts' },
            text: 'Fairy Bottom - Balloon Shorts',
            location: 'North Oasis',
            keepId: 'north-oasis',
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
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Win the KO competition! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.3',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'sheik',
            outfitId: 'era-of-the-hero-of-time-outfit',
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
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.2',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Fight through the mask quiz! Lv.1',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'darunia',
            outfitId: 'goron-mask-costume',
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Win the KO competition! Lv.4',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Get to those troops before the others do! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
            content: { kind: 'fairy-clothing', clothingId: 'top-forest-top' },
            text: 'Fairy Top - Forest Top',
            location: 'East Keep',
            keepId: 'east-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'chateau-romani' },
            text: 'Fairy Food - Chateau Romani',
            location: 'West Ruins [Pot]',
            keepId: 'west-ruins',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.1',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'impa',
            outfitId: 'era-of-the-hero-of-time-outfit',
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
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.2',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ruto',
            outfitId: 'zora-mask-costume',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Use diversionary tactics to defeat the enemy! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'agitha',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-ranch-skirt' },
            text: 'Fairy Bottom - Ranch Skirt',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'pegasus-seeds' },
            text: 'Fairy Food - Pegasus Seeds',
            location: 'South Field Keep [Pot]',
            keepId: 'south-field-keep',
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
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Defeat 700 enemies before the Rogue Forces do! Lv.1',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'impa',
            outfitId: 'mask-of-truth-costume',
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
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.4',
      difficulty: 'purple',
      rewards: {
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located on a cliff north of the Rogue Base accessible via Hookshot.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.2',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'agitha',
            outfitId: 'don-geros-mask-costume',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Win the KO competition! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Search the battlefield for wandering enemies!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located along the north wall of the large open area north of West Square.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
      id: 'K6',
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Get to those troops before the others do! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ganondorf',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'termina-k7' },
            text: 'My Fairy - Fire',
            location: 'East Goron Keep',
            keepId: 'east-goron-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'ember-seeds' },
            text: 'Fairy Food - Ember Seeds',
            location: 'East Keep [Pot]',
            keepId: 'east-keep',
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
      battleAreaId: 'lake-hylia',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.4',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'hyrule-field',
      challenge: "Adventure Battle: Don't ignore the messenger!",
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'wizzro',
            outfitId: 'captains-hat-costume',
            outfitName: "Captain's Hat Costume",
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'wizzro',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-happiness-tiara' },
            text: 'Fairy Headwear - Happiness Tiara',
            location: 'East Field Keep',
            keepId: 'east-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'gale-seeds' },
            text: 'Fairy Food - Gale Seeds',
            location: 'Central Keep [Pot]',
            keepId: 'central-keep',
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
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.3',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.4',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'temple-of-souls',
      challenge: 'Challenge Battle: Win the KO competition! Lv.7',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'faron-woods',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the swamp!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located along the north wall of the large open area north of West Square.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five or more keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
          },
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Final battle! Defeat the dragon of the valley!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
            occurrenceId: 'heart-piece-1',
            characterId: 'link',
            location: 'Central Square',
            keepId: 'central-square',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              "KO 1000 enemies. Located on the outside wall of the southern exit of King's Hall.",
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.2',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'midna',
            outfitId: 'ordon-shield-costume',
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
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: Fight as a warrior of water!',
      difficulty: 'blue',
      rewards: {
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located inside the East Garden along the southern wall.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
          },
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Challenge Battle: Win the KO competition! Lv.8',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.8',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitId: 'era-of-the-hero-of-time-robes',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Send the ghosts packing!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'baton',
          level: '4',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'bottled-water' },
            text: 'Fairy Food - Bottled Water',
            location: 'Fairy Fountain [Pot]',
            keepId: 'fairy-fountain',
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
            weaponId: 'baton',
          },
        ],
      },
    },
    {
      id: 'M7',
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Guard the allied keeps with your life! Lv.1',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'sheik',
            outfitId: 'kafeis-mask-costume',
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
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Win the keep-capturing competition! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'harp',
          level: '4',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-postman-hat' },
            text: 'Fairy Headwear - Postman Hat',
            location: 'East Keep',
            keepId: 'east-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'scent-seeds' },
            text: 'Fairy Food - Scent Seeds',
            location: 'East Keep [Pot]',
            keepId: 'east-keep',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.1',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'mirror',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'twili-midna',
            location: 'Central Keep',
            keepId: 'central-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'accessory-snowhead-necklace' },
            text: 'Fairy Accessory - Snowhead Necklace',
            location: 'N. Settlement',
            keepId: 'north-settlement',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'rock-sirloin' },
            text: 'Fairy Food - Rock Sirloin',
            location: 'North Oasis [Pot]',
            keepId: 'north-oasis',
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.5',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'volga',
            outfitId: 'giants-mask-costume',
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
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Sword-fighting practice!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'dragon-spear',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'volga',
            location: 'East Goron Keep',
            keepId: 'east-goron-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-ranch-top' },
            text: 'Fairy Top - Ranch Top',
            location: 'West Goron Keep',
            keepId: 'west-goron-keep',
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the castle!',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ghirahim',
            outfitId: 'kamaros-mask-costume',
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
            occurrenceId: 'heart-container-1',
            characterId: 'midna',
            location: 'West Square',
            keepId: 'west-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-bunny-hood' },
            text: 'Fairy Headwear - Bunny Hood',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
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
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Use diversionary tactics to defeat the enemy! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'zora-scale',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ruto',
            location: 'E. Mountain Keep',
            keepId: 'east-mountain-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-deku-tiara' },
            text: 'Fairy Headwear - Deku Tiara',
            location: 'West Keep',
            keepId: 'west-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'gale-seeds' },
            text: 'Fairy Food - Gale Seeds',
            location: 'West Keep [Pot]',
            keepId: 'west-keep',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Lurking treachery, lurking shadows!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'ring',
          level: '4',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-happiness-dress' },
            text: 'Fairy Top - Happiness Dress',
            location: 'South Square',
            keepId: 'south-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'rock-sirloin' },
            text: 'Fairy Food - Rock Sirloin',
            location: 'Central Square [Pot]',
            keepId: 'central-square',
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
      battleAreaId: 'temple-of-souls',
      challenge: 'Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do! Lv.1',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'temple-of-souls',
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
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the canyon!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located in the dead end north of West Square.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 1200 enemies without losing 40% health. It is located on the cliff in the dead end west of Fairy Fountain, accessible via Hookshot.',
          },
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Get to those troops before the others do! Lv.6',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'summoning-gate',
          level: '4',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'mystery-seeds' },
            text: 'Fairy Food - Mystery Seeds',
            location: 'Sacred Pedestal [Pot]',
            keepId: 'sacred-pedestal',
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
            weaponId: 'summoning-gate',
          },
        ],
      },
    },
  ],
} satisfies MapDefinition;
