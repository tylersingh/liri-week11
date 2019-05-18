require("dotenv").config();
//requires the file keys.js
var keys = require("./keys.js");
const Spotify = require('node-spotify-api');

var spotify = new Spotify({
    // id: client id
   // secret: spotify client secret
});

spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });

var song = new Spotify

var search = process.argv[2];

var term = process.argv.slice(3).join(" ");

spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });

// By default, if no search type is provided, search for a song.
if (!search) {
    search = "song";
  }
  
  // By default, if no search term is provided, search for "The Sign by Ace of Base."
  if (!term) {
    term = "The Sign by Ace of Base";
  }
  