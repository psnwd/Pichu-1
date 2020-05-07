const Discord = require('discord.js')
module.exports = {
	name: 'forceskip',
	aliases: ['fsk'],
	async execute(client,message,args,dbl,messagecounter,queue) {
        if (!message.guild.me.voice.channel) return message.channel.send('I\'m not connected to any VC in this server!')
        let serverQueue = queue.get(message.guild.id)
        if (!serverQueue) return message.channel.send('Nothing is playing here!')
        if (message.guild.me.voice.channel !== message.member.voice.channel) return message.channel.send('Please connect to my voice channel!')
        serverQueue.connection.dispatcher.emit('finish')
    message.channel.send('Song skipped!').then(m => {m.delete({timeout:15000})})
  
	},
};