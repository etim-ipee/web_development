#!/sbr/bin/node
// main server

const {createServer} = require('http')

const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World\n');
})

server.listen(5000, '127.0.0.1', () => {
    console.log('Server running at http://localhost:5000/');
})