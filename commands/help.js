const Discord = require('discord.js');
const fs = require('fs');
const { client } = require('../index.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Shows current commands available with their usage.',
    args: false,
    // eslint-disable-next-line no-unused-vars
    execute(message, args) {
        // client.commands = new Discord.Collection();
        // const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        // const helpEmbed = new Discord.MessageEmbed()
        //     .setColor('#33CCFF')
        //     .setTitle('Commands List')
        //     .setAuthor('DarkBot', 'https://i.imgur.com/wSTFkRM.png')
        //     .setDescription('Bot Prefix: **' + prefix + '**');
        // for (const file of commandFiles) {
        //     const command = require(`./commands/${file}`);

        //     helpEmbed.addField(command.name, command.description + '\nUsage: ' + command.usage, true);
        // }

        // message.channel.send(helpEmbed);
        message.channel.send('Still under development');
    },
};