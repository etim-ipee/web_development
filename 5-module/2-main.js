const {createServer} = require('http')
const fs = require('fs')

const server = createServer((req, res) => {
    if (req.method === "GET" && req.url === "/create") {
        fs.writeFile('test.txt', "My first file created", () =>{})
         res.writeHead(201, {"content-type": 'text/plain'})
         res.end("File created")
    }else if (req.method === "GET" && req.url === "/read"){
        const note = fs.readFile('./test.txt', () => {})
        console.log(note)
        res.writeHead(200, {"content-type": 'text/plain'})
        res.end(note)   

    }else {
        res.writeHead(404, {"content-type": 'text/plain'})
        res.end("Not Found")
    }
}) 

server.listen(5000, '127.0.0.1', () => {
    console.log('Server is running')
})