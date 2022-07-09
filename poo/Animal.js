class Animal{
    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ChecarEstoque(){
        return 10;
    }
}

class Cachorro extends Animal{
    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;
    }

    Latir(){
        console.log("AU AU!!!");
    }

    ChecarEstoque(){
        console.log("Temos essa quantidade de cachorros: " + super.ChecarEstoque())
    }
}

var cachorro = new Cachorro("Dogyy", 5, 250);
cachorro.ChecarEstoque();
cachorro.Latir();