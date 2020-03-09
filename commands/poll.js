const Discord = require("discord.js")
const prefix = "/"

exports.run = async (client, message, args, tools) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<a:nem:683689706256728098> **Ehhez nincs jogod! Szükséges jog: __Üzenetek kezelése__**")
    if(!args[0]) return message.channel.send("<a:nem:683689706256728098> **Kérlek adj meg egy szöveget!**")
    let embed = new Discord.RichEmbed()
    .setTitle(`Szavazást létrehozta: ${message.author.username}`)
    .setColor("#40ff00")
    .setDescription(args.join(' '))
    .setFooter(`SilverNetwork | BOT - /poll | Kérte: ${message.author.tag}`, client.user.avatarURL)

    let msg = await message.channel.send(embed)

    await msg.react("✅")
    await msg.react("❌")

    message.delete({timeout: 1000});
}