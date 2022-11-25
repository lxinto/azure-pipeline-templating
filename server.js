const http = require("http")
const port = 5050

const server = http.createServer(function(req, res) {
        res.write("If you see this it means templated pipeline worked successfully :) congrats")
        res.end()
})

server.listen(port, function(error) {
        if (error) {
                console.log("something went wrong", error)
        } else {
                console.log("Server is listening on " + port)
        }
})
