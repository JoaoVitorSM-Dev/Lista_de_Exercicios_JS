// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

let nota = parseFloat(prompt("Digite sua nota de 1 a 10: "))

if(nota <= 4){
    console.log("Aluno reprovado")
} else if(nota == 5 ) {
    console.log("O aluno está na recuperação")
} else {
    console.log("Aluno aprovado")
}