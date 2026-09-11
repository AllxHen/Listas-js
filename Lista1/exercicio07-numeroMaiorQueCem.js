const prompt = require("prompt-sync")();

const num = Number(prompt("Número:"));

if (num > 100) {
  console.log("Esse número é maior que 100!");
}