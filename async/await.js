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
            var deuErro = true

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

function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        resolve([
            {nome: "Victor", linguagem: "JS"},
            {nome: "Lima", linguagem: "C#"},
            {nome: "Daniel", linguagem: "Java"}
        ])
    }, 3000)
}

async function principal(){
    var usuarios = await pegarUsuarios()

    var id = await pegarId()

    var email = await buscarEmailNoBanco(id)

    try{
        await enviarEmail("Olá Mundo!", email)
        console.log("Email enviado com sucesso!")
    }catch(erro){
        console.log(erro)
    }

    console.log(usuarios)
}

principal()