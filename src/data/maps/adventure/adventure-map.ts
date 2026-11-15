import type { MapDefinition } from '../../../domain/maps/map.model';

export const adventureMap = {
  id: 'adventure',
  name: 'Adventure Map',
  difficulty: 'easy',
  tiles: [
    {
      id: 'A1',
      battleAreaId: 'ganons-tower',
      challenge: 'Challenge Battle: Defeat 1,000 enemies in time!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
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
      battleAreaId: 'ganons-tower',
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
            content: { kind: 'fairy-food', foodId: 'magic-beans' },
            text: 'Fairy Food - Magic Beans',
            location: 'South Field Keep [Pot]',
            keepId: 'south-field-keep',
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
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Defeat the Dinolfos Forces!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'impa',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'toon-link',
            location: 'West Square',
            keepId: 'west-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'adventure-a3' },
            text: 'My Fairy - Fire',
            location: 'Fairy Fountain [Pot]',
            keepId: 'fairy-fountain',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'weird-egg' },
            text: 'Fairy Food - Weird Egg',
            location: 'Dark Forest Keep [Pot]',
            keepId: 'dark-forest-keep',
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Defeat the Shield Moblin Forces! Lv.1',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'zant',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'zant',
            location: 'Southeast Square',
            keepId: 'southeast-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'odd-mushroom' },
            text: 'Fairy Food - Odd Mushroom',
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
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Defeat the Darknut Forces! Lv.2',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'agitha',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'agitha',
            location: 'South Field Keep',
            keepId: 'south-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-sheikah-facepaint' },
            text: 'Fairy Decoration - Sheikah Facepaint',
            location: 'North Field Keep',
            keepId: 'north-field-keep',
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.6',
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
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.7',
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
      battleAreaId: 'sealed-grounds',
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
            content: { kind: 'fairy-clothing', clothingId: 'top-demon-lord-cape' },
            text: 'Fairy Top - Demon Lord Cape',
            location: 'Southwest Keep',
            keepId: 'southwest-keep',
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
      battleAreaId: 'death-mountain',
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
            occurrenceId: 'heart-container-1',
            characterId: 'zelda',
            location: 'East Goron Keep',
            keepId: 'east-goron-keep',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'zelda',
            location: 'Stronghold',
            keepId: 'stronghold',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Fight through the royalty quiz!',
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
      battleAreaId: 'valley-of-seers',
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
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.4',
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.7',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Capture the enemy keeps! Lv.2',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitId: 'knight-of-skyloft',
            outfitName: 'Knight of Skyloft',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-demon-lord-slacks' },
            text: 'Fairy Bottoms - Demon Lord Slacks',
            location: 'Southwest Keep',
            keepId: 'southwest-keep',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Defeat 700 enemies in time! Lv.3',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Defeat the commanders of two armies! Lv.3',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitId: 'skyloft-robes',
            outfitName: 'Skyloft Robes',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'zelda',
            location: 'Eastern Room',
            keepId: 'eastern-room',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'zelda',
            location: 'South Temple',
            keepId: 'south-temple',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-spirit-dress' },
            text: 'Fairy Top - Spirit Dress',
            location: 'East Keep',
            keepId: 'east-keep',
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Fight as a warrior of darkness! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ruto',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'skull-kid',
            location: 'Central Keep',
            keepId: 'central-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located just outside the west exit of North Entrance Keep.',
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
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Be like a magician and make your foes disappear!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'zant',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'zant',
            location: 'W. Mountain Keep',
            keepId: 'west-mountain-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-royal-skirt' },
            text: 'Fairy Bottoms - Royal Skirt',
            location: 'West Keep',
            keepId: 'west-keep',
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
      battleAreaId: 'twilight-field',
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
            occurrenceId: 'heart-container-1',
            characterId: 'agitha',
            location: 'Rocky Square',
            keepId: 'rocky-square',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'agitha',
            location: 'Outskirts Keep',
            keepId: 'outskirts-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located along the north wall of Bridge Keep.',
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
      blockades: ['north', 'east', 'west'],
      characterSelection: {
        slots: 'unknown',
        status: 'unrestricted',
      },
    },
    {
      id: 'C4',
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Defeat 600 enemies in time! Lv.1',
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
      blockades: ['south'],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'C5',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Defeat the primordial beast!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
            occurrenceId: 'heart-piece-1',
            characterId: 'sheik',
            location: 'Statue Keep',
            keepId: 'statue-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located next to the west entrance of the bridge southwest from Town Center Keep.',
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
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.7',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Defeat enemies while collecting treasure! Yay!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'material',
          materialId: 'ghirahims-cape',
        },
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'zant',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'young-link',
            location: 'Castle Keep',
            keepId: 'castle-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'accessory-demon-lord-earrings' },
            text: 'Fairy Accessory - Demon Lord Earrings',
            location: 'Mountain Keep',
            keepId: 'mountain-keep',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.10',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Fight the chosen ones!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'agitha',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'agitha',
            location: 'Central Keep',
            keepId: 'central-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-royal-hood' },
            text: 'Fairy Headwear - Royal Hood',
            location: 'Castle Keep',
            keepId: 'castle-keep',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Dash gallantly into battle!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'twili-midna',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'twili-midna',
            location: 'South Square',
            keepId: 'south-square',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located in the dead end south of the Central Square.',
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
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.5',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.5',
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
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Defeat 700 enemies in time! Lv.2',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.8',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Defeat 700 enemies in time! Lv.1',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Fight through the mystery mastery quiz!',
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
      battleAreaId: 'ganons-tower',
      challenge: 'Challenge Battle: Fight through the Triforce quiz!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Attend the Festival of Cuccos!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ganondorf',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'lon-lon-milk' },
            text: 'Fairy Food - Lon Lon Milk',
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
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Fight through the action quiz!',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Rescue the allied forces! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ghirahim',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'ghirahim',
            location: 'West Keep',
            keepId: 'west-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-sheikah-shirt' },
            text: 'Fairy Top - Sheikah Shirt',
            location: 'Southwest Keep',
            keepId: 'southwest-keep',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.8',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitId: 'zora-tunic',
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
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Defend the allied keeps! Lv.1',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'fi',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'fi',
            location: 'Academy Keep',
            keepId: 'academy-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'decoration-sheikah-facepaint' },
            text: 'Fairy Decoration - Sheikah Facepaint',
            location: 'S. Rockface Keep',
            keepId: 'south-rockface-keep',
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
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.9',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Adventure Battle: Defeat the wasteland beast!',
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
            itemCardId: 'raft',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'tingle',
            location: "Arbiter's Keep",
            keepId: 'arbiters-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located to the far west from the North Oasis.',
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
      blockades: ['north', 'east'],
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'F1',
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Defeat the Demon King!',
      difficulty: 'red',
      rewards: {
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
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
      battleAreaId: 'ganons-tower',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.14',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-piece',
          occurrenceId: 'heart-piece-1',
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
      battleAreaId: 'twilight-field',
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
            occurrenceId: 'heart-container-1',
            characterId: 'midna',
            location: 'South Field Keep',
            keepId: 'south-field-keep',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'twili-midna',
            location: 'Outskirts Keep',
            keepId: 'outskirts-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'adventure-f3' },
            text: 'My Fairy - Lightning',
            location: 'North Field Keep [Pot]',
            keepId: 'north-field-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'magic-beans' },
            text: 'Fairy Food - Magic Beans',
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Defeat 600 enemies in time! Lv.2',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-piece',
          occurrenceId: 'heart-piece-1',
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
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Defeat the ocean beast!',
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
            itemCardId: 'water-bomb',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'twili-midna',
            location: 'West Field Keep',
            keepId: 'west-field-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located northeast from South Field Keep.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five or more Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
          },
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Fight through the Twilight Princess quiz!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-piece',
          occurrenceId: 'heart-piece-1',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.8',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-piece',
          occurrenceId: 'heart-piece-1',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Fight through the Skyward Sword quiz!',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Go alone--despite the danger!',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitId: 'goron-tunic',
            outfitName: 'Goron Tunic',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'link',
            location: 'West Cannon Keep',
            keepId: 'west-cannon-keep',
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
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Capture the enemy keeps! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tingle',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'tingle',
            location: 'Town Center Keep',
            keepId: 'town-center-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'accessory-twilight-jewel' },
            text: 'Fairy Accessory - Twilight Jewel',
            location: 'Central Square',
            keepId: 'central-square',
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
      battleAreaId: 'twilight-field',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.6',
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Fight as a warrior of darkness! Lv.1',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitId: 'wind-waker-robes',
            outfitName: 'Wind Waker Robes',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'zant',
            location: 'Southeast Square',
            keepId: 'southeast-square',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'zant',
            location: 'Central Square',
            keepId: 'central-square',
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
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Defeat the Moblin Forces!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tingle',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'toon-link',
            location: 'South Square',
            keepId: 'south-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-kokiri-band' },
            text: 'Fairy Headwear - Kokiri Band',
            location: 'North Square',
            keepId: 'north-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'odd-mushroom' },
            text: 'Fairy Food - Odd Mushroom',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Fight as a warrior of fire!',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'linkle',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-kokiri-band' },
            text: 'Fairy Headwear - Kokiri Band',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Fight as a warrior of light! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'toon-link',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'ghirahim',
            location: 'Abandoned Fort',
            keepId: 'abandoned-fort',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located along the wall if you go north then west from the Castle Keep.',
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
      battleAreaId: 'temple-of-souls',
      challenge: "Adventure Battle: Prevent the sorceress's scheme!",
      difficulty: 'red',
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
            characterId: 'linkle',
            location: 'Northwest Keep',
            keepId: 'northwest-keep',
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
      battleAreaId: 'temple-of-souls',
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
            occurrenceId: 'heart-container-1',
            characterId: 'ganondorf',
            location: 'South Garden',
            keepId: 'south-garden',
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.6',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Defeat the island beast!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
            occurrenceId: 'heart-piece-1',
            characterId: 'young-link',
            location: 'Crystal Cave',
            keepId: 'crystal-cave',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description:
              'KO 1000 enemies. Located straight to the west from Crystal Cave at the cliff where you can jump down.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
          },
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
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Defeat 400 enemies in time! Lv.1',
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
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Fight through the weapon quiz!',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Defeat the Darknut Forces! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
            occurrenceId: 'heart-piece-1',
            characterId: 'skull-kid',
            location: 'W. Rockface Keep',
            keepId: 'west-rockface-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'adventure-h7' },
            text: 'My Fairy - Light',
            location: 'South Field Keep [Pot]',
            keepId: 'south-field-keep',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Defeat 300 enemies in time!',
      difficulty: 'colorless',
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
        damage: 99,
      },
      characterSelection: {
        slots: '2+',
        status: 'unrestricted',
      },
    },
    {
      id: 'I1',
      battleAreaId: 'palace-of-twilight',
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
            occurrenceId: 'heart-container-1',
            characterId: 'lana',
            location: "King's Hall",
            keepId: 'kings-hall',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'lana',
            location: 'Southeast Square',
            keepId: 'southeast-square',
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
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: Defeat the enemy forces! Lv.3',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ghirahim',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'ghirahim',
            location: 'Northeast Keep',
            keepId: 'northeast-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-pirate-vest' },
            text: 'Fairy Top - Pirate Vest',
            location: 'East Garden',
            keepId: 'east-garden',
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Capture the enemy keeps! Lv.1',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'midna',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'midna',
            location: 'Central Square',
            keepId: 'central-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-sheikah-leggings' },
            text: 'Fairy Bottoms - Sheikah Leggings',
            location: 'West Square',
            keepId: 'west-square',
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
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.1',
      difficulty: 'colorless',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Defeat the enemy forces! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'toon-link',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'tingle',
            location: 'West Square',
            keepId: 'west-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-kokiri-cardigan' },
            text: 'Fairy Top - Kokiri Cardigan',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Challenge Battle: Fight through the forgetful foe quiz!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'hyrule-field',
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
            occurrenceId: 'heart-container-1',
            characterId: 'impa',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'twili-midna',
            location: 'Castle Keep',
            keepId: 'castle-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-kokiri-shorts' },
            text: 'Fairy Bottoms - Kokiri Shorts',
            location: 'Mountain Keep',
            keepId: 'mountain-keep',
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
      battleAreaId: 'faron-woods',
      challenge: 'Adventure Battle: Duel with the dragon knight!',
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
            itemCardId: 'candle',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'toon-link',
            location: 'Deku Tree',
            keepId: 'deku-tree',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'deku-nut' },
            text: 'Fairy Food - Deku Nut',
            location: 'Southern Tree [Pot]',
            keepId: 'southern-tree',
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
      battleAreaId: 'ganons-tower',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.12',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'temple-of-souls',
      challenge: "Challenge Battle: Fight through the women's weapons quiz!",
      difficulty: 'blue',
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
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.4',
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
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.2',
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
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: Fight as a warrior of fire! Lv.1',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitId: 'classic-tunic',
            outfitName: 'Classic Tunic',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            occurrenceId: 'heart-container-1',
            characterId: 'darunia',
            location: 'Lakeside Keep',
            keepId: 'lakeside-keep',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'darunia',
            location: 'Temple Face Keep',
            keepId: 'temple-face-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-zora-skirt' },
            text: 'Fairy Bottoms - Zora Skirt',
            location: "King's Hall",
            keepId: 'kings-hall',
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
      battleAreaId: 'hyrule-field',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.2',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-piece',
          occurrenceId: 'heart-piece-1',
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Prevent reinforcements from arriving!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'zelda',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'zelda',
            location: 'N. Entrance Keep',
            keepId: 'north-entrance-keep',
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
      battleAreaId: 'sealed-grounds',
      challenge: 'Challenge Battle: Defend the allied keeps! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'lana',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-royal-tunic' },
            text: 'Fairy Top - Royal Tunic',
            location: 'East Temple Hall',
            keepId: 'east-temple-hall',
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.12',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Fight through the tricky quiz!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-piece',
          occurrenceId: 'heart-piece-1',
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
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-piece',
          occurrenceId: 'heart-piece-1',
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
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Defeat 500 enemies in time! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Defeat 400 enemies in time! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'faron-woods',
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
            occurrenceId: 'heart-container-1',
            characterId: 'impa',
            location: 'Fairy Fountain',
            keepId: 'fairy-fountain',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'headwear-kokiri-band' },
            text: 'Fairy Headwear - Kokiri band',
            location: 'Eastern Tree',
            keepId: 'eastern-tree',
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
      battleAreaId: 'temple-of-souls',
      challenge: 'Challenge Battle: Watch out! All atacks are devastating! Lv.11',
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
      battleAreaId: 'death-mountain',
      keepNameOverrides: { 'stronghold': "Stronghold Keep" },
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
            occurrenceId: 'heart-container-1',
            characterId: 'skull-kid',
            location: 'West Goron Keep',
            keepId: 'west-goron-keep',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'skull-kid',
            location: 'Stronghold Keep',
            keepId: 'stronghold',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located southeast from E. Boulder Keep.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
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
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.3',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Defeat 500 enemies in time! Lv.1',
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
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.3',
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
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: Defeat the warriors of time!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'zelda',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'zelda',
            location: 'Lakeside Keep',
            keepId: 'lakeside-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'accessory-zora-earrings' },
            text: 'Fairy Accessory - Zora Earrings',
            location: 'Temple Face Keep',
            keepId: 'temple-face-keep',
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
      battleAreaId: 'eldin-caves',
      challenge: 'Adventure Battle: Rescue the allied forces! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'twili-midna',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'ruto',
            location: 'Crystal Cave',
            keepId: 'crystal-cave',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located north of the west entrance to the Stock Room.',
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Challenge Battle: Defeat 800 enemies in time!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'skyloft',
      keepNameOverrides: { 'south-point-keep': "Enemy Base" },
      challenge: 'Adventure Battle: Run swiftly across the battlefield!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'young-link',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'young-link',
            location: 'S. Rockface Keep',
            keepId: 'south-rockface-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'adventure-l8' },
            text: 'My Fairy (Dark) -',
            location: 'Enemy Base [Pot]',
            keepId: 'south-point-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'magic-beans' },
            text: 'Fairy Food - Magic Beans',
            location: 'Town Center Keep [Pot]',
            keepId: 'town-center-keep',
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
      battleAreaId: 'ganons-tower',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.11',
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
      battleAreaId: 'valley-of-seers',
      challenge: 'Challenge Battle: Fight through the Ocarina of Time quiz!',
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
      battleAreaId: 'gerudo-desert',
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
            occurrenceId: 'heart-container-1',
            characterId: 'darunia',
            location: 'Central Keep',
            keepId: 'central-keep',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'darunia',
            location: 'N. Settlement',
            keepId: 'north-settlement',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-zora-tunic' },
            text: 'Fairy Top - Zora Tunic',
            location: "Arbiter's Keep",
            keepId: 'arbiters-keep',
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
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Defeat the cliff beast!',
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
            itemCardId: 'raft',
          },
        ],
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'sheik',
            location: 'East Keep',
            keepId: 'east-keep',
          },
        ],
        skulltulas: [
          {
            id: 'skulltula-1',
            description: 'KO 1000 enemies. Located in the dead end northeast from the East Keep.',
          },
          {
            id: 'skulltula-2',
            description:
              'Complete the first mission and capture five or more enemy keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
          },
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
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Fight through the tribe quiz!',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.1',
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
      battleAreaId: 'temple-of-souls',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.10',
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
      battleAreaId: 'faron-woods',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.11',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: Fight the chosen ones!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'darunia',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'darunia',
            location: 'Central Chamber',
            keepId: 'central-chamber',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'adventure-n1' },
            text: 'My Fairy - Darkness',
            location: 'Central Chamber [Pot]',
            keepId: 'central-chamber',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'deku-nut' },
            text: 'Fairy Food - Deku Nut',
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
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Capture the enemy keeps! Lv.4',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Defeat the warriors of time!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'tingle',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'tingle',
            location: 'West Keep',
            keepId: 'west-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'accessory-zora-earrings' },
            text: 'Fairy Accessory - Zora Earrings',
            location: 'West Boulder Keep',
            keepId: 'west-boulder-keep',
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
      battleAreaId: 'death-mountain',
      challenge: 'Challenge Battle: Defeat 500 enemies in time! Lv.2',
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
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.4',
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
      battleAreaId: 'lake-hylia',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.5',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-piece',
          occurrenceId: 'heart-piece-1',
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
      battleAreaId: 'temple-of-the-sacred-sword',
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
            occurrenceId: 'heart-piece-1',
            characterId: 'link',
            location: 'Temple Square',
            keepId: 'temple-square',
          },
        ],
        skulltulas: [
          { id: 'skulltula-1', description: 'KO 1000 enemies. Located east of the Temple Square.' },
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
      battleAreaId: 'palace-of-twilight',
      challenge: 'Adventure Battle: Defeat the Shield Moblin Forces! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'fi',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'fi',
            location: 'Southeast Square',
            keepId: 'southeast-square',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-pirate-slacks' },
            text: 'Fairy Bottoms - Pirate Slacks',
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
      battleAreaId: 'skyloft',
      challenge: 'Challenge Battle: Fight through the legendary warrior quiz!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Rescue the allied forces! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'midna',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'zant',
            location: 'Castle Keep',
            keepId: 'castle-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-royal-tunic' },
            text: 'Fairy Top - Royal Tunic',
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.10',
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Watch out for thieves!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'impa',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'impa',
            location: 'N. Entrance Keep',
            keepId: 'north-entrance-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'accessory-pirate-bandana' },
            text: 'Fairy Accessory - Pirate Bandana',
            location: 'South Square',
            keepId: 'south-square',
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
      battleAreaId: 'lake-hylia',
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
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Defeat the Big Poe Forces!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'skull-kid',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'skull-kid',
            location: 'South Temple',
            keepId: 'south-temple',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'accessory-zora-earrings' },
            text: 'Fairy Accessory - Zora Earrings',
            location: 'East Keep',
            keepId: 'east-keep',
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Challenge Battle: Fight through the travel memories quiz!',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Adventure Battle: Defeat the warriors of Skyloft!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'midna',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'young-link',
            location: 'N. Settlement',
            keepId: 'north-settlement',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'top-island-dress' },
            text: 'Fairy Top - Island Dress',
            location: 'Rockface Keep',
            keepId: 'rockface-keep',
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
      battleAreaId: 'gerudo-desert',
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
            occurrenceId: 'heart-container-1',
            characterId: 'linkle',
            location: "Arbiter's Keep",
            keepId: 'arbiters-keep',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'toon-link',
            location: 'North Oasis',
            keepId: 'north-oasis',
          },
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-2',
            characterId: 'linkle',
            location: 'North Oasis',
            keepId: 'north-oasis',
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
      battleAreaId: 'death-mountain',
      challenge: 'Adventure Battle: Fight as a warrior of water! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Adventure Battle: Survive the attack of those powered-up enemies!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'lana',
        },
        treasure: [
          {
            type: 'fairy',
            content: { kind: 'fairy-clothing', clothingId: 'bottom-royal-skirt' },
            text: 'Fairy Bottoms - Royal Skirt',
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
      battleAreaId: 'temple-of-souls',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.13',
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
      battleAreaId: 'temple-of-the-sacred-sword',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.9',
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
      battleAreaId: 'lake-hylia',
      challenge: 'Adventure Battle: Battle across the field!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'ruto',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'ruto',
            location: "King's Hall",
            keepId: 'kings-hall',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'weird-egg' },
            text: 'Fairy Food - Weird Egg',
            location: 'Central Hall [Pot]',
            keepId: 'central-hall',
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
      battleAreaId: 'temple-of-souls',
      challenge: 'Adventure Battle: Watch out for falling artillery fire!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
          characterId: 'zant',
        },
        treasure: [
          {
            type: 'heart-piece',
            occurrenceId: 'heart-piece-1',
            characterId: 'ghirahim',
            location: 'Northwest Keep',
            keepId: 'northwest-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy', fairyId: 'adventure-p7' },
            text: 'My Fairy - Water',
            location: 'West Keep [Pot]',
            keepId: 'west-keep',
          },
          {
            type: 'fairy',
            content: { kind: 'fairy-food', foodId: 'lon-lon-milk' },
            text: 'Fairy Food - Lon Lon Milk',
            location: 'Northwest Keep [Pot]',
            keepId: 'northwest-keep',
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
      battleAreaId: 'gerudo-desert',
      challenge: 'Challenge Battle: Watch out! All attacks are devastating! Lv.9',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          occurrenceId: 'heart-container-1',
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
