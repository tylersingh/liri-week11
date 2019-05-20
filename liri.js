require("dotenv").config();
//requires the file keys.js
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const axios = require('axios')
const fs = require('fs');
const moment = require('moment')

var song = new Spotify(keys.spotify);
//searh is equal to the second argument in the command line
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");
var spotify = new Spotify(keys.spotify);

//function to search for songs
function spotifyMe(songTitle) {
    song.search({ type: 'track', query: songTitle }, function (err, data) {
        if (err) {
            console.log(err);
            return
        }
        var response = data.tracks.items[0];
        var artist = response.artists;
        //for loop for multiple artists on a song
        for (i = 0; i < artist.length; i++) { 
             
        console.log("Artist: " + response.artists[i].name);
        }
        console.log("Song: " + response.name);
        console.log("Preview: " + response.preview_url);
        console.log("Album: " + response.album.name);
 
    });

}

//function to search concerts for artist
function concertMe(venues) {
    axios.get("https://rest.bandsintown.com/artists/" + venues + "/events?app_id=codingbootcamp").then(function(response){
        var resp = response.data[0];
        console.log(resp.venue.region);
        console.log(resp.venue.name);
        console.log(resp.venue.city);
        console.log(moment(resp.datetime).format("MM/DD/YYYY"));
    })
    
}

function movieMe(movieTitle) {
    axios.get("https://www.omdbapi.com/?apikey=trilogy&t=" + movieTitle).then(function(response){
        var resp = response.data;
        console.log();
        console.log();
        console.log();
        console.log();
        console.log();
        console.log();
        console.log();
        console.log();
    })

}

function dowhatiSay() {

}

if (search === "spotify-this-song") {
    spotifyMe(term)
}

else if (search === "concert-this") {
    concertMe(term)
}

else if (search === "movie-this") {
    movieMe(term)

}

else if (search === "do-what-it-says") {
    dowhatiSay()

}