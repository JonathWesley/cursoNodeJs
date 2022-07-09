class Leitor{
    Ler(arquivo){
        console.log("Conteúdo do arquivo!");
    }
}

class Escritor{
    Escrever(arquivo, conteudo){
        console.log("Conteúdo escrito.");
    }
}

class Criador{
    Criar(nome){
        console.log("Arquivo criado.");
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Deletando arquivo!");
    }
}

class ManipuladorArquivo{

    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();
    }
}

class GerenciadorUsuario{
    constructor(){
        this.criador = new Criador();
        this.escritor = new Escritor();
    }

    SalvarListaUsuarios(lista){
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt", lista);
    }
}

var manipulador = new ManipuladorArquivo("meuarquivo.txt");

manipulador.leitor.Ler(manipulador.arquivo);
manipulador.escritor.Escrever(manipulador.arquivo, "Conteúdo aqui dentro");
