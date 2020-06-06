const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const { prefix, token } = require('./config.json');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.once('ready', () => {
	console.log('Ready!');
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    if (command.args && !args.length) {
        let reply = `There were no arguments provided, ${message.author}.`;

        if (command.usage) {
            reply += `\nCommand instructions: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('Command not found!');
	}

});

client.login(token);