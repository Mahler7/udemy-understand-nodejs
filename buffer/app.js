var buf = new Buffer('Hello', 'utf8') //utf is default encoding, if not specified
console.log(buf); //shows value in hexidecimal
console.log(buf.toString()); //prints Hello
console.log(buf.toJSON()); //prints hash of JSON with array of numbers in Unicode
console.log(buf[2]); //behaves like array

buf.write('wo');
console.log(buf.toString()); //Overwrite He in Hello, wollo is result

//typed arrays ES6 -ArrayBuffer coming from V8
var buffer = new ArrayBuffer(8) //number is storage amount for Buffer in Bytes
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
view[2] = 30; //wont store because buffer only holds 2 numbers
console.log(buffer);
console.log(view);