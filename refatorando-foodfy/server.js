const express = require('express')    //importando a biblioteca do express
const nunjucks = require('nunjucks')  //importando a biblioteca do nunjucks

const server = express()
const recipes = require("./data") //calling array

//chamando o css
server.use(express.static('public'))

//configure template engine(nunjucks)

server.set("view engine", "njk")   //setar qual é o motor de views da app, qual é a extensão dos arquivos para abrir 
nunjucks.configure("views", {
    express: server,               //indica ao nunjucks que vamos usar o Express com a var Server
    autoescape: false,             //impede que o nunjucks mostre o codigo html em variaveis
    noCache: true                  //bloqueando o cache do nunjucks         
    
})

//creating routes
server.get("/", function(req, res) {
    return res.render("courses", { items: courses })
})


server.get("/about", function(req, res) {
    
    return res.render("about", {about})
})




  //adicionando rota da página de receita
  server.get("/recipes/:index", function(req, res) {
    const id = req.params.id
    
    return res.render("course", { item: course })
})



server.use(function(req, res) {
    res.status(404).render("not-found");
  });



server.listen(3000, function() {
    console.log("server is running")
})








/*const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receitas = require("./data")

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

server.get("/sobre", function(req, res) {
    return res.render("sobre")
})

server.get("/receitas", function(req, res) {
    return res.render("receitas", {receitas})
})















//starting server

server.listen(3000, function() {
    console.log("server is running")
})*/