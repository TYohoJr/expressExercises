var express = require("express");
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


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

app.get("/", (req, res)=> {
    res.sendfile('index.html');
});

//try to get this working - just rendering your index.html file like you've done before. Don't read the stuff below 
//until you get it working, lest you'll be a cheater and a pumpkin eater.

//The req and res parameters are really important. You can name them whatever you want, but the names should
//probably reflect what they are - the request object and the response object. 

//Here's an example of when you might use them - perhaps a user is trying to log into your application and he/she 
//passes his or her username and password. You'll grab that information off your REQUEST object - because your request
//object is the object sent TO your server. It is a request. And you give it a response. If his/her password matches, 
//then you can pass "successfully logged in" into your RESPONSE object - because the response is the object sent FROM your
//server

//use postman to call /authenticate, passing in a username and password that exists in the "database" variable
//you'll need use the correct HTTP method - app.post NOT app.get
//hint: you'll need to import some middleware to parse request bodies.
//It still doesn't work, read the code below and try to get it to respond with "you successfully logged in"
//You'll have to modify the word hotdog...


app.post("/authenticate", (req, res)=>{
   var match = db.find((entry)=>{
       if (entry.userName ===  req.body.hotdog){
           res.json("you successfully logged in");  
    //    } else {
    //        res.json("password/username don't match");
        }
   });
    // if (!match){
    //     res.json("couldn't find username");
    // }
       if (entry.userName ===  req.body.hotdog && req.body.password === entry.password){
           return true;
       }
   });
    
    if (!match){
        res.json("you successfully logged in");
    } else {
        res.json("password/username don't match");
    }
});

app.get("/email", (req, res)=>{
    res.send(`your email is ${match.email}`)
})

app.listen(5000, function() {
   console.log("Listening on 5000");
});



//Lastly - create a new route and handler that responds with a username's email from a request object that contains the username
//use /authenticate to figure it how to do it. Use Postman to test it.
