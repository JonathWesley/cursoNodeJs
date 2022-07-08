var http = require("http")

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h1><h4>Sei la</h4>")
}).listen(8181)