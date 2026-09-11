const prompt = require("prompt-sync")();

const n1 = Number(prompt("Nota 1:"));
const n2 = Number(prompt("Nota 2:"));

const soma = n1 + n2;
const media = soma / 2;

console.log("Média: " + media);
