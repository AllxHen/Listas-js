const prompt = require("prompt-sync")();

const idade = Number(prompt("Idade:"));

if (idade < 12) {
  console.log("Ingresso: R$ 10");
} else {
  console.log("Ingresso: R$ 20");
}
