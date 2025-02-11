const http = require('http');
const fileSystem = require('fileSystem');
http.createServer(function (req, res) {
  fileSystem.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(5500);