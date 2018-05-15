'use strict';

exports.commands = {

learnistor: function(target, room, user) {
		if (!this.runBroadcast()) return;
		let learnstor = Dex.mod('istor').data.Learnsets, movestor = Dex.mod('istor').data.Movedex, dexstor = Dex.mod('istor').data.Pokedex;
		if (!target || toId(target) === '') return this.sendReply("/learnistor: Shows the whether a Pokemon can learn a move, including Pokemon and Moves from istor.");
		let targets = target.split(','), mon = targets[0], move = targets[1];
		if (!mon || !dexstor[toId(mon)]) return this.errorReply("Error: Pokemon not found");
		if (!learnstor[toId(mon)]) return this.errorReply("Error: Learnset not found");
		if (!move || !movestor[toId(move)]) return this.errorReply("Error: Move not found");
		mon = dexstor[toId(mon)];
		move = movestor[toId(move)];
		if (learnstor[toId(mon.species)].learnset[toId(move.name)]) {
			return this.sendReplyBox("In Istor, " + mon.species + ' <font color="green"><u><b>can<b><u></font> learn ' + move.name);
		}
		return this.sendReplyBox("In Istor, " + mon.species + ' <font color="red"><u><b>can\'t<b><u></font> learn ' + move.name);
	},

	istorlist: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Istor Pokemon</h2></center>`;
		let istorDex = require('../mods/istor/pokedex.js').BattlePokedex;
		if (!istorDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(istorDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Istor" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	istorlisthelp: ["/istorlist - Shows the list of Istor Pokemon."],
	felist: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Pokemon</h2></center>`;
		let feDex = require('../mods/fe/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, FE" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	felisthelp: ["/felist - Shows the list of Pokemon in Fusion Evolution."],
	fedex: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>Fusion Evolution Lab Reports</h2></center>`;
		let feDex = require('../mods/fe/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			let separated = target.split(" ");
			let fusionmon = (("" + separated[0]).trim());
			if (mon.species === fusionmon) {
			buf += `<strong>${mon.species}:</strong> <i>${mon.dexentry}</i><br>`;
			}
			else if (fusionmon === "") {
			buf += `<strong>${mon.species}:</strong> <i>${mon.dexentry}</i><br><br>`;
			}
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	fedexhelp: ["/fedex - Shows the dex entries of Pokemon in Fusion Evolution."],
		mfastone: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<center>Megas For All Mega Stone Data</center>`;
		let sylveDex = require('../mods/megasforall/items.js').BattleItems;
		if (!sylveDex) return this.errorReply("Error Fetching MFA Data.");
		Object.values(sylveDex).forEach(item => {
			let separated = target.split(" ");
			let megamon = (("" + separated[0]).trim());
			if (item.megaEvolves === megamon) {
			buf += `<strong>${megamon}:</strong> ${item.name}`;
			}
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	nerfmons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Nerfed Pokemon</h2></center>`;
		let feDex = require('../mods/nerfmons/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching Nerf Data.");
		Object.values(feDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, nerfmons" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	nerfmonshelp: ["/nerfmons - Shows the list of Nerfed Pokemon."],
	optimons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Optimized Pokemon</h2></center>`;
		let feDex = require('../mods/opti/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching Opti Data.");
		Object.values(feDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, opti" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	optimonshelp: ["/optimons - Shows the list of Optimized."],
	jillianlist: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Jillian Pokemon</h2></center>`;
		let jillianDex = require('../mods/jillian/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Jillian" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	jillianlisthelp: ["/jillianlist - Shows the list of Pokemon in Jillian."],
	eternalmons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Eternal Pokemon</h2></center>`;
		let jillianDex = require('../mods/eternal/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Eternal" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	eternalmonsthelp: ["/eternalmons - Shows the list of Pokemon in Eternal Pokemon."],
	eternallearn: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Eternal Pokemon</h2></center>`;
		let jillianDex = require('../mods/eternal/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `this.modData('Learnsets', '${mon.baseSpecies}').learnset.move = ['7L1']&#59; <br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	eternallearnthelp: ["/eternalmons - Shows the list of Pokemon in Eternal Pokemon."],
	eternalmoves: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Eternal Pokemon Moves</h2></center>`;
		let eternalDex = require('../mods/eternal/moves.js').BattleMovedex;
		if (!eternalDex) return this.errorReply("Error Fetching Eternal Data.");
		Object.values(eternalDex).forEach(move => {
			buf += `<button name="send" value="/dt ${move.id}, Eternal" style="background:none;border:none;">${move.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	fusionmoves: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Pokemon Moves</h2></center>`;
		let eternalDex = require('../mods/fusion/moves.js').BattleMovedex;
		if (!eternalDex) return this.errorReply("Error Fetching Fusion Data.");
		Object.values(eternalDex).forEach(move => {
			buf += `<button name="send" value="/dt ${move.id}, Fusion" style="background:none;border:none;">${move.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	usv: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Ultra Space Variants Pokemon</h2></center>`;
		let jillianDex = require('../mods/usv/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Usv" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	usvhelp: ["/eternalmons - Shows the list of Pokemon in Ultra Space Variant."],
	clovermons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Clovermons</h2></center>`;
		let jillianDex = require('../mods/clovermons/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, Clovermons" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	clovermonshelp: ["/clovermons - Shows the list of Clovermons."],
		eeveed: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Eeeved Pokemon</h2></center>`;
		let jillianDex = require('../mods/eeveed/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, eeveed" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	eeveedhelp: ["/eeveed - Shows the list of Pokemon in Eeevee'd."],
	eeveedabilities: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Coded Eeveed Abilities</h2></center>`;
		let feDex = require('../mods/eeveed/abilities.js').BattleAbilities;
		if (!feDex) return this.errorReply("Error Fetching Eeveed Data.");
		Object.values(feDex).forEach(ability => {
			buf += `<button name="send" value="/dt ${ability.id}, Eeveed" style="background:none;border:none;">${ability.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	
	tnfg: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of PTNFG Pokemon</h2></center>`;
		let jillianDex = require('../mods/thefirstnewgen/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, thefirstnewgen" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	tnfghelp: ["/tnfg - Shows the list of Pokemon in Pokemon: The New First Gen."],
	
		mfa: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of MFA Pokemon</h2><br>Clickable list!</center>`;
		let mfaDex = require('../mods/megasforall/pokedex.js').BattlePokedex;
		if (!mfaDex) return this.errorReply("Error Fetching MFA Data.");
		Object.values(mfaDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, megasforall" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
		mfahelp: ["/mfa - Shows the list of Pokemon in Megas For All."],
	mfaitem: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of MFA Pokemon</h2><br>Clickable list!</center>`;
		let mfaDex = require('../mods/megasforall/formats-data.js').BattleFormatsData ;
		if (!mfaDex) return this.errorReply("Error Fetching MFA Data.");
		Object.values(mfaDex).forEach(mon => {
			buf += `requiredItem: &quot;${mon.requiredItem}&quot;<br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
		mfaitemhelp: ["/mfa - Shows the list of Pokemon in Megas For All."],
	 alola: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Alola Formes Pokemon</h2></center>`;
		let jillianDex = require('../mods/alola/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `<button name="send" value="/dt ${mon.species}, alola" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	alolahelp: ["/alola - Shows the list of Pokemon in Alola Formes."],
	femegas: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Mega Stones</h2></center>`;
		let feDex = require('../mods/fe/items.js').BattleItems;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(item => {
			buf += `<button name="send" value="/dt ${item.name}, FE" style="background:none;border:none;">${item.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	femegashelp: ["/femegas - Shows the list of Mega Stones in Fusion Evolution."],
	feabilities: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Coded Fusion Evolution Abilities</h2></center>`;
		let feDex = require('../mods/fe/abilities.js').BattleAbilities;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(ability => {
			buf += `<button name="send" value="/dt ${ability.id}, FE" style="background:none;border:none;">${ability.name}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	sylvemoves: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Coded Fusion Moves</h2></center>`;
		let sylveDex = require('../mods/fe/moves.js').BattleMovedex;
		if (!sylveDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(sylveDex).forEach(move => {
			buf += `<button name="send" value="/dt ${move.id}, FE" style="background:none;border:none;">${move.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
sylveitems: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Sylvemons Items Additions/Alterations</h2></center>`;
		let sylveDex = require('../mods/sylvemons/items.js').BattleItems;
		if (!sylveDex) return this.errorReply("Error Fetching Sylvemons Data.");
		Object.values(sylveDex).forEach(item => {
			buf += `<button name="send" value="/dt ${item.id}, Sylvemons" style="background:none;border:none;">${item.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	sylvemoves: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Sylvemons Moves Additions/Alterations</h2></center>`;
		let sylveDex = require('../mods/sylvemons/moves.js').BattleMovedex;
		if (!sylveDex) return this.errorReply("Error Fetching Sylvemons Data.");
		Object.values(sylveDex).forEach(move => {
			buf += `<button name="send" value="/dt ${move.id}, Sylvemons" style="background:none;border:none;">${move.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	sylveabilities: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Sylvemons Abilities Additions/Alterations</h2></center>`;
		let sylveDex = require('../mods/sylvemons/abilities.js').BattleAbilities;
		if (!sylveDex) return this.errorReply("Error Fetching Sylvemons Data.");
		Object.values(sylveDex).forEach(ability => {
			buf += `<button name="send" value="/dt ${ability.id}, Sylvemons" style="background:none;border:none;">${ability.id}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
gutter: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Alola Formes Pokemon</h2></center>`;
		let jillianDex = require('../mods/fe/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `&quot;${mon.species}&quot;: {<br> &quot;t1&quot;: &quot;${mon.types[0]}&quot;, <br>&quot;t2&quot;: &quot;${mon.types[1]}&quot;,<br> &quot;bs&quot;: { <br>&quot;hp&quot;: ${mon.baseStats.hp}, <br>&quot;at&quot;: ${mon.baseStats.atk}, <br> &quot;df&quot;: ${mon.baseStats.def}, <br> &quot;sa&quot;: ${mon.baseStats.spa},<br>&quot;sd&quot;: ${mon.baseStats.spd}, <br>&quot;sp&quot;: ${mon.baseStats.spe} <br> }, <br> },`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	egutter: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Alola Formes Pokemon</h2></center>`;
		let jillianDex = require('../mods/eternal/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			buf += `&quot;${mon.species}&quot;: {<br> &quot;t1&quot;: &quot;${mon.types[0]}&quot;, <br>&quot;t2&quot;: &quot;${mon.types[1]}&quot;,<br> &quot;bs&quot;: { <br>&quot;hp&quot;: ${mon.baseStats.hp}, <br>&quot;at&quot;: ${mon.baseStats.atk}, <br> &quot;df&quot;: ${mon.baseStats.def}, <br> &quot;sa&quot;: ${mon.baseStats.spa},<br>&quot;sd&quot;: ${mon.baseStats.spd}, <br>&quot;sp&quot;: ${mon.baseStats.spe} <br> }, <br> &quot;w&quot;: ${mon.weightkg}<br> },`;
});
		this.sendReplyBox(`${buf}</div>`);
	},
		mgutter: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Alola Formes Pokemon</h2></center>`;
		let jillianDex = require('../mods/megasforall/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			if (mon.forme === 'Mega') {
			buf += `&quot;${mon.species}&quot;: {<br> &quot;t1&quot;: &quot;${mon.types[0]}&quot;, <br>&quot;t2&quot;: &quot;${mon.types[1]}&quot;,<br> &quot;bs&quot;: { <br>&quot;hp&quot;: ${mon.baseStats.hp}, <br>&quot;at&quot;: ${mon.baseStats.atk}, <br> &quot;df&quot;: ${mon.baseStats.def}, <br> &quot;sa&quot;: ${mon.baseStats.spa},<br>&quot;sd&quot;: ${mon.baseStats.spd}, <br>&quot;sp&quot;: ${mon.baseStats.spe} <br> }, <br> &quot;w&quot;: ${mon.weightkg}<br> },`;
}});
		this.sendReplyBox(`${buf}</div>`);
	},
evgutter: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Alola Formes Pokemon</h2></center>`;
		let jillianDex = require('../mods/eeveed/pokedex.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(mon => {
			if (mon.num > 9000) {
			buf += `&quot;${mon.species}&quot;: {<br> &quot;t1&quot;: &quot;${mon.types[0]}&quot;, <br>&quot;t2&quot;: &quot;${mon.types[1]}&quot;,<br> &quot;bs&quot;: { <br>&quot;hp&quot;: ${mon.baseStats.hp}, <br>&quot;at&quot;: ${mon.baseStats.atk}, <br> &quot;df&quot;: ${mon.baseStats.def}, <br> &quot;sa&quot;: ${mon.baseStats.spa},<br>&quot;sd&quot;: ${mon.baseStats.spd}, <br>&quot;sp&quot;: ${mon.baseStats.spe} <br> }, <br> },`;
			}
			});
		this.sendReplyBox(`${buf}</div>`);
	},
	egutter2: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Alola Formes Pokemon</h2></center>`;
		let jillianDex = require('../mods/eternal/moves.js').BattlePokedex;
		if (!jillianDex) return this.errorReply("Error Fetching Istor Data.");
		Object.values(jillianDex).forEach(move => {
			buf += `'${move.name}': {<br> ${move.basePower}, 'category': ${move.category},<br>},`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	fespeed: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Pokemon</h2></center>`;
		let feDex = require('../mods/fe/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			let speedtierplusscarf = (2.2 * mon.baseStats.spe + 108.9) * 1.5;
			let speedtierscarf = (2 * mon.baseStats.spe + 99) * 1.5;
			let speedtierplus = 2.2 * mon.baseStats.spe + 108.9;
			let speedtier = 2 * mon.baseStats.spe + 99;
			let speedtierzero = 2 * mon.baseStats.spe + 36;
			buf += `${speedtierplus}: Fast+ ${mon.species}<br>${speedtier}: Fast ${mon.species}<br>${speedtierzero}: Bulky ${mon.species}<br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	eternalspeed: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Pokemon</h2></center>`;
		let feDex = require('../mods/eternal/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			let speedtierplusscarf = (2.2 * mon.baseStats.spe + 108.9) * 1.5;
			let speedtierscarf = (2 * mon.baseStats.spe + 99) * 1.5;
			let speedtierplus = 2.2 * mon.baseStats.spe + 108.9;
			let speedtier = 2 * mon.baseStats.spe + 99;
			let speedtierzero = 2 * mon.baseStats.spe + 36;
			buf += `${speedtierplusscarf}: Scarf Fast+ ${mon.species}<br>${speedtierscarf}: Scarf Fast ${mon.species}<br>${speedtierplus}: Fast+ ${mon.species}<br>${speedtier}: Fast ${mon.species}<br>${speedtierzero}: Bulky ${mon.species}<br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	typeoptspeed: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Pokemon</h2></center>`;
		let feDex = require('../mods/typeopt/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			let speedtierplusscarf = (2.2 * mon.baseStats.spe + 108.9) * 1.5;
			let speedtierscarf = (2 * mon.baseStats.spe + 99) * 1.5;
			let speedtierplus = 2.2 * mon.baseStats.spe + 108.9;
			let speedtier = 2 * mon.baseStats.spe + 99;
			let speedtierzero = 2 * mon.baseStats.spe + 36;
			let nameo = mon;
			buf += `${speedtierplusscarf}: Scarf Fast+ ${mon.species}<br>${speedtierscarf}: Scarf Fast ${mon.species}<br>${speedtierplus}: Fast+ ${mon.species}<br>${speedtier}: Fast ${mon.species}<br>${speedtierzero}: Bulky ${mon.species}<br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	mfaspeed: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Pokemon</h2></center>`;
		let feDex = require('../mods/megasforall/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			let speedtierplusscarf = (2.2 * mon.baseStats.spe + 108.9) * 1.5;
			let speedtierscarf = (2 * mon.baseStats.spe + 99) * 1.5;
			let speedtierplus = 2.2 * mon.baseStats.spe + 108.9;
			let speedtier = 2 * mon.baseStats.spe + 99;
			let speedtierzero = 2 * mon.baseStats.spe + 36;
			if (mon.forme === 'Mega') {
			buf += `${speedtierplus}: Fast+ ${mon.species}<br>${speedtier}: Fast ${mon.species}<br>${speedtierzero}: Bulky ${mon.species}<br>`;
		}
		}
		);
		this.sendReplyBox(`${buf}</div>`);
	},
	fespeedscarf: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fusion Evolution Pokemon</h2></center>`;
		let feDex = require('../mods/fe/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			let speedtierplusscarf = (2.2 * mon.baseStats.spe + 108.9) * 1.5;
			let speedtierscarf = (2 * mon.baseStats.spe + 99) * 1.5;
			let speedtierplus = 2.2 * mon.baseStats.spe + 108.9;
			let speedtier = 2 * mon.baseStats.spe + 99;
			let speedtierzero = 2 * mon.baseStats.spe + 36;
			buf += `${speedtierplusscarf}: Scarf Fast+ ${mon.species}<br>${speedtierscarf}: Scarf Fast ${mon.species}<br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	apdata: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Moves</h2></center>`;
		let feDex = require('../data/moves.js').BattleMovedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(move => {
			if (move.category === 'Status' && move.target !== 'normal' && move.target !== 'allAdjacentFoes') {
			buf += `${move.name}<br>`;
			}
		}
		);
		this.sendReplyBox(`${buf}</div>`);
	},
	epcheck: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Eternal Pokemon Moves</h2></center>`;
		let eternalDex = require('../mods/eternal/moves.js').BattleMovedex;
		if (!eternalDex) return this.errorReply("Error Fetching Eternal Data.");
		Object.values(eternalDex).forEach(move => {
			if (move.category !== 'Status') {
			buf += `'${move.name}': { <br>bp: ${move.basePower}, <br>type: '${move.type}', <br>category: '${move.category}',<br> zp: ${move.zMovePower}<br> },<br>`;
			}
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	datalistool: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Moves</h2></center>`;
		let feDex = require('../data/pokedex.js').BattlePokedex;
		if (!feDex) return this.errorReply("Error Fetching FE Data.");
		Object.values(feDex).forEach(mon => {
			if (mon.forme !== 'Mega') {
			buf += `if (pokemon === '${mon.species}') {<br>num = ${mon.num}; <br>document.getElementById("oldhp").innerHTML = "${mon.baseStats.hp}"; <br>document.getElementById("oldatk").innerHTML = "${mon.baseStats.atk}"; <br>document.getElementById("olddef").innerHTML = "${mon.baseStats.def}"; <br>document.getElementById("oldspa").innerHTML = "${mon.baseStats.spa}"; <br>document.getElementById("oldspd").innerHTML = "${mon.baseStats.spd}"; <br>document.getElementById("oldspe").innerHTML = "${mon.baseStats.spe}"; <br>wt = "${mon.weightkg}; <br>}`;
			}
		}
		);
		this.sendReplyBox(`${buf}</div>`);
	},
};
