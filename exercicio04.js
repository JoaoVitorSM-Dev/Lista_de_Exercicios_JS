//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')();

console.log("=== MENU INTERATIVO ===");
console.log("1 - Dizer Olá");
console.log("2 - Número aleatório");
console.log("3 - Sair");

const opcao = prompt("Escolha uma opção (1-3): ");

switch (opcao) {
  case '1':
    console.log("Olá!");
    break;
  case '2':
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
    console.log(`Seu número aleatório é: ${numeroAleatorio}`);
  case '3':
    console.log("Você encerrou o programa");
    break;
  default:
    console.log("Opção inválida. Por favor, escolha entre 1, 2 ou 3.");
    break;
}
