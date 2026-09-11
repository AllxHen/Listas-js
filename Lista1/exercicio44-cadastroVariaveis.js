const prompt = require("prompt-sync")();

const nome = prompt("Nome:");
const email = prompt("E-mail:");

console.log("Cadastro feito: " + nome + " (" + email + ")");
