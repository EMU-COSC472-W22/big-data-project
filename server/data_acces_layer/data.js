const fetch = require('node-fetch');

const dataURL = 'http://www.omdbapi.com?apikey=16c2c273';

async function getData(movieId){
    try {
        const response = await fetch(dataURL + movieId);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports.getData = getData;