import type { MapDefinition } from '../../../domain/maps/map.model';

export const twilightMap = {
  id: 'twilight',
  name: 'Twilight Map',
  difficulty: 'hard',
  extras: 'Extra material drops',
  tiles: [
    {
      id: 'A2',
      battleAreaId: 'gerudo-desert',
      challenge: 'Adventure Battle: Fight as a warrior of light! Lv.1',
      difficulty: 'purple',
      rewards: {},
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'ooccoo',
          target: {
            row: 5,
            column: 12,
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
            characterId: 'zant',
          },
        ],
      },
    },
    {
      id: 'A3',
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Team up and defeat enemy forces! Lv.8',
      difficulty: 'blue',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'ooccoo',
          target: {
            row: 4,
            column: 4,
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
            characterId: 'midna',
          },
        ],
      },
    },
    {
      id: 'A4',
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: Defeat the Wizard Forces!',
      difficulty: 'blue',
      rewards: {},
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'ooccoo',
          target: {
            row: 6,
            column: 8,
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
          {
            characterId: 'wizzro',
          },
        ],
      },
    },
    {
      id: 'A5',
      battleAreaId: 'temple-of-souls',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.8",
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'magic-rod',
          level: '4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'digging-mitts',
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
          itemCardId: 'jar',
          target: {
            row: 8,
            column: 9,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'link',
            weaponId: 'magic-rod',
          },
        ],
      },
    },
    {
      id: 'A6',
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.5',
      difficulty: 'blue',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'ooccoo',
          target: {
            row: 6,
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
      id: 'B2',
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Watch for traps on the battlefield!',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'midna',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'midna',
            location: 'North Field Keep',
            keepId: 'north-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-butterfly-headband' },
            text: 'Fairy Headwear - Butterfly Headband',
            location: 'East Field Keep',
            keepId: 'east-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hylian-pike' },
            text: 'Fairy Food - Hylian Pike',
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
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 4,
            column: 10,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'midna',
          },
        ],
      },
    },
    {
      id: 'B3',
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: Defeat the Barrier Specialist Forces! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'hylian-sword',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'link',
            location: 'East Garden',
            keepId: 'east-garden',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-heros-clothes' },
            text: "Fairy Top - Hero's Clothes",
            location: 'Northeast Keep',
            keepId: 'northeast-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hyrule-bass' },
            text: 'Fairy Food - Hyrule Bass',
            location: 'West Garden [Pot]',
            keepId: 'west-garden',
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
          itemCardId: 'bomb',
          target: {
            row: 5,
            column: 5,
          },
        },
        {
          itemCardId: 'lantern',
          target: {
            row: 0,
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
            weaponId: 'hylian-sword',
          },
        ],
      },
    },
    {
      id: 'B4',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.6',
      difficulty: 'orange',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'ooccoo',
          target: {
            row: 7,
            column: 8,
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
            characterId: 'lana',
          },
        ],
      },
    },
    {
      id: 'B5',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Protect the bombchu! Lv.8',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitId: 'era-of-twilight-robes',
            outfitName: 'Era of Twilight Robes',
          },
          {
            type: 'item-card',
            itemCardId: 'ooccoo',
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
          itemCardId: 'water-bomb',
          target: {
            row: 5,
            column: 5,
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
        ],
      },
    },
    {
      id: 'B6',
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: Defeat the Disorderly Forces! Lv.6',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'cia',
            outfitId: 'masked-twilight',
            outfitName: 'Masked (Twilight)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitId: 'unmasked-twilight',
            outfitName: 'Unmasked (Twilight)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitId: 'hatless-twilight',
            outfitName: 'Hatless (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'impa',
            location: 'South Garden',
            keepId: 'south-garden',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the winding tunnel just south of Southeast Keep.',
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
      blockades: ['north'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 9,
            column: 3,
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
          {
            characterId: 'impa',
          },
        ],
      },
    },
    {
      id: 'B7',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.9',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'wizzro',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'jar',
          },
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'C1',
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Use a Magic Circle to defeat the enemy forces! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'scimitars',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'zant',
            location: 'West Keep',
            keepId: 'west-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hylian-pike' },
            text: 'Fairy Food - Hylian Pike',
            location: 'Southwest Keep [Jar]',
            keepId: 'southwest-keep',
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
          itemCardId: 'spinner',
          target: {
            row: 4,
            column: 12,
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
      id: 'C2',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Defeat the Darknut Forces!',
      difficulty: 'purple',
      rewards: {},
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'ooccoo',
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
      id: 'C3',
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.6',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'zelda',
        },
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Twilight Rule: No Focus Spirit!',
      blockades: ['east', 'south'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'jar',
          target: {
            row: 9,
            column: 3,
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
        ],
      },
    },
    {
      id: 'C4',
      battleAreaId: 'faron-woods',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.6",
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
            itemCardId: 'tears-of-light',
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
      blockades: ['north'],
      search: [],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'zant',
          },
          {
            characterId: 'lana',
          },
        ],
      },
    },
    {
      id: 'C5',
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: A collision of cuccos! Lv.6',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'spear',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'lana',
            location: 'Northwest Keep',
            keepId: 'northwest-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'bee-larvae' },
            text: 'Fairy Food - Bee Larvae',
            location: 'Northeast Keep [Pot]',
            keepId: 'northeast-keep',
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
          itemCardId: 'digging-mitts',
          target: {
            row: 7,
            column: 5,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'lana',
            weaponId: 'spear',
          },
        ],
      },
    },
    {
      id: 'C6',
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Protect the bombchu! Lv.9',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitId: 'heros-clothes-twilight',
            outfitName: "Hero's Clothes (Twilight)",
          },
          {
            type: 'item-card',
            itemCardId: 'fishing-rod',
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
          itemCardId: 'spinner',
          target: {
            row: 6,
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
          {
            characterId: 'ganondorf',
          },
        ],
      },
    },
    {
      id: 'C7',
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle:The hunters are on the move!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'cia',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'twilight-c7' },
            text: 'My Fairy - Darkness',
            location: 'South Field Keep [Pot]',
            keepId: 'south-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'skullfish' },
            text: 'Fairy Food - Skullfish',
            location: 'Rocky Square [Pot]',
            keepId: 'rocky-square',
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
          itemCardId: 'lantern',
          target: {
            row: 4,
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
      id: 'C8',
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.9',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'twili-midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'lantern',
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
          itemCardId: 'clawshot',
          target: {
            row: 7,
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
      id: 'D1',
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.3',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'young-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
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
          itemCardId: 'bomb',
          target: {
            row: 7,
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
      id: 'D2',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Defeat the Disorderly Forces! Lv.5',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'volga',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'volga',
            location: 'Town Center Keep',
            keepId: 'town-center-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'skullfish' },
            text: 'Fairy Food - Skullfish',
            location: 'Northmost Keep [Pot]',
            keepId: 'northmost-keep',
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
          itemCardId: 'spinner',
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
            characterId: 'volga',
          },
        ],
      },
    },
    {
      id: 'D3',
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Protect the bombchu! Lv.6',
      difficulty: 'orange',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['south', 'west'],
      search: [
        {
          itemCardId: 'ooccoo',
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
            characterId: 'fi',
          },
          {
            characterId: 'ghirahim',
          },
        ],
      },
    },
    {
      id: 'D4',
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Defeat the commanders of two armies! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'cutlass',
          level: '4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'spinner',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'tetra',
            location: 'East Field Keep',
            keepId: 'east-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-twilight-top' },
            text: 'Fairy Top - Twilight Top',
            location: 'North Field Keep',
            keepId: 'north-field-keep',
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
          itemCardId: 'digging-mitts',
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
            characterId: 'tetra',
          },
        ],
      },
    },
    {
      id: 'D5',
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Rescue the allied forces!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'shackle',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'midna',
            location: 'S. Entrance Keep',
            keepId: 'south-entrance-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-butterfly-skirt' },
            text: 'Fairy Bottom - Butterfly Skirt',
            location: 'South Square',
            keepId: 'south-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'greengill' },
            text: 'Fairy Food - Greengill',
            location: 'N. Entrance Keep [Pot]',
            keepId: 'north-entrance-keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Twilight Rule: No Item Attacks!',
      blockades: [],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 3,
            column: 9,
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
      id: 'D6',
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.9",
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'skull-kid',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Twilight Rule: No Item Attacks!',
      blockades: ['east', 'south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'D7',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'cia',
            location: 'E. Mountain Keep',
            keepId: 'east-mountain-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located on the path north of the E. Boulder Keep behind a wall that must be bombed.',
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
      blockades: ['north', 'south', 'west'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 7,
            column: 4,
          },
        },
        {
          itemCardId: 'lantern',
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
            characterId: 'ganondorf',
          },
          {
            characterId: 'cia',
          },
        ],
      },
    },
    {
      id: 'D8',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Defeat the warriors of twilight!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'great-swords',
          level: '4',
        },
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ganondorf',
            location: "King's Hall",
            keepId: 'kings-hall',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-goron-facepaint' },
            text: 'Fairy Decoration - Goron Facepaint',
            location: 'Lower Level East',
            keepId: 'lower-level-east',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'reekfish' },
            text: 'Fairy Food - Reekfish',
            location: "King's Hall [Pot]",
            keepId: 'kings-hall',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north', 'east'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 5,
            column: 7,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'ganondorf',
            weaponId: 'great-swords',
          },
        ],
      },
    },
    {
      id: 'E1',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Defeat the beast of the ruins!',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ghirahim',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ghirahim',
            location: 'S. Rockface Keep',
            keepId: 'south-rockface-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located just north of S. Rockface Keep.',
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
      additionalRule: 'Twilight Rule: No Item Attacks!',
      blockades: ['south', 'west'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 5,
            column: 0,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'ghirahim',
          },
          {
            characterId: 'toon-link',
          },
        ],
      },
    },
    {
      id: 'E2',
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ruto',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'jar',
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
      id: 'E3',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Defeat the commanders of two armies! Lv.1',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tingle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'fishing-rod',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-heros-clothes' },
            text: "Fairy Top - Hero's Clothes",
            location: 'N. Rockface Keep',
            keepId: 'north-rockface-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'ordon-goat-cheese' },
            text: 'Fairy Food - Ordon Goat Cheese',
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
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'E4',
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Fight as a warrior of water or lightning!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'spinner',
          level: '4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'link',
            location: 'West Keep',
            keepId: 'west-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-fused-shadow-mask' },
            text: 'Fairy Headwear - Fused Shadow Mask',
            location: 'West Ruins',
            keepId: 'west-ruins',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Twilight Rule: No Special Attacks!',
      blockades: ['north', 'south'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'spinner',
          target: {
            row: 8,
            column: 15,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'link',
            weaponId: 'spinner',
          },
        ],
      },
    },
    {
      id: 'E5',
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Final battle! Defeat the Demon King of the castle!',
      difficulty: 'red',
      rewards: {
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'sheik',
            location: 'Mountain Keep',
            keepId: 'mountain-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located north of East Field Keep, on the cliff reached via Hookshot.',
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
      additionalRule: 'Twilight Rule: No Special Attacks!',
      blockades: ['north'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
      isFinalBoss: true,
    },
    {
      id: 'E6',
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: A leader never sleeps!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'sail',
          level: '4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'clawshot',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'king-daphnes',
            location: 'W. Rockface Keep',
            keepId: 'west-rockface-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-butterfly-blouse' },
            text: 'Fairy Top - Butterfly Blouse',
            location: 'Castle Keep',
            keepId: 'castle-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'bombfish' },
            text: 'Fairy Food - Bombfish',
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
      additionalRule: 'Twilight Rule: No Item Attacks!',
      blockades: ['east', 'west'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'jar',
          target: {
            row: 10,
            column: 2,
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
      id: 'E7',
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.7',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'gauntlets',
          level: '4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'digging-mitts',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'link',
            location: 'Abandoned Fort',
            keepId: 'abandoned-fort',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'accessory-twilight-jewel' },
            text: 'Fairy Accessory - Twilight Jewel',
            location: 'W. Rockface Keep',
            keepId: 'west-rockface-keep',
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
          itemCardId: 'clawshot',
          target: {
            row: 4,
            column: 0,
          },
        },
        {
          itemCardId: 'spinner',
          target: {
            row: 7,
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
            weaponId: 'gauntlets',
          },
        ],
      },
    },
    {
      id: 'E8',
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.3',
      difficulty: 'yellow',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'west'],
      search: [
        {
          itemCardId: 'ooccoo',
          target: {
            row: 4,
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
      id: 'F1',
      battleAreaId: 'sealed-grounds',
      challenge: "Adventure Battle: Defeat the summoners before it's too late!",
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'water-bomb',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'twilight-f1' },
            text: 'My Fairy - Light',
            location: 'Southwest Keep [Pot]',
            keepId: 'southwest-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'bombfish' },
            text: 'Fairy Food - Bombfish',
            location: 'West Cannon Keep [Pot]',
            keepId: 'west-cannon-keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Twilight Rule: No Special Attacks!',
      blockades: [],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'clawshot',
          target: {
            row: 5,
            column: 0,
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
      id: 'F2',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Use a Magic Circle to defeat the enemy forces! Lv.1',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'fi',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'fi',
            location: 'N. Rockface Keep',
            keepId: 'north-rockface-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located on the northern outside wall of West Town Keep.',
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
      additionalRule: 'Twilight Rule: No Focus Spirit!',
      blockades: [],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'fishing-rod',
          target: {
            row: 0,
            column: 1,
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
          {
            characterId: 'linkle',
          },
        ],
      },
    },
    {
      id: 'F3',
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.2',
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
            itemCardId: 'clawshot',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Defeat the barrier specialist forces! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'crossbows',
          level: '4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'lantern',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'linkle',
            location: 'Central Keep',
            keepId: 'central-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-heros-clothes' },
            text: "Fairy Top - Hero's Clothes",
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'ordon-catfish' },
            text: 'Fairy Food - Ordon Catfish',
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
      additionalRule: 'Twilight Rule: No Focus Spirit!',
      blockades: ['north'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'bomb',
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
            characterId: 'linkle',
          },
        ],
      },
    },
    {
      id: 'F5',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Defeat 1,000 enemies in time!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitId: 'era-of-twilight-tunic',
            outfitName: 'Era of Twilight Tunic',
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
          itemCardId: 'clawshot',
          target: {
            row: 5,
            column: 0,
          },
        },
        {
          itemCardId: 'fishing-rod',
          target: {
            row: 7,
            column: 0,
          },
        },
        {
          itemCardId: 'lantern',
          target: {
            row: 2,
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
      id: 'F6',
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'light-sword',
          level: '4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'spinner',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'toon-link',
            location: 'Abandoned Fort',
            keepId: 'abandoned-fort',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-twilight-skirt' },
            text: 'Fairy Bottom - Twilight Skirt',
            location: 'North Field Keep',
            keepId: 'north-field-keep',
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
          itemCardId: 'spinner',
          target: {
            row: 3,
            column: 8,
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
      id: 'F7',
      battleAreaId: 'ganons-tower',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.8',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ganondorf',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
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
      blockades: ['south'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 4,
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
        ],
      },
    },
    {
      id: 'F8',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Calm dissenters and crush your foe!',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ruto',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'darunia',
            location: 'W. Boulder Keep',
            keepId: 'west-boulder-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'great-fairys-tears' },
            text: "Fairy Food - Great Fairy's Tears",
            location: 'E. Boulder Keep [Pot]',
            keepId: 'east-boulder-keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Twilight Rule: No Item Attacks!',
      blockades: ['north'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'jar',
          target: {
            row: 2,
            column: 1,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'ruto',
          },
          {
            characterId: 'darunia',
          },
        ],
      },
    },
    {
      id: 'G1',
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the palace!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'balloon',
          level: '4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'tingle',
            location: 'S. Entrance Keep',
            keepId: 'south-entrance-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'bee-larvae' },
            text: 'Fairy Food - Bee Larvae',
            location: 'S. Entrance Keep [Pot]',
            keepId: 'south-entrance-keep',
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
          itemCardId: 'jar',
          target: {
            row: 9,
            column: 1,
          },
        },
        {
          itemCardId: 'lantern',
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
            characterId: 'tingle',
          },
        ],
      },
    },
    {
      id: 'G2',
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.5',
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
            itemCardId: 'ooccoo',
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
            characterId: 'ghirahim',
          },
        ],
      },
    },
    {
      id: 'G3',
      battleAreaId: 'twilight-field',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.4",
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
            itemCardId: 'ooccoo',
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
          itemCardId: 'spinner',
          target: {
            row: 9,
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
      id: 'G4',
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Final battle! Defeat the dragon of the lake!',
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
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-butterfly-blouse' },
            text: 'Fairy Top - Butterfly Blouse',
            location: 'Bridge Keep',
            keepId: 'bridge-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hylian-loach' },
            text: 'Fairy Food - Hylian Loach',
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
      blockades: [],
      search: [
        {
          itemCardId: 'fishing-rod',
          target: {
            row: 1,
            column: 12,
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
            characterId: 'midna',
          },
        ],
      },
    },
    {
      id: 'G5',
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'impa',
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
      additionalRule: 'Twilight Rule: No Focus Spirit!',
      blockades: ['south'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'jar',
          target: {
            row: 7,
            column: 3,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'impa',
          },
        ],
      },
    },
    {
      id: 'G6',
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Protect the Bombchu! Lv.3',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitId: 'postman-uniform',
            outfitName: 'Postman Uniform',
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
      blockades: ['north', 'west'],
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 4,
            column: 4,
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
      id: 'G7',
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Guard the allied keeps with your life! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'wizzro',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
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
      blockades: ['south'],
      search: [
        {
          itemCardId: 'water-bomb',
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
      id: 'G8',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Final battle! Defeat the dragon of the volcano!',
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
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'fishing-rod',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-goron-facepaint' },
            text: 'Fairy Decoration - Goron Facepaint',
            location: 'Stock Room',
            keepId: 'stock-room',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hylian-loach' },
            text: 'Fairy Food - Hylian Loach',
            location: 'Central Square [Pot]',
            keepId: 'central-square',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Twilight Rule: No Special Attacks!',
      blockades: ['north'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'H1',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Strengthen your army and defeat the enemy!',
      difficulty: 'purple',
      rewards: {},
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['south', 'west'],
      search: [
        {
          itemCardId: 'ooccoo',
          target: {
            row: 2,
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
      id: 'H2',
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Protect the Bombchu! Lv.4',
      difficulty: 'purple',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'lantern',
          target: {
            row: 2,
            column: 4,
          },
        },
        {
          itemCardId: 'ooccoo',
          target: {
            row: 2,
            column: 11,
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
            characterId: 'zant',
          },
        ],
      },
    },
    {
      id: 'H3',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.4',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zant',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'zant',
            location: 'Exit Square',
            keepId: 'exit-square',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located in the dead end south of Central Square.',
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
      blockades: ['south'],
      search: [
        {
          itemCardId: 'jar',
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
            characterId: 'zant',
          },
          {
            characterId: 'tetra',
          },
        ],
      },
    },
    {
      id: 'H4',
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: Defeat the mountain beast!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'zelda',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-butterfly-headband' },
            text: 'Fairy Headwear - Butterfly Headband',
            location: 'SE Room',
            keepId: 'se-room',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hyrule-bass' },
            text: 'Fairy Food - Hyrule Bass',
            location: 'Hall of Mirrors [Pot]',
            keepId: 'hall-of-mirrors',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Twilight Rule: No Special Attacks!',
      blockades: ['north', 'south'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'lantern',
          target: {
            row: 6,
            column: 9,
          },
        },
        {
          itemCardId: 'water-bomb',
          target: {
            row: 6,
            column: 2,
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
          {
            characterId: 'impa',
          },
        ],
      },
    },
    {
      id: 'H5',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.2',
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
            itemCardId: 'bomb',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-butterfly-makeup' },
            text: 'Fairy Decoration - Butterfly Makeup',
            location: 'Mountain Keep',
            keepId: 'mountain-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'greengill' },
            text: 'Fairy Food - Greengill',
            location: 'Castle Keep [Pot]',
            keepId: 'castle-keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'H6',
      battleAreaId: 'lake-hylia',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.2",
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
            itemCardId: 'jar',
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
          itemCardId: 'fishing-rod',
          target: {
            row: 2,
            column: 11,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'H7',
      battleAreaId: 'gerudo-desert',
      challenge: 'Adventure Battle: Stop the fortifiers and barrier specialists!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'giant-blade',
          level: '4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'water-bomb',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'impa',
            location: 'North Oasis',
            keepId: 'north-oasis',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'reekfish' },
            text: 'Fairy Food - Reekfish',
            location: 'Central Keep [Pot]',
            keepId: 'central-keep',
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
          itemCardId: 'fishing-rod',
          target: {
            row: 6,
            column: 11,
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
      id: 'H8',
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Protect the Bombchu! Lv.2',
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
            itemCardId: 'lantern',
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
          itemCardId: 'spinner',
          target: {
            row: 6,
            column: 7,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'I1',
      battleAreaId: 'gerudo-desert',
      challenge: 'Adventure Battle: Final battle! Defeat the desert dragon!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'book-of-sorcery',
          level: '4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'lantern',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located just outside west exit of S. Desert Keep.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and defeat 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 0,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'lana',
            weaponId: 'book-of-sorcery',
          },
        ],
      },
    },
    {
      id: 'I2',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.4',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'linkle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ooccoo',
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
          itemCardId: 'digging-mitts',
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
      id: 'I3',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.4',
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
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'jar',
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
      id: 'I4',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.7',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitId: 'era-of-twilight-armor',
            outfitName: 'Era of Twilight Armor',
          },
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'spinner',
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
            row: 6,
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
      id: 'I5',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.2',
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
            itemCardId: 'fishing-rod',
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
        status: 'unrestricted',
      },
    },
    {
      id: 'I6',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Enjoy a leisurely Cucco-outing!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ghirahim',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'clawshot',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-heros-trousers' },
            text: "Fairy Bottom - Hero's Trousers",
            location: 'W. Mountain Keep',
            keepId: 'west-mountain-keep',
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
      id: 'I7',
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.2',
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
            itemCardId: 'ooccoo',
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
      id: 'I8',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.3',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'darunia',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'darunia',
            location: 'East Goron Keep',
            keepId: 'east-goron-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'chu-jelly' },
            text: 'Fairy Food - Chu Jelly',
            location: 'E. Boulder Keep [Pot]',
            keepId: 'east-boulder-keep',
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
            row: 4,
            column: 6,
          },
        },
        {
          itemCardId: 'lantern',
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
            characterId: 'darunia',
          },
          {
            characterId: 'young-link',
          },
        ],
      },
    },
    {
      id: 'J1',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Protect the Bombchu! Lv.5',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'agitha',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
          {
            type: 'item-card',
            itemCardId: 'spinner',
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
          itemCardId: 'jar',
          target: {
            row: 9,
            column: 15,
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
          {
            characterId: 'link',
          },
        ],
      },
    },
    {
      id: 'J2',
      battleAreaId: 'eldin-caves',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.5",
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tingle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'digging-mitts',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Twilight Rule: No Special Attacks!',
      blockades: [],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'J3',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Behold the power of teamwork!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'agitha',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-heros-clothes' },
            text: "Fairy Top - Hero's Clothes",
            location: 'Central Square',
            keepId: 'central-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'chu-jelly' },
            text: 'Fairy Food - Chu Jelly',
            location: 'Central Square [Pot]',
            keepId: 'central-square',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Twilight Rule: No Focus Spirit!',
      blockades: [],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'jar',
          target: {
            row: 3,
            column: 2,
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
            characterId: 'cia',
          },
        ],
      },
    },
    {
      id: 'J4',
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: Defeat the barrier specialist forces! Lv.1',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'rapier',
          level: '4',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'water-bomb',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'zelda',
            location: 'East Room',
            keepId: 'east-room',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-twilight-top' },
            text: 'Fairy Top - Twilight Top',
            location: 'Lakeside Keep',
            keepId: 'lakeside-keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Twilight Rule: No Special Attacks!',
      blockades: [],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 8,
            column: 4,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'J5',
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'darunia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'lantern',
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
            characterId: 'darunia',
          },
          {
            characterId: 'ruto',
          },
        ],
      },
    },
    {
      id: 'J6',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.1',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'wizzro',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'wizzro',
            location: 'Stock Room',
            keepId: 'stock-room',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the path north then west from the Tunnel Square before the dropoff.',
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
      additionalRule: 'Twilight Rule: No Item Attacks!',
      blockades: [],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'jar',
          target: {
            row: 9,
            column: 3,
          },
        },
        {
          itemCardId: 'lantern',
          target: {
            row: 9,
            column: 11,
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
            characterId: 'skull-kid',
          },
        ],
      },
    },
    {
      id: 'J7',
      battleAreaId: 'death-mountain',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.3",
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'linkle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'jar',
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
      id: 'J8',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.1',
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
            itemCardId: 'tears-of-light',
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
      id: 'K1',
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Look for a solution!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'parasol',
          level: '4',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'agitha',
            location: 'West Temple',
            keepId: 'west-temple',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-butterfly-skirt' },
            text: 'Fairy Bottom - Butterfly Skirt',
            location: 'East Keep',
            keepId: 'east-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'great-fairys-tears' },
            text: "Fairy Food - Great Fairy's Tears",
            location: 'Eastern Room [Pot]',
            keepId: 'eastern-room',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Twilight Rule: No Item Attacks!',
      blockades: [],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'lantern',
          target: {
            row: 2,
            column: 10,
          },
        },
        {
          itemCardId: 'spinner',
          target: {
            row: 4,
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.7',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'impa',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'lantern',
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
          itemCardId: 'spinner',
          target: {
            row: 10,
            column: 0,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'impa',
          },
          {
            characterId: 'king-daphnes',
          },
        ],
      },
    },
    {
      id: 'K3',
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Challenge Battle: Protect the Bombchu! Lv.7',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
          {
            type: 'item-card',
            itemCardId: 'ooccoo',
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
          itemCardId: 'digging-mitts',
          target: {
            row: 9,
            column: 1,
          },
        },
        {
          itemCardId: 'lantern',
          target: {
            row: 3,
            column: 0,
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
            characterId: 'lana',
          },
        ],
      },
    },
    {
      id: 'K4',
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the temple!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'volga',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'digging-mitts',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located beside the outside of the northwest wall of Temple Square.',
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
      blockades: ['south'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'K5',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Defeat 400 enemies in time!',
      difficulty: 'green',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['north', 'south'],
      search: [
        {
          itemCardId: 'ooccoo',
          target: {
            row: 4,
            column: 7,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'K6',
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.1',
      difficulty: 'yellow',
      rewards: {},
      requirements: {
        minutes: 7,
        damage: 149,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'clawshot',
          target: {
            row: 7,
            column: 15,
          },
        },
        {
          itemCardId: 'ooccoo',
          target: {
            row: 3,
            column: 5,
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
          {
            characterId: 'darunia',
          },
        ],
      },
    },
    {
      id: 'K7',
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.1',
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
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'spinner',
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
        status: 'unrestricted',
      },
    },
    {
      id: 'L3',
      battleAreaId: 'valley-of-seers',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.7",
      difficulty: 'blue',
      rewards: {},
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: [],
      search: [
        {
          itemCardId: 'ooccoo',
          target: {
            row: 5,
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
      id: 'L4',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Fight as a warrior of light! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'cia',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-magic-skirt' },
            text: 'Fairy Bottom - Magic Skirt',
            location: 'Upper Level East',
            keepId: 'upper-level-east',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Twilight Rule: No Item Attacks!',
      blockades: ['east'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'cia',
          },
          {
            characterId: 'zelda',
          },
        ],
      },
    },
    {
      id: 'L5',
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Recruit more allies and overwhelm the enemy!',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'lana',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'lana',
            location: 'East Temple',
            keepId: 'east-temple',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the pointy dead end in the northeast corner of the map.',
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
      additionalRule: 'Twilight Rule: No Special Attacks!',
      blockades: ['south'],
      fullTileSearch: {
        itemCardId: 'tears-of-light',
        description: 'Use Tears of Light to clear away the Twilight',
      },
      search: [
        {
          itemCardId: 'jar',
          target: {
            row: 8,
            column: 4,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'L6',
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike!',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'sheik',
            outfitId: 'standard-outfit-twilight',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'sheik',
            location: 'Eastern Tree',
            keepId: 'eastern-tree',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'ordon-goat-cheese' },
            text: 'Fairy Food - Ordon Goat Cheese',
            location: 'Eastern Tree [Pot]',
            keepId: 'eastern-tree',
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
          itemCardId: 'jar',
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
            characterId: 'sheik',
          },
          {
            characterId: 'tingle',
          },
        ],
      },
    },
    {
      id: 'M4',
      battleAreaId: 'hyrule-field',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.1",
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
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['west'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'M5',
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the jungle!',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'item-card',
            itemCardId: 'tears-of-light',
          },
          {
            type: 'item-card',
            itemCardId: 'lantern',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'fi',
            location: 'North Square',
            keepId: 'north-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-goron-facepaint' },
            text: 'Fairy Decoration - Goron Facepaint',
            location: 'Southeast Tree',
            keepId: 'southeast-tree',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'ordon-catfish' },
            text: 'Fairy Food - Ordon Catfish',
            location: 'Eastern Tree [Pot]',
            keepId: 'eastern-tree',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['east', 'south'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'M6',
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.1',
      difficulty: 'green',
      rewards: {},
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['north', 'west'],
      search: [
        {
          itemCardId: 'ooccoo',
          target: {
            row: 4,
            column: 5,
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
      id: 'N4',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.1',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitId: 'ilias-clothes',
            outfitName: "Ilia's Clothes",
          },
          {
            type: 'item-card',
            itemCardId: 'jar',
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
          itemCardId: 'bomb',
          target: {
            row: 5,
            column: 0,
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
            characterId: 'twili-midna',
          },
        ],
      },
    },
    {
      id: 'N5',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Protect the Bombchu!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'lana',
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
      search: [
        {
          itemCardId: 'jar',
          target: {
            row: 2,
            column: 11,
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
      id: 'N6',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Show no fear to the enemies of Twilight!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'midna',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-heros-clothes' },
            text: "Fairy Top - Hero's Clothes",
            location: 'South Field Keep',
            keepId: 'south-field-keep',
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
      id: 'O6',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'toon-link',
        },
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
  ],
} satisfies MapDefinition;
