import { HWLegendTile, Tile } from "src/app/models";
import { LegendModeLocation } from "../../enums";

export const A1: Tile = {
  coords: {row: 0, col: 0},
};
export const A2: Tile = {
  coords: {row: 1, col: 0},
};
export const A3: Tile = {
  coords: {row: 2, col: 0},
};
export const A4: HWLegendTile = {
  coords: {row: 3, col: 0},
  challenge: "Prologue - The Armies of Ruin",
  location: LegendModeLocation.HYRULE,
  heartpieces: [
    'Heart Container - Link: As Link, go directly north from W. Rockface Keep and bomb the boulder.',
    'Piece of Heart - Link: As Link, capture the W. Rockface Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located in a corner directly between the West Field Keep and Abandoned Fort.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty using Link with a Hylian Sword. After summoning the Great Fairy, it is located on the south wall of the enclosed area directly east and attached to the Castle Keep.'
  ]
};
export const A5: HWLegendTile = {
  coords: {row: 4, col: 0},
  challenge: "Cia's Tale - The Dragon of the Caves",
  location: LegendModeLocation.ELDIN,
  altBorder: true,
  heartpieces: [
    'Heart Container - Cia: As Cia, bomb the boulder to the far west from the North Square.',
    'Piece of Heart - Cia: As Cia, capture the Central Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder located at the dead end south of the Central Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Cia. Destroy all Bombchus before they can explode and defeat both King Dodongos. It is found by going as far directly west as you can from the Allied Base until you reach the cliff.'
  ]
};
export const A6: Tile = {
  coords: {row: 5, col: 0},
};

export const B1: Tile = {
  coords: {row: 0, col: 1},
};
export const B2: Tile = {
  coords: {row: 1, col: 1},
};
export const B3: Tile = {
  coords: {row: 2, col: 1},
};
export const B4: HWLegendTile = {
  coords: { row: 3, col: 1 },
  challenge: "Prologue - The Sheikah Tribesman",
  location: LegendModeLocation.ELDIN,
  heartpieces: [
    'Heart Container - Impa: As Impa, bomb the boulder directly north of the Exit Square.',
    'Piece of Heart - Link: As Link, capture the Crystal Cave.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located inside a boulder along the east wall directly south from the Stone Square.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty using Impa with a Giant\'s Blade. Keep the health of all Bombchus above 50%. It is located in the dead end northwest of the Crystal Cave. Use the Hookshot to get to it.'
  ],
  weapons: ['Link\'s Magic Rod Level 1 - Fire Rod: Capture the Tunnel Square.']
};
export const B5: HWLegendTile = {
  coords: {row: 4, col: 1},
  challenge: "Cia's Tale - The Invasion Begins",
  location: LegendModeLocation.HYRULE,
  altBorder: true,
  heartpieces: [
    'Heart Container - Wizzro: As Wizzro, bomb a boulder found east of Hyrule Castle Keep just past the empty room.',
    'Piece of Heart - Volga: As Volga, capture the Goddess Fountain Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder found to the east of the Field North Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Wizzro. Defeat Impa twice without allowing the Allied Keep to fall into danger. It is found south of the Fairy Fountain.'
  ]
};
export const B6: Tile = {
  coords: {row: 5, col: 1},
};

export const C1: Tile = { coords: { row: 0, col: 2 } };
export const C2: Tile = { coords: { row: 1, col: 2 } };
export const C3: HWLegendTile = {
  coords: {row: 2, col: 2},
  challenge: "Linkle's Tale - The Girl in the Green Tunic",
  location: LegendModeLocation.PHIRONE_ALT,
  heartpieces: [
    'Heart Container - Linkle: As Linkle, open the chest found in the dead end in the southwest corner of the map.',
    'Piece of Heart - Linkle: As Linkle, capture the North Square.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located southwest of the Deku Tree.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Linkle. Escort three Cucco Chicks to their destination, where they turn into Gold Cuccos. It is found to the west of North Square.'
  ]
};
export const C4: HWLegendTile = {
  coords: {row: 3, col: 2},
  challenge: "Prologue - The Sorceress of the Woods",
  location: LegendModeLocation.PHIRONE,
  heartpieces: [
    'Heart Container - Sheik: As Sheik, go south from the Southeast Tree and bomb the boulder in the dead end.',
    'Piece of Heart - Impa: As Impa, capture the North Square.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder directly north of the West Square.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty using Link with a Magic Rod. Capture all keeps and defeat all Keep Saboteurs before the Great Deku Tree is in danger. It is located in the dead end directly west of the Fairy Fountain. Use the Hookshot to get to it.'
  ]
};
export const C5: Tile = { coords: { row: 4, col: 2 } };
export const C6: Tile = { coords: { row: 5, col: 2 } };

export const D1: Tile = { coords: { row: 0, col: 3 } };
export const D2: Tile = { coords: { row: 1, col: 3 } };
export const D3: Tile = { coords: { row: 2, col: 3 } };
export const D4: HWLegendTile = {
  coords: {row: 3, col: 3},
  challenge: "Prologue - The Sorceress of the Valley",
  location: LegendModeLocation.RANELLE,
  heartpieces: [
    'Heart Container - Lana: As Lana, go west from the West Ruins until you hit the wall. Look for a boulder along the wall and bomb it for the chest.',
    'Piece of Heart - Sheik: As Sheik, capture the Ruins Summit.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located on the outside of the southern wall east of the entrance to the West Temple.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty using Link with a Hylian Sword. When fighting Manhandla, it will hide and you\'ll have to find it. Find it before the Allied Base is in danger. It is located up the large stairs in the center of the map and it will be on the ruins wall at the top of the stairs.'
  ],
  weapons: ['Lana\'s Spear Level 1 - Deku Spear: Capture the West Keep.']
};
export const D5: Tile = { coords: { row: 4, col: 3 } };
export const D6: Tile = { coords: { row: 5, col: 3 } };

export const E1: Tile = { coords: { row: 0, col: 4 } };
export const E2: HWLegendTile = {
  coords: {row: 1, col: 4},
  challenge: "Ocarina of Time - Land of Myth",
  location: LegendModeLocation.DEATH_MOUNTAIN,
  heartpieces: [
    'Heart Container - Sheik: As Sheik, go southeast of the E. Boulder Keep and bomb a boulder.',
    'Piece of Heart - Impa: As Impa, capture the East Goron Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located in the middle of the direct path between West Goron Keep and W. Boulder Keep. Use the Hookshot to get to it.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Sheik. Capture 7 or more Keeps and defeat Darunia more than once before the Enemy Base opens.It is located in the area south of the Chief\'s Room.'
  ],
  weapons: ['Impa\'s Giant Blade Level 2 - Biggoron\'s Knife: Capture the E. Boulder Keep.']
};
export const E3: Tile = { coords: { row: 2, col: 4 } };
export const E4: HWLegendTile = {
  coords: {row: 3, col: 4},
  challenge: "Twilight Princess - Land of Twilight",
  location: LegendModeLocation.TWILIGHT,
  heartpieces: [
    'Heart Container - Lana: As Lana, go directly north from where you meet up with Agitha. Use the Hookshot to get to it.',
    'Piece of Heart - Lana: As Lana, capture the Sorceress\'s Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located in the area to the west of the southwest Owl Statue on the side of a building.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Lana with a Book of Sorcery. Defeat Midna before Cia leaves the battlefield and capture all Keeps. It is located on the north wall of the Bridge Keep.'
  ]
};
export const E5: HWLegendTile = {
  coords: {row: 4, col: 4},
  challenge: "Linkle's Tale - The Demon Lord's Plan",
  location: LegendModeLocation.SEALED_ALT,
  heartpieces: [
    'Heart Container - Fi: As Fi, bomb the boulder in the room southwest of the Enemy Base.',
    'Piece of Heart - Linkle: As Linkle, capture the East Temple.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder in the very large dead end in the middle of the map.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Linkle. Defeat all of the Ceremonial Troops, Controller Troops, and The Imprisoned. It is found northwest of the Temple Entrance.'
  ],
  weapons: ['Linkle\'s Crossbows Level 2 - Hylian Crossbows: Capture the East Keep.']
};
export const E6: HWLegendTile = {
  coords: {row: 5, col: 4},
  challenge: "Skyward Sword - Land in the Sky",
  location: LegendModeLocation.SKYLOFT,
  heartpieces: [
    'Heart Container - Link: As Link, go west from the southernmost Owl Statue, cross the bridge, then bomb the boulder.',
    'Piece of Heart - Link: As Link, capture the N. Rockface Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder to the southwest of the Goddess Statue Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Link with a Hylian Sword. Activate the magic circle in the Fairy Fountain while keeping Fi\'s health above 50%. It is located in the open area north of the Academy Keep.'
  ]
};

export const F1: HWLegendTile = {
  coords: {row: 0, col: 5},
  challenge: "Linkle's Tale - Powers Collide",
  location: LegendModeLocation.HYLIA_ALT,
  heartpieces: [
    'Heart Container - Ruto: As Ruto, bomb a boulder to the east of Cliffside Keep.',
    'Piece of Heart - Linkle: As Linkle, capture the Lakeside Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located on the wall just outside of Temple Face Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Linkle. Open the Enemy Base before Darunia or the Allied Base are in danger. It is found northwest from the Temple Face Keep behind a wall of vines.'
  ]
};
export const F2: HWLegendTile = {
  coords: {row: 1, col: 5},
  challenge: "Ocarina of Time - The Water Temple",
  location: LegendModeLocation.HYLIA,
  heartpieces: [
    'Heart Container - Darunia: As Darunia, go into the room east of the Central Hall and bomb the boulder.',
    'Piece of Heart - Sheik: As Sheik, capture the East Room.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located behind a wall of vines directly north from the Temple Face Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Impa with a Giant\'s Blade. Defeat King Dodongo without allowing Ruto, Darunia, or Sheik to drop below 50% health. It is located in the tunnel at the far north of the map where you jump down to ambush the enemies at the start of the stage.'
  ],
  weapons: ['Sheik\'s Harp Level 2 - Typhoon Harp: Capture the Temple Face Keep.']
};
export const F3: HWLegendTile = {
  coords: {row: 2, col: 5},
  challenge: "Cia's Tale - The Usurper King",
  location: LegendModeLocation.SHADOW,
  altBorder: true,
  heartpieces: [
    'Heart Container - Wizzro: As Wizzro, bomb a boulder found north of the West Palace.',
    'Piece of Heart - Cia: As Cia, capture the West Palace.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder south of the E. Palace Entrance.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Wizzro. Defeat Argorok and Agitha without allowing Volga to be defeated. It is found in the northeast corner of the circular area found northwest of West Palace.'
  ]
};
export const F4: HWLegendTile = {
  coords: {row: 3, col: 5},
  challenge: "Twilight Princess - The Shadow King",
  location: LegendModeLocation.SHADOW,
  heartpieces: [
    'Heart Container - Midna: As Midna, bomb the boulder east of the Enemy Keep.',
    'Piece of Heart - Lana: As Lana, capture the West Palace.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder next to the west side of the North Palace.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Midna. Defeat three Keep Saboteurs while keeping all allies health above 50%. It is located outside of the Enemy Base along the south wall.'
  ],
  weapons: ['Lana\'s Book of Sorcery Level 2 - Sealing Tome: Capture the Lower Level East.']
};
export const F5: HWLegendTile = {
  coords: {row: 4, col: 5},
  challenge: "Cia's Tale - The Demon Lord",
  location: LegendModeLocation.SKYLOFT,
  altBorder: true,
  heartpieces: [
    'Heart Container - Volga: As Volga, bomb a boulder just west of the Rogue Base.',
    'Piece of Heart - Cia: As Cia, capture the Fairy Fountain.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located just north of S. Rockface Keep behind a wall of vines.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Volga. Capture nine keeps in under 10 minutes. It is found on the outer north wall of the West Town Keep.'
  ]
};
export const F6: HWLegendTile = {
  coords: {row: 5, col: 5},
  challenge: "Skyward Sword - Sealed Ambition",
  location: LegendModeLocation.SEALED,
  heartpieces: [
    'Heart Contrainer - Fi: As Fi, bomb a rock directly east of the Temple Entrance.',
    'Piece of Heart - Link: As Link, capture the West Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located behind a wall of vines directly in the middle of the far east wall.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Link with a Magic Rod. Defeat the Turncoat Soldiers and The Imprisoned in under 10 minutes. It is located on the east wall of the East Temple.'
  ],
  weapons: ['Link\'s Hylian Sword Level 2 - White Sword: Capture the East Cannon Keep.']
};

export const G1: Tile = { coords: { row: 0, col: 6 } };
export const G2: Tile = { coords: { row: 1, col: 6 } };
export const G3: Tile = { coords: { row: 2, col: 6 } };
export const G4: HWLegendTile = {
  coords: {row: 3, col: 6},
  challenge: "Epilogue - The Sacred Sword",
  location: LegendModeLocation.TEMPLE_OF_THE_SACRED_SWORD,
  heartpieces: [
    'Heart Container - Zelda: As Zelda, look for a boulder just to the west of the southwest empty Keep. Bomb it for the chest.',
    'Piece of Heart - Lana: As Lana, capture the N. Temple Hall.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder to the west of the northwest empty Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Fi. Defeat 2000 enemies and Wizzro in the Master Sword room while keeping Darunia, Impa, and Midna\'s health high enough to keep them out of danger. It is located in the middle of the Master Sword room.'
  ],
  weapons: ['Zelda\'s Rapier Level 2 - Glittering Rapier: Capture the S. Temple Hall.']
};
export const G5: Tile = { coords: { row: 4, col: 6 } };
export const G6: Tile = { coords: { row: 5, col: 6 } };

export const H1: Tile = { coords: { row: 0, col: 7 } };
export const H2: Tile = { coords: { row: 1, col: 7 } };
export const H3: HWLegendTile = {
  coords: {row: 2, col: 7},
  challenge: "Linkle's Tale - Her True Self",
  location: LegendModeLocation.SHADOW,
  heartpieces: [
    'Heart Container - Twili Midna: As Twili Midna, bomb a boulder just north of the Southwest Square.',
    'Piece of Heart - Linkle: As Linkle, capture the Upper Level East.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder just west of the Upper Level East.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Linkle. Open the Enemy Base before Zelda is in danger. It is found right outside of the south entrance to the West Square.'
  ]
};
export const H4: HWLegendTile = {
  coords: {row: 3, col: 7},
  challenge: "Epilogue - A War of Spirit",
  location: LegendModeLocation.TEMPLE_OF_SOULS,
  heartpieces: [
    'Heart Container - Impa: As Impa, look for a boulder to bomb on the path south of the SE Magic Keep.',
    'Piece of Heart - Fi: As Fi, capture the South Garden.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located behind a cracked wall that must be bombed to the west of the SW Magic Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Zelda with a Rapier. Ensure that Fi, Impa, Lana, and Midna are able to flee the battlefield when they attempt to flee. It is found on the southern wall of the East Garden.'
  ]
};
export const H5: HWLegendTile = {
  coords: {row: 4, col: 7},
  challenge: "Cia's Tale - Darkness Falls",
  location: LegendModeLocation.RANELLE,
  altBorder: true,
  heartpieces: [
    'Heart Container - Volga: As Volga, bomb a boulder in the Fairy Fountain.',
    'Piece of Heart - Cia: As Cia, capture the East Temple.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located in the dead end just southwest of the Allied Base.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Cia. Defeat Wizzro while keeping the health of all Dark Links above 60%. It is found north of the East Temple.'
  ]
};
export const H6: Tile = { coords: { row: 5, col: 7 } };

export const I1: Tile = { coords: { row: 0, col: 8 } };
export const I2: Tile = { coords: { row: 1, col: 8 } };
export const I3: Tile = { coords: { row: 2, col: 8 } };
export const I4: HWLegendTile = {
  coords: {row: 3, col: 8},
  challenge: "Epilogue - Shining Beacon",
  location: LegendModeLocation.RANELLE,
  heartpieces: [
    'Heart Container - Link: As Link, head to the dead end up the stairs just northwest of the East Ruins Room and bomb the boulder there.',
    'Piece of Heart - Midna: As Midna, capture the East Ruins Room.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder in the large dead end just southeast of the East Sanctum Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Lana with a Spear. Defeat Volga at least twice and open the Enemy Keep while keeping all allies alive. It is found in a dead end north of the West Sanctum Keep.'
  ]
};
export const I5: Tile = { coords: { row: 4, col: 8 } };
export const I6: Tile = { coords: { row: 5, col: 8 } };

export const J1: Tile = { coords: { row: 0, col: 9 } };
export const J2: Tile = { coords: { row: 1, col: 9 } };
export const J3: Tile = { coords: { row: 2, col: 9 } };
export const J4: HWLegendTile = {
  coords: {row: 3, col: 9},
  challenge: "Ganondorf - Ganondorf's Return",
  location: LegendModeLocation.DESERT,
  heartpieces: [
    'Heart Container - Ganondorf: As Ganondorf, bomb the boulder found northwest of the North Oasis.',
    'Piece of Heart - Ganondorf: As Ganondorf, capture the Clifftop Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located east of Arbiter\'s Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Ganondorf. Free all imprisoned monsters and defeat two of the Giant Bosses before they can join forces. It is found in the southeast room on the map behind a wall of vines.'
  ]
};
export const J5: Tile = { coords: { row: 4, col: 9 } };
export const J6: Tile = { coords: { row: 5, col: 9 } };

export const K1: Tile = { coords: { row: 0, col: 10 } };
export const K2: Tile = { coords: { row: 1, col: 10 } };
export const K3: Tile = { coords: { row: 2, col: 10 } };
export const K4: HWLegendTile = {
  coords: {row: 3, col: 10},
  challenge: "Ganondorf - March of the Demon King",
  location: LegendModeLocation.RANELLE_ALT,
  heartpieces: [
    'Heart Container - Ganondorf: As Ganondorf, bomb the boulder in the Fairy Keep.',
    'Piece of Heart - Ganondorf: As Ganondorf, capture the Western Room.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder found in a corner if you follow the path east then north from East Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Ganondorf. Defeat all copies of Impa then defeat the real Impa. Note that the copies of Impa use the Naginata while the real Impa uses the Giant Blade. It is found north of the Eastern Room.'
  ]
};
export const K5: Tile = { coords: { row: 4, col: 10 } };
export const K6: Tile = { coords: { row: 5, col: 10 } };

export const L1: Tile = { coords: { row: 0, col: 11 } };
export const L2: Tile = { coords: { row: 1, col: 11 } };
export const L3: Tile = { coords: { row: 2, col: 11 } };
export const L4: HWLegendTile = {
  coords: {row: 3, col: 11},
  challenge: "Ganondorf - Battle of the Triforce",
  location: LegendModeLocation.HYRULE,
  heartpieces: [
    'Heart Container - Ganondorf: As Ganondorf, bomb the boulder found in the southwest corner of the large area south of the Abandoned Fort.',
    'Piece of Heart - Ganondorf: As Ganondorf, capture the Abandoned Fort.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder in the dead end area beside the west wall of East Field Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Ganondorf. Defeat Impa before she enters the Fairy Fountain and defeat Link and Zelda at least 4 total times. It is found on the north wall of Mountain Keep.'
  ]
};
export const L5: Tile = { coords: { row: 4, col: 11 } };
export const L6: Tile = { coords: { row: 5, col: 11 } };

export const M1: Tile = { coords: { row: 0, col: 12 } };
export const M2: Tile = { coords: { row: 1, col: 12 } };
export const M3: Tile = { coords: { row: 2, col: 12 } };
export const M4: HWLegendTile = {
  coords: {row: 3, col: 12},
  challenge: "Grand Finale - Enduring Resolve",
  location: LegendModeLocation.DESERT,
  heartpieces: [
    'Heart Container - Link: As Link, bomb a boulder directly south of Clifftop Keep.',
    'Piece of Heart - Lana: As Lana, capture the Central Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder on the outside western wall of the S. Desert Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Zelda with a Rapier. Defeat all Keep Saboteurs, Rally Captains, and Skilled Summoners while keeping all controllable allies above 30% health. It is found under a boulder in the alcove north of Central Keep.'
  ]
};
export const M5: Tile = { coords: { row: 4, col: 12 } };
export const M6: Tile = { coords: { row: 5, col: 12 } };

export const N1: Tile = { coords: { row: 0, col: 13 } };
export const N2: Tile = { coords: { row: 1, col: 13 } };
export const N3: HWLegendTile = {
  coords: {row: 2, col: 13},
  challenge: "Linkle's Tale - The Other Hero",
  location: LegendModeLocation.GANON_ALT,
  heartpieces: [
    'Heart Container - Impa: As Impa, bomb a boulder north of the W. Rockface Keep.',
    'Piece of Heart - Linkle: As Linkle, capture the West Field Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located on the outside north wall of the empty area adjacent to the Castle Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Linkle. Rescue all of the Hylian Captains. It is found in the dead end north of the East Field Keep. Use the hookshot to reach it.'
  ]
};
export const N4: HWLegendTile = {
  coords: {row: 3, col: 13},
  challenge: "Grand Finale - Liberation of the Triforce",
  location: LegendModeLocation.GANON,
  heartpieces: [
    'Heart Container - Zelda: As Zelda, bomb a boulder on the west side of the empty Keep west of the North Field Keep.',
    'Piece of Heart - Impa: As Impa, capture the W. Rockface Keep'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located under a boulder in the Fairy Fountain.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Darunia. Defeat Ganondorf while keeping all controllable allies above 30% health. It is found on the south wall of the Castle Keep.'
  ]
};
export const N5: Tile = { coords: { row: 4, col: 13 } };
export const N6: Tile = { coords: { row: 5, col: 13 } };

export const O1: Tile = { coords: { row: 0, col: 14 } };
export const O2: Tile = { coords: { row: 1, col: 14 } };
export const O3: Tile = { coords: { row: 2, col: 14 } };
export const O4: HWLegendTile = {
  coords: {row: 3, col: 14},
  challenge: "Wind Waker - A New Disturbance",
  location: LegendModeLocation.BASTION,
  heartpieces: [
    'Heart Container - Tetra: As Tetra, bomb a boulder in a dead end found by taking an offshoot path north of the Star Island Keep.',
    'Piece of Heart - Link: As Link, capture the Star Island Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located behind a cracked wall in a dead end north of the Dragon Roost.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Link with a Magic Rod. Destroy the three stone heads and defeat Gohma without allowing the Allied Base to fall into danger. It is found northeast of the Enemy Base behind a wall of vines.'
  ]
};
export const O5: Tile = { coords: { row: 4, col: 14 } };
export const O6: Tile = { coords: { row: 5, col: 14 } };

export const P1: Tile = { coords: { row: 0, col: 15 } };
export const P2: Tile = { coords: { row: 1, col: 15 } };
export const P3: Tile = { coords: { row: 2, col: 15 } };
export const P4: HWLegendTile = {
  coords: {row: 3, col: 15},
  challenge: "Wind Waker - The Search for Cia",
  location: LegendModeLocation.DESERT,
  heartpieces: [
    'Heart Container - Tetra: As Tetra, bomb a boulder in the alcove to the west of the North Oasis.',
    'Piece of Heart - Lana: As Lana, capture the S. Desert Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located on the outside of the southern wall of the Rockface Keep.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Lana with a Spear. Close all seven Gates of Souls in under 10 minutes. It is located at the northeast corner of the outside of the Allied Base.'
  ]
};
export const P5: Tile = { coords: { row: 4, col: 15 } };
export const P6: Tile = { coords: { row: 5, col: 15 } };

export const Q1: Tile = { coords: { row: 0, col: 16 } };
export const Q2: Tile = { coords: { row: 1, col: 16 } };
export const Q3: Tile = { coords: { row: 2, col: 16 } };
export const Q4: HWLegendTile = {
  coords: {row: 3, col: 16},
  challenge: "Wind Waker - Reclaiming the Darkness",
  location: LegendModeLocation.TEMPLE_OF_SOULS,
  heartpieces: [
    'Heart Container - Tetra: As Tetra, bomb a boulder north of East Magic Keep.',
    'Piece of Heart - King Daphnes: As King Daphnes, capture the West Magic Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located on a wall northeast of the Allied Base.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Link with a Hylian Sword. Capture all Keeps within 10 minutes. It is located in the southwest corner of the second circular area south of the Allied Base.'
  ],
  weapons: ['Tetra\'s Cutlass Level 2 - Jeweled Cutlass: Capture the SE Magic Keep.']
};
export const Q5: Tile = { coords: { row: 4, col: 16 } };
export const Q6: Tile = { coords: { row: 5, col: 16 } };

export const R1: Tile = { coords: { row: 0, col: 17 } };
export const R2: Tile = { coords: { row: 1, col: 17 } };
export const R3: Tile = { coords: { row: 2, col: 17 } };
export const R4: HWLegendTile = {
  coords: {row: 3, col: 17},
  challenge: "Wind Waker - Watchers of the Triforce",
  location: LegendModeLocation.ZEPHIR_AND_TERRA_TEMPLE,
  heartpieces: [
    'Heart Container - King Daphnes: As King Daphnes, bomb a boulder just southwest from the Allied Base.',
    'Piece of Heart - Link: As Link, capture the Faces Keep.'
  ],
  skulltulas: [
    'Gold Skulltula #1: KO 1000 enemies. Located in the dead end at the southwest of the map. Use the hookshot to reach it.',
    'Gold Skulltula #2: Play on Hard/Hero Difficulty as Tetra. Reduce Phantom Ganon to less than 50% of his health in under 15 minutes. It is located in the tunnel west of the Rock Keep behind a wall of vines.'
  ],
  weapons: ['King Daphnes\'s Sail Level 2 - Swift Sail: Capture the Rock Keep.']
};
export const R5: Tile = { coords: { row: 4, col: 17 } };
export const R6: Tile = { coords: { row: 5, col: 17 } };
