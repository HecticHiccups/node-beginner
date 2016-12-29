var express = require('express');

var path = require('path');

//create router object
var router = express.Router();

//export router to be used in our server.js
module.exports = router;


//router for Homepage
router.get('/', function(req,res){
     res.render('pages/index');
});

//route for about page
router.get('/about',(req,res)=> {
         res.render('pages/about');
});
router.get('/contact',(req,res)=> {
         res.render('pages/contact');
});


router.post('/contact', (req,res) =>{
    
});
