const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("POGGERS")
})

app.get("/blog/:article?", function(req, res){
    var article = req.params.article

    if(article)
        res.send("<h2>Artigo: " + article + "</h2>")
    else
        res.send("BLOG")
})

app.get("/canal/sla", function(req, res){
    var canal = req.query["canal"]

    if(canal)
        res.send(canal)
    else
        res.send("Nenhum canal fornecido.")
})

app.get("/ola/:name/:empresa", function(req, res){
    res.send("<h1>Salve! " + req.params.name + "</h1><h2>Da empresa " + req.params.empresa + "</h2>")
})

app.listen(4000, function(error){
    if(error)
        console.log("There was an error.")
    else
        console.log("Successful.")
})