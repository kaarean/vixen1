const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`VİXEN | Eğlence Komutları`, client.user.avatarURL) 
.setThumbnail(client.user.avatarURL)

     .setDescription('**•** **!espri** \n**•** **!rip**\n**•** **!kralol**\n**•** **!1v1**\n**•** **!kaç-cm**\n**•** **!wasted**\n**•** **!yazı-tura**\n**•** **!doğrulukcesaret**\n**•** **!alkış**\n**•** **!dcdekiyıkık**\n**•** **!tutuklandın**\n**•** **!tkm**\n**•** **!sigarayak**\n**•** **!aşkölçer**\n**•** **!mesajdöndür**\n**•** **!balıktut**\n**•** **!spoiler**\n**•** **!stresçarkı**\n**•** **!manzara**\n**•** **!steam**\n**•** **!ateşle**\n**•** **!kapaklaflar**')

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
    name: 'eğlence',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};