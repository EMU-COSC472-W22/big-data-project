const express = require('express');
const router = express.Router();

const { getData, getDataByMovieTitle } =  require('../data_acces_layer/data');
const { getCache, setCache, clearCache } = require('../cache/redisCache');

// router.get('/:movieId', (req, res, next) => {
//     const { movieId } = req.params;

//     (async() => {
//         let data = await getCache(movieId);
//         if(data !== null){
//             return res.json(data);
//         }
        
//         data = await getData(movieId);
//         if(data !== null){
//             await setCache(movieId, data);
//             return res.json(data);
//         }
//         return res.status(500);
//     })();
// });

router.get("/list", (req, res, next) => {
    // const movieList = getCache();

    (async() => {
        let movieList = await getCache();
        if (movieList !== null) {
            let formattedList = Object.values(movieList);
            return res.send(formattedList);
        } else {
            return null;
        }
        
        
    })();
})

/* Search for movies from the API */
router.get('/search/:movieTitle', (req, res, next) => {
    const movieTitle = req.params.movieTitle;
    
    (async() => {
        let data = await getDataByMovieTitle(movieTitle);
        res.send(data);
    })();
})

router.delete('/delete', (req, res, next) => {
    const movieData = req.body.item;
    console.log(movieData)
    const movieId = movieData.imdbID;
    (async()=>{
        let result = await clearCache(movieId);
        if(result === 1){
            return res.json({Result: "Movie succesfully deleted from Redis Cache"});
        }
        return res.json({Result:`There is no value depend of key in Redis Server: ${movieId}`})
    })();
});

router.post('/addmovies', (req, res, next) => {
    const movieData = req.body.movie;
    const movieId = movieData.imdbID;

    (async() => {       
        await setCache(movieId, movieData);
        return res.json(movieData);
    })();
});

module.exports = router;