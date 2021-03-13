const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle("Komut Listesi")
    .setDescription("")
    .setColor(0x00ffff)
    .setDescription(
      "**•** **!yetkili** Sunucuyu Yönetmek İçin Gerekli Olan Komutlar.\n**•** **!eğlence** Eğlenmek İçin Bulunan Komutlar.\n**•** **!kullanıcı** Kullanıcılar İçin Komutlar"
    )
    .addField(
      "» Linkler",
      `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=688700021591244855&scope=bot&permissions=805314622)` +
        "**\n**" +
        `[Destek Sunucusu](https://discord.gg/hEZZNdD)`,
      false
    )
    .setFooter("VİXEN| Yardım Komutları");

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
