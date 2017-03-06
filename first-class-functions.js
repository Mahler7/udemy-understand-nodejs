// function statement
function greet(){
  console.log('Hi');
}
greet();

//functions are first class
function logGreeting(fn){
  fn();
}
logGreeting(greet);

//function expression
var greetMe = function(){
  console.log("Hi there.");
}
greetMe();

//it's first class
logGreeting(greetMe);

//function expression on the fly
logGreeting(function(){
  console.log("Hi again.");
});