const fs = require('fs');
//Create a new file using the appendFile() method:
//Create a new file using the writeFile() method:
/*
The fs.writeFile() method replaces the specified file and content 
if it exists. If the file does not exist, a new file, containing 
the specified content, will be created:
*/
fs.writeFile('mynewfile2.txt', 'Hello this new content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});