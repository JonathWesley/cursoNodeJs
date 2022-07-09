function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("teste@gmail.com")
        }, 1500)
    })
}

function enviarEmail(corpo, destino){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false

            if(!deuErro){
                console.log(`
                    Para: ${destino}
                    -------------------------
                    ${corpo}
                    -------------------------
                    De: Jonath
                `)
                resolve({tempo: "5s", destino: destino})
            }else{
                console.log("Erro")
                reject("Fila cheia")
            }
        }, 2000)
    })
}

console.log("Inicio!")
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail("olá mundo", email).then(({tempo, destino}) => {
            console.log(`
                Tempo: ${tempo}
                -------------------------
                Destino: ${destino}
            `)
        }).catch((erro) => {
            console.log("Falha no envio de email! Erro: " + erro)
        })
    })
})
console.log("Fim!")