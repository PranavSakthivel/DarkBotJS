const Discord = require('discord.js');
const { client } = require('../index.js');


module.exports = {
	name: 'ping',
	description: 'Checks if the bot is alive.',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		let totalSeconds = (client.uptime / 1000);
		const days = Math.floor(totalSeconds / 86400);
		const hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		const pingEmbed = new Discord.MessageEmbed()
			.setColor('#33CCFF')
			.setTitle('Pong!')
			.setAuthor('Bot Status', 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/248/ping-pong_1f3d3.png')
			.setDescription('Bot uptime: ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + Math.round(seconds) + ' seconds');
		message.channel.send(pingEmbed);
	},
};