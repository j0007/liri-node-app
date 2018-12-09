var fs = require("fs");
require("dotenv").config();

var Spotify = require('node-spotify-api'); 

var spotify = new Spotify(keys.spotify);


var Spotify = function() {
     
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
        console.log(data); })

};
Music();
