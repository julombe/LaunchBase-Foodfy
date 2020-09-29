
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receitas = require("./data")

//CSS
server.use(express.static('public'))

//configure template engine
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


//create routes
server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/sobre", function(req, res) {
    return res.render("sobre")
})

server.get("/recipes", function(req, res) {
    return res.render("recipes",)
})


server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = [...recipes]; // Array de receitas carregadas do data.js
  
    return res.render('recipe', {recipe: recipe[recipeIndex]})
  })



//starting server

server.listen(3000, function() {
    console.log("server is running")
})





/*const express = require('express')    //importando a biblioteca do express
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

    let recipesFiltered = []

    for(let i = 0; i < 6; i++) {
        recipesFiltered.push(recipes[i])
    }

    console.table(recipesFiltered)

    return res.render("home", { items: recipes })
})


server.get("/recipes", function(req, res) {
    
    return res.render("recipes", { items: recipes })
})




  //adicionando rota da página de receita
  server.get("/recipes/:index", function(req, res) {
      const { index: recipeIndex } = req.params


      const recipe = recipes [recipeIndex]

      if (!recipe) return res.send("Recipe not found!")

      console.log(recipe)

      return res.render("recipe", { item: recipe })
})



server.use(function(req, res) {
    res.status(404).render("not-found");
  });



server.listen(3000, function() {
    console.log("server is running")
})*/