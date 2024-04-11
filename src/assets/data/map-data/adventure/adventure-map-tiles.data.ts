import { Difficulty, Blockade } from "src/app/enums"
import { HWMapTile } from "src/app/models"
import { Items } from "../../items.data"

export const A1: HWMapTile = {
  coords: {row: 0, col: 0},
  challenge: "Challenge Battle: Defeat 1,000 enemies in time!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Heart Container - Agitha"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
}

export const A2: HWMapTile = {
  coords: {row: 1, col: 0},
  challenge: "Adventure Battle: Stop the healers from, well, healing!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Keaton Mask Material",
    clear: undefined,
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
        col: 9
      },
      description: "Use a bomb on the second wall to the right of the northern stairs"
    }
  ]
}

export const A3: HWMapTile = {
  coords: {row: 2, col: 0},
  challenge: "Adventure Battle: Defeat the Dinolfos Forces!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Impa",
    clear: undefined,
    treasure: [
      "Piece of Heart - Toon Link (West Square)",
      "My Fairy - Fire (Fairy Fountain [Jar])",
      "Fairy Food - Weird Egg (Dark Forest Keep [Jar])",
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
      item: Items.DIGGINGMITS,
      target: {
        row: 10,
        col: 13
      }
    }
  ]
}

export const A4: HWMapTile = {
  coords: {row: 3, col: 0},
  challenge: "Adventure Battle: Defeat the Shield Moblin Forces! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: undefined,
    treasure: [
      "Piece of Heart - Zant (Southeast Square)",
      "Fairy Food - Odd Mushroom (Fairy Fountain [Pot])",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 4,
        col: 2
      }
    }
  ]
}

export const A5: HWMapTile = {
  coords: {row: 4, col: 0},
  challenge: "Adventure Battle: Defeat the Darknut Forces! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: undefined,
    treasure: [
      "Piece of Heart - Agitha (South Field Keep)",
      "Fairy Decoration - Sheikah Facepaint (North Field Keep)",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  search: [
    {
      item: Items.DIGGINGMITS,
      target: {
        row: 4,
        col: 5
      }
    }
  ]
}

export const A6: HWMapTile = {
  coords: {row: 5, col: 0},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.6",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST]
}

export const A7: HWMapTile = {
  coords: {row: 6, col: 0},
  challenge: "Challenge Battle: Defeat all enemies! Lv.7",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Goddess's Harp Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH]
}

export const A8: HWMapTile = {
  coords: {row: 7, col: 0},
  challenge: "Adventure Battle: Defeat the enemy forces! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Great Fairy Lv.1 - Link",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 5,
        col: 1
      }
    }
  ]
}

export const B1: HWMapTile = {
  coords: {row: 0, col: 1},
  challenge: "Adventure Battle: Defend the allied keeps! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Dominion Rod Lv.1 - Zelda",
    clear: undefined,
    treasure: [
      "Heart Container - Zelda (East Goron Keep)",
      "Piece of Heart - Zelda (Stronghold)",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 9
      },
      description: "Use a bomb on the northern wall"
    },
    {
      item: Items.GODDESSHARP,
      target: {
        row: 2,
        col: 12
      },
      description: "Use a harp on the blue butterflies"
    }
  ]
}

export const B2: HWMapTile = {
  coords: {row: 1, col: 1},
  challenge: "Challenge Battle: Fight through the royalty quiz!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Ice Arrow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.EAST, Blockade.SOUTH],
  search: [
    {
      item: Items.DIGGINGMITS,
      target: {
        row: 6,
        col: 11
      }
    }
  ]
}

export const B3: HWMapTile = {
  coords: {row: 2, col: 1},
  challenge: "Adventure Battle: Defeat the warriors of Twilight!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Spinner Lv.1 - Link",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 9
      }
    }
  ]
}

export const B4: HWMapTile = {
  coords: {row: 3, col: 1},
  challenge: "Challenge Battle: Defeat all enemies! Lv.4",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Recorder Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
}

export const B5: HWMapTile = {
  coords: {row: 4, col: 1},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.7",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Ice Arrow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [Blockade.EAST, Blockade.SOUTH]
}

export const B6: HWMapTile = {
  coords: {row: 5, col: 1},
  challenge: "Adventure Battle: Capture the enemy keeps! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: ["Knight of Skyloft - Link"],
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.WEST],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 9
      }
    }
  ]
}

export const B7: HWMapTile = {
  coords: {row: 6, col: 1},
  challenge: "Challenge Battle: Defeat 700 enemies in time! Lv.3",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Digging Mitts Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
}

export const B8: HWMapTile = {
  coords: {row: 7, col: 1},
  challenge: "Adventure Battle: Defeat the commanders of two armies! Lv.3",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: undefined,
    clear: ["Skyloft Robes - Zelda"],
    treasure: [
      "Heart Container - Zelda (Eastern Room)",
      "Piece of Heart - Zelda (South Temple)",
      "Fairy Top - Spirit Dress (East Keep)",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 5
      }
    },
    {
      item: Items.GODDESSHARP,
      target: {
        row: 7,
        col: 11
      }
    }
  ]
}

export const C1: HWMapTile = {
  coords: {row: 0, col: 2},
  challenge: "Adventure Battle: Fight as a warrior of darkness! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: undefined,
    treasure: [
      "Piece of Heart - Skull Kid (Central Keep)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 4,
        col: 11
      }
    }
  ]
}

export const C2: HWMapTile = {
  coords: {row: 1, col: 2},
  challenge: "Adventure Battle: Be like a magician and make your foes disappear!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Zant",
    clear: undefined,
    treasure: [
      "Piece of Heart - Zant (W. Mountain Keep)",
      "Fairy Bottoms - Royal Skirt (West Keep)",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.WEST, Blockade.SOUTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 8
      }
    }
  ]
}

export const C3: HWMapTile = {
  coords: {row: 2, col: 2},
  challenge: "Adventure Battle: Defeat the shadow beast!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Agitha's Pendant Material",
    clear: undefined,
    treasure: [
      "Heart Container - Agitha (Rocky Square)",
      "Piece of Heart - Agitha (Outskirts Keep)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST]
}

export const C4: HWMapTile = {
  coords: {row: 3, col: 2},
  challenge: "Challenge Battle: Defeat 600 enemies in time! Lv.1",
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
  blockades: [Blockade.SOUTH]
}

export const C5: HWMapTile = {
  coords: {row: 4, col: 2},
  challenge: "Adventure Battle: Defeat the primordial beast!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Ladder Item Card"],
    treasure: [
      "Piece of Heart - Sheik (Statue Keep)",
      "Gold Skulltula x2",
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
      item: Items.Recorder,
      target: {
        row: 4,
        col: 6
      }
    },
    {
      item: Items.DIGGINGMITS,
      target: {
        row: 4,
        col: 14
      }
    }
  ]
}

export const C6: HWMapTile = {
  coords: {row: 5, col: 2},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.7",
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
}

export const C7: HWMapTile = {
  coords: {row: 6, col: 2},
  challenge: "Adventure Battle: Defeat enemies while collecting treasure! Yay!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Ghirahim's Cape Material",
    clear: undefined,
    treasure: [
      "Heart Container - Zant (Fairy Fountain)",
      "Piece of Heart - Young Link (Castle Keep)",
      "Fairy Accessory - Demon Lord Earrings (Mountain Keep)",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
}

export const C8: HWMapTile = {
  coords: {row: 7, col: 2},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.10",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Ice Arrow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 5,
        col: 5
      }
    }
  ]
}


export const D1: HWMapTile = {
  coords: {row: 0, col: 3},
  challenge: "Adventure Battle: Fight the chosen ones!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: undefined,
    treasure: [
      "Piece of Heart - Agitha (Central Keep)",
      "Fairy Headwear - Royal Hood (Castle Keep)",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.EAST],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 4,
        col: 7
      }
    }
  ]
}

export const D2: HWMapTile = {
  coords: {row: 1, col: 3},
  challenge: "Adventure Battle: Dash gallantly into battle!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: undefined,
    treasure: [
      "Piece of Heart - Twili Midna (South Square)",
      "Gold Skulltula x2",
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
      item: Items.BOMB,
      target: {
        row: 1,
        col: 2
      }
    },
    {
      item: Items.GODDESSHARP,
      target: {
        row: 5,
        col: 7
      }
    }
  ]
}

export const D3: HWMapTile = {
  coords: {row: 2, col: 3},
  challenge: "Challenge Battle: Defeat all enemies! Lv.5",
  difficulty: Difficulty.PURPLE,
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
  blockades: [Blockade.NORTH, Blockade.WEST],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 3
      }
    }
  ]
}

export const D4: HWMapTile = {
  coords: {row: 3, col: 3},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.5",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST, Blockade.SOUTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 10
      }
    }
  ]
}

export const D5: HWMapTile = {
  coords: {row: 4, col: 3},
  challenge: "Challenge Battle: Defeat 700 enemies in time! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Goddess's Harp Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST],
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 5,
        col: 6
      }
    }
  ]
}

export const D6: HWMapTile = {
  coords: {row: 5, col: 3},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.8",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Water Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
}

export const D7: HWMapTile = {
  coords: {row: 6, col: 3},
  challenge: "Challenge Battle: Defeat 700 enemies in time! Lv.1",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 6
      }
    }
  ]
}

export const D8: HWMapTile = {
  coords: {row: 7, col: 3},
  challenge: "Challenge Battle: Fight through the mystery mastery quiz!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
}

export const E1: HWMapTile = {
  coords: {row: 0, col: 4},
  challenge: "Challenge Battle: Fight through the Triforce quiz!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.WEST, Blockade.SOUTH]
}

export const E2: HWMapTile = {
  coords: {row: 1, col: 4},
  challenge: "Adventure Battle: Attend the Festival of Cuccos!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH]
}

export const E3: HWMapTile = {
  coords: {row: 2, col: 4},
  challenge: "Challenge Battle: Fight through the action quiz!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Compass Item Card"],
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
      item: Items.POWERBRACELET,
      target: {
        row: 4,
        col: 14
      }
    }
  ]
}

export const E4: HWMapTile = {
  coords: {row: 3, col: 4},
  challenge: "Adventure Battle: Rescue the allied forces! Lv.2",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: undefined,
    treasure: [
      "Piece of Heart - Ghirahim (West Keep)",
      "Fairy Top - Sheikah Shirt (Southwest Keep)",
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
    }
  ]
}

export const E5: HWMapTile = {
  coords: {row: 4, col: 4},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.8",
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
  blockades: [Blockade.EAST, Blockade.WEST],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 8,
        col: 2
      }
    }
  ]
}

export const E6: HWMapTile = {
  coords: {row: 5, col: 4},
  challenge: "Adventure Battle: Defend the allied keeps! Lv.1",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: undefined,
    treasure: [
      "Piece of Heart - Fi (Academy Keep)",
      "Fairy Decoration - Sheikah Facepaint (S. Rockface Keep)",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 1,
        col: 10
      }
    }
  ]
}

export const E7: HWMapTile = {
  coords: {row: 6, col: 4},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.9",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [Blockade.SOUTH]
}

export const E8: HWMapTile = {
  coords: {row: 7, col: 4},
  challenge: "Adventure Battle: Defeat the wasteland beast!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Raft Item Card"],
    treasure: [
      "Piece of Heart - Tingle (Arbiter's Keep)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST]
}

export const F1: HWMapTile = {
  coords: {row: 0, col: 5},
  challenge: "Adventure Battle: Defeat the Demon King!",
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
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 6,
        col: 5
      }
    }
  ]
}

export const F2: HWMapTile = {
  coords: {row: 1, col: 5},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.14",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Piece of Heart - Ganondorf",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  blockades: [Blockade.NORTH]
}

export const F3: HWMapTile = {
  coords: {row: 2, col: 5},
  challenge: "Adventure Battle: Fight as a warrior of darkness! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: ["Twili Midna"],
    treasure: [
      "Heart Container - Midna (South Field Keep)",
      "Piece of Heart - Twili Midna (Outskirts Keep)",
      "My Fairy - Lightning (North Field Keep [Pot])",
      "Fairy Food - Magic Beans (West Field Keep [Pot])",
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
      item: Items.POWERBRACELET,
      target: {
        row: 6,
        col: 2
      }
    }
  ]
}

export const F4: HWMapTile = {
  coords: {row: 3, col: 5},
  challenge: "Challenge Battle: Defeat 600 enemies in time! Lv.2",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Piece of Heart - Agitha",
    clear: ["Power Bracelet Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH, Blockade.WEST]
}

export const F5: HWMapTile = {
  coords: {row: 4, col: 5},
  challenge: "Adventure Battle: Defeat the ocean beast!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Water Bomb Item Card"],
    treasure: [
      "Piece of Heart - Twili Midna (West Field Keep)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST]
}

export const F6: HWMapTile = {
  coords: {row: 5, col: 5},
  challenge: "Challenge Battle: Fight through the Twilight Princess quiz!",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Piece of Heart - Midna",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  search: [
    {
      item: Items.RAFT,
      target: {
        row: 4,
        col: 8
      }
    }
  ]
}

export const F7: HWMapTile = {
  coords: {row: 6, col: 5},
  challenge: "Challenge Battle: Defeat all enemies! Lv.8",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Piece of Heart - Fi",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
}

export const F8: HWMapTile = {
  coords: {row: 7, col: 5},
  challenge: "Challenge Battle: Fight through the Skyward Sword quiz!",
  difficulty: Difficulty.ORANGE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Conpass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.WEST],
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 8,
        col: 5
      }
    }
  ]
}

export const G1: HWMapTile = {
  coords: {row: 0, col: 6},
  challenge: "Adventure Battle: Go alone--despite the danger!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: undefined,
    clear: ["Goron Tunic - Link"],
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
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 4
      }
    }
  ]
}

export const G2: HWMapTile = {
  coords: {row: 1, col: 6},
  challenge: "Adventure Battle: Capture the enemy keeps! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: undefined,
    treasure: [
      "Piece of Heart - Tingle (Town Center Keep)",
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
        row: 1,
        col: 7
      }
    }
  ]
}

export const G3: HWMapTile = {
  coords: {row: 2, col: 6},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.6",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.WEST],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 3
      }
    }
  ]
}

export const G4: HWMapTile = {
  coords: {row: 3, col: 6},
  challenge: "Adventure Battle: Fight as a warrior of darkness! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: undefined,
    clear: ["Wind Waker Robes - Ganondorf"],
    treasure: [
      "Heart Container - Zant (Southeast Square)",
      "Piece of Heart - Zant (Central Square)",
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
      item: Items.WATERBOMB,
      target: {
        row: 4,
        col: 10
      }
    }
  ]
}

export const G5: HWMapTile = {
  coords: {row: 4, col: 6},
  challenge: "Adventure Battle: Defeat the Moblin Forces!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: undefined,
    treasure: [
      "Piece of Heart - Toon Link (South Square)",
      "Fairy Headwear - Kokiri Band (North Square)",
      "Fairy Food - Odd Mushroom (Western Tree [Pot])",
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
    }
  ]
}

export const G6: HWMapTile = {
  coords: {row: 5, col: 6},
  challenge: "Adventure Battle: Fight as a warrior of fire!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 10
      }
    }
  ],
  blockades: [Blockade.SOUTH]
}

export const G7: HWMapTile = {
  coords: {row: 6, col: 6},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 99,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 7
      }
    }
  ]
}

export const G8: HWMapTile = {
  coords: {row: 7, col: 6},
  challenge: "Adventure Battle: Fight as a warrior of light! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: undefined,
    treasure: [
      "Piece of Heart - Ghirahim (Abandoned Fort)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 6
      }
    }
  ]
}

export const H1: HWMapTile = {
  coords: {row: 0, col: 7},
  challenge: "Adventure Battle: Prevent the sorceress's scheme!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 4,
        col: 10
      }
    }
  ]
}

export const H2: HWMapTile = {
  coords: {row: 1, col: 7},
  challenge: "Adventure Battle: Deal with uninvited guests!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Trident Lv.1 - Ganondorf",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  search: [
    {
      item: Items.GODDESSHARP,
      target: {
        row: 2,
        col: 0
      }
    },
    {
      item: Items.DIGGINGMITS,
      target: {
        row: 8,
        col: 14
      }
    }
  ]
}

export const H3: HWMapTile = {
  coords: {row: 2, col: 7},
  challenge: "Challenge Battle: Defeat all enemies! Lv.6",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 14
      }
    }
  ]
}

export const H4: HWMapTile = {
  coords: {row: 3, col: 7},
  challenge: "Adventure Battle: Defeat the island beast!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Power Bracelet Item Card"],
    treasure: [
      "Piece of Heart - Young Link (Crystal Cave)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH, Blockade.WEST]
}

export const H5: HWMapTile = {
  coords: {row: 4, col: 7},
  challenge: "Challenge Battle: Defeat 400 enemies in time! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH],
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 7,
        col: 11
      }
    }
  ]
}

export const H6: HWMapTile = {
  coords: {row: 5, col: 7},
  challenge: "Challenge Battle: Fight through the weapon quiz!",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Lana",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH]
}

export const H7: HWMapTile = {
  coords: {row: 6, col: 7},
  challenge: "Adventure Battle: Defeat the Darknut Forces! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Candle Item Card"],
    treasure: [
      "Piece of Heart - Skull Kid (W. Rockface Keep)",
      "My Fairy - Light (South Field Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 7
      }
    }
  ]
}

export const H8: HWMapTile = {
  coords: {row: 7, col: 7},
  challenge: "Challenge Battle: Defeat 300 enemies in time!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Impa",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
}

export const I1: HWMapTile = {
  coords: {row: 0, col: 8},
  challenge: "Adventure Battle: Weather the storm of enemy forces!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Summoning Gate Lv.1 - Lana",
    clear: undefined,
    treasure: [
      "Heart Container - Lana (King's Hall)",
      "Piece of Heart - Lana (Southeast Square)",
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
      item: Items.ICEARROW,
      target: {
        row: 8,
        col: 8
      }
    }
  ]
}

export const I2: HWMapTile = {
  coords: {row: 1, col: 8},
  challenge: "Adventure Battle: Defeat the enemy forces! Lv.3",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: undefined,
    treasure: [
      "Piece of Heart - Ghirahim (Northeast Keep)",
      "Fairy Top - Pirate Vest (East Garden)",
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
      item: Items.DIGGINGMITS,
      target: {
        row: 8,
        col: 7
      }
    }
  ]
}

export const I3: HWMapTile = {
  coords: {row: 2, col: 8},
  challenge: "Adventure Battle: Capture the enemy keeps! Lv.1",
  difficulty: Difficulty.PURPLE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: undefined,
    treasure: [
      "Piece of Heart - Midna (Central Square)",
      "Fairy Bottoms - Sheikah Leggings (West Square)",
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
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 13
      }
    }
  ]
}

export const I4: HWMapTile = {
  coords: {row: 3, col: 8},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.EAST]
}

export const I5: HWMapTile = {
  coords: {row: 4, col: 8},
  challenge: "Adventure Battle: Defeat the enemy forces! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: undefined,
    treasure: [
      "Piece of Heart - Tingle (West Square)",
      "Fairy Top - Kokiri Cardigan (South Square)",
    ]
  },
  requirements: {
    kills: 1000,
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
    }
  ]
}

export const I6: HWMapTile = {
  coords: {row: 5, col: 8},
  challenge: "Challenge Battle: Fight through the forgetful foe quiz!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 99,
  },
}

export const I7: HWMapTile = {
  coords: {row: 6, col: 8},
  challenge: "Adventure Battle: Fight as a warrior of water! Lv.1",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: undefined,
    clear: ["Young Link"],
    treasure: [
      "Heart Container - Impa (Fairy Fountain)",
      "Piece of Heart - Twili Midna (Castle Keep)",
      "Fairy Bottoms - Kokiri Shorts (Mountain Keep)",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 2
      }
    }
  ]
}

export const I8: HWMapTile = {
  coords: {row: 7, col: 8},
  challenge: "Adventure Battle: Duel with the dragon knight!",
  difficulty: Difficulty.COLORLESS,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Candle Item Card"],
    treasure: [
      "Piece of Heart - Toon Link (Deku Tree)",
      "Fairy Food - Deku Nut (Southern Tree [Pot])",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 4
      }
    }
  ]
}

export const J1: HWMapTile = {
  coords: {row: 0, col: 9},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.12",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Fi",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.EAST, Blockade.SOUTH]
}

export const J2: HWMapTile = {
  coords: {row: 1, col: 9},
  challenge: "Challenge Battle: Fight through the women's weapons quiz!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Agitha",
    clear: ["Ice Arrow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH]
}

export const J3: HWMapTile = {
  coords: {row: 2, col: 9},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.4",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Water Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH]
}

export const J4: HWMapTile = {
  coords: {row: 3, col: 9},
  challenge: "Challenge Battle: Defeat all enemies! Lv.2",
  difficulty: Difficulty.YELLOW,
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
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST]
}

export const J5: HWMapTile = {
  coords: {row: 4, col: 9},
  challenge: "Adventure Battle: Fight as a warrior of fire! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Classic Tunic - Link"],
    treasure: [
      "Heart Container - Darunia (Lakeside Keep)",
      "Piece of Heart - Darunia (Temple Face Keep)",
      "Fairy Bottoms - Zora Skirt (King's Hall)",
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
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 3
      }
    }
  ]
}

export const J6: HWMapTile = {
  coords: {row: 5, col: 9},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Linkle",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
}

export const J7: HWMapTile = {
  coords: {row: 6, col: 9},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Piece of Heart - Lana",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 99,
  },
  blockades: [Blockade.SOUTH]
}

export const J8: HWMapTile = {
  coords: {row: 7, col: 9},
  challenge: "Adventure Battle: Prevent reinforcements from arriving!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 8
      }
    }
  ]
}

export const K1: HWMapTile = {
  coords: {row: 0, col: 10},
  challenge: "Challenge Battle: Defend the allied keeps! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Lana",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.EAST, Blockade.WEST],
  search: [
    {
      item: Items.DIGGINGMITS,
      target: {
        row: 8,
        col: 3
      }
    }
  ]
}

export const K2: HWMapTile = {
  coords: {row: 1, col: 10},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.12",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Hookshot Item Card"],
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
    }
  ]
}

export const K3: HWMapTile = {
  coords: {row: 2, col: 10},
  challenge: "Challenge Battle: Fight through the tricky quiz!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Piece of Heart - Ruto",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH]
}

export const K4: HWMapTile = {
  coords: {row: 3, col: 10},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Piece of Heart - Ruto",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.WEST]
}

export const K5: HWMapTile = {
  coords: {row: 4, col: 10},
  challenge: "Challenge Battle: Defeat 500 enemies in time! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Midna",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH]
}

export const K6: HWMapTile = {
  coords: {row: 5, col: 10},
  challenge: "Challenge Battle: Defeat 400 enemies in time! Lv.2",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.NORTH],
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 8,
        col: 5
      }
    }
  ]
}

export const K7: HWMapTile = {
  coords: {row: 6, col: 10},
  challenge: "Adventure Battle: Defeat the commanders of two armies! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Naginata Lv.1 - Impa",
    clear: undefined,
    treasure: [
      "Heart Container - Impa (Fairy Fountain)",
      "Fairy Headwear - Kokiri band (Eastern Tree)",
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
        col: 12
      }
    }
  ]
}

export const K8: HWMapTile = {
  coords: {row: 7, col: 10},
  challenge: "Challenge Battle: Watch out! All atacks are devastating! Lv.11",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Goddess's Harp Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH]
}

export const L1: HWMapTile = {
  coords: {row: 0, col: 11},
  challenge: "Adventure Battle: Defeat the mountain beast!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: undefined,
    treasure: [
      "Skull Kid Heart Container (West Goron Keep)",
      "Skull Kid Piece of Heart (Stronghold Keep)",
      "Gold Skulltula x2",
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
      item: Items.ICEARROW,
      target: {
        row: 3,
        col: 12
      }
    }
  ]
}

export const L2: HWMapTile = {
  coords: {row: 1, col: 11},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Toon Link",
    clear: ["Goddess's Harp Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 149,
  },
  blockades: [Blockade.SOUTH]
}

export const L3: HWMapTile = {
  coords: {row: 2, col: 11},
  challenge: "Challenge Battle: Defeat 500 enemies in time! Lv.1",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH]
}

export const L4: HWMapTile = {
  coords: {row: 3, col: 11},
  challenge: "Challenge Battle: Defeat all enemies! Lv.3",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST]
}

export const L5: HWMapTile = {
  coords: {row: 4, col: 11},
  challenge: "Adventure Battle: Defeat the warriors of time!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Zelda",
    clear: undefined,
    treasure: [
      "Piece of Heart - Zelda (Lakeside Keep)",
      "Fairy Accessory - Zora Earrings (Temple Face Keep)",
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
      item: Items.CANDLE,
      target: {
        row: 2,
        col: 11
      }
    }
  ]
}

export const L6: HWMapTile = {
  coords: {row: 5, col: 11},
  challenge: "Adventure Battle: Rescue the allied forces! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: undefined,
    treasure: [
      "Piece of Heart - Ruto (Crystal Cave)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1000,
    minutes: 15,
    damage: 99,
  },
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 2
      }
    }
  ]
}

export const L7: HWMapTile = {
  coords: {row: 6, col: 11},
  challenge: "Challenge Battle: Defeat 800 enemies in time!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Water Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 8
      }
    },
    {
      item: Items.GODDESSHARP,
      target: {
        row: 7,
        col: 2
      }
    }
  ]
}

export const L8: HWMapTile = {
  coords: {row: 7, col: 11},
  challenge: "Adventure Battle: Run swiftly across the battlefield!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: undefined,
    treasure: [
      "Piece of Heart - Young Link (S. Rockface Keep)",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 9
      }
    }
  ]
}

export const M1: HWMapTile = {
  coords: {row: 0, col: 12},
  challenge: "Challenge Battle: Defeat all enemies! Lv.11",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: ["Goddess's Harp Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.WEST],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 3,
        col: 14
      }
    }
  ]
}

export const M2: HWMapTile = {
  coords: {row: 1, col: 12},
  challenge: "Challenge Battle: Fight through the Ocarina of Time quiz!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 4,
        col: 11
      }
    }
  ]
}

export const M3: HWMapTile = {
  coords: {row: 2, col: 12},
  challenge: "Adventure Battle: Defeat the commanders of two armies! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: undefined,
    clear: ["Skull Kid"],
    treasure: [
      "Heart Container - Darunia (Central Keep)",
      "Piece of Heart - Darunia (N. Settlement)",
      "Fairy Top - Zora Tunic (Arbiter's Keep)",
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
      item: Items.BOMB,
      target: {
        row: 6,
        col: 9
      }
    }
  ]
}

export const M4: HWMapTile = {
  coords: {row: 3, col: 12},
  challenge: "Adventure Battle: Defeat the cliff beast!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Raft Item Card"],
    treasure: [
      "Piece of Heart - Sheik (East Keep)",
      "Gold Skulltula x2",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.WEST]
}

export const M5: HWMapTile = {
  coords: {row: 4, col: 12},
  challenge: "Challenge Battle: Fight through the tribe quiz!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Compass Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.SOUTH, Blockade.WEST]
}

export const M6: HWMapTile = {
  coords: {row: 5, col: 12},
  challenge: "Challenge Battle: Defeat all enemies! Lv.1",
  difficulty: Difficulty.GREEN,
  rewards: {
    arank: "Heart Container - Sheik",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 99,
  },
  blockades: [Blockade.NORTH]
}

export const M7: HWMapTile = {
  coords: {row: 6, col: 12},
  challenge: "Challenge Battle: Defeat all enemies! Lv.10",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Young Link",
    clear: ["Hookshot Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.SOUTH],
  search: [
    {
      item: Items.GODDESSHARP,
      target: {
        row: 4,
        col: 6
      }
    }
  ]
}

export const M8: HWMapTile = {
  coords: {row: 7, col: 12},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.11",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ghirahim",
    clear: ["Bomb Item Card"],
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
      item: Items.BOMB,
      target: {
        row: 1,
        col: 6
      }
    }
  ]
}

export const N1: HWMapTile = {
  coords: {row: 0, col: 13},
  challenge: "Adventure Battle: Fight the chosen ones!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Darunia",
    clear: undefined,
    treasure: [
      "Piece of Heart - Darunia (Central Chamber)",
      "My Fairy - Darkness (Central Chamber [Pot])",
      "Fairy Food - Deku Nut (West Garden [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
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
    {
      item: Items.GODDESSHARP,
      target: {
        row: 5,
        col: 11
      }
    }
  ]
}

export const N2: HWMapTile = {
  coords: {row: 1, col: 13},
  challenge: "Adventure Battle: Capture the enemy keeps! Lv.4",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Ganondorf",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 149,
  },
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 5,
        col: 3
      }
    }
  ]
}

export const N3: HWMapTile = {
  coords: {row: 2, col: 13},
  challenge: "Adventure Battle: Defeat the warriors of time!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: undefined,
    treasure: [
      "Piece of Heart - Tingle (West Keep)",
      "Fairy Accessory - Zora Earrings (West Boulder Keep)",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  search: [
    {
      item: Items.BOMB,
      target: {
        row: 1,
        col: 5
      }
    }
  ]
}

export const N4: HWMapTile = {
  coords: {row: 3, col: 13},
  challenge: "Challenge Battle: Defeat 500 enemies in time! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.EAST, Blockade.WEST],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 4,
        col: 9
      }
    }
  ]
}

export const N5: HWMapTile = {
  coords: {row: 4, col: 13},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.4",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: ["Candle Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
  search: [
    {
      item: Items.CANDLE,
      target: {
        row: 6,
        col: 13
      }
    }
  ]
}

export const N6: HWMapTile = {
  coords: {row: 5, col: 13},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.5",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Piece of Heart - Darunia",
    clear: ["Bomb Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 149,
  },
}

export const N7: HWMapTile = {
  coords: {row: 6, col: 13},
  challenge: "Adventure Battle: Defeat the forest dragon!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Gauntlets Lv.1 - Link",
    clear: undefined,
    treasure: [
      "Piece of Heart - Link (Temple Square)",
      "Gold Skulltula x2",
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
      item: Items.CANDLE,
      target: {
        row: 2,
        col: 10
      }
    },
    {
      item: Items.GODDESSHARP,
      target: {
        row: 6,
        col: 13
      }
    }
  ]
}

export const N8: HWMapTile = {
  coords: {row: 7, col: 13},
  challenge: "Adventure Battle: Defeat the Shield Moblin Forces! Lv.2",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Fi",
    clear: undefined,
    treasure: [
      "Piece of Heart - Fi (Southeast Square)",
      "Fairy Bottoms - Pirate Slacks (Upper Level East)",
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
        col: 6
      }
    }
  ]
}

export const O1: HWMapTile = {
  coords: {row: 0, col: 14},
  challenge: "Challenge Battle: Fight through the legendary warrior quiz!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Zant",
    clear: ["Digging Mitts Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.EAST, Blockade.WEST]
}

export const O2: HWMapTile = {
  coords: {row: 1, col: 14},
  challenge: "Adventure Battle: Rescue the allied forces! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Midna",
    clear: undefined,
    treasure: [
      "Piece of Heart - Zant (Castle Keep)",
      "Fairy Top - Royal Tunic (North Field Keep)",
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
      item: Items.BOMB,
      target: {
        row: 1,
        col: 12
      }
    },
    {
      item: Items.GODDESSHARP,
      target: {
        row: 3,
        col: 13
      }
    }
  ]
}

export const O3: HWMapTile = {
  coords: {row: 2, col: 14},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.10",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Baton Lv.1 - Zelda",
    clear: ["Digging Mitts Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH, Blockade.EAST],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 8,
        col: 1
      }
    },
    {
      item: Items.GODDESSHARP,
      target: {
        row: 10,
        col: 2
      }
    }
  ]
}

export const O4: HWMapTile = {
  coords: {row: 3, col: 14},
  challenge: "Adventure Battle: Watch out for thieves!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Impa",
    clear: undefined,
    treasure: [
      "Piece of Heart - Impa (N. Entrance Keep)",
      "Fairy Accessory - Pirate Bandana (South Square)",
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
      item: Items.WATERBOMB,
      target: {
        row: 2,
        col: 10
      }
    }
  ]
}

export const O5: HWMapTile = {
  coords: {row: 4, col: 14},
  challenge: "Adventure Battle: Fight as a warrior of water! Lv.2",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Horse Lv.1 - Link",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.SOUTH],
  search: [
    {
      item: Items.POWERBRACELET,
      target: {
        row: 4,
        col: 10
      }
    }
  ]
}

export const O6: HWMapTile = {
  coords: {row: 5, col: 14},
  challenge: "Adventure Battle: Defeat the Big Poe Forces!",
  difficulty: Difficulty.YELLOW,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: undefined,
    treasure: [
      "Piece of Heart - Skull Kid (South Temple)",
      "Fairy Accessory - Zora Earrings (East Keep)",
    ]
  },
  requirements: {
    kills: 1200,
    minutes: 15,
    damage: 149,
  },
  blockades: [Blockade.NORTH, Blockade.EAST, Blockade.SOUTH],
  search: [
    {
      item: Items.ICEARROW,
      target: {
        row: 5,
        col: 14
      }
    }
  ]
}

export const O7: HWMapTile = {
  coords: {row: 6, col: 14},
  challenge: "Challenge Battle: Fight through the travel memories quiz!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Twili Midna",
    clear: ["Goddess's Harp Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: 3,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH, Blockade.SOUTH]
}

export const O8: HWMapTile = {
  coords: {row: 7, col: 14},
  challenge: "Adventure Battle: Defeat the warriors of Skyloft!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Midna",
    clear: undefined,
    treasure: [
      "Piece of Heart - Young Link (N. Settlement)",
      "Fairy Top - Island Dress (Rockface Keep)",
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
      item: Items.DIGGINGMITS,
      target: {
        row: 3,
        col: 1
      }
    }
  ]
}

export const P1: HWMapTile = {
  coords: {row: 0, col: 15},
  challenge: "Adventure Battle: Take on the sword masters!",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Boots Lv.1 - Linkle",
    clear: undefined,
    treasure: [
      "Heart Container - Zelda (Arbiter's Keep)",
      "Piece of Heart - Toon Link (North Oasis)",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.WEST],
  search: [
    {
      item: Items.DIGGINGMITS,
      target: {
        row: 3,
        col: 10
      }
    }
  ]
}

export const P2: HWMapTile = {
  coords: {row: 1, col: 15},
  challenge: "Adventure Battle: Fight as a warrior of water! Lv.3",
  difficulty: Difficulty.RED,
  rewards: {
    arank: "Heart Container - Link",
    clear: undefined,
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
      item: Items.DIGGINGMITS,
      target: {
        row: 7,
        col: 1
      }
    },
    {
      item: Items.HOOKSHOT,
      target: {
        row: 0,
        col: 8
      }
    }
  ]
}

export const P3: HWMapTile = {
  coords: {row: 2, col: 15},
  challenge: "Adventure Battle: Survive the attack of those powered-up enemies!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Lana",
    clear: undefined,
    treasure: undefined
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.NORTH, Blockade.WEST],
  search: [
    {
      item: Items.DIGGINGMITS,
      target: {
        row: 3,
        col: 12
      }
    }
  ]
}

export const P4: HWMapTile = {
  coords: {row: 3, col: 15},
  challenge: "Challenge Battle: Defeat all Giant Bosses in time! Lv.13",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Skull Kid",
    clear: ["Goddess's Harp Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 7,
    damage: 199,
  },
  search: [
    {
      item: Items.RAFT,
      target: {
        row: 4,
        col: 6
      }
    }
  ]
}

export const P5: HWMapTile = {
  coords: {row: 4, col: 15},
  challenge: "Challenge Battle: Defeat all enemies! Lv.9",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Tingle",
    clear: ["Ice Arrow Item Card"],
    treasure: undefined
  },
  requirements: {
    kills: undefined,
    minutes: 15,
    damage: 199,
  },
  blockades: [Blockade.WEST],
  search: [
    {
      item: Items.LADDER,
      target: {
        row: 5,
        col: 12
      }
    }
  ]
}

export const P6: HWMapTile = {
  coords: {row: 5, col: 15},
  challenge: "Adventure Battle: Battle across the field!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Ruto",
    clear: undefined,
    treasure: [
      "Piece of Heart - Ruto (King's Hall)",
      "Fairy Food - Weird Egg (Central Hall [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
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
      item: Items.GODDESSHARP,
      target: {
        row: 6,
        col: 2
      }
    }
  ]
}

export const P7: HWMapTile = {
  coords: {row: 6, col: 15},
  challenge: "Adventure Battle: Watch out for falling artillery fire!",
  difficulty: Difficulty.BLUE,
  rewards: {
    arank: "Heart Container - Zant",
    clear: undefined,
    treasure: [
      "Piece of Heart - Ghirahim (Northwest Keep)",
      "My Fairy - Water (West Keep [Pot])",
      "Fairy Food - Lon Lon Milk (Northwest Keep [Pot])",
    ]
  },
  requirements: {
    kills: 1600,
    minutes: 15,
    damage: 199,
  },
  search: [
    {
      item: Items.WATERBOMB,
      target: {
        row: 5,
        col: 10
      }
    }
  ]
}

export const P8: HWMapTile = {
  coords: {row: 7, col: 15},
  challenge: "Challenge Battle: Watch out! All attacks are devastating! Lv.9",
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
}
