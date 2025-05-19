//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;
let numero;

console.log("Informe suas notas (digite 0 para finalizar):");

do {
    numero = parseFloat(prompt("Nota: "));
    
    if (numero !== 0) {
        soma += numero;
        contador++;
    }
} while (numero !== 0);

if (contador > 0) {
    const media = soma / contador;
    console.log(`Média aritmética: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número foi inserido para cálculo da média.");
}