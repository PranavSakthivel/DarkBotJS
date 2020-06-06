module.exports = {
    name: 'args-info',
    usage: '<arg1> <arg2> etc',
	description: 'Information about the arguments provided.',
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};