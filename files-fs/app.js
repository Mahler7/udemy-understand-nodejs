var fs = require('fs');

//synchronous
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet); //will block users because it is synchronous

//asynchronous
var greet2 = fs.readFile(__dirname + '/greet.txt',
  function(err, data){
    console.log(data);
  }); //returns hexidecimal

var greet3 = fs.readFile(__dirname + '/greet.txt', 'utf8',
  function(err, data){
    console.log(data);
  }); //returns string with utf8

console.log("Done!");