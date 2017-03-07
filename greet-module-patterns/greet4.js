function Greetr(){
  this.greeting = "Hello Function Constructor Alternative";
  this.greet = function(){
    console.log(this.greeting);
  }
}

module.exports = Greetr;