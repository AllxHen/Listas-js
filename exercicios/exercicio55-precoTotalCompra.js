const prompt = require("prompt-sync")();

const preco = Number(prompt("Preço do produto:"));
const qtd = Number(prompt("Quantidade:"));

const total = preco * qtd;

console.log("Total: R$ " + total);
