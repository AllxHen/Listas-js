const prompt = require("prompt-sync")();

const salario = Number(prompt("Salário atual:"));

const novoSalario = salario * 1.10;

console.log("Novo salário: R$ " + novoSalario);
