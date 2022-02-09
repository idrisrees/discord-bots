const { Client, Intents } = require('discord.js');

const { Permissions } = require('discord.js')

const Discord = require('discord.js')

const message = require('discord.js')

const client = new Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] });

const { MessageEmbed } = require('discord.js');

const prefix = ';';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

const path = require('path')

const WOKCommands = require('wokcommands')

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

//Logs
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`;help`, { type: "PLAYING" });
});

//Stops bots from using commands
client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

//commands here
     if(command == 'setup'){
      client.commands.get('setup').execute(message, args);
    }

    if(command == 'Sping'){
      client.commands.get('ping-server').execute(message, args);
    }

    if(command == 'reload'){
      client.commands.get('reload-serverStatus').execute(message, args);
    }

    if(command == 'version'){
      client.commands.get('version').execute(message, args);
    }

    if(command == 'help'){
      client.commands.get('help').execute(message, args);
    }

    if(command == 'credits'){
      client.commands.get('credits').execute(message, args);
    }

    if(command == 'ping'){
      client.commands.get('ping-bot').execute(message, args);
    }

    if(command == 'deleteC'){
      client.commands.get('deleteCommands').execute(message, args);
    }


})
client.login('OTA4MDI5NzU2MTg2OTU5OTcz.YYvynA.zkouxJtZjsXyGj-Ark__4AEX7HQ');
