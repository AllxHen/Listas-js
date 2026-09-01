const prompt = require("prompt-sync")();

const nome = prompt("Nome:");
const anoNasc = Number(prompt("Ano de nascimento:"));

const idade = 2026 - anoNasc;

console.log(nome + " tem " + idade + " anos.");
