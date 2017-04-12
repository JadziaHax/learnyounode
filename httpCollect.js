var http = require('http');

var targetURL = process.argv[2];

http.get(targetURL, function(response) {
  var fullResponse = '';

  response.setEncoding('utf8');

  response.on('error', console.error);

  response.on('data', function(data) {
    fullResponse += data;
  });

  response.on('end', function(end) {
    console.log(fullResponse.length + '\n' + fullResponse);
  });
  
}).on('error', console.error);
