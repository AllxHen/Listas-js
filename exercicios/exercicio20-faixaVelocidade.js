const prompt = require("prompt-sync")();

const vel = Number(prompt("Velocidade:"));

if (vel > 80) {
  console.log("Acima do limite!");
} else {
  console.log("Dentro do limite.");
}
