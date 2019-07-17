//Grab the packages/variables we need

var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//Configure the app
//===========================================
//tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

//set the view engine to ejs
app.set('view engine', 'ejs');

//configure instagram app with your access token
ig.use({
    //get access token
    access_token: '754446860.1677ed0.2088ef830b434216b46ff1a2e26fbd37',
});
//SET THE ROUTES
//===========================================
// home page route - our profile's images
app.get('/', function (req, res) {
    //use the instagram package to get our profile's media
    ig.user_self_media_recent(function (err, medias, pagination, remaining, limit) {
        //render the home page and pass in our profile's images
        res.render('pages/index', {grams: medias});
    });
});

//START THE SERVER
//===========================================
app.listen(8080);
console.log('App started! Look at localhost:8080');

