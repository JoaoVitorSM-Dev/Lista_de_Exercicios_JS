/* Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido,
 utilizando uma estrutura de controle if-else. */

const prompt = require('prompt-sync')()

let idade = parseFloat(prompt("Digite sua idade: "))

if(idade <= 12) {
    console.log("Você é uma criança")
} else if(idade >= 13 && idade <= 17){
    console.log("Você é um adolescente")
} else if(idade >= 18 && idade <= 59 ) {
    console.log("Você é um adulto")
} else {
    console.log("Você é idoso")
}