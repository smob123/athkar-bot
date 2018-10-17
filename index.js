let bot = require('./src/tweetBot');

try {
    bot.generateTweet();
}
catch(err) {
    console.log('an error has occured. \n\
                Exiting application...');
    process.exit(1);
}
