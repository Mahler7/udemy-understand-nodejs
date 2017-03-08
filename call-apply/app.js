var obj = {
  name: 'John Doe',
  greet: function(){
    console.log(`Hello ${this.name}`);
  }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'}); //takes comma separated list (standard)
obj.greet.apply({name: 'Jane Doe'}); //takes array as second parameter