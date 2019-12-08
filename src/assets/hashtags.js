const Twit = require('twit');
const config = require('../assets/config');

let T = new Twit(config);

async function getTrends() {
    // the list of trending texts
    const trendNames = [];

    // get trending tweets in Saudi Arabia
    const trends = await T.get('trends/place', { id: '1937801' });

    // add the names of the trends to the list
    for (item of trends.data[0].trends) {
        trendNames.push(item.name);
    }

    return trendNames;
}

module.exports = getTrends;