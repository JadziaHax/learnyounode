var fs   = require('fs');
var http = require('http');

var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function(request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' });

  fs.createReadStream(path).pipe(response);
  //this stream was originally created and stored in a variable but learnyounode
  //woudln't consider it a passing solution because it claimed I was using an fs
  //method other than fs.createReadStream(). Seems broken.
});

server.listen(port);
