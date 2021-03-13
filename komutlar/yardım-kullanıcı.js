const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
.setThumbnail(client.user.avatarURL)
        .setDescription('**•** **!havadurumu** \n**•** **!instagram**\n**•** **!rastgeleşifre**\n**•** **!ilginçbilgi**\n**•** **!burç**\n**•** **!tekerleme**\n**•** **!davetoluştur**\n**•** **!emojiyükle**\n**•** **!ping**\n**•** **!avatar**\n**•** **!kullanıcı-bilgi**\n**•** **!fenerbahçe**\n**•** **!beşiktaş**\n**•** **!galatasaray**\n**•** **!spotify**\n**•** **!youtube**')

    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kullanıcı',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};