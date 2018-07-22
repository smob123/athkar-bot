let Twit = require('twit');
let config = require('./assets/config');
let hashtags = require('./assets/hashtags');
let tweet = require('./tweets');

let T = new Twit(config);

async function generateTweet() {
    let t = await tweet.getData();
    let status = '';
    let i = Math.floor(Math.random() * t.content.length);
    status = t.content[i].zekr + '\n';

    for (let i = 0; i < hashtags.data.length; i++) {
        status += hashtags.data[i] + ' ';
    }

    if (status.length > 280) {
        generateTweet();
    } else {
        shareTweet(status);
    }
}

function shareTweet(status) {
    T.post('statuses/update', {status: status}, 
    function (err, data, response) {});

    setTimeout(function () {
        generateTweet();
    }, 1000 * 60 * 60 * 3);
}

module.exports = {generateTweet};
