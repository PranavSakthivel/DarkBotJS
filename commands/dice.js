const Discord = require('discord.js');
const MersenneTwister = require('mersenne-twister');
const generator = new MersenneTwister();

module.exports = {
	name: 'dice',
	usage: '<number of dice> <number of sides per die>',
	description: 'Rolls some dice or something.',
	args: true,
	execute(message, args) {
		if (isNaN(args[0]) || isNaN(args[1])) {
			const invalidInputEmbed = new Discord.MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Error')
			.setAuthor('DarkBot Advanced Dice AI', 'https://i.imgur.com/G164YiZ.png')
			.setDescription('Command usage: <number of dice> <number of sides per die>');
			return message.channel.send(invalidInputEmbed);
		}

		if (args[0] > 200) {
			const tooManyDiceEmbed = new Discord.MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Too many dice!')
			.setAuthor('DarkBot Advanced Dice AI', 'https://i.imgur.com/G164YiZ.png')
			.setDescription('Are you really trying to roll ' + args[0] + ' dice?');
			return message.channel.send(tooManyDiceEmbed);
		}

		if (args[1] > 120) {
			const diceNumberTooHigh = new Discord.MessageEmbed()
			.setColor('#FF0000')
			.setTitle('Dice number is too high!')
			.setAuthor('DarkBot Advanced Dice AI', 'https://i.imgur.com/G164YiZ.png')
			.setDescription('You should try making a die with ' + args[1] + ' sides..');
			return message.channel.send(diceNumberTooHigh);
		}

		let roll = '';
		let rollNum = 0;
		let finalRoll = 0;
		for (let i = 0; i < args[0]; i++) {
			rollNum = Math.round(generator.random() * (args[1] - 1) + 1);
			finalRoll += rollNum;
			roll += '[' + rollNum + ']' + ' ';
		}

		const diceEmbed = new Discord.MessageEmbed()
			.setColor('#33CCFF')
			.setTitle(finalRoll)
			.setAuthor('DarkBot Advanced Dice AI', 'https://i.imgur.com/G164YiZ.png')
			.setDescription(roll);
		message.channel.send(diceEmbed);
	},
};