const Discord = require('discord.js');
const fs = require('fs');
let spamEngel = JSON.parse(fs.readFileSync("./sunucu/spamEngelle.json", "utf8"));

var ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Bu komutu kullanabilmek için **Kanalları Yönet** iznine sahip olmalısın!`);

    let args = message.content.split(' ').slice(1);
        let prefix = ayarlar.prefix
    const secenekler = args.slice(0).join(' ');

    var errembed = new Discord.RichEmbed()
    .setColor("RED")
  .setFooter(`Real Anti Spam Sistemi`, client.user.avatarURL)
  
    .setAuthor(`Real `, client.user.avatarURL)
    .addField("**__Anti Spam Sistemi__**","Sunucunuzda Üyelerin Spam Yaptiğinda Bu Ozellik Ile Susturulur!")
  .addField("Anti Spam Engelleme","Sunucunuzda Bu Ozelliği Açmak Istiyosanısa **!!spam-koruma aç**","Kapatmak Istoyorsanızsa **!!spam-koruma kapat** yazmaniz Yeterlidir.")
    if(secenekler.length < 1) return message.channel.send(errembed);
    //if(secenekler === "aç" || "kapat") return message.channel.send(errembed); (bunu da kullanabilirsiniz.)
      if(secenekler.length < 1) return message.reply("Anti Spam engelleme Sistemini Açmak Icin `!!spam-koruma aç` Kapatmak Için `!!spam-koruma kapat` Yazmalısn").then(m => m.delete(10000));

    message.delete();

            if (secenekler === "aç") {
     message.channel.send(`✅ Anti Spam Koruma Sistemi Aktif Edildi!`).then(m => m.delete(5000));
        spamEngel[message.guild.id] = {
            spamEngel: "acik"
          };

          fs.writeFile("././sunucu/spamEngelle.json", JSON.stringify(spamEngel), (err) => {
            if (err) console.log(err)
          });
    };

    if (secenekler === "kapat") {
        message.channel.send(`🛑 Anti Spam Koruma Sistemi Devre Dışı Bırakıldı! `).then(m => m.delete(5000));
        spamEngel[message.guild.id] = {
            spamEngel: "kapali"
          };

        fs.writeFile("././sunucu/spamEngelle.json", JSON.stringify(spamEngel), (err) => {
            if (err) console.log(err)
          });
    };
}

    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['anti-spam-engelle'],
        kategori: "Yetkili"
      };

      exports.help = {
        name: 'spam-koruma',
        description: 'Spam Engelleme Sistemini Açarsınız/Kapatırsınız.',
        usage: 'spam-koruma <aç> veya <kapat>'
      };