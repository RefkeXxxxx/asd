const Discord = require('discord.js');
const prefix = '/';


exports.run = async (client, message, args) => {
    if(message.content.startsWith(prefix + "embedsay")){
    let msg = (message.content.split(' ').slice(1).join(' '));
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send ("<a:nem:683689706256728098> **Ehhez nincs jogod! Szükséges jog: __Üzenetek kezelése__**")
    if (!msg) return message.channel.send("<a:nem:683689706256728098> **Adj meg egy üzenetet!**")
            let embed = new Discord.RichEmbed()
            .setColor('#b342f5')
            .setDescription(`${msg}`, '_ _')
            .setFooter(`SilverNetwork | BOT - /embedsay | Kérte: ${message.author.tag}`, client.user.avatarURL)
            message.delete().catch();
            message.channel.send(embed).catch(_ => { })
}
};