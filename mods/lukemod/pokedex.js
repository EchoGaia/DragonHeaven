'use strict'
exports.BattlePokedex = {
	rapidash: {
		inherit: true,
		types: ["Fire", "Fairy"],
	},
	shiinotic: {
		inherit: true,
		abilities: {
			0: "Illuminate",
			1: "Effect Spore",
			H: "Triage"
		},
	},
	gastly: {
		inherit: true,
		types: ["Ghost", "Poison", "Lev"],
		abilities: {
			0: "Cursed Body"
		},
	},
	haunter: {
		inherit: true,
		types: ["Ghost", "Poison", "Lev"],
		abilities: {
			0: "Cursed Body"
		},
	},
	koffing: {
		inherit: true,
		types: ["Poison", "Fire", "Lev"],
		abilities: {
			0: "Flash Fire",
			H: "Aftermath"
		},
	},
	weezing: {
			inherit: true,
			types: ["Poison", "Fire", "Lev"],
			abilities: {
				0: "Flash Fire",
				H: "Aftermath"
			},
		},
	
	// Mega changes
	charizardmegax: {
		inerit: true,
		types: ["Fire", "Dragon", "Lev"],
		baseStats: {
			hp: 78,
			atk: 150,
			def: 111,
			spa: 100,
			spd: 85,
			spe: 110
		},
	},
	charizardmegay: {
		inerit: true,
		baseStats: {
			hp: 78,
			atk: 84,
			def: 78,
			spa: 159,
			spd: 115,
			spe: 120
		},
	},
	garchompmega: {
		inerit: true,
		abilities: {
			0: "Defiant"
		},
	},
	gallademega: {
		inerit: true,
		abilities: {
			0: "Hyper Cutter"
		},
	},
	ampharosmega: {
		inerit: true,
		abilities: {
			0: "Regenerator"
		},
	},
	houndoommega: {
		inerit: true,
		abilities: {
			0: "Weak Armor"
		},
	},
	absolmega: {
		inerit: true,
		types: ["Dark", "Fairy"],
	},
	sceptilemega: {
		inerit: true,
		abilities: {
			0: "Adaptability"
		},
	},
	steelixmega: {
		inerit: true,
		abilities: {
			0: "Iron Barbs"
		},
	},
	alakazammega: {
		inerit: true,
		abilities: {
			0: "Dazzling"
		},
	},
	// New Formes
	unownprimal: {
		num: 201,
		species: "Unown-Primal",
		baseSpecies: "Unown",
		forme: "Primal",
		formeLetter: "P",
		types: ["Psychic"],
		baseStats: {
			hp: 120,
			atk: 120,
			def: 120,
			spa: 120,
			spd: 120,
			spe: 120
		},
		abilities: {
			0: "Protean"
		},
		weightkg: 5,
	},
	// New Megas
	zangoosemega: {
		num: 335,
		species: "Zangoose-Mega",
		baseSpecies: "Zangoose",
		forme: "Mega",
		formeLetter: "M",
		types: ["Normal", "Steel"],
		baseStats: {
			hp: 73,
			atk: 135,
			def: 100,
			spa: 70,
			spd: 80,
			spe: 100
		},
		abilities: {
			0: "Tough Claws"
		},
		heightm: 1.3,
		weightkg: 40.3,
	},
	sevipermega: {
		num: 336,
		species: "Seviper-Mega",
		baseSpecies: "Seviper",
		forme: "Mega",
		formeLetter: "M",
		types: ["Poison", "Dark"],
		baseStats: {
			hp: 73,
			atk: 140,
			def: 60,
			spa: 120,
			spd: 60,
			spe: 105
		},
		abilities: {
			0: "Strong Jaw"
		},
		heightm: 2.7,
		weightkg: 52.5,
	},
	flygonmega: {
		num: 330,
		species: "Flygon-Mega",
		baseSpecies: "Flygon",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ground", "Dragon"],
		baseStats: {
			hp: 80,
			atk: 120,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 120
		},
		abilities: {
			0: "Mold Breaker"
		},
		heightm: 2,
		weightkg: 82,
	},
	hydreigonmega: {
		num: 635,
		species: "Hydreigon-Mega",
		baseSpecies: "Hydreigon",
		forme: "Mega",
		formeLetter: "M",
		types: ["Dark", "Dragon"],
		baseStats: {
			hp: 92,
			atk: 115,
			def: 110,
			spa: 165,
			spd: 110,
			spe: 108
		},
		abilities: {
			0: "Mega Launcher"
		},
		heightm: 1.8,
		weightkg: 160,
	},
	slowkingmega: {
num: 199, 
species: "Slowking-Mega", 
baseSpecies: "Slowking", 
forme: "Mega", 
formeLetter: "M", 
types:["Water", "Psychic "],
baseStats: {hp: 95, atk: 75, def: 100, spa: 125, spd: 150, spe: 45}, 
abilities: {0: "Simple"}, 
weightkg: 79.5, 
},
butterfreemega: {
num: 12, 
species: "Butterfree-Mega", 
baseSpecies: "Butterfree", 
forme: "Mega", 
formeLetter: "M", 
types:["Bug", "Psychic "],
baseStats: {hp: 60, atk: 20, def: 100, spa: 140, spd: 80, spe: 95}, 
abilities: {0: "Tinted Lens"}, 
weightkg: 32, 
evoLevel: 1,
},
	miloticmega: {
num: 350, 
species: "Milotic-Mega", 
baseSpecies: "Milotic", 
forme: "Mega", 
formeLetter: "M", 
types:["Water", "Fairy "],
baseStats: {hp: 95, atk: 70, def: 109, spa: 130, spd: 155, spe: 81}, 
abilities: {0: "Multiscale"}, 
weightkg: 162, 
evoLevel: 1,
}, 
	maractusmega: {
num: 556, 
species: "Maractus-Mega", 
baseSpecies: "Maractus", 
forme: "Mega", 
formeLetter: "M", 
types:["Grass"],
baseStats: {hp: 75, atk: 86, def: 97, spa: 116, spd: 107, spe: 80}, 
abilities: {0: "Prankster"}, 
weightkg: 28, 
evoLevel: 1,
}, 
	
};
