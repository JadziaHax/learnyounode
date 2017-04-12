var fs       = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(error, data) {
  if (error) throw error;

  var newLineDelimited = data.split('\n');
  console.log(newLineDelimited.length - 1);
});
