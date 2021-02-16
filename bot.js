require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

function readyDiscord() {
    console.log("Bot authorized.");
}

// commands
client.on("ready", readyDiscord);

const commandHandler = require("./commands");

client.on("message", commandHandler);
