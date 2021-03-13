const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
                       "🛠Geliştirme Aşamasındadır🛠",

               
    
                "🕛7/24 Aktif🕛",
               "!davet⚡ !yardım⚡", 

        
              
    
 
];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://vorex.glitch.com" );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.guilds.size} Sunucuya ${client.users.size} Kullanıcıya Hizmet Ediyor `);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity(`📩 ${client.guilds.size} Sunucu + 👥 ${client.users.size} Kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
};
