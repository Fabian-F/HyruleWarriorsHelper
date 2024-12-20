import { Blockade, Difficulty } from "src/assets/data/enums"
import { HWMapTile } from "src/app/models"
import { Items } from "../../items.data"

export const A1: HWMapTile = {
  coords: {row: 0, col: 0},
  challenge: "Adventure Battle: Don't leave your troops hanging!",
  additionalRule: "Endless Night Rule: No Fairy Skills!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Masked (Wind Waker) - Cia",
      "Unmasked (Wind Waker) - Cia",
      "Hatless (Wind Waker) - Cia",
      "Hyoi Pear Item Card",
    ],
    treasure: [
      "Heart Container - Volga (Glutton's Keep)",
      "Fairy Food - Life Tree Fruit (Beast's Refuge [Pot])",
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
      item: Items.DEKULEAF,
      target: {
        row: 8,
        col: 12
      }
    },
  ],
}

export const A2: HWMapTile = {
  coords: {row: 1, col: 0},
  challenge: "Adventure Battle: Fight your way through fire and flames!",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Hero's Clothes (Wind Waker) - Link",
      "Deku Leaf Item Card",
    ],
    treasure: [
      "Heart Container - Ganondorf (Town Center Keep)",
      "Fairy Food - Water Fruit (Fairy Fountain [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: undefined,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 5
      }
    },
  ],
}

export const A3: HWMapTile = {
  coords: {row: 2, col: 0},
  challenge: "Challenge Battle: Rack up your KO count! Lv.6",
  additionalRule: "Endless Night Rule: No Fairy Skills!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Link",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: 199,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 13
      }
    },
  ],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const A4: HWMapTile = {
  coords: {row: 3, col: 0},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.1",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Medli",
    clear: ["Cannon Item Card"],
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
        row: 1,
        col: 8
      }
    },
  ],
}

export const A5: HWMapTile = {
  coords: {row: 4, col: 0},
  challenge: "Adventure Battle: Defeat your enemies...with kindness!",
  additionalRule: "Great Sea Rule: No Item Attacks!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "King Dodongo's Crystal Material",
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
        row: 2,
        col: 9
      }
    },
  ],
}

export const A6: HWMapTile = {
  coords: {row: 5, col: 0},
  challenge: "Challenge Battle: Rack up your KO count! Lv.1",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Tetra",
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

export const A7: HWMapTile = {
  coords: {row: 6, col: 0},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.1",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Medli",
    clear: ["Hyoi Pear Item Card"],
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
      item: Items.HYOIPEAR,
      target: {
        row: 3,
        col: 14
      }
    },
  ],
}

export const B1: HWMapTile = {
  coords: {row: 0, col: 1},
  challenge: "Adventure Battle: Send the ghosts packing!",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - Volga",
      "Salvage Arm Item Card",
    ],
    treasure: [
      "Heart Container - Darunia (Central Keep)",
      "Fairy Decoration - Twilight Aura (Arbiter's Keep)",
      "Fairy Food - All-Purpose Bait (Enemy Base [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: undefined,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 3,
        col: 4
      }
    },
  ],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const B2: HWMapTile = {
  coords: {row: 1, col: 1},
  challenge: "Challenge Battle: Protect the Bombchus! Lv.2",
  additionalRule: "Endless Night Rule: No Focus Spirit!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Salvage Arm Item Card"],
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
      item: Items.HOOKSHOT,
      target: {
        row: 1,
        col: 13
      }
    },
  ],
}

export const B3: HWMapTile = {
  coords: {row: 2, col: 1},
  challenge: "Adventure Battle: Turn the tables on the assassin!",
  additionalRule: "Great Sea Rule: No Item Attacks!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Manhandla's Sapling Material",
    clear: undefined,
    treasure: undefined
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
      item: Items.HEROSBOW,
      target: {
        row: 8,
        col: 4
      }
    },
  ],
}

export const B4: HWMapTile = {
  coords: {row: 3, col: 1},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.2",
  additionalRule: "Endless Night Rule: No Fairy Skills!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Hyoi Pear Item Card"],
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
      item: Items.DEKULEAF,
      target: {
        row: 1,
        col: 1
      }
    },
  ],
}

export const B5: HWMapTile = {
  coords: {row: 4, col: 1},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.1",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Wind Waker Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [],
  search: [],
}

export const B6: HWMapTile = {
  coords: {row: 5, col: 1},
  challenge: "Adventure Battle: Final Battle! Defeat the beast of Diamond Steppe Island!",
  additionalRule: "Endless Night Rule: Speed Run!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Hyoi Pear Item Card"],
    treasure: [
      "Piece of Heart - Medli (Central Keep)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located in the dead end north of East Field Keep. Use the hookshot to reach it.",
      "Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [],
}

export const B7: HWMapTile = {
  coords: {row: 6, col: 1},
  challenge: "Adventure Battle: Join the Rogue Forces to defeat the enemy!",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: undefined,
    treasure: [
      "Fairy Top - Skull Dress (Eastern Tree)",
      "Fairy Food - Elixir Soup (Western Tree [Pot])",
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

export const C1: HWMapTile = {
  coords: {row: 0, col: 2},
  challenge: "Adventure Battle: Trounce the champions of the sky!",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outift (Wind Waker) - Darunia",
      "Wind Waker Item Card",
    ],
    treasure: [
      "Heart Container - Volga (N. Rockface Keep)",
      "Fairy Food - Stamina Fruit (S. Rockface Keep [Pot])",
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
      item: Items.SALVAGEARM,
      target: {
        row: 3,
        col: 13
      }
    },
  ],
}

export const C2: HWMapTile = {
  coords: {row: 1, col: 2},
  challenge: "Adventure Battle: Trust in your troops' resilience!",
  additionalRule: "Endless Night Rule: Speed Run!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Impa",
    clear: ["Hyoi Pear Item Card"],
    treasure: [
      "Fairy Decoration - Insect Aura (West Ruins)",
      "Fairy Food - Light Fruit (West Temple [Pot])",
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
      item: Items.HYOIPEAR,
      target: {
        row: 1,
        col: 13
      }
    },
    {
      item: Items.SEACHART,
      target: {
        row: 9,
        col: 10
      }
    },
  ],
}

export const C3: HWMapTile = {
  coords: {row: 2, col: 2},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.1",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Deku Leaf Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 1,
        col: 6
      }
    },
  ],
}

export const C4: HWMapTile = {
  coords: {row: 3, col: 2},
  challenge: "Adventure Battle: Final battle! Defeat the beast of west Greatfish Isle!",
  additionalRule: "Endless Night Rule: No Special Attacks!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - King Daphnes",
      "Deku Leaf Item Card",
    ],
    treasure: [
      "Heart Container - Wizzro (North Square)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located in the dead end west of the Fairy Fountain. Use the hookshot to reach it.",
      "Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1."
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.EAST
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 1,
        col: 8
      }
    },
  ],
}

export const C5: HWMapTile = {
  coords: {row: 4, col: 2},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.1",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Hero's Bow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 99,
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
}

export const C6: HWMapTile = {
  coords: {row: 5, col: 2},
  challenge: "Adventure Battle: Hustle in the east and bustle in the west!",
  additionalRule: "Endless Night Rule: No Focus Spirit!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Salvage Arm Item Card"],
    treasure: [
      "Piece of Heart - Medli (South Square)",
      "Fairy Food - Carrot (West Square [Pot])",
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
      item: Items.HYOIPEAR,
      target: {
        row: 4,
        col: 2
      }
    },
    {
      item: Items.SEACHART,
      target: {
        row: 1,
        col: 14
      }
    },
  ],
}

export const C7: HWMapTile = {
  coords: {row: 6, col: 2},
  challenge: "Challenge Battle: Defeat 400 enemies before the Rogue Forces do!",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Medli",
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
    Blockade.EAST
  ],
  search: [],
}


export const D1: HWMapTile = {
  coords: {row: 0, col: 3},
  challenge: "Adventure Battle: The Cucco army rises once more!",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Salvage Arm Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located in the middle of the eastern path in a small alcove.",
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
      item: Items.HYOIPEAR,
      target: {
        row: 4,
        col: 12
      }
    },
  ],
}

export const D2: HWMapTile = {
  coords: {row: 1, col: 3},
  challenge: "Challenge Battle: Rack up your KO count! Lv.2",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Salvage Arm Item Card"],
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
      item: Items.DEKULEAF,
      target: {
        row: 8,
        col: 9
      }
    },
  ],
}

export const D3: HWMapTile = {
  coords: {row: 2, col: 3},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.2",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Cannon Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [],
  search: [],
}

export const D4: HWMapTile = {
  coords: {row: 3, col: 3},
  challenge: "Adventure Battle: Final battle! Defeat the beast of Greatfish Isle!",
  additionalRule: "Endless Night Rule: Speed Run!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Rito Harp Lv.2 - Medli",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Heart Container - Medli (Fairy Fountain)",
      "Fairy Food - All-Purpose Bait (Fairy Fountain [Pot])",
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
        row: 2,
        col: 12
      }
    },
  ],
}

export const D5: HWMapTile = {
  coords: {row: 4, col: 3},
  challenge: "Challenge Battle: Fight through the forgetful foe quiz!",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Medli",
    clear: ["Hyoi Pear Item Card"],
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

export const D6: HWMapTile = {
  coords: {row: 5, col: 3},
  challenge: "Adventure Battle: Those birds are so soft! Do we really need to fight?",
  additionalRule: "Endless Night Rule: Speed Run!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Fairy Food - Water Fruit (SE Sage Keep [Pot])"
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
      item: Items.HOOKSHOT,
      target: {
        row: 9,
        col: 1
      }
    },
  ],
}

export const D7: HWMapTile = {
  coords: {row: 6, col: 3},
  challenge: "Adventure Battle: Final battle! Defeat the beast of Outset Island!",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: [
      "Heart Container - Medli (South Field Keep)"
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
  search: [],
}

export const E1: HWMapTile = {
  coords: {row: 0, col: 4},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.5",
  additionalRule: "Endless Night Rule: No Fairy Skills!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Hyoi Pear Item Card"],
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
      item: Items.SALVAGEARM,
      target: {
        row: 9,
        col: 14
      }
    },
  ],
}

export const E2: HWMapTile = {
  coords: {row: 1, col: 4},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.1",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Deku Leaf Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: undefined,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [],
}

export const E3: HWMapTile = {
  coords: {row: 2, col: 4},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.2",
  additionalRule: "Endless Night Rule: No Special Attacks!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Medli",
    clear: ["Hero's Bow Item Card"],
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
      item: Items.SALVAGEARM,
      target: {
        row: 4,
        col: 1
      }
    },
  ],
}

export const E4: HWMapTile = {
  coords: {row: 3, col: 4},
  challenge: "Adventure Battle: Calm dissenters and crush your foe!",
  additionalRule: "Endless Night Rule: No Focus Spirit!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - Tingle",
      "Hyoi Pear Item Card",
    ],
    treasure: [
      "Heart Container - Skull Kid (W. Boulder Keep)",
      "Fairy Top - Merchant Coat (Stronghold)",
      "Fairy Food - Hyoi Pear (Stronghold [Pot])",
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
        col: 14
      }
    },
    {
      item: Items.POWERBRACELET,
      target: {
        row: 4,
        col: 14
      }
    },
  ],
}

export const E5: HWMapTile = {
  coords: {row: 4, col: 4},
  challenge: "Challenge Battle: Defeat all enemies! Lv.1",
  additionalRule: "Great Sea Rule: Double Damage!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Gohma's Lens Material",
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
      item: Items.CANNON,
      target: {
        row: 9,
        col: 2
      }
    },
  ],
}

export const E6: HWMapTile = {
  coords: {row: 5, col: 4},
  challenge: "Adventure Battle: Claim revenge against your foes!",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Sea Chart Item Card"],
    treasure: [
      "Fairy Bottom - Rancher Skirt (East Keep)",
      "Fairy Food - All-Purpose Bait (Eastern Room [Pot])",
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

export const E7: HWMapTile = {
  coords: {row: 6, col: 4},
  challenge: "Adventure Battle: Stop the fortifiers and barrier specialists!",
  additionalRule: "Endless Night Rule: No Focus Spirit!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - Ruto",
      "Hookshot Item Card",
    ],
    treasure: [
      "Heart Container - Wizzro (N. Entrance Keep)",
      "Fairy Decoration - Star Aura (S. Entrance Keep)",
      "Fairy Food - Mushroom Spores (Enemy Base [Pot])",
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
      item: Items.DEKULEAF,
      target: {
        row: 7,
        col: 2
      }
    },
  ],
}

export const F1: HWMapTile = {
  coords: {row: 0, col: 5},
  challenge: "Adventure Battle: Battle across the field!",
  additionalRule: "Great Sea Rule: Double Damage!",
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
      item: Items.CANNON,
      target: {
        row: 9,
        col: 2
      }
    },
  ],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const F2: HWMapTile = {
  coords: {row: 1, col: 5},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the bay!",
  additionalRule: "Endless Night Rule: Speed Run!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Sea Chart Item Card"],
    treasure: [
      "Piece of Heart - Medli (Stronghold)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located in the circular area just south of the Enemy Base.",
      "Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
  search: [],
}

export const F3: HWMapTile = {
  coords: {row: 2, col: 5},
  challenge: "Challenge Battle: Defeat 700 enemies before the Rogue Forces do!",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Hyoi Pear Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 4,
        col: 14
      }
    },
  ],
}

export const F4: HWMapTile = {
  coords: {row: 3, col: 5},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.2",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Medli",
    clear: ["Hero's Bow Item Card"],
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
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.2",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Salvage Arm Item Card"],
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

export const F6: HWMapTile = {
  coords: {row: 5, col: 5},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.3",
  additionalRule: "Endless Night Rule: No Fairy Skills!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Hero's Bow Item Card"],
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
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const F7: HWMapTile = {
  coords: {row: 6, col: 5},
  challenge: "Adventure Battle: Stamp out the enemy bosses!",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - Tetra",
      "Salvage Arm Item Card",
    ],
    treasure: [
      "Heart Container - Tingle (Central Chamber)",
      "Fairy Food - Sacred Water (Enemy Base [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: undefined,
  },
  blockades: [
    Blockade.EAST,
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

export const G1: HWMapTile = {
  coords: {row: 0, col: 6},
  challenge: "Adventure Battle: Watch out for falling artillery fire!",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - Toon Link",
      "Deku Leaf Item Card",
    ],
    treasure: [
      "Heart Container - Ganondorf (South Garden)",
      "Fairy Food - Hyoi Pear (South Garden [Pot])",
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
      item: Items.HYOIPEAR,
      target: {
        row: 5,
        col: 13
      }
    },
  ],
}

export const G2: HWMapTile = {
  coords: {row: 1, col: 6},
  challenge: "Adventure Battle: Help fight fire with fire!",
  additionalRule: "Endless Night Rule: Speed Run!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Medli",
    clear: ["Salvage Arm Item Card"],
    treasure: [
      "Piece of Heart - Medli (SW Sage Keep)",
      "Fairy Accessory - Gerudo Jewel (SE Sage Keep)",
      "Fairy Food - Carrot (Wind Plaza [Pot])",
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
  search: [],
}

export const G3: HWMapTile = {
  coords: {row: 2, col: 6},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.7",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Impa",
    clear: ["Deku Leaf Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [
    Blockade.EAST,
    Blockade.WEST
  ],
  search: [],
}

export const G4: HWMapTile = {
  coords: {row: 3, col: 6},
  challenge: "Adventure Battle: Run swiftly across the battlefield!",
  additionalRule: "Endless Night Rule: No Fairy Skills!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located just southwest of the Enemy Base.",
      "Complete the first mission and KO 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
      item: Items.DEKULEAF,
      target: {
        row: 1,
        col: 1
      }
    },
  ],
}

export const G5: HWMapTile = {
  coords: {row: 4, col: 6},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.5",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Deku Leaf Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH,
    Blockade.WEST
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 10
      }
    },
  ],
}

export const G6: HWMapTile = {
  coords: {row: 5, col: 6},
  challenge: "Challenge Battle: Defeat all enemies! Lv.2",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Compass Item Card"],
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

export const G7: HWMapTile = {
  coords: {row: 6, col: 6},
  challenge: "Adventure Battle: Grow your forces and face your foes!",
  additionalRule: "Great Sea Rule: No Item Attacks!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Zant's Helmet Material",
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
      item: Items.HEROSBOW,
      target: {
        row: 1,
        col: 9
      }
    },
  ],
}

export const H1: HWMapTile = {
  coords: {row: 0, col: 7},
  challenge: "Challenge Battle: Fight through the hometown quiz!",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Boomerang Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: undefined,
  },
  blockades: [
    Blockade.WEST
  ],
  search: [],
}

export const H2: HWMapTile = {
  coords: {row: 1, col: 7},
  challenge: "Adventure Battle: It's royalty's time to take the spotlight!",
  additionalRule: "Great Sea Rule: Don't Get Hit!",
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
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.BOOMERANG,
      target: {
        row: 1,
        col: 3
      }
    },
  ],
}

export const H3: HWMapTile = {
  coords: {row: 2, col: 7},
  challenge: "Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do! Lv.2",
  additionalRule: "Endless Night Rule: No Special Attacks!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Boomerang Item Card"],
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

export const H4: HWMapTile = {
  coords: {row: 3, col: 7},
  challenge: "Adventure Battle: Will you fall, or will you bloom?",
  additionalRule: "Endless Night Rule: Speed Run!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Piece of Heart - Medli (Lakeside Keep)",
      "Fairy Headwear - Hyrule Crown (East Room)",
      "Fairy Food - Sacred Water (Lakeside Keep [Pot])",
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
  search: [],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const H5: HWMapTile = {
  coords: {row: 4, col: 7},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.3",
  additionalRule: "Great Sea Rule: Don't Get Hit!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Helmaroc King's Mask Material",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: undefined,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.BOOMERANG,
      target: {
        row: 1,
        col: 3
      }
    },
  ],
}

export const H6: HWMapTile = {
  coords: {row: 5, col: 7},
  challenge: "Adventure Battle: Yesterday's foes are today's allies!",
  additionalRule: "Great Sea Rule: Double Damage!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Wizzro's Ring Material",
    clear: undefined,
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
        row: 4,
        col: 7
      }
    },
    {
      item: Items.POWERBRACELET,
      target: {
        row: 1,
        col: 5
      }
    },
  ],
}

export const H7: HWMapTile = {
  coords: {row: 6, col: 7},
  challenge: "Challenge Battle: Fight through the travel memories quiz!",
  additionalRule: "Engless Night Rule: No Healing!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Hyoi Pear Item Card"],
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

export const I1: HWMapTile = {
  coords: {row: 0, col: 8},
  challenge: "Adventure Battle: Final battle! Defeat the beast of Crescent Moon Island!",
  additionalRule: "Engless Night Rule: No Special Attacks!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Wind Waker Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located on the wall east and slightly south from the Temple Square.",
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
      item: Items.POWERBRACELET,
      target: {
        row: 9,
        col: 13
      }
    },
  ],
}

export const I2: HWMapTile = {
  coords: {row: 1, col: 8},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.4",
  additionalRule: "Engless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Cannon Item Card"],
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
      item: Items.DEKULEAF,
      target: {
        row: 3,
        col: 12
      }
    },
  ],
}

export const I3: HWMapTile = {
  coords: {row: 2, col: 8},
  challenge: "Adventure Battle: Fight the heroes of the Wind Waker!",
  additionalRule: "Endless Night Rule: No Focus Spirit!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Volga",
    clear: ["Hookshot Item Card"],
    treasure: [
      "Piece of Heart - Medli (Central Keep)",
      "Fairy Headwear - Usurper Crown (North Square)",
      "Fairy Food - Stamina Fruit (S. Entrance Keep [Pot])",
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
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 4,
        col: 12
      }
    },
  ],
}

export const I4: HWMapTile = {
  coords: {row: 3, col: 8},
  challenge: "Adventure Battle: It's curtain call for Medli's band!",
  additionalRule: "Endless Night Rule: No Fairy Skills!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - Twili Midna",
      "Salvage Arm Item Card",
    ],
    treasure: [
      "Heart Container - Cia (Southeast Keep)",
      "Fairy Food - Light Fruit (West Cannon Keep [Pot])",
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
      item: Items.HYOIPEAR,
      target: {
        row: 1,
        col: 6
      }
    },
  ],
}

export const I5: HWMapTile = {
  coords: {row: 4, col: 8},
  challenge: "Adventure Battle: A leader never sleeps!",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - Lana",
      "Hyoi Pear Item Card",
    ],
    treasure: [
      "Heart Container - Linkle (W. Rockface Keep)",
      "Fairy Top - Usurper Robe (Castle Keep)",
      "Fairy Food - Mushroom Spores (Fairy Fountain [Pot])",
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
      item: Items.DEKULEAF,
      target: {
        row: 3,
        col: 11
      }
    },
  ],
}

export const I6: HWMapTile = {
  coords: {row: 5, col: 8},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.1",
  additionalRule: "Endless Night Rule: No Special Attacks!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - King Daphnes",
    clear: ["Wind Waker Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH,
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 8,
        col: 14
      }
    },
  ],
}

export const I7: HWMapTile = {
  coords: {row: 6, col: 8},
  challenge: "Adventure Battle: Pierce through enemy defenses",
  additionalRule: "Endless Night Rule: Speed Run!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Piece of Heart - Medli (South Field Keep)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located southeast from the Enemy Base.",
      "Complete the first mission and KO 150 enemies with special attacks without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
      item: Items.HYOIPEAR,
      target: {
        row: 5,
        col: 1
      }
    },
  ],
}

export const J1: HWMapTile = {
  coords: {row: 0, col: 9},
  challenge: "Challenge Battle: Defeat all enemies! Lv.3",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Toon Link",
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

export const J2: HWMapTile = {
  coords: {row: 1, col: 9},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.2",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Link",
    clear: ["Deku Leaf Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [],
  search: [],
}

export const J3: HWMapTile = {
  coords: {row: 2, col: 9},
  challenge: "Challenge Battle: Learn the key to a balanced attack! Lv.3",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Salvage Arm Item Card"],
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
      item: Items.DEKULEAF,
      target: {
        row: 5,
        col: 2
      }
    },
  ],
}

export const J4: HWMapTile = {
  coords: {row: 3, col: 9},
  challenge: "Adventure Battle: Best the secretive enemies!",
  additionalRule: "Endless Night Rule: No Focus Spirit!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - Sheik",
      "Deku Leaf Item Card",
    ],
    treasure: [
      "Heart Container - Impa (King's Hall)",
      "Fairy Food - Elixir Soup (King's Hall [Pot])",
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
      item: Items.SALVAGEARM,
      target: {
        row: 7,
        col: 2
      }
    },
  ],
}

export const J5: HWMapTile = {
  coords: {row: 4, col: 9},
  challenge: "Adventure Battle: Stand united! Join forces on the front line!",
  additionalRule: "Great Sea Rule: No Item Attacks!",
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
    Blockade.WEST
  ],
  search: [
    {
      item: Items.HEROSBOW,
      target: {
        row: 1,
        col: 10
      }
    },
  ],
}

export const J6: HWMapTile = {
  coords: {row: 5, col: 9},
  challenge: "Adventure Battle: The hero and the sage back each other up!",
  additionalRule: "Great Sea Rule: Don't Get Hit!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Fi's Crystal Material",
    clear: undefined,
    treasure: undefined
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
      item: Items.BOOMERANG,
      target: {
        row: 4,
        col: 13
      }
    },
  ],
}

export const J7: HWMapTile = {
  coords: {row: 6, col: 9},
  challenge: "Challenge Battle: Rack up your KO count! Lv.3",
  additionalRule: "Endless Night Rule: No Special Attacks!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Tetra",
    clear: ["Compass Item Card"],
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

export const K1: HWMapTile = {
  coords: {row: 0, col: 10},
  challenge: "Challenge Battle: Put an end to the enemy's divisibe plan! Lv.5",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Skull Kid",
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
      item: Items.SALVAGEARM,
      target: {
        row: 2,
        col: 12
      }
    },
  ],
}

export const K2: HWMapTile = {
  coords: {row: 1, col: 10},
  challenge: "Adventure Battle: Defeat the Wizard Forces!",
  additionalRule: "Great Sea Rule: Double Damage!",
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
  search: [
    {
      item: Items.CANNON,
      target: {
        row: 1,
        col: 8
      }
    },
  ],
}

export const K3: HWMapTile = {
  coords: {row: 2, col: 10},
  challenge: "Challenge Battle: Defeat 1,000 enemies before the Rogue Forces do! Lv.1",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Medli",
    clear: ["Boomerang Item Card"],
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
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 14
      }
    },
  ],
}

export const K4: HWMapTile = {
  coords: {row: 3, col: 10},
  challenge: "Challenge Battle: Guard the allied keeps with your life! Lv.2",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Salvage Arm Item Card"],
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

export const K5: HWMapTile = {
  coords: {row: 4, col: 10},
  challenge: "Adventure Battle: Final battle! Defeat the beast of Bomb Island!",
  additionalRule: "Endless Night Rule: No Fairy Skills!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located southwest from the Statue Keep past the tree.",
      "Complete the first mission and capture five or more enemy Keeps without losing 40% health. It is located in the same place as Gold Skulltula #1."
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
      item: Items.HAMMER,
      target: {
        row: 7,
        col: 1
      }
    },
    {
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 2
      }
    },
  ],
}

export const K6: HWMapTile = {
  coords: {row: 5, col: 10},
  challenge: "Adventure Battle: Attend the Festival of Cuccos!",
  additionalRule: "Endless Night Rule: No Focus Spirit!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Rito Harp Lv.3 - Medli",
    clear: ["Wind Waker Item Card"],
    treasure: [
      "Heart Container - Medli (East Field Keep)",
      "Fairy Decoration - Korok Aura (W. Rockface Keep)",
      "Fairy Food - Life Tree Fruit (Fairy Fountain [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
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
        row: 6,
        col: 14
      }
    },
  ],
}

export const K7: HWMapTile = {
  coords: {row: 6, col: 10},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.3",
  additionalRule: "Endless Night Rule: No Focus Spirit!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Salvage Arm Item Card"],
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
  search: [],
}

export const L1: HWMapTile = {
  coords: {row: 0, col: 11},
  challenge: "Adventure Battle: A distant voice cries out for help!",
  additionalRule: "Endless Night Rule: No Fairy Skills!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Robes (Wind Waker) - Zelda",
      "Deku Leaf Item Card",
    ],
    treasure: [
      "Heart Container - Ganondorf (Lakeside Keep)",
      "Fairy Bottom - Usurper Pants (Temple Face Keep)",
      "Fairy Food - Elixir Soup (East Room [Pot])",
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
      item: Items.HYOIPEAR,
      target: {
        row: 1,
        col: 4
      }
    },
  ],
}

export const L2: HWMapTile = {
  coords: {row: 1, col: 11},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.6",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Medli",
    clear: ["Boomerang Item Card"],
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
      item: Items.DEKULEAF,
      target: {
        row: 1,
        col: 12
      }
    },
    {
      item: Items.HAMMER,
      target: {
        row: 8,
        col: 4
      }
    },
  ],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const L3: HWMapTile = {
  coords: {row: 2, col: 11},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.4",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Sea Chart Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [],
}

export const L4: HWMapTile = {
  coords: {row: 3, col: 11},
  challenge: "Adventure Battle: Lurking treachery, lurking shadows!",
  additionalRule: "Endless Night Rule: Speed Run!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Cia",
    clear: ["Deku Leaf Item Card"],
    treasure: [
      "Fairy Bottom - Hero's Trousers (Sacred Pedestal)",
      "Fairy Food - Water Fruit (South Square [Pot])"
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
      item: Items.SALVAGEARM,
      target: {
        row: 5,
        col: 14
      }
    },
  ],
}

export const L5: HWMapTile = {
  coords: {row: 4, col: 11},
  challenge: "Adventure Battle: Enjoy a leisurely Cucco-outing!",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Hero's Bow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: undefined,
  },
  blockades: [],
  search: [],
}

export const L6: HWMapTile = {
  coords: {row: 5, col: 11},
  challenge: "Challenge Battle: Put an end to the enemy's divisive plan! Lv.3",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Cannon Item Card"],
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
      item: Items.DEKULEAF,
      target: {
        row: 6,
        col: 2
      }
    },
  ],
  fullTileSearch: {
    item: Items.WINDWAKER,
    description: 'Use the Wind Waker anywhere to reach new maps.'
  }
}

export const L7: HWMapTile = {
  coords: {row: 6, col: 11},
  challenge: "Challenge Battle: Protect the Bombchu! Lv.3",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Boomerang Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [
    {
      item: Items.SALVAGEARM,
      target: {
        row: 7,
        col: 1
      }
    },
  ],
}

export const M1: HWMapTile = {
  coords: {row: 0, col: 12},
  challenge: "Challenge Battle: Rack up your KO count! Lv.4",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Salvage Arm Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: undefined,
    damage: 199,
  },
  blockades: [
    Blockade.SOUTH
  ],
  search: [
    {
      item: Items.DEKULEAF,
      target: {
        row: 8,
        col: 2
      }
    },
  ],
}

export const M2: HWMapTile = {
  coords: {row: 1, col: 12},
  challenge: "Adventure Battle: Fight alongside the women of the battlefield!",
  additionalRule: "Endless Night Rule: No Focus Spirit!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Rito Harp Lv.4 - Medli",
    clear: ["Salvage Arm Item Card"],
    treasure: [
      "Heart Container - Medli (Dragon Roost)",
      "Fairy Top - Rito Dress (Jail Watch Keep)",
      "Fairy Food - Light Fruit (Bomb Shop [Pot])",
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
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 15
      }
    },
  ],
}

export const M3: HWMapTile = {
  coords: {row: 2, col: 12},
  challenge: "Challenge Battle: Fight through the action quiz!",
  additionalRule: "Endless Night Rule: No Special Attacks!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Deku Leaf Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [
    Blockade.NORTH
  ],
  search: [],
}

export const M4: HWMapTile = {
  coords: {row: 3, col: 12},
  challenge: "Adventure Battle: Defeat the summoners before it's too late!",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - Fi",
      "Hyoi Pear Item Card",
    ],
    treasure: [
      "Heart Container - Ghirahim (West Cannon Keep)",
      "Fairy Food - Hyoi Pear (Enemy Base [Pot])",
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
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 2
      }
    },
  ],
}

export const M5: HWMapTile = {
  coords: {row: 4, col: 12},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.3",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Wizzro",
    clear: ["Compass Item Card"],
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
      item: Items.DEKULEAF,
      target: {
        row: 9,
        col: 12
      }
    },
  ],
}

export const M6: HWMapTile = {
  coords: {row: 5, col: 12},
  challenge: "Challenge Battle: Team up and defeat the enemy forces! Lv.4",
  additionalRule: "Endless Night Rule: No Guarding!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Hyoi Pear Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: undefined,
  },
  blockades: [
    Blockade.EAST
  ],
  search: [],
}

export const M7: HWMapTile = {
  coords: {row: 6, col: 12},
  challenge: "Adventure Battle: Final battle! Defeat the beast of the Five-Star Isles!",
  additionalRule: "Endless Night Rule: No Fairy Magic!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Sea Chart Item Card"],
    treasure: [
      "Piece of Heart - Medli (Central Square)",
      "Fairy Top - Rancher Poncho (West Square)",
      "Fairy Food - Carrot (North Palace [Pot])",
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
      item: Items.SEACHART,
      target: {
        row: 1,
        col: 14
      }
    },
  ],
}

export const N1: HWMapTile = {
  coords: {row: 0, col: 13},
  challenge: "Adventure Battle: Defeat the enemy celebrities!",
  additionalRule: "Great Sea Rule: Don't Get Hit!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Darunia's Bracelet Material",
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
      item: Items.BOOMERANG,
      target: {
        row: 2,
        col: 14
      }
    },
  ],
}

export const N2: HWMapTile = {
  coords: {row: 1, col: 13},
  challenge: "Adventure Battle: Confronting the opposing sorceress!",
  additionalRule: "Endless Night Rule: No Fairy Skills!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Sea Chart Item Card"],
    treasure: undefined,
    skulltulas: [
      "KO 1000 enemies. Located just north of West Town Keep",
      "Complete the first mission and defeat 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1"
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
      item: Items.DEKULEAF,
      target: {
        row: 2,
        col: 15
      }
    },
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 10
      }
    },
  ],
}

export const N3: HWMapTile = {
  coords: {row: 2, col: 13},
  challenge: "Adventure Battle: Final battle! Defeat the beast of Star Belt Archipelago!",
  additionalRule: "Endless Night Rule: No Focus Spirit!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - Midna",
      "Hammer Item Card",
    ],
    treasure: [
      "Heart Container - Zant (South Mine Keep)",
      "Fairy Headwear - Fox Mask (NE Sage Keep)",
      "Fairy Food - Mushroom Spores (northern empty keep [Pot])",
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
      item: Items.SALVAGEARM,
      target: {
        row: 2,
        col: 14
      }
    },
    {
      item: Items.SEACHART,
      target: {
        row: 9,
        col: 3
      }
    },
  ],
}

export const N4: HWMapTile = {
  coords: {row: 3, col: 13},
  challenge: "Challenge Battle: Rack up your KO count! Lv.5",
  additionalRule: "Endless Night Rule: No Healing!",
  difficulty: Difficulty.ORANGE,
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
    Blockade.WEST
  ],
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 6,
        col: 2
      }
    },
  ],
}

export const N5: HWMapTile = {
  coords: {row: 4, col: 13},
  challenge: "Adventure Battle: Defeat those who would borrow a weapon!",
  additionalRule: "Endless Night Rule: No Fairy Skills!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: [
      "Standard Outfit (Wind Waker) - Ghirahim",
      "Wind Waker Item Card",
    ],
    treasure: [
      "Heart Container - Link (Eastern Room)",
    ],
    skulltulas: [
      "KO 1000 enemies. Located north of the Eastern Room.",
      "Complete the first mission and defeat 1200 enemies without losing 40% health. It is located in the same place as Gold Skulltula #1"
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
      item: Items.SALVAGEARM,
      target: {
        row: 1,
        col: 12
      }
    },
  ],
}

export const N6: HWMapTile = {
  coords: {row: 5, col: 13},
  challenge: "Challenge Battle: Win the Rupee competition! Lv.4",
  additionalRule: "Endless Night Rule: No Focus Spirit!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Salvage Arm Item Card"],
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
  search: [
    {
      item: Items.HYOIPEAR,
      target: {
        row: 3,
        col: 14
      }
    },
    {
      item: Items.SEACHART,
      target: {
        row: 10,
        col: 5
      }
    },
  ],
}

export const N7: HWMapTile = {
  coords: {row: 6, col: 13},
  challenge: "Adventure Battle: Defeat your enemies...with kindness!",
  additionalRule: "Great Sea Rule: Double Damage!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Linkle's Compass Material",
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
      item: Items.CANNON,
      target: {
        row: 9,
        col: 9
      }
    },
  ],
}
