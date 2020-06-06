module.exports = {
	name: 'ping',
    description: 'Checks if the bot is alive.',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send('Pong');
	},
};