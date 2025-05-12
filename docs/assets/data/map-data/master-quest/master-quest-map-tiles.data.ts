import { Blockade, Difficulty } from "src/assets/data/enums"
import { HWMapTile } from "src/app/models"
import { Items } from "../../items.data"

export const A1: HWMapTile = {
  coords: {row: 0, col: 0},
  challenge: "Adventure Battle: Defeat the Demon King!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: [
      "Heart Container - Link (W. Rockface Keep)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located northwest from the Allied Base.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: undefined,
  },
  blockades: [],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 4,
        col: 10
      }
    },
  ],
}

export const A2: HWMapTile = {
  coords: {row: 1, col: 0},
  challenge: "Challenge Battle: Defeat 700 enemies in time!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.SOUTH],
  search: [],
}

export const A3: HWMapTile = {
  coords: {row: 2, col: 0},
  challenge: "Challenge Battle: Defeat 700 enemies in time!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Impa",
    clear: ["Recorder Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 6
      }
    },
  ],
}

export const A4: HWMapTile = {
  coords: {row: 3, col: 0},
  challenge: "Adventure Battle: Defeat the shadow beast!",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Demon Blade Lv.3 - Ghirahim",
    clear: undefined,
    treasure: [
      "Heart Container - Ghirahim (West Keep)",
      "Fairy Top - Skyloft Shirt (West Ruins)",
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
        row: 2,
        col: 13
      }
    },
    {
      item: Items.RECORDER,
      target: {
        row: 5,
        col: 6
      }
    },
  ],
}

export const A5: HWMapTile = {
  coords: {row: 4, col: 0},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.6",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Wizzro",
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

export const A6: HWMapTile = {
  coords: {row: 5, col: 0},
  challenge: "Challenge Battle: Defeat all enemies! Lv.5",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Volga",
    clear: ["Recorder Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST],
  search: [],
}

export const A7: HWMapTile = {
  coords: {row: 6, col: 0},
  challenge: "Challenge Battle: Rack up your KO count! Lv.7",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: undefined,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.RECORDER,
      target: {
        row: 6,
        col: 5
      }
    },
  ],
}

export const A8: HWMapTile = {
  coords: {row: 7, col: 0},
  challenge: "Challenge Battle: Rack up your KO count! Lv.12",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Master Quest) - Ganondorf",
      "Compass Item Card"
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: 199,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 8,
        col: 3
      }
    },
  ],
}

export const B1: HWMapTile = {
  coords: {row: 0, col: 1},
  challenge: "Challenge Battle: Fight through the royalty quiz!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Impa",
    clear: ["Digging Mitts Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 9
      }
    },
  ],
  quizAnswers: ["Zant", "Impa", "Zelda"],
}

export const B2: HWMapTile = {
  coords: {row: 1, col: 1},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.8",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Scepter Lv.3 - Cia",
    clear: undefined,
    treasure: [
      'Heart Container - Cia (Central Chamber)'
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.EAST, Blockade.SOUTH],
  search: [
    {
      item: Items.GODDESSHARP,
      target: {
        row: 4,
        col: 2
      }
    },
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 8
      }
    },
  ],
}

export const B3: HWMapTile = {
  coords: {row: 2, col: 1},
  challenge: "Adventure Battle: Defeat the enemy forces! Lv.3",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Light Sword Lv.3 - Toon Link",
    clear: undefined,
    treasure: ["Heart Container - Toon Link (South Keep)"]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.NORTH, Blockade.EAST],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 5,
        col: 13
      }
    },
  ],
}

export const B4: HWMapTile = {
  coords: {row: 3, col: 1},
  challenge: "Adventure Battle: Defend the allied keeps! Lv.1",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Volga",
    clear: ["Digging Mitts Item Card"],
    treasure: [
      "Piece of Heart - Volga (Arbiter's Keep)",
      "My Fairy - Lightning (Clifftop Keep [Pot])",
      "Fairy Food - Mushroom Spores (North Oasis [Pot])",
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

export const B5: HWMapTile = {
  coords: {row: 4, col: 1},
  challenge: "Adventure Battle: Capture the enemy keeps! Lv.1",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Guardian of Time - Lana",
      "Goddess's Harp Item Card",
    ],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the exact middle of the easternmost pathway in a small alcove.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST, Blockade.SOUTH],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 3,
        col: 12
      }
    },
  ],
}

export const B6: HWMapTile = {
  coords: {row: 5, col: 1},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.6",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Cutlass Lv.3 - Tetra",
    clear: ["Compass Item Card"],
    treasure: [
      'Heart Container - Tetra (Abandoned Fort)'
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.NORTH, Blockade.WEST],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 9
      }
    },
  ],
}

export const B7: HWMapTile = {
  coords: {row: 6, col: 1},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.8",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Goddess's Harp Item Card"],
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
      item: Items.GODDESSHARP,
      target: {
        row: 5,
        col: 3
      }
    },
  ],
}

export const B8: HWMapTile = {
  coords: {row: 7, col: 1},
  challenge: "Adventure Battle: Fight as a warrior of darkness! Lv.2",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Mask Lv.3 - Young Link",
    clear: undefined,
    treasure: [
      'Heart Container - Young Link (W. Boulder Keep)'
    ]
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: 199,
  },
  blockades: [],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 3,
        col: 13
      }
    },
  ],
}

export const C1: HWMapTile = {
  coords: {row: 0, col: 2},
  challenge: "Adventure Battle: Dash gallantly into battle!",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Hammer Lv.3 - Darunia",
    clear: ["Bomb Item Card"],
    treasure: [
      "Heart Container - Darunia (West Square)",
      "Fairy Accessory - Demon Lord Earrings (Exit Square)",
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
        row: 4,
        col: 6
      }
    },
  ],
}

export const C2: HWMapTile = {
  coords: {row: 1, col: 2},
  challenge: "Adventure Battle: Fight the chosen ones!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Shackle Lv.3 - Midna",
    clear: ["Compass Item Card"],
    treasure: ["Heart Container - Midna (South Field Keep)"]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.WEST, Blockade.SOUTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 8
      }
    },
  ],
}

export const C3: HWMapTile = {
  coords: {row: 2, col: 2},
  challenge: "Adventure Battle: Defeat the enemy forces! Lv.2",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Power Bracelet Item Card"],
    treasure: [
      "Piece of Heart - Cia (Town Center Keep)",
      "Fairy Top - Skyloft Shawl (West Town Keep)",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST],
  search: [],
}

export const C4: HWMapTile = {
  coords: {row: 3, col: 2},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.8",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "The Imprisoned's Pillar Material",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [Blockade.SOUTH],
  search: [],
}

export const C5: HWMapTile = {
  coords: {row: 4, col: 2},
  challenge: "Adventure Battle: Capture the enemy keeps! Lv.2",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Naginata Lv.3 - Impa",
    clear: ["Recorder Item Card"],
    treasure: ["Fairy Food - Sacred Water (Rocky Square [Pot])"]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 3
      }
    },
  ],
}

export const C6: HWMapTile = {
  coords: {row: 5, col: 2},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.9",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: ["Ladder Item Card"],
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

export const C7: HWMapTile = {
  coords: {row: 6, col: 2},
  challenge: "Adventure Battle: Battle across the field!",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Masked (Master Quest) - Cia",
      "Unmasked (Master Quest) - Cia",
      "Hatless (Master Quest) - Cia",
    ],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located just south of the West Room.",
      "Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
        row: 3,
        col: 6
      }
    },
  ],
}

export const C8: HWMapTile = {
  coords: {row: 7, col: 2},
  challenge: "Adventure Battle: Attack the Festival of Cuccos!",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Sail Lv.3 - King Daphnes",
    clear: ["Digging Mitts Item Card"],
    treasure: [
      "Heart Container - King Daphnes (East Field Keep)",
      "Fairy Top - Skyloft Shirt (W. Rockface Keep)",
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
      item: Items.CANDLE,
      target: {
        row: 1,
        col: 8
      }
    },
    {
      item: Items.GODDESSHARP,
      target: {
        row: 5,
        col: 6
      }
    },
  ],
}


export const D1: HWMapTile = {
  coords: {row: 0, col: 3},
  challenge: "Adventure Battle: Stop the healers from, well, healing!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Book of Sorcery Lv.3 - Lana",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.EAST],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 7,
        col: 2
      }
    },
  ],
}

export const D2: HWMapTile = {
  coords: {row: 1, col: 3},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.7",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Great Swords Lv.3 - Ganondorf",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 2
      }
    },
  ],
}

export const D3: HWMapTile = {
  coords: {row: 2, col: 3},
  challenge: "Challenge Battle: Rack up your KO count! Lv.6",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.WEST],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 3
      }
    },
  ],
}

export const D4: HWMapTile = {
  coords: {row: 3, col: 3},
  challenge: "Challenge Battle: Defeat all enemies! Lv.4",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.EAST, Blockade.SOUTH],
  search: [],
}

export const D5: HWMapTile = {
  coords: {row: 4, col: 3},
  challenge: "Challenge Battle: Defeat 800 enemies in time!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Ice Arrow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST],
  search: [],
}

export const D6: HWMapTile = {
  coords: {row: 5, col: 3},
  challenge: "Challenge Battle: Defeat all enemies! Lv.6",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 6
      }
    },
  ],
}

export const D7: HWMapTile = {
  coords: {row: 6, col: 3},
  challenge: "Challenge Battle: Rack up your KO count! Lv.10",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Piece of Heart - Wizzro",
    clear: ["Digging Mitts Item Card"],
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
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 6
      }
    },
  ],
}

export const D8: HWMapTile = {
  coords: {row: 7, col: 3},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.8",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Ice Arrow Item Card"],
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

export const E1: HWMapTile = {
  coords: {row: 0, col: 4},
  challenge: "Challenge Battle: Fight through the legendary warrior quiz!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.WEST, Blockade.SOUTH],
  search: [],
  quizAnswers: ["Ruto", "Agitha", "Ganondorf"],
}

export const E2: HWMapTile = {
  coords: {row: 1, col: 4},
  challenge: "Adventure Battle: Prevent reinforcements from arriving!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Crossbows Lv.3 - Linkle",
    clear: ["Ice Arrow Item Card"],
    treasure: [
      "Heart Container - Linkle (Town Entrance)",
      "Fairy Bottom - Skyloft Slacks (Central Keep)",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 11
      }
    },
  ],
}

export const E3: HWMapTile = {
  coords: {row: 2, col: 4},
  challenge: "Adventure Battle: Rescue the allied forces!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Boss) - Fi"],
    treasure: [
      'Fairy Food - Life Tree Fruit (Southwest Keep [Pot])'
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 4,
        col: 14
      }
    },
  ],
}

export const E4: HWMapTile = {
  coords: {row: 3, col: 4},
  challenge: "Adventure Battle: Defeat the gulf beast!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Ocarina Lv.3 - Skull Kid",
    clear: undefined,
    treasure: [
      "Heart Container - Skull Kid (West Temple)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located in the corner north from the Eastern Room.",
      "Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 4,
        col: 4
      }
    },
  ],
}

export const E5: HWMapTile = {
  coords: {row: 4, col: 4},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.5",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Raft Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST, Blockade.WEST],
  search: [],
}

export const E6: HWMapTile = {
  coords: {row: 5, col: 4},
  challenge: "Adventure Battle: Fight as a warrior of darkness! Lv.1",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Master Quest) - Wizzro"],
    treasure: [
      "Heart Container - Cia (Lakeside Keep)",
      "Fairy Bottoms - Skyloft Skirt (King's Hall)",
      "Fairy Food - Stamina Fruit (Lakeside Keep [Pot])",
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
      item: Items.WATERBOMB,
      target: {
        row: 3,
        col: 10
      }
    },
  ],
}

export const E7: HWMapTile = {
  coords: {row: 6, col: 4},
  challenge: "Adventure Battle: Defend the allied keeps! Lv.2",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Rapier Lv.3 - Zelda",
    clear: ["Power Bracelet Item Card"],
    treasure: [
      'Fairy Top - Skyloft Shirt (East Temple Hall)'
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 7
      }
    },
  ],
}

export const E8: HWMapTile = {
  coords: {row: 7, col: 4},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.10",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH, Blockade.EAST],
  search: [],
}

export const F1: HWMapTile = {
  coords: {row: 0, col: 5},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.10",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Balloon Lv.3 - Tingle",
    clear: ["Power Bracelet Item Card"],
    treasure: [
      "Heart Container - Tingle (Southeast Square)",
      "Fairy Food - Light Fruit (North Palace [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 7,
        col: 1
      }
    },
  ],
}

export const F2: HWMapTile = {
  coords: {row: 1, col: 5},
  challenge: "Adventure Battle: Run swiftly across the battlefield!",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Spear Lv.3 - Lana",
    clear: ["Bomb Item Card"],
    treasure: [
      'Heart Container - Lana (Town Center Keep)'
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 13
      }
    },
  ],
}

export const F3: HWMapTile = {
  coords: {row: 2, col: 5},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.4",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Digging Mitts Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST],
  search: [],
}

export const F4: HWMapTile = {
  coords: {row: 3, col: 5},
  challenge: "Challenge Battle: Destroy enemies and traitors alike! Lv.6",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Master Quest) - Ghirahim"],
    treasure: [
      "Heart Container - Fi (West Town Keep)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located just north of S. Rockface Keep.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH, Blockade.WEST],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 5,
        col: 4
      }
    },
  ],
}

export const F5: HWMapTile = {
  coords: {row: 4, col: 5},
  challenge: "Adventure Battle: Defeat the ocean beast!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Goddess's Harp Item Card"],
    treasure: [
      "My Fairy - Darkness (Southeast Keep [Pot])",
      "Fairy Food - Pumpkin Soup (Southwest Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST],
  search: [],
}

export const F6: HWMapTile = {
  coords: {row: 5, col: 5},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.3",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Hookshot Item Card"],
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
      item: Items.RAFT,
      target: {
        row: 4,
        col: 8
      }
    },
  ],
}

export const F7: HWMapTile = {
  coords: {row: 6, col: 5},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.9",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Giant Blade Lv.3 - Impa",
    clear: undefined,
    treasure: [
      'Fairy Top - Skyloft Shawl (Central Keep)'
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
      item: Items.GODDESSHARP,
      target: {
        row: 9,
        col: 4
      }
    },
    {
      item: Items.WATERBOMB,
      target: {
        row: 3,
        col: 6
      }
    },
  ],
}

export const F8: HWMapTile = {
  coords: {row: 7, col: 5},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.4",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Hylian Sword Lv.3 - Link",
    clear: ["Water Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.WEST],
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 8,
        col: 6
      }
    },
  ],
}

export const G1: HWMapTile = {
  coords: {row: 0, col: 6},
  challenge: "Adventure Battle: Prevent the sorceress's scheme!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Harp Lv.3 - Sheik",
    clear: ["Goddess's Harp Item Card"],
    treasure: [
      'Heart Container - Sheik (Southwest Keep)'
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.GODDESSHARP,
      target: {
        row: 5,
        col: 6
      }
    },
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 4
      }
    },
  ],
}

export const G2: HWMapTile = {
  coords: {row: 1, col: 6},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.9",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 7
      }
    },
  ],
}

export const G3: HWMapTile = {
  coords: {row: 2, col: 6},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.6",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.NORTH, Blockade.WEST],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 3
      }
    },
  ],
}

export const G4: HWMapTile = {
  coords: {row: 3, col: 6},
  challenge: "Challenge Battle: Destroy all Giant Bosses in time! Lv.4",
  additionalRule: "Master Quest Rule: Don't Get Hit!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [Blockade.EAST, Blockade.SOUTH],
  search: [],
}

export const G5: HWMapTile = {
  coords: {row: 4, col: 6},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.2",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Master Quest) - Impa"],
    treasure: [
      "Heart Container - Impa (Stock Room)",
      "Fairy Top - Skyloft Shirt (Stone Square)",
      "Fairy Food - Water Fruit (Stock Room [Pot])",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.NORTH, Blockade.WEST],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 7,
        col: 9
      }
    },
  ],
}

export const G6: HWMapTile = {
  coords: {row: 5, col: 6},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.2",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Recorder Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the dead end southeast of the East Temple.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 10
      }
    },
  ],
}

export const G7: HWMapTile = {
  coords: {row: 6, col: 6},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.2",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 99,
  },
  blockades: [Blockade.NORTH],
  search: [],
}

export const G8: HWMapTile = {
  coords: {row: 7, col: 6},
  challenge: "Adventure Battle: Fight as a warrior of water! Lv.1",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Piece of Heart - Cia",
    clear: ["Compass Item Card"],
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

export const H1: HWMapTile = {
  coords: {row: 0, col: 7},
  challenge: "Challenge Battle: Defeat all enemies! Lv.8",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: ["Compass Item Card"],
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
        row: 4,
        col: 10
      }
    },
  ],
}

export const H2: HWMapTile = {
  coords: {row: 1, col: 7},
  challenge: "Adventure Battle: Survive the attack of these powered-up enemies!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Magic Rod Lv.3 - Link",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: undefined,
  },
  blockades: [],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 9,
        col: 10
      }
    },
  ],
}

export const H3: HWMapTile = {
  coords: {row: 2, col: 7},
  challenge: "Challenge Battle: Fight through the mystery mastery quiz!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH],
  search: [],
  quizAnswers: ["Aeralfos", "Shield Moblin", "Big Poe"],
}

export const H4: HWMapTile = {
  coords: {row: 3, col: 7},
  challenge: "Adventure Battle: Defeat the island beast!",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: undefined,
    treasure: [
      "Fairy Top - Skyloft Apron (South Square)",
      "Fairy Food - Mushroom Spores (Enemy Base [Pot])",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH, Blockade.WEST],
  search: [],
}

export const H5: HWMapTile = {
  coords: {row: 4, col: 7},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.2",
  additionalRule: "Master Quest Rule: Don't Get Hit!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Piece of Heart - Cia",
    clear: ["Water Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH],
  search: [],
}

export const H6: HWMapTile = {
  coords: {row: 5, col: 7},
  challenge: "Challenge Battle: Rack up your KO count! Lv.2",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1000,
    minutes: undefined,
    damage: undefined,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH],
  search: [],
}

export const H7: HWMapTile = {
  coords: {row: 6, col: 7},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.1",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Candle Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located just to the east of where the path opens up into the large open area from Castle Keep.",
      "Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.NORTH],
  search: [],
}

export const H8: HWMapTile = {
  coords: {row: 7, col: 7},
  challenge: "Challenge Battle: Rack up your KO count! Lv.1",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Volga",
    clear: ["Compass Item Card"],
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

export const I1: HWMapTile = {
  coords: {row: 0, col: 8},
  challenge: "Adventure Battle: Fight as a warrior of water! Lv.2",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Great Fairy Lv.3 - Link",
    clear: ["Recorder Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.GODDESSHARP,
      target: {
        row: 7,
        col: 9
      }
    },
    {
      item: Items.ICEARROW,
      target: {
        row: 2,
        col: 8
      }
    },
  ],
}

export const I2: HWMapTile = {
  coords: {row: 1, col: 8},
  challenge: "Challenge Battle: Fight through the Triforce quiz!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 3,
        col: 11
      }
    },
  ],
  quizAnswers: ["Ganondorf", "Zelda", "Link"],
}

export const I3: HWMapTile = {
  coords: {row: 2, col: 8},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.3",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Master Quest) - Sheik"],
    treasure: ["Fairy Food - Stamina Fruit (East Keep [Pot])"]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 13
      }
    },
  ],
}

export const I4: HWMapTile = {
  coords: {row: 3, col: 8},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.1",
  additionalRule: "Master Quest Rule: Don't Get Hit!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 99,
  },
  blockades: [Blockade.EAST],
  search: [],
}

export const I5: HWMapTile = {
  coords: {row: 4, col: 8},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.1",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Piece of Heart - Wizzro",
    clear: ["Digging Mitts Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.EAST],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 2,
        col: 13
      }
    },
  ],
}

export const I6: HWMapTile = {
  coords: {row: 5, col: 8},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.1",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Candle Item Card"],
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
      item: Items.GODDESSHARP,
      target: {
        row: 5,
        col: 6
      }
    },
  ],
}

export const I7: HWMapTile = {
  coords: {row: 6, col: 8},
  challenge: "Adventure Battle: Defeat the commanders of two armies!",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: ["Hero's Clothes (Master Quest) - Link"],
    treasure: [
      "Heart Container - Toon Link (Fairy Fountain)",
      "Fairy Headwear - Bone Hat (Eastern Tree)",
      "Fairy Food - Pumpkin (Fairy Fountain [Pot])",
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
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 2
      }
    },
  ],
}

export const I8: HWMapTile = {
  coords: {row: 7, col: 8},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.1",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Recorder Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: undefined,
  },
  blockades: [],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 4
      }
    },
  ],
}

export const J1: HWMapTile = {
  coords: {row: 0, col: 9},
  challenge: "Challenge Battle: Rack up your KO count! Lv.8",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Ring Lv.3 - Wizzro",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: 199,
  },
  blockades: [Blockade.EAST, Blockade.SOUTH],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 4
      }
    },
  ],
}

export const J2: HWMapTile = {
  coords: {row: 1, col: 9},
  challenge: "Adventure Battle: Defeat the valley beast!",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Baton Lv.3 - Zelda",
    clear: undefined,
    treasure: [
      'Fairy Top - Outset Shirt (North Field Keep)'
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 3,
        col: 4
      }
    },
  ],
}

export const J3: HWMapTile = {
  coords: {row: 2, col: 9},
  challenge: "Challenge Battle: Rack up your KO count! Lv.3",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: undefined,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH],
  search: [
    {
      item: Items.RECORDER,
      target: {
        row: 6,
        col: 2
      }
    },
  ],
}

export const J4: HWMapTile = {
  coords: {row: 3, col: 9},
  challenge: "Challenge Battle: Defeat 600 enemies in time!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Volga",
    clear: ["Recorder Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST],
  search: [],
}

export const J5: HWMapTile = {
  coords: {row: 4, col: 9},
  challenge: "Challenge Battle: Rack up your KO count! Lv.5",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Ice Arrow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: undefined,
  },
  blockades: [Blockade.WEST],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 3
      }
    },
  ],
}

export const J6: HWMapTile = {
  coords: {row: 5, col: 9},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.5",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Compass Item Card"],
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

export const J7: HWMapTile = {
  coords: {row: 6, col: 9},
  challenge: "Adventure Battle: Fight as a warrior of light!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Goddess's Harp Item Card"],
    treasure: [
      'Fairy Top - Skyloft Shirt (North Palace)'
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.SOUTH],
  search: [],
}

export const J8: HWMapTile = {
  coords: {row: 7, col: 9},
  challenge: "Adventure Battle: Defeat the warriors of Skyloft!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Ice Arrow Item Card"],
    treasure: [
      'Fairy Bottom - Skyloft Slacks (Rockface Keep)'
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.GODDESSHARP,
      target: {
        row: 1,
        col: 6
      }
    },
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 8
      }
    },
  ],
}

export const K1: HWMapTile = {
  coords: {row: 0, col: 10},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.7",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Gauntlets Lv.3 - Link",
    clear: undefined,
    treasure: [
      'Heart Container - Link (Mountain Keep)'
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.EAST, Blockade.WEST],
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 5,
        col: 4
      }
    },
  ],
}

export const K2: HWMapTile = {
  coords: {row: 1, col: 10},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.6",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.HOOKSHOT,
      target: {
        row: 2,
        col: 5
      }
    },
  ],
}

export const K3: HWMapTile = {
  coords: {row: 2, col: 10},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.2",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH],
  search: [],
}

export const K4: HWMapTile = {
  coords: {row: 3, col: 10},
  challenge: "Adventure Battle: Defeat the Darknut Forces!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Impa's Breastplate Material",
    clear: undefined,
    treasure: [
      "Heart Container - Zant (East Field Keep)",
      "Fairy Bottom - Skyloft Skirt (North Field Keep)",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.WEST],
  search: [
    {
      item: Items.RECORDER,
      target: {
        row: 5,
        col: 6
      }
    },
  ],
}

export const K5: HWMapTile = {
  coords: {row: 4, col: 10},
  challenge: "Challenge Battle: Fight through the Twilight Princess Quiz!",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: ["Digging Mitts Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.GODDESSHARP,
      target: {
        row: 7,
        col: 10
      }
    },
  ],
  quizAnswers: ["Agitha", "Agitha", "Midna"],
}

export const K6: HWMapTile = {
  coords: {row: 5, col: 10},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.5",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Master Quest) - Agitha",
      "Power Bracelet Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 8,
        col: 5
      }
    },
  ],
}

export const K7: HWMapTile = {
  coords: {row: 6, col: 10},
  challenge: "Challenge Battle: Rack up your KO count! Lv.4",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: undefined,
    damage: 149,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 12
      }
    },
  ],
}

export const K8: HWMapTile = {
  coords: {row: 7, col: 10},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.5",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Power Bracelet Item Card"],
    treasure: [
      "Piece of Heart - Cia (Outskirts Keep)",
      "My Fairy - Water (Hilltop Keep [Pot])",
      "Fairy Food - Water Fruit (East Field Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH],
  search: [],
}

export const L1: HWMapTile = {
  coords: {row: 0, col: 11},
  challenge: "Adventure Battle: Defeat the warriors of Twilight!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Zora Scale Lv.3 - Ruto",
    clear: ["Goddess's Harp Item Card"],
    treasure: [
      'Fairy Top - Skyloft Apron (West Ruins)'
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST, Blockade.WEST],
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 4,
        col: 9
      }
    },
  ],
}

export const L2: HWMapTile = {
  coords: {row: 1, col: 11},
  challenge: "Adventure Battle: Defeat the mountain beast!",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Volga",
    clear: undefined,
    treasure: [
      "My Fairy - Light (Southeast Square [Pot])",
      "Fairy Food - Light Fruit (Southeast Square [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.GODDESSHARP,
      target: {
        row: 8,
        col: 3
      }
    },
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 12
      }
    },
  ],
}

export const L3: HWMapTile = {
  coords: {row: 2, col: 11},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.3",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.RECORDER,
      target: {
        row: 3,
        col: 5
      }
    },
  ],
}

export const L4: HWMapTile = {
  coords: {row: 3, col: 11},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.4",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Master Quest) - Midna"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the small room to the west of the North Oasis.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 8,
        col: 0
      }
    },
  ],
}

export const L5: HWMapTile = {
  coords: {row: 4, col: 11},
  challenge: "Challenge Battle: Defeat all enemies! Lv.2",
  additionalRule: "Master Quest Rule: Don't Get Hit!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Volga",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 2,
        col: 11
      }
    },
  ],
}

export const L6: HWMapTile = {
  coords: {row: 5, col: 11},
  challenge: "Adventure Battle: Defeat the Dinolfos Forces!",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Link",
    clear: undefined,
    treasure: [
      'Fairy Top - Skyloft Shawl (Fairy Fountain)'
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
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 2
      }
    },
  ],
}

export const L7: HWMapTile = {
  coords: {row: 6, col: 11},
  challenge: "Challenge Battle: Fight through the women's weapons quiz!",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [],
  search: [],
  quizAnswers: ["Lana", "Lana", "Midna"],
}

export const L8: HWMapTile = {
  coords: {row: 7, col: 11},
  challenge: "Adventure Battle: Defeat the Shield Moblin Forces! Lv.2",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Master Quest) - Zant"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located just outside the empty keep southeast from the North Palace.",
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
      item: Items.WATERBOMB,
      target: {
        row: 7,
        col: 8
      }
    },
  ],
}

export const M1: HWMapTile = {
  coords: {row: 0, col: 12},
  challenge: "Adventure Battle: Defeat all enemies! Lv.3",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Master Quest) - Lana"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.WEST],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 8,
        col: 11
      }
    },
  ],
}

export const M2: HWMapTile = {
  coords: {row: 1, col: 12},
  challenge: "Adventure Battle: Defeat the enemy forces! Lv.1",
  additionalRule: "Master Quest Rule: Don't Get Hit!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Hookshot Item Card"],
    treasure: [
      "Piece of Heart - Wizzro (East Keep)",
      "Fairy Top - Skyloft Shirt (West Ruins)",
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
      item: Items.POWERBRACELET,
      target: {
        row: 4,
        col: 11
      }
    },
  ],
}

export const M3: HWMapTile = {
  coords: {row: 2, col: 12},
  challenge: "Challenge Battle: Defeat all enemies! Lv.1",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.YELLOW,
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
  blockades: [Blockade.SOUTH],
  search: [],
}

export const M4: HWMapTile = {
  coords: {row: 3, col: 12},
  challenge: "Adventure Battle: Defeat the cliff beast!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Horse Lv.3 - Link",
    clear: undefined,
    treasure: [
      'Fairy Food - Life Tree Fruit (Enemy Base [Pot])'
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 7,
        col: 3
      }
    },
    {
      item: Items.RECORDER,
      target: {
        row: 4,
        col: 6
      }
    },
  ],
}

export const M5: HWMapTile = {
  coords: {row: 4, col: 12},
  challenge: "Challenge Battle: Defeat 500 enemies in time!",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH, Blockade.WEST],
  search: [],
}

export const M6: HWMapTile = {
  coords: {row: 5, col: 12},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.3",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Piece of Heart - Wizzro",
    clear: ["Digging Mitts Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH],
  search: [],
}

export const M7: HWMapTile = {
  coords: {row: 6, col: 12},
  challenge: "Adventure Battle: Defeat the forest dragon!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Dragon Spear Lv.3 - Volga",
    clear: undefined,
    treasure: [
      "Heart Container - Volga (N. Entrance Keep)",
      "Fairy Bottom - Skyloft Skirt (North Square)",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 2,
        col: 5
      }
    },
    {
      item: Items.GODDESSHARP,
      target: {
        row: 4,
        col: 2
      }
    },
  ],
}

export const M8: HWMapTile = {
  coords: {row: 7, col: 12},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.7",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 6
      }
    },
  ],
}

export const N1: HWMapTile = {
  coords: {row: 0, col: 13},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.4",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Ice Arrow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 9
      }
    },
  ],
}

export const N2: HWMapTile = {
  coords: {row: 1, col: 13},
  challenge: "Adventure Battle: Fight as a warrior of lightning! Lv.1",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Master Quest) - Darunia"],
    treasure: [
      "Heart Container - Sheik (East Room)",
      "Fairy Top - Skyloft Shawl (Lakeside Keep)",
      "Fairy Food - Sacred Water (East Room [Pot])",
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
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 3
      }
    },
  ],
}

export const N3: HWMapTile = {
  coords: {row: 2, col: 13},
  challenge: "Adventure Battle: Defeat the Big Poe Forces!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Master Quest) - Ruto"],
    treasure: [
      "Heart Container - Darunia (West Temple)",
      "Fairy Bottom - Skyloft Slacks (East Keep)",
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
        row: 1,
        col: 5
      }
    },
  ],
}

export const N4: HWMapTile = {
  coords: {row: 3, col: 13},
  challenge: "Challenge Battle: Fight through the tribe quiz!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.EAST, Blockade.WEST],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 4,
        col: 9
      }
    },
  ],
  quizAnswers: ["Ruto", "Impa", "Darunia"],
}

export const N5: HWMapTile = {
  coords: {row: 4, col: 13},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.3",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Compass Item Card"],
    treasure: [
      "My Fairy - Fire (W. Boulder Keep [Pot])",
      "Fairy Food - Pumpkin (East Keep [Pot])",
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
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 13
      }
    },
  ],
}

export const N6: HWMapTile = {
  coords: {row: 5, col: 13},
  challenge: "Challenge Battle: Fight through the action quiz!",
  additionalRule: "Master Quest Rule: No Item Attacks!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Goddess's Harp Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [],
  search: [],
  quizAnswers: ["Aeralfos", "Moblin", "Lizalfos"],
}

export const N7: HWMapTile = {
  coords: {row: 6, col: 13},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.9",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Zelda's Tiara Material",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.SOUTH],
  search: [],
}

export const N8: HWMapTile = {
  coords: {row: 7, col: 13},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.7",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Piece of Heart - Volga",
    clear: ["Recorder Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 6
      }
    },
  ],
}

export const O1: HWMapTile = {
  coords: {row: 0, col: 14},
  challenge: "Adventure Battle: Defeat the Shield Moblin Forces! Lv.1",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: ["Standard Outfit (Master Quest) - Volga"],
    treasure: [
      "Heart Container - Volga (North Palace)",
      "Piece of Heart - Volga (Southeast Square)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located south of the Lower Level East.",
      "Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST, Blockade.WEST],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 6,
        col: 5
      }
    },
  ],
}

export const O2: HWMapTile = {
  coords: {row: 1, col: 14},
  challenge: "Challenge Battle: Fight through the Ocarina of Time quiz!",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 12
      }
    },
  ],
  quizAnswers: ["Darunia", "Sheik", "Ruto"],
}

export const O3: HWMapTile = {
  coords: {row: 2, col: 14},
  challenge: "Adventure Battle: Defeat enemies while collecting treasure! Yay!",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Trident Lv.3 - Ganondorf",
    clear: ["Water Bomb Item Card"],
    treasure: [
      'Fairy Accessory - Demon Lord Earrings (Mountain Keep)'
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH, Blockade.EAST],
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 9,
        col: 10
      }
    },
  ],
}

export const O4: HWMapTile = {
  coords: {row: 3, col: 14},
  challenge: "Adventure Battle: Capture the enemy keeps! Lv.3",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Parasol Lv.3 - Agitha",
    clear: ["Compass Item Card"],
    treasure: [
      'Heart Container - Agitha (West Town Keep)'
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.SOUTH, Blockade.WEST],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 8,
        col: 3
      }
    },
  ],
}

export const O5: HWMapTile = {
  coords: {row: 4, col: 14},
  challenge: "Challenge Battle: Fight through the tricky quiz!",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Recorder Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.SOUTH],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 4,
        col: 10
      }
    },
  ],
  quizAnswers: ["Big Poe", "ReDead Knight", "Sheik"],
}

export const O6: HWMapTile = {
  coords: {row: 5, col: 14},
  challenge: "Adventure Battle: Fight as a warrior of lightning! Lv.2",
  additionalRule: "Master Quest Rule: Don't Get Hit!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Spinner Lv.3 - Link",
    clear: undefined,
    treasure: [
      'Fairy Bottom - Skyloft Slacks (Hilltop Keep)'
    ]
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.SOUTH],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 8,
        col: 6
      }
    },
  ],
}

export const O7: HWMapTile = {
  coords: {row: 6, col: 14},
  challenge: "Adventure Battle: Defeat the enemy forces! Lv.4",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Goddess Blade Lv.3 - Fi",
    clear: ["Candle Item Card"],
    treasure: [
      "Heart Container - Fi (Central Chamber)",
      "Fairy Top - Skyloft Apron (East Garden)",
      "Fairy Food - Pumpkin Soup (West Garden [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 14
      }
    },
    {
      item: Items.RECORDER,
      target: {
        row: 5,
        col: 6
      }
    },
  ],
}

export const O8: HWMapTile = {
  coords: {row: 7, col: 14},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.7",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Guardian of Time - Cia",
      "Goddess's Harp Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  blockades: [Blockade.NORTH],
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

export const P1: HWMapTile = {
  coords: {row: 0, col: 15},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.5",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Mirror Lv.3 - Twili Midna",
    clear: undefined,
    treasure: [
      'Heart Container - Twili Midna (Lakeside Keep)'
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: undefined,
  },
  blockades: [Blockade.WEST],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 5,
        col: 6
      }
    },
  ],
}

export const P2: HWMapTile = {
  coords: {row: 1, col: 15},
  challenge: "Adventure Battle: Defeat the warriors of time!",
  additionalRule: "Master Quest Rule: Don't Get Hit!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Dominion Rod Lv.3 - Zelda",
    clear: ["Water Bomb Item Card"],
    treasure: [
      'Fairy Top - Skyloft Apron (W. Boulder Keep)'
    ]
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.HOOKSHOT,
      target: {
        row: 0,
        col: 8
      }
    },
    {
      item: Items.ICEARROW,
      target: {
        row: 8,
        col: 1
      }
    },
  ],
}

export const P3: HWMapTile = {
  coords: {row: 2, col: 15},
  challenge: "Challenge Battle: Rack up your KO count! Lv.11",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Robes (Master Quest) - Zelda",
      "Compass Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: undefined,
  },
  blockades: [Blockade.NORTH, Blockade.WEST],
  search: [
    {
      item: Items.DIGGINGMITTS,
      target: {
        row: 7,
        col: 2
      }
    },
  ],
}

export const P4: HWMapTile = {
  coords: {row: 3, col: 15},
  challenge: "Adventure Battle: Take on the sword masters!",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Summoning Gate Lv.3 - Lana",
    clear: ["Compass Item Card"],
    treasure: [
      'Fairy Top - Demon Lord Shirt (N. Settlement)'
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
        row: 9,
        col: 5
      }
    },
    {
      item: Items.RAFT,
      target: {
        row: 4,
        col: 6
      }
    },
  ],
}

export const P5: HWMapTile = {
  coords: {row: 4, col: 15},
  challenge: "Challenge Battle: Defeat all enemies! Lv.7",
  additionalRule: "Master Quest Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.WEST],
  search: [],
}

export const P6: HWMapTile = {
  coords: {row: 5, col: 15},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.11",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: ["Digging Mitts Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: undefined,
  },
  blockades: [Blockade.WEST],
  search: [
    {
      item: Items.LADDER,
      target: {
        row: 5,
        col: 12
      }
    },
    {
      item: Items.LADDER,
      target: {
        row: 5,
        col: 12
      }
    },
  ],
}

export const P7: HWMapTile = {
  coords: {row: 6, col: 15},
  challenge: "Adventure Battle: Watch out for falling artillery fire!",
  additionalRule: "Master Quest Rule: Speed Run!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Scimitars Lv.3 - Zant",
    clear: ["Compass Item Card"],
    treasure: [
      'Fairy Bottom - Skyloft Skirt (Northeast Keep)'
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
      item: Items.LADDER,
      target: {
        row: 5,
        col: 12
      }
    },
    {
      item: Items.LADDER,
      target: {
        row: 5,
        col: 12
      }
    },
  ],
}

export const P8: HWMapTile = {
  coords: {row: 7, col: 15},
  challenge: "Challenge Battle: Rack up your KO count! Lv.9",
  additionalRule: "Master Quest Rule: No Guarding!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Raft Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: undefined,
  },
  blockades: [],
  search: [],
}
