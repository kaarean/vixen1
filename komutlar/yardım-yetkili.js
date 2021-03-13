const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`VİXEN | Yetkili Komutları`, client.user.avatarURL) 
      .setDescription('**[Destek Sunucum](https://discord.gg/hEZZNdD)**')
.setThumbnail(client.user.avatarURL)
      .setDescription(' **Genel** \n**•** **!ban**\n**•** **!kick**\n**•** **!banlist**\n**•** **!oylama**\n**•** **!reboot**\n**•** **!duyuru**\n**•** **!çekiliş**\n**•** **!isim**\n**•** **!uarı**\n**•** **!sabitle** \n**•** **!uyarı** \n**•** **!botkontrol**')
      .setDescription('**Gerekli Komutlar**, \n**•** **!otorol-sistemi**\n**•** **!sayaç-sistemii**\n**•** **!kayıt-sistemi**\n**•** **!seviye-sistemi**\n**•** **!sunucu-sistemi**\n**•** **!davet-sistemi**\n**•** **!koruma-sistemi**')
      .setDescription('**Diğer** \n**•** **!sunucukur** \n**•** **!herkesten-rol-al**\n**•** **!herkese-rol-al**\n**•** **!unbanall**\n**•** **!serverpanel**\n**•** **!serverpanelkaldır**')
      .setDescription('**Sunucu Komutları**\n**•** **!ses-kanal-aç**\n**•** **!kanal-açıklama** \n**•** **!rol-liste** \n**•** **!temizle**\n**•** **!yaz**\n**•** **!mesajat**\n**•** **!güvenlik**\n**•** **!gkanal**')
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
    name: 'yetkili',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};