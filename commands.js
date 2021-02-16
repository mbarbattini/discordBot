const welcomeMessage = require("./commands/welcomeMessage.js");

// function lookup object
const commands = { welcomeMessage }

module.exports = async function (msg) {
    if (msg.channel.id == "790739940702814218") {
        let tokens = msg.content.split(' ');
        let command = tokens.shift();
        if (command.charAt(0) === "!") {
            command = command.substring(1);
            commands[command](msg, tokens);
        }
    }
};