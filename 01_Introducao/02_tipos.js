
// Tipos primitivos
let idade = 30;             // Number
let altura = 1.75;          // Number
let nome = "João";          // String
let ativo = true;           // Boolean
let valor;                  // Undefined
let carro = null;           // Null
const id = Symbol("id");    // Symbol
const grandeNumero = 1234567890123456789012345678901234567890n; // BigInt

// Tipos de Objeto

// Object
let pessoa = {
    nome: "Ana",
    idade: 25
};

// Array
let frutas = [ "maçã", "banana", "laranja" ];

// Function
function somar(a, b) {
    return a + b;
}

// Date
let agora = new Date();

// Type Coercion

let resultado = "10" + 5;       // "105" (string)
let subtracao = "10" - 5;       // 5 (número)

// Typeof
console.log(typeof nome); // "string"
console.log(typeof idade); // "number"
console.log(typeof ativo); // "boolean"