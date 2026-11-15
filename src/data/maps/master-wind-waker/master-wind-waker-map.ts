import type { MapDefinition } from '../../../domain/maps/map.model';

export const masterWindWakerMap = {
  id: 'master-wind-waker',
  name: 'Master Wind Waker Map',
  difficulty: 'medium',
  tiles: [
    {
      id: 'A1',
      battleAreaId: 'forsaken-fortress',
      challenge: "Adventure Battle: Don't leave your troops hanging!",
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'cia',
            outfitId: 'masked-wind-waker',
            outfitName: 'Masked (Wind Waker)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitId: 'unmasked-wind-waker',
            outfitName: 'Unmasked (Wind Waker)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitId: 'hatless-wind-waker',
            outfitName: 'Hatless (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'volga',
            location: "Glutton's Keep",
            keepId: 'gluttons-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'life-tree-fruit' },
            text: 'Fairy Food - Life Tree Fruit',
            location: "Beast's Refuge [Pot]",
            keepId: 'beasts-refuge',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Skills!',
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
            characterId: 'volga',
          },
        ],
      },
    },
    {
      id: 'A2',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Fight your way through fire and flames!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitId: 'heros-clothes-wind-waker',
            outfitName: "Hero's Clothes (Wind Waker)",
          },
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ganondorf',
            location: 'Town Center Keep',
            keepId: 'town-center-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'water-fruit' },
            text: 'Fairy Food - Water Fruit',
            location: 'Fairy Fountain [Pot]',
            keepId: 'fairy-fountain',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: ['north', 'east'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 1,
            column: 5,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
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
      id: 'A3',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.6',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
      },
      requirements: {
        kills: 1600,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Skills!',
      blockades: ['east'],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 1,
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
      id: 'A4',
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'medli',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'cannon',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: ['east'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 1,
            column: 8,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'A5',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Defeat your enemies...with kindness!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'king-dodongos-crystal',
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
            row: 2,
            column: 9,
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
      id: 'A6',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.1',
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
        kills: 1000,
        damage: 99,
      },
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: [],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'A7',
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'medli',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: [],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 3,
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
      id: 'B1',
      battleAreaId: 'gerudo-desert',
      keepNameOverrides: { 'south-settlement': 'Enemy Base' },
      challenge: 'Adventure Battle: Send the ghosts packing!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'volga',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
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
            location: 'Central Keep',
            keepId: 'central-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-twilight-aura' },
            text: 'Fairy Decoration - Twilight Aura',
            location: "Arbiter's Keep",
            keepId: 'arbiters-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'all-purpose-bait' },
            text: 'Fairy Food - All-Purpose Bait',
            location: 'Enemy Base [Pot]',
            keepId: 'south-settlement',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: ['east'],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 3,
            column: 4,
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
      id: 'B2',
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Challenge Battle: Protect the Bombchus! Lv.2',
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
            itemCardId: 'salvage-arm',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Focus Spirit!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'hookshot',
          target: {
            row: 1,
            column: 13,
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
      id: 'B3',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Turn the tables on the assassin!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'manhandlas-sapling',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Great Sea Rule: No Item Attacks!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'heros-bow',
          target: {
            row: 8,
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
      id: 'B4',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'king-daphnes',
        },
        clear: [
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
      additionalRule: 'Endless Night Rule: No Fairy Skills!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 1,
            column: 1,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'B5',
      battleAreaId: 'hyrule-field',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.1",
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
            itemCardId: 'windwaker',
          },
        ],
      },
      requirements: {
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: [],
      search: [],
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
      id: 'B6',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Final Battle! Defeat the beast of Diamond Steppe Island!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ghirahim',
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
            characterId: 'medli',
            location: 'Central Keep',
            keepId: 'central-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the dead end north of East Field Keep. Use the hookshot to reach it.',
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
      additionalRule: 'Endless Night Rule: Speed Run!',
      blockades: ['south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'B7',
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Join the Rogue Forces to defeat the enemy!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'linkle',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-skull-dress' },
            text: 'Fairy Top - Skull Dress',
            location: 'Eastern Tree',
            keepId: 'eastern-tree',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'elixir-soup' },
            text: 'Fairy Food - Elixir Soup',
            location: 'Western Tree [Pot]',
            keepId: 'western-tree',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: ['north'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'C1',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Trounce the champions of the sky!',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'darunia',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outift (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'windwaker',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'volga',
            location: 'N. Rockface Keep',
            keepId: 'north-rockface-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'stamina-fruit' },
            text: 'Fairy Food - Stamina Fruit',
            location: 'S. Rockface Keep [Pot]',
            keepId: 'south-rockface-keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'salvage-arm',
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
            characterId: 'volga',
          },
        ],
      },
    },
    {
      id: 'C2',
      battleAreaId: 'valley-of-seers',
      challenge: "Adventure Battle: Trust in your troops' resilience!",
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'impa',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-insect-aura' },
            text: 'Fairy Decoration - Insect Aura',
            location: 'West Ruins',
            keepId: 'west-ruins',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'light-fruit' },
            text: 'Fairy Food - Light Fruit',
            location: 'West Temple [Pot]',
            keepId: 'west-temple',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 1,
            column: 13,
          },
        },
        {
          itemCardId: 'sea-chart',
          target: {
            row: 9,
            column: 10,
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
      id: 'C3',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'twili-midna',
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
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 1,
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
      id: 'C4',
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of west Greatfish Isle!',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'king-daphnes',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'wizzro',
            location: 'North Square',
            keepId: 'north-square',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the dead end west of the Fairy Fountain. Use the hookshot to reach it.',
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
      additionalRule: 'Endless Night Rule: No Special Attacks!',
      blockades: ['north', 'east'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 1,
            column: 8,
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
      id: 'C5',
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'fi',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'heros-bow',
          },
        ],
      },
      requirements: {
        damage: 99,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: [],
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
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'C6',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Hustle in the east and bustle in the west!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'zant',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'medli',
            location: 'South Square',
            keepId: 'south-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'carrot' },
            text: 'Fairy Food - Carrot',
            location: 'West Square [Pot]',
            keepId: 'west-square',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Focus Spirit!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 4,
            column: 2,
          },
        },
        {
          itemCardId: 'sea-chart',
          target: {
            row: 1,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'C7',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Defeat 400 enemies before the Rogue Forces do!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'medli',
        },
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: ['north', 'east'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'D1',
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: The Cucco army rises once more!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'king-daphnes',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the middle of the eastern path in a small alcove.',
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
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: [],
      search: [
        {
          itemCardId: 'hyoi-pear',
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
            characterId: 'king-daphnes',
          },
        ],
      },
    },
    {
      id: 'D2',
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'lana',
        },
        clear: [
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
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: [],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 8,
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
      id: 'D3',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.2',
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
            itemCardId: 'cannon',
          },
        ],
      },
      requirements: {
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: [],
      search: [],
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
      id: 'D4',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of Greatfish Isle!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'rito-harp',
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
            characterId: 'medli',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
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
      additionalRule: 'Endless Night Rule: Speed Run!',
      blockades: ['west'],
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
        status: 'restricted',
        alternatives: [
          {
            characterId: 'medli',
          },
        ],
      },
    },
    {
      id: 'D5',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Fight through the forgetful foe quiz!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'medli',
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
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: [],
      quizAnswers: ['redead-knight', 'lana', 'medli'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'D6',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Adventure Battle: Those birds are so soft! Do we really need to fight?',
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
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'water-fruit' },
            text: 'Fairy Food - Water Fruit',
            location: 'SE Sage Keep [Pot]',
            keepId: 'southeast-sage-keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'hookshot',
          target: {
            row: 9,
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
      id: 'D7',
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of Outset Island!',
      difficulty: 'red',
      rewards: {
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'medli',
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
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: ['west'],
      search: [],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'agitha',
          },
        ],
      },
      isFinalBoss: true,
    },
    {
      id: 'E1',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.5',
      difficulty: 'blue',
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
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Skills!',
      blockades: [],
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
        status: 'unrestricted',
      },
    },
    {
      id: 'E2',
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'cia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
      },
      requirements: {
        minutes: 7,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: ['south'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'E3',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'medli',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'heros-bow',
          },
        ],
      },
      requirements: {
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Special Attacks!',
      blockades: ['north'],
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
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'E4',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Calm dissenters and crush your foe!',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'tingle',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'skull-kid',
            location: 'W. Boulder Keep',
            keepId: 'west-boulder-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-merchant-coat' },
            text: 'Fairy Top - Merchant Coat',
            location: 'Stronghold',
            keepId: 'stronghold',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hyoi-pear' },
            text: 'Fairy Food - Hyoi Pear',
            location: 'Stronghold [Pot]',
            keepId: 'stronghold',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Focus Spirit!',
      blockades: [],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 9,
            column: 14,
          },
        },
        {
          itemCardId: 'power-bracelet',
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
            characterId: 'skull-kid',
          },
        ],
      },
    },
    {
      id: 'E5',
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'gohmas-lens',
        },
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Great Sea Rule: Double Damage!',
      blockades: [],
      search: [
        {
          itemCardId: 'cannon',
          target: {
            row: 9,
            column: 2,
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
      id: 'E6',
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Claim revenge against your foes!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'skull-kid',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'sea-chart',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-rancher-skirt' },
            text: 'Fairy Bottom - Rancher Skirt',
            location: 'East Keep',
            keepId: 'east-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'all-purpose-bait' },
            text: 'Fairy Food - All-Purpose Bait',
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
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: ['south'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'E7',
      battleAreaId: 'temple-of-the-sacred-sword',
      keepNameOverrides: { 'town-entrance': "Enemy Base" },
      challenge: 'Adventure Battle: Stop the fortifiers and barrier specialists!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ruto',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'hookshot',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'wizzro',
            location: 'N. Entrance Keep',
            keepId: 'north-entrance-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-star-aura' },
            text: 'Fairy Decoration - Star Aura',
            location: 'S. Entrance Keep',
            keepId: 'south-entrance-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'mushroom-spores' },
            text: 'Fairy Food - Mushroom Spores',
            location: 'Enemy Base [Pot]',
            keepId: 'town-entrance',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Focus Spirit!',
      blockades: ['north', 'east'],
      search: [
        {
          itemCardId: 'deku-leaf',
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
            characterId: 'wizzro',
          },
        ],
      },
    },
    {
      id: 'F1',
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: Battle across the field!',
      difficulty: 'blue',
      rewards: {},
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Great Sea Rule: Double Damage!',
      blockades: [],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [
        {
          itemCardId: 'cannon',
          target: {
            row: 9,
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
          },
        ],
      },
    },
    {
      id: 'F2',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the bay!',
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
            itemCardId: 'sea-chart',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'medli',
            location: 'Stronghold',
            keepId: 'stronghold',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located in the circular area just south of the Enemy Base.',
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
      additionalRule: 'Endless Night Rule: Speed Run!',
      blockades: ['east'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'F3',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Defeat 700 enemies before the Rogue Forces do!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: ['east'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 4,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'F4',
      battleAreaId: 'eldin-caves',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.2",
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'medli',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'heros-bow',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: ['east'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'F5',
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.2',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'zant',
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
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: ['east'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'F6',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.3',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'heros-bow',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Fairy Skills!',
      blockades: [],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
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
      id: 'F7',
      battleAreaId: 'temple-of-souls',
      keepNameOverrides: { 'east-keep': "Enemy Base" },
      challenge: 'Adventure Battle: Stamp out the enemy bosses!',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'tetra',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'tingle',
            location: 'Central Chamber',
            keepId: 'central-chamber',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'sacred-water' },
            text: 'Fairy Food - Sacred Water',
            location: 'Enemy Base [Pot]',
            keepId: 'east-keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: ['east', 'west'],
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
            characterId: 'tingle',
          },
        ],
      },
    },
    {
      id: 'G1',
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: Watch out for falling artillery fire!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'toon-link',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ganondorf',
            location: 'South Garden',
            keepId: 'south-garden',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hyoi-pear' },
            text: 'Fairy Food - Hyoi Pear',
            location: 'South Garden [Pot]',
            keepId: 'south-garden',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: ['east', 'south'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 5,
            column: 13,
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
      id: 'G2',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Adventure Battle: Help fight fire with fire!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'medli',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'medli',
            location: 'SW Sage Keep',
            keepId: 'southwest-sage-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'accessory-gerudo-jewel' },
            text: 'Fairy Accessory - Gerudo Jewel',
            location: 'SE Sage Keep',
            keepId: 'southeast-sage-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'carrot' },
            text: 'Fairy Food - Carrot',
            location: 'Wind Plaza [Pot]',
            keepId: 'wind-plaza',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: Speed Run!',
      blockades: ['north', 'west'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'G3',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.7',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'impa',
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
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: ['east', 'west'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'G4',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Run swiftly across the battlefield!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tingle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located just southwest of the Enemy Base.',
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
      additionalRule: 'Endless Night Rule: No Fairy Skills!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 1,
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
      id: 'G5',
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.5',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ghirahim',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
      },
      requirements: {
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: ['south', 'west'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 1,
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
      id: 'G6',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.2',
      difficulty: 'purple',
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
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: ['north'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'G7',
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Grow your forces and face your foes!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'zants-helmet',
        },
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Great Sea Rule: No Item Attacks!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'heros-bow',
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
      id: 'H1',
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Fight through the hometown quiz!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'agitha',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'boomerang',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: ['west'],
      quizAnswers: ['darunia', 'medli', 'toon-link'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'H2',
      battleAreaId: 'ganons-tower',
      challenge: "Adventure Battle: It's royalty's time to take the spotlight!",
      difficulty: 'red',
      rewards: {},
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: "Great Sea Rule: Don't Get Hit!",
      blockades: ['south'],
      search: [
        {
          itemCardId: 'boomerang',
          target: {
            row: 1,
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
      id: 'H3',
      battleAreaId: 'ganons-tower',
      challenge: 'Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'sheik',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'boomerang',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Special Attacks!',
      blockades: ['north', 'west'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'H4',
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: Will you fall, or will you bloom?',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'young-link',
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
            characterId: 'medli',
            location: 'Lakeside Keep',
            keepId: 'lakeside-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-hyrule-crown' },
            text: 'Fairy Headwear - Hyrule Crown',
            location: 'East Room',
            keepId: 'east-room',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'sacred-water' },
            text: 'Fairy Food - Sacred Water',
            location: 'Lakeside Keep [Pot]',
            keepId: 'lakeside-keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: Speed Run!',
      blockades: ['east'],
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
      battleAreaId: 'temple-of-souls',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'helmaroc-kings-mask',
        },
      },
      requirements: {
        damage: 199,
      },
      additionalRule: "Great Sea Rule: Don't Get Hit!",
      blockades: ['south'],
      search: [
        {
          itemCardId: 'boomerang',
          target: {
            row: 1,
            column: 3,
          },
        },
      ],
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
      id: 'H6',
      battleAreaId: 'forsaken-fortress',
      challenge: "Adventure Battle: Yesterday's foes are today's allies!",
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'wizzros-ring',
        },
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Great Sea Rule: Double Damage!',
      blockades: ['north'],
      search: [
        {
          itemCardId: 'cannon',
          target: {
            row: 4,
            column: 7,
          },
        },
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 1,
            column: 5,
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
      id: 'H7',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Fight through the travel memories quiz!',
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
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Engless Night Rule: No Healing!',
      blockades: [],
      quizAnswers: ['lizalfos', 'wizzro', 'cia'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'I1',
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of Crescent Moon Island!',
      difficulty: 'red',
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
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located on the wall east and slightly south from the Temple Square.',
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
      additionalRule: 'Engless Night Rule: No Special Attacks!',
      blockades: [],
      search: [
        {
          itemCardId: 'power-bracelet',
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
      id: 'I2',
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.4',
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
            itemCardId: 'cannon',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Engless Night Rule: No Fairy Magic!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'deku-leaf',
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
            characterId: 'twili-midna',
          },
        ],
      },
    },
    {
      id: 'I3',
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Fight the heroes of the Wind Waker!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'volga',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hookshot',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'medli',
            location: 'Central Keep',
            keepId: 'central-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-usurper-crown' },
            text: 'Fairy Headwear - Usurper Crown',
            location: 'North Square',
            keepId: 'north-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'stamina-fruit' },
            text: 'Fairy Food - Stamina Fruit',
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
      additionalRule: 'Endless Night Rule: No Focus Spirit!',
      blockades: ['north', 'east', 'south'],
      search: [
        {
          itemCardId: 'deku-leaf',
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
      id: 'I4',
      battleAreaId: 'sealed-grounds',
      challenge: "Adventure Battle: It's curtain call for Medli's band!",
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'twili-midna',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
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
            content: { kind: 'fairy-food', foodId: 'light-fruit' },
            text: 'Fairy Food - Light Fruit',
            location: 'West Cannon Keep [Pot]',
            keepId: 'west-cannon-keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Skills!',
      blockades: ['north', 'east', 'west'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 1,
            column: 6,
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
      id: 'I5',
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: A leader never sleeps!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'lana',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'linkle',
            location: 'W. Rockface Keep',
            keepId: 'west-rockface-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-usurper-robe' },
            text: 'Fairy Top - Usurper Robe',
            location: 'Castle Keep',
            keepId: 'castle-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'mushroom-spores' },
            text: 'Fairy Food - Mushroom Spores',
            location: 'Fairy Fountain [Pot]',
            keepId: 'fairy-fountain',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: ['east', 'south'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 3,
            column: 11,
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
      id: 'I6',
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Guard the allied keeps with your life! Lv.1',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'king-daphnes',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'windwaker',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Special Attacks!',
      blockades: ['north', 'south'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 8,
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
      id: 'I7',
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Pierce through enemy defenses',
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
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'medli',
            location: 'South Field Keep',
            keepId: 'south-field-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located southeast from the Enemy Base.',
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
      additionalRule: 'Endless Night Rule: Speed Run!',
      blockades: ['north'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 5,
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
      id: 'J1',
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'toon-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hammer',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: [],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'J2',
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'link',
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
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: [],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'J3',
      battleAreaId: 'ganons-tower',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'toon-link',
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
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 5,
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
      id: 'J4',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Best the secretive enemies!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'sheik',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
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
            location: "King's Hall",
            keepId: 'kings-hall',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'elixir-soup' },
            text: 'Fairy Food - Elixir Soup',
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
      additionalRule: 'Endless Night Rule: No Focus Spirit!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 7,
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
      id: 'J5',
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Stand united! Join forces on the front line!',
      difficulty: 'blue',
      rewards: {},
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Great Sea Rule: No Item Attacks!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'heros-bow',
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
            characterId: 'zelda',
          },
        ],
      },
    },
    {
      id: 'J6',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: The hero and the sage back each other up!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'fis-crystal',
        },
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
            column: 13,
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
      id: 'J7',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.3',
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
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        kills: 1200,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Special Attacks!',
      blockades: [],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'K1',
      battleAreaId: 'death-mountain',
      challenge: "Challenge Battle: Put an end to the enemy's divisibe plan! Lv.5",
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
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: [],
      search: [
        {
          itemCardId: 'salvage-arm',
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
      id: 'K2',
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: Defeat the Wizard Forces!',
      difficulty: 'red',
      rewards: {},
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Great Sea Rule: Double Damage!',
      blockades: [],
      search: [
        {
          itemCardId: 'cannon',
          target: {
            row: 1,
            column: 8,
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
      id: 'K3',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do! Lv.1',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'medli',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'boomerang',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: [],
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
        status: 'unrestricted',
      },
    },
    {
      id: 'K4',
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Guard the allied keeps with your life! Lv.2',
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
            itemCardId: 'salvage-arm',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: [],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'K5',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of Bomb Island!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'linkle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located southwest from the Statue Keep past the tree.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Skills!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'hammer',
          target: {
            row: 7,
            column: 1,
          },
        },
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
            characterId: 'linkle',
          },
        ],
      },
    },
    {
      id: 'K6',
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Attend the Festival of Cuccos!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'rito-harp',
          level: '3',
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
            characterId: 'medli',
            location: 'East Field Keep',
            keepId: 'east-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-korok-aura' },
            text: 'Fairy Decoration - Korok Aura',
            location: 'W. Rockface Keep',
            keepId: 'west-rockface-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'life-tree-fruit' },
            text: 'Fairy Food - Life Tree Fruit',
            location: 'Fairy Fountain [Pot]',
            keepId: 'fairy-fountain',
          },
        ],
      },
      requirements: {
        kills: 1600,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Focus Spirit!',
      blockades: ['north', 'south', 'west'],
      search: [
        {
          itemCardId: 'deku-leaf',
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
            characterId: 'medli',
          },
        ],
      },
    },
    {
      id: 'K7',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.3',
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
            itemCardId: 'salvage-arm',
          },
        ],
      },
      requirements: {
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Focus Spirit!',
      blockades: ['north'],
      search: [],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'L1',
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: A distant voice cries out for help!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitId: 'standard-robes-wind-waker',
            outfitName: 'Standard Robes (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ganondorf',
            location: 'Lakeside Keep',
            keepId: 'lakeside-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-usurper-pants' },
            text: 'Fairy Bottom - Usurper Pants',
            location: 'Temple Face Keep',
            keepId: 'temple-face-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'elixir-soup' },
            text: 'Fairy Food - Elixir Soup',
            location: 'East Room [Pot]',
            keepId: 'east-room',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Skills!',
      blockades: [],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 1,
            column: 4,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
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
      id: 'L2',
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.6',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'medli',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'boomerang',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: ['south'],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 1,
            column: 12,
          },
        },
        {
          itemCardId: 'hammer',
          target: {
            row: 8,
            column: 4,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'medli',
          },
        ],
      },
    },
    {
      id: 'L3',
      battleAreaId: 'valley-of-seers',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.4",
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'twili-midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'sea-chart',
          },
        ],
      },
      requirements: {
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: ['north'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'L4',
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Lurking treachery, lurking shadows!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'cia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'deku-leaf',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-heros-trousers' },
            text: "Fairy Bottom - Hero's Trousers",
            location: 'Sacred Pedestal',
            keepId: 'sacred-pedestal',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'water-fruit' },
            text: 'Fairy Food - Water Fruit',
            location: 'South Square [Pot]',
            keepId: 'south-square',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: Speed Run!',
      blockades: [],
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
        status: 'unrestricted',
      },
    },
    {
      id: 'L5',
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Enjoy a leisurely Cucco-outing!',
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
            itemCardId: 'heros-bow',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: [],
      search: [],
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
      id: 'L6',
      battleAreaId: 'faron-woods',
      challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.3",
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'agitha',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'cannon',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: ['south'],
      fullTileSearch: {
        itemCardId: 'windwaker',
        description: 'Use the Wind Waker anywhere to reach new maps.',
      },
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 6,
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
      id: 'L7',
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Protect the Bombchu! Lv.3',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'darunia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'boomerang',
          },
        ],
      },
      requirements: {
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: ['north'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 7,
            column: 1,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'M1',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.4',
      difficulty: 'blue',
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
        kills: 1600,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 8,
            column: 2,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'M2',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Adventure Battle: Fight alongside the women of the battlefield!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'rito-harp',
          level: '4',
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
            characterId: 'medli',
            location: 'Dragon Roost',
            keepId: 'dragon-roost',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-rito-dress' },
            text: 'Fairy Top - Rito Dress',
            location: 'Jail Watch Keep',
            keepId: 'jail-watch-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'light-fruit' },
            text: 'Fairy Food - Light Fruit',
            location: 'Bomb Shop [Pot]',
            keepId: 'bomb-shop',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Focus Spirit!',
      blockades: ['north', 'south'],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 1,
            column: 15,
          },
        },
      ],
      characterSelection: {
        slots: 1,
        status: 'restricted',
        alternatives: [
          {
            characterId: 'medli',
          },
        ],
      },
    },
    {
      id: 'M3',
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Fight through the action quiz!',
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
            itemCardId: 'deku-leaf',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Special Attacks!',
      blockades: ['north'],
      quizAnswers: ['volga', 'medli', 'toon-link'],
      search: [],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'M4',
      battleAreaId: 'sealed-grounds',
      keepNameOverrides: { 'temple-entrance': "Enemy Base" },
      challenge: "Adventure Battle: Defeat the summoners before it's too late!",
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'fi',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'hyoi-pear',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'ghirahim',
            location: 'West Cannon Keep',
            keepId: 'west-cannon-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'hyoi-pear' },
            text: 'Fairy Food - Hyoi Pear',
            location: 'Enemy Base [Pot]',
            keepId: 'temple-entrance',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
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
        slots: '2+',
        status: 'restricted',
        alternatives: [
          {
            characterId: 'ghirahim',
          },
        ],
      },
    },
    {
      id: 'M5',
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.3',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: ['east'],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 9,
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
      id: 'M6',
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.4',
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
            itemCardId: 'hyoi-pear',
          },
        ],
      },
      requirements: {
        minutes: 15,
      },
      additionalRule: 'Endless Night Rule: No Guarding!',
      blockades: ['east'],
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
      id: 'M7',
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of the Five-Star Isles!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'sheik',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'sea-chart',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'medli',
            location: 'Central Square',
            keepId: 'central-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-rancher-poncho' },
            text: 'Fairy Top - Rancher Poncho',
            location: 'West Square',
            keepId: 'west-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'carrot' },
            text: 'Fairy Food - Carrot',
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
      additionalRule: 'Endless Night Rule: No Fairy Magic!',
      blockades: [],
      search: [
        {
          itemCardId: 'sea-chart',
          target: {
            row: 1,
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
      id: 'N1',
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: Defeat the enemy celebrities!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'darunias-bracelet',
        },
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: "Great Sea Rule: Don't Get Hit!",
      blockades: [],
      search: [
        {
          itemCardId: 'boomerang',
          target: {
            row: 2,
            column: 14,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'N2',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Confronting the opposing sorceress!',
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
            itemCardId: 'sea-chart',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located just north of West Town Keep',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and defeat 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Endless Night Rule: No Fairy Skills!',
      blockades: [],
      search: [
        {
          itemCardId: 'deku-leaf',
          target: {
            row: 2,
            column: 15,
          },
        },
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 10,
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
      id: 'N3',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Adventure Battle: Final battle! Defeat the beast of Star Belt Archipelago!',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'midna',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'hammer',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'zant',
            location: 'South Mine Keep',
            keepId: 'south-mine-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-fox-mask' },
            text: 'Fairy Headwear - Fox Mask',
            location: 'NE Sage Keep',
          keepId: 'northeast-sage-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'mushroom-spores' },
            text: 'Fairy Food - Mushroom Spores',
            location: 'northern empty keep [Pot]',
            keepId: 'north-mine-keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Focus Spirit!',
      blockades: [],
      search: [
        {
          itemCardId: 'salvage-arm',
          target: {
            row: 2,
            column: 14,
          },
        },
        {
          itemCardId: 'sea-chart',
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
            characterId: 'zant',
          },
        ],
      },
    },
    {
      id: 'N4',
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.5',
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
            itemCardId: 'cannon',
          },
        ],
      },
      requirements: {
        kills: 1200,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Healing!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 6,
            column: 2,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'N5',
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Defeat those who would borrow a weapon!',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ghirahim',
            outfitId: 'standard-outfit-wind-waker',
            outfitName: 'Standard Outfit (Wind Waker)',
          },
          {
            type: 'item-card',
            itemCardId: 'windwaker',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'link',
            location: 'Eastern Room',
            keepId: 'eastern-room',
          },
        ],
        skulltulas: [
          { id: 'skulltula-1', description: 'KO 1000 enemies. Located north of the Eastern Room.' },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and defeat 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Fairy Skills!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'salvage-arm',
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
            characterId: 'link',
          },
        ],
      },
    },
    {
      id: 'N6',
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Win the Rupee competition! Lv.4',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'sheik',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'salvage-arm',
          },
        ],
      },
      requirements: {
        damage: 149,
      },
      additionalRule: 'Endless Night Rule: No Focus Spirit!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'hyoi-pear',
          target: {
            row: 3,
            column: 14,
          },
        },
        {
          itemCardId: 'sea-chart',
          target: {
            row: 10,
            column: 5,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'N7',
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Defeat your enemies...with kindness!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'linkles-compass',
        },
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
            row: 9,
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
  ],
} satisfies MapDefinition;
