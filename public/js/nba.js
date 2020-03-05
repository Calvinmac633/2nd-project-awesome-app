var axios = require("axios");
require("dotenv").config();

var nbaKey = process.env.nba_key;
console.log(nbaKey);

var queryUrl =
  "https://api.sportradar.us/nba/trial/v7/en/games/2019/REG/schedule.json?api_key=" +
  nbaKey;

axios
  .get(queryUrl)
  .then(function(res) {
    console.log(res.data.games);
  })
  .catch(function(error) {
    console.log(error);
  });
