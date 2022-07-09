function enviarEmail(corpo, destino, callback){
    setTimeout(() => {
        var deuErro = false;

        if(deuErro){
            callback("ERRO", 0, "5s", true);
        }else{
            console.log(`
                Para: ${destino}
                -------------------------
                ${corpo}
                -------------------------
                De: Jonath
            `)
            callback("OK", 10, "5s");
        }
    }, 5000)
}

console.log("Inicio de envio de email!")
enviarEmail("oi testando async", "teste@gmail.com", (status, quantidade,tempo, erro) => {
    if(erro){
        console.log("Deu erro")
    }else{
        console.log(`
            Status: ${status}
            -------------------------
            Contatos: ${quantidade}
            -------------------------
            Tempo de envio: ${tempo}
        `)
    }
})

