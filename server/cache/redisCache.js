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

async function getCache(){
    // var field = movieFieldFormat + movieId;
    var fieldsAndValues = await get();
    console.log(fieldsAndValues);
    return fieldsAndValues;
}

async function get() {
    return await client.HGETALL(movieList);    // returns an array ['field1', 'value1', 'field2', 'value2',...]
}

async function clearCache(movieId){
    var field = movieFieldFormat + movieId;
    return await clear(field);
}
async function clear(field){
    return await client.HDEL(movieList, field);
    // return await client.FLUSHALL();
}

module.exports.getCache = getCache
module.exports.setCache = setCache
module.exports.clearCache = clearCache