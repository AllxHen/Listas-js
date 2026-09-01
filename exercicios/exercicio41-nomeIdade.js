const prompt = require("prompt-sync")();

const nome = prompt("Nome:");
const idade = Number(prompt("Idade:"));

console.log("Olá " + nome + ", você tem " + idade + " anos.");
