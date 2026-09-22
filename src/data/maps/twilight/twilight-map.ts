import type { MapDefinition } from '../../../domain/maps/map.model';

export const twilightMap = {
  id: 'twilight',
  name: 'Twilight Map',
  difficulty: 'hard',
  extras: 'Extra material drops',
  tiles: [
    {
      id: 'A2',
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
    },
    {
      id: 'A3',
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
    },
    {
      id: 'A4',
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
    },
    {
      id: 'A5',
      challenge:
        "Challenge Battle: Put an end to the enemy's divisive plan! Lv.8",
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'link',
          weaponName: 'Magic Rod Lv.4',
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
    },
    {
      id: 'A6',
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
    },
    {
      id: 'B2',
      challenge: 'Adventure Battle: Watch for traps on the battlefield!',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'midna',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'midna',
            location: 'North Field Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Butterfly Headband',
            location: 'East Field Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hylian Pike',
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
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 4,
            column: 10,
          },
        },
      ],
    },
    {
      id: 'B3',
      challenge: 'Adventure Battle: Defeat the Barrier Specialist Forces! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'link',
          weaponName: 'Hylian Sword Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'link',
            location: 'East Garden',
          },
          {
            type: 'fairy',
            text: "Fairy Top - Hero's Clothes",
            location: 'Northeast Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hyrule Bass',
            location: 'West Garden [Pot]',
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
    },
    {
      id: 'B4',
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
    },
    {
      id: 'B5',
      challenge: 'Challenge Battle: Protect the bombchu! Lv.8',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
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
    },
    {
      id: 'B6',
      challenge: 'Adventure Battle: Defeat the Disorderly Forces! Lv.6',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'cia',
            outfitName: 'Masked (Twilight)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitName: 'Unmasked (Twilight)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitName: 'Hatless (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'impa',
            location: 'South Garden',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the winding tunnel just south of Southeast Keep.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
    },
    {
      id: 'B7',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.9',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'C1',
      challenge:
        'Adventure Battle: Use a Magic Circle to defeat the enemy forces! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'zant',
          weaponName: 'Scimitars Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'zant',
            location: 'West Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hylian Pike',
            location: 'Southwest Keep [Jar]',
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
    },
    {
      id: 'C2',
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
    },
    {
      id: 'C3',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.6',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'C4',
      challenge:
        "Challenge Battle: Put an end to the enemy's divisive plan! Lv.6",
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'C5',
      challenge: 'Adventure Battle: A collision of cuccos! Lv.6',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'lana',
          weaponName: 'Spear Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'lana',
            location: 'Northwest Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Bee Larvae',
            location: 'Northeast Keep [Pot]',
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
    },
    {
      id: 'C6',
      challenge: 'Adventure Battle: Protect the bombchu! Lv.9',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
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
    },
    {
      id: 'C7',
      challenge: 'Adventure Battle:The hunters are on the move!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'cia',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'My Fairy - Darkness',
            location: 'South Field Keep [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Skullfish',
            location: 'Rocky Square [Pot]',
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
    },
    {
      id: 'C8',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.9',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'D1',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.3',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'D2',
      challenge: 'Adventure Battle: Defeat the Disorderly Forces! Lv.5',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'volga',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'volga',
            location: 'Town Center Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Skullfish',
            location: 'Northmost Keep [Pot]',
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
    },
    {
      id: 'D3',
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
    },
    {
      id: 'D4',
      challenge: 'Adventure Battle: Defeat the commanders of two armies! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'tetra',
          weaponName: 'Cutlass Lv.4',
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
            characterId: 'tetra',
            location: 'East Field Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Twilight Top',
            location: 'North Field Keep',
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
    },
    {
      id: 'D5',
      challenge: 'Adventure Battle: Rescue the allied forces!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'midna',
          weaponName: 'Shackle Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'midna',
            location: 'S. Entrance Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottom - Butterfly Skirt',
            location: 'South Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Greengill',
            location: 'N. Entrance Keep [Pot]',
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
    },
    {
      id: 'D6',
      challenge:
        "Challenge Battle: Put an end to the enemy's divisive plan! Lv.9",
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'D7',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'cia',
            location: 'E. Mountain Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located on the path north of the E. Boulder Keep behind a wall that must be bombed.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
    },
    {
      id: 'D8',
      challenge: 'Adventure Battle: Defeat the warriors of twilight!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'ganondorf',
          weaponName: 'Great Swords Lv.4',
        },
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'ganondorf',
            location: "King's Hall",
          },
          {
            type: 'fairy',
            text: 'Fairy Decoration - Goron Facepaint',
            location: 'Lower Level East',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Reekfish',
            location: "King's Hall [Pot]",
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
    },
    {
      id: 'E1',
      challenge: 'Adventure Battle: Defeat the beast of the ruins!',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ghirahim',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'ghirahim',
            location: 'S. Rockface Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located just north of S. Rockface Keep.',
          'Complete the first mission and capture five or more keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
    },
    {
      id: 'E2',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'E3',
      challenge: 'Adventure Battle: Defeat the commanders of two armies! Lv.1',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
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
            text: "Fairy Top - Hero's Clothes",
            location: 'N. Rockface Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Ordon Goat Cheese',
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
      search: [],
    },
    {
      id: 'E4',
      challenge: 'Adventure Battle: Fight as a warrior of water or lightning!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'link',
          weaponName: 'Spinner Lv.4',
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
            characterId: 'link',
            location: 'West Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Fused Shadow Mask',
            location: 'West Ruins',
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
    },
    {
      id: 'E5',
      challenge:
        'Adventure Battle: Final battle! Defeat the Demon King of the castle!',
      difficulty: 'red',
      rewards: {
        treasure: [
          {
            type: 'heart-container',
            characterId: 'sheik',
            location: 'Mountain Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located north of East Field Keep, on the cliff reached via Hookshot.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
    },
    {
      id: 'E6',
      challenge: 'Adventure Battle: A leader never sleeps!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'king-daphnes',
          weaponName: 'Sail Lv.4',
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
            characterId: 'king-daphnes',
            location: 'W. Rockface Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Butterfly Blouse',
            location: 'Castle Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Bombfish',
            location: 'Central Keep [Pot]',
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
    },
    {
      id: 'E7',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.7',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'link',
          weaponName: 'Gauntlets Lv.4',
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
            characterId: 'link',
            location: 'Abandoned Fort',
          },
          {
            type: 'fairy',
            text: 'Fairy Accessory - Twilight Jewel',
            location: 'W. Rockface Keep',
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
    },
    {
      id: 'E8',
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
    },
    {
      id: 'F1',
      challenge: "Adventure Battle: Defeat the summoners before it's too late!",
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
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
            text: 'My Fairy - Light',
            location: 'Southwest Keep [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Bombfish',
            location: 'West Cannon Keep [Pot]',
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
    },
    {
      id: 'F2',
      challenge:
        'Adventure Battle: Use a Magic Circle to defeat the enemy forces! Lv.1',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'fi',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'fi',
            location: 'N. Rockface Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located on the northern outside wall of West Town Keep.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
    },
    {
      id: 'F3',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'F4',
      challenge: 'Adventure Battle: Defeat the barrier specialist forces! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'linkle',
          weaponName: 'Crossbows Lv.4',
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
            characterId: 'linkle',
            location: 'Central Keep',
          },
          {
            type: 'fairy',
            text: "Fairy Top - Hero's Clothes",
            location: 'Fairy Fountain',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Ordon Catfish',
            location: 'Central Keep [Pot]',
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
    },
    {
      id: 'F5',
      challenge: 'Challenge Battle: Defeat 1,000 enemies in time!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
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
    },
    {
      id: 'F6',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'toon-link',
          weaponName: 'Light Sword Lv.4',
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
            characterId: 'toon-link',
            location: 'Abandoned Fort',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottom - Twilight Skirt',
            location: 'North Field Keep',
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
    },
    {
      id: 'F7',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.8',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'F8',
      challenge: 'Adventure Battle: Calm dissenters and crush your foe!',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ruto',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'darunia',
            location: 'W. Boulder Keep',
          },
          {
            type: 'fairy',
            text: "Fairy Food - Great Fairy's Tears",
            location: 'E. Boulder Keep [Pot]',
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
    },
    {
      id: 'G1',
      challenge:
        'Adventure Battle: Final battle! Defeat the beast of the palace!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'tingle',
          weaponName: 'Balloon Lv.4',
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
            characterId: 'tingle',
            location: 'S. Entrance Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Bee Larvae',
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
    },
    {
      id: 'G2',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.5',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'G3',
      challenge:
        "Challenge Battle: Put an end to the enemy's divisive plan! Lv.4",
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'G4',
      challenge:
        'Adventure Battle: Final battle! Defeat the dragon of the lake!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
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
            text: 'Fairy Top - Butterfly Blouse',
            location: 'Bridge Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hylian Loach',
            location: 'Rocky Square [Pot]',
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
    },
    {
      id: 'G5',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'G6',
      challenge: 'Challenge Battle: Protect the Bombchu! Lv.3',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
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
    },
    {
      id: 'G7',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'G8',
      challenge:
        'Adventure Battle: Final battle! Defeat the dragon of the volcano!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
            text: 'Fairy Decoration - Goron Facepaint',
            location: 'Stock Room',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hylian Loach',
            location: 'Central Square [Pot]',
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
    },
    {
      id: 'H1',
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
    },
    {
      id: 'H2',
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
    },
    {
      id: 'H3',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.4',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zant',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'zant',
            location: 'Exit Square',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the dead end south of Central Square.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
    },
    {
      id: 'H4',
      challenge: 'Adventure Battle: Defeat the mountain beast!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zelda',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Headwear - Butterfly Headband',
            location: 'SE Room',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Hyrule Bass',
            location: 'Hall of Mirrors [Pot]',
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
    },
    {
      id: 'H5',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
            text: 'Fairy Decoration - Butterfly Makeup',
            location: 'Mountain Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Greengill',
            location: 'Castle Keep [Pot]',
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
    },
    {
      id: 'H6',
      challenge:
        "Challenge Battle: Put an end to the enemy's divisive plan! Lv.2",
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'H7',
      challenge:
        'Adventure Battle: Stop the fortifiers and barrier specialists!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'impa',
          weaponName: 'Giant Blade Lv.4',
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
            characterId: 'impa',
            location: 'North Oasis',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Reekfish',
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
          itemCardId: 'fishing-rod',
          target: {
            row: 6,
            column: 11,
          },
        },
      ],
    },
    {
      id: 'H8',
      challenge: 'Challenge Battle: Protect the Bombchu! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'I1',
      challenge: 'Adventure Battle: Final battle! Defeat the desert dragon!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'lana',
          weaponName: 'Book of Sorcery Lv.4',
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
          'KO 1000 enemies. Located just outside west exit of S. Desert Keep.',
          'Complete the first mission and defeat 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
    },
    {
      id: 'I2',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.4',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'I3',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.4',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'I4',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.7',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
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
    },
    {
      id: 'I5',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'I6',
      challenge: 'Adventure Battle: Enjoy a leisurely Cucco-outing!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
            text: "Fairy Bottom - Hero's Trousers",
            location: 'W. Mountain Keep',
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
    },
    {
      id: 'I7',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'I8',
      challenge: 'Adventure Battle: Defeat the disorderly forces! Lv.3',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'darunia',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'darunia',
            location: 'East Goron Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Chu Jelly',
            location: 'E. Boulder Keep [Pot]',
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
    },
    {
      id: 'J1',
      challenge: 'Challenge Battle: Protect the Bombchu! Lv.5',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'agitha',
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
    },
    {
      id: 'J2',
      challenge:
        "Challenge Battle: Put an end to the enemy's divisive plan! Lv.5",
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'J3',
      challenge: 'Adventure Battle: Behold the power of teamwork!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'agitha',
        },
        treasure: [
          {
            type: 'fairy',
            text: "Fairy Top - Hero's Clothes",
            location: 'Central Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Chu Jelly',
            location: 'Central Square [Pot]',
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
    },
    {
      id: 'J4',
      challenge: 'Adventure Battle: Defeat the barrier specialist forces! Lv.1',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'zelda',
          weaponName: 'Rapier Lv.4',
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
            characterId: 'zelda',
            location: 'East Room',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Twilight Top',
            location: 'Lakeside Keep',
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
    },
    {
      id: 'J5',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'J6',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.1',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'wizzro',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'wizzro',
            location: 'Stock Room',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the path north then west from the Tunnel Square before the dropoff.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
    },
    {
      id: 'J7',
      challenge:
        "Challenge Battle: Put an end to the enemy's divisive plan! Lv.3",
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'J8',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'K1',
      challenge: 'Adventure Battle: Look for a solution!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'agitha',
          weaponName: 'Parasol Lv.4',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'agitha',
            location: 'West Temple',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottom - Butterfly Skirt',
            location: 'East Keep',
          },
          {
            type: 'fairy',
            text: "Fairy Food - Great Fairy's Tears",
            location: 'Eastern Room [Pot]',
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
    },
    {
      id: 'K2',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.7',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'impa',
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
    },
    {
      id: 'K3',
      challenge: 'Challenge Battle: Protect the Bombchu! Lv.7',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
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
    },
    {
      id: 'K4',
      challenge:
        'Adventure Battle: Final battle! Defeat the beast of the temple!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
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
          'KO 1000 enemies. Located beside the outside of the northwest wall of Temple Square.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['south'],
      search: [],
    },
    {
      id: 'K5',
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
    },
    {
      id: 'K6',
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
    },
    {
      id: 'K7',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'L3',
      challenge:
        "Challenge Battle: Put an end to the enemy's divisive plan! Lv.7",
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
    },
    {
      id: 'L4',
      challenge: 'Adventure Battle: Fight as a warrior of light! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'cia',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Bottom - Magic Skirt',
            location: 'Upper Level East',
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
    },
    {
      id: 'L5',
      challenge:
        'Adventure Battle: Recruit more allies and overwhelm the enemy!',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'lana',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'lana',
            location: 'East Temple',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the pointy dead end in the northeast corner of the map.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
    },
    {
      id: 'L6',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike!',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'sheik',
            outfitName: 'Standard Outfit (Twilight)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'sheik',
            location: 'Eastern Tree',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Ordon Goat Cheese',
            location: 'Eastern Tree [Pot]',
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
    },
    {
      id: 'M4',
      challenge:
        "Challenge Battle: Put an end to the enemy's divisive plan! Lv.1",
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'M5',
      challenge:
        'Adventure Battle: Final battle! Defeat the beast of the jungle!',
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
            characterId: 'fi',
            location: 'North Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Decoration - Goron Facepaint',
            location: 'Southeast Tree',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Ordon Catfish',
            location: 'Eastern Tree [Pot]',
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
    },
    {
      id: 'M6',
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
    },
    {
      id: 'N4',
      challenge: 'Challenge Battle: Team up and defeat the enemy forces! Lv.1',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
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
    },
    {
      id: 'N5',
      challenge: 'Challenge Battle: Protect the Bombchu!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
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
    },
    {
      id: 'N6',
      challenge: 'Adventure Battle: Show no fear to the enemies of Twilight!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'midna',
        },
        treasure: [
          {
            type: 'fairy',
            text: "Fairy Top - Hero's Clothes",
            location: 'South Field Keep',
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
    },
    {
      id: 'O6',
      challenge: 'Challenge Battle: Learn the key to a balanced attack! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
        },
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: [],
      search: [],
    },
  ],
} satisfies MapDefinition;
