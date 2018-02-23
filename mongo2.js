const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

var db

MongoClient.connect('mongodb://localhost:27017/moby', (err, client) => {
  if (err) return console.log(err)
  db = client.db('moby') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index2.html');
});

// Add data to the database
app.post('/users', (req, res) => {
  db.collection('users').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/');
  });
});

// Delete data in the database
app.post('/delete', (req, res) => {
    db.collection('users').remove(
        req.body, (err, result) => {
            if (err) return console.log(err);
            console.log('saved to database');
            res.redirect('/');
        }
    );
});

// Update data in the database
app.post('/update', (req, res) => {
    db.collection('users').update(
        {username:req.body.username, password:req.body.password, email:req.body.email}, {username:req.body.username2, password:req.body.password2, email:req.body.email2}, (err, result) => {
            if (err) return console.log(err);
            console.log('updated in database');
            res.redirect('/');
        }
    );
});
