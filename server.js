//Require our file depnedencies from node_modules, saved into package.json for "npm install"
const http = require('http'); //Not needed because of express..
const express = require('express');
const path = require('path');
const elayouts =require('express-ejs-layouts');
var app = express();
var port = 3000;


//Ejs and express layouts utilized
app.set('view engine', 'ejs');
app.use(elayouts);

//routes our application
var router = require('./app/routes');
app.use('/', router);

//set static file, css, images, others
app.use(express.static(path.join(__dirname, 'public')));

//Starts the server
app.listen(port, function(){
    console.log('running on port 3000....')
});



