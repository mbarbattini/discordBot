const welcomeReplies = [
    "Welcome, motherfucker.",
    "It's good to see you, motherfucker.",
    "How are you doing, motherfucker?",
    "Welcome to the motherfuckin' server, motherfucker.",
    "Welcome to the server, motherfucker."
]

module.exports = function(msg, args) {
    index = Math.floor(Math.random() * welcomeReplies.length);
    msg.channel.send(welcomeReplies[index]);
}