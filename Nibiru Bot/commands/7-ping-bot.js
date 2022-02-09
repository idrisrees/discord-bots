module.exports = {
    name: 'ping-bot',
    description: "This is a ping command!",
    execute(message, args){
        message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms.`);
        console.log(`*!Ping* Logged`);

}}