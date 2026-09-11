const prompt = require("prompt-sync")();

const pontos = Number(prompt("Pontos acumulados:"));

if (pontos >= 100) {
  console.log("Você ganhou um brinde!");
} else {
  const faltam = 100 - pontos;
  console.log("Faltam " + faltam + " pontos para o brinde.");
}
