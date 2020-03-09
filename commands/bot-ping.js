const Discord = require('discord.js');

exports.run = async (client, message, args) => {  
    let msgping1 = new Date();
    let msgping2 = new Date() - msgping1;
    let botping = new Date() - message.createdAt;

    let pingembed = new Discord.RichEmbed()
        pingembed.setTitle("Ping:")
        pingembed.addField('Bot Ping ', Math.floor(botping) + 'ms')
        pingembed.setFooter(`SilverNetwork | BOT - /bot-ping | Kérte: ${message.author.tag}`, client.user.avatarURL)
    message.channel.send(pingembed);     
};