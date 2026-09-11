const prompt = require("prompt-sync")();
const n1 = Number(prompt("Nota 1:"));
const n2 = Number(prompt("Nota 2:"));
const n3 = Number(prompt("Nota 3:"));
console.log("Sua média é: " + (n1+n2+n3)/3);