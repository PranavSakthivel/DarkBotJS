const Discord = require("discord.js");
const author = "Cyanicbot Reminder";
const { prefix } = require("../config.json");
const client = new Discord.Client();
var clone = require('clone');

module.exports = {
  name: "remind",
  usage: "<s m h d> <user> <message> \n Remember to use the @ in front of user for specifics. For @everyone, just use 'everyone'... please do not leave user blank",
  description: "Reminds after x minutes, hours, or days",
  args: true,
  execute(message, args) {
    var deepCloneArgs = clone(args);
    console.log(args);
    let splitMessage = args;
    deepCloneArgs.shift();
    deepCloneArgs.shift();
    var filteredMessage = deepCloneArgs.join(' ');
    var uid = '@' + splitMessage[1];

    console.log(filteredMessage);
    function reminder() {
      const reminderResponse = new Discord.MessageEmbed()
        .setColor('#33CCFF')
        .setTitle('Reminder')
        .setAuthor(author)
        .setDescription(filteredMessage);
      return message.channel.send(reminderResponse) + message.channel.send(uid);
    }

    switch (splitMessage[0].slice(-1)) {
      case 's': {
        var msDelay = splitMessage[0].slice(0, -1) * 1000;
        message.react('👍');
        //message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + " seconds.");
        setTimeout(reminder, msDelay);
        break;
      }
      case 'm': {
        var msDelay = splitMessage[0].slice(0, -1) * 60000;
        message.react('👍');
        //message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + " minutes.");
        setTimeout(reminder, msDelay);
        break;
      }
      case 'h': {
        var msDelay = splitMessage[0].slice(0, -1) * 3600000;
        message.react('👍');
        //message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + " hours.");
        setTimeout(reminder, msDelay);
        break;
      }
      case 'd': {
        var msDelay = splitMessage[0].slice(0, -1) * 86400000;
        message.react('😄');
        //message.reply("Your reminder has been set. I will remind you in " + splitMessage[0].slice(0, -1) + " days.");
        setTimeout(reminder, msDelay);
        break;
      }
    }
  },
};

