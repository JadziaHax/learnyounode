var http = require('http');

var targetUrls = [];
var results = [];
var i = 0;

for (var j = 2; j < process.argv.length; j++) {
  targetUrls.push(process.argv[j]);
}

collectStream(targetUrls[i], addToResults);

function addToResults (streamOutput, callback) {
  results.push(streamOutput);
  i++;

  if (results.length < targetUrls.length) {
    callback(targetUrls[i], addToResults);
  } else if (results.length == targetUrls.length) {
    outputResults(results);
  }
}

function outputResults(inputArray) {
  for (var k = 0; k < inputArray.length; k++) {
    console.log(inputArray[k]);
  }
}

function collectStream(inputUrl, callback ) {
  http.get(inputUrl, function(response) {

    var fullResponse = '';

    response.setEncoding('utf8');

    response.on('error', console.error);

    response.on('data', function(data) {
      fullResponse += data;
    });

    response.on('end', function(end) {
      if (callback) {
        callback(fullResponse, collectStream);
      }
    });

  }).on('error', console.error);
}
