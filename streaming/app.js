var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 32 * 1024 });//with encoding shows whole text doc, without shows buffer hexidecimals ---- highWaterMark sets the buffer size in bits.

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk){ //event listener waiting for stream, 
  console.log(chunk.length);
  writeable.write(chunk); //puts data in readable into writeable and subsquently into writeable's file
})