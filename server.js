/**
 * Created by user on 26.03.2018.
 */

const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./dist'));

var db;

MongoClient.connect('mongodb://AlexeyCloudMongo:1q2w3e4r5t6y7u8i9o0p@ds129939.mlab.com:29939/gl_project', (err, client) => {
    if (err) return console.log(err);
    db = client.db('gl_project');

    app.listen(4000, function() {
        console.log('listening on 4000')
    });
});

app.post('/registration-request', (req, res) => {
    db.collection('users').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/login')
    })
});

app.post('/login-request', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    db.collection('users').find({ 'email': email, 'password': password }).toArray(function(err, results) {
        console.log(results.length);
        if(!results.length) {
            console.log('A user with these credentials does not exist');
            res.redirect('/login');
        } else {
            console.log('login is successfully');
            localStorage.setItem('loginStatus', 'true');
            res.redirect('/home');
        }
    });
});

app.use('/home', (req, res) => {
    if (!localStorage.getItem('loginStatus')) {
        res.redirect('/login');
    }
});

app.use('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});