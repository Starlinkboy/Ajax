/* Made by Starlinkboy#0159
* https://github.com/Starlinkboy/Ajax
*Dont Skid
*/
const prompt = require('prompt-sync')({ sigint: true });
const axios = require("axios")
const { blue, blueBright, red, green } = require("colorette");
const Discord = require("discord.js");
const { WebhookClient } = require('discord.js');
console.clear();
console.log(blueBright(` $$$$$$\\                          `))
console.log(blue(`$$  __$$\\                         `))
console.log(blueBright(`$$ /  $$ |$$\\  $$$$$$\\  $$\\   $$\\ `))
console.log(blue(`$$$$$$$$ |\\__| \\____$$\\ \\$$\\ $$  |`))
console.log(blueBright(`$$  __$$ |$$\\  $$$$$$$ | \\$$$$  / `))
console.log(blue(`$$ |  $$ |$$ |$$  __$$ | $$  $$<  `))
console.log(blueBright(`$$ |  $$ |$$ |\\$$$$$$$ |$$  /\\$$\\ `))
console.log(blue(`\\__|  \\__|$$ | \\_______|\\__/  \\__|`))
console.log(blue(`    $$\\   $$ |                    `))
console.log(blueBright(`    \\$$$$$$  |                    `))
console.log(blue(`     \______/                   \n`))
console.log(blue(`Starlinkboy#0159\n\n`))

console.log(blueBright("[1] Webhook Spammer\n[2] Webhook Deleter\n[3] Webhook Info\n"))
const choice = prompt(blueBright("[?] Enter your choice: "))

if(choice==1){
  const webhook = prompt(blueBright("[?] Webhook URL: "));
  const myHook = new WebhookClient({ url: webhook }); 
  
  const mes = prompt(blueBright("[?] Message: "));
  const title = prompt(blueBright("[?] Embed Title: "));
  const desc = prompt(blueBright("[?] Embed Description: "));
  
  const embed = new Discord.MessageEmbed()
        .setTitle(`${title}`)
        .setURL("https://github.com/Starlinkboy/Ajax")
        .setDescription(`${desc}`)
        .setFooter("Ajax Webhook Spammer | Starlinkboy#0159")
        .setColor("#0000FF")
      
  var i=0;
  console.log(green("[+] Spamming..."))
  while(i<=150){
    myHook.send({content: mes, embeds: [embed], username: 'Ajax Webhook Spammer', avatarURL: 'https://i.imgur.com/z6j9cas.png', }).catch(console.error);
    i=i+1;
    
  }
}

else if(choice==2) {
  const webhook = prompt(blueBright("[?] Webhook URL: "));
  const myHook = new WebhookClient({ url: webhook });  
  myHook.delete()
  console.log(green("[+] Deleted"))
}
else if(choice==3){
  const webhook = prompt(blueBright("[?] Webhook URL: "));
  const hooky = new WebhookClient({ url: webhook });  
  info();
  
  
  async function info(){
  
  let res = await axios.get(webhook);
    
    
  let type = res.data.type;
    
  
  console.log(blue("Webhook Info"))
  console.log(green(`[+] Url: ${webhook}\n[+] Avatar: ${res.data.avatar} \n[+] Name: ${res.data.name}\n[+] Created At: ${hooky.createdAt} | ${hooky.createdTimestamp}\n[+] Guild Id: ${res.data.guild_id}\n[+] Channel Id: ${res.data.channel_id}\n[+] Type: ${type}\n[+] ID: ${hooky.id}\n[+] Token: ${hooky.token}\n[+] Application Id: ${res.data.application_id}\n[+] Data Given by Ajax | https:/github.com/Starlinkboy/Ajax`))
  
  
  
    }
  }
 
else
{
  console.log(red("[!] Invalid Option!"))
}


