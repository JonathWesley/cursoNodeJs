class Dado{

    constructor(faces){
        this.faces = faces;
    }

    Rolar(){
        console.log(`Resultado do dado d${this.faces}: ${this.NumeroAleatorio(1, this.faces)}`);
    }

    NumeroAleatorio(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

var d6 = new Dado(6);
d6.Rolar();

var d12 = new Dado(12);
d12.Rolar();

var d100 = new Dado(100);
d100.Rolar();