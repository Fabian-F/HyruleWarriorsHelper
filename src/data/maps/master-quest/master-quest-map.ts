import type { MapDefinition } from '../../../domain/maps/map.model';

export const masterQuestMap = {
  id: 'master-quest',
  name: 'Master Quest Map',
  difficulty: 'medium',
  tiles: [
    {
      id: 'A1',
      challenge: 'Adventure Battle: Defeat the Demon King!',
      difficulty: 'red',
      rewards: {
        treasure: [
          {
            type: 'heart-container',
            characterId: 'link',
            location: 'W. Rockface Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located northwest from the Allied Base.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 4,
            column: 10,
          },
        },
      ],
    },
    {
      id: 'A2',
      challenge: 'Challenge Battle: Defeat 700 enemies in time!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'king-daphnes',
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
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['south'],
      search: [],
    },
    {
      id: 'A3',
      challenge: 'Challenge Battle: Defeat 700 enemies in time!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'impa',
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
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['north'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'A4',
      challenge: 'Adventure Battle: Defeat the shadow beast!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'ghirahim',
          weaponName: 'Demon Blade Lv.3',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'ghirahim',
            location: 'West Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Shirt',
            location: 'West Ruins',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 2,
            column: 13,
          },
        },
        {
          itemCardId: 'recorder',
          target: {
            row: 5,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'A5',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.6',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'wizzro',
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
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: [],
      search: [],
    },
    {
      id: 'A6',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.5',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'volga',
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
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['east'],
      search: [],
    },
    {
      id: 'A7',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.7',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'wizzro',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        kills: 1200,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'recorder',
          target: {
            row: 6,
            column: 5,
          },
        },
      ],
    },
    {
      id: 'A8',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.12',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ganondorf',
            outfitName: 'Standard Outfit (Master Quest)',
          },
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        kills: 1600,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 8,
            column: 3,
          },
        },
      ],
    },
    {
      id: 'B1',
      challenge: 'Challenge Battle: Fight through the royalty quiz!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'impa',
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
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: [],
      quizAnswers: ['zant', 'impa', 'zelda'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 9,
          },
        },
      ],
    },
    {
      id: 'B2',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.8',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'cia',
          weaponName: 'Scepter Lv.3',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'cia',
            location: 'Central Chamber',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['east', 'south'],
      search: [
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 4,
            column: 2,
          },
        },
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 8,
          },
        },
      ],
    },
    {
      id: 'B3',
      challenge: 'Adventure Battle: Defeat the enemy forces! Lv.3',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'toon-link',
          weaponName: 'Light Sword Lv.3',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'toon-link',
            location: 'South Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['north', 'east'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 5,
            column: 13,
          },
        },
      ],
    },
    {
      id: 'B4',
      challenge: 'Adventure Battle: Defend the allied keeps! Lv.1',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'volga',
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
            characterId: 'volga',
            location: "Arbiter's Keep",
          },
          {
            type: 'fairy',
            text: 'My Fairy - Lightning',
            location: 'Clifftop Keep [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Mushroom Spores',
            location: 'North Oasis [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: [],
      search: [],
    },
    {
      id: 'B5',
      challenge: 'Adventure Battle: Capture the enemy keeps! Lv.1',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'lana',
            outfitName: 'Guardian of Time',
          },
          {
            type: 'item-card',
            itemCardId: 'goddess-harp',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the exact middle of the easternmost pathway in a small alcove.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['east', 'south'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 3,
            column: 12,
          },
        },
      ],
    },
    {
      id: 'B6',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.6',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'tetra',
          weaponName: 'Cutlass Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'tetra',
            location: 'Abandoned Fort',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
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
    },
    {
      id: 'B7',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.8',
      difficulty: 'orange',
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
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: [],
      search: [
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 5,
            column: 3,
          },
        },
      ],
    },
    {
      id: 'B8',
      challenge: 'Adventure Battle: Fight as a warrior of darkness! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'young-link',
          weaponName: 'Mask Lv.3',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'young-link',
            location: 'W. Boulder Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 3,
            column: 13,
          },
        },
      ],
    },
    {
      id: 'C1',
      challenge: 'Adventure Battle: Dash gallantly into battle!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'darunia',
          weaponName: 'Hammer Lv.3',
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
            characterId: 'darunia',
            location: 'West Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Accessory - Demon Lord Earrings',
            location: 'Exit Square',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 4,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'C2',
      challenge: 'Adventure Battle: Fight the chosen ones!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'midna',
          weaponName: 'Shackle Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'midna',
            location: 'South Field Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
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
    },
    {
      id: 'C3',
      challenge: 'Adventure Battle: Defeat the enemy forces! Lv.2',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'cia',
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
            characterId: 'cia',
            location: 'Town Center Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Shawl',
            location: 'West Town Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: ['north', 'east', 'west'],
      search: [],
    },
    {
      id: 'C4',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.8',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'material',
          materialName: "The Imprisoned's Pillar",
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
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['south'],
      search: [],
    },
    {
      id: 'C5',
      challenge: 'Adventure Battle: Capture the enemy keeps! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'impa',
          weaponName: 'Naginata Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'recorder',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Food - Sacred Water',
            location: 'Rocky Square [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: ['north', 'east', 'west'],
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 6,
            column: 3,
          },
        },
      ],
    },
    {
      id: 'C6',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.9',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ganondorf',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ladder',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: [],
      search: [],
    },
    {
      id: 'C7',
      challenge: 'Adventure Battle: Battle across the field!',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'cia',
            outfitName: 'Masked (Master Quest)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitName: 'Unmasked (Master Quest)',
          },
          {
            type: 'outfit',
            characterId: 'cia',
            outfitName: 'Hatless (Master Quest)',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located just south of the West Room.',
          'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: [],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 3,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'C8',
      challenge: 'Adventure Battle: Attack the Festival of Cuccos!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'king-daphnes',
          weaponName: 'Sail Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'digging-mitts',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'king-daphnes',
            location: 'East Field Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Shirt',
            location: 'W. Rockface Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: [],
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 1,
            column: 8,
          },
        },
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 5,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'D1',
      challenge: 'Adventure Battle: Stop the healers from, well, healing!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'lana',
          weaponName: 'Book of Sorcery Lv.3',
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
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['east'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 7,
            column: 2,
          },
        },
      ],
    },
    {
      id: 'D2',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.7',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'ganondorf',
          weaponName: 'Great Swords Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 2,
          },
        },
      ],
    },
    {
      id: 'D3',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.6',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'king-daphnes',
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
      additionalRule: 'Master Quest Rule: No Healing!',
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
    },
    {
      id: 'D4',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.4',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'wizzro',
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
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['east', 'south'],
      search: [],
    },
    {
      id: 'D5',
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
            itemCardId: 'ice-arrow',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north', 'east', 'west'],
      search: [],
    },
    {
      id: 'D6',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.6',
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
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: [],
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 6,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'D7',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.10',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'wizzro',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'digging-mitts',
          },
        ],
      },
      requirements: {
        kills: 1600,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: [],
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 6,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'D8',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.8',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'midna',
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
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: [],
      search: [],
    },
    {
      id: 'E1',
      challenge: 'Challenge Battle: Fight through the legendary warrior quiz!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tetra',
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
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['west', 'south'],
      quizAnswers: ['ruto', 'agitha', 'ganondorf'],
      search: [],
    },
    {
      id: 'E2',
      challenge: 'Adventure Battle: Prevent reinforcements from arriving!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'linkle',
          weaponName: 'Crossbows Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'ice-arrow',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'linkle',
            location: 'Town Entrance',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottom - Skyloft Slacks',
            location: 'Central Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 11,
          },
        },
      ],
    },
    {
      id: 'E3',
      challenge: 'Adventure Battle: Rescue the allied forces!',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'fi',
            outfitName: 'Standard Outfit (Boss)',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Food - Life Tree Fruit',
            location: 'Southwest Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 4,
            column: 14,
          },
        },
      ],
    },
    {
      id: 'E4',
      challenge: 'Adventure Battle: Defeat the gulf beast!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'skull-kid',
          weaponName: 'Ocarina Lv.3',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'skull-kid',
            location: 'West Temple',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the corner north from the Eastern Room.',
          'Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
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
    },
    {
      id: 'E5',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.5',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'cia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'raft',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: ['east', 'west'],
      search: [],
    },
    {
      id: 'E6',
      challenge: 'Adventure Battle: Fight as a warrior of darkness! Lv.1',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'wizzro',
            outfitName: 'Standard Outfit (Master Quest)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'cia',
            location: 'Lakeside Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottoms - Skyloft Skirt',
            location: "King's Hall",
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Stamina Fruit',
            location: 'Lakeside Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 3,
            column: 10,
          },
        },
      ],
    },
    {
      id: 'E7',
      challenge: 'Adventure Battle: Defend the allied keeps! Lv.2',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'zelda',
          weaponName: 'Rapier Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Shirt',
            location: 'East Temple Hall',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 7,
          },
        },
      ],
    },
    {
      id: 'E8',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.10',
      difficulty: 'blue',
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
      },
      requirements: {
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north', 'east'],
      search: [],
    },
    {
      id: 'F1',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.10',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'tingle',
          weaponName: 'Balloon Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'tingle',
            location: 'Southeast Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Light Fruit',
            location: 'North Palace [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 7,
            column: 1,
          },
        },
      ],
    },
    {
      id: 'F2',
      challenge: 'Adventure Battle: Run swiftly across the battlefield!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'lana',
          weaponName: 'Spear Lv.3',
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
            characterId: 'lana',
            location: 'Town Center Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: ['north'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 13,
          },
        },
      ],
    },
    {
      id: 'F3',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.4',
      difficulty: 'orange',
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
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: ['east'],
      search: [],
    },
    {
      id: 'F4',
      challenge: 'Challenge Battle: Destroy enemies and traitors alike! Lv.6',
      difficulty: 'orange',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ghirahim',
            outfitName: 'Standard Outfit (Master Quest)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'fi',
            location: 'West Town Keep',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located just north of S. Rockface Keep.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['south', 'west'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 5,
            column: 4,
          },
        },
      ],
    },
    {
      id: 'F5',
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
            itemCardId: 'goddess-harp',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'My Fairy - Darkness',
            location: 'Southeast Keep [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Pumpkin Soup',
            location: 'Southwest Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['north', 'east', 'west'],
      search: [],
    },
    {
      id: 'F6',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ruto',
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
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: [],
      search: [
        {
          itemCardId: 'raft',
          target: {
            row: 4,
            column: 8,
          },
        },
      ],
    },
    {
      id: 'F7',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.9',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'impa',
          weaponName: 'Giant Blade Lv.3',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Shawl',
            location: 'Central Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: [],
      search: [
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 9,
            column: 4,
          },
        },
        {
          itemCardId: 'water-bomb',
          target: {
            row: 3,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'F8',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.4',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'link',
          weaponName: 'Hylian Sword Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'water-bomb',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 8,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'G1',
      challenge: "Adventure Battle: Prevent the sorceress's scheme!",
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'sheik',
          weaponName: 'Harp Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goddess-harp',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'sheik',
            location: 'Southwest Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 5,
            column: 6,
          },
        },
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 4,
          },
        },
      ],
    },
    {
      id: 'G2',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.9',
      difficulty: 'blue',
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
        minutes: 7,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
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
    },
    {
      id: 'G3',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.6',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'toon-link',
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
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
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
    },
    {
      id: 'G4',
      challenge: 'Challenge Battle: Destroy all Giant Bosses in time! Lv.4',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'wizzro',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 149,
      },
      additionalRule: "Master Quest Rule: Don't Get Hit!",
      blockades: ['east', 'south'],
      search: [],
    },
    {
      id: 'G5',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.2',
      difficulty: 'green',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'impa',
            outfitName: 'Standard Outfit (Master Quest)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'impa',
            location: 'Stock Room',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Shirt',
            location: 'Stone Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Water Fruit',
            location: 'Stock Room [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
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
    },
    {
      id: 'G6',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'cia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'recorder',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the dead end southeast of the East Temple.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Master Quest Rule: No Item Attacks!',
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
    },
    {
      id: 'G7',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'lana',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 99,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north'],
      search: [],
    },
    {
      id: 'G8',
      challenge: 'Adventure Battle: Fight as a warrior of water! Lv.1',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'cia',
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
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [],
    },
    {
      id: 'H1',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.8',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ganondorf',
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
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 4,
            column: 10,
          },
        },
      ],
    },
    {
      id: 'H2',
      challenge:
        'Adventure Battle: Survive the attack of these powered-up enemies!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'link',
          weaponName: 'Magic Rod Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'bomb',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: [],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 9,
            column: 10,
          },
        },
      ],
    },
    {
      id: 'H3',
      challenge: 'Challenge Battle: Fight through the mystery mastery quiz!',
      difficulty: 'orange',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'young-link',
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
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['south'],
      quizAnswers: ['aeralfos', 'shield-moblin', 'big-poe'],
      search: [],
    },
    {
      id: 'H4',
      challenge: 'Adventure Battle: Defeat the island beast!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'king-daphnes',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Apron',
            location: 'South Square',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Mushroom Spores',
            location: 'Enemy Base [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: ['north', 'south', 'west'],
      search: [],
    },
    {
      id: 'H5',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.2',
      difficulty: 'green',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'cia',
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
        damage: 99,
      },
      additionalRule: "Master Quest Rule: Don't Get Hit!",
      blockades: ['north', 'south'],
      search: [],
    },
    {
      id: 'H6',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.2',
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
        kills: 1000,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['north', 'south'],
      search: [],
    },
    {
      id: 'H7',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'cia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located just to the east of where the path opens up into the large open area from Castle Keep.',
          'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: ['north'],
      search: [],
    },
    {
      id: 'H8',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'volga',
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
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: [],
      search: [],
    },
    {
      id: 'I1',
      challenge: 'Adventure Battle: Fight as a warrior of water! Lv.2',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'fairy',
          text: 'Great Fairy Lv.3 - Link',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'recorder',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 7,
            column: 9,
          },
        },
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 2,
            column: 8,
          },
        },
      ],
    },
    {
      id: 'I2',
      challenge: 'Challenge Battle: Fight through the Triforce quiz!',
      difficulty: 'red',
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
        kills: 3,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north', 'south'],
      quizAnswers: ['ganondorf', 'zelda', 'link'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 3,
            column: 11,
          },
        },
      ],
    },
    {
      id: 'I3',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.3',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'sheik',
            outfitName: 'Standard Outfit (Master Quest)',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Food - Stamina Fruit',
            location: 'East Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
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
    },
    {
      id: 'I4',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'wizzro',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        minutes: 7,
        damage: 99,
      },
      additionalRule: "Master Quest Rule: Don't Get Hit!",
      blockades: ['east'],
      search: [],
    },
    {
      id: 'I5',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'wizzro',
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
        damage: 99,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
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
    },
    {
      id: 'I6',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ghirahim',
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
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: [],
      search: [
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 5,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'I7',
      challenge: 'Adventure Battle: Defeat the commanders of two armies!',
      difficulty: 'colorless',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'link',
            outfitName: "Hero's Clothes (Master Quest)",
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'toon-link',
            location: 'Fairy Fountain',
          },
          {
            type: 'fairy',
            text: 'Fairy Headwear - Bone Hat',
            location: 'Eastern Tree',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Pumpkin',
            location: 'Fairy Fountain [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 6,
            column: 2,
          },
        },
      ],
    },
    {
      id: 'I8',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.1',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'cia',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'recorder',
          },
        ],
      },
      requirements: {
        kills: 1000,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: [],
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 6,
            column: 4,
          },
        },
      ],
    },
    {
      id: 'J1',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.8',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'wizzro',
          weaponName: 'Ring Lv.3',
        },
      },
      requirements: {
        kills: 1600,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['east', 'south'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 4,
          },
        },
      ],
    },
    {
      id: 'J2',
      challenge: 'Adventure Battle: Defeat the valley beast!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'zelda',
          weaponName: 'Baton Lv.3',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Outset Shirt',
            location: 'North Field Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: ['north', 'south'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 3,
            column: 4,
          },
        },
      ],
    },
    {
      id: 'J3',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.3',
      difficulty: 'yellow',
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
        kills: 1200,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['north', 'south'],
      search: [
        {
          itemCardId: 'recorder',
          target: {
            row: 6,
            column: 2,
          },
        },
      ],
    },
    {
      id: 'J4',
      challenge: 'Challenge Battle: Defeat 600 enemies in time!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'volga',
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
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north', 'east', 'west'],
      search: [],
    },
    {
      id: 'J5',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.5',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'wizzro',
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
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
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
    },
    {
      id: 'J6',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.5',
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
        minutes: 7,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: [],
      search: [],
    },
    {
      id: 'J7',
      challenge: 'Adventure Battle: Fight as a warrior of light!',
      difficulty: 'purple',
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
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Shirt',
            location: 'North Palace',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['south'],
      search: [],
    },
    {
      id: 'J8',
      challenge: 'Adventure Battle: Defeat the warriors of Skyloft!',
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
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Bottom - Skyloft Slacks',
            location: 'Rockface Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north'],
      search: [
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 1,
            column: 6,
          },
        },
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 8,
          },
        },
      ],
    },
    {
      id: 'K1',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.7',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'link',
          weaponName: 'Gauntlets Lv.3',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'link',
            location: 'Mountain Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['east', 'west'],
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 5,
            column: 4,
          },
        },
      ],
    },
    {
      id: 'K2',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.6',
      difficulty: 'purple',
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
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
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
    },
    {
      id: 'K3',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.2',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'twili-midna',
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
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north'],
      search: [],
    },
    {
      id: 'K4',
      challenge: 'Adventure Battle: Defeat the Darknut Forces!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'material',
          materialName: "Impa's Breastplate",
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'zant',
            location: 'East Field Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottom - Skyloft Skirt',
            location: 'North Field Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'recorder',
          target: {
            row: 5,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'K5',
      challenge: 'Challenge Battle: Fight through the Twilight Princess Quiz!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ganondorf',
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
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: ['south'],
      quizAnswers: ['agitha', 'agitha', 'midna'],
      search: [
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 7,
            column: 10,
          },
        },
      ],
    },
    {
      id: 'K6',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.5',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'agitha',
            outfitName: 'Standard Outfit (Master Quest)',
          },
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
      },
      requirements: {
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
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
    },
    {
      id: 'K7',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.4',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tingle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
      },
      requirements: {
        kills: 1200,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
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
    },
    {
      id: 'K8',
      challenge: 'Adventure Battle: Destroy the army with boosted morale! Lv.5',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'cia',
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
            characterId: 'cia',
            location: 'Outskirts Keep',
          },
          {
            type: 'fairy',
            text: 'My Fairy - Water',
            location: 'Hilltop Keep [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Water Fruit',
            location: 'East Field Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north'],
      search: [],
    },
    {
      id: 'L1',
      challenge: 'Adventure Battle: Defeat the warriors of Twilight!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'ruto',
          weaponName: 'Zora Scale Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'goddess-harp',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Apron',
            location: 'West Ruins',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['east', 'west'],
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 4,
            column: 9,
          },
        },
      ],
    },
    {
      id: 'L2',
      challenge: 'Adventure Battle: Defeat the mountain beast!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'volga',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'My Fairy - Light',
            location: 'Southeast Square [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Light Fruit',
            location: 'Southeast Square [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 8,
            column: 3,
          },
        },
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 12,
          },
        },
      ],
    },
    {
      id: 'L3',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.3',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'wizzro',
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
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['north'],
      search: [
        {
          itemCardId: 'recorder',
          target: {
            row: 3,
            column: 5,
          },
        },
      ],
    },
    {
      id: 'L4',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.4',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'midna',
            outfitName: 'Standard Outfit (Master Quest)',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located in the small room to the west of the North Oasis.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: ['east'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 8,
            column: 0,
          },
        },
      ],
    },
    {
      id: 'L5',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.2',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'volga',
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
      additionalRule: "Master Quest Rule: Don't Get Hit!",
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
    },
    {
      id: 'L6',
      challenge: 'Adventure Battle: Defeat the Dinolfos Forces!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'link',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Shawl',
            location: 'Fairy Fountain',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 6,
            column: 2,
          },
        },
      ],
    },
    {
      id: 'L7',
      challenge: "Challenge Battle: Fight through the women's weapons quiz!",
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'zelda',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: [],
      quizAnswers: ['lana', 'lana', 'midna'],
      search: [],
    },
    {
      id: 'L8',
      challenge: 'Adventure Battle: Defeat the Shield Moblin Forces! Lv.2',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zant',
            outfitName: 'Standard Outfit (Master Quest)',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located just outside the empty keep southeast from the North Palace.',
          'Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 7,
            column: 8,
          },
        },
      ],
    },
    {
      id: 'M1',
      challenge: 'Adventure Battle: Defeat all enemies! Lv.3',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'lana',
            outfitName: 'Standard Outfit (Master Quest)',
          },
        ],
      },
      requirements: {
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 8,
            column: 11,
          },
        },
      ],
    },
    {
      id: 'M2',
      challenge: 'Adventure Battle: Defeat the enemy forces! Lv.1',
      difficulty: 'yellow',
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
        treasure: [
          {
            type: 'heart-piece',
            characterId: 'wizzro',
            location: 'East Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Shirt',
            location: 'West Ruins',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      additionalRule: "Master Quest Rule: Don't Get Hit!",
      blockades: [],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 4,
            column: 11,
          },
        },
      ],
    },
    {
      id: 'M3',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.1',
      difficulty: 'yellow',
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
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: ['south'],
      search: [],
    },
    {
      id: 'M4',
      challenge: 'Adventure Battle: Defeat the cliff beast!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'link',
          weaponName: 'Horse Lv.3',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Food - Life Tree Fruit',
            location: 'Enemy Base [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north', 'east', 'west'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 7,
            column: 3,
          },
        },
        {
          itemCardId: 'recorder',
          target: {
            row: 4,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'M5',
      challenge: 'Challenge Battle: Defeat 500 enemies in time!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'wizzro',
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
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: ['south', 'west'],
      search: [],
    },
    {
      id: 'M6',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.3',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'wizzro',
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
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north'],
      search: [],
    },
    {
      id: 'M7',
      challenge: 'Adventure Battle: Defeat the forest dragon!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'volga',
          weaponName: 'Dragon Spear Lv.3',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'volga',
            location: 'N. Entrance Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottom - Skyloft Skirt',
            location: 'North Square',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['south'],
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 2,
            column: 5,
          },
        },
        {
          itemCardId: 'goddess-harp',
          target: {
            row: 4,
            column: 2,
          },
        },
      ],
    },
    {
      id: 'M8',
      challenge:
        'Challenge Battle: Watch out! All attacks are devastating! Lv.7',
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
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
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
    },
    {
      id: 'N1',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.4',
      difficulty: 'purple',
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
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['east'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 9,
          },
        },
      ],
    },
    {
      id: 'N2',
      challenge: 'Adventure Battle: Fight as a warrior of lightning! Lv.1',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'darunia',
            outfitName: 'Standard Outfit (Master Quest)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'sheik',
            location: 'East Room',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Shawl',
            location: 'Lakeside Keep',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Sacred Water',
            location: 'East Room [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 3,
          },
        },
      ],
    },
    {
      id: 'N3',
      challenge: 'Adventure Battle: Defeat the Big Poe Forces!',
      difficulty: 'yellow',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'ruto',
            outfitName: 'Standard Outfit (Master Quest)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'darunia',
            location: 'West Temple',
          },
          {
            type: 'fairy',
            text: 'Fairy Bottom - Skyloft Slacks',
            location: 'East Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: [],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 5,
          },
        },
      ],
    },
    {
      id: 'N4',
      challenge: 'Challenge Battle: Fight through the tribe quiz!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'tetra',
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
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['east', 'west'],
      quizAnswers: ['ruto', 'impa', 'darunia'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 4,
            column: 9,
          },
        },
      ],
    },
    {
      id: 'N5',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.3',
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
        treasure: [
          {
            type: 'fairy',
            text: 'My Fairy - Fire',
            location: 'W. Boulder Keep [Pot]',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Pumpkin',
            location: 'East Keep [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'candle',
          target: {
            row: 6,
            column: 13,
          },
        },
      ],
    },
    {
      id: 'N6',
      challenge: 'Challenge Battle: Fight through the action quiz!',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'midna',
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
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Item Attacks!',
      blockades: [],
      quizAnswers: ['aeralfos', 'moblin', 'lizalfos'],
      search: [],
    },
    {
      id: 'N7',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.9',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'material',
          materialName: "Zelda's Tiara",
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
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['south'],
      search: [],
    },
    {
      id: 'N8',
      challenge:
        'Challenge Battle: Guard the allied keeps with your life! Lv.7',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-piece',
          characterId: 'volga',
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
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
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
    },
    {
      id: 'O1',
      challenge: 'Adventure Battle: Defeat the Shield Moblin Forces! Lv.1',
      difficulty: 'purple',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'volga',
            outfitName: 'Standard Outfit (Master Quest)',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'volga',
            location: 'North Palace',
          },
          {
            type: 'heart-piece',
            characterId: 'volga',
            location: 'Southeast Square',
          },
        ],
        skulltulas: [
          'KO 1000 enemies. Located south of the Lower Level East.',
          'Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1.',
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: ['east', 'west'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 6,
            column: 5,
          },
        },
      ],
    },
    {
      id: 'O2',
      challenge: 'Challenge Battle: Fight through the Ocarina of Time quiz!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'linkle',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'power-bracelet',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
        damage: 149,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['south'],
      quizAnswers: ['darunia', 'sheik', 'ruto'],
      search: [
        {
          itemCardId: 'bomb',
          target: {
            row: 1,
            column: 12,
          },
        },
      ],
    },
    {
      id: 'O3',
      challenge:
        'Adventure Battle: Defeat enemies while collecting treasure! Yay!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'ganondorf',
          weaponName: 'Trident Lv.3',
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
            text: 'Fairy Accessory - Demon Lord Earrings',
            location: 'Mountain Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: ['north', 'east'],
      search: [
        {
          itemCardId: 'water-bomb',
          target: {
            row: 9,
            column: 10,
          },
        },
      ],
    },
    {
      id: 'O4',
      challenge: 'Adventure Battle: Capture the enemy keeps! Lv.3',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'agitha',
          weaponName: 'Parasol Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'agitha',
            location: 'West Town Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['south', 'west'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 8,
            column: 3,
          },
        },
      ],
    },
    {
      id: 'O5',
      challenge: 'Challenge Battle: Fight through the tricky quiz!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'agitha',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'recorder',
          },
        ],
      },
      requirements: {
        kills: 3,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['north', 'east', 'south'],
      quizAnswers: ['big-poe', 'redead-knight', 'sheik'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 4,
            column: 10,
          },
        },
      ],
    },
    {
      id: 'O6',
      challenge: 'Adventure Battle: Fight as a warrior of lightning! Lv.2',
      difficulty: 'purple',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'link',
          weaponName: 'Spinner Lv.3',
        },
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Bottom - Skyloft Slacks',
            location: 'Hilltop Keep',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      additionalRule: "Master Quest Rule: Don't Get Hit!",
      blockades: ['north', 'east', 'south'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 8,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'O7',
      challenge: 'Adventure Battle: Defeat the enemy forces! Lv.4',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'fi',
          weaponName: 'Goddess Blade Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'candle',
          },
        ],
        treasure: [
          {
            type: 'heart-container',
            characterId: 'fi',
            location: 'Central Chamber',
          },
          {
            type: 'fairy',
            text: 'Fairy Top - Skyloft Apron',
            location: 'East Garden',
          },
          {
            type: 'fairy',
            text: 'Fairy Food - Pumpkin Soup',
            location: 'West Garden [Pot]',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['north', 'south'],
      search: [
        {
          itemCardId: 'power-bracelet',
          target: {
            row: 5,
            column: 14,
          },
        },
        {
          itemCardId: 'recorder',
          target: {
            row: 5,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'O8',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.7',
      difficulty: 'blue',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'cia',
            outfitName: 'Guardian of Time',
          },
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
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['north'],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 2,
            column: 1,
          },
        },
      ],
    },
    {
      id: 'P1',
      challenge: 'Adventure Battle: Destroy enemies and traitors alike! Lv.5',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'twili-midna',
          weaponName: 'Mirror Lv.3',
        },
        treasure: [
          {
            type: 'heart-container',
            characterId: 'twili-midna',
            location: 'Lakeside Keep',
          },
        ],
      },
      requirements: {
        kills: 1200,
        minutes: 15,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['west'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 5,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'P2',
      challenge: 'Adventure Battle: Defeat the warriors of time!',
      difficulty: 'yellow',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'zelda',
          weaponName: 'Dominion Rod Lv.3',
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
            text: 'Fairy Top - Skyloft Apron',
            location: 'W. Boulder Keep',
          },
        ],
      },
      requirements: {
        minutes: 15,
        damage: 149,
      },
      additionalRule: "Master Quest Rule: Don't Get Hit!",
      blockades: ['south'],
      search: [
        {
          itemCardId: 'hookshot',
          target: {
            row: 0,
            column: 8,
          },
        },
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 8,
            column: 1,
          },
        },
      ],
    },
    {
      id: 'P3',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.11',
      difficulty: 'red',
      rewards: {
        clear: [
          {
            type: 'outfit',
            characterId: 'zelda',
            outfitName: 'Standard Robes (Master Quest)',
          },
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
      },
      requirements: {
        kills: 1600,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: ['north', 'west'],
      search: [
        {
          itemCardId: 'digging-mitts',
          target: {
            row: 7,
            column: 2,
          },
        },
      ],
    },
    {
      id: 'P4',
      challenge: 'Adventure Battle: Take on the sword masters!',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'lana',
          weaponName: 'Summoning Gate Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Top - Demon Lord Shirt',
            location: 'N. Settlement',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'ice-arrow',
          target: {
            row: 9,
            column: 5,
          },
        },
        {
          itemCardId: 'raft',
          target: {
            row: 4,
            column: 6,
          },
        },
      ],
    },
    {
      id: 'P5',
      challenge: 'Challenge Battle: Defeat all enemies! Lv.7',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
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
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: No Healing!',
      blockades: ['west'],
      search: [],
    },
    {
      id: 'P6',
      challenge: 'Challenge Battle: Defeat all Giant Bosses in time! Lv.11',
      difficulty: 'red',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ganondorf',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'digging-mitts',
          },
        ],
      },
      requirements: {
        minutes: 7,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
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
          itemCardId: 'ladder',
          target: {
            row: 5,
            column: 12,
          },
        },
      ],
    },
    {
      id: 'P7',
      challenge: 'Adventure Battle: Watch out for falling artillery fire!',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'weapon',
          characterId: 'zant',
          weaponName: 'Scimitars Lv.3',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'compass',
          },
        ],
        treasure: [
          {
            type: 'fairy',
            text: 'Fairy Bottom - Skyloft Skirt',
            location: 'Northeast Keep',
          },
        ],
      },
      requirements: {
        kills: 1600,
        minutes: 15,
        damage: 199,
      },
      additionalRule: 'Master Quest Rule: Speed Run!',
      blockades: [],
      search: [
        {
          itemCardId: 'ladder',
          target: {
            row: 5,
            column: 12,
          },
        },
        {
          itemCardId: 'ladder',
          target: {
            row: 5,
            column: 12,
          },
        },
      ],
    },
    {
      id: 'P8',
      challenge: 'Challenge Battle: Rack up your KO count! Lv.9',
      difficulty: 'blue',
      rewards: {
        aRank: {
          type: 'heart-container',
          characterId: 'ruto',
        },
        clear: [
          {
            type: 'item-card',
            itemCardId: 'raft',
          },
        ],
      },
      requirements: {
        kills: 1600,
      },
      additionalRule: 'Master Quest Rule: No Guarding!',
      blockades: [],
      search: [],
    },
  ],
} satisfies MapDefinition;
