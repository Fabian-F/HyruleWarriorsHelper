import type { MapDefinition } from '../../../domain/maps/map.model';

export const greatSeaMap = {
  id: 'great-sea',
  name: 'Great Sea Map',
  difficulty: 'easy',
  tiles: [
    {
      id: 'A1',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Adventure Battle: Final battle! Defeat the dragon of the cavern!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'trident',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'boomerang',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ganondorf',
            location: 'Dragon Roost',
            keepId: 'dragon-roost',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'great-sea-a1' },
            text: 'My Fairy - Darkness',
            location: 'Jail Watch Keep [Pot]',
            keepId: 'jail-watch-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'elixir-soup' },
            text: 'Fairy Food - Elixir Soup',
            location: 'Star Island Keep [Pot]',
            keepId: 'star-island',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 2,
            column: 4,
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
        ],
      },
    },
    {
      id: 'A2',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Lead a raid deep into enemy territory!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'volgas-dragon-spear',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hammer',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: "Great Sea Rule: Don't Get Hit!",
      blockades: ['east'],
      search: [
        {
          itemCardId: 'boomerang',
          target: {
            row: 4,
            column: 12,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'A3',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Strengthen your army and defeat the enemy! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'great-fairy',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'boomerang',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'link',
            location: 'E. Boulder Keep',
            keepId: 'east-boulder-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the dead end found along the path northwest from the Allied Base. Use the hookshot to reach it.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['east', 'south'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 5,
            column: 13,
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
        ],
      },
    },
    {
      id: 'A4',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Adventure Battle: Hustle in the east and bustle in the west!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'mirror',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'twili-midna',
            location: 'South Mine Keep',
            keepId: 'south-mine-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located along the east wall of the large circular room in the middle of the map.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'salvage-arm',
          target: {
            row: 4,
            column: 1,
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
      id: 'A5',
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Pierce through enemy defenses!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'spinner',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'cannon',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-island-aura' },
            text: 'Fairy Decoration - Island Aura',
            location: 'Hilltop Keep',
          keepId: 'hilltop-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hyoi-pear' },
            text: 'Fairy Food - Hyoi Pear',
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
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 9,
            column: 10,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'link',
          },
        ],
      },
    },
    {
      id: 'A6',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.1',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'king-daphness-crown',
        },
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Great Sea Rule: No Item Attacks!',
      blockades: [],
      search: [
        {
          itemCardId: 'heros-bow',
          target: {
            row: 9,
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
      id: 'A7',
      battleAreaId: 'gerudo-desert',
      challenge: 'Adventure Battle: Strengthen your army and defeat the enemy! Lv.4',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'epona',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'windwaker',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the dead end in the southeast corner of the map.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'hyoi-pear',
          target: {
            row: 3,
            column: 1,
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
        ],
      },
    },
    {
      id: 'B1',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Final battle! Defeat the bird of the fortress!',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hammer',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'king-daphnes',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'king-daphnes',
            location: 'Castle Keep',
            keepId: 'castle-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-phantom-horns' },
            text: 'Fairy Headwear - Phantom Horns',
            location: 'Abandoned Fort',
            keepId: 'abandoned-fort',
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
          itemCardId: 'hyoi-pear',
          target: {
            row: 2,
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
      id: 'B2',
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: Strengthen your army and defeat the enemy! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'rutos-scale',
        },
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Great Sea Rule: Double Damage!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'cannon',
          target: {
            row: 3,
            column: 8,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'B3',
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.5',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tetra',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'heros-bow',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      blockades: ['west'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'tetra',
          },
        ],
      },
    },
    {
      id: 'B4',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'sheik',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['west'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'B5',
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: Fight the heroes of the Wind Waker!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'island-outfit',
        },
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Great Sea Rule: No Item Attacks!',
      blockades: [],
      search: [
        {
          itemCardId: 'heros-bow',
          target: {
            row: 9,
            column: 13,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'B6',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Get to those troops before the others do! Lv.5',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'great-swords',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ganondorf',
            location: 'Lower Level East',
            keepId: 'lower-level-east',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'great-sea-b6' },
            text: 'My Fairy - Lightning',
            location: 'North Palace [Pot]',
            keepId: 'north-palace',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'all-purpose-bait' },
            text: 'Fairy Food - All-Purpose Bait',
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
      blockades: ['south'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 5,
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
          },
        ],
      },
    },
    {
      id: 'B7',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Challenge Battle: Fight through the travel memories quiz! Lv.2',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'agitha',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'heros-bow',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north'],
      quizAnswers: ['tetra', 'king-daphnes', 'cia'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 8,
            column: 1,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'agitha',
          },
        ],
      },
    },
    {
      id: 'C1',
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Triumph over the trickster ghost gang!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'majoras-mask',
        },
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Great Sea Rule: No Item Attacks!',
      blockades: ['east'],
      search: [
        {
          itemCardId: 'heros-bow',
          target: {
            row: 2,
            column: 3,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'C2',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Defeat the barrier specialist forces! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'gauntlets',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'windwaker',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'link',
            location: 'West Keep',
            keepId: 'west-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-wind-robe' },
            text: 'Fairy Top - Wind Robe',
            location: 'W. Boulder Keep',
            keepId: 'west-boulder-keep',
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
          itemCardId: 'salvage-arm',
          target: {
            row: 9,
            column: 14,
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
        ],
      },
    },
    {
      id: 'C3',
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Win the KO competition! Lv.6',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zant',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
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
      blockades: ['east'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 7,
            column: 1,
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
        ],
      },
    },
    {
      id: 'C4',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Challenge Battle: Defeat 500 enemies in time! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'young-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
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
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'young-link',
          },
        ],
      },
    },
    {
      id: 'C5',
      battleAreaId: 'valley-of-seers',
      challenge: "Challenge Battle: Fight through the Majora's Mask quiz!",
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tingle',
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
      quizAnswers: ['tingle', 'skull-kid', 'young-link'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'C6',
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.6',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'linkle',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 1,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'linkle',
          },
        ],
      },
    },
    {
      id: 'C7',
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Best the secretive enemies!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'dominion-rod',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'sea-chart',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'zelda',
            location: 'North Field Keep',
            keepId: 'north-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-island-dress' },
            text: 'Fairy Top - Island Dress',
            location: 'East Field Keep',
            keepId: 'east-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'elixir-soup' },
            text: 'Fairy Food - Elixir Soup',
            location: 'West Field Keep [Pot]',
            keepId: 'west-field-keep',
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
          itemCardId: 'deku-leaf',
          target: {
            row: 8,
            column: 13,
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
      id: 'D1',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Adventure Battle: Defeat the allied keeps! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'summoning-gate',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-2',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'lana',
            location: 'NW Sage Keep',
            keepId: 'northwest-sage-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located along the east wall in the large circular area in the middle of the map.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'deku-leaf',
          target: {
            row: 3,
            column: 6,
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
        ],
      },
    },
    {
      id: 'D2',
      battleAreaId: 'gerudo-desert',
      keepNameOverrides: { 'south-settlement': 'Enemy Base' },
      challenge: 'Adventure Battle: Defeat the barrier specialist forces! Lv.4',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'goddess-blade',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'fi',
            location: 'North Oasis',
            keepId: 'north-oasis',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'great-sea-d2' },
            text: 'My Fairy - Light',
            location: 'S. Desert Keep [Pot]',
            keepId: 'south-desert-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'carrot' },
            text: 'Fairy Food - Carrot',
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
      blockades: ['west'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 3,
            column: 2,
          },
        },
        {
          itemCardId: 'power-bracelet-2',
          target: {
            row: 8,
            column: 9,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'fi',
          },
        ],
      },
    },
    {
      id: 'D3',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Crush the spirits of these pesky upstarts!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'lanas-cloak',
        },
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Great Sea Rule: Double Damage!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'cannon',
          target: {
            row: 7,
            column: 2,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'D4',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Fight your way through fire and flames!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'zora-scale',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'heros-bow',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ruto',
            location: 'E. Mountain Keep',
            keepId: 'east-mountain-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located behind a cracked wall found along the west wall of the path between E. Boulder Keep and East Goron Keep.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'deku-leaf',
          target: {
            row: 2,
            column: 12,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'D5',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Challenge Battle: Win the KO competition! Lv.7',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'wizzro',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'cannon',
          },
        ],
      },
      requirements: {
        kills: 1200,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 1,
            column: 1,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'wizzro',
          },
        ],
      },
    },
    {
      id: 'D6',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Fight as a warrior of water!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ghirahim',
        },
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: "Great Sea Rule: Don't Get Hit!",
      blockades: [],
      search: [
        {
          itemCardId: 'boomerang',
          target: {
            row: 3,
            column: 8,
          },
        },
        {
          itemCardId: 'hammer',
          target: {
            row: 9,
            column: 9,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'D7',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.4',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'toon-link',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'boomerang',
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
          itemCardId: 'hammer',
          target: {
            row: 8,
            column: 4,
          },
        },
        {
          itemCardId: 'hyoi-pear',
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
            characterId: 'toon-link',
          },
        ],
      },
    },
    {
      id: 'E1',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'tetras-bandana',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-2',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Great Sea Rule: Double Damage!',
      blockades: [],
      search: [
        {
          itemCardId: 'cannon',
          target: {
            row: 7,
            column: 3,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'E2',
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Strengthen your army and defeat the enemy! Lv.5',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'balloon',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'windwaker',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'tingle',
            location: 'Hall of Time',
            keepId: 'hall-of-time',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located in the giant dead end in the center of the map.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'salvage-arm',
          target: {
            row: 1,
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
      id: 'E3',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Prove your worth on Tingle Island!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'tingles-watch',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'cannon',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: "Great Sea Rule: Don't Get Hit!",
      blockades: ['north'],
      search: [
        {
          itemCardId: 'boomerang',
          target: {
            row: 0,
            column: 3,
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
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.4',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'agitha',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        minutes: 7,
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
      id: 'E5',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Be courageous and protect your keeps!',
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
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'king-daphnes',
            location: 'Crystal Cave',
            keepId: 'crystal-cave',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-farores-aura' },
            text: "Fairy Decoration - Farore's Aura",
            location: 'Stone Square',
            keepId: 'stone-square',
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
      id: 'E6',
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Defeat 500 enemies in time! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'darunia',
        },
      },
      requirements: {
        minutes: 15,
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
      id: 'E7',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Adventure Battle: Final battle! Defeat the dragon of the ruins!',
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
            itemCardId: 'power-bracelet-2',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'king-daphnes',
            location: 'Rock Keep',
            keepId: 'rock-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-island-aura' },
            text: 'Fairy Decoration - Island Aura',
            location: 'SE Sage Keep',
            keepId: 'southeast-sage-keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
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
      id: 'F1',
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.7',
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
            itemCardId: 'boomerang',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      blockades: [],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'F2',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.5',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'midna',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'power-bracelet-2',
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
          itemCardId: 'hyoi-pear',
          target: {
            row: 3,
            column: 13,
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
        ],
      },
    },
    {
      id: 'F3',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.4',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'twili-midna',
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
      blockades: [],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [
        {
          itemCardId: 'power-bracelet-2',
          target: {
            row: 9,
            column: 13,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'twili-midna',
          },
        ],
      },
    },
    {
      id: 'F4',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Get to those troops before the others do! Lv.4',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'ocarina',
          level: '2',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'skull-kid',
            location: 'W. Boulder Keep',
            keepId: 'west-boulder-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              "KO 1000 enemies. Located in the middle of the large open area south of the Chief's Room.",
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'salvage-arm',
          target: {
            row: 2,
            column: 14,
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
      id: 'F5',
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.3',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'darunia',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
      },
      requirements: {
        kills: 1200,
        damage: 149,
      },
      blockades: ['east'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 8,
            column: 11,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'darunia',
          },
        ],
      },
    },
    {
      id: 'F6',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'skull-kid',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
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
      id: 'F7',
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: Battle alongside your...twin?',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'ring',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'wizzro',
            location: 'Lakeside Keep',
            keepId: 'lakeside-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the hallway leading to the north entrance of the Temple Face Keep.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'salvage-arm',
          target: {
            row: 9,
            column: 13,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'wizzro',
          },
        ],
      },
    },
    {
      id: 'G1',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the temple!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'dragon-spear',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hookshot',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'volga',
            location: 'South Mine Keep',
            keepId: 'south-mine-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-swirly-cheeks' },
            text: 'Fairy Decoration - Swirly Cheeks',
            location: 'NE Sage Keep',
          keepId: 'northeast-sage-keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['east', 'south'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 5,
            column: 14,
          },
        },
        {
          itemCardId: 'power-bracelet-2',
          target: {
            row: 5,
            column: 2,
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
        ],
      },
    },
    {
      id: 'G2',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.1',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'fi',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['north', 'south', 'west'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 7,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'fi',
          },
        ],
      },
    },
    {
      id: 'G3',
      battleAreaId: 'temple-of-souls',
      challenge: "Adventure Battle: Prove you're more than a pip-squeak!",
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'midnas-fused-shadow',
        },
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: "Great Sea Rule: Don't Get Hit!",
      blockades: ['north', 'east'],
      search: [
        {
          itemCardId: 'boomerang',
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
      id: 'G4',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Challenge Battle: Win the KO competition! Lv.8',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'toon-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        kills: 1600,
        damage: 199,
      },
      blockades: ['west', 'east'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'toon-link',
          },
        ],
      },
    },
    {
      id: 'G5',
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: Fight as a warrior of fire!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'twili-midnas-robe',
        },
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Great Sea Rule: Double Damage!',
      blockades: ['south', 'west'],
      search: [
        {
          itemCardId: 'cannon',
          target: {
            row: 9,
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
      id: 'G6',
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.7',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'fi',
        },
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'sea-chart',
          target: {
            row: 8,
            column: 13,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'G7',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Get to those troops before the others do! Lv.3',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'scimitars',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'zant',
            location: 'North Field Keep',
            keepId: 'north-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-wind-robe' },
            text: 'Fairy Top - Wind Robe',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'hyoi-pear',
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
            characterId: 'zant',
          },
        ],
      },
    },
    {
      id: 'H1',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Defeat 300 enemies in time! Lv.1',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'cia',
            outfitId: 'masked-great-sea',
            outfitName: 'Masked (Great Sea)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitId: 'unmasked-great-sea',
            outfitName: 'Unmasked (Great Sea)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitId: 'hatless-great-sea',
            outfitName: 'Hatless (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 1,
            column: 14,
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
      id: 'H2',
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Win the KO Competition! Lv.1',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'character',
            characterId: 'medli',
          },
        ],
      },
      requirements: {
        kills: 1000,
        damage: 99,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'salvage-arm',
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
      id: 'H3',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'king-daphnes',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'hookshot',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: ['north', 'south', 'west'],
      search: [
        {
          itemCardId: 'deku-leaf',
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
            characterId: 'king-daphnes',
          },
        ],
      },
    },
    {
      id: 'H4',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Adventure Battle: Final Battle! Defeat the shadow of the sky!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'linkle',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'toon-link',
            location: 'Rock Keep',
            keepId: 'rock-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in a dead end in the northwest corner of the map.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the tunnel between the Rock Keep and the large circular area in the center.',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north', 'east', 'west'],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'H5',
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Final battle! Defeat the dragon of the tower!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'king-daphnes',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'king-daphnes',
            location: 'N. Entrance Keep',
            keepId: 'north-entrance-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located along the western wall just west of the Enemy Base.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'hookshot',
          target: {
            row: 3,
            column: 10,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'H6',
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.3',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'demon-blade',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ghirahim',
            location: 'West Temple',
            keepId: 'west-temple',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-treasure-aura' },
            text: 'Fairy Decoration - Treasure Aura',
            location: 'East Keep',
            keepId: 'east-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'carrot' },
            text: 'Fairy Food - Carrot',
            location: 'Eastern Room [Pot]',
            keepId: 'eastern-room',
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
          itemCardId: 'deku-leaf',
          target: {
            row: 9,
            column: 9,
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
      id: 'H7',
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.3',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'cia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 99,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'I1',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.1',
      difficulty: 'colorless',
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
      id: 'I2',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.1',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'character',
            characterId: 'toon-link',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 99,
      },
      blockades: ['south'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'I3',
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Final battle! Defeat the Demon King of the castle!',
      difficulty: 'red',
      rewards: {
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'king-daphnes',
            location: 'South Field Keep',
            keepId: 'south-field-keep',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'king-daphnes',
            location: 'Central Keep',
            keepId: 'central-keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north', 'east', 'south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
      isFinalBoss: true,
    },
    {
      id: 'I4',
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Have a showdown between hero and imp!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'mask',
          level: '2',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'young-link',
            location: 'S. Entrance Keep',
            keepId: 'south-entrance-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located just north from the southeasternmost owl statue.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'salvage-arm',
          target: {
            row: 8,
            column: 1,
          },
        },
        {
          itemCardId: 'sea-chart',
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
      id: 'I5',
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.8',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 199,
      },
      blockades: ['east', 'south'],
      search: [
        {
          itemCardId: 'hookshot',
          target: {
            row: 1,
            column: 6,
          },
        },
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 6,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'ganondorf',
          },
        ],
      },
    },
    {
      id: 'I6',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Defeat 400 enemies in time! Lv.4',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tetra',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['north'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'I7',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Challenge Battle: Fight through the Wind Waker quiz!',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'young-link',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
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
        damage: 99,
      },
      blockades: [],
      quizAnswers: ['king-daphnes', 'tetra', 'toon-link'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 9,
            column: 8,
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
      id: 'J1',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.2',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'impa',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
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
          itemCardId: 'hyoi-pear',
          target: {
            row: 2,
            column: 2,
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
        ],
      },
    },
    {
      id: 'J2',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'sheik',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        kills: 1000,
        damage: 99,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'J3',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Fight through the item master quiz!',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'tingle',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'heros-bow',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 99,
      },
      blockades: ['south', 'west'],
      quizAnswers: ['moblin', 'stalmaster', 'big-blin'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 2,
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
      id: 'J4',
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Get to those troops before the others do! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'shackle',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'midna',
            location: 'West Temple',
            keepId: 'west-temple',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'great-sea-j4' },
            text: 'My Fairy - Water',
            location: 'Ruins Summit [Pot]',
            keepId: 'ruins-summit',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['north', 'west'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 4,
            column: 13,
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
        ],
      },
    },
    {
      id: 'J5',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Defeat the barrier specialist forces! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'hammer',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'darunia',
            location: 'Mountain Keep',
            keepId: 'mountain-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located on the north wall inside the empty room east of the Allied Keep.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 5,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'darunia',
          },
        ],
      },
    },
    {
      id: 'J6',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.2',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'lana',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'heros-bow',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['east'],
      search: [
        {
          itemCardId: 'salvage-arm',
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
            characterId: 'lana',
          },
        ],
      },
    },
    {
      id: 'J7',
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Win the KO competition! Lv.5',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'wizzro',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'windwaker',
          },
        ],
      },
      requirements: {
        kills: 1000,
        damage: 99,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'K1',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Adventure Battle: Get to those troops before the others do! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'parasol',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'agitha',
            location: 'School of Joy',
            keepId: 'school-of-joy',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located in the cave of the Star Island Keep.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the dead end just north of the westernmost owl statue.',
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
          itemCardId: 'hyoi-pear',
          target: {
            row: 2,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'agitha',
          },
        ],
      },
    },
    {
      id: 'K2',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.1',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'tetra',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['east'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 1,
            column: 2,
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
        ],
      },
    },
    {
      id: 'K3',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Adventure Battle: Defeat the barrier specialist forces! Lv.1',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'character',
            characterId: 'tetra',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Great Sea Rule: No Item Attacks!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'heros-bow',
          target: {
            row: 2,
            column: 3,
          },
        },
        {
          itemCardId: 'sea-chart',
          target: {
            row: 10,
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
      id: 'K4',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.5',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ruto',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'cannon',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 6,
            column: 13,
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
      id: 'K5',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Defeat 400 enemies in time! Lv.3',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'sheik',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 8,
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
        ],
      },
    },
    {
      id: 'K6',
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the forest!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-piece',
          occurrenceId: 'heart-piece-1',
          characterId: 'king-daphnes',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'sea-chart',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'king-daphnes',
            location: 'North Square',
            keepId: 'north-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-korok-mask' },
            text: 'Fairy Headwear - Korok Mask',
            location: 'Southeast Tree',
            keepId: 'southeast-tree',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['north', 'south', 'west'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'K7',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Defeat your enemies...with kindness!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tetra',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Great Sea Rule: No Item Attacks!',
      blockades: ['north'],
      search: [
        {
          itemCardId: 'heros-bow',
          target: {
            row: 1,
            column: 15,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'L1',
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.3',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitId: 'heros-clothes-great-sea',
            outfitName: "Hero's Clothes (Great Sea)",
          },
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 9,
            column: 11,
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
        ],
      },
    },
    {
      id: 'L2',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Win the KO competition! Lv.2',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'volga',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        kills: 1000,
        damage: 99,
      },
      blockades: ['north', 'west'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 1,
            column: 9,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'L3',
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Defeat 300 enemies in time! Lv.2',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tetra',
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
      blockades: ['south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'L4',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Fight through the travel memories quiz! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'zant',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 99,
      },
      blockades: ['north'],
      quizAnswers: ['volga', 'moblin', 'linkle'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'L5',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Strengthen your army and defeat the enemy! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-piece',
          occurrenceId: 'heart-piece-1',
          characterId: 'king-daphnes',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'king-daphnes',
            location: 'South Square',
            keepId: 'south-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-wind-aura' },
            text: 'Fairy Decoration - Wind Aura',
            location: 'Tunnel Square',
            keepId: 'tunnel-square',
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
        status: 'unknown',
      },
    },
    {
      id: 'L6',
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.6',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tetra',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['north', 'east'],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'L7',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'volga',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
      },
      requirements: {
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
      id: 'M1',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Win the KO competition! Lv.3',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitId: 'standard-robes-great-sea',
            outfitName: 'Standard Robes (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
      },
      requirements: {
        kills: 1000,
        damage: 99,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 6,
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
      id: 'M2',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the volcano!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'baton',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'windwaker',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'zelda',
            location: 'Stock Room',
            keepId: 'stock-room',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-rito-mask' },
            text: 'Fairy Headwear - Rito Mask',
            location: 'South Square',
            keepId: 'south-square',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['north', 'east', 'south'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 4,
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
      id: 'M3',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.2',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'character',
            characterId: 'king-daphnes',
          },
        ],
      },
      requirements: {
        kills: 1000,
        damage: 99,
      },
      blockades: ['north'],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 9,
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
      id: 'M4',
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Defeat 400 enemies in time! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-piece',
          occurrenceId: 'heart-piece-1',
          characterId: 'linkle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'M5',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Win the KO competition! Lv.4',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tetra',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        kills: 1000,
        damage: 99,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'M6',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'windwaker',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Great Sea Rule: Double Damage!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'cannon',
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
      id: 'M7',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Defeat 400 enemies in time! Lv.2',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'skull-kid',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
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
          itemCardId: 'hyoi-pear',
          target: {
            row: 1,
            column: 9,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'skull-kid',
          },
        ],
      },
    },
    {
      id: 'N1',
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Defeat the enemy celebrities!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'spear',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'lana',
            location: 'West Square',
            keepId: 'west-square',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located in the dead end northwest of the Enemy Base.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'salvage-arm',
          target: {
            row: 8,
            column: 1,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'N2',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.4',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ghirahim',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 4,
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
      id: 'N3',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'light-sword',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'toon-link',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-pirate-aura' },
            text: 'Fairy Decoration - Pirate Aura',
            location: 'North Field Keep',
            keepId: 'north-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'all-purpose-bait' },
            text: 'Fairy Food - All-Purpose Bait',
            location: 'Fairy Fountain [Pot]',
            keepId: 'fairy-fountain',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 2,
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
      id: 'N4',
      battleAreaId: 'forsaken-fortress',
      challenge: "Adventure Battle: Don't leave your troops hanging!",
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'scepter',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'cia',
            location: "Glutton's Keep",
            keepId: 'gluttons-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the dead end northeast from Star Island Keep.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'deku-leaf',
          target: {
            row: 8,
            column: 3,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'N5',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.2',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'twili-midna',
            outfitId: 'standard-outfit-great-sea',
            outfitName: 'Standard Outfit (Great Sea)',
          },
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 99,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 1,
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
      id: 'N6',
      battleAreaId: 'valley-of-seers',
      challenge: "Adventure Battle: Trust in your troops' resilience!",
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'magic-rod',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'great-sea-n6' },
            text: 'My Fairy - Fire',
            location: 'Fairy Fountain [Pot]',
            keepId: 'fairy-fountain',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hyoi-pear' },
            text: 'Fairy Food - Hyoi Pear',
            location: 'West Temple [Pot]',
            keepId: 'west-temple',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['north', 'south'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 9,
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
      id: 'N7',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Adventure Battle: Defend the allied keeps! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'naginata',
          level: '2',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'impa',
            location: "Glutton's Keep",
            keepId: 'gluttons-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located northeast of the Dragon Roost in the grass.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the dead end found off the path north of Star Island Keep.',
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
          itemCardId: 'salvage-arm',
          target: {
            row: 9,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
  ],
} satisfies MapDefinition;
