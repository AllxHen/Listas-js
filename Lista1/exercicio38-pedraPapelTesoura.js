const prompt = require("prompt-sync")();

const p1 = prompt("Jogador 1 (pedra/papel/tesoura):");
const p2 = prompt("Jogador 2 (pedra/papel/tesoura):");

if (p1 === p2) {
  console.log("Empate!");
} else {
  console.log("Jogada registrada!");
}
