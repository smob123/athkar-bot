let fetch = require('node-fetch');

getData = async () => {
    //choose one of the json files randomly
    let i = Math.floor(Math.random() * 2) + 1;
    let tweet;

    //fetch the file data
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
    }
    //return the fetched data
    return tweet;
}

module.exports = { getData };
