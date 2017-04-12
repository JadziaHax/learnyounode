var net = require('net');

function getTimeString() {
  var date = new Date();

  var dateStrings = [];

  dateStrings.push(date.getFullYear());
  dateStrings.push(date.getMonth()+1);
  dateStrings.push(date.getDate());
  dateStrings.push(date.getHours());
  dateStrings.push(date.getMinutes());

  for (var i = 1; i < dateStrings.length; i++) {
    dateStrings[i] = zeroPad(dateStrings[i]);
  }

  var timeString = dateStrings[0] + '-' + dateStrings[1] + '-' +
                   dateStrings[2] + ' ' + dateStrings[3] + ':' +
                   dateStrings[4] + '\n';

  return timeString;

  function zeroPad(inputNum) {
    if (inputNum < 10) {
      inputNum = '0' + inputNum;
    }
    return inputNum;
  }
}

var server = net.createServer(function(socket) {
  socket.end(getTimeString());
});

server.listen(process.argv[2]);
