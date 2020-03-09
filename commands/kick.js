const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(`<a:nem:683689706256728098> **Ehhez nincs jogod! Szükséges jog: __Tagok kitiltása__!**`);
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  let reason = args.slice(1).join(' ');
  if (!member) return message.channel.send(`<a:nem:683689706256728098> **Említs meg egy felhasználót!**`);
  if (!reason) return message.channel.send("<a:nem:683689706256728098> **Kérlek adj meg egy indokot!**")
  if (!member.kickable) return message.channel.send(`<a:nem:683689706256728098> **Nem tudod kirúgni az adott embert, mivel ő magasabb rangszinten vagy egyenlő rangszinten van veled!**`);
  await member.kick(reason).catch(error => message.channel.send(`<a:nem:683689706256728098> **Valamit elírtál, kérlek próbáld meg újra!**`));
  message.channel.send(`<a:igen:683689705950412887> **${member}-t/at/et kirúgtam, általa: ${message.author}, ezzel az indokkal: ${reason}!**`)
  message.react("✅")
  message.react("❌")
  try{
    member.send(`<a:igen:683689705950412887> Ki lettél rúgva erről a szerverről: ${message.guild.name}, általa: ${message.author}, ezzel az indokkal: ${reason}!`)
  }catch(e) {
    member.send(`<a:igen:683689705950412887> Ki lettél rúgva erről a szerverről: ${message.guild.name}, általa: ${message.author}, ezzel az indokkal: ${reason}!`)
  }
};