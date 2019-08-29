const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const myid = ['507892634044465172'];
const prefix = ['.'];

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : jerry `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});



client.on('message', message => {
    if(message.content === prefix+'daily'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'credits'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@614506376034648066>")
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000; x++) {
        message.channel.send(`**salam salam salam salam		**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
    if(message.content === prefix+'daily'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'credits'){
        message.channel.send('#credits ')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send('#rep <@507892634044465172>')
    }
});

client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000; x++) {
        message.channel.send(`**salam salam salam salam		**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN);
