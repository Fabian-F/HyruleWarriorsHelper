import { Blockade, Difficulty } from "src/assets/data/enums"
import { HWMapTile } from "src/app/models"
import { Items } from "../../items.data"

export const A1: HWMapTile = {
  coords: {row: 0, col: 0},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Compass Item Card"],
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

export const A2: HWMapTile = {
  coords: {row: 1, col: 0},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Whirlwind Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const A3: HWMapTile = {
  coords: {row: 2, col: 0},
  challenge: "Adventure Battle: Defeat the commanders of two armies!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Link",
    clear: ["Cannon Item Card"],
    treasure: [
      "Fairy Bottom - Chancellor's Trousers (Arbiter's Keep)",
      "Fairy Food - Hyoi Pear (Central Keep [Pot])",
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

export const A4: HWMapTile = {
  coords: {row: 3, col: 0},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Impa",
      "Steel Train Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [],
  search: [
    {
      item: Items.WHIRLWIND,
      target: {
        row: 7,
        col: 10
      }
    },
  ],
}

export const A5: HWMapTile = {
  coords: {row: 4, col: 0},
  challenge: "Adventure Battle: Take on the warriors of Majora's Mask! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Whirlwind Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the middle of the path going diagonally between East Goron Keep and E. Boulder Keep behind a cracked wall accessible via bomb.",
      "Complete the first mission and capture five or more keeps without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [],
}

export const A6: HWMapTile = {
  coords: {row: 5, col: 0},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.6",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Ganondorf",
      "Cannon Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.WHIRLWIND,
      target: {
        row: 3,
        col: 2
      }
    },
  ],
}

export const A7: HWMapTile = {
  coords: {row: 6, col: 0},
  challenge: "Adventure Battle: Fight as a warrior of lightning!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Whirlwind Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located just west of the Allied Base.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [],
}

export const A8: HWMapTile = {
  coords: {row: 7, col: 0},
  challenge: "Adventure Battle: Final battle! Defeat the shadow in the dark den!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Dragon Spear Lv.4+ - Volga",
    clear: ["Whirlwind Item Card"],
    treasure: [
      "Heart Container - Volga (W. Rockface Keep)",
      "Fairy Food - Meat (North Field Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 8,
        col: 11
      }
    },
  ],
}

export const B1: HWMapTile = {
  coords: {row: 0, col: 1},
  challenge: "Adventure Battle: Final battle! Defeat the snowy plains' beast!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Cannon Item Card"],
    treasure: [
      "Fairy Headwear - Anouki Headband (Lakeside Keep)",
      "Fairy Food - All-Purpose Bait (West Room [Pot])",
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
      item: Items.RAILWAYTRACK,
      target: {
        row: 9,
        col: 11
      }
    }
  ],
}

export const B2: HWMapTile = {
  coords: {row: 1, col: 1},
  challenge: "Adventure Battle: Can you become king of the castle!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Linkle",
      "Railway Track Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [
    {
      item: Items.WHIRLWIND,
      target: {
        row: 3,
        col: 8
      }
    },
  ],
}

export const B3: HWMapTile = {
  coords: {row: 2, col: 1},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.4",
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
  blockades: [
    Blockade.SOUTH
  ],
  search: [],
}

export const B4: HWMapTile = {
  coords: {row: 3, col: 1},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the great tree!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Sand Wand Lv.1 - Toon Link",
    clear: ["Railway Track Item Card"],
    treasure: [
      "Heart Container - Toon Link (W. Rockface Keep)",
      "Fairy Food - Weird Egg (Fairy Fountain [Pot])",
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
      item: Items.CANNON,
      target: {
        row: 8,
        col: 6
      }
    },
  ],
}

export const B5: HWMapTile = {
  coords: {row: 4, col: 1},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.1",
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
}

export const B6: HWMapTile = {
  coords: {row: 5, col: 1},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.3",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Whirlwind Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.RAILWAYTRACK,
      target: {
        row: 9,
        col: 2
      }
    }
  ],
}

export const B7: HWMapTile = {
  coords: {row: 6, col: 1},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.SOUTH,
  ],
  search: [],
}

export const B8: HWMapTile = {
  coords: {row: 7, col: 1},
  challenge: "Adventure Battle: Rack up your KO count! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Young Link",
      "Spirit Train Item Card",
    ],
    treasure: [
      "Fairy Headwear - Chancellor's Hat (SE Room)",
      "Fairy Food - All-Purpose Bait (Hall of Mirrors [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.WHIRLWIND,
      target: {
        row: 7,
        col: 13
      }
    },
  ],
}

export const C1: HWMapTile = {
  coords: {row: 0, col: 2},
  challenge: "Adventure Battle: Defend the allied keeps! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Demon Blade Lv.4+ - Ghirahim",
    clear: ["Whirlwind Item Card"],
    treasure: [
      "Heart Container - Ghirahim (NW Sage Keep)",
      "Fairy Food - Great Fairy's Tears (NE Sage Keep [Pot])",
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
      item: Items.CANNON,
      target: {
        row: 9,
        col: 11
      }
    },
  ],
}

export const C2: HWMapTile = {
  coords: {row: 1, col: 2},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.4",
  difficulty: Difficulty.YELLOW,
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
  blockades: [
    Blockade.NORTH,
    Blockade.EAST
  ],
  search: [],
}

export const C3: HWMapTile = {
  coords: {row: 2, col: 2},
  challenge: "Adventure Battle: Defend the allied keeps! Lv.1",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Railway Track Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the dead end northeast of Star Island Keep.",
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
      item: Items.CANNON,
      target: {
        row: 4,
        col: 13
      }
    },
  ],
}

export const C4: HWMapTile = {
  coords: {row: 3, col: 2},
  challenge: "Adventure Battle: Win the keep-capturing competition! Lv.1",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: ["Whirlwind Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [],
}

export const C5: HWMapTile = {
  coords: {row: 4, col: 2},
  challenge: "Challenge Battle: Fight through the mystery mastery quiz!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: ["Spirit Train Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 99,
  },
  blockades: [],
  search: [],
}

export const C6: HWMapTile = {
  coords: {row: 5, col: 2},
  challenge: "Adventure Battle: Stop the Rogue Forces and defeat the enemy! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Cannon Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the little round area just southwest of the Allied Base.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [],
  search: [],
}

export const C7: HWMapTile = {
  coords: {row: 6, col: 2},
  challenge: "Challenge Battle: Rack up your KO count! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Railway Track Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1000,
    minutes: undefined,
    damage: 99,
  },
  blockades: [],
  search: [],
}

export const C8: HWMapTile = {
  coords: {row: 7, col: 2},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.2",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Whirlwind Item Card"],
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
      item: Items.RAILWAYTRACK,
      target: {
        row: 8,
        col: 5
      }
    }
  ],
}


export const D1: HWMapTile = {
  coords: {row: 0, col: 3},
  challenge: "Adventure Battle: Win the keep-capturing competition! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Sand Wand Lv.4 - Toon Link",
    clear: ["Cannon Item Card"],
    treasure: [
      "Heart Container - Toon Link (Academy Keep)",
      "Fairy Food - Skullfish (Academy Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.WHIRLWIND,
      target: {
        row: 6,
        col: 12
      }
    },
  ],
}

export const D2: HWMapTile = {
  coords: {row: 1, col: 3},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.10",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Steel Train Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 8,
        col: 15
      }
    },
  ],
}

export const D3: HWMapTile = {
  coords: {row: 2, col: 3},
  challenge: "Adventure Battle: Defeat the warriors of Twilight! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Darunia",
      "Compass Item Card",
    ],
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
      item: Items.WHIRLWIND,
      target: {
        row: 6,
        col: 10
      }
    },
  ],
}

export const D4: HWMapTile = {
  coords: {row: 3, col: 3},
  challenge: "Adventure Battle: Defeat the warriors of Twilight! Lv.2",
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
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH,
  ],
  search: [],
}

export const D5: HWMapTile = {
  coords: {row: 4, col: 3},
  challenge: "Adventure Battle: Defeat the barrier specialist forces! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Railway Track Item Card"],
    treasure: [
      "Fairy Top - Chancellor's Jacket (South Square)",
      "Fairy Food - Stamina Fruit (Enemy Base [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [],
}

export const D6: HWMapTile = {
  coords: {row: 5, col: 3},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.5",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const D7: HWMapTile = {
  coords: {row: 6, col: 3},
  challenge: "Adventure Battle: Defeat the warriors of Twilight! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Cannon Item Card"],
    treasure: [
      "Fairy Bottom - Forest Trousers (West Field Keep)",
      "Fairy Food - Stamina Fruit (Rocky Square [Pot])",
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
  search: [],
}

export const D8: HWMapTile = {
  coords: {row: 7, col: 3},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: undefined,
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
      item: Items.RAILWAYTRACK,
      target: {
        row: 7,
        col: 13
      }
    }
  ],
}

export const E1: HWMapTile = {
  coords: {row: 0, col: 4},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Whirlwind Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  blockades: [],
  search: [
    {
      item: Items.RAILWAYTRACK,
      target: {
        row: 8,
        col: 3
      }
    }
  ],
}

export const E2: HWMapTile = {
  coords: {row: 1, col: 4},
  challenge: "Adventure Battle: Final battle! Defeat the giant bird of the Fire Temple!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Volga",
      "Whirlwind Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 9,
        col: 9
      }
    },
  ],
}

export const E3: HWMapTile = {
  coords: {row: 2, col: 4},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Rito Harp Lv.4+ - Medli",
    clear: ["Cannon Item Card"],
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
      item: Items.WHIRLWIND,
      target: {
        row: 5,
        col: 1
      }
    },
  ],
}

export const E4: HWMapTile = {
  coords: {row: 3, col: 4},
  challenge: "Adventure Battle: Defeat the Aeralfos Forces! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Whirlwind Item Card"],
    treasure: [
      "Fairy Bottom - Armored Trousers (N. Settlement)",
      "Fairy Food - Life Tree Fruit (North Oasis [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [],
}

export const E5: HWMapTile = {
  coords: {row: 4, col: 4},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.7",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Toon Link",
      "Cannon Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [
    {
      item: Items.WHIRLWIND,
      target: {
        row: 6,
        col: 4
      }
    },
  ],
}

export const E6: HWMapTile = {
  coords: {row: 5, col: 4},
  challenge: "Adventure Battle: Take the steam out of their engines!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Scepter Lv.4+ - Cia",
    clear: ["Whirlwind Item Card"],
    treasure: [
      "Heart Container - Cia (West Square)",
      "Fairy Food - Mushroom Spores (West Square [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 8,
        col: 12
      }
    },
  ],
}

export const E7: HWMapTile = {
  coords: {row: 6, col: 4},
  challenge: "Adventure Battle: Stop the Rogue Forces and defeat the enemy! Lv.3",
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
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [],
}

export const E8: HWMapTile = {
  coords: {row: 7, col: 4},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: ["Golden Train Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [],
}

export const F1: HWMapTile = {
  coords: {row: 0, col: 5},
  challenge: "Adventure Battle: Fight the heroes of the Wind Waker! Lv.1",
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
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH,
  ],
  search: [],
}

export const F2: HWMapTile = {
  coords: {row: 1, col: 5},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.5",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Railway Track Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.WHIRLWIND,
      target: {
        row: 4,
        col: 12
      }
    },
  ],
}

export const F3: HWMapTile = {
  coords: {row: 2, col: 5},
  challenge: "Adventure Battle: Defeat the Dinolfos Forces!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Spirit Train Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located north of S. Rockface Keep.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.WHIRLWIND,
      target: {
        row: 3,
        col: 2
      }
    },
  ],
}

export const F4: HWMapTile = {
  coords: {row: 3, col: 5},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.3",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: ["Railway Track Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [],
}

export const F5: HWMapTile = {
  coords: {row: 4, col: 5},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.3",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Whirlwind Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 4,
        col: 12
      }
    },
  ],
}

export const F6: HWMapTile = {
  coords: {row: 5, col: 5},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.6",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Sand Wand Lv.2 - Toon Link",
    clear: ["Cannon Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 1,
        col: 13
      }
    },
  ],
}

export const F7: HWMapTile = {
  coords: {row: 6, col: 5},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.7",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Cyclone Slate Item Card"],
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
  search: [],
}

export const F8: HWMapTile = {
  coords: {row: 7, col: 5},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: ["Golden Ship Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located just to the southwest of the Enemy Base.",
      "Complete the first mission and capture five or more enemy keeps without losing 40% health. It is located in the same place as Gold Skulltula #1."
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

export const G1: HWMapTile = {
  coords: {row: 0, col: 6},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.13",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Golden Train Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.WEST
  ],
  search: [
    {
      item: Items.WHIRLWIND,
      target: {
        row: 6,
        col: 4
      }
    },
  ],
}

export const G2: HWMapTile = {
  coords: {row: 1, col: 6},
  challenge: "Adventure Battle: Defeat the army of Big Blins! Lv.1",
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
  blockades: [],
  search: [],
}

export const G3: HWMapTile = {
  coords: {row: 2, col: 6},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.8",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Whirlwind Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 3,
        col: 5
      }
    },
  ],
}

export const G4: HWMapTile = {
  coords: {row: 3, col: 6},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.14",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Hero's Clothes (Grand Travels) - Link",
      "Whirlwind Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 7,
        col: 4
      }
    },
  ],
}

export const G5: HWMapTile = {
  coords: {row: 4, col: 6},
  challenge: "Adventure Battle: Final battle! Defeat the demon king in the castle!",
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
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [],
}

export const G6: HWMapTile = {
  coords: {row: 5, col: 6},
  challenge: "Adventure Battle: Defeat the Aeralfos Forces! Lv.1",
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
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [],
}

export const G7: HWMapTile = {
  coords: {row: 6, col: 6},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.6",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Tetra",
      "Compass Item Card",
    ],
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
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 6,
        col: 13
      }
    },
  ],
}

export const G8: HWMapTile = {
  coords: {row: 7, col: 6},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the distant seas!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Phantom Arms Lv.3 - Toon Zelda",
    clear: ["Cannon Item Card"],
    treasure: [
      "Heart Container - Toon Zelda (Stock Room)",
      "Fairy Food - Carrot (Central Square [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.CYCLONESLATE,
      target: {
        row: 6,
        col: 13
      }
    },
    {
      item: Items.FISHINGROD,
      target: {
        row: 3,
        col: 2
      }
    },
  ],
}

export const H1: HWMapTile = {
  coords: {row: 0, col: 7},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the sand castle!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Sand Wand Lv.4+ - Toon Link",
    clear: ["Railway Track Item Card"],
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
      item: Items.CANNON,
      target: {
        row: 8,
        col: 2
      }
    },
  ],
}

export const H2: HWMapTile = {
  coords: {row: 1, col: 7},
  challenge: "Challenge Battle: Fight through the vehicle quiz!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Cannon Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [],
}

export const H3: HWMapTile = {
  coords: {row: 2, col: 7},
  challenge: "Challenge Battle: Rack up your KO count! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Sand Wand Lv.3 - Toon Link",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 5,
        col: 10
      }
    },
  ],
}

export const H4: HWMapTile = {
  coords: {row: 3, col: 7},
  challenge: "Adventure Battle: Final battle! Defeat the bird of the deep!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Baton Lv.4+ - Zelda",
    clear: ["Cannon Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [
    {
      item: Items.WHIRLWIND,
      target: {
        row: 7,
        col: 4
      }
    },
  ],
}

export const H5: HWMapTile = {
  coords: {row: 4, col: 7},
  challenge: "Adventure Battle: Defeat the barrier specialist forces! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Trident Lv.4+ - Ganondorf",
    clear: ["Cannon Item Card"],
    treasure: undefined
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
      item: Items.FISHINGROD,
      target: {
        row: 5,
        col: 4
      }
    },
  ],
}

export const H6: HWMapTile = {
  coords: {row: 5, col: 7},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.3",
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
  blockades: [
    Blockade.NORTH,
    Blockade.WEST
  ],
  search: [],
}

export const H7: HWMapTile = {
  coords: {row: 6, col: 7},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.5",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Cannon Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [
    {
      item: Items.FISHINGROD,
      target: {
        row: 7,
        col: 2
      }
    },
  ],
}

export const H8: HWMapTile = {
  coords: {row: 7, col: 7},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Fishing Rod Item Card"],
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

export const I1: HWMapTile = {
  coords: {row: 0, col: 8},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.4",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Whirlwind Item Card"],
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
  search: [],
}

export const I2: HWMapTile = {
  coords: {row: 1, col: 8},
  challenge: "Adventure Battle: Fight as a warrior of fire!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: ["Steel Train Item Card"],
    treasure: [
      "Fairy Top - Armored Top (East Temple)",
      "Fairy Food - Water Fruit (West Keep [Pot])",
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

export const I3: HWMapTile = {
  coords: {row: 2, col: 8},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Cannon Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.RAILWAYTRACK,
      target: {
        row: 3,
        col: 6
      }
    }
  ],
}

export const I4: HWMapTile = {
  coords: {row: 3, col: 8},
  challenge: "Challenge Battle: Fight through the traveling hero quiz!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Cannon Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [
    {
      item: Items.FISHINGROD,
      target: {
        row: 6,
        col: 2
      }
    },
  ],
}

export const I5: HWMapTile = {
  coords: {row: 4, col: 8},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.14",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Fishing Rod Item Card"],
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
      item: Items.RAILWAYTRACK,
      target: {
        row: 7,
        col: 4
      }
    }
  ],
}

export const I6: HWMapTile = {
  coords: {row: 5, col: 8},
  challenge: "Adventure Battle: Defeat the warriors of time! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Ruto",
      "Fishing Rod Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 3,
        col: 10
      }
    },
    {
      item: Items.CYCLONESLATE,
      target: {
        row: 6,
        col: 2
      }
    },
  ],
}

export const I7: HWMapTile = {
  coords: {row: 6, col: 8},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the cave!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Cannon Item Card"],
    treasure: [
      "My Fairy - Water (Eastern Tree)",
      "Fairy Food - Hyoi Pear (Eastern Tree [Pot])",
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

export const I8: HWMapTile = {
  coords: {row: 7, col: 8},
  challenge: "Challenge Battle: Fight through the forgetful foe quiz!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Fishing Rod Item Card"],
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

export const J1: HWMapTile = {
  coords: {row: 0, col: 9},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the seafloor!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Wizzro",
      "Cannon Item Card",
    ],
    treasure: [
      "Fairy Headwear - Armored Helmet (Southwest Keep)",
      "Fairy Food - Life Tree Fruit (West Keep [Pot])",
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
      item: Items.WHIRLWIND,
      target: {
        row: 3,
        col: 1
      }
    },
  ],
}

export const J2: HWMapTile = {
  coords: {row: 1, col: 9},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.10",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Railway Track Item Card"],
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

export const J3: HWMapTile = {
  coords: {row: 2, col: 9},
  challenge: "Adventure Battle: Defeat the warriors of Skyloft! Lv.1",
  difficulty: Difficulty.ORANGE,
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
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.SOUTH
  ],
  search: [],
}

export const J4: HWMapTile = {
  coords: {row: 3, col: 9},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.8",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Whirlwind Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST
  ],
  search: [],
}

export const J5: HWMapTile = {
  coords: {row: 4, col: 9},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the temple!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Magic Rod Lv.4+ - Link",
    clear: ["Compass Item Card"],
    treasure: [
      "Heart Container - Link (East Room)",
      "Fairy Food - Rock Sirloin (West Room [Pot])",
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
      item: Items.WHIRLWIND,
      target: {
        row: 6,
        col: 11
      }
    },
  ],
}

export const J6: HWMapTile = {
  coords: {row: 5, col: 9},
  challenge: "Adventure Battle: Defeat the Gibdo Forces!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Cyclone Slate Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the little round dead end room east of the Enemy Base, by the outpost.",
      "Complete the first mission and defeat 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [
    {
      item: Items.FISHINGROD,
      target: {
        row: 6,
        col: 14
      }
    },
  ],
}

export const J7: HWMapTile = {
  coords: {row: 6, col: 9},
  challenge: "Challenge Battle: Defeat all enemies! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Volga",
    clear: ["Iron Ship Item Card"],
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

export const J8: HWMapTile = {
  coords: {row: 7, col: 9},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the secret island!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Fi",
      "Cyclone Slate Item Card",
    ],
    treasure: [
      "Fairy Bottom - Skyloft Slacks (Temple Face Keep)",
      "Fairy Food - Elixir Soup (East Room [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.FISHINGROD,
      target: {
        row: 6,
        col: 1
      }
    },
  ],
}

export const K1: HWMapTile = {
  coords: {row: 0, col: 10},
  challenge: "Adventure Battle: Defeat the army of Big Blins! Lv.2",
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
    Blockade.EAST
  ],
  search: [],
}

export const K2: HWMapTile = {
  coords: {row: 1, col: 10},
  challenge: "Adventure Battle: Defeat the army of Big Blins! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Naginata Lv.4+ - Impa",
    clear: ["Railway Track Item Card"],
    treasure: [
      "Heart Container - Impa (W. Rockface Keep)",
      "Fairy Food - Bombfish (South Field Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 7,
        col: 7
      }
    },
  ],
}

export const K3: HWMapTile = {
  coords: {row: 2, col: 10},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.1",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Spear Lv.4+ - Lana",
    clear: ["Fishing Rod Item Card"],
    treasure: [
      "Heart Container - Lana (Faces Keep)",
      "Fairy Food - Lon Lon Milk (SW Sage Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 7,
        col: 5
      }
    },
  ],
}

export const K4: HWMapTile = {
  coords: {row: 3, col: 10},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.7",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Cyclone Slate Item Card"],
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
}

export const K5: HWMapTile = {
  coords: {row: 4, col: 10},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Impa",
    clear: ["Fishing Rod Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST
  ],
  search: [],
}

export const K6: HWMapTile = {
  coords: {row: 5, col: 10},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: ["Toon Zelda"],
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
      item: Items.CANNON,
      target: {
        row: 6,
        col: 14
      }
    },
  ],
}

export const K7: HWMapTile = {
  coords: {row: 6, col: 10},
  challenge: "Challenge Battle: Win the KO competition! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Cannon Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.FISHINGROD,
      target: {
        row: 7,
        col: 3
      }
    },
  ],
}

export const K8: HWMapTile = {
  coords: {row: 7, col: 10},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Scimitars Lv.4+ - Zant",
    clear: ["Fishing Rod Item Card"],
    treasure: [
      "Heart Container - Zant (NW Sage Keep)",
      "Fairy Food - Bombfish (NE Sage Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 8,
        col: 8
      }
    },
  ],
}

export const L1: HWMapTile = {
  coords: {row: 0, col: 11},
  challenge: "Adventure Battle: Take on the warriors of Majora's Mask! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Mirror Lv.4+ - Twili Midna",
    clear: ["Fishing Rod Item Card"],
    treasure: [
      "Heart Container - Twili Midna (Lakeside Keep)",
      "Fairy Food - Ordon Catfish (Hall of Mirrors [Pot])",
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
      item: Items.CANNON,
      target: {
        row: 7,
        col: 2
      }
    },
  ],
}

export const L2: HWMapTile = {
  coords: {row: 1, col: 11},
  challenge: "Adventure Battle: Defeat the warriors of Skyloft! Lv.2",
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
  blockades: [
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [],
}

export const L3: HWMapTile = {
  coords: {row: 2, col: 11},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.11",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Iron Ship Item Card"],
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
      item: Items.FISHINGROD,
      target: {
        row: 7,
        col: 5
      }
    },
  ],
}

export const L4: HWMapTile = {
  coords: {row: 3, col: 11},
  challenge: "Challenge Battle: Defeat all enemies! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Tingle",
      "Compass Item Card",
    ],
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
      item: Items.CANNON,
      target: {
        row: 7,
        col: 5
      }
    },
  ],
}

export const L5: HWMapTile = {
  coords: {row: 4, col: 11},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Cannon Item Card"],
    treasure: [
      "Fairy Headwear - Destiny Tiara (South Square)",
      "Fairy Food - Ordon Catfish (Sacred Pedestal [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [],
}

export const L6: HWMapTile = {
  coords: {row: 5, col: 11},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: ["S.S. Linebeck Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [],
  search: [],
}

export const L7: HWMapTile = {
  coords: {row: 6, col: 11},
  challenge: "Adventure Battle: Stop the Rogue Forces and defeat the enemy! lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [],
  search: [],
}

export const L8: HWMapTile = {
  coords: {row: 7, col: 11},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Fishing Rod Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 99,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [],
}

export const M1: HWMapTile = {
  coords: {row: 0, col: 12},
  challenge: "Adventure Battle: Stop the Rogue Forces and defeat the enemy! Lv.5",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: ["S.S. Linebeck Item Card"],
    treasure: [
      "Fairy Bottom - Destiny Skirt (East Garden)",
      "Fairy Food - Hylian Loach (Northeast Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [],
}

export const M2: HWMapTile = {
  coords: {row: 1, col: 12},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the ruins!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Fishing Rod Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 5,
        col: 3
      }
    },
  ],
}

export const M3: HWMapTile = {
  coords: {row: 2, col: 12},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.13",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Phantom Arms Lv.4 - Toon Zelda",
    clear: ["Cannon Item Card"],
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
      item: Items.CYCLONESLATE,
      target: {
        row: 7,
        col: 1
      }
    },
    {
      item: Items.FISHINGROD,
      target: {
        row: 0,
        col: 13
      }
    },
  ],
}

export const M4: HWMapTile = {
  coords: {row: 3, col: 12},
  challenge: "Adventure Battle: Defeat the warriors of time! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: ["Cyclone Slate Item Card"],
    treasure: [
      "Fairy Decoration - Destiny Necklace (Stronghold)",
      "Fairy Food - Hylian Loach (Stronghold [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [],
}

export const M5: HWMapTile = {
  coords: {row: 4, col: 12},
  challenge: "Challenge Battle: Defeat all enemies! Lv.3",
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
    Blockade.NORTH,
    Blockade.WEST
  ],
  search: [],
}

export const M6: HWMapTile = {
  coords: {row: 5, col: 12},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: ["Fishing Rod Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located northwest of the Allied Base.",
      "Complete the first mission and defeat 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.CYCLONESLATE,
      target: {
        row: 7,
        col: 10
      }
    },
  ],
}

export const M7: HWMapTile = {
  coords: {row: 6, col: 12},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Twili Midna",
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
      item: Items.CANNON,
      target: {
        row: 5,
        col: 8
      }
    },
  ],
}

export const M8: HWMapTile = {
  coords: {row: 7, col: 12},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the eternal fire!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Phantom Arms Lv.2 - Toon Zelda",
    clear: ["Cannon Item Card"],
    treasure: [
      "Heart Container - Toon Zelda (Stock Room)",
      "Fairy Food - Weird Egg (Stock Room [Pot])",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.FISHINGROD,
      target: {
        row: 2,
        col: 1
      }
    },
  ],
}

export const N1: HWMapTile = {
  coords: {row: 0, col: 13},
  challenge: "Adventure Battle: Defeat the enemy forces!",
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
}

export const N2: HWMapTile = {
  coords: {row: 1, col: 13},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.5",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Cannon Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.FISHINGROD,
      target: {
        row: 6,
        col: 13
      }
    },
  ],
}

export const N3: HWMapTile = {
  coords: {row: 2, col: 13},
  challenge: "Adventure Battle: An SOS?! Quickly, to the rescue!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Zelda",
      "Compass Item Card",
    ],
    treasure: [
      "Fairy Top - Destiny Top (Hilltop Keep)",
      "Fairy Food - Greengill (South Field Keep [Pot])",
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
      item: Items.FISHINGROD,
      target: {
        row: 6,
        col: 12
      }
    },
  ],
}

export const N4: HWMapTile = {
  coords: {row: 3, col: 13},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Fishing Rod Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 7,
        col: 13
      }
    },
  ],
}

export const N5: HWMapTile = {
  coords: {row: 4, col: 13},
  challenge: "Adventure Battle: Stop the enemy's recruitment efforts!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - Skull Kid",
      "Compass Item Card",
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
      item: Items.FISHINGROD,
      target: {
        row: 4,
        col: 8
      }
    },
  ],
}

export const N6: HWMapTile = {
  coords: {row: 5, col: 13},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.8",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Balloon Lv.4+ - Tingle",
    clear: ["Compass Item Card"],
    treasure: ["Fairy Food - Water Fruit (S. Rockface Keep [Pot])"]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 6,
        col: 1
      }
    },
  ],
}

export const N7: HWMapTile = {
  coords: {row: 6, col: 13},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.8",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Fishing Rod Item Card"],
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

export const N8: HWMapTile = {
  coords: {row: 7, col: 13},
  challenge: "Adventure Battle: Fight the heroes of the Wind Waker! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Ring Lv.4+ - Wizzro",
    clear: ["Fishing Rod Item Card"],
    treasure: [
      "Heart Container - Wizzro (Jail Watch Keep)",
      "Fairy Food - Greengill (Star Island Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 6,
        col: 2
      }
    },
  ],
}

export const O1: HWMapTile = {
  coords: {row: 0, col: 14},
  challenge: "Challenge Battle: Defeat all enemies! Lv.4",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Cyclone Slate Item Card"],
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
      item: Items.FISHINGROD,
      target: {
        row: 6,
        col: 3
      }
    },
  ],
}

export const O2: HWMapTile = {
  coords: {row: 1, col: 14},
  challenge: "Adventure Battle: Fight as a warrior of light! Lv.3",
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
    Blockade.SOUTH,
    Blockade.WEST,
  ],
  search: [],
}

export const O3: HWMapTile = {
  coords: {row: 2, col: 14},
  challenge: "Adventure Battle: Fight as a warrior of light! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Cannon Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located north of the Rogue Base.",
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
      item: Items.FISHINGROD,
      target: {
        row: 8,
        col: 8
      }
    },
  ],
}

export const O4: HWMapTile = {
  coords: {row: 3, col: 14},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: ["Fishing Rod Item Card"],
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

export const O5: HWMapTile = {
  coords: {row: 4, col: 14},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.9",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: ["Fishing Rod Item Card"],
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

export const O6: HWMapTile = {
  coords: {row: 5, col: 14},
  challenge: "Challenge Battle: Win the KO competition! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Cannon Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const O7: HWMapTile = {
  coords: {row: 6, col: 14},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the mountain!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: ["Cyclone Slate Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located on the outer southern wall of the Rockface Keep.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [],
}

export const O8: HWMapTile = {
  coords: {row: 7, col: 14},
  challenge: "Challenge Battle: Fight through the action quiz!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: ["Iron Ship Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [],
}

export const P1: HWMapTile = {
  coords: {row: 0, col: 15},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Phantom Arms Lv.4+ - Toon Zelda",
    clear: ["Fishing Rod Item Card"],
    treasure: [
      "Heart Container - Toon Zelda (Central Chamber)",
      "Fairy Food - Pegasus Seeds (Northeast Keep [Pot])",
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
      item: Items.CANNON,
      target: {
        row: 8,
        col: 8
      }
    },
  ],
}

export const P2: HWMapTile = {
  coords: {row: 1, col: 15},
  challenge: "Adventure Battle: Fight the chosen ones! Lv.1",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Cannon Item Card"],
    treasure: [
      "Fairy Top - Captain's Jacket (Central Keep)",
      "Fairy Food - Meat (South Field Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [],
}

export const P3: HWMapTile = {
  coords: {row: 2, col: 15},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.12",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Golden Ship Item Card"],
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
      item: Items.CYCLONESLATE,
      target: {
        row: 4,
        col: 2
      }
    },
  ],
}

export const P4: HWMapTile = {
  coords: {row: 3, col: 15},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the iceberg!",
  difficulty: Difficulty.ORANGE,
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
}

export const P5: HWMapTile = {
  coords: {row: 4, col: 15},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.9",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Toon Zelda",
    clear: ["Cannon Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [
    {
      item: Items.FISHINGROD,
      target: {
        row: 7,
        col: 1
      }
    },
  ],
}

export const P6: HWMapTile = {
  coords: {row: 5, col: 15},
  challenge: "Adventure Battle: Fight as a warrior of light! Lv.1",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Grand Travels) - King Daphnes",
      "S.S. Linebeck Item Card",
    ],
    treasure: [
      "Fairy Bottom - Captain's Trousers (East Keep)",
      "Fairy Food - Mushroom Spores (Eastern Room [Pot])",
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
      item: Items.CANNON,
      target: {
        row: 4,
        col: 2
      }
    },
  ],
}

export const P7: HWMapTile = {
  coords: {row: 6, col: 15},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.12",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: ["Cannon Item Card"],
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
      item: Items.CYCLONESLATE,
      target: {
        row: 6,
        col: 7
      }
    },
  ],
}

export const P8: HWMapTile = {
  coords: {row: 7, col: 15},
  challenge: "Adventure Battle: Stop the Rogue Forces and defeat the enemy! Lv.4",
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
}
