const prompt = require("prompt-sync")();

const num = Number(prompt("Número:"));

if (num > 0) {
  console.log("O número é positivo.");
} else {
  console.log("O número é negativo.");
}