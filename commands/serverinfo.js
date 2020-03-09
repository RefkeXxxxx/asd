const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Szerver információ")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Szerver név", message.guild.name)
    .addField("Készűlt", message.guild.createdAt)
    .addField("Csatlakoztál", message.member.joinedAt)
    .addField("Összes tag", message.guild.memberCount);

    message.channel.send(serverembed);
}