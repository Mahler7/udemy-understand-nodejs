var EventEmitter = require('events');
var util = require('util');

function Greetr(){
  EventEmitter.call(this);
  this.greeting = "Hello World!";
}

//adds to prototype chain
util.inherits(Greetr, EventEmitter); //Greetr inherits from EventEmitter

Greetr.prototype.greet = function(data){
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
  console.log('Someone greeted: ' + data);
});

greeter1.greet('Tony');