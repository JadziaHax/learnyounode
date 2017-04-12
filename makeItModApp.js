var filterModule = require('./makeItModMod');

var directoryPath   = process.argv[2];
var targetExtension = process.argv[3];

filterModule(directoryPath, targetExtension, outputResults);

function outputResults(error, data){
  if (error) {
    return console.error('There was an error: ' + error);
  }

  for (var i = 0; i < data.length; i ++) {
    console.log(data[i]);
  }
}
