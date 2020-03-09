const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send ("<a:nem:683689706256728098> **Ehhez nincs jogod! Szükséges jog: __Üzenetek kezelése__**")
      const uzenet = args.join(" ");
      if (!uzenet) return message.channel.send("<a:nem:670645920865714197> **Adj meg egy üzenetet!**")
      message.delete().catch();
      message.channel.send(uzenet).catch(_ => { })
}
