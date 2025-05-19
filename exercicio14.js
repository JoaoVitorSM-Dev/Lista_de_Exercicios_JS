// Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um número inteiro para calcular seu fatorial: "));

if (numero < 0) {
    console.log("Número negativo não permitido");
} else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`${numero}! = ${fatorial}`);
}