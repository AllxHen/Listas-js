const prompt = require("prompt-sync")();

const renda = Number(prompt("Renda mensal:"));
const valor = Number(prompt("Valor do empréstimo:"));

if (renda >= 2000 && valor <= renda * 5) {
  console.log("Empréstimo aprovado!");
} else {
  console.log("Empréstimo negado.");
}
