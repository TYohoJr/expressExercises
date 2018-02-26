//copy and paste the boilerplate from a previous file. 

//using the openWeather API, grab some data from it and serve it through some routes and handlers. 
//Use postman to grab and view the data. 

//This is what a proxy server is - a server that acts as a middleman - in this case it is between openWeather and a client.

const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))



app.listen(5000, function() {
    console.log("Listening on 5000");
});
