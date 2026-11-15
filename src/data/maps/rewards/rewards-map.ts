import type { MapDefinition } from '../../../domain/maps/map.model';

export const rewardsMap = {
  id: 'rewards',
  name: 'Rewards Map',
  difficulty: 'easy',
  // Non-selectable image fields between missions.
  decorativeTiles: ['B3', 'B6', 'C2', 'C3', 'C5', 'C6', 'C7', 'D3', 'D6'],
  tiles: [
    {
      id: 'A3',
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Live out the illustration "Those with the Wind"!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'material',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'A6',
      battleAreaId: 'twilight-field',
      challenge: 'Adventure Battle: Live out the illustration "Rulers of Twilight"!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'material',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'B2',
      battleAreaId: 'wind-and-earth-temples',
      challenge: 'Adventure Battle: Live out the illustration "A Prayer Received"!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'material',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'B5',
      battleAreaId: 'sealed-grounds',
      challenge: 'Adventure Battle: Live out the illustration "The Giants Gather"!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'outfit',
          characterId: 'link',
          outfitId: 'heros-clothes-boss',
          outfitName: "Hero's Clothes (Boss)",
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'B7',
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Live out the illustration "Evil Power"!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'outfit',
          characterId: 'cia',
          outfitId: 'masked-unmasked-hatless-boss',
          outfitName: 'Masked / Unmasked / Hatless (Boss)',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'C1',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Adventure Battle: Live out the illustration "Scattered Seeds"',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'outfit',
          characterId: 'lana',
          outfitId: 'standard-outfit-boss',
          outfitName: 'Standard Outfit (Boss)',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'C4',
      battleAreaId: 'skyloft',
      challenge: 'Adventure Battle: Live out the illustration "True Partners"',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'outfit',
          characterId: 'link',
          outfitId: 'dark-link-costume',
          outfitName: 'Dark Link Costume',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'C8',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Live out the illustration "Unity"!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'material',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'D2',
      battleAreaId: 'forsaken-fortress',
      challenge: 'Adventure Battle: Live out the illustration "The Nightmare Closes In"!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'material',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'D5',
      battleAreaId: 'ganons-tower',
      challenge: 'Adventure Battle: Live out the illustration "Chosen by Fate"!',
      difficulty: 'colorless',
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'D7',
      battleAreaId: 'hyrule-field',
      challenge: 'Adventure Battle: Live out the illustration "Running to the Rescue"!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'material',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'E3',
      battleAreaId: 'valley-of-seers',
      challenge: 'Adventure Battle: Live out the illustration "Guided by Courage"!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'material',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
    {
      id: 'E6',
      battleAreaId: 'gerudo-desert',
      challenge: 'Adventure Battle: Live out the illustration "Boss Rush"!',
      difficulty: 'colorless',
      rewards: {
        aRank: {
          type: 'outfit',
          characterId: 'zelda',
          outfitId: 'standard-robes-boss',
          outfitName: 'Standard Robes (Boss)',
        },
      },
      requirements: {
        kills: 1000,
        minutes: 15,
        damage: 99,
      },
      characterSelection: {
        slots: 'unknown',
        status: 'unknown',
      },
    },
  ],
} satisfies MapDefinition;
