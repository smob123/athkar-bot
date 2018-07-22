let bot = require('./src/tweetBot');

try {
    bot.generateTweet();
}
catch(err) {
    console.log('an error has occured exiting application');
    exit(1);
}
