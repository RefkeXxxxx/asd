const Discord = require("discord.js")

module.exports.run = async (client, message, args, ops) => {
    let embed = new Discord.RichEmbed()
    .setColor("#40ff00")
    .setTitle("Invite:")
    .addField("*", "[[Kattincs ide]](https://discordapp.com/api/oauth2/authorize?client_id=686599201718665280&permissions=0&scope=bot)")
    try{
        message.author.send(embed)
        message.channel.send(`<a:igen:683689705950412887> **Privátba megtalálod az Invite Linket ${message.author}!**`)
    }
    catch(e){

    }
}