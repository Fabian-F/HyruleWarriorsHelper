import { Blockade, Difficulty } from "src/app/enums"
import { HWMapTile } from "src/app/models"
import { Items } from "../../items.data"

export const A1: HWMapTile = {
  coords: {row: 0, col: 0},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the cavern!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Trident Lv.2 - Ganondorf",
    clear: ["Boomerang Item Card"],
    treasure: [
      "Heart Container - Ganondorf (Dragon Roost)",
      "My Fairy - Darkness (Jail Watch Keep [Pot])",
      "Fairy Food - Elixir Soup (Star Island Keep [Pot])",
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
      item: Items.HYOIPEAR,
      target: {
        row: 2,
        col: 4
      }
    },
  ],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const A2: HWMapTile = {
  coords: {row: 1, col: 0},
  challenge: "",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Volga's Dragon Spear Material",
    clear: ["Hammer Item Card"],
    treasure: undefined
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
      item: Items.BOOMERANG,
      target: {
        row: 4,
        col: 12
      }
    },
  ],
}

export const A3: HWMapTile = {
  coords: {row: 2, col: 0},
  challenge: "Adventure Battle: Strengthen your army and defeat the enemy! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Great Fairy Lv.2 - Link",
    clear: ["Boomerang Item Card"],
    treasure: [
      "Heart Container - Link (E. Boulder Keep)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 5,
        col: 13
      }
    },
  ],
}

export const A4: HWMapTile = {
  coords: {row: 3, col: 0},
  challenge: "Adventure Battle: Hustle in the east and bustle in the west!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Mirror Lv.2 - Twili Midna",
    clear: ["Hyoi Pear Item Card"],
    treasure: [
      "Heart Container - Twili Midna (South Mine Keep)",
      "Gold Skulltula x2",
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
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 4,
        col: 1
      }
    },
  ],
}

export const A5: HWMapTile = {
  coords: {row: 4, col: 0},
  challenge: "Adventure Battle: Pierce through enemy defenses!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Spinner Lv.2 - Link",
    clear: ["Cannon Item Card"],
    treasure: [
      "Fairy Decoration - Island Aura (Hilltop Keep)",
      "Fairy Food - Hyoi Pear (South Field Keep [Pot])",
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
      item: Items.DEKULEAF,
      target: {
        row: 9,
        col: 10
      }
    },
  ],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const A6: HWMapTile = {
  coords: {row: 5, col: 0},
  challenge: "",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "King Daphnes's Crown Material",
    clear: undefined,
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
      item: Items.HEROSBOW,
      target: {
        row: 9,
        col: 13
      }
    },
  ],
}

export const A7: HWMapTile = {
  coords: {row: 6, col: 0},
  challenge: "Adventure Battle: Strengthen your army and defeat the enemy! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Horse Lv.2 - Link",
    clear: ["Wind Waker Item Card"],
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
      item: Items.HYOIPEAR,
      target: {
        row: 3,
        col: 1
      }
    },
  ],
}

export const B1: HWMapTile = {
  coords: {row: 0, col: 1},
  challenge: "Adventure Battle: Final battle! Defeat the bird of the fortress!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Hammer Item Card"],
    treasure: [
      "Heart Container - King Daphnes (Fairy Fountain)",
      "Piece of Heart - King Daphnes (Castle Keep)",
      "Fairy Headwear - Phantom Horns (Abandoned Fort)",
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
      item: Items.HYOIPEAR,
      target: {
        row: 2,
        col: 12
      }
    },
  ],
}

export const B2: HWMapTile = {
  coords: {row: 1, col: 1},
  challenge: "",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Ruto's Scale Material",
    clear: undefined,
    treasure: undefined
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
      item: Items.CANNON,
      target: {
        row: 3,
        col: 8
      }
    },
  ],
}

export const B3: HWMapTile = {
  coords: {row: 2, col: 1},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.5",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Hero's Bow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [],
}

export const B4: HWMapTile = {
  coords: {row: 3, col: 1},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Deku Leaf Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.WEST],
  search: [],
}

export const B5: HWMapTile = {
  coords: {row: 4, col: 1},
  challenge: "",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Island Outfit Material",
    clear: undefined,
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
      item: Items.HEROSBOW,
      target: {
        row: 9,
        col: 13
      }
    },
  ],
}

export const B6: HWMapTile = {
  coords: {row: 5, col: 1},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.5",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Great Swords Lv.2 - Ganondorf",
    clear: ["Salvage Arm Item Card"],
    treasure: [
      "Heart Container - Ganondorf (Lower Level East)",
      "My Fairy - Lightning (North Palace [Pot])",
      "Fairy Food - All-Purpose Bait (North Palace [Pot])",
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
      item: Items.DEKULEAF,
      target: {
        row: 5,
        col: 14
      }
    },
  ],
}

export const B7: HWMapTile = {
  coords: {row: 6, col: 1},
  challenge: "Challenge Battle: Fight through the travel memories quiz! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Agitha",
      "Hero's Bow Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 8,
        col: 1
      }
    },
  ],
}

export const C1: HWMapTile = {
  coords: {row: 0, col: 2},
  challenge: "",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Majora's Mask Material",
    clear: undefined,
    treasure: undefined
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
      item: Items.HEROSBOW,
      target: {
        row: 2,
        col: 3
      }
    },
  ],
}

export const C2: HWMapTile = {
  coords: {row: 1, col: 2},
  challenge: "Adventure Battle: Defeat the barrier specialist forces! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Gauntlets Lv.2 - Link",
    clear: ["Wind Waker Item Card"],
    treasure: [
      "Piece of Heart - Link (West Keep)",
      "Fairy Top - Wind Robe (W. Boulder Keep)",
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
      item: Items.SALVAGEARM,
      target: {
        row: 9,
        col: 14
      }
    },
  ],
}

export const C3: HWMapTile = {
  coords: {row: 2, col: 2},
  challenge: "Challenge Battle: Win the KO competition! Lv.6",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Zant",
      "Compass Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 7,
        col: 1
      }
    },
  ],
}

export const C4: HWMapTile = {
  coords: {row: 3, col: 2},
  challenge: "Challenge Battle: Defeat 500 enemies in time! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Salvage Arm Item Card"],
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

export const C5: HWMapTile = {
  coords: {row: 4, col: 2},
  challenge: "Challenge Battle: Fight through the Majora's Mask quiz!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Tingle",
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

export const C6: HWMapTile = {
  coords: {row: 5, col: 2},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.6",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Linkle",
      "Deku Leaf Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 14
      }
    },
  ],
}

export const C7: HWMapTile = {
  coords: {row: 6, col: 2},
  challenge: "Adventure Battle: Best the secretive enemies!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Dominion Rod Lv.2 - Zelda",
    clear: ["Sea Chart Item Card"],
    treasure: [
      "Heart Container - Zelda (North Field Keep)",
      "Fairy Top - Island Dress (East Field Keep)",
      "Fairy Food - Elixir Soup (West Field Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 8,
        col: 13
      }
    },
  ],
}

export const D1: HWMapTile = {
  coords: {row: 0, col: 3},
  challenge: "Adventure Battle: Defeat the allied keeps! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Summoning Gate Lv.2 - Lana",
    clear: ["Power Bracelet Item Card"],
    treasure: [
      "Heart Container - Lana (NW Sage Keep)",
      "Gold Skulltula x2",
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
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 3,
        col: 6
      }
    },
  ],
}

export const D2: HWMapTile = {
  coords: {row: 1, col: 3},
  challenge: "Adventure Battle: Defeat the barrier specialist forces! Lv.4",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Goddess Blade Lv.2 - Fi",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Heart Container - Fi (North Oasis)",
      "My Fairy - Light (S. Desert Keep [Pot])",
      "Fairy Food - Carrot (Enemy Base [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.WEST],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 3,
        col: 2
      }
    },
    {
      item: Items.POWERBRACELET_2,
      target: {
        row: 8,
        col: 9
      }
    },
  ],
}

export const D3: HWMapTile = {
  coords: {row: 2, col: 3},
  challenge: "",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Lana's Cloak Material",
    clear: undefined,
    treasure: undefined
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
        row: 7,
        col: 2
      }
    },
  ],
}

export const D4: HWMapTile = {
  coords: {row: 3, col: 3},
  challenge: "Adventure Battle: Fight your way through fire and flames!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Zora Scale Lv.2 - Ruto",
    clear: ["Hero's Bow Item Card"],
    treasure: [
      "Heart Container - Ruto (E. Mountain Keep)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 2,
        col: 12
      }
    },
  ],
}

export const D5: HWMapTile = {
  coords: {row: 4, col: 3},
  challenge: "Challenge Battle: Win the KO competition! Lv.7",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Wizzro",
      "Cannon Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 1
      }
    },
  ],
}

export const D6: HWMapTile = {
  coords: {row: 5, col: 3},
  challenge: "",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: undefined,
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
      item: Items.BOOMERANG,
      target: {
        row: 3,
        col: 8
      }
    },
    {
      item: Items.HAMMER,
      target: {
        row: 9,
        col: 9
      }
    },
  ],
}

export const D7: HWMapTile = {
  coords: {row: 6, col: 3},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Toon Link",
      "Boomerang Item Card",
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
      item: Items.HAMMER,
      target: {
        row: 8,
        col: 4
      }
    },
    {
      item: Items.HYOIPEAR,
      target: {
        row: 3,
        col: 14
      }
    },
  ],
}

export const E1: HWMapTile = {
  coords: {row: 0, col: 4},
  challenge: "",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Tetra's Bandana Material",
    clear: ["Power Bracelet Item Card"],
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
      item: Items.CANNON,
      target: {
        row: 7,
        col: 3
      }
    },
  ],
}

export const E2: HWMapTile = {
  coords: {row: 1, col: 4},
  challenge: "Adventure Battle: Strengthen your army and defeat the enemy! Lv.5",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Balloon Lv.2 - Tingle",
    clear: ["Wind Waker Item Card"],
    treasure: [
      "Heart Container - Tingle (Hall of Time)",
      "Gold Skulltula x2",
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
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 3
      }
    },
  ],
}

export const E3: HWMapTile = {
  coords: {row: 2, col: 4},
  challenge: "",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Tingle's Watch Material",
    clear: ["Cannon Item Card"],
    treasure: undefined
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
      item: Items.BOOMERANG,
      target: {
        row: 0,
        col: 3
      }
    },
  ],
}

export const E4: HWMapTile = {
  coords: {row: 3, col: 4},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.4",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Hyoi Pear Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [],
  search: [],
}

export const E5: HWMapTile = {
  coords: {row: 4, col: 4},
  challenge: "Adventure Battle: Be courageous and protect your keeps!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Piece of Heart - King Daphnes (Crystal Cave)",
      "Fairy Decoration - Farore's Aura (Stone Square)",
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

export const E6: HWMapTile = {
  coords: {row: 5, col: 4},
  challenge: "Challenge Battle: Defeat 500 enemies in time! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Darunia",
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
  ],
  search: [],
}

export const E7: HWMapTile = {
  coords: {row: 6, col: 4},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the ruins!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Power Bracelet Item Card"],
    treasure: [
      "Piece of Heart - King Daphnes (Rock Keep)",
      "Fairy Decoration - Island Aura (SE Sage Keep)",
    ]
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

export const F1: HWMapTile = {
  coords: {row: 0, col: 5},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.7",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Boomerang Item Card"],
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
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const F2: HWMapTile = {
  coords: {row: 1, col: 5},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.5",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Midna",
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
    Blockade.EAST
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 3,
        col: 13
      }
    },
  ],
}

export const F3: HWMapTile = {
  coords: {row: 2, col: 5},
  challenge: "Challenge Battle: Rack up your KO count! Lv.4",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [],
  search: [
    {
      item: Items.POWERBRACELET_2,
      target: {
        row: 9,
        col: 13
      }
    },
  ],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const F4: HWMapTile = {
  coords: {row: 3, col: 5},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.4",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Ocarina Lv.2 - Skull Kid",
    clear: undefined,
    treasure: [
      "Heart Container - Skull Kid (W. Boulder Keep)",
      "Gold Skulltula x2",
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
      item: Items.SALVAGEARM,
      target: {
        row: 2,
        col: 14
      }
    },
  ],
}

export const F5: HWMapTile = {
  coords: {row: 4, col: 5},
  challenge: "Challenge Battle: Rack up your KO count! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Darunia",
      "Salvage Arm Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 8,
        col: 11
      }
    },
  ],
}

export const F6: HWMapTile = {
  coords: {row: 5, col: 5},
  challenge: "Challenge Battle: Defeat all enemies! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Deku Leaf Item Card"],
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

export const F7: HWMapTile = {
  coords: {row: 6, col: 5},
  challenge: "Adventure Battle: Battle alongside your...twin?",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Ring Lv.2 - Wizzro",
    clear: ["Hyoi Pear Item Card"],
    treasure: [
      "Heart Container - Wizzro (Lakeside Keep)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 9,
        col: 13
      }
    },
  ],
}

export const G1: HWMapTile = {
  coords: {row: 0, col: 6},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the temple!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Dragon Spear Lv.2 - Volga",
    clear: ["Hookshot Item Card"],
    treasure: [
      "Heart Container - Volga (South Mine Keep)",
      "Fairy Decoration - Swirly Cheeks (NE Sage Keep)",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 5,
        col: 14
      }
    },
    {
      item: Items.POWERBRACELET_2,
      target: {
        row: 5,
        col: 2
      }
    },
  ],
}

export const G2: HWMapTile = {
  coords: {row: 1, col: 6},
  challenge: "Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Fi",
      "Salvage Arm Item Card",
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
    Blockade.SOUTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 7,
        col: 14
      }
    },
  ],
}

export const G3: HWMapTile = {
  coords: {row: 2, col: 6},
  challenge: "",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Midna's Fused Shadow Material",
    clear: undefined,
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
  ],
  search: [
    {
      item: Items.BOOMERANG,
      target: {
        row: 5,
        col: 14
      }
    },
  ],
}

export const G4: HWMapTile = {
  coords: {row: 3, col: 6},
  challenge: "Challenge Battle: Win the KO competition! Lv.8",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Hyoi Pear Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: 199,
  },
  blockades: [
    Blockade.WEST,
    Blockade.EAST
  ],
  search: [],
}

export const G5: HWMapTile = {
  coords: {row: 4, col: 6},
  challenge: "",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Twili Midna's Robe Material",
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
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 9,
        col: 14
      }
    },
  ],
}

export const G6: HWMapTile = {
  coords: {row: 5, col: 6},
  challenge: "Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.7",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Fi",
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
  ],
  search: [
    {
      item: Items.SEACHART,
      target: {
        row: 8,
        col: 13
      }
    },
  ],
}

export const G7: HWMapTile = {
  coords: {row: 6, col: 6},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.3",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Scimitars Lv.2 - Zant",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Heart Container - Zant (North Field Keep)",
      "Fairy Top - Wind Robe (Fairy Fountain)",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.WEST
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 1,
        col: 14
      }
    },
  ],
}

export const H1: HWMapTile = {
  coords: {row: 0, col: 7},
  challenge: "Challenge Battle: Defeat 300 enemies in time! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: [
      "Masked (Great Sea) - Cia",
      "Unmasked (Great Sea) - Cia",
      "Hatless (Great Sea) - Cia",
      "Hyoi Pear Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 14
      }
    },
  ],
}

export const H2: HWMapTile = {
  coords: {row: 1, col: 7},
  challenge: "Challenge Battle: Win the KO Competition! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: ["Medli"],
    treasure: undefined
  },
  requirements: {
    kills: 1000,
    minutes: undefined,
    damage: 99,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [],
}

export const H3: HWMapTile = {
  coords: {row: 2, col: 7},
  challenge: "Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - King Daphnes",
      "Hookshot Item Card",
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
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 2,
        col: 4
      }
    },
  ],
}

export const H4: HWMapTile = {
  coords: {row: 3, col: 7},
  challenge: "Adventure Battle: Final Battle! Defeat the shadow of the sky!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: undefined,
    treasure: [
      "Piece of Heart - Linkle (Rock Keep)",
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
    Blockade.WEST
  ],
  search: [],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const H5: HWMapTile = {
  coords: {row: 4, col: 7},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the tower!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: undefined,
    treasure: [
      "Piece of Heart - King Daphnes (N. Entrance Keep)",
      "Gold Skulltula x2",
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
      item: Items.HOOKSHOT,
      target: {
        row: 3,
        col: 10
      }
    },
  ],
}

export const H6: HWMapTile = {
  coords: {row: 5, col: 7},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.3",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Demon Blade Lv.2 - Ghirahim",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Heart Container - Ghirahim (West Temple)",
      "Fairy Decoration - Treasure Aura (East Keep)",
      "Fairy Food - Carrot (Eastern Room [Pot])",
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
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 9,
        col: 9
      }
    },
  ],
}

export const H7: HWMapTile = {
  coords: {row: 6, col: 7},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.3",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Hyoi Pear Item Card"],
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

export const I1: HWMapTile = {
  coords: {row: 0, col: 8},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Compass Item Card"],
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

export const I2: HWMapTile = {
  coords: {row: 1, col: 8},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: ["Toon Link"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 99,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [],
}

export const I3: HWMapTile = {
  coords: {row: 2, col: 8},
  challenge: "Adventure Battle: Final battle! Defeat the Demon King of the castle!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: [
      "Heart Container - King Daphnes (South Field Keep)",
      "Piece of Heart - King Daphnes (Central Keep)",
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
    Blockade.SOUTH
  ],
  search: [],
}

export const I4: HWMapTile = {
  coords: {row: 3, col: 8},
  challenge: "Adventure Battle: Have a showdown between hero and imp!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Mask Lv.2 - Young Link",
    clear: undefined,
    treasure: [
      "Heart Container - Young Link (S. Entrance Keep)",
      "Gold Skulltula x2",
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
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 8,
        col: 1
      }
    },
    {
      item: Items.SEACHART,
      target: {
        row: 3,
        col: 14
      }
    },
  ],
}

export const I5: HWMapTile = {
  coords: {row: 4, col: 8},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.8",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Ganondorf",
      "Salvage Arm Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.HOOKSHOT,
      target: {
        row: 1,
        col: 6
      }
    },
    {
      item: Items.HYOIPEAR,
      target: {
        row: 6,
        col: 14
      }
    },
  ],
}

export const I6: HWMapTile = {
  coords: {row: 5, col: 8},
  challenge: "Challenge Battle: Defeat 400 enemies in time! Lv.4",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Salvage Arm Item Card"],
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

export const I7: HWMapTile = {
  coords: {row: 6, col: 8},
  challenge: "Challenge Battle: Fight through the Wind Waker quiz!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Young Link",
      "Compass Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 99,
  },
  blockades: [],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 9,
        col: 8
      }
    },
  ],
}

export const J1: HWMapTile = {
  coords: {row: 0, col: 9},
  challenge: "Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.2",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Impa",
      "Hyoi Pear Item Card",
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
      item: Items.HYOIPEAR,
      target: {
        row: 2,
        col: 2
      }
    },
  ],
}

export const J2: HWMapTile = {
  coords: {row: 1, col: 9},
  challenge: "Challenge Battle: Rack up your KO count! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Hyoi Pear Item Card"],
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

export const J3: HWMapTile = {
  coords: {row: 2, col: 9},
  challenge: "Challenge Battle: Fight through the item master quiz!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Tingle",
      "Hero's Bow Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.SOUTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 2,
        col: 13
      }
    },
  ],
}

export const J4: HWMapTile = {
  coords: {row: 3, col: 9},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Shackle Lv.2 - Midna",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Heart Container - Midna (West Temple)",
      "My Fairy - Water (Ruins Summit [Pot])",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 4,
        col: 13
      }
    },
  ],
}

export const J5: HWMapTile = {
  coords: {row: 4, col: 9},
  challenge: "Adventure Battle: Defeat the barrier specialist forces! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Hammer Lv.2 - Darunia",
    clear: ["Salvage Arm Item Card"],
    treasure: [
      "Heart Container - Darunia (Mountain Keep)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 5,
        col: 14
      }
    },
  ],
}

export const J6: HWMapTile = {
  coords: {row: 5, col: 9},
  challenge: "Challenge Battle: Defeat all enemies! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Lana",
      "Hero's Bow Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 14
      }
    },
  ],
}

export const J7: HWMapTile = {
  coords: {row: 6, col: 9},
  challenge: "Challenge Battle: Win the KO competition! Lv.5",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Wind Waker Item Card"],
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

export const K1: HWMapTile = {
  coords: {row: 0, col: 10},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Parasol Lv.2 - Agitha",
    clear: ["Salvage Arm Item Card"],
    treasure: [
      "Heart Container - Agitha (School of Joy)",
      "Gold Skulltula x2",
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
      item: Items.HYOIPEAR,
      target: {
        row: 2,
        col: 14
      }
    },
  ],
}

export const K2: HWMapTile = {
  coords: {row: 1, col: 10},
  challenge: "Challenge Battle: Defeat all enemies! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Great Sea) - Tetra"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 2
      }
    },
  ],
}

export const K3: HWMapTile = {
  coords: {row: 2, col: 10},
  challenge: "",
  difficulty: Difficulty.COLORLESS,
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
  blockades: [
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.HEROSBOW,
      target: {
        row: 2,
        col: 3
      }
    },
    {
      item: Items.SEACHART,
      target: {
        row: 10,
        col: 14
      }
    },
  ],
}

export const K4: HWMapTile = {
  coords: {row: 3, col: 10},
  challenge: "Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.5",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Ruto",
      "Cannon Item Card",
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
  ],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 6,
        col: 13
      }
    },
  ],
}

export const K5: HWMapTile = {
  coords: {row: 4, col: 10},
  challenge: "Challenge Battle: Defeat 400 enemies in time! Lv.3",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Great Sea) - Sheik"],
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
      item: Items.DEKULEAF,
      target: {
        row: 8,
        col: 12
      }
    },
  ],
}

export const K6: HWMapTile = {
  coords: {row: 5, col: 10},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the forest!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Piece of Heart - King Daphnes",
    clear: ["Sea Chart Item Card"],
    treasure: [
      "Heart Container - King Daphnes (North Square)",
      "Fairy Headwear - Korok Mask (Southeast Tree)",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [],
}

export const K7: HWMapTile = {
  coords: {row: 6, col: 10},
  challenge: "",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: undefined,
    treasure: undefined
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
      item: Items.HEROSBOW,
      target: {
        row: 1,
        col: 15
      }
    },
  ],
}

export const L1: HWMapTile = {
  coords: {row: 0, col: 11},
  challenge: "Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.3",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: [
      "Hero's Clothes (Great Sea) - Link",
      "Hyoi Pear Item Card",
    ],
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
      item: Items.SALVAGEARM,
      target: {
        row: 9,
        col: 11
      }
    },
  ],
}

export const L2: HWMapTile = {
  coords: {row: 1, col: 11},
  challenge: "Challenge Battle: Win the KO competition! Lv.2",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Volga",
      "Hyoi Pear Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1000,
    minutes: undefined,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 1,
        col: 9
      }
    },
  ],
}

export const L3: HWMapTile = {
  coords: {row: 2, col: 11},
  challenge: "Challenge Battle: Defeat 300 enemies in time! Lv.2",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Compass Item Card"],
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
  search: [],
}

export const L4: HWMapTile = {
  coords: {row: 3, col: 11},
  challenge: "Challenge Battle: Fight through the travel memories quiz! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Hyoi Pear Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [],
}

export const L5: HWMapTile = {
  coords: {row: 4, col: 11},
  challenge: "Adventure Battle: Strengthen your army and defeat the enemy! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Piece of Heart - King Daphnes",
    clear: ["Salvage Arm Item Card"],
    treasure: [
      "Heart Container - King Daphnes (South Square)",
      "Fairy Decoration - Wind Aura (Tunnel Square)",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [],
}

export const L6: HWMapTile = {
  coords: {row: 5, col: 11},
  challenge: "Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.6",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Deku Leaf Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST
  ],
  search: [],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const L7: HWMapTile = {
  coords: {row: 6, col: 11},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Volga",
    clear: ["Deku Leaf Item Card"],
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

export const M1: HWMapTile = {
  coords: {row: 0, col: 12},
  challenge: "Challenge Battle: Win the KO competition! Lv.3",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Robes (Great Sea) - Zelda",
      "Salvage Arm Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1000,
    minutes: undefined,
    damage: 99,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 6,
        col: 14
      }
    },
  ],
}

export const M2: HWMapTile = {
  coords: {row: 1, col: 12},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the volcano!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Baton Lv.2 - Zelda",
    clear: ["Wind Waker Item Card"],
    treasure: [
      "Heart Container - Zelda (Stock Room)",
      "Fairy Headwear - Rito Mask (South Square)",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 4,
        col: 11
      }
    },
  ],
}

export const M3: HWMapTile = {
  coords: {row: 2, col: 12},
  challenge: "Challenge Battle: Rack up your KO count! Lv.2",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: ["King Daphnes"],
    treasure: undefined
  },
  requirements: {
    kills: 1000,
    minutes: undefined,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 9,
        col: 0
      }
    },
  ],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const M4: HWMapTile = {
  coords: {row: 3, col: 12},
  challenge: "Challenge Battle: Defeat 400 enemies in time! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Piece of Heart - Linkle",
    clear: ["Deku Leaf Item Card"],
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

export const M5: HWMapTile = {
  coords: {row: 4, col: 12},
  challenge: "Challenge Battle: Win the KO competition! Lv.4",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Hyoi Pear Item Card"],
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

export const M6: HWMapTile = {
  coords: {row: 5, col: 12},
  challenge: "",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Wind Waker Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.WEST,
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

export const M7: HWMapTile = {
  coords: {row: 6, col: 12},
  challenge: "Challenge Battle: Defeat 400 enemies in time! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Skull Kid",
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
      item: Items.HYOIPEAR,
      target: {
        row: 1,
        col: 9
      }
    },
  ],
}

export const N1: HWMapTile = {
  coords: {row: 0, col: 13},
  challenge: "Adventure Battle: Defeat the enemy celebrities!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Spear Lv.2 - Lana",
    clear: ["Hyoi Pear Item Card"],
    treasure: [
      "Piece of Heart - Lana (West Square)",
      "Gold Skulltula x2",
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
      item: Items.SALVAGEARM,
      target: {
        row: 8,
        col: 1
      }
    },
  ],
}

export const N2: HWMapTile = {
  coords: {row: 1, col: 13},
  challenge: "Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.4",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Ghirahim",
      "Hyoi Pear Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 4,
        col: 13
      }
    },
  ],
}

export const N3: HWMapTile = {
  coords: {row: 2, col: 13},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Light Sword Lv.2 - Toon Link",
    clear: ["Salvage Arm Item Card"],
    treasure: [
      "Heart Container - Toon Link (Fairy Fountain)",
      "Fairy Decoration - Pirate Aura (North Field Keep)",
      "Fairy Food - All-Purpose Bait (Fairy Fountain [Pot])",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 2,
        col: 2
      }
    },
  ],
}

export const N4: HWMapTile = {
  coords: {row: 3, col: 13},
  challenge: "Adventure Battle: Don't leave your troops hanging!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Scepter Lv.2 - Cia",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Heart Container - Cia (Glutton's Keep)",
      "Gold Skulltula x2",
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
      item: Items.DEKULEAF,
      target: {
        row: 8,
        col: 3
      }
    },
  ],
}

export const N5: HWMapTile = {
  coords: {row: 4, col: 13},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Great Sea) - Twili Midna",
      "Compass Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 99,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 1,
        col: 13
      }
    },
  ],
}

export const N6: HWMapTile = {
  coords: {row: 5, col: 13},
  challenge: "Adventure Battle: Trust in your troops' resilience!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Magic Rod Lv.2 - Link",
    clear: ["Salvage Arm Item Card"],
    treasure: [
      "My Fairy - Fire (Fairy Fountain [Pot])",
      "Fairy Food - Hyoi Pear (West Temple [Pot])",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 9,
        col: 14
      }
    },
  ],
}

export const N7: HWMapTile = {
  coords: {row: 6, col: 13},
  challenge: "Adventure Battle: Defend the allied keeps! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Naginata Lv.2 - Impa",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Heart Container - Impa (Glutton's Keep)",
      "Gold Skulltula x2",
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
      item: Items.SALVAGEARM,
      target: {
        row: 9,
        col: 14
      }
    },
  ],
}
