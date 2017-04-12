var fs = require('fs');

module.exports = filterFileList;

function filterFileList (inputFilePath, inputTargetExtension, callback){
  fs.readdir(inputFilePath, 'utf8', function(error, data){

    if (error) {
      return callback(error);
    }

    var filteredResults = data.filter(function(file) {
      var inputExtension = file.split('.')[1];

      if (inputExtension == inputTargetExtension) {
        return file;
      }
    });

    callback(null, filteredResults);
  });
}
