var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index');
  });

  app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
  });

  app.post('/person', urlEncodedParser, function(req, res){//urlEncodedParser is a middleware function that parses encrypted posts
    res.send('Thank you');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });

  app.post('/personjson', jsonParser, function(req, res){
    res.send("Thank you for the JSON");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });
}