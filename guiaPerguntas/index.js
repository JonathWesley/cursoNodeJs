const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require('./database/Resposta')

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feito com o banco de dados.")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })
// Mandando o Express usar o EJS como view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))
// body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// rotas
app.get("/", (req, res) => {
    Pergunta.findAll({ raw: true, order:[
        ['id', 'DESC']
    ]}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        })
    })
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
})

app.get("/pergunta/:id", (req, res) => {
    let id = req.params.id

    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){
            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [
                    ['id', 'DESC']
                ]
            }).then(respostas => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        }else{
            res.redirect("/")
        }
    })
})

app.post("/responder", (req, res) => {
    let perguntaId = req.body.pergunta
    let corpo = req.body.corpo

    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+perguntaId)
    })
})

app.listen(4000, ()=>{
    console.log("App rodando!")
})