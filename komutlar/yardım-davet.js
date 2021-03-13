const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Davet Komutları')
.setTimestamp()

 .setDescription('**•** **!davet-takip** \n**•** **!davet-sıralama**')

.setFooter('VİXEN Davet Sistemi.')
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
  name: 'davet-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};