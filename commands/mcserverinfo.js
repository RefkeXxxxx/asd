module.exports = {
  description: "Get info on the bot.",
  usage: {},
  examples: {},
  aliases: [ "help", "botinfo" ],
  permissionRequired: 0,
  checkArgs: (args) => {
    return !args.length;
  }
}

module.exports.run = async (client, message, args, permissionLevel, config, constants) => {
  message.channel.send({
    embed: {
      title: "Szerver Információ",
      description: ":anger: SilverNetwork :anger:\n\nUtoljára frissítve\n2020.02.20\n\n:point_right:Mi található a szerveren?\n:star2:Minigamek: Bedwars (Hamarosan),SkyBlock\n:star2:PvP szerverek: FullPvP, KitMap (1.8-as ütés rendszer)\n\nElérhetőségek :gear:\n:speaking_head: Discord: https://discord.gg/8FVUaVq\n\n:busts_in_silhouette: TeamSpeak: ts.SilverNetwork.eu\n\n:crossed_swords: Minecraft Ip: play.SilverNetwork.eu\n\n:link: Verzió: 1.8 - 1.15\n\n:globe_with_meridians: Weboldal: Hamarosan",
      color: 0x40ff00
    }
  })
}