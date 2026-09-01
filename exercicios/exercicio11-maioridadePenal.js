const prompt = require("prompt-sync")();

const idade = Number(prompt("Idade:"));

if (idade >= 18) {
  console.log("Você já atingiu a maioridade penal.");
}