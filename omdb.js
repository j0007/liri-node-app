var axios = require("axios");
var fs = require("fs");


var userSearch = "Joe Dirt"
var queryUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + userSearch



axios.get(queryUrl).then(
    function(response) {
        var data = response.data;
        console.log("Title: " + data.Title)
        console.log("Year: " + data.Year)
        console.log("Rated: "+ data.Rated)
        console.log("Rating: " + data.Ratings[1])
        console.log("Language: " + data.Language)
        console.log("Plot: " + data.Plot)
        console.log("Actors: " + data.Actors)
    });



    // * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.
  