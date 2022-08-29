const http = require("http")

const HOSTNAME = "localhost"
const PORT = 8000

function requestHandler(req, res) {
    console.log(req)
    res.writeHead(404)
    res.end("This is the end!")  
}


const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started successfully at http://${HOSTNAME}:${PORT}`)
})