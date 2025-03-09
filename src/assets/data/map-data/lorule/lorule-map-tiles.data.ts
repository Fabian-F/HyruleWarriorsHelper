import { Blockade, Difficulty } from "src/assets/data/enums"
import { HWMapTile } from "src/app/models"
import { Items } from "../../items.data"

export const A1: HWMapTile = {
  coords: {row: 0, col: 0},
  challenge: "Adventure Battle: Defeat the Lizalfos Forces!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Rental Hammer Lv.3 - Ravio",
    clear: ["Power Glove Item Card"],
    treasure: [
      "Heart Container - Ravio (Stock Room)",
      "Fairy Top - Witch's Dress (Stone Square)",
      "Fairy Food - Life Tree Fruit (West Square [Pot])",
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
      item: Items.TORNADOROD,
      target: {
        row: 7,
        col: 3
      }
    },
  ],
}

export const A2: HWMapTile = {
  coords: {row: 1, col: 0},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.3",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Skull Kid",
      "Tornado Rod Item Card",
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
      item: Items.HAMMER_2,
      target: {
        row: 5,
        col: 12
      }
    },
  ],
}

export const A3: HWMapTile = {
  coords: {row: 2, col: 0},
  challenge: "Adventure Battle: Battlefield chaos! Territory tug-of-war!",
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
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 6,
        col: 5
      },
    },
  ],
}

export const A4: HWMapTile = {
  coords: {row: 3, col: 0},
  challenge: "Adventure Battle: Capture the enemy keeps! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Zant",
      "Baby Maiamai Item Card",
    ],
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
      item: Items.HAMMER_2,
      target: {
        row: 9,
        col: 4
      }
    },
  ],
}

export const A5: HWMapTile = {
  coords: {row: 4, col: 0},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.6",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Hammer Item Card"],
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
      item: Items.SANDROD,
      target: {
        row: 6,
        col: 4
      }
    },
  ],
}

export const A6: HWMapTile = {
  coords: {row: 5, col: 0},
  challenge: "Adventure Battle: Stop the Rogue Forces and defeat the enemy! Lv.1",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Crossbows Lv.4+ - Linkle",
    clear: ["Hammer Item Card"],
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
  ],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 4
      }
    },
  ],
}

export const A7: HWMapTile = {
  coords: {row: 6, col: 0},
  challenge: "Adventure Battle: Capture the enemy keeps! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Spinner Lv.4+ - Link",
    clear: ["Hammer Item Card"],
    treasure: [
      "Heart Container - Link (North Oasis)",
      "Fairy Food - Great Fairy's Tears (S. Desert Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH
  ],
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

export const A8: HWMapTile = {
  coords: {row: 7, col: 0},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.5",
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
  blockades: [],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 6,
        col: 3
      }
    },
  ],
}

export const B1: HWMapTile = {
  coords: {row: 0, col: 1},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.8",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Hammer Item Card"],
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

export const B2: HWMapTile = {
  coords: {row: 1, col: 1},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Bomb Item Card"],
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

export const B3: HWMapTile = {
  coords: {row: 2, col: 1},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.5",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Boomerang Item Card"],
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
      item: Items.HOOKSHOT_2,
      target: {
        row: 7,
        col: 0
      }
    },
  ],
}

export const B4: HWMapTile = {
  coords: {row: 3, col: 1},
  challenge: "Adventure Battle: Defeat the Darknut Forces! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Wall Painting Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located southeast of Hilltop Keep.",
      "Complete the first mission and defeat 100 enemies while using Focus Spirit without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
      item: Items.BABYMAIAMAI,
      target: {
        row: 2,
        col: 3
      }
    },
  ],
}

export const B5: HWMapTile = {
  coords: {row: 4, col: 1},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Tornado Rod Item Card"],
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
      item: Items.BABYMAIAMAI,
      target: {
        row: 3,
        col: 11
      }
    },
  ],
}

export const B6: HWMapTile = {
  coords: {row: 5, col: 1},
  challenge: "Challenge Battle: Fight through the action quiz!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Baby Maiamai Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.SOUTH,
  ],
  search: [],
  quizAnswers: ["Medli", "Yuga", "Ravio"],
}

export const B7: HWMapTile = {
  coords: {row: 6, col: 1},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Giant Blade Lv.4+ - Impa",
    clear: ["Power Glove Item Card"],
    treasure: [
      "Heart Container - Impa (South Mine Keep)",
      "Fairy Food - Meat (North Mine Keep [Pot])",
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
        row: 2,
        col: 6
      }
    },
  ],
}

export const B8: HWMapTile = {
  coords: {row: 7, col: 1},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.12",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Ganondorf",
      "Bomb Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [
    {
      item: Items.HAMMER_2,
      target: {
        row: 2,
        col: 12
      }
    },
  ],
}

export const C1: HWMapTile = {
  coords: {row: 0, col: 2},
  challenge: "Adventure Battle: Get more allied keeps and defeat the enemy! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Tornado Rod Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located on the plateau north from East Field Keep, accessible via Hookshot.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
      item: Items.SANDROD,
      target: {
        row: 5,
        col: 4
      }
    },
  ],
}

export const C2: HWMapTile = {
  coords: {row: 1, col: 2},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Boomerang Item Card"],
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

export const C3: HWMapTile = {
  coords: {row: 2, col: 2},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Baby Maiamai Item Card"],
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

export const C4: HWMapTile = {
  coords: {row: 3, col: 2},
  challenge: "Challenge Battle: Team up and destroy the enemy forces! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Bomb Item Card"],
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

export const C5: HWMapTile = {
  coords: {row: 4, col: 2},
  challenge: "Adventure Battle: Defeat the Dinolfos Forces!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Rental Hammer Lv.2 - Ravio",
    clear: ["Bomb Item Card"],
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
      item: Items.HAMMER_2,
      target: {
        row: 4,
        col: 3
      }
    },
  ],
}

export const C6: HWMapTile = {
  coords: {row: 5, col: 2},
  challenge: "Adventure Battle: Take on the warriors of Majora's Mask! Lv.1",
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
  blockades: [],
  search: [
    {
      item: Items.POWERGLOVE,
      target: {
        row: 4,
        col: 13
      }
    },
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 5,
        col: 7
      }
    },
  ],
}

export const C7: HWMapTile = {
  coords: {row: 6, col: 2},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Baby Maiamai Item Card"],
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

export const C8: HWMapTile = {
  coords: {row: 7, col: 2},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.1",
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
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.SANDROD,
      target: {
        row: 6,
        col: 3
      }
    },
  ],
}


export const D1: HWMapTile = {
  coords: {row: 0, col: 3},
  challenge: "Adventure Battle: Defeat the Fiery Aeralfos Forces! Lv.1",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Hookshot Item Card"],
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

export const D2: HWMapTile = {
  coords: {row: 1, col: 3},
  challenge: "Adventure Battle: Defeat the ReDead Knight Forces!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Wall Painting Item Card"],
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
  ],
  search: [],
}

export const D3: HWMapTile = {
  coords: {row: 2, col: 3},
  challenge: "Adventure Battle: Defeat the warriors of time! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - King Daphnes",
      "Bow Item Card",
    ],
    treasure: [
      "Heart Container - Yuga (East Temple)",
      "Fairy Bottom - Beautiful Trousers (West Ruins)",
      "Fairy Food - Pegasus Seeds (West Temple [Pot])",
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
      item: Items.BOOMERANG_2,
      target: {
        row: 6,
        col: 10
      }
    },
  ],
}

export const D4: HWMapTile = {
  coords: {row: 3, col: 3},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Wall Painting Item Card"],
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
      item: Items.POWERGLOVE,
      target: {
        row: 3,
        col: 5
      }
    },
  ],
}

export const D5: HWMapTile = {
  coords: {row: 4, col: 3},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Hammer Item Card"],
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
      item: Items.FIREROD,
      target: {
        row: 5,
        col: 9
      }
    },
  ],
}

export const D6: HWMapTile = {
  coords: {row: 5, col: 3},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Boomerang Item Card"],
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
  search: [],
}

export const D7: HWMapTile = {
  coords: {row: 6, col: 3},
  challenge: "Adventure Battle: Defeat the Darknut Forces! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Tingle",
      "Hammer Item Card",
    ],
    treasure: [
      "Fairy Top - Rabbit Robe (North Field Keep)",
      "Fairy Food - All-Purpose Bait (Abandoned Fort [Pot])",
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
      item: Items.BOMB,
      target: {
        row: 2,
        col: 5
      }
    },
  ],
}

export const D8: HWMapTile = {
  coords: {row: 7, col: 3},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Sand Rod Item Card"],
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

export const E1: HWMapTile = {
  coords: {row: 0, col: 4},
  challenge: "Adventure Battle: Final battle! Defeat the beast in the Tower of Hera!",
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
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 4,
        col: 5
      }
    },
  ],
}

export const E2: HWMapTile = {
  coords: {row: 1, col: 4},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Impa",
    clear: ["Bomb Item Card"],
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
      item: Items.BOOMERANG_2,
      target: {
        row: 2,
        col: 14
      }
    },
  ],
}

export const E3: HWMapTile = {
  coords: {row: 2, col: 4},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Hammer Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.SOUTH,
  ],
  search: [],
}

export const E4: HWMapTile = {
  coords: {row: 3, col: 4},
  challenge: "Adventure Battle: Final battle! Defeat the giant shadow in Hyrule Castle!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Fire Rod Item Card"],
    treasure: [
      "Fairy Top - Beautiful Cape (Fairy Fountain)",
      "Fairy Food - Meat (South Field Keep [Pot])",
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
  search: [],
}

export const E5: HWMapTile = {
  coords: {row: 4, col: 4},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.13",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Boomerang Item Card"],
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

export const E6: HWMapTile = {
  coords: {row: 5, col: 4},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.1",
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
  blockades: [
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.WEST,
  ],
  search: [],
}

export const E7: HWMapTile = {
  coords: {row: 6, col: 4},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: ["Ravio"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.BOW,
      target: {
        row: 5,
        col: 7
      }
    },
  ],
}

export const E8: HWMapTile = {
  coords: {row: 7, col: 4},
  challenge: "Adventure Battle: Get more allied keeps and defeat the enemy! Lv.1",
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
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 6,
        col: 11
      }
    },
  ],
}

export const F1: HWMapTile = {
  coords: {row: 0, col: 5},
  challenge: "Adventure Battle: Stop the Rogue Forces and defeat the enemy! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Hammer Item Card"],
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

export const F2: HWMapTile = {
  coords: {row: 1, col: 5},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.6",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Sand Rod Item Card"],
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

export const F3: HWMapTile = {
  coords: {row: 2, col: 5},
  challenge: "Adventure Battle: Destroy the army with boosted morale! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Bow Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located on the plateau in the dead end just northwest from W. Boulder Keep, accessible via Hookshot.",
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

export const F4: HWMapTile = {
  coords: {row: 3, col: 5},
  challenge: "Adventure Battle: Defeat the warriors of Skyloft! Lv.2",
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
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 5,
        col: 14
      }
    },
  ],
}

export const F5: HWMapTile = {
  coords: {row: 4, col: 5},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.12",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Lana",
      "Sand Rod Item Card",
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
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.HAMMER_2,
      target: {
        row: 5,
        col: 8
      }
    },
  ],
}

export const F6: HWMapTile = {
  coords: {row: 5, col: 5},
  challenge: "Adventure Battle: Defeat the Aeralfos Forces!",
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
      item: Items.ICEROD,
      target: {
        row: 7,
        col: 10
      }
    },
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 3,
        col: 14
      }
    },
  ],
}

export const F7: HWMapTile = {
  coords: {row: 6, col: 5},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.10",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: ["Baby Maiamai Item Card"],
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
      item: Items.BOOMERANG_2,
      target: {
        row: 8,
        col: 6
      }
    },
  ],
}

export const F8: HWMapTile = {
  coords: {row: 7, col: 5},
  challenge: "Adventure Battle: Defeat the warriors of Twilight!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Bomb Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located on the outer wall of the south exit of West Square.",
      "Complete the first mission and capture five or more enemy keeps without losing 40% health. It is located in the same place as Gold Skulltula #1."
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

export const G1: HWMapTile = {
  coords: {row: 0, col: 6},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Bomb Item Card"],
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
      item: Items.POWERGLOVE,
      target: {
        row: 5,
        col: 7
      }
    },
  ],
}

export const G2: HWMapTile = {
  coords: {row: 1, col: 6},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.10",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Tornado Rod Item Card"],
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

export const G3: HWMapTile = {
  coords: {row: 2, col: 6},
  challenge: "Challenge Battle: Defeat the shuffling forces! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Hammer Item Card"],
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

export const G4: HWMapTile = {
  coords: {row: 3, col: 6},
  challenge: "Adventure Battle: Defeat the Stone Moblin Forces!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Bomb Item Card"],
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
  search: [],
}

export const G5: HWMapTile = {
  coords: {row: 4, col: 6},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Wall Painting Item Card"],
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
      item: Items.BOOMERANG_2,
      target: {
        row: 6,
        col: 13
      }
    },
  ],
}

export const G6: HWMapTile = {
  coords: {row: 5, col: 6},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Bow Item Card"],
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
  search: [
    {
      item: Items.BABYMAIAMAI,
      target: {
        row: 6,
        col: 12
      }
    },
  ],
}

export const G7: HWMapTile = {
  coords: {row: 6, col: 6},
  challenge: "Adventure Battle: Final battle! Defeat the bird of Lake Hylia!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Tornado Rod Item Card"],
    treasure: [
      "Fairy Headwear - Queen's Crown (Jail Watch Keep)",
      "Fairy Food - Hyrule Bass (Bomb Shop [Pot])",
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
  search: [],
}

export const G8: HWMapTile = {
  coords: {row: 7, col: 6},
  challenge: "Challenge Battle: Stop the enemy merger! Lv.4",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Hammer Item Card"],
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

export const H1: HWMapTile = {
  coords: {row: 0, col: 7},
  challenge: "Adventure Battle: Get more allied keeps and defeat the enemy! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Great Swords Lv.4+ - Ganondorf",
    clear: ["Power Glove Item Card"],
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
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 6,
        col: 7
      }
    },
  ],
}

export const H2: HWMapTile = {
  coords: {row: 1, col: 7},
  challenge: "Adventure Battle: Defeat the warriors of time! Lv.2",
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
    Blockade.NORTH,
    Blockade.EAST,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 3,
        col: 8
      }
    },
  ],
}

export const H3: HWMapTile = {
  coords: {row: 2, col: 7},
  challenge: "Challenge Battle: Thwart the supercharged enemies! Lv.4",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Midna",
      "Boomerang Item Card",
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
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.FIREROD,
      target: {
        row: 8,
        col: 13
      }
    },
    {
      item: Items.HAMMER_2,
      target: {
        row: 2,
        col: 6
      }
    },
  ],
}

export const H4: HWMapTile = {
  coords: {row: 3, col: 7},
  challenge: "Adventure Battle: Defeat the Stone Moblin Forces!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Rental Hammer Lv.4 - Ravio",
    clear: ["Boomerang Item Card"],
    treasure: [
      "Fairy Decoration - Beautiful Aura (South Square)",
      "Fairy Food - Hyrule Bass (Sacred Pedestal [Pot])",
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
      item: Items.BOW,
      target: {
        row: 2,
        col: 8
      }
    },
  ],
}

export const H5: HWMapTile = {
  coords: {row: 4, col: 7},
  challenge: "Adventure Battle: Stop the Rogue Forces and defeat the enemy! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Hammer Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the northeast pointy dead end.",
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
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.BOOMERANG_2,
      target: {
        row: 5,
        col: 5
      }
    },
  ],
}

export const H6: HWMapTile = {
  coords: {row: 5, col: 7},
  challenge: "Adventure Battle: Destroy the army with boosted morale!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Rental Hammer Lv.4+ - Ravio",
    clear: ["Hookshot Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
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
      item: Items.BOMB,
      target: {
        row: 1,
        col: 3
      }
    },
  ],
}

export const H7: HWMapTile = {
  coords: {row: 6, col: 7},
  challenge: "Adventure Battle: Push, push! Shove, shove! Move that weight!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 2,
        col: 8
      }
    },
  ],
}

export const H8: HWMapTile = {
  coords: {row: 7, col: 7},
  challenge: "Challenge Battle: Fight through the legendary warrior quiz!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [],
  quizAnswers: ["Ghirahim", "Ravio", "Yuga"],
}

export const I1: HWMapTile = {
  coords: {row: 0, col: 8},
  challenge: "Adventure Battle: Defeat the warriors of Skyloft! Lv.1",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Picture Frame Lv.3 - Yuga",
    clear: ["Wall Painting Item Card"],
    treasure: undefined
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
      item: Items.BOOMERANG_2,
      target: {
        row: 5,
        col: 4
      }
    },
  ],
}

export const I2: HWMapTile = {
  coords: {row: 1, col: 8},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.1",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Bomb Item Card"],
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
      item: Items.TORNADOROD,
      target: {
        row: 6,
        col: 2
      }
    },
  ],
}

export const I3: HWMapTile = {
  coords: {row: 2, col: 8},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.4",
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
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 6,
        col: 5
      }
    },
  ],
}

export const I4: HWMapTile = {
  coords: {row: 3, col: 8},
  challenge: "Adventure Battle: The perfect land-grab scheme!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Baby Maiamai Item Card"],
    treasure: undefined
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
      item: Items.BOOMERANG_2,
      target: {
        row: 8,
        col: 12
      }
    },
  ],
}

export const I5: HWMapTile = {
  coords: {row: 4, col: 8},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.7",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Boomerang Item Card"],
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

export const I6: HWMapTile = {
  coords: {row: 5, col: 8},
  challenge: "Adventure Battle: Use diversionary tactics to defeat the enemy! Lv.1",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Epona Lv.4+ - Link",
    clear: ["Sand Rod Item Card"],
    treasure: [
      "Fairy Accessory - Queen's Earrings (SE Sage Keep)",
      "Fairy Food - Elixir Soup (SE Sage Keep [Pot])",
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
    Blockade.WEST,
  ],
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

export const I7: HWMapTile = {
  coords: {row: 6, col: 8},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the Desert Palace!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Fi",
      "Bomb Item Card",
    ],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.HAMMER_2,
      target: {
        row: 4,
        col: 11
      }
    },
  ],
}

export const I8: HWMapTile = {
  coords: {row: 7, col: 8},
  challenge: "Adventure Battle: Fight the heroes of the Wind Waker! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.POWERGLOVE,
      target: {
        row: 8,
        col: 5
      }
    },
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 6,
        col: 3
      }
    },
  ],
}

export const J1: HWMapTile = {
  coords: {row: 0, col: 9},
  challenge: "Adventure Battle: Final battle! Defeat the beast in the Skull Woods!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Agitha",
      "Hookshot Item Card",
    ],
    treasure: undefined
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
      item: Items.BOW,
      target: {
        row: 4,
        col: 3
      }
    },
  ],
}

export const J2: HWMapTile = {
  coords: {row: 1, col: 9},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Tornado Rod Item Card"],
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

export const J3: HWMapTile = {
  coords: {row: 2, col: 9},
  challenge: "Adventure Battle: Rescue the allied forces!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Bow Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located just northeast of West Field Keep.",
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
  search: [
    {
      item: Items.BABYMAIAMAI,
      target: {
        row: 5,
        col: 10
      }
    },
  ],
}

export const J4: HWMapTile = {
  coords: {row: 3, col: 9},
  challenge: "Adventure Battle: Defeat the dragon in the wastelands!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Ghirahim",
      "Hookshot Item Card",
    ],
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
      item: Items.SANDROD,
      target: {
        row: 3,
        col: 2
      }
    },
  ],
}

export const J5: HWMapTile = {
  coords: {row: 4, col: 9},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Wall Painting Item Card"],
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
      item: Items.BABYMAIAMAI,
      target: {
        row: 2,
        col: 5
      }
    },
  ],
}

export const J6: HWMapTile = {
  coords: {row: 5, col: 9},
  challenge: "Challenge Battle: Defeat all enemies! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Baby Maiamai Item Card"],
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

export const J7: HWMapTile = {
  coords: {row: 6, col: 9},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.9",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Baby Maiamai Item Card"],
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
      item: Items.TORNADOROD,
      target: {
        row: 9,
        col: 11
      }
    },
  ],
}

export const J8: HWMapTile = {
  coords: {row: 7, col: 9},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Boomerang Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.SANDROD,
      target: {
        row: 2,
        col: 13
      }
    },
  ],
}

export const K1: HWMapTile = {
  coords: {row: 0, col: 10},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Hylian Sword Lv.4+ - Link",
    clear: ["Tornado Rod Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST,
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

export const K2: HWMapTile = {
  coords: {row: 1, col: 10},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.5",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Bow Item Card"],
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
  search: [],
}

export const K3: HWMapTile = {
  coords: {row: 2, col: 10},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.3",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Sand Rod Item Card"],
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
      item: Items.TORNADOROD,
      target: {
        row: 4,
        col: 11
      }
    },
  ],
}

export const K4: HWMapTile = {
  coords: {row: 3, col: 10},
  challenge: "Adventure Battle: Defeat the Big Poe Forces!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Boomerang Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the dead end just northwest of the Enemy Base.",
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
    Blockade.EAST,
  ],
  search: [],
}

export const K5: HWMapTile = {
  coords: {row: 4, col: 10},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Sand Rod Item Card"],
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
  search: [],
}

export const K6: HWMapTile = {
  coords: {row: 5, col: 10},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.3",
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
    Blockade.EAST,
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 5,
        col: 7
      }
    },
  ],
}

export const K7: HWMapTile = {
  coords: {row: 6, col: 10},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Sand Rod Item Card"],
    treasure: [
      "Fairy Decoration - Shell Aura (West Keep)",
      "Fairy Food - Skullfish (West Keep [Pot])",
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
  search: [],
}

export const K8: HWMapTile = {
  coords: {row: 7, col: 10},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.4",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Yuga"],
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
      item: Items.BOOMERANG_2,
      target: {
        row: 1,
        col: 12
      }
    },
  ],
}

export const L1: HWMapTile = {
  coords: {row: 0, col: 11},
  challenge: "Adventure Battle: Fight the heroes of the Wind Waker! Lv.1",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Dominion Rod Lv.4+ - Zelda",
    clear: ["Power Glove Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST,
  ],
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

export const L2: HWMapTile = {
  coords: {row: 1, col: 11},
  challenge: "Adventure Battle: Use diversionary tactics to defeat the enemy! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Picture Frame Lv.4 - Yuga",
    clear: ["Hammer Item Card"],
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
  search: [
    {
      item: Items.BOOMERANG_2,
      target: {
        row: 3,
        col: 13
      }
    },
  ],
}

export const L3: HWMapTile = {
  coords: {row: 2, col: 11},
  challenge: "Adventure Battle: Defeat the Stalmaster Forces!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Book of Sorcery Lv.4+ - Lana",
    clear: ["Wall Painting Item Card"],
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
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 2,
        col: 8
      }
    },
    {
      item: Items.FIREROD,
      target: {
        row: 5,
        col: 8
      }
    },
  ],
}

export const L4: HWMapTile = {
  coords: {row: 3, col: 11},
  challenge: "Adventure Battle: Opposing witches from opposing worlds.",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Rapier Lv.4+ - Zelda",
    clear: ["Boomerang Item Card"],
    treasure: [
      "Fairy Top - Dark Beast Top (Bridge Keep)",
      "Fairy Food - Mushroom Spores (West Field Keep [Pot])",
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
      item: Items.BOMB,
      target: {
        row: 4,
        col: 5
      }
    },
  ],
}

export const L5: HWMapTile = {
  coords: {row: 4, col: 11},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.5",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Fire Rod Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.BOOMERANG_2,
      target: {
        row: 6,
        col: 5
      }
    },
  ],
}

export const L6: HWMapTile = {
  coords: {row: 5, col: 11},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Yuga",
    clear: ["Wall Painting Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.BABYMAIAMAI,
      target: {
        row: 4,
        col: 13
      }
    },
  ],
}

export const L7: HWMapTile = {
  coords: {row: 6, col: 11},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Boomerang Item Card"],
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

export const L8: HWMapTile = {
  coords: {row: 7, col: 11},
  challenge: "Adventure Battle: Final battle! Defeat the beast of Swamp Palace!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outift (Lorule) - Ruto",
      "Power Glove Item Card",
    ],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the small room east of Central Hall.",
      "Complete the first mission and defeat 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
      item: Items.BOW,
      target: {
        row: 6,
        col: 3
      }
    },
  ],
}

export const M1: HWMapTile = {
  coords: {row: 0, col: 12},
  challenge: "Challenge Battle: Defeat all enemies! Lv.2",
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
    Blockade.WEST
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 4,
        col: 5
      }
    },
  ],
}

export const M2: HWMapTile = {
  coords: {row: 1, col: 12},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Tornado Rod Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.SANDROD,
      target: {
        row: 8,
        col: 13
      }
    },
  ],
}

export const M3: HWMapTile = {
  coords: {row: 2, col: 12},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.5",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: ["Sand Rod Item Card"],
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
  search: [],
}

export const M4: HWMapTile = {
  coords: {row: 3, col: 12},
  challenge: "Adventure Battle: Final battle! Defeat the Demon King in Lorule Castle!",
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
    Blockade.NORTH,
    Blockade.EAST,
  ],
  search: [],
}

export const M5: HWMapTile = {
  coords: {row: 4, col: 12},
  challenge: "Adventure Battle: Fight the chosen ones!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Boomerang Item Card"],
    treasure: [
      "Fairy Decoration - Lorulean Earrings (SW Sage Keep)",
      "Fairy Food - Hyoi Pear (Faces Keep [Pot])",
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

export const M6: HWMapTile = {
  coords: {row: 5, col: 12},
  challenge: "Adventure Battle: Destroy enemies and traitors alike! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Linkle",
      "Bow Item Card",
    ],
    treasure: [
      "Heart Container - Ravio (Mountain Keep)",
      "Fairy Headwear - Rabbit Hood (South Field Keep)",
      "Fairy Food - Greengill (Mountain Keep [Pot])",
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
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.HAMMER_2,
      target: {
        row: 7,
        col: 1
      }
    },
  ],
}

export const M7: HWMapTile = {
  coords: {row: 6, col: 12},
  challenge: "Adventure Battle: Defeat the Icy Big Poe Forces!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Picture Frame Lv.2 - Yuga",
    clear: ["Bow Item Card"],
    treasure: [
      "Fairy Bottom - Queen's Skirt (West Ruins)",
      "Fairy Food - Bombfish (Enemy Base [Pot])",
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
      item: Items.BOOMERANG_2,
      target: {
        row: 6,
        col: 8
      }
    },
  ],
}

export const M8: HWMapTile = {
  coords: {row: 7, col: 12},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.1",
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
    Blockade.EAST,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 6,
        col: 11
      }
    },
  ],
}

export const N1: HWMapTile = {
  coords: {row: 0, col: 13},
  challenge: "Challenge Battle: Scout the battlefield in pursuit of victory! Lv.9",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Sand Rod Item Card"],
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

export const N2: HWMapTile = {
  coords: {row: 1, col: 13},
  challenge: "Adventure Battle: A hyper-focused army unit advances!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Wall Painting Item Card"],
    treasure: [
      "Fairy Bottom - Dark Beast Skirt (Bomb Shop)",
      "Fairy Food - Ordon Goat Cheese (Beast's Vault [Pot])",
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

export const N3: HWMapTile = {
  coords: {row: 2, col: 13},
  challenge: "Challenge Battle: Defeat the Copycat Soldiers! Lv.4",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Bomb Item Card"],
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
  search: [
    {
      item: Items.HOOKSHOT_2,
      target: {
        row: 5,
        col: 5
      }
    },
    {
      item: Items.TORNADOROD,
      target: {
        row: 6,
        col: 14
      }
    },
  ],
}

export const N4: HWMapTile = {
  coords: {row: 3, col: 13},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.4",
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
    Blockade.EAST,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 5,
        col: 14
      }
    },
  ],
}

export const N5: HWMapTile = {
  coords: {row: 4, col: 13},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.11",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Masked (Lorule) - Cia",
      "Unmasked (Lorule) - Cia",
      "Hatless (Lorule) - Cia",
      "Bomb Item Card",
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
    Blockade.SOUTH,
  ],
  search: [
    {
      item: Items.BOOMERANG_2,
      target: {
        row: 7,
        col: 13
      }
    },
    {
      item: Items.ICEROD,
      target: {
        row: 5,
        col: 3
      }
    },
  ],
}

export const N6: HWMapTile = {
  coords: {row: 5, col: 13},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.3",
  difficulty: Difficulty.BLUE,
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
    Blockade.SOUTH,
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 3,
        col: 14
      }
    },
  ],
}

export const N7: HWMapTile = {
  coords: {row: 6, col: 13},
  challenge: "Adventure Battle: A hyper-focused army unit advances!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Picture Frame Lv.4+ - Yuga",
    clear: ["Baby Maiamai Item Card"],
    treasure: undefined
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
      item: Items.BOMB,
      target: {
        row: 2,
        col: 14
      }
    },
  ],
}

export const N8: HWMapTile = {
  coords: {row: 7, col: 13},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.4",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Wall Painting Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  blockades: [
    Blockade.WEST,
  ],
  search: [],
}

export const O1: HWMapTile = {
  coords: {row: 0, col: 14},
  challenge: "Adventure Battle: Defeat the enemy forces!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Volga",
    clear: ["Boomerang Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the middle of the large open area just south of the Allied Base.",
      "Complete the first mission and capture five or more keeps without losing 40% health. It is located in the same place as Gold Skulltula #1."
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

export const O2: HWMapTile = {
  coords: {row: 1, col: 14},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.8",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Bomb Item Card"],
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
      item: Items.SANDROD,
      target: {
        row: 5,
        col: 13
      }
    },
  ],
}

export const O3: HWMapTile = {
  coords: {row: 2, col: 14},
  challenge: "Adventure Battle: Defeat the army of Big Blins!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Light Sword Lv.4+ - Toon Link",
    clear: ["Fire Rod Item Card"],
    treasure: [
      "Heart Container - Toon Link (East Room)",
      "Fairy Food - Elixir Soup (West Room [Pot])",
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
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 5,
        col: 4
      }
    },
  ],
}

export const O4: HWMapTile = {
  coords: {row: 3, col: 14},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.11",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Bow Item Card"],
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
      item: Items.TORNADOROD,
      target: {
        row: 8,
        col: 14
      }
    },
  ],
}

export const O5: HWMapTile = {
  coords: {row: 4, col: 14},
  challenge: "Adventure Battle: How sneaky! There are spies nearby!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Boomerang Item Card"],
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
  search: [],
}

export const O6: HWMapTile = {
  coords: {row: 5, col: 14},
  challenge: "Challenge Battle: Hunt down and defeat your foes! Lv.7",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Tornado Rod Item Card"],
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
  search: [
    {
      item: Items.BABYMAIAMAI,
      target: {
        row: 6,
        col: 13
      }
    },
    {
      item: Items.HOOKSHOT_2,
      target: {
        row: 0,
        col: 11
      }
    },
  ],
}

export const O7: HWMapTile = {
  coords: {row: 6, col: 14},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of Turtle Rock!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Impa",
      "Fire Rod Item Card",
    ],
    treasure: [
      "Fairy Top - Queen's Top (Stone Square)",
      "Fairy Food - Skullfish (Central Square [Pot])",
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
      item: Items.BOOMERANG_2,
      target: {
        row: 5,
        col: 13
      }
    },
  ],
}

export const O8: HWMapTile = {
  coords: {row: 7, col: 14},
  challenge: "Challenge Battle: Defeat all enemies! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ravio",
    clear: ["Boomerang Item Card"],
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

export const P1: HWMapTile = {
  coords: {row: 0, col: 15},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the Ice Ruins!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Darunia",
      "Ice Rod Item Card",
    ],
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
      item: Items.TORNADOROD,
      target: {
        row: 6,
        col: 12
      }
    },
  ],
}

export const P2: HWMapTile = {
  coords: {row: 1, col: 15},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.6",
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
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 3,
        col: 9
      }
    },
  ],
}

export const P3: HWMapTile = {
  coords: {row: 2, col: 15},
  challenge: "Adventure Battle: Use diversionary tactics to defeat the enemy! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Twili Midna",
      "Tornado Rod Item Card",
    ],
    treasure: [
      "Heart Container - Midna (N. Entrance Keep)",
      "Fairy Food - Hot Spring Water (Temple Square [Pot])",
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
  search: [
    {
      item: Items.HAMMER_2,
      target: {
        row: 8,
        col: 12
      }
    },
  ],
}

export const P4: HWMapTile = {
  coords: {row: 3, col: 15},
  challenge: "Adventure Battle: Final battle! Defeat the dragon of the Dark Palace!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Lorule) - Young Link",
      "Ice Rod Item Card",
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
      item: Items.BOW,
      target: {
        row: 1,
        col: 11
      }
    },
  ],
}

export const P5: HWMapTile = {
  coords: {row: 4, col: 15},
  challenge: "Adventure Battle: Defeat the Fiery Aeralfos Forces! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Link",
    clear: ["Bomb Item Card"],
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
      item: Items.BOW,
      target: {
        row: 5,
        col: 5
      }
    },
  ],
}

export const P6: HWMapTile = {
  coords: {row: 5, col: 15},
  challenge: "Adventure Battle: Defeat the disorderly forces! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Great Fairy Lv.4+ - Link",
    clear: ["Ice Rod Item Card"],
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
      item: Items.BOMB,
      target: {
        row: 1,
        col: 3
      }
    },
  ],
}

export const P7: HWMapTile = {
  coords: {row: 6, col: 15},
  challenge: "Challenge Battle: Scour the battlefield in pursuit of victory! Lv.13",
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
    Blockade.WEST,
  ],
  search: [
    {
      item: Items.WALLPAINTING,
      description: "Wall Painting can only be used after map clear.",
      target: {
        row: 2,
        col: 8
      }
    },
  ],
}

export const P8: HWMapTile = {
  coords: {row: 7, col: 15},
  challenge: "Adventure Battle: Take on the warriors of Majora's Mask! Lv.2",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Tornado Rod Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the dead end just northwest of the Deku Tree.",
      "Complete the first mission and defeat 150 enemies with Special Attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
      item: Items.BABYMAIAMAI,
      target: {
        row: 4,
        col: 9
      }
    },
  ],
}
