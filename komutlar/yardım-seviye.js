const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Seviye Komutları')
.setTimestamp()
 .setDescription('**•** **!seviye** \n**•** **!seviye-ayarlar**`\n**•** **!seviye-aç**\n**•** **!seviye-kapat**\n**•** **!seviye-log**`seviye-log`,`seviye-rol`,`seviye-xp`')



.setFooter('VİXEN Seviye Sistemi.')
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
  name: 'seviye-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};