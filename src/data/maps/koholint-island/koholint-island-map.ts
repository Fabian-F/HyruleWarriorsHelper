import type { MapDefinition } from '../../../domain/maps/map.model';

export const koholintIslandMap = {
  id: 'koholint-island',
  name: 'Koholint Island Map',
  difficulty: 'hero',
  extras: 'Extra drops based on active Siren power',
  tiles: [
    {
      id: 'A1',
      challenge:
        'Adventure Battle: Final battle! Defeat the dragon of Turtle Rock!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'young-link',
          weaponName: 'Mask Lv.4+',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'thunder-drum',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'young-link',
            location: 'Stock Room',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Dreamer Top',
            location: 'South Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Water Fruit',
            location: 'Exit Square [Pot]',
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
          itemCardId: 'power-bracelet-3',
          target: {
            row: 4,
            column: 11,
          },
        },
      ],
    },
    {
      id: 'A2',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.13',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'lana',
            outfitName: 'Standard Outfit (Koholint)',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 3,
            column: 3,
          },
        },
      ],
    },
    {
      id: 'A3',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.5',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'toon-link',
            outfitName: 'Standard Outfit (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
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
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 3,
            column: 4,
          },
        },
      ],
    },
    {
      id: 'A4',
      challenge:
        "Adventure Battle: Take on the warriors of Majora's Mask! Lv.1",
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'sheik',
          weaponName: 'Harp Lv.4+',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'sheik',
            location: 'East Goron Keep',
          },
          {
            type: 'fairy',
            text: "Fairy Decoration - Writer's Glasses",
            location: 'West Goron Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Odd Mushroom',
            location: 'East Goron Keep [Pot]',
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
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 7,
            column: 8,
          },
        },
      ],
    },
    {
      id: 'A5',
      challenge: 'Adventure Battle: Defeat the warriors of time! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'skull-kid',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the round area east of S. Desert Keep.',
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
    },
    {
      id: 'A6',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.2',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zant',
            outfitName: 'Standard Outift (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 3,
            column: 3,
          },
        },
      ],
    },
    {
      id: 'B1',
      challenge: 'Challenge Battle: Fight through the musical quiz!',
      difficulty: 'red',
      rewards: {},
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      quizAnswers: ['marin', 'medli', 'skull-kid'],
      search: [],
    },
    {
      id: 'B2',
      challenge: 'Adventure Battle: Rescue the allied forces! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'king-daphnes',
          weaponName: 'Sail Lv.4+',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'king-daphnes',
            location: 'South Mine Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located along the eastern wall of the large room north of the Enemy Base.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 1,
            column: 12,
          },
        },
      ],
    },
    {
      id: 'B3',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'young-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north'],
      search: [],
    },
    {
      id: 'B4',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.4',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'linkle',
          weaponName: 'Boots Lv.2',
        },
        clear: [
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
      blockades: ['east', 'south'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 2,
            column: 12,
          },
        },
      ],
    },
    {
      id: 'B5',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'marin',
        },
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['north'],
      search: [],
    },
    {
      id: 'B6',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'impa',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 99,
      },
      blockades: [],
      search: [],
    },
    {
      id: 'C1',
      challenge: 'Challenge Battle: Defeat 1,000 enemies in time!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ganondorf',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [],
    },
    {
      id: 'C2',
      challenge: 'Adventure Battle: Cleft in twain! A detachment cuts through!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'fi',
          weaponName: 'Goddess Blade Lv.4+',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'fi',
            location: 'South Field Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Decoration - Dreamer Aura',
            location: 'Hilltop Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Mushroom Spores',
            location: 'East Field Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east', 'south'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 7,
            column: 10,
          },
        },
      ],
    },
    {
      id: 'C3',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.2',
      difficulty: 'green',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['north'],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'C4',
      challenge: 'Challenge Battle: Defeat 500 enemies in time!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tingle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['south', 'west'],
      search: [],
    },
    {
      id: 'C5',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.1',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'character',
            characterId: 'marin',
          },
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['north', 'east', 'south'],
      search: [],
    },
    {
      id: 'C6',
      challenge:
        'Adventure Battle: Final battle! Defeat the dragon of the hill!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'volga',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'full-moon-cello',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located on the cliff found west of the Fairy Fountain, accessible via Hookshot.',
          'Complete the first mission and capture five or more enemy keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['north'],
      search: [],
    },
    {
      id: 'D1',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.10',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'darunia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
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
          itemCardId: 'magic-powder',
          target: {
            row: 3,
            column: 3,
          },
        },
      ],
    },
    {
      id: 'D2',
      challenge: 'Adventure Battle: Defeat the warriors of Skyloft! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'marin',
        },
        skulltulas: [
          'KO 1000 enemies. Located in the northeast corner of the unnamed square room northwest of West Keep.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['south', 'west'],
      search: [],
    },
    {
      id: 'D3',
      challenge:
        'Adventure Battle: Final battle! Defeat the beast of Bottle Grotto!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'marin',
          weaponName: 'Bell Lv.2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'conch-horn',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'marin',
            location: 'Mountain Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Bow-Wow Headband',
            location: 'South Field Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Mystery Seeds',
            location: 'South Field Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 3,
            column: 1,
          },
        },
      ],
    },
    {
      id: 'D4',
      challenge: 'Challenge Battle: Fight through the legendary warrior quiz!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'lana',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 99,
      },
      blockades: ['east'],
      quizAnswers: ['linkle', 'marin', 'impa'],
      search: [],
    },
    {
      id: 'D5',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['west'],
      search: [],
    },
    {
      id: 'D6',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.1',
      difficulty: 'green',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: [],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'E1',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.3',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'agitha',
            outfitName: 'Standard Outfit (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'magic-powder',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'agitha',
            location: 'Faces Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 2,
            column: 8,
          },
        },
      ],
    },
    {
      id: 'E2',
      challenge: 'Adventure Battle: Defeat the warriors of time! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zelda',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Food - Scent Seeds',
            location: 'S. Entrance Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east'],
      search: [],
    },
    {
      id: 'E3',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.2',
      difficulty: 'yellow',
      rewards: {},
      requirements: {
        minutes: 7,
        damage: 149,
      },
      blockades: [],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'E4',
      challenge: 'Adventure Battle: Final battle! Defeat the lakeside beast!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'marin',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'sea-lily-bell',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Headwear - Pretty Ribbon',
            location: 'Exit Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hot Spring Water',
            location: 'West Square [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['west'],
      search: [],
    },
    {
      id: 'E5',
      challenge: 'Adventure Battle: Defeat the commanders of two armies! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'tetra',
          weaponName: 'Cutlass Lv.4+',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'tetra',
            location: 'Mine Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located on the outer wall to the east of the southern exit of Central Hall (by the cage).',
          'Complete the first mission and defeat 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'power-bracelet-3',
          target: {
            row: 1,
            column: 11,
          },
        },
      ],
    },
    {
      id: 'E6',
      challenge: 'Adventure Battle: Capture the enemy keeps!',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'wizzro',
            outfitName: 'Standard Outfit (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'full-moon-cello',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'wizzro',
            location: 'Dragon Roost',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Toronbo Sun Hat',
            location: 'Jail Watch Keep',
          },
          {
            type: 'fairy',
            text: "Fairy Food - Great Fairy's Tears",
            location: 'Star Island Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 3,
            column: 3,
          },
        },
      ],
    },
    {
      id: 'F1',
      challenge: 'Adventure Battle: Fight the chosen ones!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitName: "Hero's Clothes (Koholint)",
          },
          {
            type: 'item-card',
            itemCardId: 'thunder-drum',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'link',
            location: 'Lower Level East',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Egg Dress',
            location: 'Upper Level East',
          },
          {
            type: 'fairy',
            text: "Fairy Food - Great Fairy's Tears",
            location: 'Fairy Fountain [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east', 'west'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 5,
            column: 9,
          },
        },
      ],
    },
    {
      id: 'F2',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.13',
      difficulty: 'red',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: ['south', 'west'],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'F3',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.7',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zant',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north'],
      search: [],
    },
    {
      id: 'F4',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'marin',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [],
    },
    {
      id: 'F5',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.3',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'twili-midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 3,
            column: 13,
          },
        },
      ],
    },
    {
      id: 'F6',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.6',
      difficulty: 'yellow',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'G1',
      challenge: 'Adventure Battle: Cleft in twain! A detachment cuts through!',
      difficulty: 'red',
      rewards: {},
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east', 'west'],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use 8 instruments to clear all nightmares on the map.',
      },
      search: [],
    },
    {
      id: 'G2',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.11',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ganondorf',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [],
    },
    {
      id: 'G3',
      challenge: 'Adventure Battle: Rescue the allied forces! Lv.2',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'young-link',
            outfitName: 'Standard Outfit (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'volga',
            location: 'Fairy Fountain',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Light Fruit',
            location: 'Central Keep [Pot]',
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
          itemCardId: 'magic-powder',
          target: {
            row: 2,
            column: 6,
          },
        },
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 7,
            column: 3,
          },
        },
      ],
    },
    {
      id: 'G4',
      challenge: 'Adventure Battle: Battle the dancing dead!',
      difficulty: 'purple',
      rewards: {},
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'G5',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.8',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'marin',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['east', 'south'],
      search: [],
    },
    {
      id: 'G6',
      challenge: 'Adventure Battle: Rescue the allied forces! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'linkle',
          weaponName: 'Boots Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'conch-horn',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'linkle',
            location: 'W. Boulder Keep',
          },
          {
            type: 'fairy',
            text: 'My Fairy - Light',
            location: 'East Goron Keep [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Light Fruit',
            location: 'East Keep [Pot]',
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
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 7,
            column: 2,
          },
        },
      ],
    },
    {
      id: 'H1',
      challenge: 'Adventure Battle: Fight as a warrior of fire!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitName: 'Standard Robes (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'marin',
            location: 'Lakeside Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the small room east of Central Hall.',
          'Complete the first mission and KO 1200 enemies without losing 40% health). It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east', 'west'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 3,
            column: 10,
          },
        },
      ],
    },
    {
      id: 'H2',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.12',
      difficulty: 'red',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: ['east', 'south'],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'H3',
      challenge: 'Adventure Battle: Defeat the commanders of two armies! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'agitha',
          weaponName: 'Parasol Lv.4+',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'agitha',
            location: 'South Keep',
          },
          {
            type: 'fairy',
            text: "Fairy Top - Prince's Cape",
            location: 'Hall of Time',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hyoi Pear',
            location: 'East Cannon Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 4,
            column: 3,
          },
        },
      ],
    },
    {
      id: 'H4',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.4',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'marin',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['south'],
      search: [],
    },
    {
      id: 'H5',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.5',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'king-daphnes',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'west'],
      search: [
        {
          itemCardId: 'magic-powder',
          target: {
            row: 9,
            column: 7,
          },
        },
      ],
    },
    {
      id: 'H6',
      challenge: 'Adventure Battle: Defeat the commanders of two armies! Lv.3',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'linkle',
          weaponName: 'Boots Lv.4+',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Food - Mystery Seeds',
            location: 'South Garden [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east', 'west'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 2,
            column: 11,
          },
        },
      ],
    },
    {
      id: 'I1',
      challenge: 'Adventure Battle: Defeat enemies and traitors alike! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'midna',
          weaponName: 'Shackle Lv.4+',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'surf-harp',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'midna',
            location: 'Dragon Roost',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Koholint Hibiscus',
            location: 'Jail Watch Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hyoi Pear',
            location: 'Dragon Roost [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['east', 'west'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 7,
            column: 4,
          },
        },
      ],
    },
    {
      id: 'I2',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.6',
      difficulty: 'orange',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['south', 'west'],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'I3',
      challenge:
        'Adventure Battle: Use diversionary tactics to defeat the enemy!',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ghirahim',
            outfitName: 'Standard Outfit (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'ghirahim',
            location: 'Dragon Roost',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Pumpkin',
            location: 'Bomb Shop [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 7,
            column: 8,
          },
        },
      ],
    },
    {
      id: 'I4',
      challenge: 'Challenge Battle: Fight through the vehicle quiz!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zant',
        },
        clear: [
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
      quizAnswers: ['zant', 'agitha', 'twili-midna'],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 5,
            column: 4,
          },
        },
      ],
    },
    {
      id: 'I5',
      challenge: 'Adventure Battle: Defeat the warriors of skyloft! Lv.1',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ghirahim',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'magic-powder',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located north of the Rogue Base near the owl statue.',
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
    },
    {
      id: 'I6',
      challenge: 'Adventure Battle: Final battle! Defeat the cavern beast!',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'tetra',
            outfitName: 'Standard Outfit (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'wind-marimba',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'tetra',
            location: 'East Temple Hall',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Koholint Dress',
            location: 'Southwest Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Greengill',
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
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 7,
            column: 8,
          },
        },
      ],
    },
    {
      id: 'J1',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.10',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'marin',
          weaponName: 'Bell Lv.4+',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'magic-powder',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 3,
            column: 2,
          },
        },
      ],
    },
    {
      id: 'J2',
      challenge: 'Adventure Battle: Fight the heroes of the Wind Waker!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'darunia',
          weaponName: 'Hammer Lv.4+',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'darunia',
            location: 'Southeast Tree',
          },
          {
            type: 'fairy',
            text: 'Fairy Decoration - Koholint Aura',
            location: 'Fairy Fountain',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Odd Mushroom',
            location: 'West Square [Pot]',
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
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 1,
            column: 1,
          },
        },
      ],
    },
    {
      id: 'J3',
      challenge: 'Adventure Battle: Join the Rogue Forces to defeat the enemy!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'marin',
          weaponName: 'Bell Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'marin',
            location: 'Town Entrance',
          },
          {
            type: 'fairy',
            text: "Fairy Bottom - Prince's Trousers",
            location: 'Sacred Pedestal',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Mushroom Spores',
            location: 'South Square [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 8,
            column: 12,
          },
        },
      ],
    },
    {
      id: 'J4',
      challenge: 'Challenge Battle: Defeat all enemies!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'marin',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [],
    },
    {
      id: 'J5',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.9',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'fi',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [],
    },
    {
      id: 'J6',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.3',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ruto',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [],
    },
    {
      id: 'K1',
      challenge: "Challenge Battle: Fight through the women's weapons quiz!",
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'wizzro',
        },
        clear: [
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
      quizAnswers: ['zelda', 'linkle', 'marin'],
      search: [],
    },
    {
      id: 'K2',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.3',
      difficulty: 'orange',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'K3',
      challenge:
        'Adventure Battle: Final battle! Defeat the dragon of the cliff!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'twili-midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'surf-harp',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located just north of the Southwest Square.',
          'Complete the first mission and capture five or more keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1299,
        minutes: 15,
        damage: 149,
      },
      blockades: ['east'],
      search: [],
    },
    {
      id: 'K4',
      challenge: 'Challenge Battle: Defeat 600 enemies in time!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'cia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
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
          itemCardId: 'power-bracelet-3',
          target: {
            row: 4,
            column: 5,
          },
        },
      ],
    },
    {
      id: 'K5',
      challenge: 'Adventure Battle: Defeat the warrriors of Twilight! Lv.1',
      difficulty: 'purple',
      rewards: {},
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'K6',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.8',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zelda',
        },
        clear: [
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
      blockades: [],
      search: [],
    },
    {
      id: 'L1',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.7',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'impa',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [],
    },
    {
      id: 'L2',
      challenge: 'Adventure Battle: Defeat the warriors of Twilight! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'marin',
          weaponName: 'Bell Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'marin',
            location: "King's Hall",
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hot Spring Water',
            location: 'Hall of Mirrors [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 2,
            column: 8,
          },
        },
      ],
    },
    {
      id: 'L3',
      challenge:
        'Adventure Battle: Get to those troops before the others do! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'ruto',
          weaponName: 'Zora Scale Lv.4+',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'magic-powder',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'ruto',
            location: 'S. Entrance Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Elixir Soup',
            location: 'N. Entrance Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north', 'south', 'west'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 4,
            column: 7,
          },
        },
      ],
    },
    {
      id: 'L4',
      challenge:
        'Adventure Battle: Final battle! Defeat the shadow of the grotto!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'skull-kid',
          weaponName: 'Ocarina Lv.4+',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'coral-triangle',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'skull-kid',
            location: 'Faces Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north', 'south', 'west'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 3,
            column: 11,
          },
        },
      ],
    },
    {
      id: 'L5',
      challenge: 'Adventure Battle: Defeat enemies and traitors alike! Lv.1',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'linkle',
          weaponName: 'Boots Lv.4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'sea-lily-bell',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'linkle',
            location: 'Southeast Square',
          },
          {
            type: 'fairy',
            text: "Fairy Headwear - Artist's Beret",
            location: 'North Palace',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Scent Seeds',
            location: 'North Palace [Pot]',
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
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 5,
            column: 0,
          },
        },
      ],
    },
    {
      id: 'L6',
      challenge: 'Adventure Battle: Defeat the warriors of Twilight! Lv.2',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'skull-kid',
            outfitName: 'Standard Outfit (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'marin',
            location: 'East Field Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 8,
            column: 5,
          },
        },
      ],
    },
    {
      id: 'M1',
      challenge:
        'Adventure Battle: Final battle! Defeat the bird of the tower!',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'linkle',
            outfitName: 'Standard Outfit (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'organ-of-evening-calm',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'marin',
            location: 'Central Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Elixir Soup',
            location: 'West Town Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east'],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 3,
            column: 12,
          },
        },
      ],
    },
    {
      id: 'M2',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.12',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'magic-powder',
          target: {
            row: 4,
            column: 15,
          },
        },
      ],
    },
    {
      id: 'M3',
      challenge: 'Adventure Battle: Defeat the enemy forces!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'cia',
            outfitName: 'Masked (Koholint)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitName: 'Unmasked (Koholint)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitName: 'Hatless (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'organ-of-evening-calm',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'cia',
            location: 'West Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Dreamer Bandana',
            location: 'West Ruins',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Greengill',
            location: 'West Ruins [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north', 'south'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 6,
            column: 7,
          },
        },
      ],
    },
    {
      id: 'M4',
      challenge: 'Challenge Battle: Stop the enemy merger! Lv.9',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: ['north'],
      search: [],
    },
    {
      id: 'M5',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.3',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'marin',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 199,
      },
      blockades: ['west'],
      search: [],
    },
    {
      id: 'M6',
      challenge: 'Challenge Battle: Defeat the shuffling forces! Lv.11',
      difficulty: 'blue',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'N1',
      challenge: "Adventure Battle: The kings' armies march on!",
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'link',
          weaponName: 'Gauntlets Lv.4+',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'coral-triangle',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'link',
            location: 'Abandoned Fort',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottom - Dreamer Skirt',
            location: 'North Field Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Light Fruit',
            location: 'West Field Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'power-bracelet-3',
          target: {
            row: 2,
            column: 2,
          },
        },
      ],
    },
    {
      id: 'N2',
      challenge: 'Adventure Battle: Join the Rogue Forces to defeat the enemy!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'lana',
          weaponName: 'Summoning Gate Lv.4+',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'lana',
            location: 'East Field Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Pumpkin',
            location: 'West Field Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 4,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'N3',
      challenge: 'Adventure Battle: A ride on the wild rapids!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitName: 'Standard Outfit (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-3',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'marin',
            location: 'W. Rockface Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located just southwest of the outpost in the northwest corner.',
          'Complete the first mission and defeat 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'grandpa-ulrira',
          target: {
            row: 5,
            column: 2,
          },
        },
      ],
    },
    {
      id: 'N4',
      challenge: 'Adventure Battle: Fight as a warrior of water!',
      difficulty: 'blue',
      rewards: {},
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      fullTileSearch: {
        itemCardGroupId: 'instrument',
        description: 'Use any instrument to banish the nightmare.',
      },
      search: [],
    },
    {
      id: 'N5',
      challenge:
        "Adventure Battle: Take on the warriors of Majora's Mask! Lv.2",
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'sheik',
            outfitName: 'Standard Outfit (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'wind-marimba',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'sheik',
            location: 'Lakeside Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Decoration - Musical Aura',
            location: 'Mine Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Water Fruit',
            location: 'East Room [Pot]',
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
          itemCardId: 'power-bracelet-3',
          target: {
            row: 8,
            column: 1,
          },
        },
      ],
    },
    {
      id: 'N6',
      challenge:
        'Adventure Battle: Get to those troops before the others do! Lv.1',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'tingle',
            outfitName: 'Standard Outfit (Koholint)',
          },
          {
            type: 'item-card',
            itemCardId: 'grandpa-ulrira',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'tingle',
            location: 'Southwest Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the hallway north of East Keep.',
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
          itemCardId: 'power-bracelet-3',
          target: {
            row: 5,
            column: 11,
          },
        },
      ],
    },
  ],
} satisfies MapDefinition;
