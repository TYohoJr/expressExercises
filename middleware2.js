var express = require("express");
var app = express();
var morgan = require('morgan')

app.use(morgan("test"))

app.get("/", (req, res)=> {
    res.sendfile('index.html');
});

app.listen(5000, function() {
   console.log("Listening on 5000");
});

//It's likely you will write some middleware yourself, but it's
//extremely likely you'll be using other's middleware. 

//Line 4 is a common piece of middleware that you use. Basically, 
//it specifies that this server will pull all of its files from a 
// ./public directory. You don't want all of your files in one directory. 
//You could have hundreds of them. So let's organize a bit by creating a 
//public directory and putting an index.html file within it. 

//you just successfully used a 3rd party middleware in your server!

//another middleware that is very useful is an npm package called "morgan"
//you'll have to install in via npm. Get it working within this file and see
//how much better your logging is in your terminal as you refresh the browser.
