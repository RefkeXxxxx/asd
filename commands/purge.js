exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('<a:nem:683689706256728098> **Hiba!** Nincs jogod ehhez! (Üzenetek kezelése)');
   if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('<a:nem:683689706256728098> **Hiba!** Nincs üzenetek kezelése jogom ebben a szobában!');

   if (!args[0]) return message.channel.send('<a:nem:683689706256728098> **Hiba!** Adj meg gy számot! **(1 > 100)**');
   if (args[0] < 1) return message.channel.send('<a:nem:683689706256728098> **Hiba!** Kérlek **1-nél nagyobb** számot adj meg!');
   if (args[0] > 200) return message.channel.send('<a:nem:683689706256728098> **Hiba!** Kérlek **100-nál kisebb** számot adj meg!');
   if (isNaN(args[0])) return  message.channel.send('<a:nem:683689706256728098> **Hiba!** Kérlek egy **korrekt számot** adj meg-4');

   message.channel.bulkDelete(args[0]).then(() => {
       message.channel.send(`<a:igen:683689705950412887> **${message.author.tag}** által, törölve lett **${args[0]}** üzenet`).then(msg => msg.delete(2500));
   }).catch().catch((err) => message.channel.send('<a:nem:683689706256728098> Hiba! **14 napnál régebbi** üzeneteket nem tudsz törölni!'))
};
