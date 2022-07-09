class Filme{
    
    constructor(titulo, ano, genero, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = [];
        this.duracao = duracao;
    }

    Reproduzir(){
        console.log("Reproduzindo...");
    }

    Pausar(){
        console.log("Pausado.");
    }

    Avancar(){
        console.log("Avançar >>");
    }

    Fechar(){
        console.log("Fechar X");
    }

    Ficha(){
        console.log(`
        Título: ${this.titulo}
        Ano de lançamento: ${this.ano}
        Gênero: ${this.genero}
        `)
    }
}

var vingadores = new Filme("Vingadores 2", 2014, "Ação", "Seila", "2h");

vingadores.Ficha();
vingadores.Reproduzir();

var batman = new Filme("Batman", 2009, "Ação", "Naosei", "2h");

batman.Ficha();

batman.Reproduzir();
batman.Pausar();
batman.Avancar();