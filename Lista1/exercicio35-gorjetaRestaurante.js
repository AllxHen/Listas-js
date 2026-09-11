const prompt = require("prompt-sync")();

const conta = Number(prompt("Valor da conta:"));

const gorjeta = conta * 0.10;

console.log("Gorjeta sugerida: R$ " + gorjeta);
