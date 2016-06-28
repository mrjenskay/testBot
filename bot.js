'use strict';

const debug = true;

const token = '<token>';      //insert your bot token obtained via @botfather

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
			case 'start':
				msg.answer("Mijn eerste command!");
				break;
		}

	}
});

