var express = require('express');
var router = express.Router();


const key = process.env.OWM_API_KEY
console.log(key);

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}`)
    .then(banane => banane.json())
    .then(data => res.json({movies:data.results}))
})




module.exports = router;
