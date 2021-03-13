const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Sunucu Yedek al ve Yükle Komutları')
.setTimestamp()
 .setDescription('**•** **!yedek-al**\n**•** **!yedek-yükle**')

.setFooter('VİXEN Sunucu Yedek ve Geri Yükleme Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'sunucu-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};