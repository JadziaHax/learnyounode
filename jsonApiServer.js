var http = require('http');
var url  = require('url');

var port = process.argv[2];

function buildParsetimeResponse(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function buildUnixtimeResponse (date) {
  return { unixtime: date.getTime() };
}

var server = http.createServer(function(request, response){
  var parsedUrl   = url.parse(request.url, true);
  var inputDate   = new Date(parsedUrl.query.iso);
  var responseObj;

  if (request.method == 'GET' && parsedUrl.pathname == '/api/parsetime') {
    responseObj = buildParsetimeResponse(inputDate);
  } else if (request.method == 'GET' && parsedUrl.pathname == '/api/unixtime') {
    responseObj = buildUnixtimeResponse(inputDate);
  }

  if (responseObj) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(responseObj));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(port);
