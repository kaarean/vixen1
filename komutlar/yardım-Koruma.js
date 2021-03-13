const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Koruma Komutları')
.setTimestamp()
   .setDescription('**•** **!bot-koruma** \n**•** **!rol-koruma**\n**•** **!kanal-koruma**\n**•** **!spam-koruma**')

.setFooter('VİXEN Koruma Sistemi.')
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
  name: 'koruma-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};