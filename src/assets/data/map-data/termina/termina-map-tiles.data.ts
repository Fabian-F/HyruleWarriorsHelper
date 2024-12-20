import { Blockade, Difficulty } from "src/assets/data/enums"
import { HWMapTile, Tile } from "src/app/models"
import { Items } from "../../items.data"

export const A1: HWMapTile = {
  coords: {row: 0, col: 0},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Mask Lv.4 - Young Link",
    clear: undefined,
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
      item: Items.DEKUSTICK,
      target: {
        row: 8,
        col: 13
      }
    },
    {
      item: Items.ICEARROW,
      target: {
        row: 3,
        col: 14
      }
    },
  ],
}

export const A2: HWMapTile = {
  coords: {row: 1, col: 0},
  challenge: "Adventure Battle: Get to the troops before the others do! Lv.7",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Trident Lv.4 - Ganondorf",
    clear: undefined,
    treasure: [
      "Heart Container - Ganondorf (South Field Keep)",
      "Fairy Decoration - Moon's Aura (Hilltop Keep)",
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
      item: Items.ICEARROW,
      target: {
        row: 8,
        col: 14
      }
    },
  ],
}

export const A3: HWMapTile = {
  coords: {row: 2, col: 0},
  challenge: "Adventure Battle: Win the keep-capturing competition! Lv.7",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Bunny Hood Costume - Zelda"],
    treasure: [
      "Heart Container - Sheik (Fairy Fountain)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located in the pointy dead end east of the Eastern Room.",
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
      item: Items.BOMB,
      target: {
        row: 1,
        col: 14
      }
    },
  ],
}

export const A4: Tile = {
  coords: {row: 3, col: 0}
}

export const A5: Tile = {
  coords: {row: 4, col: 0}
}

export const A6: Tile = {
  coords: {row: 5, col: 0},
}

export const A7: Tile = {
  coords: {row: 6, col: 0},
}

export const A8: Tile = {
  coords: {row: 7, col: 0},
}

export const B1: HWMapTile = {
  coords: {row: 0, col: 1},
  challenge: "Adventure Battle: Defeat the barrier specialist forces!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located on the cliff north of East Field Keep accessible via Hookshot.",
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

export const B2: HWMapTile = {
  coords: {row: 1, col: 1},
  challenge: "Adventure Battle: Final battle! Defeat the Demon King of the moon!",
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
    Blockade.SOUTH,
  ],
  search: [],
}

export const B3: HWMapTile = {
  coords: {row: 2, col: 1},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.9",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Fierce Diety Link Costume - Link",
      "Majora's Mask Item Card",
      "Goron Mask Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
  ],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 1,
        col: 7
      }
    },
  ],
}

export const B4: Tile = {
  coords: {row: 3, col: 1},
}

export const B5: Tile = {
  coords: {row: 4, col: 1},
}

export const B6: Tile = {
  coords: {row: 5, col: 1},
}

export const B7: Tile = {
  coords: {row: 6, col: 1},
}

export const B8: Tile = {
  coords: {row: 7, col: 1},
}

export const C1: HWMapTile = {
  coords: {row: 0, col: 2},
  challenge: "Adventure Battle: Yesterday's foes are today's allies!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Dominion Rod Lv.4 - Zelda",
    clear: undefined,
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
      item: Items.BOMB,
      target: {
        row: 10,
        col: 1
      }
    },
    {
      item: Items.DEKUSTICK,
      target: {
        row: 9,
        col: 4
      }
    },
  ],
}

export const C2: HWMapTile = {
  coords: {row: 1, col: 2},
  challenge: "Challenge Battle: Win the KO competition! Lv.9",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Skull Kid's Clothes - Lana",
      "Inverted Song of Time Item Card",
      "Deku Stick Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: 199,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 2,
        col: 1
      }
    },
  ],
}

export const C3: HWMapTile = {
  coords: {row: 2, col: 2},
  challenge: "Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Odolwa's Remains Costume - Ganondorf",
      "Song of Time Item Card",
      "Deku Stick Item Card",
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
        row: 1,
        col: 0
      }
    },
  ],
}

export const C4: Tile = {
  coords: {row: 3, col: 2},
}

export const C5: Tile = {
  coords: {row: 4, col: 2},
}

export const C6: Tile = {
  coords: {row: 5, col: 2},
}

export const C7: Tile = {
  coords: {row: 6, col: 2},
}

export const C8: Tile = {
  coords: {row: 7, col: 2},
}


export const D1: Tile = {
  coords: {row: 0, col: 3},
}

export const D2: Tile = {
  coords: {row: 1, col: 3},
}

export const D3: Tile = {
  coords: {row: 2, col: 3},
}

export const D4: Tile = {
  coords: {row: 3, col: 3},
}

export const D5: Tile = {
  coords: {row: 4, col: 3},
}

export const D6: Tile = {
  coords: {row: 5, col: 3},
}

export const D7: HWMapTile = {
  coords: {row: 6, col: 3},
  challenge: "Adventure Battle: Defeat the ocean beast!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: [
      "Giant Item Card",
      "Deku Stick Item Card",
    ],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located beside a tree found just southwest of the Statue Keep.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
      item: Items.ZORAMASK,
      target: {
        row: 8,
        col: 6
      }
    },
  ],
}

export const D8: Tile = {
  coords: {row: 7, col: 3},
}

export const E1: Tile = {
  coords: {row: 0, col: 4},
}

export const E2: Tile = {
  coords: {row: 1, col: 4},
}

export const E3: Tile = {
  coords: {row: 2, col: 4},
}

export const E4: HWMapTile = {
  coords: {row: 3, col: 4},
  challenge: "Adventure Battle: Win the keep-capturing competition! Lv.5",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: undefined,
    treasure: [
      "My Fairy - Water (West Keep)",
      "Fairy Food - Bottled Water (East Keep [Pot])",
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
      item: Items.ZORAMASK,
      target: {
        row: 3,
        col: 5
      }
    },
  ],
}

export const E5: HWMapTile = {
  coords: {row: 4, col: 4},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: [
      "Mask of Truth Item Card",
      "Bomb Item Card",
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
      item: Items.ZORAMASK,
      target: {
        row: 5,
        col: 4
      }
    },
  ],
}

export const E6: HWMapTile = {
  coords: {row: 5, col: 4},
  challenge: "Challenge Battle: Rouse the troops with encouraging words!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Inverted Song of Time Item Card"],
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
      item: Items.ZORAMASK,
      target: {
        row: 8,
        col: 6
      }
    },
  ],
}

export const E7: HWMapTile = {
  coords: {row: 6, col: 4},
  challenge: "Adventure Battle: Rouse the troops with encouraging words!",
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
  search: [
    {
      item: Items.ZORAMASK,
      target: {
        row: 7,
        col: 12
      }
    },
  ],
}

export const E8: Tile = {
  coords: {row: 7, col: 4},
}

export const F1: Tile = {
  coords: {row: 0, col: 5},
}

export const F2: HWMapTile = {
  coords: {row: 1, col: 5},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.7",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Ocarina Lv.4 - Skull Kid",
    clear: ["Zora Mask Item Card"],
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
      item: Items.ICEARROW,
      target: {
        row: 6,
        col: 13
      }
    },
  ],
}

export const F3: HWMapTile = {
  coords: {row: 2, col: 5},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the bay!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Goddess Blade Lv.4 - Fi",
    clear: ["Zora Mask Item Card"],
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
      item: Items.BOMB,
      target: {
        row: 9,
        col: 14
      }
    },
  ],
}

export const F4: HWMapTile = {
  coords: {row: 3, col: 5},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.3",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Era of the Hero of Time Armor - Ganondorf",
      "Majora's Mask Item Card",
      "Compass Item Card",
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
      item: Items.GORONMASK,
      target: {
        row: 3,
        col: 14
      }
    },
    {
      item: Items.ICEARROW,
      target: {
        row: 3,
        col: 12
      }
    },
  ],
}

export const F5: HWMapTile = {
  coords: {row: 4, col: 5},
  challenge: "Adventure Battle: Help those in need!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Ice Arrow Item Card"],
    treasure: [
      "Fairy Bottom - Ranch Skirt (N. Settlement)",
      "Fairy Food - Meat (Enemy Base [Pot])",
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

export const F6: HWMapTile = {
  coords: {row: 5, col: 5},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.5",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Demon Blade Lv.4 - Ghirahim",
    clear: undefined,
    treasure: [
      "Heart Container - Ghirahim (Southeast Tree)",
      "Fairy Food - Meat (Southern Tree [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 8,
        col: 6
      }
    },
  ],
}

export const F7: HWMapTile = {
  coords: {row: 6, col: 5},
  challenge: "Challenge Battle: Defeat 700 enemies before the Rogue Forces do! Lv.4",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Kokiri Tunic Costume - Link",
      "Zora Mask Item Card",
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
      item: Items.BOMB,
      target: {
        row: 1,
        col: 13
      }
    },
    {
      item: Items.ZORAMASK,
      target: {
        row: 8,
        col: 3
      }
    },
  ],
}

export const F8: Tile = {
  coords: {row: 7, col: 5},
}

export const G1: HWMapTile = {
  coords: {row: 0, col: 6},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the temple!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Giant Item Card",
      "Goron Mask Item Card",
    ],
    treasure: [
      "Heart Container - Wizzro (Fairy Fountain)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located in the southwest corner of the large field north of the Castle Keep.",
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

export const G2: HWMapTile = {
  coords: {row: 1, col: 6},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.3",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Great Fairy Lv.4 - Link",
    clear: undefined,
    treasure: [
      "Fairy Headwear - Postman Hat (Stone Square)",
      "Fairy Food - Mystery Seeds (Stock Room [Pot])",
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
    Blockade.WEST
  ],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 0,
        col: 3
      }
    },
  ],
}

export const G3: HWMapTile = {
  coords: {row: 2, col: 6},
  challenge: "Adventure Battle: Beware the ghost's blade!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Naginata Lv.4 - Impa",
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
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 12
      }
    },
  ],
}

export const G4: HWMapTile = {
  coords: {row: 3, col: 6},
  challenge: "Challenge Battle: Win the KO competition! Lv.6",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [
    {
      item: Items.ZORAMASK,
      target: {
        row: 7,
        col: 3
      }
    },
  ],
}

export const G5: HWMapTile = {
  coords: {row: 4, col: 6},
  challenge: "Challenge Battle: FIght through the mask quiz! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Stone Mask Costume - Fi",
      "Compass Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 8,
        col: 7
      }
    },
  ],
}

export const G6: HWMapTile = {
  coords: {row: 5, col: 6},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.4",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Scepter Lv.4 - Cia",
    clear: undefined,
    treasure: [
      "Heart Container - Cia (Southeast Keep)",
      "Fairy Headwear - Bunny Hood (Southwest Keep)",
      "Fairy Food - Chateau Romani (Temple Entrance [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 8,
        col: 5
      }
    },
  ],
}

export const G7: Tile = {
  coords: {row: 6, col: 6},
}

export const G8: HWMapTile = {
  coords: {row: 7, col: 6},
  challenge: "Adventure Battle: Win the keep-capturing competition! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Hammer Lv.4 - Darunia",
    clear: undefined,
    treasure: [
      "Heart Container - Darunia (Temple Face Keep)",
      "Fairy Top - Deku Dress (King's Hall)",
      "Fairy Food - Hot Spring Water (East Room [Pot])",
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
        row: 3,
        col: 7
      }
    },
  ],
}

export const H1: HWMapTile = {
  coords: {row: 0, col: 7},
  challenge: "Challenge Battle: Defeat 700 enemies before the Rogue Forces do! ! Lv.2",
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
    Blockade.EAST
  ],
  search: [],
}

export const H2: HWMapTile = {
  coords: {row: 1, col: 7},
  challenge: "Challenge Battle: Win the KO competition! Lv.5",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Troupe Leader's Mask Costume - Zant",
      "Deku Mask Item Card",
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
    Blockade.WEST
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

export const H3: HWMapTile = {
  coords: {row: 2, col: 7},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Goron Mask Item Card"],
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
}

export const H4: HWMapTile = {
  coords: {row: 3, col: 7},
  challenge: "Challenge Battle: Defeat 700 enemies before the Rogue Forces do! Lv.3",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Impa",
    clear: [
      "Majora's Mask Item Card",
      "Ice Arrow Item Card",
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
    Blockade.EAST
  ],
  search: [],
}

export const H5: HWMapTile = {
  coords: {row: 4, col: 7},
  challenge: "Adventure Battle: The Cucco army rises once more!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Ice Arrow Item Card"],
    treasure: [
      "Fairy Top - Ranch Top (Southwest Keep)",
      "Fairy Food - Pegasus Seeds (Hall of Time [Pot])",
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

export const H6: HWMapTile = {
  coords: {row: 5, col: 7},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.6",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Majora's Mask Costume - Cia",
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
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.DEKUMASK,
      target: {
        row: 5,
        col: 5
      }
    },
    {
      item: Items.ICEARROW,
      target: {
        row: 3,
        col: 12
      }
    },
  ],
}

export const H7: Tile = {
  coords: {row: 6, col: 7},
}

export const H8: HWMapTile = {
  coords: {row: 7, col: 7},
  challenge: "Adventure Battle: Defeat the forest dragon!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Horse Lv.4 - Link",
    clear: ["Deku Mask Item Card"],
    treasure: [
      "Piece of Heart - Link (West Square)",
      "Fairy Headwear - Deku Tiara (Fairy Fountain)",
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
      item: Items.DEKUMASK,
      target: {
        row: 8,
        col: 5
      }
    },
    {
      item: Items.ICEARROW,
      target: {
        row: 2,
        col: 3
      }
    },
  ],
}

export const I1: HWMapTile = {
  coords: {row: 0, col: 8},
  challenge: "Adventure Battle: Will you fall, or will you bloom?",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: ["Deku Mask Costume - Lana"],
    treasure: [
      "Heart Container - Volga (Lower Level East)",
      "Fairy Accessory - Snowhead Necklace (Upper Level East)",
      "Fairy Food - Hot Spring Water (North Palace [Pot])",
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
      item: Items.BOMB,
      target: {
        row: 6,
        col: 12
      }
    },
  ],
}

export const I2: HWMapTile = {
  coords: {row: 1, col: 8},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.5",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Lana",
    clear: [
      "Mask of Truth Item Card",
      "Bomb Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.WEST
  ],
  search: [],
}

export const I3: HWMapTile = {
  coords: {row: 2, col: 8},
  challenge: "Adventure Battle: Enjoy this house of horrors!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: undefined,
    treasure: [
      "My Fairy - Lightning (Central Keep [Pot])",
      "Fairy Food - Scent Seeds (Rocky Square [Pot])",
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
      item: Items.GORONMASK,
      target: {
        row: 7,
        col: 13
      }
    },
  ],
}

export const I4: HWMapTile = {
  coords: {row: 3, col: 8},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST
  ],
  search: [],
}

export const I5: HWMapTile = {
  coords: {row: 4, col: 8},
  challenge: "Adventure Battle: Win the keep-capturing competition! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Bomb Item Card"],
    treasure: [
      "Fairy Bottom - Balloon Shorts (North Oasis)"
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

export const I6: HWMapTile = {
  coords: {row: 5, col: 8},
  challenge: "Challenge Battle: Win the KO competition! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST,
  ],
  search: [],
}

export const I7: HWMapTile = {
  coords: {row: 6, col: 8},
  challenge: "Challenge Battle: Defeat all enemies! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: [
      "Song of Time Item Card",
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
    Blockade.SOUTH,
  ],
  search: [],
}

export const I8: HWMapTile = {
  coords: {row: 7, col: 8},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Era of the Hero of Time Outfit - Sheik",
      "Mask of Truth Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 2,
        col: 12
      }
    },
  ],
}

export const J1: HWMapTile = {
  coords: {row: 0, col: 9},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Ice Arrow Item Card"],
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

export const J2: HWMapTile = {
  coords: {row: 1, col: 9},
  challenge: "Challenge Battle: Fight through the mask quiz! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Goron Mask Costume - Darunia",
      "Compass Item Card",
    ],
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
      item: Items.BOMB,
      target: {
        row: 3,
        col: 2
      }
    },
  ],
}

export const J3: HWMapTile = {
  coords: {row: 2, col: 9},
  challenge: "Challenge Battle: Win the KO competition! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Ice Arrow Item Card"],
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

export const J4: HWMapTile = {
  coords: {row: 3, col: 9},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Bomb Item Card"],
    treasure: [
      "Fairy Top - Forest Top (East Keep)",
      "Fairy Food - Chateau Romani (West Ruins [Pot])",
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

export const J5: HWMapTile = {
  coords: {row: 4, col: 9},
  challenge: "Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.1",
  fullTileSearch: {
    item: Items.GIANT,
    description: "Use all four giants to reach the final squares."
  },
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Young Link",
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

export const J6: HWMapTile = {
  coords: {row: 5, col: 9},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: ["Era of the Hero of Time Outfit - Impa"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 99,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 8,
        col: 4
      }
    },
  ],
}

export const J7: HWMapTile = {
  coords: {row: 6, col: 9},
  challenge: "Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Zora Mask Costume - Ruto",
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
    Blockade.NORTH
  ],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 8,
        col: 14
      }
    },
  ],
}

export const J8: HWMapTile = {
  coords: {row: 7, col: 9},
  challenge: "Adventure Battle: Use diversionary tactics to defeat the enemy! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: undefined,
    treasure: [
      "Fairy Bottom - Ranch Skirt (Fairy Fountain)",
      "Fairy Food - Pegasus Seeds (South Field Keep [Pot])",
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

export const K1: HWMapTile = {
  coords: {row: 0, col: 10},
  challenge: "Challenge Battle: Defeat 700 enemies before the Rogue Forces do! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Mask of Truth Costume - Impa",
      "Inverted Song of Time Item Card",
      "Compass Item Card",
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
      item: Items.BOMB,
      target: {
        row: 2,
        col: 14
      }
    },
  ],
}

export const K2: HWMapTile = {
  coords: {row: 1, col: 10},
  challenge: "Adventure Battle: Win the keep-capturing competition! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located on a cliff north of the Rogue Base accessible via Hookshot.",
      "Complete the first mission and KO 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [
    {
      item: Items.GORONMASK,
      target: {
        row: 4,
        col: 4
      }
    },
  ],
}

export const K3: HWMapTile = {
  coords: {row: 2, col: 10},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Don Gero's Mask Costume - Agitha",
      "Mask of Truth Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.GORONMASK,
      target: {
        row: 7,
        col: 13
      }
    },
  ],
}

export const K4: HWMapTile = {
  coords: {row: 3, col: 10},
  challenge: "Challenge Battle: Win the KO competition! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1000,
    minutes: undefined,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
  ],
  search: [],
}

export const K5: HWMapTile = {
  coords: {row: 4, col: 10},
  challenge: "Adventure Battle: Search the battlefield for wandering enemies!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Link",
    clear: ["Bomb Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located along the north wall of the large open area north of West Square.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
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

export const K6: HWMapTile = {
  coords: {row: 5, col: 10},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Mask of Truth Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.SOUTH,
  ],
  search: [],
}

export const K7: HWMapTile = {
  coords: {row: 6, col: 10},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: undefined,
    treasure: [
      "My Fairy - Fire (East Goron Keep)",
      "Fairy Food - Ember Seeds (East Keep [Pot])"
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
      item: Items.DEKUMASK,
      target: {
        row: 7,
        col: 10
      }
    },
  ],
}

export const K8: HWMapTile = {
  coords: {row: 7, col: 10},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.1",
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
  search: [
    {
      item: Items.DEKUMASK,
      target: {
        row: 5,
        col: 11
      }
    },
  ],
}

export const L1: HWMapTile = {
  coords: {row: 0, col: 11},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Ice Arrow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [],
}

export const L2: HWMapTile = {
  coords: {row: 1, col: 11},
  challenge: "Adventure Battle: Don't ignore the messenger!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: ["Captain's Hat Costume - Wizzro"],
    treasure: [
      "Heart Container - Wizzro (Fairy Fountain)",
      "Fairy Headwear - Happiness Tiara (East Field Keep)",
      "Fairy Food - Gale Seeds (Central Keep [Pot])",
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
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 8,
        col: 7
      }
    },
  ],
}

export const L3: HWMapTile = {
  coords: {row: 2, col: 11},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: [
      "Inverted Song of Time Item Card",
      "Compass Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [],
}

export const L4: HWMapTile = {
  coords: {row: 3, col: 11},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.4",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: [
      "Majora's Mask Item Card",
      "Compass Item Card",
    ],
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
  search: [],
}

export const L5: HWMapTile = {
  coords: {row: 4, col: 11},
  challenge: "Challenge Battle: Win the KO competition! Lv.7",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Ice Arrow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.SOUTH
  ],
  search: [],
}

export const L6: HWMapTile = {
  coords: {row: 5, col: 11},
  challenge: "Challenge Battle: Win the KO competition! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST
  ],
  search: [],
}

export const L7: HWMapTile = {
  coords: {row: 6, col: 11},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Deku Mask Item Card"],
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

export const L8: HWMapTile = {
  coords: {row: 7, col: 11},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the swamp!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Zant",
    clear: [
      "Giant Item Card",
      "Deku Mask Item Card",
    ],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located along the north wall of the large open area north of West Square.",
      "Complete the first mission and capture five or more keeps without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
      item: Items.GORONMASK,
      target: {
        row: 5,
        col: 11
      }
    },
  ],
}

export const M1: HWMapTile = {
  coords: {row: 0, col: 12},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the valley!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Goron Mask Item Card"],
    treasure: [
      "Piece of Heart - Link (Central Square)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located on the outside wall of the southern exit of King's Hall.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
      item: Items.DEKUMASK,
      target: {
        row: 8,
        col: 10
      }
    },
  ],
}

export const M2: HWMapTile = {
  coords: {row: 1, col: 12},
  challenge: "Challenge Battle: Defeat all enemies! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Ordon Shield Costume - Midna",
      "Inverted Song of Time Item Card",
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
    Blockade.WEST
  ],
  search: [
    {
      item: Items.GORONMASK,
      target: {
        row: 4,
        col: 13
      }
    },
    {
      item: Items.ICEARROW,
      target: {
        row: 7,
        col: 2
      }
    },
  ],
}

export const M3: HWMapTile = {
  coords: {row: 2, col: 12},
  challenge: "Adventure Battle: Fight as a warrior of water!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located inside the East Garden along the southern wall.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.DEKUSTICK,
      target: {
        row: 5,
        col: 14
      }
    },
  ],
}

export const M4: HWMapTile = {
  coords: {row: 3, col: 12},
  challenge: "Challenge Battle: Win the KO competition! Lv.8",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Goron Mask Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: 199,
  },
  blockades: [],
  search: [
    {
      item: Items.ZORAMASK,
      target: {
        row: 4,
        col: 9
      }
    },
  ],
}

export const M5: HWMapTile = {
  coords: {row: 4, col: 12},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.8",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Era of the Hero of Time Robes - Zelda",
      "Majora's Mask Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 3,
        col: 14
      }
    },
  ],
}

export const M6: HWMapTile = {
  coords: {row: 5, col: 12},
  challenge: "Adventure Battle: Send the ghosts packing!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Baton Lv.4 - Zelda",
    clear: undefined,
    treasure: [
      "Fairy Food - Bottled Water (Fairy Fountain [Pot])"
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
      item: Items.DEKUMASK,
      target: {
        row: 6,
        col: 10
      }
    },
    {
      item: Items.ICEARROW,
      target: {
        row: 3,
        col: 2
      }
    },
  ],
}

export const M7: HWMapTile = {
  coords: {row: 6, col: 12},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Kafei's Mask Costume - Sheik",
      "Inverted Song of Time Item Card",
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
    Blockade.EAST
  ],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 6,
        col: 2
      }
    },
    {
      item: Items.ZORAMASK,
      target: {
        row: 9,
        col: 6
      }
    },
  ],
}

export const M8: HWMapTile = {
  coords: {row: 7, col: 12},
  challenge: "Adventure Battle: Win the keep-capturing competition! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Harp Lv.4 - Sheik",
    clear: undefined,
    treasure: [
      "Fairy Headwear - Postman Hat (East Keep)",
      "Fairy Food - Scent Seeds (East Keep [Pot])",
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
      item: Items.BOMB,
      target: {
        row: 1,
        col: 10
      }
    },
  ],
}

export const N1: HWMapTile = {
  coords: {row: 0, col: 13},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Mirror Lv.4 - Twili Midna",
    clear: undefined,
    treasure: [
      "Heart Container - Twili Midna (Central Keep)",
      "Fairy Accessory - Snowhead Necklace (N. Settlement)",
      "Fairy Food - Rock Sirloin (North Oasis [Pot])",
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
        row: 6,
        col: 6
      }
    },
  ],
}

export const N2: Tile = {
  coords: {row: 1, col: 13},
}

export const N3: HWMapTile = {
  coords: {row: 2, col: 13},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.5",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Giant's Mask Costume - Volga",
      "Inverted Song of Time Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 8,
        col: 11
      }
    },
  ],
}

export const N4: HWMapTile = {
  coords: {row: 3, col: 13},
  challenge: "Adventure Battle: Sword-fighting practice!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Dragon Spear Lv.4 - Volga",
    clear: undefined,
    treasure: [
      "Heart Container - Volga (East Goron Keep)",
      "Fairy Top - Ranch Top (West Goron Keep)",
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
      item: Items.ICEARROW,
      target: {
        row: 4,
        col: 13
      }
    },
  ],
}

export const N5: HWMapTile = {
  coords: {row: 4, col: 13},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the castle!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Kamaro's Mask Costume - Ghirahim",
      "Deku Stick Item Card",
    ],
    treasure: [
      "Heart Container - Midna (West Square)",
      "Fairy Headwear - Bunny Hood (Fairy Fountain)",
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
      item: Items.BOMB,
      target: {
        row: 3,
        col: 2
      }
    },
  ],
}

export const N6: HWMapTile = {
  coords: {row: 5, col: 13},
  challenge: "Challenge Battle: Defeat 400 enemies before the Rogue Forces do! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Deku Mask Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST
  ],
  search: [],
}

export const N7: HWMapTile = {
  coords: {row: 6, col: 13},
  challenge: "Adventure Battle: Use diversionary tactics to defeat the enemy! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Zora Scale Lv.4 - Ruto",
    clear: undefined,
    treasure: [
      "Heart Container - Ruto (E. Mountain Keep)",
      "Fairy Headwear - Deku Tiara (West Keep)",
      "Fairy Food - Gale Seeds (West Keep [Pot])",
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
      item: Items.BOMB,
      target: {
        row: 2,
        col: 4
      }
    },
  ],
}

export const N8: Tile = {
  coords: {row: 7, col: 13},
}

export const O1: Tile = {
  coords: {row: 0, col: 14},
}

export const O2: Tile = {
  coords: {row: 1, col: 14},
}

export const O3: HWMapTile = {
  coords: {row: 2, col: 14},
  challenge: "Adventure Battle: Lurking treachery, lurking shadows!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Ring Lv.4 - Wizzro",
    clear: undefined,
    treasure: [
      "Fairy Top - Happiness Dress (South Square)",
      "Fairy Food - Rock Sirloin (Central Square [Pot])",
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
      item: Items.ICEARROW,
      target: {
        row: 4,
        col: 6
      }
    },
  ],
}

export const O4: HWMapTile = {
  coords: {row: 3, col: 14},
  challenge: "Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do! Lv.1",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Zora Mask Item Card"],
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
      item: Items.DEKUSTICK,
      target: {
        row: 7,
        col: 13
      }
    },
  ],
}

export const O5: HWMapTile = {
  coords: {row: 4, col: 14},
  challenge: "Adventure Battle: Win the keep-capturing competition! Lv.6",
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
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.GORONMASK,
      target: {
        row: 3,
        col: 13
      }
    },
  ],
}

export const O6: HWMapTile = {
  coords: {row: 5, col: 14},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the canyon!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: [
      "Giant Item Card",
      "Deku Stick Item Card",
    ],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the dead end north of West Square.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located on the cliff in the dead end west of Fairy Fountain, accessible via Hookshot."
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [],
}

export const O7: Tile = {
  coords: {row: 6, col: 14},
}

export const O8: Tile = {
  coords: {row: 7, col: 14},
}

export const P1: Tile = {
  coords: {row: 0, col: 15},
}

export const P2: Tile = {
  coords: {row: 1, col: 15},
}

export const P3: Tile = {
  coords: {row: 2, col: 15},
}

export const P4: HWMapTile = {
  coords: {row: 3, col: 15},
  challenge: "Adventure Battle: Get to those troops before the others do! Lv.6",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Summoning Gate Lv.4 - Lana",
    clear: undefined,
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
      item: Items.BOMB,
      target: {
        row: 2,
        col: 8
      }
    },
  ],
}

export const P5: Tile = {
  coords: {row: 4, col: 15},
}

export const P6: Tile = {
  coords: {row: 5, col: 15},
}

export const P7: Tile = {
  coords: {row: 6, col: 15},
}

export const P8: Tile = {
  coords: {row: 7, col: 15},
}
