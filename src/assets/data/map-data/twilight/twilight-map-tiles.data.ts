import { Blockade, Difficulty } from "src/assets/data/enums"
import { HWMapTile, Tile } from "src/app/models"
import { Items } from "../../items.data"

export const A1: Tile = {
  coords: {row: 0, col: 0}
}

export const A2: HWMapTile = {
  coords: {row: 1, col: 0},
  challenge: "Adventure Battle: Fight as a warrior of light! Lv.1",
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
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 5,
        col: 12
      }
    },
  ],
}

export const A3: HWMapTile = {
  coords: {row: 2, col: 0},
  challenge: "Challenge Battle: Team up and defeat enemy forces! Lv.8",
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
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 4,
        col: 4
      }
    },
  ],
}

export const A4: HWMapTile = {
  coords: {row: 3, col: 0},
  challenge: "Adventure Battle: Defeat the Wizard Forces!",
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
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 6,
        col: 8
      }
    },
  ],
}

export const A5: HWMapTile = {
  coords: {row: 4, col: 0},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.8",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Magic Rod Lv.4 - Link",
    clear: ["Digging Mitts Item Card"],
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
      item: Items.JAR,
      target: {
        row: 8,
        col: 9
      }
    },
  ],
}

export const A6: HWMapTile = {
  coords: {row: 5, col: 0},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.5",
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
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 6,
        col: 9
      }
    },
  ],
}

export const A7: Tile = {
  coords: {row: 6, col: 0}
}

export const A8: Tile = {
  coords: {row: 7, col: 0}
}

export const B1: Tile = {
  coords: {row: 0, col: 1}
}

export const B2: HWMapTile = {
  coords: {row: 1, col: 1},
  challenge: "Adventure Battle: Watch for traps on the battlefield!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Twilight) - Midna"],
    treasure: [
      "Heart Container - Midna (North Field Keep)",
      "Fairy Headwear - Butterfly Headband (East Field Keep)",
      "Fairy Food - Hylian Pike (South Field Keep [Pot])",
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
      item: Items.DIGGINGMITTS,
      target: {
        row: 4,
        col: 10
      }
    },
  ],
}

export const B3: HWMapTile = {
  coords: {row: 2, col: 1},
  challenge: "Adventure Battle: Defeat the Barrier Specialist Forces! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Hylian Sword Lv.4 - Link",
    clear: undefined,
    treasure: [
      "Heart Container - Link (East Garden)",
      "Fairy Top - Hero's Clothes (Northeast Keep)",
      "Fairy Food - Hyrule Bass (West Garden [Pot])",
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
      item: Items.BOMB,
      target: {
        row: 5,
        col: 5
      }
    },
    {
      item: Items.LANTERN,
      target: {
        row: 0,
        col: 7
      }
    },
  ],
}

export const B4: HWMapTile = {
  coords: {row: 3, col: 1},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.6",
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
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 7,
        col: 8
      }
    },
  ],
}

export const B5: HWMapTile = {
  coords: {row: 4, col: 1},
  challenge: "Challenge Battle: Protect the bombchu! Lv.8",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Era of Twilight Robes - Zelda",
      "Ooccoo Item Card",
    ],
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
      item: Items.WATERBOMB,
      target: {
        row: 5,
        col: 5
      }
    },
  ],
}

export const B6: HWMapTile = {
  coords: {row: 5, col: 1},
  challenge: "Adventure Battle: Defeat the Disorderly Forces! Lv.6",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Masked (Twilight) - Cia",
      "Unmasked (Twilight) - Cia",
      "Hatless (Twilight) - Cia",
    ],
    treasure: [
      "Heart Container - Impa (South Garden)",
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
  ],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 9,
        col: 3
      }
    },
  ],
}

export const B7: HWMapTile = {
  coords: {row: 6, col: 1},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.9",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: [
      "Jar Item Card",
      "Tears of Light Item Card",
    ],
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

export const B8: Tile = {
  coords: {row: 7, col: 1}
}

export const C1: HWMapTile = {
  coords: {row: 0, col: 2},
  challenge: "Adventure Battle: Use a Magic Circle to defeat the enemy forces! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Scimitars Lv.4 - Zant",
    clear: undefined,
    treasure: [
      "Heart Container - Zant (West Keep)",
      "Fairy Food - Hylian Pike (Southwest Keep [Jar])",
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
      item: Items.SPINNER,
      target: {
        row: 4,
        col: 12
      }
    },
  ],
}

export const C2: HWMapTile = {
  coords: {row: 1, col: 2},
  challenge: "Adventure Battle: Defeat the Darknut Forces!",
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
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 3,
        col: 10
      }
    },
  ],
}

export const C3: HWMapTile = {
  coords: {row: 2, col: 2},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.6",
  additionalRule: "Twilight Rule: No Focus Spirit!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
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
  search: [
    {
      item: Items.JAR,
      target: {
        row: 9,
        col: 3
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const C4: HWMapTile = {
  coords: {row: 3, col: 2},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.6",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: [
      "Tears of Light Item Card",
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
    Blockade.NORTH,
  ],
  search: [],
}

export const C5: HWMapTile = {
  coords: {row: 4, col: 2},
  challenge: "Adventure Battle: A collision of cuccos! Lv.6",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Spear Lv.4 - Lana",
    clear: undefined,
    treasure: [
      "Heart Container - Lana (Northwest Keep)",
      "Fairy Food - Bee Larvae (Northeast Keep [Pot])",
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
      item: Items.DIGGINGMITTS,
      target: {
        row: 7,
        col: 5
      }
    },
  ],
}

export const C6: HWMapTile = {
  coords: {row: 5, col: 2},
  challenge: "Adventure Battle: Protect the bombchu! Lv.9",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Hero's Clothes (Twilight) - Link",
      "Fishing Rod Item Card",
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
      item: Items.SPINNER,
      target: {
        row: 6,
        col: 10
      }
    },
  ],
}

export const C7: HWMapTile = {
  coords: {row: 6, col: 2},
  challenge: "Adventure Battle:The hunters are on the move!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Cia",
    clear: undefined,
    treasure: [
      "My Fairy - Darkness (South Field Keep [Pot])",
      "Fairy Food - Skullfish (Rocky Square [Pot])",
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
      item: Items.LANTERN,
      target: {
        row: 4,
        col: 5
      }
    },
  ],
}

export const C8: HWMapTile = {
  coords: {row: 7, col: 2},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.9",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Tears of Light Item Card"],
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
      item: Items.CLAWSHOT,
      target: {
        row: 7,
        col: 14
      }
    },
  ],
}


export const D1: HWMapTile = {
  coords: {row: 0, col: 3},
  challenge: "Challenge Battle: Rack up your KO count! Lv.3",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Tears of Light Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 7,
        col: 13
      }
    },
  ],
}

export const D2: HWMapTile = {
  coords: {row: 1, col: 3},
  challenge: "Adventure Battle: Defeat the Disorderly Forces! Lv.5",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Twilight) - Volga"],
    treasure: [
      "Heart Container - Volga (Town Center Keep)",
      "Fairy Food - Skullfish (Northmost Keep [Pot])",
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
      item: Items.SPINNER,
      target: {
        row: 4,
        col: 13
      }
    },
  ],
}

export const D3: HWMapTile = {
  coords: {row: 2, col: 3},
  challenge: "Adventure Battle: Protect the bombchu! Lv.6",
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
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 5,
        col: 14
      }
    },
  ],
}

export const D4: HWMapTile = {
  coords: {row: 3, col: 3},
  challenge: "Adventure Battle: Defeat the commanders of two armies! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Cutlass Lv.4 - Tetra",
    clear: ["Spinner Item Card"],
    treasure: [
      "Heart Container - Tetra (East Field Keep)",
      "Fairy Top - Twilight Top (North Field Keep)",
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
      item: Items.DIGGINGMITTS,
      target: {
        row: 5,
        col: 14
      }
    },
  ],
}

export const D5: HWMapTile = {
  coords: {row: 4, col: 3},
  challenge: "Adventure Battle: Rescue the allied forces!",
  additionalRule: "Twilight Rule: No Item Attacks!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Shackle Lv.4 - Midna",
    clear: undefined,
    treasure: [
      "Heart Container - Midna (S. Entrance Keep)",
      "Fairy Bottom - Butterfly Skirt (South Square)",
      "Fairy Food - Greengill (N. Entrance Keep [Pot])",
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
      item: Items.DIGGINGMITTS,
      target: {
        row: 3,
        col: 9
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const D6: HWMapTile = {
  coords: {row: 5, col: 3},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.9",
  additionalRule: "Twilight Rule: No Item Attacks!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Tears of Light Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH,
  ],
  search: [],
}

export const D7: HWMapTile = {
  coords: {row: 6, col: 3},
  challenge: "Adventure Battle: Destroy enemies and traitors alike!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Twilight) - Ganondorf"],
    treasure: [
      "Heart Container - Cia (E. Mountain Keep)",
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
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 7,
        col: 4
      }
    },
    {
      item: Items.LANTERN,
      target: {
        row: 3,
        col: 7
      }
    },
  ],
}

export const D8: HWMapTile = {
  coords: {row: 7, col: 3},
  challenge: "Adventure Battle: Defeat the warriors of twilight!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Great Swords Lv.4 - Ganondorf",
    clear: ["Standard Outfit (Twilight) - Ganondorf"],
    treasure: [
      "Heart Container - Ganondorf (King's Hall)",
      "Fairy Decoration - Goron Facepaint (Lower Level East)",
      "Fairy Food - Reekfish (King's Hall [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST
  ],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 5,
        col: 7
      }
    },
  ],
}

export const E1: HWMapTile = {
  coords: {row: 0, col: 4},
  challenge: "Adventure Battle: Defeat the beast of the ruins!",
  additionalRule: "Twilight Rule: No Item Attacks!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Twilight) - Ghirahim"],
    treasure: [
      "Heart Container - Ghirahim (S. Rockface Keep)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 5,
        col: 0
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const E2: HWMapTile = {
  coords: {row: 1, col: 4},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Jar Item Card"],
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
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 8,
        col: 1
      }
    },
  ],
}

export const E3: HWMapTile = {
  coords: {row: 2, col: 4},
  challenge: "Adventure Battle: Defeat the commanders of two armies! Lv.1",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: [
      "Tears of Light Item Card",
      "Fishing Rod Item Card",
    ],
    treasure: [
      "Fairy Top - Hero's Clothes (N. Rockface Keep)",
      "Fairy Food - Ordon Goat Cheese (Fairy Fountain [Pot])",
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
  search: [],
}

export const E4: HWMapTile = {
  coords: {row: 3, col: 4},
  challenge: "Adventure Battle: Fight as a warrior of water or lightning!",
  additionalRule: "Twilight Rule: No Special Attacks!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Spinner Lv.4 - Link",
    clear: ["Bomb Item Card"],
    treasure: [
      "Heart Container - Link (West Keep)",
      "Fairy Headwear - Fused Shadow Mask (West Ruins)",
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
  ],
  search: [
    {
      item: Items.SPINNER,
      target: {
        row: 8,
        col: 15
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const E5: HWMapTile = {
  coords: {row: 4, col: 4},
  challenge: "Adventure Battle: Final battle! Defeat the Demon King of the castle!",
  additionalRule: "Twilight Rule: No Special Attacks!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: [
      "Heart Container - Sheik (Mountain Keep)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const E6: HWMapTile = {
  coords: {row: 5, col: 4},
  challenge: "Adventure Battle: A leader never sleeps!",
  additionalRule: "Twilight Rule: No Item Attacks!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Sail Lv.4 - King Daphnes",
    clear: ["Clawshot Item Card"],
    treasure: [
      "Heart Container - King Daphnes (W. Rockface Keep)",
      "Fairy Top - Butterfly Blouse (Castle Keep)",
      "Fairy Food - Bombfish (Central Keep [Pot])",
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
      item: Items.JAR,
      target: {
        row: 10,
        col: 2
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const E7: HWMapTile = {
  coords: {row: 6, col: 4},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.7",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Gauntlets Lv.4 - Link",
    clear: ["Digging Mitts Item Card"],
    treasure: [
      "Piece of Heart - Link (Abandoned Fort)",
      "Fairy Accessory - Twilight Jewel (W. Rockface Keep)",
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
      item: Items.CLAWSHOT,
      target: {
        row: 4,
        col: 0
      }
    },
    {
      item: Items.SPINNER,
      target: {
        row: 7,
        col: 10
      }
    },
  ],
}

export const E8: HWMapTile = {
  coords: {row: 7, col: 4},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.3",
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
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 4,
        col: 3
      }
    },
  ],
}

export const F1: HWMapTile = {
  coords: {row: 0, col: 5},
  challenge: "Adventure Battle: Defeat the summoners before it's too late!",
  additionalRule: "Twilight Rule: No Special Attacks!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Link",
    clear: ["Water Bomb Item Card"],
    treasure: [
      "My Fairy - Light (Southwest Keep [Pot])",
      "Fairy Food - Bombfish (West Cannon Keep [Pot])",
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
      item: Items.CLAWSHOT,
      target: {
        row: 5,
        col: 0
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const F2: HWMapTile = {
  coords: {row: 1, col: 5},
  challenge: "Adventure Battle: Use a Magic Circle to defeat the enemy forces! Lv.1",
  additionalRule: "Twilight Rule: No Focus Spirit!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Twilight) - Fi"],
    treasure: [
      "Heart Container - Fi (N. Rockface Keep)",
      "Gold Skulltula x2",
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
      item: Items.FISHINGROD,
      target: {
        row: 0,
        col: 1
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const F3: HWMapTile = {
  coords: {row: 2, col: 5},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Clawshot Item Card"],
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

export const F4: HWMapTile = {
  coords: {row: 3, col: 5},
  challenge: "Adventure Battle: Defeat the barrier specialist forces! Lv.3",
  additionalRule: "Twilight Rule: No Focus Spirit!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Crossbows Lv.4 - Linkle",
    clear: ["Lantern Item Card"],
    treasure: [
      "Heart Container - Linkle (Central Keep)",
      "Fairy Top - Hero's Clothes (Fairy Fountain)",
      "Fairy Food - Ordon Catfish (Central Keep [Pot])",
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
      item: Items.BOMB,
      target: {
        row: 4,
        col: 1
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const F5: HWMapTile = {
  coords: {row: 4, col: 5},
  challenge: "Challenge Battle: Defeat 1,000 enemies in time!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Era of Twilight Tunic - Link"],
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
      item: Items.CLAWSHOT,
      target: {
        row: 5,
        col: 0
      }
    },
    {
      item: Items.FISHINGROD,
      target: {
        row: 7,
        col: 0
      }
    },
    {
      item: Items.LANTERN,
      target: {
        row: 2,
        col: 7
      }
    },
  ],
}

export const F6: HWMapTile = {
  coords: {row: 5, col: 5},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Light Sword Lv.4 - Toon Link",
    clear: ["Spinner Item Card"],
    treasure: [
      "Heart Container - Toon Link (Abandoned Fort)",
      "Fairy Bottom - Twilight Skirt (North Field Keep)",
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
      item: Items.SPINNER,
      target: {
        row: 3,
        col: 8
      }
    },
  ],
}

export const F7: HWMapTile = {
  coords: {row: 6, col: 5},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.8",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: ["Tears of Light Item Card"],
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
      item: Items.BOMB,
      target: {
        row: 4,
        col: 12
      }
    },
  ],
}

export const F8: HWMapTile = {
  coords: {row: 7, col: 5},
  challenge: "Adventure Battle: Calm dissenters and crush your foe!",
  additionalRule: "Twilight Rule: No Item Attacks!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Twilight) - Ruto"],
    treasure: [
      "Heart Container - Darunia (W. Boulder Keep)",
      "Fairy Food - Great Fairy's Tears (E. Boulder Keep [Pot])",
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
      item: Items.JAR,
      target: {
        row: 2,
        col: 1
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const G1: HWMapTile = {
  coords: {row: 0, col: 6},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the palace!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Balloon Lv.4 - Tingle",
    clear: ["Tears of Light Item Card"],
    treasure: [
      "Heart Container - Tingle (S. Entrance Keep)",
      "Fairy Food - Bee Larvae (S. Entrance Keep [Pot])",
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
      item: Items.JAR,
      target: {
        row: 9,
        col: 1
      }
    },
    {
      item: Items.LANTERN,
      target: {
        row: 1,
        col: 10
      }
    },
  ],
}

export const G2: HWMapTile = {
  coords: {row: 1, col: 6},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.5",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Ooccoo Item Card"],
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

export const G3: HWMapTile = {
  coords: {row: 2, col: 6},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Ooccoo Item Card"],
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
      item: Items.SPINNER,
      target: {
        row: 9,
        col: 4
      }
    },
  ],
}

export const G4: HWMapTile = {
  coords: {row: 3, col: 6},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the lake!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: [
      "Tears of Light Item Card",
      "Bomb Item Card",
    ],
    treasure: [
      "Fairy Top - Butterfly Blouse (Bridge Keep)",
      "Fairy Food - Hylian Loach (Rocky Square [Pot])",
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
      item: Items.FISHINGROD,
      target: {
        row: 1,
        col: 12
      }
    },
  ],
}

export const G5: HWMapTile = {
  coords: {row: 4, col: 6},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.3",
  additionalRule: "Twilight Rule: No Focus Spirit!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Impa",
    clear: ["Compass Item Card"],
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
      item: Items.JAR,
      target: {
        row: 7,
        col: 3
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const G6: HWMapTile = {
  coords: {row: 5, col: 6},
  challenge: "Challenge Battle: Protect the Bombchu! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Postman Uniform - Link",
      "Bomb Item Card",
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
    Blockade.WEST
  ],
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 4,
        col: 4
      }
    },
  ],
}

export const G7: HWMapTile = {
  coords: {row: 6, col: 6},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: [
      "Tears of Light Item Card",
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
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 3,
        col: 5
      }
    },
  ],
}

export const G8: HWMapTile = {
  coords: {row: 7, col: 6},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the volcano!",
  additionalRule: "Twilight Rule: No Special Attacks!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: [
      "Tears of Light Item Card",
      "Fishing Rod Item Card",
    ],
    treasure: [
      "Fairy Decoration - Goron Facepaint (Stock Room)",
      "Fairy Food - Hylian Loach (Central Square [Pot])",
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
  search: [],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const H1: HWMapTile = {
  coords: {row: 0, col: 7},
  challenge: "Adventure Battle: Strengthen your army and defeat the enemy!",
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
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 2,
        col: 13
      }
    },
  ],
}

export const H2: HWMapTile = {
  coords: {row: 1, col: 7},
  challenge: "Challenge Battle: Protect the Bombchu! Lv.4",
  difficulty: Difficulty.PURPLE,
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
    Blockade.NORTH
  ],
  search: [
    {
      item: Items.LANTERN,
      target: {
        row: 2,
        col: 4
      }
    },
    {
      item: Items.OOCCOO,
      target: {
        row: 2,
        col: 11
      }
    },
  ],
}

export const H3: HWMapTile = {
  coords: {row: 2, col: 7},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Twilight) - Zant"],
    treasure: [
      "Heart Container - Zant",
      "Gold Skulltula x2",
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
      item: Items.JAR,
      target: {
        row: 3,
        col: 14
      }
    },
  ],
}

export const H4: HWMapTile = {
  coords: {row: 3, col: 7},
  challenge: "Adventure Battle: Defeat the mountain beast!",
  additionalRule: "Twilight Rule: No Special Attacks!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: undefined,
    treasure: [
      "Fairy Headwear - Butterfly Headband (SE Room)",
      "Fairy Food - Hyrule Bass (Hall of Mirrors [Pot])",
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
      item: Items.LANTERN,
      target: {
        row: 6,
        col: 9
      }
    },
    {
      item: Items.WATERBOMB,
      target: {
        row: 6,
        col: 2
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const H5: HWMapTile = {
  coords: {row: 4, col: 7},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Bomb Item Card"],
    treasure: [
      "Fairy Decoration - Butterfly Makeup (Mountain Keep)",
      "Fairy Food - Greengill (Castle Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.SOUTH,
  ],
  search: [],
}

export const H6: HWMapTile = {
  coords: {row: 5, col: 7},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Jar Item Card"],
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
  search: [
    {
      item: Items.FISHINGROD,
      target: {
        row: 2,
        col: 11
      }
    },
  ],
}

export const H7: HWMapTile = {
  coords: {row: 6, col: 7},
  challenge: "Adventure Battle: Stop the fortifiers and barrier specialists!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Giant Blade Lv.4 - Impa",
    clear: ["Water Bomb Item Card"],
    treasure: [
      "Heart Container - Impa (North Oasis)",
      "Fairy Food - Reekfish (Central Keep [Pot])",
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
      item: Items.FISHINGROD,
      target: {
        row: 6,
        col: 11
      }
    },
  ],
}

export const H8: HWMapTile = {
  coords: {row: 7, col: 7},
  challenge: "Challenge Battle: Protect the Bombchu! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Lantern Item Card"],
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
      item: Items.SPINNER,
      target: {
        row: 6,
        col: 7
      }
    },
  ],
}

export const I1: HWMapTile = {
  coords: {row: 0, col: 8},
  challenge: "Adventure Battle: Final battle! Defeat the desert dragon!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Book of Sorcery Lv.4 - Lana",
    clear: [
      "Tears of Light Item Card",
      "Lantern Item Card",
    ],
    treasure: undefined
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
      item: Items.BOMB,
      target: {
        row: 1,
        col: 0
      }
    },
  ],
}

export const I2: HWMapTile = {
  coords: {row: 1, col: 8},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Ooccoo Item Card"],
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
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 2,
        col: 12
      }
    },
  ],
}

export const I3: HWMapTile = {
  coords: {row: 2, col: 8},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: [
      "Tears of Light Item Card",
      "Jar Item Card",
    ],
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

export const I4: HWMapTile = {
  coords: {row: 3, col: 8},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.7",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Era of Twilight Armor - Ganondorf",
      "Tears of Light Item Card",
      "Spinner Item Card",
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
      item: Items.BOMB,
      target: {
        row: 6,
        col: 14
      }
    },
  ],
}

export const I5: HWMapTile = {
  coords: {row: 4, col: 8},
  challenge: "Challenge Battle: Rack up your KO count! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Fishing Rod Item Card"],
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

export const I6: HWMapTile = {
  coords: {row: 5, col: 8},
  challenge: "Adventure Battle: Enjoy a leisurely Cucco-outing!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Clawshot Item Card"],
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

export const I7: HWMapTile = {
  coords: {row: 6, col: 8},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Ooccoo Item Card"],
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
      item: Items.BOMB,
      target: {
        row: 2,
        col: 3
      }
    },
  ],
}

export const I8: HWMapTile = {
  coords: {row: 7, col: 8},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Twilight) - Darunia"],
    treasure: [
      "Heart Container - Darunia (East Goron Keep)",
      "Fairy Food - Chu Jelly (E. Boulder Keep [Pot])",
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
      item: Items.BOMB,
      target: {
        row: 4,
        col: 6
      }
    },
    {
      item: Items.LANTERN,
      target: {
        row: 5,
        col: 14
      }
    },
  ],
}

export const J1: HWMapTile = {
  coords: {row: 0, col: 9},
  challenge: "Challenge Battle: Protect the Bombchu! Lv.5",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Twilight) - Agitha",
      "Spinner Item Card",
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
      item: Items.JAR,
      target: {
        row: 9,
        col: 15
      }
    },
  ],
}

export const J2: HWMapTile = {
  coords: {row: 1, col: 9},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.5",
  additionalRule: "Twilight Rule: No Special Attacks!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Digging Mitts Item Card"],
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
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const J3: HWMapTile = {
  coords: {row: 2, col: 9},
  challenge: "Adventure Battle: Behold the power of teamwork!",
  additionalRule: "Twilight Rule: No Focus Spirit!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: undefined,
    treasure: [
      "Fairy Top - Hero's Clothes (Central Square)",
      "Fairy Food - Chu Jelly (Central Square [Pot])",
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
      item: Items.JAR,
      target: {
        row: 3,
        col: 2
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const J4: HWMapTile = {
  coords: {row: 3, col: 9},
  challenge: "Adventure Battle: Defeat the barrier specialist forces! Lv.1",
  additionalRule: "Twilight Rule: No Special Attacks!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Rapier Lv.4 - Zelda",
    clear: [
      "Tears of Light Item Card",
      "Water Bomb Item Card",
    ],
    treasure: [
      "Heart Container - Zelda (East Room)",
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
      item: Items.DIGGINGMITTS,
      target: {
        row: 8,
        col: 4
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const J5: HWMapTile = {
  coords: {row: 4, col: 9},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Lantern Item Card"],
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
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.1",
  additionalRule: "Twilight Rule: No Item Attacks!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Twilight) - Wizzro"],
    treasure: [
      "Heart Container - Wizzro (Stock Room)",
      "Gold Skulltula x2",
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
      item: Items.JAR,
      target: {
        row: 9,
        col: 3
      }
    },
    {
      item: Items.LANTERN,
      target: {
        row: 9,
        col: 11
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const J7: HWMapTile = {
  coords: {row: 6, col: 9},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Jar Item Card"],
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

export const J8: HWMapTile = {
  coords: {row: 7, col: 9},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Tears of Light Item Card"],
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
  challenge: "Adventure Battle: Look for a solution!",
  additionalRule: "Twilight Rule: No Item Attacks!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Parasol Lv.4 - Agitha",
    clear: undefined,
    treasure: [
      "Heart Container - Agitha (West Temple)",
      "Fairy Bottom - Butterfly Skirt (East Keep)",
      "Fairy Food - Great Fairy's Tears (Eastern Room [Pot])"
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
      item: Items.LANTERN,
      target: {
        row: 2,
        col: 10
      }
    },
    {
      item: Items.SPINNER,
      target: {
        row: 4,
        col: 14
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const K2: HWMapTile = {
  coords: {row: 1, col: 10},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.7",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Twilight) - Impa",
      "Tears of Light Item Card",
      "Lantern Item Card",
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
      item: Items.SPINNER,
      target: {
        row: 10,
        col: 0
      }
    },
  ],
}

export const K3: HWMapTile = {
  coords: {row: 2, col: 10},
  challenge: "Challenge Battle: Protect the Bombchu! Lv.7",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Twilight) - Zelda",
      "Ooccoo Item Card",
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
      item: Items.DIGGINGMITTS,
      target: {
        row: 9,
        col: 1
      }
    },
    {
      item: Items.LANTERN,
      target: {
        row: 3,
        col: 0
      }
    },
  ],
}

export const K4: HWMapTile = {
  coords: {row: 3, col: 10},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the temple!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Volga",
    clear: [
      "Tears of Light Item Card",
      "Digging Mitts Item Card",
    ],
    treasure: undefined
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

export const K5: HWMapTile = {
  coords: {row: 4, col: 10},
  challenge: "Challenge Battle: Defeat 400 enemies in time!",
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
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 4,
        col: 7
      }
    },
  ],
}

export const K6: HWMapTile = {
  coords: {row: 5, col: 10},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.1",
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
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.CLAWSHOT,
      target: {
        row: 7,
        col: 15
      }
    },
    {
      item: Items.OOCCOO,
      target: {
        row: 3,
        col: 5
      }
    },
  ],
}

export const K7: HWMapTile = {
  coords: {row: 6, col: 10},
  challenge: "Challenge Battle: Rack up your KO count! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: [
      "Tears of Light Item Card",
      "Spinner Item Card",
    ],
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

export const K8: Tile = {
  coords: {row: 7, col: 10}
}

export const L1: Tile = {
  coords: {row: 0, col: 11}
}

export const L2: Tile = {
  coords: {row: 1, col: 11}
}

export const L3: HWMapTile = {
  coords: {row: 2, col: 11},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.7",
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
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 5,
        col: 9
      }
    },
  ],
}

export const L4: HWMapTile = {
  coords: {row: 3, col: 11},
  challenge: "Adventure Battle: Fight as a warrior of light! Lv.2",
  additionalRule: "Twilight Rule: No Item Attacks!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Cia",
    clear: undefined,
    treasure: [
      "Fairy Bottom - Magic Skirt (Upper Level East)",
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
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const L5: HWMapTile = {
  coords: {row: 4, col: 11},
  challenge: "Adventure Battle: Recruit more allies and overwhelm the enemy!",
  additionalRule: "Twilight Rule: No Special Attacks!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Twilight) - Lana"],
    treasure: [
      "Heart Container - Lana (East Temple)",
      "Gold Skulltula x2",
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
      item: Items.JAR,
      target: {
        row: 8,
        col: 4
      }
    },
  ],
  fullTileSearch: {
    item: Items.TEARSOFLIGHT,
    description: "Use Tears of Light to clear away the Twilight"
  }
}

export const L6: HWMapTile = {
  coords: {row: 5, col: 11},
  challenge: "Adventure Battle: Destroy enemies and traitors alike!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Twilight) - Sheik"],
    treasure: [
      "Heart Container - Sheik (Eastern Tree)",
      "Fairy Food - Ordon Goat Cheese (Eastern Tree [Pot])",
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
  search: [
    {
      item: Items.JAR,
      target: {
        row: 3,
        col: 14
      }
    },
  ],
}

export const L7: Tile = {
  coords: {row: 6, col: 11}
}

export const L8: Tile = {
  coords: {row: 7, col: 11}
}

export const M1: Tile = {
  coords: {row: 0, col: 12}
}

export const M2: Tile = {
  coords: {row: 1, col: 12}
}

export const M3: Tile = {
  coords: {row: 2, col: 12}
}

export const M4: HWMapTile = {
  coords: {row: 3, col: 12},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Volga",
    clear: ["Bomb Item Card"],
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

export const M5: HWMapTile = {
  coords: {row: 4, col: 12},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the jungle!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: ["Tears of Light Item Card"],
    treasure: [
      "Heart Container - Fi (North Square)",
      "Fairy Decoration - Goron Facepaint (Southeast Tree)",
      "Fairy Food - Ordon Catfish (Eastern Tree [Pot])",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH
  ],
  search: [],
}

export const M6: HWMapTile = {
  coords: {row: 5, col: 12},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.1",
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
  blockades: [
    Blockade.NORTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.OOCCOO,
      target: {
        row: 4,
        col: 5
      }
    },
  ],
}

export const M7: Tile = {
  coords: {row: 6, col: 12}
}

export const M8: Tile = {
  coords: {row: 7, col: 12}
}

export const N1: Tile = {
  coords: {row: 0, col: 13}
}

export const N2: Tile = {
  coords: {row: 1, col: 13}
}

export const N3: Tile = {
  coords: {row: 2, col: 13}
}

export const N4: HWMapTile = {
  coords: {row: 3, col: 13},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: [
      "Ilia's Clothes - Zelda",
      "Jar Item Card",
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
      item: Items.BOMB,
      target: {
        row: 5,
        col: 0
      }
    },
  ],
}

export const N5: HWMapTile = {
  coords: {row: 4, col: 13},
  challenge: "Challenge Battle: Protect the Bombchu!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Lana",
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
  search: [
    {
      item: Items.JAR,
      target: {
        row: 2,
        col: 11
      }
    },
  ],
}

export const N6: HWMapTile = {
  coords: {row: 5, col: 13},
  challenge: "Adventure Battle: Show no fear to the enemies of Twilight!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Midna",
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

export const N7: Tile = {
  coords: {row: 6, col: 13}
}

export const N8: Tile = {
  coords: {row: 7, col: 13}
}

export const O1: Tile = {
  coords: {row: 0, col: 14}
}

export const O2: Tile = {
  coords: {row: 1, col: 14}
}

export const O3: Tile = {
  coords: {row: 2, col: 14}
}

export const O4: Tile = {
  coords: {row: 3, col: 14}
}

export const O5: Tile = {
  coords: {row: 4, col: 14}
}

export const O6: HWMapTile = {
  coords: {row: 5, col: 14},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Toon Link",
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

export const O7: Tile = {
  coords: {row: 6, col: 14}
}

export const O8: Tile = {
  coords: {row: 7, col: 14}
}
