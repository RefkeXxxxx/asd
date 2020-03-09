const Discord = require("discord.js")

module.exports.run = async (client, message, args, ops) => {
    let embed = new Discord.RichEmbed()
    .setColor("#40ff00")
    .setTitle("Parancsaim:")
    .addField("Admin:", "`/kick,\n/ban,\n/poll, \n/purge`")
    .addField("Fun:", "`/coinflip,\n/say,\n/embedsay\n/info\n/bot-ping\n/uptime`")
    .addField("*", "`Használd őket egészséggel!`")
    try{
        message.author.send(embed)
        message.channel.send(`<a:igen:683689705950412887> **Privátban elküldtem a parancsokat ${message.author}!**`)
    }
    catch(e){

    }
}