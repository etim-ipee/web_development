#!/sbr/bin/node
// main server

const {createServer} = require('http')

const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Javascript programming is awesome\n');
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://localhost:3000/');
})