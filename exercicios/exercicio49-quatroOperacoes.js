const prompt = require("prompt-sync")();

const n1 = Number(prompt("Número 1:"));
const n2 = Number(prompt("Número 2:"));

const soma = n1 + n2;
const sub = n1 - n2;
const mult = n1 * n2;
const div = n1 / n2;

console.log("Soma: " + soma);
console.log("Subtração: " + sub);
console.log("Multiplicação: " + mult);
console.log("Divisão: " + div);
