const Twit = require('twit');
const config = require('./assets/config');
const hashtags = require('./assets/hashtags');
const tweet = require('./tweets');


let T = new Twit(config);

//generate a random tweet
generateTweet = async () => {
    let t = await tweet.getData();
    let status = '';
    //generate a random number between 0 and the total number of elements in the json file
    let i = Math.floor(Math.random() * t.content.length);

    //choose a tweet at the random index
    status = t.content[i].zekr + '\n';

    //add hashtags
    for (let i = 0; i < hashtags.data.length; i++) {
        status += hashtags.data[i] + ' ';
    }

    //if the tweet's length is more than 280 characters
    if (status.length > 280) {
        //generate another tweet
        generateTweet();
    } else {
        //share the tweet
        shareTweet(status);
    }
}

shareTweet = (status) => {
    T.post('statuses/update', { status: status },
        function (err, data, response) { });
}

module.exports = { generateTweet };
