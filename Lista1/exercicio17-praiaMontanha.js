const prompt = require("prompt-sync")();

const clima = prompt("Está sol ou chuva?");

if (clima === "sol") {
  console.log("Vamos para a praia!");
} else {
  console.log("Vamos para a montanha!");
}
