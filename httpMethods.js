var express = require("express");
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const obj = [
    {one:"1"},
    {two:"2"},
    {three:"3"}
]

var db = [{
    userName:"barfDude",
    password:"barfDudeRules123",
    email:"farf@snarf.biz"
   }, 
   {
    userName:"trobis",
    password:"trouble1",
    email:"gobis@snobis.biz"
}];

app.get("/test", (req, res)=> {
    res.sendfile('index.html');
});

app.delete('/delete', function (req, res) {
    res.send('DELETE request to homepage');
}); 

app.put('/put', function (req, res) {
  res.send('PUT request to homepage');
});

app.post('/post', function (req, res) {
    res.send('POST request to homepage');
});

app.listen(5000, function() {
    console.log("Listening on 5000");
});

//copy the boilerplate from reqRes.js
//create some fake data (an array of object), set it equal to a const. 

//in reqRes.js we utilized the "post" method instead of the "get"
//These are called different http methods - and your server can use them
//to understand how to handle the request. 

//here's a quick, non-technical rundown of the most common ones
//get - grabs data or file from server. Typically used to read data from a database. Can't send a req.body with it
//post - sends data to server. Think about authenicating a password. CAN send a req.body with it
//put - sends data to server. Typically used to "put" a new value into a database. CAN send a req.body with it
//delete - sends data to server. Typically used to delete a value in a database. CAN send a req.body with it. 


//use all 4 methods to mimic the correct functionality with a database. Your database will be the variable {var}
//USE THE SAME ROUTE FOR ALL OF THEM. It's a common design pattern.
