import type { MapDefinition } from '../../../domain/maps/map.model';

export const adventureMap = {
  id: 'adventure',
  name: 'Adventure Map',
  difficulty: 'easy',
  tiles: [
    {
      id: 'A1',
      challenge: 'Challenge Battle: Defeat 1,000 enemies in time!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'heart-container',
            characterId: 'agitha',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'A2',
      challenge: 'Adventure Battle: Stop the healers from, well, healing!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'keaton-mask',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Food - Magic Beans',
            location: 'South Field Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['south'],
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
      id: 'A3',
      challenge: 'Adventure Battle: Defeat the Dinolfos Forces!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'impa',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'toon-link',
            location: 'West Square',
          },
          {
            type: 'fairy',
            text: 'My Fairy - Fire',
            location: 'Fairy Fountain [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Weird Egg',
            location: 'Dark Forest Keep [Pot]',
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
          itemCardId: 'digging-mitts',
          target: {
            row: 10,
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
      id: 'A4',
      challenge: 'Adventure Battle: Defeat the Shield Moblin Forces! Lv.1',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zant',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'zant',
            location: 'Southeast Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Odd Mushroom',
            location: 'Fairy Fountain [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 4,
            column: 2,
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
      id: 'A5',
      challenge: 'Adventure Battle: Defeat the Darknut Forces! Lv.2',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'agitha',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'agitha',
            location: 'South Field Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Decoration - Sheikah Facepaint',
            location: 'North Field Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      search: [
        {
          itemCardId: 'digging-mitts',
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
            characterId: 'agitha',
          },
        ],
      },
    },
    {
      id: 'A6',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.6',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['east'],
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
      id: 'A7',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.7',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'agitha',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goddess-harp',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['south'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'A8',
      challenge: 'Adventure Battle: Defeat the enemy forces! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'great-fairy',
          level: '1',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Demon Lord Cape',
            location: 'Southwest Keep',
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
          itemCardId: 'ice-arrow',
          target: {
            row: 5,
            column: 1,
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
      id: 'B1',
      challenge: 'Adventure Battle: Defend the allied keeps! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'dominion-rod',
          level: '1',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'zelda',
            location: 'East Goron Keep',
          },
          {
            type: 'heart-piece',
            characterId: 'zelda',
            location: 'Stronghold',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 9,
          },
        },
        {
          itemCardId: 'goddess-harp',
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
            characterId: 'zelda',
          },
        ],
      },
    },
    {
      id: 'B2',
      challenge: 'Challenge Battle: Fight through the royalty quiz!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'young-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ice-arrow',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east', 'south'],
      quizAnswers: ['zant', 'impa', 'zelda'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 6,
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
      id: 'B3',
      challenge: 'Adventure Battle: Defeat the warriors of Twilight!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'spinner',
          level: '1',
        },
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
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
          },
        ],
      },
    },
    {
      id: 'B4',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.4',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'linkle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'recorder',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'B5',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.7',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ice-arrow',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      blockades: ['east', 'south'],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'B6',
      challenge: 'Adventure Battle: Capture the enemy keeps! Lv.2',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitName: 'Knight of Skyloft',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Bottoms - Demon Lord Slacks',
            location: 'Southwest Keep',
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
          itemCardId: 'candle',
          target: {
            row: 6,
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
          },
        ],
      },
    },
    {
      id: 'B7',
      challenge: 'Challenge Battle: Defeat 700 enemies in time! Lv.3',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
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
      id: 'B8',
      challenge: 'Adventure Battle: Defeat the commanders of two armies! Lv.3',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitName: 'Skyloft Robes',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'zelda',
            location: 'Eastern Room',
          },
          {
            type: 'heart-piece',
            characterId: 'zelda',
            location: 'South Temple',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Spirit Dress',
            location: 'East Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 5,
          },
        },
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 7,
            column: 11,
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
      id: 'C1',
      challenge: 'Adventure Battle: Fight as a warrior of darkness! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ruto',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'skull-kid',
            location: 'Central Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located just outside the west exit of North Entrance Keep.',
          'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 4,
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
      id: 'C2',
      challenge:
        'Adventure Battle: Be like a magician and make your foes disappear!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zant',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'zant',
            location: 'W. Mountain Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottoms - Royal Skirt',
            location: 'West Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['west', 'south'],
      search: [
        {
          itemCardId: 'bomb',
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
            characterId: 'zant',
          },
        ],
      },
    },
    {
      id: 'C3',
      challenge: 'Adventure Battle: Defeat the shadow beast!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'agithas-pendant',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'agitha',
            location: 'Rocky Square',
          },
          {
            type: 'heart-piece',
            characterId: 'agitha',
            location: 'Outskirts Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located along the north wall of Bridge Keep.',
          'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east', 'west'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'C4',
      challenge: 'Challenge Battle: Defeat 600 enemies in time! Lv.1',
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
      blockades: ['south'],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'C5',
      challenge: 'Adventure Battle: Defeat the primordial beast!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'skull-kid',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ladder',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'sheik',
            location: 'Statue Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located next to the west entrance of the bridge southwest from Town Center Keep.',
          'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east', 'west'],
      search: [
        {
          itemCardId: 'recorder',
          target: {
            row: 4,
            column: 6,
          },
        },
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 4,
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
      id: 'C6',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.7',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'fi',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'C7',
      challenge:
        'Adventure Battle: Defeat enemies while collecting treasure! Yay!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'ghirahims-cape',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'zant',
            location: 'Fairy Fountain',
          },
          {
            type: 'heart-piece',
            characterId: 'young-link',
            location: 'Castle Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Accessory - Demon Lord Earrings',
            location: 'Mountain Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'C8',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.10',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'skull-kid',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ice-arrow',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 5,
            column: 5,
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
      id: 'D1',
      challenge: 'Adventure Battle: Fight the chosen ones!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'agitha',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'agitha',
            location: 'Central Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Royal Hood',
            location: 'Castle Keep',
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
          itemCardId: 'bomb',
          target: {
            row: 4,
            column: 7,
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
      id: 'D2',
      challenge: 'Adventure Battle: Dash gallantly into battle!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'twili-midna',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'twili-midna',
            location: 'South Square',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the dead end south of the Central Square.',
          'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
            row: 1,
            column: 2,
          },
        },
        {
          itemCardId: 'goddess-harp',
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
            characterId: 'twili-midna',
          },
        ],
      },
    },
    {
      id: 'D3',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.5',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'twili-midna',
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
      blockades: ['north', 'west'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
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
      id: 'D4',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.5',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ruto',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
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
          itemCardId: 'bomb',
          target: {
            row: 1,
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
      id: 'D5',
      challenge: 'Challenge Battle: Defeat 700 enemies in time! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'young-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goddess-harp',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east', 'west'],
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 5,
            column: 6,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'D6',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.8',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ghirahim',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'water-bomb',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'D7',
      challenge: 'Challenge Battle: Defeat 700 enemies in time! Lv.1',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ruto',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 6,
            column: 6,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'D8',
      challenge: 'Challenge Battle: Fight through the mystery mastery quiz!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ghirahim',
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
      quizAnswers: ['aeralfos', 'shield-moblin', 'big-poe'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'E1',
      challenge: 'Challenge Battle: Fight through the Triforce quiz!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zelda',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 199,
      },
      blockades: ['west', 'south'],
      quizAnswers: ['ganondorf', 'zelda', 'link'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'E2',
      challenge: 'Adventure Battle: Attend the Festival of Cuccos!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ganondorf',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Food - Lon Lon Milk',
            location: 'Fairy Fountain [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north'],
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
      id: 'E3',
      challenge: 'Challenge Battle: Fight through the action quiz!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'young-link',
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
      blockades: ['south'],
      quizAnswers: ['aeralfos', 'moblin', 'lizalfos'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 4,
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
      id: 'E4',
      challenge: 'Adventure Battle: Rescue the allied forces! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ghirahim',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'ghirahim',
            location: 'West Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Sheikah Shirt',
            location: 'Southwest Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east', 'west'],
      search: [
        {
          itemCardId: 'power-bracelet',
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
            characterId: 'ghirahim',
          },
        ],
      },
    },
    {
      id: 'E5',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.8',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitName: 'Zora Tunic',
          },
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['east', 'west'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 8,
            column: 2,
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
      id: 'E6',
      challenge: 'Adventure Battle: Defend the allied keeps! Lv.1',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'fi',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'fi',
            location: 'Academy Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Decoration - Sheikah Facepaint',
            location: 'S. Rockface Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 1,
            column: 10,
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
      id: 'E7',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.9',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'agitha',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      blockades: ['south'],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'E8',
      challenge: 'Adventure Battle: Defeat the wasteland beast!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tingle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'raft',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'tingle',
            location: "Arbiter's Keep",
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located to the far west from the North Oasis.',
          'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east'],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'F1',
      challenge: 'Adventure Battle: Defeat the Demon King!',
      difficulty: 'red',
      rewards: {
        treasure: [
          {
            type: 'heart-piece',
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
      blockades: ['south'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 6,
            column: 5,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
      isFinalBoss: true,
    },
    {
      id: 'F2',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.14',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'ganondorf',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 199,
      },
      blockades: ['north'],
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
      id: 'F3',
      challenge: 'Adventure Battle: Fight as a warrior of darkness! Lv.2',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'character',
            characterId: 'twili-midna',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'midna',
            location: 'South Field Keep',
          },
          {
            type: 'heart-piece',
            characterId: 'twili-midna',
            location: 'Outskirts Keep',
          },
          {
            type: 'fairy',
            text: 'My Fairy - Lightning',
            location: 'North Field Keep [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Magic Beans',
            location: 'West Field Keep [Pot]',
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
          itemCardId: 'power-bracelet',
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
      id: 'F4',
      challenge: 'Challenge Battle: Defeat 600 enemies in time! Lv.2',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'agitha',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['south', 'west'],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'F5',
      challenge: 'Adventure Battle: Defeat the ocean beast!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'water-bomb',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'twili-midna',
            location: 'West Field Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located northeast from South Field Keep.',
          'Complete the first mission and capture five or more Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east', 'west'],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'F6',
      challenge: 'Challenge Battle: Fight through the Twilight Princess quiz!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 149,
      },
      quizAnswers: ['agitha', 'agitha', 'midna'],
      search: [
        {
          itemCardId: 'raft',
          target: {
            row: 4,
            column: 8,
          },
        },
      ],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'F7',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.8',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'fi',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
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
      id: 'F8',
      challenge: 'Challenge Battle: Fight through the Skyward Sword quiz!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'fi',
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
      blockades: ['west'],
      quizAnswers: ['ghirahim', 'moblin', 'fi'],
      search: [
        {
          itemCardId: 'water-bomb',
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
            characterId: 'fi',
          },
        ],
      },
    },
    {
      id: 'G1',
      challenge: 'Adventure Battle: Go alone--despite the danger!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitName: 'Goron Tunic',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'link',
            location: 'West Cannon Keep',
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
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
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
      id: 'G2',
      challenge: 'Adventure Battle: Capture the enemy keeps! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tingle',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'tingle',
            location: 'Town Center Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Accessory - Twilight Jewel',
            location: 'Central Square',
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
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 7,
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
      id: 'G3',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.6',
      difficulty: 'purple',
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
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      blockades: ['north', 'west'],
      search: [
        {
          itemCardId: 'bomb',
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
      id: 'G4',
      challenge: 'Adventure Battle: Fight as a warrior of darkness! Lv.1',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitName: 'Wind Waker Robes',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'zant',
            location: 'Southeast Square',
          },
          {
            type: 'heart-piece',
            characterId: 'zant',
            location: 'Central Square',
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
          itemCardId: 'water-bomb',
          target: {
            row: 4,
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
      id: 'G5',
      challenge: 'Adventure Battle: Defeat the Moblin Forces!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tingle',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'toon-link',
            location: 'South Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Kokiri Band',
            location: 'North Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Odd Mushroom',
            location: 'Western Tree [Pot]',
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
          itemCardId: 'candle',
          target: {
            row: 7,
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
      id: 'G6',
      challenge: 'Adventure Battle: Fight as a warrior of fire!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'linkle',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Headwear - Kokiri Band',
            location: 'South Field Keep',
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
          itemCardId: 'candle',
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
            characterId: 'midna',
          },
        ],
      },
    },
    {
      id: 'G7',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zant',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 99,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
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
      id: 'G8',
      challenge: 'Adventure Battle: Fight as a warrior of light! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'ghirahim',
            location: 'Abandoned Fort',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located along the wall if you go north then west from the Castle Keep.',
          'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      search: [
        {
          itemCardId: 'bomb',
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
      id: 'H1',
      challenge: "Adventure Battle: Prevent the sorceress's scheme!",
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'linkle',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'linkle',
            location: 'Northwest Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 4,
            column: 10,
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
      id: 'H2',
      challenge: 'Adventure Battle: Deal with uninvited guests!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'trident',
          level: '1',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'ganondorf',
            location: 'South Garden',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      search: [
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 2,
            column: 0,
          },
        },
        {
          itemCardId: 'digging-mitts',
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
          },
        ],
      },
    },
    {
      id: 'H3',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.6',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
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
      blockades: ['south'],
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
            characterId: 'toon-link',
          },
        ],
      },
    },
    {
      id: 'H4',
      challenge: 'Adventure Battle: Defeat the island beast!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'young-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'young-link',
            location: 'Crystal Cave',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located straight to the west from Crystal Cave at the cliff where you can jump down.',
          'Complete the first mission and capture five enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['north', 'south', 'west'],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'H5',
      challenge: 'Challenge Battle: Defeat 400 enemies in time! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'lana',
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
      blockades: ['north', 'south'],
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 7,
            column: 11,
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
      id: 'H6',
      challenge: 'Challenge Battle: Fight through the weapon quiz!',
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
        kills: 3,
        minutes: 15,
        damage: 99,
      },
      blockades: ['north', 'south'],
      quizAnswers: ['darknut', 'stalmaster', 'moblin'],
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
      id: 'H7',
      challenge: 'Adventure Battle: Defeat the Darknut Forces! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'skull-kid',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'skull-kid',
            location: 'W. Rockface Keep',
          },
          {
            type: 'fairy',
            text: 'My Fairy - Light',
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
          itemCardId: 'bomb',
          target: {
            row: 1,
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
      id: 'H8',
      challenge: 'Challenge Battle: Defeat 300 enemies in time!',
      difficulty: 'colorless',
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
        damage: 99,
      },
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'I1',
      challenge: 'Adventure Battle: Weather the storm of enemy forces!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'summoning-gate',
          level: '1',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'lana',
            location: "King's Hall",
          },
          {
            type: 'heart-piece',
            characterId: 'lana',
            location: 'Southeast Square',
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
          itemCardId: 'ice-arrow',
          target: {
            row: 8,
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
          },
        ],
      },
    },
    {
      id: 'I2',
      challenge: 'Adventure Battle: Defeat the enemy forces! Lv.3',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ghirahim',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'ghirahim',
            location: 'Northeast Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Pirate Vest',
            location: 'East Garden',
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
          itemCardId: 'digging-mitts',
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
            characterId: 'ghirahim',
          },
        ],
      },
    },
    {
      id: 'I3',
      challenge: 'Adventure Battle: Capture the enemy keeps! Lv.1',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'midna',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'midna',
            location: 'Central Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottoms - Sheikah Leggings',
            location: 'West Square',
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
          itemCardId: 'candle',
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
            characterId: 'midna',
          },
        ],
      },
    },
    {
      id: 'I4',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
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
        minutes: 15,
        damage: 99,
      },
      blockades: ['east'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'I5',
      challenge: 'Adventure Battle: Defeat the enemy forces! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'tingle',
            location: 'West Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Kokiri Cardigan',
            location: 'South Square',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      blockades: ['east'],
      search: [
        {
          itemCardId: 'candle',
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
      id: 'I6',
      challenge: 'Challenge Battle: Fight through the forgetful foe quiz!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'darunia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 99,
      },
      quizAnswers: ['moblin', 'big-poe', 'shield-moblin'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'I7',
      challenge: 'Adventure Battle: Fight as a warrior of water! Lv.1',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'character',
            characterId: 'young-link',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'impa',
            location: 'Fairy Fountain',
          },
          {
            type: 'heart-piece',
            characterId: 'twili-midna',
            location: 'Castle Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottoms - Kokiri Shorts',
            location: 'Mountain Keep',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      search: [
        {
          itemCardId: 'candle',
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
      id: 'I8',
      challenge: 'Adventure Battle: Duel with the dragon knight!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'sheik',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'toon-link',
            location: 'Deku Tree',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Deku Nut',
            location: 'Southern Tree [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 6,
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
      id: 'J1',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.12',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'fi',
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
      blockades: ['east', 'south'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'J2',
      challenge: "Challenge Battle: Fight through the women's weapons quiz!",
      difficulty: 'blue',
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
        kills: 3,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north', 'south'],
      quizAnswers: ['lana', 'lana', 'midna'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'J3',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.4',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'darunia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'water-bomb',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      blockades: ['north', 'south'],
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
      id: 'J4',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'twili-midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east', 'west'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'J5',
      challenge: 'Adventure Battle: Fight as a warrior of fire! Lv.1',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitName: 'Classic Tunic',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'darunia',
            location: 'Lakeside Keep',
          },
          {
            type: 'heart-piece',
            characterId: 'darunia',
            location: 'Temple Face Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottoms - Zora Skirt',
            location: "King's Hall",
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
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 3,
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
      id: 'J6',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.2',
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
        minutes: 15,
        damage: 99,
      },
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
      id: 'J7',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'lana',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 99,
      },
      blockades: ['south'],
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
      id: 'J8',
      challenge: 'Adventure Battle: Prevent reinforcements from arriving!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zelda',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'zelda',
            location: 'N. Entrance Keep',
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
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 8,
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
      id: 'K1',
      challenge: 'Challenge Battle: Defend the allied keeps! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'lana',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Royal Tunic',
            location: 'East Temple Hall',
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
          itemCardId: 'digging-mitts',
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
            characterId: 'lana',
          },
        ],
      },
    },
    {
      id: 'K2',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.12',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ghirahim',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'hookshot',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 199,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'hookshot',
          target: {
            row: 2,
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
      id: 'K3',
      challenge: 'Challenge Battle: Fight through the tricky quiz!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'ruto',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north'],
      quizAnswers: ['big-poe', 'redead-knight', 'sheik'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'K4',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-piece',
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
      blockades: ['west'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'K5',
      challenge: 'Challenge Battle: Defeat 500 enemies in time! Lv.3',
      difficulty: 'yellow',
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
        damage: 149,
      },
      blockades: ['south'],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'K6',
      challenge: 'Challenge Battle: Defeat 400 enemies in time! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'skull-kid',
        },
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 8,
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
      id: 'K7',
      challenge: 'Adventure Battle: Defeat the commanders of two armies! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'naginata',
          level: '1',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'impa',
            location: 'Fairy Fountain',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Kokiri band',
            location: 'Eastern Tree',
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
          itemCardId: 'candle',
          target: {
            row: 6,
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
          },
        ],
      },
    },
    {
      id: 'K8',
      challenge:
        'Challenge Battle: Watch out! All atacks are devastating! Lv.11',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goddess-harp',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      blockades: ['north'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'L1',
      challenge: 'Adventure Battle: Defeat the mountain beast!',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'character',
            characterId: 'tingle',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'skull-kid',
            location: 'West Goron Keep',
          },
          {
            type: 'heart-piece',
            characterId: 'skull-kid',
            location: 'Stronghold Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located southeast from E. Boulder Keep.',
          'Complete the first mission and capture five enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'ice-arrow',
          target: {
            row: 3,
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
      id: 'L2',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goddess-harp',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      blockades: ['south'],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'L3',
      challenge: 'Challenge Battle: Defeat 500 enemies in time! Lv.1',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
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
        minutes: 15,
        damage: 149,
      },
      blockades: ['north'],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'L4',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'young-link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['east'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'L5',
      challenge: 'Adventure Battle: Defeat the warriors of time!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zelda',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'zelda',
            location: 'Lakeside Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Accessory - Zora Earrings',
            location: 'Temple Face Keep',
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
          itemCardId: 'candle',
          target: {
            row: 2,
            column: 11,
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
      id: 'L6',
      challenge: 'Adventure Battle: Rescue the allied forces! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'twili-midna',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'ruto',
            location: 'Crystal Cave',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located north of the west entrance to the Stock Room.',
          'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      search: [
        {
          itemCardId: 'candle',
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
      challenge: 'Challenge Battle: Defeat 800 enemies in time!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'sheik',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'water-bomb',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 6,
            column: 8,
          },
        },
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 7,
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
      id: 'L8',
      challenge: 'Adventure Battle: Run swiftly across the battlefield!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'young-link',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'young-link',
            location: 'S. Rockface Keep',
          },
          {
            type: 'fairy',
            text: 'My Fairy (Dark) -',
            location: 'Enemy Base [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Magic Beans',
            location: 'Town Center Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      search: [
        {
          itemCardId: 'bomb',
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
      id: 'M1',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.11',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ganondorf',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goddess-harp',
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
            characterId: 'ganondorf',
          },
        ],
      },
    },
    {
      id: 'M2',
      challenge: 'Challenge Battle: Fight through the Ocarina of Time quiz!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'darunia',
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
      quizAnswers: ['darunia', 'sheik', 'ruto'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 4,
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
      id: 'M3',
      challenge: 'Adventure Battle: Defeat the commanders of two armies! Lv.2',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'character',
            characterId: 'skull-kid',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'darunia',
            location: 'Central Keep',
          },
          {
            type: 'heart-piece',
            characterId: 'darunia',
            location: 'N. Settlement',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Zora Tunic',
            location: "Arbiter's Keep",
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
            row: 6,
            column: 9,
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
      id: 'M4',
      challenge: 'Adventure Battle: Defeat the cliff beast!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'sheik',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'raft',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'sheik',
            location: 'East Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the dead end northeast from the East Keep.',
          'Complete the first mission and capture five or more enemy keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east', 'west'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'M5',
      challenge: 'Challenge Battle: Fight through the tribe quiz!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ghirahim',
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
      blockades: ['south', 'west'],
      quizAnswers: ['ruto', 'impa', 'darunia'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'M6',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'sheik',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 99,
      },
      blockades: ['north'],
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'M7',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.10',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'young-link',
        },
        clear: [
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
      blockades: ['south'],
      search: [
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 4,
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
      id: 'M8',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.11',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ghirahim',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 199,
      },
      blockades: ['north'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 6,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'N1',
      challenge: 'Adventure Battle: Fight the chosen ones!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'darunia',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'darunia',
            location: 'Central Chamber',
          },
          {
            type: 'fairy',
            text: 'My Fairy - Darkness',
            location: 'Central Chamber [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Deku Nut',
            location: 'West Garden [Pot]',
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
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 9,
          },
        },
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 5,
            column: 11,
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
      id: 'N2',
      challenge: 'Adventure Battle: Capture the enemy keeps! Lv.4',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ganondorf',
        },
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 149,
      },
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 3,
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
      id: 'N3',
      challenge: 'Adventure Battle: Defeat the warriors of time!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tingle',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'tingle',
            location: 'West Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Accessory - Zora Earrings',
            location: 'West Boulder Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
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
      id: 'N4',
      challenge: 'Challenge Battle: Defeat 500 enemies in time! Lv.2',
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
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      blockades: ['east', 'west'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 4,
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
      id: 'N5',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.4',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ruto',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 6,
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
      id: 'N6',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.5',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'darunia',
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
        damage: 149,
      },
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
      id: 'N7',
      challenge: 'Adventure Battle: Defeat the forest dragon!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'gauntlets',
          level: '1',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'link',
            location: 'Temple Square',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located east of the Temple Square.',
          'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
          itemCardId: 'candle',
          target: {
            row: 2,
            column: 10,
          },
        },
        {
          itemCardId: 'goddess-harp',
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
            characterId: 'link',
          },
        ],
      },
    },
    {
      id: 'N8',
      challenge: 'Adventure Battle: Defeat the Shield Moblin Forces! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'fi',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'fi',
            location: 'Southeast Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottoms - Pirate Slacks',
            location: 'Upper Level East',
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
          itemCardId: 'bomb',
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
            characterId: 'fi',
          },
        ],
      },
    },
    {
      id: 'O1',
      challenge: 'Challenge Battle: Fight through the legendary warrior quiz!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zant',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'digging-mitts',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 199,
      },
      blockades: ['east', 'west'],
      quizAnswers: ['ruto', 'agitha', 'ganondorf'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'O2',
      challenge: 'Adventure Battle: Rescue the allied forces! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'midna',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'zant',
            location: 'Castle Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Royal Tunic',
            location: 'North Field Keep',
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
            row: 1,
            column: 12,
          },
        },
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 3,
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
      id: 'O3',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.10',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'baton',
          level: '1',
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
      blockades: ['north', 'east'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 8,
            column: 1,
          },
        },
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 10,
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
      id: 'O4',
      challenge: 'Adventure Battle: Watch out for thieves!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'impa',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'impa',
            location: 'N. Entrance Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Accessory - Pirate Bandana',
            location: 'South Square',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['south', 'west'],
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 2,
            column: 10,
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
      id: 'O5',
      challenge: 'Adventure Battle: Fight as a warrior of water! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'epona',
          level: '1',
        },
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      blockades: ['north', 'east', 'south'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 4,
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
      id: 'O6',
      challenge: 'Adventure Battle: Defeat the Big Poe Forces!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'skull-kid',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'skull-kid',
            location: 'South Temple',
          },
          {
            type: 'fairy',
            text: 'Fairy Accessory - Zora Earrings',
            location: 'East Keep',
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
          itemCardId: 'ice-arrow',
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
      id: 'O7',
      challenge: 'Challenge Battle: Fight through the travel memories quiz!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'twili-midna',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goddess-harp',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north', 'south'],
      quizAnswers: ['lizalfos', 'wizzro', 'cia'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'O8',
      challenge: 'Adventure Battle: Defeat the warriors of Skyloft!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'midna',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'young-link',
            location: 'N. Settlement',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Island Dress',
            location: 'Rockface Keep',
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
            row: 3,
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
      id: 'P1',
      challenge: 'Adventure Battle: Take on the sword masters!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          weaponId: 'boots',
          level: '1',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'linkle',
            location: "Arbiter's Keep",
          },
          {
            type: 'heart-piece',
            characterId: 'toon-link',
            location: 'North Oasis',
          },
          {
            type: 'heart-piece',
            characterId: 'linkle',
            location: 'North Oasis',
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
          itemCardId: 'digging-mitts',
          target: {
            row: 3,
            column: 10,
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
      id: 'P2',
      challenge: 'Adventure Battle: Fight as a warrior of water! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'link',
        },
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['south'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 7,
            column: 1,
          },
        },
        {
          itemCardId: 'hookshot',
          target: {
            row: 0,
            column: 8,
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
      id: 'P3',
      challenge:
        'Adventure Battle: Survive the attack of those powered-up enemies!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'lana',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Bottoms - Royal Skirt',
            location: 'North Square',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      blockades: ['north', 'west'],
      search: [
        {
          itemCardId: 'digging-mitts',
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
            characterId: 'lana',
          },
        ],
      },
    },
    {
      id: 'P4',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.13',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'skull-kid',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goddess-harp',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 199,
      },
      search: [
        {
          itemCardId: 'raft',
          target: {
            row: 4,
            column: 6,
          },
        },
      ],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'P5',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.9',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tingle',
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
        damage: 199,
      },
      blockades: ['west'],
      search: [
        {
          itemCardId: 'ladder',
          target: {
            row: 5,
            column: 12,
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
      id: 'P6',
      challenge: 'Adventure Battle: Battle across the field!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ruto',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'ruto',
            location: "King's Hall",
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Weird Egg',
            location: 'Central Hall [Pot]',
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
          itemCardId: 'ladder',
          target: {
            row: 5,
            column: 12,
          },
        },
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 6,
            column: 2,
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
        ],
      },
    },
    {
      id: 'P7',
      challenge: 'Adventure Battle: Watch out for falling artillery fire!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zant',
        },
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'ghirahim',
            location: 'Northwest Keep',
          },
          {
            type: 'fairy',
            text: 'My Fairy - Water',
            location: 'West Keep [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Lon Lon Milk',
            location: 'Northwest Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 5,
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
      id: 'P8',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.9',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'sheik',
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
        damage: 199,
      },
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
  ],
} satisfies MapDefinition;
