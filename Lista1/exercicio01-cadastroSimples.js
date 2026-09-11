const prompt = require("prompt-sync")();
const nome = prompt("Digite seu nome:");
const idade = Number(prompt("Digite sua idade:"));
const cidade = prompt("Digite sua cidade:");
console.log(nome + ", " + idade + " anos, mora em " + cidade + ".");