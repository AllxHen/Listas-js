const prompt = require("prompt-sync")();

const idade = Number(prompt("Idade:"));
const estudante = prompt("É estudante? (sim/nao):");

if (idade >= 60 || estudante === "sim") {
  console.log("Tem direito a desconto!");
} else {
  console.log("Sem desconto.");
}
