const prompt = require("prompt-sync")();

const idade = Number(prompt("Sua idade:"));
const convite = prompt("Tem convite? (sim/nao):");

if (idade >= 18 && convite === "sim") {
  console.log("Pode entrar!");
} else {
  console.log("Entrada negada.");
}
