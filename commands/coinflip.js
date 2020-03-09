const Discord = require('discord.js');

exports.run = async (client, message, args) => {
      let random = (Math.floor(Math.random() * Math.floor(2)));
      if (random === 0) {
      const fej = new Discord.RichEmbed()
        fej.addField("Végeredmény:", `Fej`);
        fej.setFooter(`SilverNetwork | BOT - /coinflip | Kérte: ${message.author.tag}`, client.user.avatarURL);
        fej.setTimestamp();
      message.channel.send(fej)
    }
      else {
        const iras = new Discord.RichEmbed()
        iras.addField("Végeredmény:", `Írás`);
        iras.setFooter(`SilverNetwork | BOT - /coinflip | Kérte: ${message.author.tag}`, client.user.avatarURL);
        iras.setTimestamp();
      message.channel.send(iras)
 }
};
