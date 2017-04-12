var http = require('http');

var targetURL = process.argv[2];

http.get(targetURL, function(response) {

  response.setEncoding('utf8');

  response.on('error', console.error);
  response.on('data', console.log);

}).on('error', console.error);
