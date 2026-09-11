const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor compra:"));

if (valor > 200) {
  console.log("Sua compra pode ter frete grátis!");
}