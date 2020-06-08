const Discord = require('discord.js');
const { client } = require('./index.js');

let totalSeconds = (client.uptime / 1000);
const days = Math.floor(totalSeconds / 86400);
const hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;
module.exports = {
	name: 'ping',
    description: 'Checks if the bot is alive.',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const pingEmbed = new Discord.MessageEmbed()
			.setColor('#33CCFF')
			.setTitle('Pong!')
			.setAuthor('Bot Status', ':ping_pong:')
			.setDescription('Bot uptime:', days, 'days,', hours, 'hours,', minutes, 'minutes,', seconds, 'seconds');
		message.channel.send(pingEmbed);
	},
};