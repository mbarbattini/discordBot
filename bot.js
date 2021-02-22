// Bot Boi by Matthew Barbattini
// Discord.js tutorial : https://discordjs.guide/#before-you-begin

const { prefix, token } = require('./config.json');
const fs = require('fs');
const Discord = require("discord.js");

const client = new Discord.Client();
// client.user.setAvatar('./avatar.webp');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log('Ready!');
});

// dynamic command handler
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);









names = [
    "Ryan",
    "Trent",
    "Natoni",
    "Sam",
    "Matthew"
];

tricky = function() {
    index = Math.floor(Math.random() * names.length);
    return names[index] + " is a Mines motherfucker.";
}

// random Mines Motherfucker message in bot testing channel
client.on("message", msg => {
    let randNumber = Math.floor(Math.random()*100);
    if (msg.channel.id === "790739940702814218" && randNumber < 5 && !msg.author.bot) {
        msg.reply(tricky());    
    }
});

// random Mines Motherfucker message in general testing channel
client.on("message", msg => {
    let randNumber = Math.floor(Math.random()*100);
    if (msg.channel.id === "529460715598381056" && randNumber < 5 && !msg.author.bot) {
        msg.reply(tricky());    
    }
});