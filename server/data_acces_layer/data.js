const fetch = require('node-fetch');

const dataURL = 'http://www.omdbapi.com?apikey=35ff2fa2&';

async function getData(movieId){
    try {
        const response = await fetch(dataURL + "i=" + movieId);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function getDataByMovieTitle(movieTitle){
    try {
        const response = await fetch(dataURL + "t=" + movieTitle);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports.getData = getData;
module.exports.getDataByMovieTitle = getDataByMovieTitle;