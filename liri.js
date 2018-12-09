// require("dotenv").config();

var topic= process.argv[2]
var input = process.argv.slice(3).join(" ");



//Defaults 
if (!topic) {
    topic = "movie-this";
  }

if (!input) {
    input = "Mr.Nobody";
  }



if (topic == "concert-this") {
    console.log("Concert :" + input)
}
if (topic == "spotify-this-song") {
    console.log("Song:" + input)
}
if (topic == "movie-this") {
    console.log("Movie:" + input)
}
if (topic == "do-what-it-says") {
    console.log("What it says:" + input)
}

