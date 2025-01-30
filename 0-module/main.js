// a file that prints hello world in node
const http = require("node:http")
const port =3000
const hostname = "localhost"

const server = http.createServer((req,res) => {
    res.end("You're welcome to development class!")
})


server.listen(port,hostname, ()=>{
    console.log("server is running")
})