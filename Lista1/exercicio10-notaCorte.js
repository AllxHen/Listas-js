const prompt = require("prompt-sync")();

const nota = Number(prompt("Nota:"));

if (nota >= 7) {
  console.log("Parabéns, você foi aprovado!");
}