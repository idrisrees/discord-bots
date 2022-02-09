module.exports = {
    name: 'help',
    description: "See available commands!",
    execute(message, args){
        

        if (message.member.permissions.has('ADMINISTRATOR')) {
            ;message.channel.send('Admin - Help');
            console.log(`*!help* Logged -Admin-`);
        
        }     
        if (!message.member.permissions.has('ADMINISTRATOR')) {
            ;message.channel.send('Member - Help');
            console.log(`*!help* Logged -Member-`);
        
        }  
}}