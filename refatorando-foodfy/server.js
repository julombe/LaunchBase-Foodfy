
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//CSS
server.use(express.static('public'))

//configure template engine
server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})


//create routes
server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/receitas", function(req, res) {
    return res.render("receitas")
})















//starting server

server.listen(3000, function() {
    console.log("server is running")
})