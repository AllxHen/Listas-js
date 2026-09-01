const prompt = require("prompt-sync")();

const idade = Number(prompt("Sua idade:"));

const futura = idade + 10;

console.log("Em 10 anos você terá: " + futura);
