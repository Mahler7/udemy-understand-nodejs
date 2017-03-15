var express = require('express');

var app = express();

var apiController = require('./controllers/apiController.js');
var htmlController = require('./controllers/htmlController.js');

var port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/public')); //middleware, gets css file

app.set('view engine', 'ejs'); //view engine tells it to look in view folder, ejs tells it to find a file with that extension

app.use('/', function(req, res, next){
  console.log('Request URL: ' + req.url);
  next();
})

htmlController(app);
apiController(app);

app.listen(port);