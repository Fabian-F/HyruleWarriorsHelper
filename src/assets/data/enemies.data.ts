import { EnemyType } from "src/app/models"

export const Aeralfos: EnemyType = {
	name: "Aeralfos",
	imagePath: "assets/images/enemies/Aeralfos.png",
	drops: {
		bronze: {
			name: "Aeralfos Leather",
			imagePath: "assets/images/materials/AeralfosLeather.png"
		},
		silver: {
			name: "Round Aeralfos Shield",
			imagePath: "assets/images/materials/RoundAeralfosShield.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Twilight Princess: Land of Twilight",
					amount: "13+ Aeralfos, 3 Dark Aeralfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Skyward Sword: Land in the Sky",
					amount: "20 Aeralfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ganondorf: Ganondorf's Return",
					amount: "11 Aeralfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Wind Waker: The Search for Cia",
					amount: "12-16+ Aeralfos",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "E4",
					title: "E4: Rescue the allied forces! LV.2",
					amount: "9 Aeralfos",
					recommended: false
				},
				{
					tile: "M4",
					title: "M4: Defeat the cliff beast!",
					amount: "7 Aeralfos",
					recommended: false
				},
				{
					tile: "D5",
					title: "D5: Defeat 700 enemies in time! LV.2",
					amount: "7 Aeralfos",
					recommended: false
				},
				{
					tile: "E6",
					title: "E6: Defend the allied keeps! LV.1",
					amount: "9 Aeralfos",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "F5",
					title: "F5: Rack up your KO count! LV.3",
					amount: "10 Aeralfos",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "M2",
					title: "M2: Defeat the enemy forces! LV.1",
					amount: "7 Aeralfos",
					recommended: false
				},
				{
					tile: "E3",
					title: "E3: Rescue the allied forces!",
					amount: "9 Aeralfos",
					recommended: false
				},
				{
					tile: "F8",
					title: "F8: Destroy the army with boosted morale! LV.4",
					amount: "8 Aeralfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "I5",
					title: "I5: Rack up your KO count! LV.2 ",
					amount: "19 Aeralfos",
					recommended: true
				},
				{
					tile: "F8",
					title: "F8: Calm dissenters and crush your foe!",
					amount: "12 Aeralfos",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "M1",
					title: "M1: Final battle! Defeat the dragon of the valley!",
					amount: "12 Aeralfos",
					recommended: false
				},
				{
					tile: "H2",
					title: "H2: Win the KO competition! LV.5",
					amount: "8 Aeralfos",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "E4",
					title: "E4: Defeat the Aeralfos Forces! LV.2",
					amount: "11 Aeralfos",
					recommended: false
				},
				{
					tile: "F5",
					title: "F5: Win the Rupee competition! LV.3",
					amount: "Rupee Captains are Aeralfos",
					recommended: false
				},
			]
		},
		{
			map: "Challenge Mode",
			tiles: [
				{
					tile: undefined,
					title: "Boss Challenge: Survival Battle LV.2",
					amount: "15 Aeralfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Boss Challenge: Survival Battle LV.3",
					amount: "13 Aeralfos",
					recommended: false
				},
			]
		},
	]
}

export const FieryAeralfos: EnemyType = {
	name: "Fiery Aeralfos",
	imagePath: "assets/images/enemies/FieryAeralfos.png",
	drops: {
		bronze: {
			name: "Fiery Aeralfos Leather",
			imagePath: "assets/images/materials/FieryAeralfosLeather.png"
		},
		silver: {
			name: "Fiery Aeralfos Wing",
			imagePath: "assets/images/materials/FieryAeralfosWing.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Twilight Princess: The Shadow King",
					amount: "20-23 Fiery Aeralfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Epilogue: The Sacred Sword",
					amount: "13 Fiery Aeralfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Cia's Tale: Darkness Falls",
					amount: "17-20 Fiery Aeralfos",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "G1",
					title: "G1: Go alone--despite the danger!",
					amount: "14 Fiery Aeralfos",
					recommended: false
				},
				{
					tile: "P2",
					title: "P2: Fight as a warrior of water! LV.3",
					amount: "8 Fiery Aeralfos",
					recommended: false
				},
				{
					tile: "G4",
					title: "G4: Fight as a warrior of darkness! LV.1",
					amount: "8 Fiery Aeralfos",
					recommended: false
				},
				{
					tile: "B7",
					title: "B7: Defeat 700 enemies in time! LV.3",
					amount: "7 Fiery Aeralfos",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "D5",
					title: "D5: Win the KO competition! LV.7",
					amount: "2 infinitely respawning Fiery Aeralfos",
					recommended: false
				},
				{
					tile: "H5",
					title: "H5: Final battle! Defeat the dragon of the tower!",
					amount: "15 Fiery Aeralfos",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "D3",
					title: "D3: Rack up your KO count! LV.6",
					amount: "16 Fiery Aeralfos",
					recommended: false
				},
				{
					tile: "P3",
					title: "P3: Rack up your KO count! LV.11",
					amount: "10 Fiery Aeralfos",
					recommended: false
				},
				{
					tile: "J7",
					title: "J7: Fight as a warrior of light!",
					amount: "8 Fiery Aeralfos",
					recommended: false
				},
				{
					tile: "B8",
					title: "B8: Fight as a warrior of darkness! LV.2",
					amount: "8 Fiery Aeralfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "B7",
					title: "B7: Team up and defeat the enemy forces! LV.9 ",
					amount: "9 Fiery Aeralfos if the enemy is Ghirahim and Zant",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "H2",
					title: "H2: Win the KO competition! LV.5",
					amount: "10 Fiery Aeralfos",
					recommended: false
				},
				{
					tile: "H6",
					title: "H6: Win the Rupee competition! LV.6",
					amount: "Rupee Captains are Fiery Aeralfos",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "N2",
					title: "N2: Win the Rupee competition! LV.5",
					amount: "Rupee Captains are Fiery Aeralfos",
					recommended: false
				},
				{
					tile: "K7",
					title: "K7: Win the KO competition! LV.1",
					amount: "2 infinitely respawning Fiery Aeralfos",
					recommended: false
				},
			]
		},
		{
			map: "Challenge Mode",
			tiles: [
				{
					tile: undefined,
					title: "Battle Challenge: Rush Battle",
					amount: "10 Fiery Aeralfos",
					recommended: false
				},
			]
		},
	]
}

export const Gibdo: EnemyType = {
	name: "Gibdo",
	imagePath: "assets/images/enemies/Gibdo.png",
	drops: {
		bronze: {
			name: "Gibdo Bandage",
			imagePath: "assets/images/materials/GibdoBandage.png"
		},
		silver: {
			name: "Heavy Gibdo Sword",
			imagePath: "assets/images/materials/HeavyGibdoSword.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Prologue: The Sorceress of the Woods",
					amount: "30 Gibdos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Epilogue: The Sacred Sword",
					amount: "10 Gibdos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Linkle's Tale: The Other Hero",
					amount: "9 Gibdos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Wind Waker: Reclaiming the Darkness",
					amount: "16 Gibdos",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "K1",
					title: "K1: Defend the allied keeps! LV.2",
					amount: "15 Gibdos",
					recommended: false
				},
				{
					tile: "E2",
					title: "E2: Attend the Festival of Cuccos!",
					amount: "15-17 Gibdos",
					recommended: false
				},
				{
					tile: "J5",
					title: "J5: Fight as a warrior of fire! LV.1",
					amount: "9 Gibdos",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "C1",
					title: "C1: Triumph over the trickster ghost gang!",
					amount: "8 Gibdos",
					recommended: false
				},
				{
					tile: "M1",
					title: "M1: Win the KO competition! LV.3",
					amount: "8 Gibdos",
					recommended: false
				},
				{
					tile: "N1",
					title: "N1: Defeat the enemy celebrities!",
					amount: "8 Gibdos",
					recommended: false
				},
				{
					tile: "D5",
					title: "D5: Win the KO competition! LV.7",
					amount: "10 Gibdos",
					recommended: false
				},
				{
					tile: "F5",
					title: "F5: Rack up your KO count! LV.3",
					amount: "10 Gibdos",
					recommended: false
				},
				{
					tile: "E7",
					title: "E7: Final battle! Defeat the dragon of the ruins!",
					amount: "7-9+ Gibdos",
					recommended: false
				},
				{
					tile: "J7",
					title: "J7: Win the KO competition! LV.5",
					amount: "3 infinitely respawning Gibdos",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "C5",
					title: "C5: Capture the enemy keeps! LV.2",
					amount: "7-13 Gibdos",
					recommended: false
				},
				{
					tile: "E6",
					title: "E6: Fight as a warrior of darkness! LV.1",
					amount: "9 Gibdos",
					recommended: false
				},
				{
					tile: "H6",
					title: "H6: Rack up your KO count! LV.2",
					amount: "8 Gibdos",
					recommended: false
				},
				{
					tile: "E7",
					title: "E7: Defend the allied keeps! LV.2",
					amount: "15 Gibdos",
					recommended: false
				},
				{
					tile: "C8",
					title: "C8: Attend the Festival of Cuccos!",
					amount: "15-17 Gibdos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "I1",
					title: "I1: Final battle! Defeat the desert dragon!",
					amount: "12 Gibdos",
					recommended: false
				},
				{
					tile: "K1",
					title: "K1: Look for a solution!",
					amount: "13 Gibdos",
					recommended: false
				},
				{
					tile: "F2",
					title: "F2: Use a magic circle to defeat the enemy forces! LV.1",
					amount: "12 Gibdos",
					recommended: false
				},
				{
					tile: "K2",
					title: "K2: Team up and defeat the enemy forces! LV.7 ",
					amount: "9 Gibdos if the enemy is Zant and Ghirahim",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "L1",
					title: "L1: Win the Rupee competition! LV.4",
					amount: "Rupee Captains are Gibdos",
					recommended: false
				},
				{
					tile: "J3",
					title: "J3: Win the KO competition! LV.4",
					amount: "11 Gibdos",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "N1",
					title: "N1: Defeat the enemy forces!",
					amount: "10 Gibdos",
					recommended: false
				},
				{
					tile: "C6",
					title: "C6: Stop the Rogue Forces and defeat the enemy! LV.2",
					amount: "9 Gibdos",
					recommended: false
				},
				{
					tile: "M8",
					title: "M8: Final battle! Defeat the beast of the eternal fire!",
					amount: "8 Gibdos",
					recommended: false
				},
			]
		},
	]
}

export const ReDeadKnight: EnemyType = {
	name: "ReDead Knight",
	imagePath: "assets/images/enemies/ReDeadKnight.png",
	drops: {
		bronze: {
			name: "ReDead Bandage",
			imagePath: "assets/images/materials/ReDeadBandage.png"
		},
		silver: {
			name: "ReDead Knight Ashes",
			imagePath: "assets/images/materials/ReDeadKnightAshes.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Twilight Princess: The Shadow King",
					amount: "9 ReDead Knights",
					recommended: false
				},
				{
					tile: undefined,
					title: "Epilogue: A War of Spirit ",
					amount: "9-12+ ReDead Knights Infinitely respawn from magic keeps until first objective is complete.",
					recommended: true
				},
				{
					tile: undefined,
					title: "Cia's Tale: The Usurper King",
					amount: "11-16 ReDead Knights",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "C4",
					title: "C4: Defeat 600 enemies in time! LV.1",
					amount: "7 ReDead Knights",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "E2",
					title: "E2: Strengthen your army and defeat the enemy! LV.5",
					amount: "10+ ReDead Knights",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "B2",
					title: "B2: Destroy enemies and traitors alike! LV.8",
					amount: "10 ReDead Knights",
					recommended: false
				},
				{
					tile: "P3",
					title: "P3: Rack up your KO count! LV.11",
					amount: "10 ReDead Knights",
					recommended: false
				},
				{
					tile: "E4",
					title: "E4: Defeat the gulf beast!",
					amount: "9 ReDead Knights",
					recommended: false
				},
				{
					tile: "A8",
					title: "A8: Rack up your KO count! LV.12",
					amount: "10 ReDead Knights",
					recommended: false
				},
				{
					tile: "N8",
					title: "N8: Guard the allied keeps with your life! LV.7",
					amount: "9 ReDead Knights",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "I3",
					title: "I3: Team up and defeat the enemy forces! LV.4",
					amount: "5 ReDead Knights if the enemy is Agitha",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "C1",
					title: "C1: Yesterday's foes are today's allies!",
					amount: "12 ReDead Knights",
					recommended: false
				},
				{
					tile: "J3",
					title: "J3: Win the KO competition! LV.4",
					amount: "10 ReDead Knights",
					recommended: false
				},
				{
					tile: "N7",
					title: "N7: Use diversionary tactics to defeat the enemy! LV.2",
					amount: "12 ReDead Knights",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "H3",
					title: "H3: Rack up your KO count! LV.2",
					amount: "10 ReDead Knights",
					recommended: false
				},
				{
					tile: "J6",
					title: "J6: Defeat the Gibdo Forces!",
					amount: "11 ReDead Knights",
					recommended: false
				},
				{
					tile: "K7",
					title: "K7: Win the KO competition! LV.1",
					amount: "10 ReDead Knights",
					recommended: false
				},
			]
		},
		{
			map: "Challenge Mode",
			tiles: [
				{
					tile: undefined,
					title: "Battle Challenge: Defeat 800 enemies!",
					amount: "12 ReDead Knights",
					recommended: false
				},
			]
		},
	]
}

export const Lizalfos: EnemyType = {
	name: "Lizalfos",
	imagePath: "assets/images/enemies/Lizalfos.png",
	drops: {
		bronze: {
			name: "Lizalfos Scale",
			imagePath: "assets/images/materials/LizalfosScale.png"
		},
		silver: {
			name: "Lizalfos Gauntlet",
			imagePath: "assets/images/materials/LizalfosGauntlet.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Prologue: The Armies of Ruin",
					amount: "13 Lizalfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Prologue: The Sheikah Tribesman",
					amount: "10-14 Lizalfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ocarina of Time: The Water Temple",
					amount: "18-20 Lizalfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Linkle's Tale: Powers Collide",
					amount: "17 Lizalfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ganondorf: Ganondorf's Return",
					amount: "21 Lizalfos",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "A1",
					title: "A1: Defeat 1,000 enemies in time!",
					amount: "9 Lizalfos",
					recommended: false
				},
				{
					tile: "L8",
					title: "L8: Run swiftly across the battlefield!",
					amount: "13 Lizalfos",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "J2",
					title: "J2: Rack up your KO count! LV.1",
					amount: "8 Lizalfos",
					recommended: false
				},
				{
					tile: "L2",
					title: "L2: Win the KO competition! LV.2",
					amount: "3 infinitely respawning Lizalfos",
					recommended: false
				},
				{
					tile: "M3",
					title: "M3: Rack up your KO count! LV.2",
					amount: "10 Lizalfos",
					recommended: false
				},
				{
					tile: "G4",
					title: "G4: Win the KO competition! LV.8",
					amount: "10 Lizalfos",
					recommended: false
				},
				{
					tile: "J7",
					title: "J7: Win the KO competition! LV.5",
					amount: "10 Lizalfos",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "A2",
					title: "A2: Defeat 1,000 enemies in time!",
					amount: "9 Lizalfos",
					recommended: false
				},
				{
					tile: "F2",
					title: "F2: Run swiftly across the battlefield!",
					amount: "13 Lizalfos",
					recommended: false
				},
				{
					tile: "G5",
					title: "G5: Destroy the army with boosted morale! LV.2",
					amount: "8-9 Lizalfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "D1",
					title: "D1: Rack up your KO count! LV.3 ",
					amount: "14 Lizalfos",
					recommended: true
				},
				{
					tile: "A4",
					title: "A4: Defeat the Wizard Forces!",
					amount: "15 Lizalfos",
					recommended: false
				},
				{
					tile: "N6",
					title: "N6: Show no fear to the enemies of Twilight!",
					amount: "13 Lizalfos",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "G1",
					title: "G1: Final battle! Defeat the dragon of the temple!",
					amount: "15 Lizalfos",
					recommended: false
				},
				{
					tile: "C2",
					title: "C2: Win the KO competition! LV.9",
					amount: "10 Lizalfos",
					recommended: false
				},
				{
					tile: "I4",
					title: "I4: Win the Rupee competition! LV.2",
					amount: "Rupee Captains are Lizalfos",
					recommended: false
				},
				{
					tile: "M4",
					title: "M4: Win the KO competition! LV.8",
					amount: "10 Lizalfos",
					recommended: false
				},
				{
					tile: "H5",
					title: "H5: The Cucco army rises once more!",
					amount: "14 Lizalfos",
					recommended: false
				},
				{
					tile: "L6",
					title: "L6: Win the KO competition! LV.3",
					amount: "10 Lizalfos",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "L2",
					title: "L2: Defeat the warriors of Skyloft! LV.2",
					amount: "12 Lizalfos",
					recommended: false
				},
				{
					tile: "H3",
					title: "H3: Rack up your KO count! LV.2",
					amount: "9 Lizalfos",
					recommended: false
				},
				{
					tile: "P4",
					title: "P4: Final battle! Defeat the beast of the iceberg!",
					amount: "8 Lizalfos",
					recommended: false
				},
				{
					tile: "G5",
					title: "G5: Final battle! Defeat the Demon King in the castle!",
					amount: "13 Lizalfos",
					recommended: false
				},
			]
		},
	]
}

export const Dinolfos: EnemyType = {
	name: "Dinolfos",
	imagePath: "assets/images/enemies/Dinolfos.png",
	drops: {
		bronze: {
			name: "Dinolfos Fang",
			imagePath: "assets/images/materials/DinolfosFang.png"
		},
		silver: {
			name: "Dinolfos Arm Guard",
			imagePath: "assets/images/materials/DinolfosArmGuard.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Epilogue: Shining Beacon",
					amount: "27 Dinolfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Linkle's Tale: Powers Collide",
					amount: "11 Dinolfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Grand Finale: Liberation of the Triforce",
					amount: "14+ Dinolfos",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "D1",
					title: "D1: Fight the chosen ones!",
					amount: "20 Dinolfos",
					recommended: false
				},
				{
					tile: "I1",
					title: "I1: Weather the storm of enemy forces!",
					amount: "15-18 Dinolfos",
					recommended: false
				},
				{
					tile: "P1",
					title: "P1: Take on the sword masters!",
					amount: "11 Dinolfos",
					recommended: false
				},
				{
					tile: "A3",
					title: "A3: Defeat the Dinolfos Forces!",
					amount: "13 Dinolfos",
					recommended: false
				},
				{
					tile: "C3",
					title: "C3: Defeat the shadow beast!",
					amount: "9 Dinolfos",
					recommended: false
				},
				{
					tile: "F3",
					title: "F3: Fight as a warrior of darkness! LV.2",
					amount: "9 Dinolfos",
					recommended: false
				},
				{
					tile: "D7",
					title: "D7: Defeat 700 enemies in time! LV.1",
					amount: "7 Dinolfos",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "I4",
					title: "I4: Have a showdown between hero and imp!",
					amount: "7 Dinolfos",
					recommended: false
				},
				{
					tile: "M5",
					title: "M5: Win the KO competition! LV.4",
					amount: "10 Dinolfos",
					recommended: false
				},
				{
					tile: "D6",
					title: "D6: Fight as a warrior of water!",
					amount: "7-10+ Dinolfos",
					recommended: false
				},
				{
					tile: "K7",
					title: "K7: Defeat your enemies...with kindness!",
					amount: "11 Dinolfos",
					recommended: false
				},
				{
					tile: "L7",
					title: "L7: Team up and defeat the enemy forces! LV.2",
					amount: "7 Dinolfos if the enemy is Linkle and Sheik",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "C2",
					title: "C2: Fight the chosen ones!",
					amount: "20 Dinolfos",
					recommended: false
				},
				{
					tile: "L2",
					title: "L2: Defeat the mountain beast!",
					amount: "9 Dinolfos",
					recommended: false
				},
				{
					tile: "P4",
					title: "P4: Take on the sword masters!",
					amount: "11 Dinolfos",
					recommended: false
				},
				{
					tile: "G5",
					title: "G5: Destroy the army with boosted morale! LV.2",
					amount: "9 Dinolfos",
					recommended: false
				},
				{
					tile: "J5",
					title: "J5: Rack up your KO count! LV.5",
					amount: "10 Dinolfos",
					recommended: false
				},
				{
					tile: "L6",
					title: "L6: Defeat the Dinolfos Forces!",
					amount: "13 Dinolfos",
					recommended: false
				},
				{
					tile: "O6",
					title: "O6: Fight as a warrior of lightning! LV.2",
					amount: "9 Dinolfos",
					recommended: false
				},
				{
					tile: "D7",
					title: "D7: Rack up your KO count! LV.10",
					amount: "10 Dinolfos",
					recommended: false
				},
				{
					tile: "P8",
					title: "P8: Rack up your KO count! LV.9",
					amount: "10 Dinolfos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "C1",
					title: "C1: Use a magic circle to defeat the enemy forces! LV.2",
					amount: "10-17 Dinolfos",
					recommended: false
				},
				{
					tile: "D1",
					title: "D1: Rack up your KO count! LV.3",
					amount: "10 Dinolfos",
					recommended: false
				},
				{
					tile: "A3",
					title: "A3: Team up and defeat the enemy forces! LV.8 ",
					amount: "9 Dinolfos if enemy is Agitha and Ruto",
					recommended: true
				},
				{
					tile: "G4",
					title: "G4: Final battle! Defeat the dragon of the lake!",
					amount: "8 Dinolfos",
					recommended: false
				},
				{
					tile: "E5",
					title: "E5: Final battle! Defeat the Demon King of the castle!",
					amount: "12 Dinolfos",
					recommended: false
				},
				{
					tile: "M5",
					title: "M5: Final battle! Defeat the beast of the jungle!",
					amount: "8-10 Dinolfos",
					recommended: false
				},
				{
					tile: "F6",
					title: "F6: Destroy the army with boosted morale! LV.2",
					amount: "10 Dinolfos",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "B3",
					title: "B3: Win the Rupee competition! LV.9",
					amount: "Rupee Captains are Dinolfos",
					recommended: false
				},
				{
					tile: "K4",
					title: "K4: Win the KO competition! LV.1",
					amount: "3 infinitely respawning Dinolfos",
					recommended: false
				},
				{
					tile: "M4",
					title: "M4: Win the KO competition! LV.8",
					amount: "10 Dinolfos",
					recommended: false
				},
				{
					tile: "L6",
					title: "L6: Win the KO competition! LV.3",
					amount: "11 Dinolfos",
					recommended: false
				},
				{
					tile: "J8",
					title: "J8: Use diversionary tactics to defeat the enemy! LV.1",
					amount: "12 Dinolfos",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "A2",
					title: "A2: Win the Rupee competition! LV.2",
					amount: "Rupee Captains are Dinolfos",
					recommended: false
				},
				{
					tile: "C7",
					title: "C7: Rack up your KO count! LV.1",
					amount: "18 Dinolfos",
					recommended: false
				},
				{
					tile: "E8",
					title: "E8: Win the Rupee competition! LV.4",
					amount: "Rupee Captains are Dinolfos",
					recommended: false
				},
			]
		},
		{
			map: "Challenge Mode",
			tiles: [
				{
					tile: undefined,
					title: "Ganon's Fury: Survival Battle LV.3",
					amount: "75+ Dinolfos, disappear between rounds",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ganon's Fury: Survival Battle LV.2",
					amount: "82-85+ Dinolfos, disappear between rounds",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ganon's Fury: Survival Battle LV.3",
					amount: "100+ Dinolfos, disappear between rounds",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ganon's Fury: Survival Battle LV.4",
					amount: "163-179+ Dinolfos, disappear between rounds",
					recommended: false
				},
			]
		},
	]
}

export const Moblin: EnemyType = {
	name: "Moblin",
	imagePath: "assets/images/enemies/Moblin.png",
	drops: {
		bronze: {
			name: "Moblin Flank",
			imagePath: "assets/images/materials/MoblinFlank.png"
		},
		silver: {
			name: "Moblin Spear",
			imagePath: "assets/images/materials/MoblinSpear.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Skyward Sword: Land in the Sky",
					amount: "12 Moblins",
					recommended: false
				},
				{
					tile: undefined,
					title: "Skyward Sword: Sealed Ambition",
					amount: "13 Moblins",
					recommended: false
				},
				{
					tile: undefined,
					title: "Linkle's Tale: The Demon Lord's Plan",
					amount: "7 Moblins",
					recommended: false
				},
				{
					tile: undefined,
					title: "Linkle's Tale: The Other Hero",
					amount: "11 Moblins",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "O2",
					title: "O2: Rescue the allied forces! LV.3",
					amount: "13 Moblins",
					recommended: false
				},
				{
					tile: "F4",
					title: "F4: Defeat 600 enemies in time! LV.2",
					amount: "7 Moblins",
					recommended: false
				},
				{
					tile: "E8",
					title: "E8: Defeat the wasteland beast!",
					amount: "13-14 Moblins",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "D2",
					title: "D2: Defeat the barrier specialist forces! LV.4",
					amount: "7-9+ Moblins",
					recommended: false
				},
				{
					tile: "H2",
					title: "H2: Win the KO competition! LV.1",
					amount: "8 Moblins; 3 infinitely respawning Moblins",
					recommended: false
				},
				{
					tile: "L2",
					title: "L2: Win the KO competition! LV.2",
					amount: "10 Moblins",
					recommended: false
				},
				{
					tile: "A3",
					title: "A3: Strengthen your army and defeat the enemy! LV.3",
					amount: "9+ Moblins",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "J2",
					title: "J2: Defeat the valley beast!",
					amount: "13 Moblins",
					recommended: false
				},
				{
					tile: "B4",
					title: "B4: Defend the allied keeps! LV.1",
					amount: "14-15 Moblins",
					recommended: false
				},
				{
					tile: "H6",
					title: "H6: Rack up your KO count! LV.2",
					amount: "10 Moblins",
					recommended: false
				},
				{
					tile: "H8",
					title: "H8: Rack up your KO count! LV.1",
					amount: "8 Moblins",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "D2",
					title: "D2: Rack up your KO count! LV.2",
					amount: "20 Moblins",
					recommended: false
				},
				{
					tile: "E3",
					title: "E3: Win the Rupee competition! LV.2",
					amount: "Rupee Captains are Moblins",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "J3",
					title: "J3: Behold the power of teamwork!",
					amount: "9-14 Moblins",
					recommended: false
				},
				{
					tile: "K7",
					title: "K7: Rack up your KO count! LV.1 ",
					amount: "19 Moblins",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "B2",
					title: "B2: Final battle! Defeat the Demon King of the moon!",
					amount: "12 Moblins",
					recommended: false
				},
				{
					tile: "F2",
					title: "F2: Win the Rupee competition! LV.7",
					amount: "Rupee Captains are Moblins",
					recommended: false
				},
				{
					tile: "K5",
					title: "K5: Search the battlefield for wandering enemies!",
					amount: "13 Moblins",
					recommended: false
				},
			]
		},
	]
}

export const ShieldMoblin: EnemyType = {
	name: "Shield Moblin",
	imagePath: "assets/images/enemies/ShieldMoblin.png",
	drops: {
		bronze: {
			name: "Shield-Moblin Helmet",
			imagePath: "assets/images/materials/Shield-MoblinHelmet.png"
		},
		silver: {
			name: "Metal Moblin Shield",
			imagePath: "assets/images/materials/MetalMoblinShield.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Epilogue: A War of Spirit",
					amount: "11+ Shield Moblins",
					recommended: false
				},
				{
					tile: undefined,
					title: "Grand Finale: Enduring Resolve",
					amount: "20+ Shield Moblins",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "C1",
					title: "C1: Fight as a warrior of darkness! LV.3",
					amount: "12 Shield Moblins",
					recommended: false
				},
				{
					tile: "A4",
					title: "A4: Defeat the Shield Moblin Forces! LV.1",
					amount: "11 Shield Moblins",
					recommended: false
				},
				{
					tile: "P7",
					title: "P7: Watch out for falling artillery fire!",
					amount: "15 Shield Moblins",
					recommended: false
				},
				{
					tile: "N8",
					title: "N8: Defeat the Shield Moblin Forces! LV.2",
					amount: "17 Shield Moblins",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "C3",
					title: "C3: Win the KO competition! LV.6",
					amount: "10 Shield Moblins",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "I1",
					title: "I1: Fight as a warrior of water! LV.2",
					amount: "12 Shield Moblins",
					recommended: false
				},
				{
					tile: "O1",
					title: "O1: Defeat the Shield Moblin Forces! LV.1",
					amount: "12 Shield Moblins",
					recommended: false
				},
				{
					tile: "D2",
					title: "D2: Destroy the army with boosted morale! LV.7",
					amount: "8-12 Shield Moblins",
					recommended: false
				},
				{
					tile: "I3",
					title: "I3: Destroy the army with boosted morale! LV.3",
					amount: "7 Shield Moblins",
					recommended: false
				},
				{
					tile: "A4",
					title: "A4: Defeat the shadow beast!",
					amount: "9 Shield Moblins",
					recommended: false
				},
				{
					tile: "K7",
					title: "K7: Rack up your KO count! LV.4",
					amount: "10 Shield Moblins",
					recommended: false
				},
				{
					tile: "P7",
					title: "P7: Watch out for falling artillery fire!",
					amount: "15 Shield Moblins",
					recommended: false
				},
				{
					tile: "A8",
					title: "A8: Rack up your KO count! LV.12",
					amount: "10 Shield Moblins",
					recommended: false
				},
				{
					tile: "L8",
					title: "L8: Defeat the Shield Moblin Forces! LV.2",
					amount: "17 Shield Moblins",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "B4",
					title: "B4: Team up and defeat the enemy forces! LV.6",
					amount: "5 Shield Moblins",
					recommended: false
				},
				{
					tile: "J4",
					title: "J4: Defeat the barrier specialist forces! LV.1 ",
					amount: "6 Shield Moblins",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "K4",
					title: "K4: Win the KO competition! LV.1",
					amount: "8 Shield Moblins",
					recommended: false
				},
				{
					tile: "F5",
					title: "F5: Help those in need!",
					amount: "8 Shield Moblins",
					recommended: false
				},
				{
					tile: "G6",
					title: "G6: Get to those troops...before someone else does! LV.4",
					amount: "8 Shield Moblins",
					recommended: false
				},
			]
		},
	]
}

export const Darknut: EnemyType = {
	name: "Darknut",
	imagePath: "assets/images/enemies/Darknut.png",
	drops: {
		bronze: {
			name: "Piece of Darknut Armor",
			imagePath: "assets/images/materials/PieceofDarknutArmor.png"
		},
		silver: {
			name: "Large Darknut Sword",
			imagePath: "assets/images/materials/LargeDarknutSword.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Prologue: The Sorceress of the Valley",
					amount: "18-22+ Darknuts",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Princess: Land of Twilight",
					amount: "9-12 Darknuts, 2 Dark Darknuts",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ganondorf: Ganondorf's Return",
					amount: "2-6+ Darknuts If you fail the \"Defeat all the Prison Guards!\" mission, Darknuts will infinitely spawn from the three prison cells. But, they do not show up in Battlefield Info.",
					recommended: false
				},
				{
					tile: undefined,
					title: "Linkle's Tale: Her True Self",
					amount: "10-12 Darknuts, 1 Dark Darknut",
					recommended: false
				},
				{
					tile: undefined,
					title: "Cia's Tale: The Usurper King",
					amount: "7-10 Darknuts",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "A5",
					title: "A5: Defeat the Darknut Forces! LV.2",
					amount: "13 Darknuts",
					recommended: false
				},
				{
					tile: "A8",
					title: "A8: Defeat the enemy forces! LV.2",
					amount: "7 Darknuts",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "M1",
					title: "M1: Win the KO competition! LV.3",
					amount: "10 Darknuts",
					recommended: false
				},
				{
					tile: "M5",
					title: "M5: Win the KO competition! LV.4",
					amount: "3 infinitely respawning Darknuts",
					recommended: false
				},
				{
					tile: "J7",
					title: "J7: Win the KO competition! LV.5",
					amount: "8 Darknuts",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "L2",
					title: "L2: Defeat the mountain beast!",
					amount: "8 Darknuts",
					recommended: false
				},
				{
					tile: "K4",
					title: "K4: Defeat the Darknut Forces!",
					amount: "13 Darknuts",
					recommended: false
				},
				{
					tile: "M7",
					title: "M7: Defeat the forest dragon!",
					amount: "7 Darknuts",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "G1",
					title: "G1: Defeat the beast of the palace! ",
					amount: "13 Darknuts",
					recommended: true
				},
				{
					tile: "C2",
					title: "C2: Defeat the Darknut Forces!",
					amount: "9 Darknuts",
					recommended: false
				},
				{
					tile: "C5",
					title: "C5: A collision of Cuccos!",
					amount: "8-14 Darknuts",
					recommended: false
				},
				{
					tile: "E6",
					title: "E6: A leader never sleeps!",
					amount: "8-13 Darknuts",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "I3",
					title: "I3: Enjoy this house of horrors!",
					amount: "14 Darknuts",
					recommended: false
				},
				{
					tile: "G4",
					title: "G4: Win the KO competition! LV.6",
					amount: "10 Darknuts",
					recommended: false
				},
				{
					tile: "J4",
					title: "J4: Get to those troops...before someone else does! LV.1",
					amount: "10 Darknuts",
					recommended: false
				},
				{
					tile: "K4",
					title: "K4: Win the KO competition! LV.1",
					amount: "10 Darknuts",
					recommended: false
				},
				{
					tile: "M4",
					title: "M4: Win the KO competition! LV.8",
					amount: "3 infinitely respawning Darknuts",
					recommended: false
				},
				{
					tile: "N5",
					title: "N5: Final battle! Defeat the beast of the castle!",
					amount: "14 Darknuts",
					recommended: false
				},
				{
					tile: "J6",
					title: "J6: Win the Rupee compeitition! LV.1",
					amount: "Rupee Captains are Darknuts",
					recommended: false
				},
				{
					tile: "D7",
					title: "D7: Defeat the ocean beast!",
					amount: "13 Darknuts",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "P4",
					title: "P4: Final battle! Defeat the beast of the iceberg!",
					amount: "7 Darknuts",
					recommended: false
				},
				{
					tile: "O6",
					title: "O6: Win the KO competition! LV.2",
					amount: "10 Darknuts",
					recommended: false
				},
				{
					tile: "L8",
					title: "L8: Win the Rupee competition! LV.1",
					amount: "Rupee Captains are Darknuts",
					recommended: false
				},
				{
					tile: undefined,
					title: "Rewards Map",
					amount: "",
					recommended: false
				},
				{
					tile: undefined,
					title: "Rulers of Twilight",
					amount: "8-14 Darknuts",
					recommended: false
				},
			]
		},
	]
}

export const Stalmaster: EnemyType = {
	name: "Stalmaster",
	imagePath: "assets/images/enemies/Stalmaster.png",
	drops: {
		bronze: {
			name: "Stalmaster Wrist Bone",
			imagePath: "assets/images/materials/StalmasterWristBone.png"
		},
		silver: {
			name: "Stalmaster's Skull",
			imagePath: "assets/images/materials/StalmastersSkull.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Skyward Sword: Sealed Ambition",
					amount: "7-10 Stalmasters",
					recommended: false
				},
				{
					tile: undefined,
					title: "Grand Finale: Liberation of the Triforce",
					amount: "7 Stalmasters",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "C2",
					title: "C2: Be like a magician and make your foes disappear!",
					amount: "14 Stalmasters",
					recommended: false
				},
				{
					tile: "H2",
					title: "H2: Deal with uninvited guests!",
					amount: "15 Stalmasters",
					recommended: false
				},
				{
					tile: "I2",
					title: "I2: Defeat the enemy forces! LV.3",
					amount: "13 Stalmasters",
					recommended: false
				},
				{
					tile: "O4",
					title: "O4: Watch out for thieves!",
					amount: "15 Stalmasters",
					recommended: false
				},
				{
					tile: "L7",
					title: "L7: Defeat 800 enemies in time!",
					amount: "8 Stalmasters",
					recommended: false
				},
				{
					tile: "J8",
					title: "J8: Prevent reinforcements from arriving!",
					amount: "17-21 Stalmasters",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "C1",
					title: "C1: Triumph over the trickster ghost gang!",
					amount: "7 Stalmasters",
					recommended: false
				},
				{
					tile: "E1",
					title: "E1: Destroy enemies and traitors alike! LV.2",
					amount: "7 Stalmasters",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "J1",
					title: "J1: Rack up your KO count! LV.8",
					amount: "10 Stalmasters",
					recommended: false
				},
				{
					tile: "E2",
					title: "E2: Prevent reinforcements from arriving!",
					amount: "17-21 Stalmasters",
					recommended: false
				},
				{
					tile: "D5",
					title: "D5: Defeat 800 enemies in time!",
					amount: "8 Stalmasters",
					recommended: false
				},
				{
					tile: "A7",
					title: "A7: Rack up your KO count! LV.7",
					amount: "10 Stalmasters",
					recommended: false
				},
				{
					tile: "O7",
					title: "O7: Defeat the enemy forces! LV.4",
					amount: "13 Stalmasters",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "K7",
					title: "K7: Win the Rupee competition! LV.3",
					amount: "Rupee Captains are Stalmasters",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "F5",
					title: "F5: Defeat 1,000 enemies in time! ",
					amount: "8 Stalmasters",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "M3",
					title: "M3: Fight as a warrior of water!",
					amount: "14 Stalmasters",
					recommended: false
				},
				{
					tile: "G4",
					title: "G4: Win the KO competition! LV.6",
					amount: "11 Stalmasters",
					recommended: false
				},
				{
					tile: "I8",
					title: "I8: Win the Rupee competition! LV.3",
					amount: "Rupee Captains are Stalmasters",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "I7",
					title: "I7: Final battle! Defeat the beast of the cave!",
					amount: "11 Stalmasters",
					recommended: false
				},
			]
		},
	]
}

export const BigPoe: EnemyType = {
	name: "Big Poe",
	imagePath: "assets/images/enemies/BigPoe.png",
	drops: {
		bronze: {
			name: "Big Poe Necklace",
			imagePath: "assets/images/materials/BigPoeNecklace.png"
		},
		silver: {
			name: "Big Poe's Lantern",
			imagePath: "assets/images/materials/BigPoesLantern.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Prologue: The Sheikah Tribesman",
					amount: "10 Big Poes",
					recommended: false
				},
				{
					tile: undefined,
					title: "Linkle's Tale: The Girl in the Green Tunic",
					amount: "14-23 Big Poes",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ocarina of Time: The Water Temple",
					amount: "9 Big Poes",
					recommended: false
				},
				{
					tile: undefined,
					title: "Wind Waker: Watchers of the Triforce",
					amount: "10 Big Poes",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "F1",
					title: "F1: Defeat the Demon King!",
					amount: "9 Big Poes",
					recommended: false
				},
				{
					tile: "L5",
					title: "L5: Defeat the warriors of time!",
					amount: "8 Big Poes",
					recommended: false
				},
				{
					tile: "O6",
					title: "O6: Defeat the Big Poe Forces!",
					amount: "18 Big Poes",
					recommended: false
				},
				{
					tile: "G8",
					title: "G8: Fight as a warrior of light! LV.1",
					amount: "8 Big Poes",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "G1",
					title: "G1: Final battle! Defeat the beast of the temple!",
					amount: "8 Big Poes",
					recommended: false
				},
				{
					tile: "L2",
					title: "L2: Win the KO competition! LV.2",
					amount: "8 Big Poes",
					recommended: false
				},
				{
					tile: "F3",
					title: "F3: Rack up your KO count! LV.4",
					amount: "9 Big Poes",
					recommended: false
				},
				{
					tile: "N3",
					title: "N3: Destroy the army with boosted morale! LV.1",
					amount: "8 Big Poes",
					recommended: false
				},
				{
					tile: "M6",
					title: "M6: Destroy the army with boosted morale! LV.2",
					amount: "7 Big Poes",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "A1",
					title: "A1: Defeat the Demon King!",
					amount: "9 Big Poes",
					recommended: false
				},
				{
					tile: "J3",
					title: "J3: Rack up your KO count! LV.3",
					amount: "10 Big Poes",
					recommended: false
				},
				{
					tile: "N3",
					title: "N3: Defeat the Big Poe Forces!",
					amount: "18 Big Poes",
					recommended: false
				},
				{
					tile: "B8",
					title: "B8: Fight as a warrior of darkness! LV.2",
					amount: "9 Big Poes",
					recommended: false
				},
				{
					tile: "H8",
					title: "H8: Rack up your KO count! LV.1",
					amount: "10 Big Poes",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "C5",
					title: "C5: Win the Rupee competition! LV.1",
					amount: "Rupee Captains are Big Poes",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "J6",
					title: "J6: Destroy the army with boosted morale! LV.1",
					amount: "16 Big Poes",
					recommended: false
				},
				{
					tile: "C7",
					title: "C7: The hunters are on the move! ",
					amount: "14 Big Poes",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "C2",
					title: "C2: Win the KO competition! LV.9",
					amount: "10 Big Poes",
					recommended: false
				},
				{
					tile: "I2",
					title: "I2: Win the Rupee competition! LV.5",
					amount: "Rupee Captains are Big Poes",
					recommended: false
				},
				{
					tile: "F3",
					title: "F3: Final battle! Defeat the beast of the bay!",
					amount: "9 Big Poes",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "B4",
					title: "B4: Final battle! Defeat the beast of the great tree!",
					amount: "11 Big Poes",
					recommended: false
				},
				{
					tile: "M8",
					title: "M8: Final battle! Defeat the beast of the eternal fire!",
					amount: "7 Big Poes",
					recommended: false
				},
			]
		},
	]
}

export const IcyBigPoe: EnemyType = {
	name: "Icy Big Poe",
	imagePath: "assets/images/enemies/IcyBigPoe.png",
	drops: {
		bronze: {
			name: "Essence of Icy Big Poe",
			imagePath: "assets/images/materials/EssenceofIcyBigPoe.png"
		},
		silver: {
			name: "Icy Big Poe's Talisman",
			imagePath: "assets/images/materials/IcyBigPoesTalisman.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Epilogue: Shining Beacon",
					amount: "10 Icy Big Poes",
					recommended: false
				},
				{
					tile: undefined,
					title: "Wind Waker: Reclaiming Darkness",
					amount: "10+ Icy Big Poes",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "B1",
					title: "B1: Defend the allied keeps! LV.3",
					amount: "12 Icy Big Poes",
					recommended: false
				},
				{
					tile: "H1",
					title: "H1: Prevent the sorceress's scheme!",
					amount: "12 Icy Big Poes",
					recommended: false
				},
				{
					tile: "F5",
					title: "F5: Defeat the ocean beast!",
					amount: "9 Icy Big Poes",
					recommended: false
				},
				{
					tile: "P6",
					title: "P6: Battle across the field!",
					amount: "15 Icy Big Poes",
					recommended: false
				},
				{
					tile: "N7",
					title: "N7: Defeat the forest dragon!",
					amount: "21 Icy Big Poes",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "G1",
					title: "G1: Final battle! Defeat the beast of the temple!",
					amount: "7 Icy Big Poes",
					recommended: false
				},
				{
					tile: "H3",
					title: "H3: Defeat 1,000 enemies before the Rogue Forces do!",
					amount: "9 Icy Big Poes",
					recommended: false
				},
				{
					tile: "M5",
					title: "M5: Win the KO competition! LV.4",
					amount: "8 Icy Big Poes",
					recommended: false
				},
				{
					tile: "H6",
					title: "H6: Destroy the army with boosted morale! LV.3",
					amount: "15 Icy Big Poes",
					recommended: false
				},
				{
					tile: "A7",
					title: "A7: Strengthen your army and defeat the enemy! LV.4",
					amount: "11+ Icy Big Poes",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "G1",
					title: "G1: Prevent the sorceress's scheme!",
					amount: "12 Icy Big Poes",
					recommended: false
				},
				{
					tile: "C7",
					title: "C7: Battle across the field!",
					amount: "15 Icy Big Poes",
					recommended: false
				},
				{
					tile: "D7",
					title: "D7: Rack up your KO count! LV.10",
					amount: "10 Icy Big Poes",
					recommended: false
				},
				{
					tile: "P8",
					title: "P8: Rack up your KO count! LV.9",
					amount: "10 Icy Big Poes",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "N6",
					title: "N6: Win the Rupee competition! LV.4",
					amount: "Rupee Captains are Icy Big Poes",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "E1",
					title: "E1: Final battle! Defeat the beast of the ruins!",
					amount: "10-16 Icy Big Poes",
					recommended: false
				},
				{
					tile: "G2",
					title: "G2: Team up and defeat the enemy forces! LV.5",
					amount: "7 Icy Big Poes if Zant is the enemy",
					recommended: false
				},
				{
					tile: "L4",
					title: "L4: Fight as a warrior of light! LV.2 ",
					amount: "17 Icy Big Poes",
					recommended: true
				},
				{
					tile: "D5",
					title: "D5: Rescue the allied forces!",
					amount: "12 Icy Big Poes",
					recommended: false
				},
				{
					tile: "D7",
					title: "D7: Destroy enemies and traitors alike!",
					amount: "9 Icy Big Poes",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "I1",
					title: "I1: Will you fall, or will you bloom?",
					amount: "8 Icy Big Poes",
					recommended: false
				},
				{
					tile: "L5",
					title: "L5: Win the KO competition! LV.7",
					amount: "10 Icy Big Poes",
					recommended: false
				},
				{
					tile: "M5",
					title: "M5: Win the Rupee competition! LV.8",
					amount: "Rupee Captains are Icy Big Poes",
					recommended: false
				},
				{
					tile: "H8",
					title: "H8: Defeat the forest dragon!",
					amount: "14 Icy Big Poes",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "J5",
					title: "J5: Final battle! Defeat the beast of the temple!",
					amount: "11 Icy Big Poes",
					recommended: false
				},
				{
					tile: "O6",
					title: "O6: Win the KO competition! LV.2",
					amount: "3 infinitely respawning Icy Big Poes",
					recommended: false
				},
			]
		},
	]
}

export const HylianCaptain: EnemyType = {
	name: "Hylian Captain",
	imagePath: "assets/images/enemies/HylianCaptain.png",
	drops: {
		bronze: {
			name: "Hylian Captain Gauntlet",
			imagePath: "assets/images/materials/HylianCaptainGauntlet.png"
		},
		silver: {
			name: "Holy Hylian Shield",
			imagePath: "assets/images/materials/HolyHylianShield.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Cia's Tale: The Invasion Begins",
					amount: "14-17 Hylian Captains",
					recommended: false
				},
				{
					tile: undefined,
					title: "Cia's Tale: The Demon Lord",
					amount: "10-12 Hylian Captains",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ganondorf: Battle of the Triforce",
					amount: "14-17+ Hylian Captains",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "G3",
					title: "G3: Prove you're more than a pip-squeak!",
					amount: "5+ Hylian Captains",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "F1",
					title: "F1: Destroy enemies and traitors alike! LV.10",
					amount: "5+ Hylian Captains",
					recommended: false
				},
				{
					tile: "K1",
					title: "K1: Destroy enemies and traitors alike! LV.7",
					amount: "3+ Hylian Captains",
					recommended: false
				},
				{
					tile: "P1",
					title: "P1: Destroy enemies and traitors alike! LV.5",
					amount: "2+ Hylian Captains",
					recommended: false
				},
				{
					tile: "B2",
					title: "B2: Destroy enemies and traitors alike! LV.8",
					amount: "5+ Hylian Captains",
					recommended: false
				},
				{
					tile: "F4",
					title: "F4: Destroy enemies and traitors alike! LV.6",
					amount: "3+ Hylian Captains",
					recommended: false
				},
				{
					tile: "L4",
					title: "L4: Destroy enemies and traitors alike! LV.4",
					amount: "3+ Hylian Captains",
					recommended: false
				},
				{
					tile: "N5",
					title: "N5: Destroy enemies and traitors alike! LV.3",
					amount: "2+ Hylian Captains",
					recommended: false
				},
				{
					tile: "G6",
					title: "G6: Destroy enemies and traitors alike! LV.2",
					amount: "2+ Hylian Captains",
					recommended: false
				},
				{
					tile: "F7",
					title: "F7: Destroy enemies and traitors alike! LV.9",
					amount: "5+ Hylian Captains",
					recommended: false
				},
				{
					tile: "M7",
					title: "M7: Defeat the forest dragon!",
					amount: "5+ Hylian Captains",
					recommended: false
				},
				{
					tile: "I8",
					title: "I8: Destroy enemies and traitors alike! LV.1",
					amount: "2+ Hylian Captains",
					recommended: false
				},
				{
					tile: "K8",
					title: "K8: Destroy the army with boosted morale! LV.5",
					amount: "17 Hylian Captains",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "B7",
					title: "B7: Team up and defeat the enemy forces! LV.9",
					amount: "0-3 Hylian Captains",
					recommended: false
				},
				{
					tile: "D7",
					title: "D7: Destroy enemies and traitors alike! ",
					amount: "",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "C2",
					title: "C2: Win the KO competition! LV.9",
					amount: "1 infinitely respawning Hylian Captain",
					recommended: false
				},
				{
					tile: "F3",
					title: "F3: Final battle! Defeat the beast of the bay!",
					amount: "",
					recommended: false
				},
				{
					tile: "J3",
					title: "J3: Win the KO Competition! LV.4",
					amount: "3 infinitely respawning Hylian Captains",
					recommended: false
				},
				{
					tile: "O3",
					title: "O3: Lurking treachery, lurking shadows!",
					amount: "",
					recommended: false
				},
				{
					tile: "G4",
					title: "G4: Win the KO competition! LV.6",
					amount: "3 infinitely respawning Hylian Captains",
					recommended: false
				},
				{
					tile: "I6",
					title: "I6: Win the KO competition! LV.2",
					amount: "3 infinitely respawning Hylian Captains",
					recommended: false
				},
			]
		},
	]
}

export const GoronCaptain: EnemyType = {
	name: "Goron Captain",
	imagePath: "assets/images/enemies/GoronCaptain.png",
	drops: {
		bronze: {
			name: "Goron Armor Breastplate",
			imagePath: "assets/images/materials/GoronArmorBreastplate.png"
		},
		silver: {
			name: "Thick Goron Helmet",
			imagePath: "assets/images/materials/ThickGoronHelmet.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Ocarina of Time: Land of Myth",
					amount: "13 Goron Captains",
					recommended: false
				},
				{
					tile: undefined,
					title: "Cia's Tale: The Dragon of the Caves",
					amount: "7 Goron Captains",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ganondorf: March of the Demon King",
					amount: "25-30 Goron Captains",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "N3",
					title: "N3: Defeat the warriors of time!",
					amount: "5 Goron Captains",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "B1",
					title: "B1: Final battle! Defeat the bird of the fortress!",
					amount: "12 Goron Captains",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "K1",
					title: "K1: Destroy enemies and traitors alike! LV.7",
					amount: "9 Goron Captains",
					recommended: false
				},
				{
					tile: "I3",
					title: "I3: Destroy the army with boosted morale! LV.3",
					amount: "12 Goron Captains",
					recommended: false
				},
				{
					tile: "F4",
					title: "F4: Destroy enemies and traitors alike! LV.6",
					amount: "12 Goron Captains",
					recommended: false
				},
				{
					tile: "B6",
					title: "B6: Destroy the army with boosted morale! LV.6",
					amount: "16 Goron Captains",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "L6",
					title: "L6: Destroy enemies and traitors alike! ",
					amount: "",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "L6",
					title: "L6: Win the KO competition! LV.3",
					amount: "3 infinitely respawning Goron Captains",
					recommended: false
				},
				{
					tile: "L8",
					title: "L8: Final battle! Defeat the beast of the swamp!",
					amount: "6-11 Goron Captains",
					recommended: false
				},
			]
		},
		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "A1",
					title: "A1: Final battle! Defeat the dragon of Turtle Rock!",
					amount: "7 Goron Captains",
					recommended: false
				},
				{
					tile: "E2",
					title: "E2: Defeat the warriors of time! LV.2",
					amount: "11 Goron Captains",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "B1",
					title: "B1: Final battle! Defeat the snowy plains' beast!",
					amount: "7 Goron Captains",
					recommended: false
				},
				{
					tile: "M4",
					title: "M4: Defeat the warriors of time! LV.2",
					amount: "14 Goron Captains",
					recommended: false
				},
			]
		},
	]
}

export const BigBlin: EnemyType = {
	name: "Big Blin",
	imagePath: "assets/images/enemies/BigBlin.png",
	drops: {
		bronze: {
			name: "Big Blin Hide",
			imagePath: "assets/images/materials/BigBlinHide.png"
		},
		silver: {
			name: "Big Blin Club",
			imagePath: "assets/images/materials/BigBlinClub.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Wind Waker: A New Disturbance",
					amount: "18+ Big Blins",
					recommended: false
				},
				{
					tile: undefined,
					title: "Wind Waker: The Search for Cia",
					amount: "7 Big Blins",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "K1",
					title: "K1: Get to those troops before the others do! LV.1",
					amount: "9 Big Blins",
					recommended: false
				},
				{
					tile: "M1",
					title: "M1: Win the KO competition! LV.3 ",
					amount: "3 infinitely respawning Big Blins",
					recommended: true
				},
				{
					tile: "J2",
					title: "J2: Rack up your KO count! LV.1",
					amount: "10 Big Blins",
					recommended: false
				},
				{
					tile: "M2",
					title: "M2: Final battle! Defeat the beast of the volcano!",
					amount: "7 Big Blins",
					recommended: false
				},
				{
					tile: "E3",
					title: "E3: Prove your worth on Tingle Island!",
					amount: "7 Big Blins",
					recommended: false
				},
				{
					tile: "M3",
					title: "M3: Rack up your KO count! LV.2",
					amount: "8 Big Blins",
					recommended: false
				},
				{
					tile: "N3",
					title: "N3: Destroy the army with boosted morale! LV.1",
					amount: "7 Big Blins",
					recommended: false
				},
				{
					tile: "J4",
					title: "J4: Get to those troops before the others do! LV.2",
					amount: "9 Big Blins",
					recommended: false
				},
				{
					tile: "E5",
					title: "E5: Be courageous and protect your keeps!",
					amount: "7 Big Blins",
					recommended: false
				},
				{
					tile: "A6",
					title: "A6: Destroy enemies and traitors alike! LV.1",
					amount: "8 Big Blins",
					recommended: false
				},
				{
					tile: "M6",
					title: "M6: Destroy the army with boosted morale! LV.2",
					amount: "8 Big Blins",
					recommended: false
				},
				{
					tile: "N7",
					title: "N7: Defend the allied keeps! LV.1",
					amount: "11 Big Blins",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "G5",
					title: "G5: Win the Rupee competition! LV.5",
					amount: "Rupee Captains are Big Blins",
					recommended: false
				},
			]
		},
		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "H1",
					title: "H1: Fight as a warrior of fire!",
					amount: "9 Big Blins",
					recommended: false
				},
				{
					tile: "N1",
					title: "N1: The kings' armies march on!",
					amount: "8 Big Blins",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "N8",
					title: "N8: Fight the heroes of the Wind Waker! LV.2",
					amount: "9 Big Blins",
					recommended: false
				},
			]
		},
	]
}

export const StoneBlin: EnemyType = {
	name: "Stone Blin",
	imagePath: "assets/images/enemies/StoneBlin.png",
	drops: {
		bronze: {
			name: "Stone Blin Buckler",
			imagePath: "assets/images/materials/StoneBlinBuckler.png"
		},
		silver: {
			name: "Stone Blin Helmet",
			imagePath: "assets/images/materials/StoneBlinHelmet.png"
		},
		gold: undefined
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Wind Waker: Watchers of the Triforce",
					amount: "10-11 Stone Blins",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "D1",
					title: "D1: Defend the allied keeps! LV.2",
					amount: "12 Stone Blins",
					recommended: false
				},
				{
					tile: "B2",
					title: "B2: Strengthen your army and defeat the enemy! LV.2",
					amount: "9 Stone Blins",
					recommended: false
				},
				{
					tile: "F2",
					title: "F2: Team up and defeat the enemy forces! LV.5",
					amount: "7 Stone Blins if the enemy is King Daphnes and Linkle",
					recommended: false
				},
				{
					tile: "C3",
					title: "C3: Win the KO competition! LV.6 ",
					amount: "2 infinitely respawning Stone Blins",
					recommended: true
				},
				{
					tile: "F3",
					title: "F3: Rack up your KO count! LV.4",
					amount: "12 Stone Blins",
					recommended: false
				},
				{
					tile: "G4",
					title: "G4: Win the KO competition! LV.8",
					amount: "13 Stone Blins",
					recommended: false
				},
				{
					tile: "H4",
					title: "H4: Final battle! Defeat the shadow of the sky!",
					amount: "12 Stone Blins",
					recommended: false
				},
				{
					tile: "I4",
					title: "I4: Have a showdown between hero and imp!",
					amount: "10 Stone Blins",
					recommended: false
				},
				{
					tile: "A5",
					title: "A5: Pierce through the enemy's defenses!",
					amount: "14-16 Stone Blins",
					recommended: false
				},
				{
					tile: "B5",
					title: "B5: Fight the heroes of the Wind Waker!",
					amount: "12 Stone Blins",
					recommended: false
				},
				{
					tile: "E5",
					title: "E5: Be courageous and protect your keeps!",
					amount: "8 Stone Blins",
					recommended: false
				},
				{
					tile: "C7",
					title: "C7: Best the secretive enemies!",
					amount: "13 Stone Blins",
					recommended: false
				},
			]
		},
		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "C1",
					title: "C1: Defeat 1,000 enemies in time!",
					amount: "9 Stone Blins",
					recommended: false
				},
				{
					tile: "H1",
					title: "H1: Fight as a warrior of fire!",
					amount: "7 Stone Blins",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "C3",
					title: "C3: Defend the allied keeps! LV.1",
					amount: "10 Stone Blins",
					recommended: false
				},
				{
					tile: "N8",
					title: "N8: Fight the heroes of the Wind Waker! LV.2",
					amount: "7 Stone Blins",
					recommended: false
				},
			]
		},
	]
}

export const Ganon: EnemyType = {
	name: "Ganon",
	imagePath: "assets/images/enemies/Ganon.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Ganon's Mane",
			imagePath: "assets/images/materials/GanonsMane.png"
		},
		gold: {
			name: "Ganon's Fang",
			imagePath: "assets/images/materials/GanonsFang.png"
		}
	},
	farmLocations: [		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "F2",
					title: "F2: Defeat all Giant Bosses in time! LV.14 ",
					amount: "1 Ganon",
					recommended: true
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "I5",
					title: "I5: Defeat all Giant Bosses in time! LV.8",
					amount: "1 Ganon",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "P6",
					title: "P6: Defeat all Giant Bosses in time! LV. 11",
					amount: "1 Ganon",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "E5",
					title: "E5: Final battle! Defeat the Demon King of the castle!",
					amount: "1 Ganon",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "B2",
					title: "B2: Final battle! Defeat the Demon King of the moon!",
					amount: "1 Ganon",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "B7",
					title: "B7: Defeat all Giant Bosses in time! LV.4",
					amount: "1 Ganon",
					recommended: false
				},
			]
		},
	]
}

export const KingDodongo: EnemyType = {
	name: "King Dodongo",
	imagePath: "assets/images/enemies/KingDodongo.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "King Dodongo's Claws",
			imagePath: "assets/images/materials/KingDodongosClaws.png"
		},
		gold: {
			name: "King Dodongo's Crystal",
			imagePath: "assets/images/materials/KingDodongosCrystal.png"
		}
	},
	farmLocations: [		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "D5",
					title: "D5: Defeat 700 enemies in time! LV.2",
					amount: "3 King Dodongos",
					recommended: false
				},
				{
					tile: "M8",
					title: "M8: Defeat all Giant Bosses in time! LV.11",
					amount: "3 King Dodongos",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "E4",
					title: "E4: Defeat all Giant Bosses in time! LV.4",
					amount: "1 King Dodongo",
					recommended: false
				},
				{
					tile: "K5",
					title: "K5: Defeat 400 enemies in time! LV.3",
					amount: "2 King Dodongos",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "J6",
					title: "J6: Defeat all Giant Bosses in time! LV.5",
					amount: "2 King Dodongos",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "I5",
					title: "I5: Rack up your KO count! LV.2",
					amount: "2 King Dodongos",
					recommended: false
				},
				{
					tile: "J5",
					title: "J5: Team up and defeat the enemy forces! LV.2 ",
					amount: "4 King Dodongos, make Wizzro and Lana the enemy",
					recommended: true
				},
				{
					tile: "K6",
					title: "K6: Defeat all Giant Bosses in time! LV.1",
					amount: "1 King Dodongo",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "K3",
					title: "K3: Defeat all Giant Bosses in time! LV.2",
					amount: "1 King Dodongo",
					recommended: false
				},
				{
					tile: "L4",
					title: "L4: Team up and defeat the enemy forces! LV.4",
					amount: "2 King Dodongos, make Lana the enemy",
					recommended: false
				},
				{
					tile: "K8",
					title: "K8: Team up and defeat the enemy forces LV.1",
					amount: "2 King Dodongos",
					recommended: false
				},
			]
		},
	]
}

export const Gohma: EnemyType = {
	name: "Gohma",
	imagePath: "assets/images/enemies/Gohma.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Gohma's Acid",
			imagePath: "assets/images/materials/GohmasAcid.png"
		},
		gold: {
			name: "Gohma's Lens",
			imagePath: "assets/images/materials/GohmasLens.png"
		}
	},
	farmLocations: [		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "L2",
					title: "L2: Defeat all Giant Bosses in time! LV.3",
					amount: "2 Gohmas",
					recommended: false
				},
				{
					tile: "B7",
					title: "B7: Defeat 700 enemies in time! LV.3",
					amount: "3 Gohmas",
					recommended: false
				},
				{
					tile: "E7",
					title: "E7: Defeat all Giant Bosses in time! LV.9",
					amount: "2 Gohmas",
					recommended: false
				},
				{
					tile: "J7",
					title: "J7: Defeat all Giant Bosses in time! LV.2",
					amount: "2 Gohmas",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "L7",
					title: "L7: Team up and defeat the enemy forces! LV.2",
					amount: "2 Gohmas, make Lana the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "E8",
					title: "E8: Defeat all Giant Bosses in time! LV.10",
					amount: "3 Gohmas",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "G2",
					title: "G2: Team up and defeat the enemy forces! LV.5 ",
					amount: "4 Gohmas, make Fi and Cia the enemy",
					recommended: true
				},
				{
					tile: "K5",
					title: "K5: Defeat 400 enemies in time!",
					amount: "2 Gohmas",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "J1",
					title: "J1: Team up and defeat the enemy forces! LV.2",
					amount: "2 Gohmas, make Impa the enemy",
					recommended: false
				},
			]
		},
	]
}

export const Manhandla: EnemyType = {
	name: "Manhandla",
	imagePath: "assets/images/enemies/Manhandla.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Manhandla's Toxic Dust",
			imagePath: "assets/images/materials/ManhandlasToxicDust.png"
		},
		gold: {
			name: "Manahandla's Sapling",
			imagePath: "assets/images/materials/ManahandlasSapling.png"
		}
	},
	farmLocations: [		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "J3",
					title: "J3: Defeat all Giant Bosses in time! LV.4",
					amount: "2 Manhandlas",
					recommended: false
				},
				{
					tile: "B5",
					title: "B5: Defeat all Giant Bosses in time! LV.7",
					amount: "2 Manhandlas",
					recommended: false
				},
				{
					tile: "D7",
					title: "D7: Defeat 700 enemies in time! LV.1",
					amount: "3 Manhandlas",
					recommended: false
				},
				{
					tile: "L7",
					title: "L7: Defeat 800 enemies in time!",
					amount: "3 Manhandlas",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "L7",
					title: "L7: Team up and defeat the enemy forces! LV.2",
					amount: "2 Manhandlas, make Impa the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "K2",
					title: "K2: Defeat all Giant Bosses in time! LV.6",
					amount: "2 Manhandlas",
					recommended: false
				},
				{
					tile: "A3",
					title: "A3: Defeat 700 enemies in time!",
					amount: "3 Manhandlas",
					recommended: false
				},
				{
					tile: "D5",
					title: "D5: Defeat 800 enemies in time!",
					amount: "3 Manhandlas",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "I3",
					title: "I3: Team up and defeat the enemy forces! LV.4 ",
					amount: "4 Manhandlas, make Lana and Cia the enemy",
					recommended: true
				},
				{
					tile: "K6",
					title: "K6: Defeat all Giant Bosses in time! LV.1",
					amount: "1 Manhandla",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "L1",
					title: "L1: Win the Rupee competition! LV.4",
					amount: "2 Manhandlas",
					recommended: false
				},
				{
					tile: "F2",
					title: "F2: Win the Rupee competition! LV.7",
					amount: "2 Manhandlas",
					recommended: false
				},
			]
		},
	]
}

export const Argorok: EnemyType = {
	name: "Argorok",
	imagePath: "assets/images/enemies/Argorok.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Argorok's Embers",
			imagePath: "assets/images/materials/ArgoroksEmbers.png"
		},
		gold: {
			name: "Argorok's Stone",
			imagePath: "assets/images/materials/ArgoroksStone.png"
		}
	},
	farmLocations: [		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "K2",
					title: "K2: Defeat all Giant Bosses in time! LV.12",
					amount: "2 Argoroks",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "C6",
					title: "C6: Defeat all Giant Bosses in time! LV.6",
					amount: "1 Argorok",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "O8",
					title: "O8: Defeat all Giant Bosses in time! LV.7",
					amount: "2 Argoroks",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "K2",
					title: "K2: Team up and defeat the enemy forces! LV.7",
					amount: "2 Argoroks, make Fi the enemy",
					recommended: false
				},
				{
					tile: "F5",
					title: "F5: Defeat 1,000 enemies in time! ",
					amount: "4 Argoroks",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "F4",
					title: "F4: Team up and defeat the enemy forces LV.3",
					amount: "4 Argoroks, make Impa the enemy",
					recommended: false
				},
				{
					tile: undefined,
					title: "Small Imprisoned (doesn't drop gold materials)",
					amount: "",
					recommended: false
				},
			]
		},
		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Linkle's Tale: The Demon Lord's Plan",
					amount: "18 Small Imprisoneds",
					recommended: false
				},
			]
		},
	]
}

export const TheImprisoned: EnemyType = {
	name: "The Imprisoned",
	imagePath: "assets/images/enemies/TheImprisoned.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "The Imprisoned's Scales",
			imagePath: "assets/images/materials/TheImprisonedsScales.png"
		},
		gold: {
			name: "The Imprisoned's Pillar",
			imagePath: "assets/images/materials/TheImprisonedsPillar.png"
		}
	},
	farmLocations: [		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "C8",
					title: "C8: Defeat all Giant Bosses in time! LV.10",
					amount: "2 The Imprisoneds",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "I5",
					title: "I5: Defeat all Giant Bosses in time! LV.8",
					amount: "1 The Imprisoned",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "C4",
					title: "C4: Defeat all Giant Bosses in time! LV.8",
					amount: "2 The Imprisoneds",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "E2",
					title: "E2: Defeat all Giant Bosses in time! LV.2",
					amount: "1 The Imprisoned",
					recommended: false
				},
				{
					tile: "B7",
					title: "B7: Team up and defeat the enemy forces! LV.9 ",
					amount: "2 The Imprisoneds, make Zelda the enemy",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "H6",
					title: "H6: Win the Rupee competition! LV.6",
					amount: "2 The Imprisoneds",
					recommended: false
				},
			]
		},
		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "K2",
					title: "K2: Team up and defeat the enemy forces! LV.3",
					amount: "2 The Imprisoneds, make Impa the enemy",
					recommended: false
				},
				{
					tile: undefined,
					title: "Rewards Map",
					amount: "",
					recommended: false
				},
				{
					tile: undefined,
					title: "Running to the Rescue",
					amount: "3 The Imprisoneds",
					recommended: false
				},
			]
		},
	]
}

export const HelmarocKing: EnemyType = {
	name: "Helmaroc King",
	imagePath: "assets/images/enemies/HelmarocKing.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Helmaroc Plume",
			imagePath: "assets/images/materials/HelmarocPlume.png"
		},
		gold: {
			name: "Helmaroc King's Mask",
			imagePath: "assets/images/materials/HelmarocKingsMask.png"
		}
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Wind Waker: The Search for Cia",
					amount: "1+ Helmaroc Kings If you go to the Sacred Grounds when the Helmaroc King is healing up and then watch him fly away, heÆll leave behind a drop. Can repeat multiple times.",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "F1",
					title: "F1: Defeat all Giant Bosses in time! LV.7",
					amount: "1 Helmaroc King",
					recommended: false
				},
				{
					tile: "I1",
					title: "I1: Team up and defeat the enemy forces! LV.1",
					amount: "1-2 Helmaroc Kings",
					recommended: false
				},
				{
					tile: "F2",
					title: "F2: Team up and defeat the enemy forces! LV.5",
					amount: "2 Helmaroc Kings, make Tetra the enemy",
					recommended: false
				},
				{
					tile: "I2",
					title: "I2: Defeat all Giant Bosses in time! LV.1",
					amount: "1 Helmaroc King",
					recommended: false
				},
				{
					tile: "B3",
					title: "B3: Defeat all Giant Bosses in time! LV.5",
					amount: "1 Helmaroc King",
					recommended: false
				},
				{
					tile: "M4",
					title: "M4: Defeat 400 enemies in time! LV.1",
					amount: "2 Helmaroc Kings",
					recommended: false
				},
				{
					tile: "D7",
					title: "D7: Team up and defeat the enemy forces! LV.4",
					amount: "2 Helmaroc Kings, make Tetra the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "C1",
					title: "C1: Defeat 1,000 enemies in time!",
					amount: "2 Helmaroc Kings",
					recommended: false
				},
				{
					tile: "C3",
					title: "C3: Team up and defeat the enemy forces! LV.2 ",
					amount: "4 Helmaroc Kings, make Lana and Cia the enemy",
					recommended: true
				},
				{
					tile: "M5",
					title: "M5: Defeat all Giant Bosses in time! LV.3",
					amount: "2 Helmaroc Kings",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "E1",
					title: "E1: Defeat all Giant Bosses in time! LV.3",
					amount: "1 Helmaroc King",
					recommended: false
				},
				{
					tile: "B7",
					title: "B7: Defeat all Giant Bosses in time! LV.4",
					amount: "1 Helmaroc King",
					recommended: false
				},
			]
		},
	]
}

export const PhantomGanon: EnemyType = {
	name: "Phantom Ganon",
	imagePath: "assets/images/enemies/PhantomGanon.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Phantom Ganon's Cape",
			imagePath: "assets/images/materials/PhantomGanonsCape.png"
		},
		gold: {
			name: "Phantom Ganon's Sword",
			imagePath: "assets/images/materials/PhantomGanonsSword.png"
		}
	},
	farmLocations: [		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "F1",
					title: "F1: Defeat all Giant Bosses in time! LV.7",
					amount: "1 Phantom Ganon",
					recommended: false
				},
				{
					tile: "I5",
					title: "I5: Defeat all Giant Bosses in time! LV.8",
					amount: "1 Phantom Ganon",
					recommended: false
				},
				{
					tile: "C6",
					title: "C6: Defeat all Giant Bosses in time! LV.6",
					amount: "1 Phantom Ganon",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "G5",
					title: "G5: Win the Rupee competition! LV.5",
					amount: "3 Phantom Ganons",
					recommended: false
				},
				{
					tile: "H5",
					title: "H5: Defeat all Giant Bosses in time! LV.3",
					amount: "1 Phantom Ganon",
					recommended: false
				},
			]
		},
		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "C1",
					title: "C1: Defeat 1,000 enemies in time! ",
					amount: "2 Phantom Ganons",
					recommended: true
				},
				{
					tile: "M5",
					title: "M5: Defeat all Giant Bosses in time! LV.3",
					amount: "1 Phantom Ganon",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "E1",
					title: "E1: Defeat all Giant Bosses in time! LV.3",
					amount: "1 Phantom Ganon",
					recommended: false
				},
				{
					tile: "B7",
					title: "B7: Defeat all Giant Bosses in time! LV.4",
					amount: "1 Phantom Ganon",
					recommended: false
				},
				{
					tile: undefined,
					title: "Rewards Map",
					amount: "",
					recommended: false
				},
				{
					tile: undefined,
					title: "Scattered Seeds",
					amount: "3 Phantom Ganons",
					recommended: false
				},
			]
		},
	]
}

export const Cia: EnemyType = {
	name: "Cia",
	imagePath: "assets/images/enemies/Cia.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Cia's Bracelet",
			imagePath: "assets/images/materials/CiasBracelet.png"
		},
		gold: {
			name: "Cia's Staff",
			imagePath: "assets/images/materials/CiasStaff.png"
		}
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Epilogue: Shining Beacon",
					amount: "4 Cias",
					recommended: false
				},
				{
					tile: undefined,
					title: "Wind Waker: Reclaiming the Darkness",
					amount: "2 Dark Cias",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "O7",
					title: "O7: Fight through the travel memories quiz!",
					amount: "1 Cia",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "B7",
					title: "B7: Fight through the travel memories quiz! LV.2",
					amount: "1 Cia",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "C5",
					title: "C5: Win the Rupee competition! LV.1",
					amount: "4 infinitely respawning Dark Cias",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "G2",
					title: "G2: Team up and defeat the enemy forces! LV.5",
					amount: "2 Cias, 1 Dark Cia; make Cia the enemy",
					recommended: false
				},
				{
					tile: "I3",
					title: "I3: Team up and defeat the enemy forces! LV.4",
					amount: "2 Cias, 1 Dark Cia; make Cia the enemy",
					recommended: false
				},
				{
					tile: "N4",
					title: "N4: Team up and defeat the enemy forces! LV.1",
					amount: "2 Cias, make Cia the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "L1",
					title: "L1: Win the Rupee competition! LV.4",
					amount: "4 infinitely respawning Dark Cias",
					recommended: false
				},
				{
					tile: "C3",
					title: "C3: Defeat 1,000 enemies before the Rogue Forces do! LV.2",
					amount: "3 infinitely respawning Dark Cias",
					recommended: false
				},
				{
					tile: "L4",
					title: "L4: Team up and defeat the enemy forces! LV.4",
					amount: "2 Cias, 1 Dark Cia; make Cia the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "C3",
					title: "C3: Team up and defeat the enemy forces! LV.2",
					amount: "2 Cias, make Cia the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "M7",
					title: "M7: Team up and defeat the enemy forces! LV.1",
					amount: "2 Cias, make Cia the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Lorule Map",
			tiles: [
				{
					tile: "P2",
					title: "P2: Put an end to the enemy's divisive plan! LV.6 ",
					amount: "12 Dark Cias",
					recommended: true
				},
			]
		},
	]
}

export const Volga: EnemyType = {
	name: "Volga",
	imagePath: "assets/images/enemies/Volga.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Volga's Helmet",
			imagePath: "assets/images/materials/VolgasHelmet.png"
		},
		gold: {
			name: "Volga's Dragon Spear",
			imagePath: "assets/images/materials/VolgasDragonSpear.png"
		}
	},
	farmLocations: [		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "O7",
					title: "O7: Fight through the travel memories quiz!",
					amount: "1 Volga, must see him retreat",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "I1",
					title: "I1: Team up and defeat the enemy forces! LV.1",
					amount: "2 Volgas, make Volga the enemy",
					recommended: false
				},
				{
					tile: "J1",
					title: "J1: Defeat 400 enemies before the Rogue Forces do! LV.2",
					amount: "3 infinitely respawning Dark Volgas",
					recommended: false
				},
				{
					tile: "L4",
					title: "L4: Fight through the travel memories quiz! LV.1",
					amount: "1 Volga",
					recommended: false
				},
				{
					tile: "B7",
					title: "B7: Fight through the travel memories quiz! LV.2",
					amount: "1 Volga, must see him retreat",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "P3",
					title: "P3: Rack up your KO count! LV.3",
					amount: "2 Dark Volgas",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "B4",
					title: "B4: Team up and defeat the enemy forces! LV.6",
					amount: "1 Volga, 1 Dark Volga; make Volga the enemy",
					recommended: false
				},
				{
					tile: "N4",
					title: "N4: Team up and defeat the enemy forces! LV.1",
					amount: "1 Volga, make Volga the enemy",
					recommended: false
				},
				{
					tile: "J5",
					title: "J5: Team up and defeat the enemy forces! LV.2",
					amount: "1 Volga, make Volga the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "J1",
					title: "J1: Team up and defeat the enemy forces! LV.2",
					amount: "2 Volgas, 1 Dark Volga; make Volga the enemy",
					recommended: false
				},
				{
					tile: "J2",
					title: "J2: Fight through the mask quiz! LV.1",
					amount: "1 Volga, must see him retreat",
					recommended: false
				},
				{
					tile: "M4",
					title: "M4: Win the KO competition! LV.8",
					amount: "2 Dark Volgas, 1 infinitely respawning Volga",
					recommended: false
				},
			]
		},
		{
			map: "Lorule Map",
			tiles: [
				{
					tile: "M8",
					title: "M8: Put an end to the enemy's divisive plan! LV.1 ",
					amount: "8 Dark Volgas",
					recommended: true
				},
				{
					tile: undefined,
					title: "Rewards Map",
					amount: "",
					recommended: false
				},
				{
					tile: undefined,
					title: "Evil Power",
					amount: "1 Volga, 1 Dark Volga",
					recommended: false
				},
			]
		},
		{
			map: "Challenge Mode",
			tiles: [
				{
					tile: undefined,
					title: "Ganon's Fury: Giant Battle LV.1",
					amount: "3 infinitely respawning Dark Volgas",
					recommended: false
				},
			]
		},
	]
}

export const Wizzro: EnemyType = {
	name: "Wizzro",
	imagePath: "assets/images/enemies/Wizzro.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Wizzro's Robe",
			imagePath: "assets/images/materials/WizzrosRobe.png"
		},
		gold: {
			name: "Wizzro's Ring",
			imagePath: "assets/images/materials/WizzrosRing.png"
		}
	},
	farmLocations: [		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "J2",
					title: "J2: Fight through the women's weapons quiz!",
					amount: "1 Wizzro, must see him retreat",
					recommended: false
				},
				{
					tile: "O7",
					title: "O7: Fight through the travel memories quiz!",
					amount: "1 Wizzro",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "I1",
					title: "I1: Team up and defeat the enemy forces! LV.1",
					amount: "1 Wizzro, make Wizzro the enemy",
					recommended: false
				},
				{
					tile: "L1",
					title: "L1: Defeat 400 enemies before the Rogue Forces do! LV.3",
					amount: "3 infinitely respawning Dark Wizzros",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "K5",
					title: "K5: Fight through the Twilight Princess quiz!",
					amount: "1 Wizzro, must see him retreat",
					recommended: false
				},
				{
					tile: "L7",
					title: "L7: Fight through the women's weapons quiz!",
					amount: "1 Wizzro, must see him retreat",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "B4",
					title: "B4: Team up and defeat the enemy forces! LV.6",
					amount: "2 Wizzros, 1 Dark Wizzro; make Wizzro the enemy",
					recommended: false
				},
				{
					tile: "J5",
					title: "J5: Team up and defeat the enemy forces! LV.2",
					amount: "1 Wizzro, make Wizzro the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "F4",
					title: "F4: Team up and defeat the enemy forces! LV.3",
					amount: "1 Wizzro, 1 Dark Wizzro; make Wizzro the enemy",
					recommended: false
				},
				{
					tile: "G5",
					title: "G5: Fight through the mask quiz! LV.2",
					amount: "1 Wizzro",
					recommended: false
				},
				{
					tile: "J6",
					title: "J6: Win the Rupee competition! LV.1",
					amount: "4 infinitely respawning Dark Wizzros",
					recommended: false
				},
				{
					tile: "K8",
					title: "K8: Team up and defeat the enemy forces! LV.1",
					amount: "2 Wizzros, 1 Dark Wizzro; make Wizzro the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Lorule Map",
			tiles: [
				{
					tile: "M3",
					title: "M3: Put an end to the enemy's divisive plan! LV.5 ",
					amount: "12 Dark Wizzros",
					recommended: true
				},
				{
					tile: undefined,
					title: "Rewards Map",
					amount: "",
					recommended: false
				},
				{
					tile: undefined,
					title: "Evil Power",
					amount: "1 Wizzro, 1 Dark Wizzro",
					recommended: false
				},
			]
		},
	]
}

export const Link: EnemyType = {
	name: "Link",
	imagePath: "assets/images/enemies/Link.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Link's Boots",
			imagePath: "assets/images/materials/LinksBoots.png"
		},
		gold: {
			name: "Link's Scarf",
			imagePath: "assets/images/materials/LinksScarf.png"
		}
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Epilogue: A War of Spirit",
					amount: "3-6+ Dark Links Dark Links will infinitely spawn during the \"Fend off the Dark Link\" objective as long as you don't enter the Sorceress's Room. Player 1 must be Link because NPC Link will automatically enter the room during this objective.",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ganondorf: Battle of the Triforce",
					amount: "2 Links",
					recommended: false
				},
				{
					tile: undefined,
					title: "Wind Waker: Reclaiming the Darkness",
					amount: "2 Dark Links",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "E1",
					title: "E1: Fight through the Triforce quiz!",
					amount: "1 Link",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "D5",
					title: "D5: Win the KO competition! LV.7",
					amount: "1 infinitely respawning Link, don't play as Link",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "I2",
					title: "I2: Fight through the Triforce quiz!",
					amount: "1 Link",
					recommended: false
				},
				{
					tile: "P8",
					title: "P8: Rack up your KO count! LV.9",
					amount: "2 Dark Links",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "C7",
					title: "C7: Defeat 400 enemies before the Rogue Forces do!",
					amount: "3 infinitely respawning Dark Links",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "G2",
					title: "G2: Team up and defeat the enemy forces! LV.5",
					amount: "2 Links, 1 Dark Link; make Link the enemy",
					recommended: false
				},
				{
					tile: "N4",
					title: "N4: Team up and defeat the enemy forces! LV.1",
					amount: "1 Link, make Link the enemy",
					recommended: false
				},
				{
					tile: "B7",
					title: "B7: Team up and defeat the enemy forces! LV.9",
					amount: "1 Link, 1 Dark Link; make Link the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "J1",
					title: "J1: Team up and defeat the enemy forces! LV.2",
					amount: "2 Links, 1 Dark Link; make Link the enemy",
					recommended: false
				},
				{
					tile: "K1",
					title: "K1: Defeat 700 enemies before the Rogue Forces do! LV.1",
					amount: "3 infinitely respawning Dark Links",
					recommended: false
				},
				{
					tile: "C2",
					title: "C2: Win the KO competition! LV.9",
					amount: "1 infinitely respawning Link, don't play as Link",
					recommended: false
				},
				{
					tile: "J2",
					title: "J2: Fight through the mask quiz! LV.1",
					amount: "1 Link, must see him retreat",
					recommended: false
				},
				{
					tile: "N3",
					title: "N3: Team up and defeat the enemy forces! LV.5",
					amount: "1 Link, 1 Dark Link; make Link the enemy",
					recommended: false
				},
				{
					tile: "L4",
					title: "L4: Team up and defeat the enemy forces! LV.4",
					amount: "2 Links, 1 Dark Link; make Link the enemy",
					recommended: false
				},
				{
					tile: "I8",
					title: "I8: Win the Rupee competition! LV.3",
					amount: "4 infinitely respawning Dark Links",
					recommended: false
				},
			]
		},
		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "K2",
					title: "K2: Team up and defeat the enemy forces! LV.3",
					amount: "1 Link, make Link the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "K6",
					title: "K6: Put an end to the enemy's divisive plan! LV.1 ",
					amount: "4 Dark Links",
					recommended: true
				},
			]
		},
	]
}

export const Lana: EnemyType = {
	name: "Lana",
	imagePath: "assets/images/enemies/Lana.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Lana's Hair Clip",
			imagePath: "assets/images/materials/LanasHairClip.png"
		},
		gold: {
			name: "Lana's Cloak",
			imagePath: "assets/images/materials/LanasCloak.png"
		}
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Ganondorf: March of the Demon King",
					amount: "2-4 Lanas",
					recommended: false
				},
			]
		},
		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "E1",
					title: "E1: Fight through the Triforce quiz!",
					amount: "1 Lana, must see her retreat",
					recommended: false
				},
				{
					tile: "J2",
					title: "J2: Fight through the women's weapons quiz!",
					amount: "2 Lanas",
					recommended: false
				},
				{
					tile: "O7",
					title: "O7: Fight through the travel memories quiz!",
					amount: "1 Lana, must see her retreat",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "H3",
					title: "H3: Defeat 1,000 enemies before the Rogue Forces do!",
					amount: "3 infinitely respawning Dark Lanas",
					recommended: false
				},
				{
					tile: "L7",
					title: "L7: Team up and defeat the enemy forces! LV.2",
					amount: "1 Lana, make Lana the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "I2",
					title: "I2: Fight through the Triforce quiz!",
					amount: "1 Lana, must see her retreat",
					recommended: false
				},
				{
					tile: "O2",
					title: "O2: Fight through the Ocarina of Time quiz!",
					amount: "1 Lana, must see her retreat",
					recommended: false
				},
				{
					tile: "D7",
					title: "D7: Rack up your KO count! LV.10",
					amount: "2 Dark Lanas",
					recommended: false
				},
				{
					tile: "L7",
					title: "L7: Fight through the women's weapons quiz!",
					amount: "2 Lanas",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "F4",
					title: "F4: Put an end to the enemy's divisive plan! LV.2 ",
					amount: "8 Dark Lanas",
					recommended: true
				},
				{
					tile: "N6",
					title: "N6: Win the Rupee competition! LV.4",
					amount: "4 infinitely respawning Dark Lanas",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "I3",
					title: "I3: Team up and defeat the enemy forces! LV.4",
					amount: "1 Lana, make Lana the enemy",
					recommended: false
				},
				{
					tile: "N4",
					title: "N4: Team up and defeat the enemy forces! LV.1",
					amount: "2 Lanas, make Lana the enemy",
					recommended: false
				},
				{
					tile: "J5",
					title: "J5: Team up and defeat the enemy forces! LV.2",
					amount: "2 Lanas, 1 Dark Lana; make Lana the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "C3",
					title: "C3: Team up and defeat the enemy forces! LV.2",
					amount: "1 Lana, make Lana the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "L4",
					title: "L4: Team up and defeat the enemy forces! LV.4",
					amount: "2 Lanas, 1 Dark Lana; make Lana the enemy",
					recommended: false
				},
				{
					tile: "G5",
					title: "G5: Fight through the mask quiz! LV.2",
					amount: "1 Lana, must see her retreat",
					recommended: false
				},
			]
		},
	]
}

export const Zelda: EnemyType = {
	name: "Zelda",
	imagePath: "assets/images/enemies/Zelda.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Zelda's Broach",
			imagePath: "assets/images/materials/ZeldasBroach.png"
		},
		gold: {
			name: "Zelda's Tiara",
			imagePath: "assets/images/materials/ZeldasTiara.png"
		}
	},
	farmLocations: [		{
			map: "Adventure Map",
			tiles: [
				{
					tile: "E1",
					title: "E1: Fight through the Triforce quiz!",
					amount: "1 Zelda",
					recommended: false
				},
				{
					tile: "B2",
					title: "B2: Fight through the royalty quiz!",
					amount: "1 Zelda",
					recommended: false
				},
				{
					tile: "F6",
					title: "F6: Fight through the Twilight Princess quiz!",
					amount: "2 Zeldas, must see her retreat",
					recommended: false
				},
			]
		},
		{
			map: "Master Quest Map",
			tiles: [
				{
					tile: "B1",
					title: "B1: Fight through the royalty quiz!",
					amount: "1 Zelda",
					recommended: false
				},
				{
					tile: "I2",
					title: "I2: Fight through the Triforce quiz!",
					amount: "1 Zelda",
					recommended: false
				},
				{
					tile: "K5",
					title: "K5: Fight through the Twilight Princess quiz!",
					amount: "2 Zeldas, must see her retreat",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "B4",
					title: "B4: Team up and defeat the enemy forces! LV.6",
					amount: "2 Zeldas, 1 Dark Zelda; make Zelda the enemy",
					recommended: false
				},
				{
					tile: "C4",
					title: "C4: Put an end to the enermy's divisive plan! LV.6 ",
					amount: "8 Dark Zeldas",
					recommended: true
				},
				{
					tile: "B7",
					title: "B7: Team up and defeat the enemy forces! LV.9",
					amount: "2 Zeldas, 1 Dark Zelda; make Zelda the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "C2",
					title: "C2: Win the KO competition! LV.9",
					amount: "1 infinitely respawning Zelda, don't play as Zelda",
					recommended: false
				},
				{
					tile: "I2",
					title: "I2: Win the Rupee competition! LV.5",
					amount: "4 infinitely respawning Dark Zeldas",
					recommended: false
				},
				{
					tile: "J2",
					title: "J2: Fight through the mask quiz! LV.1",
					amount: "1 Zelda",
					recommended: false
				},
				{
					tile: "N3",
					title: "N3: Team up and defeat the enemy forces! LV.5",
					amount: "2 Zeldas, 1 Dark Zelda; make Zelda the enemy",
					recommended: false
				},
				{
					tile: "N6",
					title: "N6: Defeat 400 enemies before the Rogue Forces do! LV.3",
					amount: "3 infinitely respawning Dark Zeldas",
					recommended: false
				},
				{
					tile: "K8",
					title: "K8: Team up and defeat the enemy forces! LV.1",
					amount: "2 Zeldas, 1 Dark Zelda; make Zelda the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "D6",
					title: "D6: Team up and defeat the enemy forces! LV.1",
					amount: "2 Zeldas, make Zelda the enemy",
					recommended: false
				},
			]
		},
	]
}

export const Marin: EnemyType = {
	name: "Marin",
	imagePath: "assets/images/enemies/Marin.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Zelda's Broach",
			imagePath: "assets/images/materials/ZeldasBroach.png"
		},
		gold: {
			name: "Zelda's Tiara",
			imagePath: "assets/images/materials/ZeldasTiara.png"
		}
	},
	farmLocations: [		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "K2",
					title: "K2: Team up and defeat the enemy forces! LV.3 ",
					amount: "2 Marins, make Marin the enemy",
					recommended: true
				},
				{
					tile: "C3",
					title: "C3: Team up and defeat the enemy forces! LV.2",
					amount: "1 Marin, make Marin the enemy",
					recommended: false
				},
				{
					tile: "D6",
					title: "D6: Team up and defeat the enemy forces! LV.1",
					amount: "2 Marins, make Marin the enemy",
					recommended: false
				},
			]
		},
	]
}

export const Impa: EnemyType = {
	name: "Impa",
	imagePath: "assets/images/enemies/Impa.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Impa's Hair Band",
			imagePath: "assets/images/materials/ImpasHairBand.png"
		},
		gold: {
			name: "Impa's Breastplate",
			imagePath: "assets/images/materials/ImpasBreastplate.png"
		}
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Cia's Tale: The Invasion Begins",
					amount: "2 Impas",
					recommended: false
				},
				{
					tile: undefined,
					title: "Ganondorf: March of the Demon King",
					amount: "2-7 Impas The fake Impas (using the Naginata) will disappear if you defeat the real Impa (using the Giant Blade).",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "L6",
					title: "L6: Defeat 400 enemies before the Rogue Forces do! LV.6",
					amount: "3 infinitely respawning Dark Impas",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "M4",
					title: "M4: Put an end to the enemy's divisive plan! LV.1 ",
					amount: "8 Dark Impas",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "C2",
					title: "C2: Win the KO competition! LV.9",
					amount: "1 infinitely respawning Impa, don't play as Impa",
					recommended: false
				},
				{
					tile: "F2",
					title: "F2: Win the Rupee competition! LV.7",
					amount: "4 infinitely respawning Dark Impas",
					recommended: false
				},
				{
					tile: "J5",
					title: "J5: Defeat 400 enemies before the Rogue Forces do! LV.1",
					amount: "3 infinitely respawning Dark Impas",
					recommended: false
				},
				{
					tile: "I6",
					title: "I6: Win the KO competition! LV.2",
					amount: "1 infinitely respawning Impa, don't play as Impa",
					recommended: false
				},
			]
		},
	]
}

export const Ganondorf: EnemyType = {
	name: "Ganondorf",
	imagePath: "assets/images/enemies/Ganondorf.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Ganondorf's Gauntlet",
			imagePath: "assets/images/materials/GanondorfsGauntlet.png"
		},
		gold: {
			name: "Ganondorf's Jewel",
			imagePath: "assets/images/materials/GanondorfsJewel.png"
		}
	},
	farmLocations: [		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "G4",
					title: "G4: Win the KO competition! LV.8",
					amount: "1 infinitely respawning Ganondorf, don't play as Ganondorf",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "H3",
					title: "H3: Defeat 1,000 enemies before the Rogue Forces do! LV.2",
					amount: "3 infinitely respawning Dark Ganondorfs",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "D6",
					title: "D6: Put an end to the enemy's divisive plan! LV.9 ",
					amount: "12 Dark Ganondorfs",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "L5",
					title: "L5: Win the KO competition! LV.7",
					amount: "2 Dark Ganondorfs, 1 infinitely respawning Ganondorf",
					recommended: false
				},
			]
		},
	]
}

export const Yuga: EnemyType = {
	name: "Yuga",
	imagePath: "assets/images/enemies/Yuga.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Ganondorf's Gauntlet",
			imagePath: "assets/images/materials/GanondorfsGauntlet.png"
		},
		gold: {
			name: "Ganondorf's Jewel",
			imagePath: "assets/images/materials/GanondorfsJewel.png"
		}
	},
	farmLocations: [		{
			map: "Lorule Map",
			tiles: [
				{
					tile: "C2",
					title: "C2: Team up and defeat the enemy forces! LV.2",
					amount: "1 Yuga, make Yuga the enemy",
					recommended: false
				},
				{
					tile: "C4",
					title: "C4: Team up and defeat the enemy forces! LV.1",
					amount: "2 Yugas, 1 Dark Yuga; make Yuga the enemy",
					recommended: false
				},
				{
					tile: "N4",
					title: "N4: Put an end to the enemy's divisive plan! LV.4 ",
					amount: "12 Dark Yugas",
					recommended: true
				},
			]
		},
	]
}

export const Sheik: EnemyType = {
	name: "Sheik",
	imagePath: "assets/images/enemies/Sheik.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Sheik's Kunai",
			imagePath: "assets/images/materials/SheiksKunai.png"
		},
		gold: {
			name: "Sheik's Turban",
			imagePath: "assets/images/materials/SheiksTurban.png"
		}
	},
	farmLocations: [		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "G4",
					title: "G4: Win the KO competition! LV.8",
					amount: "1 infinitely respawning Sheik, don't play as Sheik",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "H6",
					title: "H6: Put an end to the enemy's divisive plan! LV.2 ",
					amount: "8 Dark Sheiks",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "I4",
					title: "I4: Win the Rupee competition! LV.2",
					amount: "4 infinitely respawning Dark Sheiks",
					recommended: false
				},
			]
		},
	]
}

export const Darunia: EnemyType = {
	name: "Darunia",
	imagePath: "assets/images/enemies/Darunia.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Darunia's Spikes",
			imagePath: "assets/images/materials/DaruniasSpikes.png"
		},
		gold: {
			name: "Darunia's Bracelet",
			imagePath: "assets/images/materials/DaruniasBracelet.png"
		}
	},
	farmLocations: [		{
			map: "Termina Map",
			tiles: [
				{
					tile: "O4",
					title: "O4: Defeat 1,000 enemies before the Rogue Forces do! LV.1",
					amount: "3 infinitely respawning Dark Darunias",
					recommended: false
				},
				{
					tile: "L6",
					title: "L6: Win the KO competition! LV.3",
					amount: "1 infinitely respawning Darunia, don't play as Darunia",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "K7",
					title: "K7: Win the KO competition! LV.1",
					amount: "1 infinitely respawning Darunia, don't play as Darunia",
					recommended: false
				},
			]
		},
	]
}

export const Ruto: EnemyType = {
	name: "Ruto",
	imagePath: "assets/images/enemies/Ruto.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Ruto's Earrings",
			imagePath: "assets/images/materials/RutosEarrings.png"
		},
		gold: {
			name: "Ruto's Scale",
			imagePath: "assets/images/materials/RutosScale.png"
		}
	},
	farmLocations: [		{
			map: "Termina Map",
			tiles: [
				{
					tile: "J7",
					title: "J7: Defeat 400 enemies before the Rogue Forces do! LV.2",
					amount: "3 infinitely respawning Dark Rutos",
					recommended: false
				},
			]
		},
		{
			map: "Lorule Map",
			tiles: [
				{
					tile: "J8",
					title: "J8: Put an end to the enemy's divisive plan! LV.3 ",
					amount: "12 Dark Rutos",
					recommended: true
				},
			]
		},
	]
}

export const Medli: EnemyType = {
	name: "Medli",
	imagePath: "assets/images/enemies/Medli.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Ruto's Earrings",
			imagePath: "assets/images/materials/RutosEarrings.png"
		},
		gold: {
			name: "Ruto's Scale",
			imagePath: "assets/images/materials/RutosScale.png"
		}
	},
	farmLocations: [		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "K4",
					title: "K4: Put an end to the enemy's divisive plan! LV.7 ",
					amount: "12 Dark Medlis",
					recommended: true
				},
			]
		},
	]
}

export const Agitha: EnemyType = {
	name: "Agitha",
	imagePath: "assets/images/enemies/Agitha.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Agitha's Basket",
			imagePath: "assets/images/materials/AgithasBasket.png"
		},
		gold: {
			name: "Agitha's Pendant",
			imagePath: "assets/images/materials/AgithasPendant.png"
		}
	},
	farmLocations: [		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "N2",
					title: "N2: Win the Rupee competition! LV.5",
					amount: "4 infinitely respawning Dark Agithas",
					recommended: false
				},
			]
		},
	]
}

export const Midna: EnemyType = {
	name: "Midna",
	imagePath: "assets/images/enemies/Midna.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Midna's Hair",
			imagePath: "assets/images/materials/MidnasHair.png"
		},
		gold: {
			name: "Midna's Fused Shadow",
			imagePath: "assets/images/materials/MidnasFusedShadow.png"
		}
	},
	farmLocations: [		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "G4",
					title: "G4: Win the KO competition! LV.8",
					amount: "1 infinitely respawning Midna, don't play as Midna",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "G3",
					title: "G3: Put an end to the enemy's divisive plan! LV.4 ",
					amount: "8 Dark Midnas",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "H1",
					title: "H1: Defeat 700 enemies before the Rogue Forces do! LV.2",
					amount: "3 infinitely respawning Dark Midnas",
					recommended: false
				},
				{
					tile: "H2",
					title: "H2: Win the KO competition! LV.5",
					amount: "1 infinitely respawning Midna, don't play as Midna",
					recommended: false
				},
				{
					tile: "B3",
					title: "B3: Win the Rupee competition! LV.9",
					amount: "4 infinitely respawning Dark Midnas",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "E8",
					title: "E8: Win the Rupee competition! LV.4",
					amount: "4 infinitely respawning Dark Midnas",
					recommended: false
				},
			]
		},
	]
}

export const Fi: EnemyType = {
	name: "Fi",
	imagePath: "assets/images/enemies/Fi.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Fi's Heels",
			imagePath: "assets/images/materials/FisHeels.png"
		},
		gold: {
			name: "Fi's Crystal",
			imagePath: "assets/images/materials/FisCrystal.png"
		}
	},
	farmLocations: [		{
			map: "Termina Map",
			tiles: [
				{
					tile: "G4",
					title: "G4: Win the KO competition! LV.6",
					amount: "1 infinitely respawning Fi, don't play as Fi",
					recommended: false
				},
				{
					tile: "H6",
					title: "H6: Win the Rupee competition! LV.6",
					amount: "4 infinitely respawning Dark Fis",
					recommended: false
				},
				{
					tile: "F7",
					title: "F7: Defeat 700 enemies before the Rogue Forces do! LV.4",
					amount: "3 infinitely respawning Dark Fis",
					recommended: false
				},
			]
		},
	]
}

export const Ghirahim: EnemyType = {
	name: "Ghirahim",
	imagePath: "assets/images/enemies/Ghirahim.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Ghirahim's Sash",
			imagePath: "assets/images/materials/GhirahimsSash.png"
		},
		gold: {
			name: "Ghirahim's Cape",
			imagePath: "assets/images/materials/GhirahimsCape.png"
		}
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Grand Finale: Enduring Resolve",
					amount: "2 Ghirahims",
					recommended: false
				},
			]
		},
		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "G4",
					title: "G4: Win the KO competition! LV.8",
					amount: "1 infinitely respawning Ghirahim, don't play as Ghirahim",
					recommended: false
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "L5",
					title: "L5: Win the KO competition! LV.7",
					amount: "1 infinitely respawning Ghirahim, don't play as Ghirahim",
					recommended: false
				},
				{
					tile: "M5",
					title: "M5: Win the Rupee competition! LV.8",
					amount: "4 infinitely respawning Dark Ghirahims",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "I1",
					title: "I1: Put an end to the enemy's divisive plan! LV.4 ",
					amount: "8 Dark Ghirahims",
					recommended: true
				},
				{
					tile: "O6",
					title: "O6: Win the KO competition! LV.2",
					amount: "1 infinitely respawning Ghirahim, don't play as Ghirahim",
					recommended: false
				},
			]
		},
	]
}

export const Zant: EnemyType = {
	name: "Zant",
	imagePath: "assets/images/enemies/Zant.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Zant's Magic Gem",
			imagePath: "assets/images/materials/ZantsMagicGem.png"
		},
		gold: {
			name: "Zant's Helmet",
			imagePath: "assets/images/materials/ZantsHelmet.png"
		}
	},
	farmLocations: [		{
			map: "Legend Mode",
			tiles: [
				{
					tile: undefined,
					title: "Grand Finale: Enduring Resolve",
					amount: "2 Zants",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "F3",
					title: "F3: Defeat 700 enemies before the Rogue Forces do!",
					amount: "3 infinitely respawning Dark Zants (and 1 normal Zant)",
					recommended: false
				},
				{
					tile: undefined,
					title: "Twilight Map",
					amount: "",
					recommended: false
				},
				{
					tile: "A5",
					title: "A5: Put an end to the enemy's divisive plan! LV.8 ",
					amount: "12 Dark Zants",
					recommended: true
				},
			]
		},
		{
			map: "Termina Map",
			tiles: [
				{
					tile: "J3",
					title: "J3: Win the KO competition! LV.4",
					amount: "1 infinitely respawning Zant, don't play as Zant",
					recommended: false
				},
				{
					tile: "L5",
					title: "L5: Win the KO competition! LV.7",
					amount: "1 infinitely respawning Zant, don't play as Zant",
					recommended: false
				},
			]
		},
	]
}

export const TwiliMidna: EnemyType = {
	name: "Twili Midna",
	imagePath: "assets/images/enemies/TwiliMidna.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Twili Midna's Hairpin",
			imagePath: "assets/images/materials/TwiliMidnasHairpin.png"
		},
		gold: {
			name: "Twili Midna's Robe",
			imagePath: "assets/images/materials/TwiliMidnasRobe.png"
		}
	},
	farmLocations: [		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "J4",
					title: "J4: Put an end to the enemy's divisive plan! LV.8 ",
					amount: "12 Dark Midnas",
					recommended: true
				},
			]
		},
	]
}

export const YoungLink: EnemyType = {
	name: "Young Link",
	imagePath: "assets/images/enemies/YoungLink.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Young Link's Belt",
			imagePath: "assets/images/materials/YoungLinksBelt.png"
		},
		gold: {
			name: "Keaton Mask",
			imagePath: "assets/images/materials/KeatonMask.png"
		}
	},
	farmLocations: [		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "G6",
					title: "G6: Defeat 400 enemies before the Rogue Forces do! LV.7",
					amount: "3 infinitely respawning Dark Young Links",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "A1",
					title: "A1: Put an end to the enemy's divisive plan! LV.2 ",
					amount: "8 Dark Young Links",
					recommended: true
				},
				{
					tile: "K7",
					title: "K7: Win the KO competition! LV.1",
					amount: "1 infinitely respawning Young Link, don't play as Young Link",
					recommended: false
				},
			]
		},
		{
			map: "Lorule Map",
			tiles: [
				{
					tile: "C4",
					title: "C4: Team up and defeat the enemy forces! LV.1",
					amount: "1 Young Link, make Young Link the enemy",
					recommended: false
				},
			]
		},
	]
}

export const Ravio: EnemyType = {
	name: "Ravio",
	imagePath: "assets/images/enemies/Ravio.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Young Link's Belt",
			imagePath: "assets/images/materials/YoungLinksBelt.png"
		},
		gold: {
			name: "Keaton Mask",
			imagePath: "assets/images/materials/KeatonMask.png"
		}
	},
	farmLocations: [		{
			map: "Lorule Map",
			tiles: [
				{
					tile: "J2",
					title: "J2: Put an end to the enemy's divisive plan! LV.2 ",
					amount: "8 Dark Ravios",
					recommended: true
				},
				{
					tile: "C4",
					title: "C4: Team up and defeat the enemy forces! LV.1",
					amount: "1 Ravio, make Ravio the enemy",
					recommended: false
				},
			]
		},
	]
}

export const Tingle: EnemyType = {
	name: "Tingle",
	imagePath: "assets/images/enemies/Tingle.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Tingle's Map",
			imagePath: "assets/images/materials/TinglesMap.png"
		},
		gold: {
			name: "Tingle's Watch",
			imagePath: "assets/images/materials/TinglesWatch.png"
		}
	},
	farmLocations: [		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "E3",
					title: "E3: Prove your worth on Tingle Island!",
					amount: "1 Tingle, 2 Dark Tingles; don't play as Tingle",
					recommended: false
				},
				{
					tile: "B4",
					title: "B4: Team up and defeat the enemy forces! LV.3",
					amount: "1 Tingle, make Tingle the enemy",
					recommended: false
				},
				{
					tile: "C5",
					title: "C5: Fight through the Majora's Mask quiz!",
					amount: "1 Tingle",
					recommended: false
				},
				{
					tile: "B7",
					title: "B7: Fight through the travel memories quiz! LV.2",
					amount: "1 Tingle, must see him retreat",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "E3",
					title: "E3: Win the Rupee competition! LV.2",
					amount: "4 infinitely respawning Dark Tingles",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "F2",
					title: "F2: Put an end to the enemy's divisive plan! LV.5 ",
					amount: "12 Dark Tingles",
					recommended: true
				},
			]
		},
	]
}

export const Linkle: EnemyType = {
	name: "Linkle",
	imagePath: "assets/images/enemies/Linkle.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Linkle's Boots",
			imagePath: "assets/images/materials/LinklesBoots.png"
		},
		gold: {
			name: "Linkle's Compass",
			imagePath: "assets/images/materials/LinklesCompass.png"
		}
	},
	farmLocations: [		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "D5",
					title: "D5: Win the KO competition! LV.7",
					amount: "1 infinitely respawning Linkle, don't play as Linkle",
					recommended: false
				},
				{
					tile: "K4",
					title: "K4: Defeat 400 enemies before the Rogue Forces do! LV.5",
					amount: "3 infinitely respawning Dark Linkles",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "B5",
					title: "B5: Put an end to the enemy's divisive plan! LV.1 ",
					amount: "4 Dark Linkles",
					recommended: true
				},
			]
		},
		{
			map: "Koholint Island Map",
			tiles: [
				{
					tile: "C3",
					title: "C3: Team up and defeat the enemy forces! LV.2",
					amount: "2 Linkles, make Linkle the enemy",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "L8",
					title: "L8: Win the Rupee competition! LV.1",
					amount: "4 infinitely respawning Dark Linkles",
					recommended: false
				},
			]
		},
	]
}

export const SkullKid: EnemyType = {
	name: "Skull Kid",
	imagePath: "assets/images/enemies/SkullKid.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Skull Kid's Hat",
			imagePath: "assets/images/materials/SkullKidsHat.png"
		},
		gold: {
			name: "Majora's Mask",
			imagePath: "assets/images/materials/MajorasMask.png"
		}
	},
	farmLocations: [
	]
}

export const ToonLink: EnemyType = {
	name: "Toon Link",
	imagePath: "assets/images/enemies/ToonLink.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Pirate's Charm",
			imagePath: "assets/images/materials/PiratesCharm.png"
		},
		gold: {
			name: "Island Outfit",
			imagePath: "assets/images/materials/IslandOutfit.png"
		}
	},
	farmLocations: [		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "G2",
					title: "G2: Defeat 400 enemies before the Rogue Forces do! LV.1",
					amount: "3 infinitely respawning Dark Toon Links",
					recommended: false
				},
			]
		},
		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "A2",
					title: "A2: Win the Rupee competition! LV.2",
					amount: "4 infinitely respawning Dark Toon Links",
					recommended: false
				},
				{
					tile: "F4",
					title: "F4: Put an end to the enemy's divisive plan! LV.3 ",
					amount: "8 Dark Toon Links",
					recommended: true
				},
			]
		},
	]
}

export const Tetra: EnemyType = {
	name: "Tetra",
	imagePath: "assets/images/enemies/Tetra.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Tetra's Sandals",
			imagePath: "assets/images/materials/TetrasSandals.png"
		},
		gold: {
			name: "Tetra's Bandana",
			imagePath: "assets/images/materials/TetrasBandana.png"
		}
	},
	farmLocations: [		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "N2",
					title: "N2: Defeat 400 enemies before the Rogue Forces do! LV.4",
					amount: "3 infinitely respawning Dark Tetras",
					recommended: false
				},
				{
					tile: "C3",
					title: "C3: Win the KO competition! LV.6",
					amount: "1 infinitely respawning Tetra, don't play as Tetra",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "L6",
					title: "L6: Put an end to the enemy's divisive plan! LV.3 ",
					amount: "8 Dark Tetras",
					recommended: true
				},
			]
		},
	]
}

export const ToonZelda: EnemyType = {
	name: "Toon Zelda",
	imagePath: "assets/images/enemies/ToonZelda.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "Tetra's Sandals",
			imagePath: "assets/images/materials/TetrasSandals.png"
		},
		gold: {
			name: "Tetra's Bandana",
			imagePath: "assets/images/materials/TetrasBandana.png"
		}
	},
	farmLocations: [		{
			map: "Grand Travels Map",
			tiles: [
				{
					tile: "F5",
					title: "F5: Win the Rupee competition! LV.3",
					amount: "4 infinitely respawning Dark Toon Zeldas",
					recommended: false
				},
				{
					tile: "A6",
					title: "A6: Put an end to the enemy's divisive plan! LV.6 ",
					amount: "12 Dark Toon Zeldas",
					recommended: true
				},
				{
					tile: "M7",
					title: "M7: Team up and defeat the enemy forces! LV.1",
					amount: "2 Toon Zeldas, make Toon Zelda the enemy",
					recommended: false
				},
			]
		},
	]
}

export const KingDaphnes: EnemyType = {
	name: "King Daphnes",
	imagePath: "assets/images/enemies/KingDaphnes.png",
	drops: {
		bronze: undefined,
		silver: {
			name: "King Daphnes's Robe",
			imagePath: "assets/images/materials/KingDaphnessRobe.png"
		},
		gold: {
			name: "King Daphnes's Crown",
			imagePath: "assets/images/materials/KingDaphnessCrown.png"
		}
	},
	farmLocations: [		{
			map: "Great Sea Map",
			tiles: [
				{
					tile: "C3",
					title: "C3: Win the KO competition! LV.6",
					amount: "1 infinitely respawning King Daphnes, don't play as him",
					recommended: false
				},
				{
					tile: undefined,
					title: "Master Wind Waker Map",
					amount: "",
					recommended: false
				},
				{
					tile: "L3",
					title: "L3: Put an end to the enemy's divisive plan! LV.4 ",
					amount: "12 Dark King Daphnes's",
					recommended: true
				},
			]
		},
	]
}
