var express = require("express");
var app = express();
var bodyParser = require('body-parser')

var scabbies = (req, res, next)=>{
  console.log('scabbies getting executed');
  next();
}

var moby = (req, res, next)=>{
  console.log("Moby Rulz");
  next();
}

app.use(moby);
app.use(scabbies);

app.get("/", (req, res)=> {
    res.sendfile('index.html');
});

app.listen(5000, function() {
   console.log("Listening on 5000");
});

app.use(bodyParser)

//first thing - it's a pain in the ass having to refresh the server everytime
//using npm, install and utilize something called "nodemon." Basically, you'll
//use it in the place of "node" when running your server and anytime you
//edit your server file, it will restart the server automatically. So start 
//using it now


//one thing we'll use a lot is something called "middleware." It's basically
//a function that gets executed between receiving a request and handling it (
//creating your response). 

//we've created a function called scabbies. This will serve as our middleware.
//You use middleware by passing it into "app.use()." Pass the variable scabbies into
//the app.use(). Check you console after you refresh your web browser serving the page

//notice the use of the function next(). That exectutes the next piece of middleware
//queued up. YOU ALWAYS HAVE TO RUN NEXT() IN MIDDLEWARE. It should be the last thing
//in your middleware


//declare another function (maybe name it your favorite skin disease)
//and pass it into another app.use call. 
//have it log something that identifies that's where it's called.
//THE TIMING OF MIDDLEWARE IS IMPORTANT

//The middleware that first gets injected will first gets called! That means
//if you run app.use(middleware1) on line 1, that middleware will get run
//before a call to app.use(middleware2) that was made on line2. Play around
//with the ordering or your middleware functions to see how the timing works. 
//A looootttttt of errors happen because people don't understand this. 