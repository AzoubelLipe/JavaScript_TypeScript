console.log();

// FOR

for (let i = 0; i < 5; i++) {
    console.log("Número:", i);
}

console.log();

// WHILE
let contador = 0;

while (contador < 5) {
    console.log("Contador:", contador);
    contador++;
}

console.log();

// DO WHILE
let numero = 0;

do {
    console.log("Número:", numero);
    numero++;
} while (numero < 5);

console.log();

// FOR OF
let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

console.log();

// FOR IN
let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

console.log();

// BREAK
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // encerra o loop quando i é 5
    }
    console.log("Número:", i);
}

console.log();

// CONTINUE
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // pula a iteração se i for par
    }
    console.log("Número ímpar:", i);
}

console.log();
