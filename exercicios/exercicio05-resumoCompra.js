const prompt = require("prompt-sync")();

const prod = prompt("Produto:");
const preco = Number(prompt("Preço:"));
const qtd = Number(prompt("Quantidade:"));

const total = preco * qtd;

console.log(qtd + "x " + prod + " — Total: R$ " + total);