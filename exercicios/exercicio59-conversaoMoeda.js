const prompt = require("prompt-sync")();

const reais = Number(prompt("Valor em Reais:"));

const dolares = reais / 5;

console.log("Valor em Dólares: " + dolares);
