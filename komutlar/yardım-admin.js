const Discord = require('discord.js');
const db = require('quick.db')
var ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setAuthor('Yardım Menüsü', client.user.avatarURL)
  .setDescription('**DM** kutunu kontrol et!')
  .setColor('GREEN')
  message.channel.send(yardım)
  
  
  let prefix = ayarlar.prefix
  
  
  let SAVT = new Discord.RichEmbed()
  .setTitle(client.user.username +' Yardım Menüsü')
  .addField(':crown: ', `${prefix}güvenlik #kanal | gelenler şüphelimi/güvenlimi.\n :book: \n${prefix}istek-kanal #kanal | istek sistemini ayarlar.\n:school_satchel: \n${prefix}seviye-aç | konuşarak xp kazanma sistemi. \n :euro: \n${prefix}sil | 1-100 arası yeni mesajları siler. \n :gem: \n${prefix}yaz | yazdıklarını bot yazar. \n :gem:`)
  .setFooter('SAVT')
  .setColor('RANDOM')
  message.author.send(SAVT)
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'taslak', 
  usage: 'yardım'
};
