var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.OWM_API_KEY}`;
const options = { method: "GET", headers: { accept: "application/json" } };

router.get("/movies", (req, res) => {
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
