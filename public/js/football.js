var axios = require("axios");
require("dotenv").config();

var fbKey = process.env.fb_key;
console.log(fbKey);

var queryUrl =
  "https://api.sportradar.us/soccer-extended/trial/v4/en/seasons/sr:season:66441/info.JSON?api_key=" +
  fbKey;

axios
  .get(queryUrl)
  .then(function(res) {
    console.log(res)    
  })
  .catch(function(error) {
    console.log(error);
  });
