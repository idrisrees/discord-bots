const { Client, Intents } = require('discord.js');

const { Permissions } = require('discord.js')

const Discord = require('discord.js')

const message = require('discord.js')

const client = new Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] });

const { MessageEmbed } = require('discord.js');

const prefix = 'a!';

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
  client.user.setActivity(`a!help`, { type: "PLAYING" });
});

client.on('guildMemberAdd', member => {
  member.user.send("This server is using Advertising Center to show there server to the world\nJoin here https://discord.gg/Urhh5SEVBw");
  console.log("Welcome message sent to "+member.user.tag)
})

//Stops bots from using commands
client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


//commands here
     if(command == 'help'){
      client.commands.get('help').execute(message, args);
    }s
})
client.login('OTEzMTMzMDc5MzY1ODI0NTUy.YZ6Dcw.WWdUmsw-sXuX1yNlSX4SQ3djNiY');
