require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

function readyDiscord() {
    console.log("Bot running.");
}

// commands
client.on("ready", readyDiscord);

const commandHandler = require("./commands");
// const mainChannel = client.channels.cache.get('529460715598381056');
// mainChannel = "529460715598381056";

client.on("message", commandHandler);

names = [
    "Ryan",
    "Trent",
    "Natoni",
    "Sam",
    "Matthew"
];

tricky = function() {
    index = Math.floor(Math.random() * names.length);
    return names[index] + " is a mines motherfucker.";

}

// random Mines Motherfucker message
client.on("message", msg => {
    randNumber = Math.floor(Math.random()*10);
    if (msg.channel.id === "529460715598381056" && randNumber < 2 && !msg.author.bot) {
        msg.reply(tricky());    
    }
}); 

