const prompt = require("prompt-sync")();

const cupom = prompt("Digite o cupom:");

if (cupom === "DESC10") {
  console.log("Cupom válido! 10% de desconto.");
} else {
  console.log("Cupom inválido.");
}
