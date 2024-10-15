
// Operadores aritméticos

let soma = 10 + 5;              // 15
let subtracao = 5 - 3;          // 2
let multiplicacao = 5 * 2;      // 10
let divisao = 6 / 3;            // 2
let modulo = 10 % 3;            // 1
let exponenciacao = 5 ** 2;     // 25

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);
console.log(`Módulo: ${modulo}`);
console.log(`Exponenciação: ${exponenciacao}`);

// Operadores de Atribuição

let x = 12;

x += 5;                         // 17
console.log(x);
x -= 7;                         // 10
console.log(x);                 
x *= 3;                         // 30
console.log(x);     
x /= 5                          // 6
console.log(x);
x %= 4;                         // 2
console.log(x);

// Operadores de Comparação

console.log(5 == '5');			// true
console.log(5 === '5');			// false
console.log(6 != '6');			// false
console.log(6 !== '6');			// true
console.log(5 > 6);				// false
console.log(5 < 6);				// true
console.log(5 >= 4);			// true
console.log(5 <= 4);			// false

// Operadores lógicos
let c = true;
let d = false;
console.log(c && d);            // false
console.log(c || d);            // true
console.log(!c);                // false

// BITWISE

// Definindo duas variáveis
let a = 5;                      // Representação binária: 0101
let b = 3;                      // Representação binária: 0011

// E bit a bit
let andResult = a & b;                  // Resultado: 0101 & 0011 = 0001 (1 em decimal)
console.log(`a & b = ${andResult}`);    // Saída: a & b = 1

// OU bit a bit
let orResult = a | b;                   // Resultado: 0101 | 0011 = 0111 (7 em decimal)
console.log(`a | b = ${orResult}`);     // Saída: a | b = 7

// OU exclusivo bit a bit
let xorResult = a ^ b;                  // Resultado: 0101 ^ 0011 = 0110 (6 em decimal)
console.log(`a ^ b = ${xorResult}`);    // Saída: a ^ b = 6

// Deslocamento à esquerda
let leftShiftResult = a << 1;               // Resultado: 0101 << 1 = 1010 (10 em decimal)
console.log(`a << 1 = ${leftShiftResult}`); // Saída: a << 1 = 10

// Deslocamento à direita
let rightShiftResult = a >> 1;               // Resultado: 0101 >> 1 = 0010 (2 em decimal)
console.log(`a >> 1 = ${rightShiftResult}`); // Saída: a >> 1 = 2