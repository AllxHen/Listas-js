const prompt = require("prompt-sync")();

const preco = Number(prompt("Preço original:"));

const final = preco - 10;

console.log("Preço com desconto: R$ " + final);
