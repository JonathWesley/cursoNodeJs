// const não pode mudar
const nome1 = "Jonath";
console.log(nome1);

// var tem escopo global e local
var nome2 = "Pedro"; // global
function func1(){
    var sobrenome2 = "Silva"; // local
    console.log("Olá " + nome2 + " " + sobrenome2);
}

// let tem escopo global, local e de bloco
let nome3 = "João"; // global
function func2(){
    let sobrenome3 = "Souza"; // local
    console.log("Olá " + nome3 + " " + sobrenome3);
}

let a = 10;
// let funciona apenas dentro do bloco
if(true){
    let b = 20; // bloco
    console.log(a+b)
}
// var funciona fora do bloco
if(true){
    var c = 30;
}
console.log(a + c)

func1();
func2();
console.log("Tchau " + nome2);
console.log("Tchau " + nome3);

// parametro opcional tem q sempre vir por último
function soma(a, b = 10){
    console.log(a + b);
}

function sub(a, b, inverter = false){
    inverter ? console.log(b - a) : console.log(a - b);
}

// JSON encurtado
var nome4 = "Victor";
var idade = 20;
var empresa = "Amazon"

var user = {
    nome4,
    idade, 
    empresa
}

console.log(user);

// operador spread
var empresa = {
    empresa: "Amazon",
    cidade: "São Paulo",
    site: "amazon.com",
    email: "amazon@gmail.com"
}

var user2 = {
    nome4, 
    idade,
    ...empresa
}

console.log(user2);

// desestruturação
var user3 = {
    nome: "Jonath Wesley",
    prof: "Programador",
    empresa: "Itaú",
    curso: "Engenharia"
}

var { nome, prof, empresa } = user3;

console.log(nome);
console.log(prof);
console.log(empresa);

// arrow function
let mult3 = (a, b, c) => {
    return a * b * c;
} 

let mult2 = a => a * 2;

console.log(mult3(2, 3, 4));
console.log(mult2(2));


// find / filter
var victor = {
    nome: "Victor Lima",
    empresa: "Guia do programador"
}

var david = {
    nome: "David",
    empresa: "Umbler"
}

var erik = {
    nome: "Erik Fig",
    empresa: "Udemy"
}

var users = [victor, david, erik];

var usuario = users.find(user => user.nome === "Victor Lima");

console.log(usuario);

// template literals
var nome5 = "André Garcia";
var sobre = "Blá blá blá"

var frase = `Olá meu nome é ${nome} e eu sou ${sobre}`;

console.log(frase);