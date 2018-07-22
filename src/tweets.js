let fetch = require('node-fetch');

async function getData() {
    let i = Math.floor(Math.random() * 3) + 1;
    let tweet;
    switch (i) {
        case 1:
        {
            tweet = await fetch('https://ahegazy.github.io/muslimKit/json/azkar_sabah.json')
                    .then((res) => res.json());
        }

        case 2:
        {
            tweet = await fetch('https://ahegazy.github.io/muslimKit/json/azkar_massa.json')
                    .then((res) => res.json());
        }
        case 3:
        {
            tweet = await fetch('https://ahegazy.github.io/muslimKit/json/PostPrayer_azkar.json')
                    .then((res) => res.json());
        }
    }
    return tweet;
}

module.exports = {getData};
