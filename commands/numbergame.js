// NumberGame. Bot creates a random number and the user guesses. 
// Ranking system based on how close the guess is

module.exports = {
    name: 'numbergame',
    description: 'Ranking system based on guessing a number.',
    execute(msg, args) {
        // valid arguments
        console.log('Number game callback.');
        if (!args.length) {
            return msg.channel.send(`You didn't include any arguments, ${msg.author}!`)
        }

        // randnumber
        const randNumber = Math.floor(Math.random() * 100000);

        const difference = Math.abs( args[0] - randNumber);

        if (difference === 0) {
            msg.channel.send('YOU GUESSED CORRECTLY!');
        } else if (difference > 0 && difference <= 10) {
            msg.channel.send('You were within single digits... Come on man...');
        } else if (difference > 10 && difference <= 100) {
            msg.channel.send("You were really close!");
        } else if (difference > 100 && difference <= 1000) {
            msg.channel.send('You were not that close.');
        } else {
            msg.channel.send("You were really far off... Pathetic...");
        }

        // final message
        msg.channel.send('Your guess: ' + args[0] + '\nCorrect guess: ' + randNumber);

    },
};