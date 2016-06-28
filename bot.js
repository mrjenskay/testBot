'use strict';

const debug = true;

const token = '230740979:AAF0n6RmY3sIJRHyYC6pJuBRoBuKdrlJbYA';      //insert your bot token obtained via @botfather

const TelegramBot = require('telebotframework').TelegramBot;

const bot = new TelegramBot(token);

bot.startLongpolling();

bot.on('text', msg => {

	let dateSent = new Date().toLocaleString().split('.')[0].replace('T', ' ');
	if (debug) console.log("Date: " + dateSent);
	if (debug) console.log("Text: " + JSON.stringify(msg.text));
	if (debug) console.log("From: " + JSON.stringify(msg.from));
	if (debug) console.log("Chat: " + JSON.stringify(msg.chat) + "\n");

	if (msg.text.indexOf('/') === 0) {

		let commandArgs = msg.text.split(/\s+/);
		let command = commandArgs.shift();
		command = command.substr(1).split('@')[0];
		command = command.toLowerCase()
		let commandText = commandArgs.join(' ');
		let text = '';
	// you can use commandArgs and commandText for your bot, command is the first word after the backslash

		switch (command) {
			case 'test':
				msg.answer("Hello " + msg.from.username + "\nYour name is: " + msg.from.first_name + " " + msg.from.last_name);
				break;
			case 'testing':
				if(msg.from.username === "xxjqueenxx" && msg.chat.type === "private"){
					msg.answer(msg);
				}else{msg.answer("You have no permission to use this command!")}
				break;
			case 'kek':
				msg.answer("kek");
				break;
			case 'randemo':
				var rand=Math.floor(Math.random()*11)+1;
				var i = 0;
				var lololol = "";
				while(i < rand){
					var rand2=Math.floor(Math.random()*5);
				switch(rand2){
					case 0:
						var randEmo = "😎";
						break;
					case 1:
						var randEmo = "❤️";
						break;
					case 2:
						var randEmo = "😘";
						break;
					case 3:
						var randEmo = "😂";
						break;
					case 4:
						var randEmo = "😁";
						break;
				}
					lololol = lololol + randEmo;
					i++;
				}
				msg.answer(lololol);
				break;
			case 'rand':
				msg.answer(Math.floor(Math.random()*1000000001));
				break;
			case 'findfaggots':
			case 'findmalefaggots':
			case 'findfemalefaggots':
				msg.answer("You are a faggot, " + msg.from.first_name);
				break;

			case 'findpedo':
				msg.answer("If you want to bang your own semen, you are a pedo!");
				break;

			case 'cp':
			case 'click_here_for_cp':
			case 'clickhereforcp':
				if(msg.from.first_name === "Rico"){msg.answer("Welcome to the control panel of this bot!\nYou are " + msg.from.first_name+ ".\nYour user ID is "+msg.from.id+".\n❤️❤️❤️\n\nFucking Pedo");}
				else{msg.answer("Welcome to the control panel of this bot!\nYou are " + msg.from.first_name+ ".\nYour user ID is "+msg.from.id+".\n❤️❤️❤️");}
				break;
		}

	}
});
