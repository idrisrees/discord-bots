module.exports = {
    name: 'version',
    description: "Check the version of the bot.",
    execute(message, args){
        message.channel.send('**Version-0.1**');
        console.log(`*!version* Logged`);
          
}}