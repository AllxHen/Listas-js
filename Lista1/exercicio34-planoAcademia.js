const prompt = require("prompt-sync")();

const plano = prompt("Escolha o plano (mensal/anual):");

if (plano === "anual") {
  console.log("Valor: R$ 100 por mês");
} else {
  console.log("Valor: R$ 120 por mês");
}
