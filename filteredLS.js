var fs              = require('fs');

var filePath        = process.argv[2];
var targetExtension = process.argv[3];

filterFileList(filePath, targetExtension);
