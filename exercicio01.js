// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let number =  parseFloat(prompt("Digite um número: "))

if(number % 2 == 0) {
    console.log("O número digitado é par")
} else {
    console.log("O número digitado é ímpar")
}