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
    status = t.content[i].zekr + '\n \n';

    //get trending hashtags
    const trendingHashtags = await hashtags();

    // keep adding hashtags to the twweet until the length of the text goes above 280 characters
    for (let i = 0; i < trendingHashtags.length; i++) {
        // add a new hashtag to the text
        const s = `${status} ${trendingHashtags[i]} `;
        // break the loop if the tweet's length is above 280
        if (s.length > 280) {
            break;
        }

        // otherwise apply the change to status
        status = s;
    }

    //share the tweet
    shareTweet(status);
}

shareTweet = (status) => {
    T.post('statuses/update', { status: status },
        function (err, data, response) { });
}

module.exports = { generateTweet };
