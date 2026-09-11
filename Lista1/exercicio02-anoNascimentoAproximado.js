const prompt = require("prompt-sync")();
const idade = Number(prompt("Digite sua idade:"));
const anoAtual = 2026;
console.log("Você nasceu por volta de " + (anoAtual - idade) + ".");