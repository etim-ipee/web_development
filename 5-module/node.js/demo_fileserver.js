var http = require('http');//http: This module is required to create an HTTP server.
var url = require('url');//url: This module is used to parse the URL of the incoming request.
var fs = require('fs');//fs: This module is used to interact with the file system, allowing the server to read files.

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(5500);
















