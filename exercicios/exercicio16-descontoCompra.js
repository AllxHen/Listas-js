const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor da compra:"));

if (valor > 100) {
  const final = valor - 10;
  console.log("Valor com desconto: " + final);
} else {
  console.log("Valor total: " + valor);
}
