# liri-week11

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

In this app you will be able to use Spotify, OMDB, BandsinTown and Moment.

What Each Command Does

node liri.js spotify-this-song <song name>
Shows the following information about the song in terminal/bash window.

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
Or if no song is passed through, it will default to *"Sign of the Times" by Harry Styles

node liri.js movie-this <movie name>
Shows the following information in terminal/bash.

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
Or if no movie is passed through, it will default to "Mr. Nobody"

node liri.js do-what-it-says
Takes the text from random.txt and runs the song through spotify-this-song command


Tech used
Node.js
Twitter NPM Package - https://www.npmjs.com/package/twitter
Spotify NPM Package - https://www.npmjs.com/package/spotify
Request NPM Package - https://www.npmjs.com/package/request


Prerequisites
- Node.js - Download the latest version of Node https://nodejs.org/en/
Built With
Visual Studio Code - Text Editor
Authors
Tyler Singh - Node JS - Tyler Singh