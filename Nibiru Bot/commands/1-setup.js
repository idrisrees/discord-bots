module.exports = {
    name: 'setup',
    description: "This is the setup script!",
    execute(message, args){

        module.exports = {
            callback: (message) => {
              const questions = [
                'Server Name',
                'Your Server IP',
                'Check Time - 1m, 5m, 10m, 20m',
              ]
              let counter = 0
          
              const filter = (m) => {
                return m.author.id === message.author.id
              }
          
              const collector = new DiscordJS.MessageCollector(message.channel, filter, {
                max: questions.length,
                time: 1000 * 3, // 15s
              })
          
              message.channel.send(questions[counter++])
              collector.on('collect', (m) => {
                if (counter < questions.length) {
                  m.channel.send(questions[counter++])
                }
              })
          
              collector.on('end', (collected) => {
                console.log(`Collected ${collected.size} messages`)
          
                if (collected.size < questions.length) {
                  message.reply('You did not answer the questions in time')
                  return
                }
          
                let counter = 0
                collected.forEach((value) => {
                  console.log(questions[counter++], value.content)
                })
              })
            },
          }

          console.log(`*!setup* Logged`);
  

}}