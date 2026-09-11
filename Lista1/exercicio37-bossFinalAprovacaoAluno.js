const prompt = require("prompt-sync")();

const n1 = Number(prompt("Nota 1:"));
const n2 = Number(prompt("Nota 2:"));

const media = (n1 + n2) / 2;

if (media >= 7) {
  console.log("Média " + media + ": Aprovado!");
} else {
  console.log("Média " + media + ": Reprovado!");
}
