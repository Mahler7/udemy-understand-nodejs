var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');//with encoding shows whole text doc, without shows buffer hexidecimals ---- highWaterMark sets the buffer size in bits.

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');


var gzip = zlib.createGzip(); //creates transform stream

readable.pipe(writeable);

readable.pipe(gzip).pipe(compressed); // stream readable to gzip to compressed, gzip compress, compressed writes the compressed files by gzip