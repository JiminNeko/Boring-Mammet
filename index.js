const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		client.commands.get('ping').execute(message, args);
	} else if (command === 'streamteam') {
        client.commands.get('streamteam').execute(message,args);
    } else if (command === 'server') {
        client.commands.get('server').execute(message,args);
    } else if (command === 'prune') {
        client.commands.get('prune').execute(message,args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message,args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message,args);
    } else if (command === 'avatar') {
        client.commands.get('avatar').execute(message,args);
    } else if (command === 'twitch') {
        client.commands.get('twitch').execute(message,args);
    } else if (command === 'communist') {
        client.commands.get('communist').execute(message,args);
    } else if (command === 'gay') {
        client.commands.get('gay').execute(message,args);
    } else if (command === 'racist') {
        client.commands.get('racist').execute(message,args);
    } else if (command === 'fatcat') {
        client.commands.get('fatcat').execute(message,args);
    }
	// other commands...
});

client.login(token);