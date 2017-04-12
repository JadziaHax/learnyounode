var map  = require('through2-map');
var http = require('http');

var port = process.argv[2];

var server = http.createServer(function(request, response) {
  if (request.method == 'POST') {
    request.pipe(map(function (chunk) {
       return chunk.toString().toUpperCase();
     })).pipe(response);
  } else {
    return res.end('Need POST request\n');
  }
});

server.listen(port);
