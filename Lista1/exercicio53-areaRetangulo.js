const prompt = require("prompt-sync")();

const base = Number(prompt("Base:"));
const altura = Number(prompt("Altura:"));

const area = base * altura;

console.log("Área: " + area);
