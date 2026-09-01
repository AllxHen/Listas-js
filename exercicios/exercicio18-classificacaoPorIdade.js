const prompt = require("prompt-sync")();

const idade = Number(prompt("Sua idade:"));

if (idade < 12) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}
