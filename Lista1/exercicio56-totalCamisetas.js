const prompt = require("prompt-sync")();

const qtd = Number(prompt("Quantidade de camisetas:"));

const total = qtd * 30;

console.log("Total das camisetas: R$ " + total);
