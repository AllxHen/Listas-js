const prompt = require("prompt-sync")();

const hora = Number(prompt("Hora atual (0-23):"));

if (hora >= 14 && hora <= 16) {
  console.log("Promoção ativa!");
} else {
  console.log("Fora do horário da promoção.");
}
