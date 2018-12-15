var axios = require("axios");
var fs = require("fs");


var artist = "Post Malone"
var queryUrl = "https://rest.bandsintown.com/artists/Post%20Malone/events?app_id=codingbootcamp&date=2018-12-14"



axios.get(queryUrl).then(
    function(response) {
        var data = response.data;
        console.log(response.venue)


    });

