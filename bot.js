const config = require("./config.json");

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(config.token);

function readyDiscord() {
    console.log("Bot running.");
}

// commands
client.on("ready", readyDiscord);

const commandHandler = require("./commands");

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
    return names[index] + " is a Mines motherfucker.";
}

// random Mines Motherfucker message in General channel
client.on("message", msg => {
    console.log("Tricky function called.");
    let randNumber = Math.floor(Math.random()*10);
    if (msg.channel.id === "529460715598381056" && randNumber < 5 && !msg.author.bot) {
        msg.reply(tricky());    
    }
}); 

client.on("ready", () => {
    let generalChannel = client.channels.get("529460715598381056");
    let interval = setInterval(function () {
        generalChannel.send("Hello");
    }, 1 * 1000);
});