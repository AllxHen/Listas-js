const prompt = require("prompt-sync")();

const n1 = Number(prompt("Número 1:"));
const n2 = Number(prompt("Número 2:"));
const op = prompt("Operação (+ ou -):");

if (op === "+") {
  const soma = n1 + n2;
  console.log("Resultado: " + soma);
} else {
  const sub = n1 - n2;
  console.log("Resultado: " + sub);
}
