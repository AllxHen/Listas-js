const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor da compra:"));

if (valor > 200) {
  console.log("Desconto de 20%");
} else if (valor > 100) {
  console.log("Desconto de 10%");
} else {
  console.log("Sem desconto");
}
