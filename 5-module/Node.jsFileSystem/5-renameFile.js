var fs = require('fs');
//The fs.rename() method renames the specified file:
fs.rename('mynewfile2.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});















