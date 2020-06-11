const Discord = require('discord.js');
const MersenneTwister = require('mersenne-twister');
const generator = new MersenneTwister();
const author = 'DarkBot Advanced Dice AI';
const diceLogo = 'https://i.imgur.com/G164YiZ.png';
const { prefix } = require('../config.json');

module.exports = {
	name: 'dice',
	usage: '<number of dice> <number of sides per die> <optional modifier>',
	description: 'Rolls some dice or something.',
	args: true,
	execute(message, args) {
		if (isNaN(args[0]) || isNaN(args[1])) { //Invalid arguments
			const invalidInputEmbed = new Discord.MessageEmbed()
				.setColor('#FF0000')
				.setTitle('You can\'t roll text!')
				.setAuthor(author, diceLogo)
				.setDescription('Usage: ' + prefix + 'dice ' + this.usage); //double check
			return message.channel.send(invalidInputEmbed);
		}

		if (args[0] > 200) { //No more than 200 dice
			const tooManyDiceEmbed = new Discord.MessageEmbed()
				.setColor('#FF0000')
				.setTitle('Too many dice!')
				.setAuthor(author, diceLogo)
				.setDescription('Are you really trying to roll ' + args[0] + ' dice?');
			return message.channel.send(tooManyDiceEmbed);
		}

		if (args[1] > 120) { //No dice with more than 120 sides
			const diceNumberTooHigh = new Discord.MessageEmbed()
				.setColor('#FF0000')
				.setTitle('Dice number is too high!')
				.setAuthor(author, diceLogo)
				.setDescription('You should try making a die with ' + args[1] + ' sides..');
			return message.channel.send(diceNumberTooHigh);
		}

		let roll = '';
		let rollNum = 0;
		let finalRoll = 0;
		const mod = args[2] && !isNaN(args[2]); //Check if user provided valid modifier
		let modInRange = false;
		if (mod) { //Check if modifier is in range of valid numbers
			modInRange = (args[2] <= 24000 && args[2] >= -24000);
		}

		for (let i = 0; i < args[0]; i++) {
			rollNum = Math.round(generator.random() * (args[1] - 1) + 1);
			finalRoll += rollNum;
			roll += '[' + rollNum + ']' + ' ';
		}

		if (mod && modInRange) {
			finalRoll += parseInt(args[2]);
			if (args[2] >= 0) {
				roll += ' + ' + args[2];
			}
			else {
				roll += ' - ' + Math.abs(args[2]);
			}
		}

		const diceEmbed = new Discord.MessageEmbed()
			.setColor('#33CCFF')
			.setTitle(finalRoll)
			.setAuthor(author, diceLogo)
			.setDescription(roll);

		if (mod) {
			if (modInRange) {
				diceEmbed.addField('Rolled with modifier:', args[2], false);
			}
			else {
				diceEmbed.addField('Invalid modifier', args[2] + ' is kinda ridiculous.', false);
			}
		}
		message.channel.send(diceEmbed.addField('Rolled by', message.author, false));
	},
};