// NumberGame. Bot creates a random number and the user guesses. 
// Promoted to Number Wizard Role if exactly correct

module.exports = {
    name: 'numbergame',
    description: 'Ranking system based on guessing a number.',
    execute(msg, args) {
        // valid arguments
        console.log('Number game callback.');
        if (!args.length) {
            return msg.channel.send(`You didn't include any arguments, ${msg.author}!`)
        }

        // message sender roles
        const member = msg.member;
        const role = msg.guild.roles.cache.find(role => role.name === 'Number Wizard');

        // randnumber
        const randNumber = Math.floor(Math.random() * 1000);
        const difference = Math.abs( args[0] - randNumber);

        if (difference === 0) {
            msg.channel.send('YOU GUESSED CORRECTLY! \n You have been promoted to "Number Wizard"!');
            if (!member.roles.cache.some(role => role.name === 'Number Wizard')) {
                // client.guilds.cache
            }
        } else if (difference > 0 && difference <= 10) {
            msg.channel.send('You were within single digits... Come on man...');
        } else if (difference > 10 && difference <= 100) {
            msg.channel.send("You were really close!");
        } else if (difference > 100 && difference <= 500) {
            msg.channel.send('You were not that close.');
        } else {
            msg.channel.send("You were really far off... Pathetic...");
        }

        // final message
        msg.channel.send('Your guess: ' + args[0] + '\nCorrect guess: ' + randNumber);

    },
};