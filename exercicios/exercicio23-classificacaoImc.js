const prompt = require("prompt-sync")();

const peso = Number(prompt("Peso:"));
const altura = Number(prompt("Altura:"));

const imc = peso / (altura * altura);

if (imc < 25) {
  console.log("Peso normal");
} else {
  console.log("Sobrepeso");
}
