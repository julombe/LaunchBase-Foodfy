
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//configure template engine
server.set("vie engine", "html")

nunjucks.configure("views", {
    express: server
})


//create routes
server.get("/", function(req, res) {
    return res.render("index")
})















//starting server

server.listen(3000, function() {
    console.log("server is running")
})