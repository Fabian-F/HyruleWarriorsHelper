import { Blockade, Difficulty } from "src/assets/data/enums"
import { HWMapTile } from "src/app/models"
import { Items } from "../../items.data"

export const A1: HWMapTile = {
  coords: {row: 0, col: 0},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of Turtle Rock!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Mask Lv.4+ - Young Link",
    clear: ["Thunder Drum Item Card"],
    treasure: [
      "Heart Container - Young Link (Stock Room)",
      "Fairy Top - Dreamer Top (South Square)",
      "Fairy Food - Water Fruit (Exit Square [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 4,
        col: 11
      }
    },
  ],
}

export const A2: HWMapTile = {
  coords: {row: 1, col: 0},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.13",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Koholint) - Lana"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 3,
        col: 3
      }
    },
  ],
}

export const A3: HWMapTile = {
  coords: {row: 2, col: 0},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.5",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Koholint) - Toon Link",
      "Power Bracelet Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 3,
        col: 4
      }
    },
  ],
}

export const A4: HWMapTile = {
  coords: {row: 3, col: 0},
  challenge: "Adventure Battle: Take on the warriors of Majora's Mask! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Harp Lv.4+ - Sheik",
    clear: undefined,
    treasure: [
      "Heart Container - Sheik (East Goron Keep)",
      "Fairy Decoration - Writer's Glasses (West Goron Keep)",
      "Fairy Food - Odd Mushroom (East Goron Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 7,
        col: 8
      }
    },
  ],
}

export const A5: HWMapTile = {
  coords: {row: 4, col: 0},
  challenge: "Adventure Battle: Defeat the warriors of time! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Grandpa Ulrira Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the round area east of S. Desert Keep.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const A6: HWMapTile = {
  coords: {row: 5, col: 0},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outift (Koholint) - Zant",
      "Compass Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 3,
        col: 3
      }
    },
  ],
}

export const B1: HWMapTile = {
  coords: {row: 0, col: 1},
  challenge: "Challenge Battle: Fight through the musical quiz!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const B2: HWMapTile = {
  coords: {row: 1, col: 1},
  challenge: "Adventure Battle: Rescue the allied forces! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Sail Lv.4+ - King Daphnes",
    clear: ["Power Wrist Item Card"],
    treasure: [
      "Heart Container - King Daphnes (South Mine Keep)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located along the eastern wall of the large room north of the Enemy Base.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 1,
        col: 12
      }
    },
  ],
}

export const B3: HWMapTile = {
  coords: {row: 2, col: 1},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Grandpa Ulrira Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [],
}

export const B4: HWMapTile = {
  coords: {row: 3, col: 1},
  challenge: "Challenge Battle: Defeat 500 enemies in time!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Boots Lv.2 - Linkle",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 2,
        col: 12
      }
    },
  ],
}

export const B5: HWMapTile = {
  coords: {row: 4, col: 1},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Marin",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [],
}

export const B6: HWMapTile = {
  coords: {row: 5, col: 1},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Impa",
    clear: ["Grandpa Ulrira Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 99,
  },
  blockades: [],
  search: [],
}

export const C1: HWMapTile = {
  coords: {row: 0, col: 2},
  challenge: "Challenge Battle: Defeat 1,000 enemies in time!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [],
}

export const C2: HWMapTile = {
  coords: {row: 1, col: 2},
  challenge: "Adventure Battle: Cleft in twain! A detachment cuts through!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Goddess Blade Lv.4+ - Fi",
    clear: undefined,
    treasure: [
      "Heart Container - Fi (South Field Keep)",
      "Fairy Decoration - Dreamer Aura (Hilltop Keep)",
      "Fairy Food - Mushroom Spores (East Field Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 7,
        col: 10
      }
    },
  ],
}

export const C3: HWMapTile = {
  coords: {row: 2, col: 2},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const C4: HWMapTile = {
  coords: {row: 3, col: 2},
  challenge: "Challenge Battle: Defeat 500 enemies in time!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Grandpa Ulrira Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH,
    Blockade.WEST,
  ],
  search: [],
}

export const C5: HWMapTile = {
  coords: {row: 4, col: 2},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: [
      "Marin",
      "Grandpa Ulrira Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.SOUTH,
  ],
  search: [],
}

export const C6: HWMapTile = {
  coords: {row: 5, col: 2},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the hill!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Volga",
    clear: ["Full Moon Cello Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located on the cliff found west of the Fairy Fountain, accessible via Hookshot.",
      "Complete the first mission and capture five or more enemy keeps without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [],
}

export const D1: HWMapTile = {
  coords: {row: 0, col: 3},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.10",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Grandpa Ulrira Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [
    {
      item: Items.MAGICPOWDER,
      target: {
        row: 3,
        col: 3
      }
    },
  ],
}

export const D2: HWMapTile = {
  coords: {row: 1, col: 3},
  challenge: "Adventure Battle: Defeat the warriors of Skyloft! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Marin",
    clear: undefined,
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the northeast corner of the unnamed square room northwest of West Keep.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [],
}

export const D3: HWMapTile = {
  coords: {row: 2, col: 3},
  challenge: "Adventure Battle: Final battle! Defeat the beast of Bottle Grotto!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Bell Lv.2 - Marin",
    clear: ["Conch Horn Item Card"],
    treasure: [
      "Heart Container - Marin (Mountain Keep)",
      "Fairy Headwear - Bow-Wow Headband (South Field Keep)",
      "Fairy Food - Mystery Seeds (South Field Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 3,
        col: 1
      }
    },
  ],
}

export const D4: HWMapTile = {
  coords: {row: 3, col: 3},
  challenge: "Challenge Battle: Fight through the legendary warrior quiz!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Grandpa Ulrira Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [],
}

export const D5: HWMapTile = {
  coords: {row: 4, col: 3},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.WEST
  ],
  search: [],
}

export const D6: HWMapTile = {
  coords: {row: 5, col: 3},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const E1: HWMapTile = {
  coords: {row: 0, col: 4},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Koholint) - Agitha",
      "Magic Powder Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 2,
        col: 8
      }
    },
  ],
}

export const E2: HWMapTile = {
  coords: {row: 1, col: 4},
  challenge: "Adventure Battle: Defeat the warriors of time! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [],
}

export const E3: HWMapTile = {
  coords: {row: 2, col: 4},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const E4: HWMapTile = {
  coords: {row: 3, col: 4},
  challenge: "Adventure Battle: Final battle! Defeat the lakeside beast!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Marin",
    clear: ["Sea Lily Bell Item Card"],
    treasure: [
      "Fairy Headwear - Pretty Ribbon (Exit Square)",
      "Fairy Food - Hot Spring Water (West Square [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.WEST
  ],
  search: [],
}

export const E5: HWMapTile = {
  coords: {row: 4, col: 4},
  challenge: "Adventure Battle: Defeat the commanders of two armies! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Cutlass Lv.4+ - Tetra",
    clear: undefined,
    treasure: [
      "Heart Container - Tetra (Mine Keep)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located on the outer wall to the east of the southern exit of Central Hall (by the cage).",
      "Complete the first mission and defeat 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 1,
        col: 11
      }
    },
  ],
}

export const E6: HWMapTile = {
  coords: {row: 5, col: 4},
  challenge: "Adventure Battle: Capture the enemy keeps!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Koholint) - Wizzro",
      "Full Moon Cello Item Card",
    ],
    treasure: [
      "Heart Container - Wizzro (Dragon Roost)",
      "Fairy Headwear - Toronbo Sun Hat (Jail Watch Keep)",
      "Fairy Food - Great Fairy's Tears (Star Island Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 3,
        col: 3
      }
    },
  ],
}

export const F1: HWMapTile = {
  coords: {row: 0, col: 5},
  challenge: "Adventure Battle: Fight the chosen ones!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Hero's Clothes (Koholint) - Link",
      "Thunder Drum Item Card",
    ],
    treasure: [
      "Heart Container - Link (Lower Level East)",
      "Fairy Top - Egg Dress (Upper Level East)",
      "Fairy Food - Great Fairy's Tears (Fairy Fountain [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 5,
        col: 9
      }
    },
  ],
}

export const F2: HWMapTile = {
  coords: {row: 1, col: 5},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.13",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const F3: HWMapTile = {
  coords: {row: 2, col: 5},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.7",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [],
}

export const F4: HWMapTile = {
  coords: {row: 3, col: 5},
  challenge: "Challenge Battle: Defeat all enemies! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Marin",
    clear: ["Grandpa Ulrira Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const F5: HWMapTile = {
  coords: {row: 4, col: 5},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.3",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 3,
        col: 13
      }
    },
  ],
}

export const F6: HWMapTile = {
  coords: {row: 5, col: 5},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.6",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const G1: HWMapTile = {
  coords: {row: 0, col: 6},
  challenge: "Adventure Battle: Cleft in twain! A detachment cuts through!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: "Use 8 instruments to clear all nightmares on the map."
  }
}

export const G2: HWMapTile = {
  coords: {row: 1, col: 6},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.11",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: ["Power Wrist Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [],
}

export const G3: HWMapTile = {
  coords: {row: 2, col: 6},
  challenge: "Adventure Battle: Rescue the allied forces! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Koholint) - Young Link",
      "Grandpa Ulrira Item Card",
    ],
    treasure: [
      "Heart Container - Volga (Fairy Fountain)",
      "Fairy Food - Light Fruit (Central Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [
    {
      item: Items.MAGICPOWDER,
      target: {
        row: 2,
        col: 6
      }
    },
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 7,
        col: 3
      }
    },
  ],
}

export const G4: HWMapTile = {
  coords: {row: 3, col: 6},
  challenge: "Adventure Battle: Battle the dancing dead!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const G5: HWMapTile = {
  coords: {row: 4, col: 6},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.8",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Marin",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH,
  ],
  search: [],
}

export const G6: HWMapTile = {
  coords: {row: 5, col: 6},
  challenge: "Adventure Battle: Rescue the allied forces! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Boots Lv.3 - Linkle",
    clear: ["Conch Horn Item Card"],
    treasure: [
      "Heart Container - Linkle (W. Boulder Keep)",
      "My Fairy - Light (East Goron Keep [Pot])",
      "Fairy Food - Light Fruit (East Keep [Pot])",
    ]
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 7,
        col: 2
      }
    },
  ],
}

export const H1: HWMapTile = {
  coords: {row: 0, col: 7},
  challenge: "Adventure Battle: Fight as a warrior of fire!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Robes (Koholint) - Zelda",
      "Compass Item Card",
    ],
    treasure: [
      "Heart Container - Marin (Lakeside Keep)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located in the small room east of Central Hall.",
      "Complete the first mission and KO 1200 enemies without losing 40% health). It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 3,
        col: 10
      }
    },
  ],
}

export const H2: HWMapTile = {
  coords: {row: 1, col: 7},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.12",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH
  ],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const H3: HWMapTile = {
  coords: {row: 2, col: 7},
  challenge: "Adventure Battle: Defeat the commanders of two armies! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Parasol Lv.4+ - Agitha",
    clear: undefined,
    treasure: [
      "Heart Container - Agitha (South Keep)",
      "Fairy Top - Prince's Cape (Hall of Time)",
      "Fairy Food - Hyoi Pear (East Cannon Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 4,
        col: 3
      }
    },
  ],
}

export const H4: HWMapTile = {
  coords: {row: 3, col: 7},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Marin",
    clear: ["Grandpa Ulrira Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [],
}

export const H5: HWMapTile = {
  coords: {row: 4, col: 7},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.5",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.MAGICPOWDER,
      target: {
        row: 9,
        col: 7
      }
    },
  ],
}

export const H6: HWMapTile = {
  coords: {row: 5, col: 7},
  challenge: "Adventure Battle: Defeat the commanders of two armies! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Boots Lv.4+ - Linkle",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 2,
        col: 11
      }
    },
  ],
}

export const I1: HWMapTile = {
  coords: {row: 0, col: 8},
  challenge: "Adventure Battle: Defeat enemies and traitors alike! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Shackle Lv.4+ - Midna",
    clear: ["Surf Harp Item Card"],
    treasure: [
      "Heart Container - Midna (Dragon Roost)",
      "Fairy Headwear - Koholint Hibiscus (Jail Watch Keep)",
      "Fairy Food - Hyoi Pear (Dragon Roost [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 7,
        col: 4
      }
    },
  ],
}

export const I2: HWMapTile = {
  coords: {row: 1, col: 8},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.6",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const I3: HWMapTile = {
  coords: {row: 2, col: 8},
  challenge: "Adventure Battle: Use diversionary tactics to defeat the enemy!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Koholint) - Ghirahim",
      "Grandpa Ulrira Item Card",
    ],
    treasure: [
      "Heart Container - Ghirahim (Dragon Roost)",
      "Fairy Food - Pumpkin (Bomb Shop [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 7,
        col: 8
      }
    },
  ],
}

export const I4: HWMapTile = {
  coords: {row: 3, col: 8},
  challenge: "Challenge Battle: Fight through the vehicle quiz!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 5,
        col: 4
      }
    },
  ],
}

export const I5: HWMapTile = {
  coords: {row: 4, col: 8},
  challenge: "Adventure Battle: Defeat the warriors of skyloft! Lv.1",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Magic Powder Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located north of the Rogue Base near the owl statue.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const I6: HWMapTile = {
  coords: {row: 5, col: 8},
  challenge: "Adventure Battle: Final battle! Defeat the cavern beast!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Koholint) - Tetra",
      "Wind Marimba Item Card",
    ],
    treasure: [
      "Heart Container - Tetra (East Temple Hall)",
      "Fairy Top - Koholint Dress (Southwest Keep)",
      "Fairy Food - Greengill (West Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.WEST
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 7,
        col: 8
      }
    },
  ],
}

export const J1: HWMapTile = {
  coords: {row: 0, col: 9},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.10",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Bell Lv.4+ - Marin",
    clear: ["Magic Powder Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.WEST
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 3,
        col: 2
      }
    },
  ],
}

export const J2: HWMapTile = {
  coords: {row: 1, col: 9},
  challenge: "Adventure Battle: Fight the heroes of the Wind Waker!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Hammer Lv.4+ - Darunia",
    clear: undefined,
    treasure: [
      "Heart Container - Darunia (Southeast Tree)",
      "Fairy Decoration - Koholint Aura (Fairy Fountain)",
      "Fairy Food - Odd Mushroom (West Square [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 1,
        col: 1
      }
    },
  ],
}

export const J3: HWMapTile = {
  coords: {row: 2, col: 9},
  challenge: "Adventure Battle: Join the Rogue Forces to defeat the enemy!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Bell Lv.3 - Marin",
    clear: ["Power Bracelet Item Card"],
    treasure: [
      "Heart Container - Marin (Town Entrance)",
      "Fairy Bottom - Prince's Trousers (Sacred Pedestal)",
      "Fairy Food - Mushroom Spores (South Square [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 8,
        col: 12
      }
    },
  ],
}

export const J4: HWMapTile = {
  coords: {row: 3, col: 9},
  challenge: "Challenge Battle: Defeat all enemies!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Marin",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const J5: HWMapTile = {
  coords: {row: 4, col: 9},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.9",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const J6: HWMapTile = {
  coords: {row: 5, col: 9},
  challenge: "Challenge Battle: Defeat all enemies! Lv.3",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Grandpa Ulrira Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const K1: HWMapTile = {
  coords: {row: 0, col: 10},
  challenge: "Challenge Battle: Fight through the women's weapons quiz!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const K2: HWMapTile = {
  coords: {row: 1, col: 10},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.3",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const K3: HWMapTile = {
  coords: {row: 2, col: 10},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the cliff!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Surf Harp Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located just north of the Southwest Square.",
      "Complete the first mission and capture five or more keeps without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1299,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [],
}

export const K4: HWMapTile = {
  coords: {row: 3, col: 10},
  challenge: "Challenge Battle: Defeat 600 enemies in time!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Grandpa Ulrira Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 4,
        col: 5
      }
    },
  ],
}

export const K5: HWMapTile = {
  coords: {row: 4, col: 10},
  challenge: "Adventure Battle: Defeat the warrriors of Twilight! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const K6: HWMapTile = {
  coords: {row: 5, col: 10},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.8",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [],
}

export const L1: HWMapTile = {
  coords: {row: 0, col: 11},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.7",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Impa",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const L2: HWMapTile = {
  coords: {row: 1, col: 11},
  challenge: "Adventure Battle: Defeat the warriors of Twilight! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Bell Lv.4 - Marin",
    clear: undefined,
    treasure: [
      "Heart Container - Marin (King's Hall)",
      "Fairy Food - Hot Spring Water (Hall of Mirrors [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 2,
        col: 8
      }
    },
  ],
}

export const L3: HWMapTile = {
  coords: {row: 2, col: 11},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Zora Scale Lv.4+ - Ruto",
    clear: ["Magic Powder Item Card"],
    treasure: [
      "Heart Container - Ruto (S. Entrance Keep)",
      "Fairy Food - Elixir Soup (N. Entrance Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 4,
        col: 7
      }
    },
  ],
}

export const L4: HWMapTile = {
  coords: {row: 3, col: 11},
  challenge: "Adventure Battle: Final battle! Defeat the shadow of the grotto!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Ocarina Lv.4+ - Skull Kid",
    clear: ["Coral Triangle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 3,
        col: 11
      }
    },
  ],
}

export const L5: HWMapTile = {
  coords: {row: 4, col: 11},
  challenge: "Adventure Battle: Defeat enemies and traitors alike! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Boots Lv.4 - Linkle",
    clear: ["Sea Lily Bell Item Card"],
    treasure: [
      "Heart Container - Linkle (Southeast Square)",
      "Fairy Headwear - Artist's Beret (North Palace)",
      "Fairy Food - Scent Seeds (North Palace [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 5,
        col: 0
      }
    },
  ],
}

export const L6: HWMapTile = {
  coords: {row: 5, col: 11},
  challenge: "Adventure Battle: Defeat the warriors of Twilight! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Koholint) - Skull Kid",
      "Power Bracelet Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 8,
        col: 5
      }
    },
  ],
}

export const M1: HWMapTile = {
  coords: {row: 0, col: 12},
  challenge: "Adventure Battle: Final battle! Defeat the bird of the tower!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Koholint) - Linkle",
      "Organ of Evening Calm Item Card",
    ],
    treasure: [
      "Heart Container - Marin (Central Square)",
      "Fairy Food - Elixir Soup (West Town Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 3,
        col: 12
      }
    },
  ],
}

export const M2: HWMapTile = {
  coords: {row: 1, col: 12},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.12",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Grandpa Ulrira Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.MAGICPOWDER,
      target: {
        row: 4,
        col: 15
      }
    },
  ],
}

export const M3: HWMapTile = {
  coords: {row: 2, col: 12},
  challenge: "Adventure Battle: Defeat the enemy forces!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Masked (Koholint) - Cia",
      "Unmasked (Koholint) - Cia",
      "Hatless (Koholint) - Cia",
      "Organ of Evening Calm Item Card",
    ],
    treasure: [
      "Heart Container - Cia (West Keep)",
      "Fairy Headwear - Dreamer Bandana (West Ruins)",
      "Fairy Food - Greengill (West Ruins [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 6,
        col: 7
      }
    },
  ],
}

export const M4: HWMapTile = {
  coords: {row: 3, col: 12},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.9",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [],
}

export const M5: HWMapTile = {
  coords: {row: 4, col: 12},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Marin",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  blockades: [
    Blockade.WEST
  ],
  search: [],
}

export const M6: HWMapTile = {
  coords: {row: 5, col: 12},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.11",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const N1: HWMapTile = {
  coords: {row: 0, col: 13},
  challenge: "Adventure Battle: The kings' armies march on!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Gauntlets Lv.4+ - Link",
    clear: ["Coral Triangle Item Card"],
    treasure: [
      "Heart Container - Link (Abandoned Fort)",
      "Fairy Bottom - Dreamer Skirt (North Field Keep)",
      "Fairy Food - Light Fruit (West Field Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.WEST
  ],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 2,
        col: 2
      }
    },
  ],
}

export const N2: HWMapTile = {
  coords: {row: 1, col: 13},
  challenge: "Adventure Battle: Join the Rogue Forces to defeat the enemy!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Summoning Gate Lv.4+ - Lana",
    clear: undefined,
    treasure: [
      "Heart Container - Lana (East Field Keep)",
      "Fairy Food - Pumpkin (West Field Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 4,
        col: 6
      }
    },
  ],
}

export const N3: HWMapTile = {
  coords: {row: 2, col: 13},
  challenge: "Adventure Battle: A ride on the wild rapids!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Koholint) - Ganondorf",
      "Power Bracelet Item Card",
    ],
    treasure: [
      "Heart Container - Marin (W. Rockface Keep)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located just southwest of the outpost in the northwest corner.",
      "Complete the first mission and defeat 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.GRANDPAULRIRA,
      target: {
        row: 5,
        col: 2
      }
    },
  ],
}

export const N4: HWMapTile = {
  coords: {row: 3, col: 13},
  challenge: "Adventure Battle: Fight as a warrior of water!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [],
  fullTileSearch: {
    item: Items.INSTRUMENT,
    description: 'Use any instrument to banish the nightmare.'
  }
}

export const N5: HWMapTile = {
  coords: {row: 4, col: 13},
  challenge: "Adventure Battle: Take on the warriors of Majora's Mask! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Koholint) - Sheik",
      "Wind Marimba Item Card",
    ],
    treasure: [
      "Heart Container - Sheik (Lakeside Keep)",
      "Fairy Decoration - Musical Aura (Mine Keep)",
      "Fairy Food - Water Fruit (East Room [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 8,
        col: 1
      }
    },
  ],
}

export const N6: HWMapTile = {
  coords: {row: 5, col: 13},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.1",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Koholint) - Tingle",
      "Grandpa Ulrira Item Card",
    ],
    treasure: [
      "Heart Container - Tingle (Southwest Keep)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located in the hallway north of East Keep.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [
    {
      item: Items.POWERBRACELET_3,
      target: {
        row: 5,
        col: 11
      }
    },
  ],
}
