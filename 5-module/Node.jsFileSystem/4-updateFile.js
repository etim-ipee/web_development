var fs = require('fs');
//use .appendFile or .writeFile to update the the file
//-The fs.appendFile() method appends the specified content at the end of the specified file:
//-while The fs.writeFile() method replaces the specified file and content:
fs.appendFile('mynewfile1.txt', ' This is my new text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});