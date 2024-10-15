
let nome = "Maria";         // Variável de string
const idade = 30;           // Variável constante
let altura = 1.75;          // Variável de número
let estaChovendo = false;   // Variável booleana

// Exemplo de Escopo
function exemplo() {
    let local = "Escopo local";
    console.log(local);     // Funciona
}

exemplo();
// console.log(local);      - Erro: local não está definido