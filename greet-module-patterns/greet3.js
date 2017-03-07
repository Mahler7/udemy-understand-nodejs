function Greetr(){
  this.greeting = "Hello Function Constructor";
  this.greet = function(){
    console.log(this.greeting);
  }
}

module.exports = new Greetr();