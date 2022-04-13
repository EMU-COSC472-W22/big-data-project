const redis = require('async-redis');
let redisPort = process.env.PORT || 6379;
const client = redis.createClient(redisPort);

const expirationTime = 300; //second
const movieFieldFormat = 'movie.id=';
const movieList = "mymovies";
/* variable for hashKeyFormat should go here. fields will be the movie.title */

client.on("error", function (err) {
    console.log("Error " + err);
});

async function setCache(movieId, value){
    var field = movieFieldFormat + movieId;
    return await set(field, JSON.stringify(value))
}

async function set(field, value){
    await client.HSET(movieList, field, value);
}

async function getCache(movieId){
    var field = movieFieldFormat + movieId;
    var value = await get(field);
    return JSON.parse(value);
}

async function get(field) {
    return await client.get(field);
}

async function clearCache(movieId){
    var field = movieFieldFormat + movieId;
    return await clear(field);
}
async function clear(field){
    return  await client.del(field);
}

module.exports.getCache = getCache
module.exports.setCache = setCache
module.exports.clearCache = clearCache