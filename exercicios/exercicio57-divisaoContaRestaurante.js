const prompt = require("prompt-sync")();

const conta = Number(prompt("Valor total da conta:"));
const pessoas = Number(prompt("Número de pessoas:"));

const porPessoa = conta / pessoas;

console.log("Valor por pessoa: R$ " + porPessoa);
