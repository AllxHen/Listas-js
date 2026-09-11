const prompt = require("prompt-sync")();

let numero = Number(prompt("Qual número quer a tabuada?"));

for (let contadora = 1; contadora <= 10; contadora++) {
  let resultado = numero * contadora;
  if (resultado % 2 === 0) {
    console.log(numero + " x " + contadora + " = " + resultado);
  }
}