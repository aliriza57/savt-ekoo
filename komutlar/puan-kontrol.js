const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  
  const elmas = client.emojis.get('703947172974034944');
  const tamamlandi = client.emojis.get('703950895641264198');
  const boost2 = client.emojis.get('704259773322887212');
  const benzinn = client.emojis.get('753166111616532613');

  let puan = await db.fetch(`puan_${user.id}`);
  let elmass = await db.fetch(`elmass_${user.id}`);
  let benzin = await db.fetch(`benzin_${user.id}`);

  let s;
  if (!puan) s = "0";
  else s = puan;
  let a;
  if (!elmass) a = "0";
  else a = elmass;
  let b;
  if (!benzin) b = "0";
  else b = benzin;
  
  message.delete();

  let cüzdan = new Discord.RichEmbed()
    .setDescription(`:white_check_mark:  **HESAP** : <@!${user.id}> \n:yen: **PUAN** : ${s} \n:gem: **ELMAS** : ${a}`)
    .setColor('RANDOM')
    .setThumbnail(user.avatarURL)
    message.channel.send(cüzdan)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["puan-kontrol"],
  permLevel: 0
};

exports.help = {
  name: "çanta",
  description: "taslak",
  usage: "çanta"
};
