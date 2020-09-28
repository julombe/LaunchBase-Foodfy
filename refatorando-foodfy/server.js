
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()


//starting server

server.listen(3000, function() {
    console.log("server is running")
})