const prompt = require("prompt-sync")();

const horas = Number(prompt("Horas estacionado:"));

const total = horas * 5;

console.log("Total a pagar: R$ " + total);
