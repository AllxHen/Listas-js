const prompt = require("prompt-sync")();

const vidas = Number(prompt("Quantidade de vidas:"));

if (vidas > 0) {
  console.log("Personagem vivo!");
} else {
  console.log("Game Over!");
}
