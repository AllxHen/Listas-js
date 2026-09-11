const prompt = require("prompt-sync")();

const idade = Number(prompt("Sua idade:"));
const censura = Number(prompt("Censura do filme:"));

if (idade >= censura) {
  console.log("Entrada liberada!");
} else {
  console.log("Entrada bloqueada.");
}
