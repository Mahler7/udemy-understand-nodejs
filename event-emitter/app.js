var Emitter = require('./emitter.js');
var emtr = new Emitter();
emtr.on('greet', function(){
  console.log("Somewhere, someone said Hello.");
});
emtr.on('greet', function(){
  console.log("A greeting occurred.");
});

console.log("Hello");
emtr.emit('greet');