const prompt = require("prompt-sync")();

const nota = Number(prompt("Nota:"));
const freq = Number(prompt("Frequência (%):"));

if (nota >= 7 && freq >= 75) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado.");
}
